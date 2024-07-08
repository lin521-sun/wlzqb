
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '300caQwqn9CLp9cuBTzRefJ', 'Enemy');
// script/Enemy.ts

"use strict";
// Created by carolsail 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("./Enum");
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var EventManager_1 = require("./manager/EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = Enum_1.ENUM_ENEMY_STATUS.IDLE;
        // 运动参数
        _this.speed = 200;
        // 运动位移(针对水平运动)
        _this.distance = 500;
        _this.tempDis = 0;
        // 移动方向(针对水平运动)
        _this.isDirX = false;
        // 移动方向
        _this.dir = 1;
        // 弧度(针对圆周运动)
        _this.radian = 0;
        // 半径(针对圆周运动)
        _this.circleRadius = 250;
        // 圆心(针对圆周运动)
        _this.circleCenter = cc.v2(0, 0);
        // 其父进攻方
        _this.blue = null;
        _this.spriteFrameArr = [];
        _this.ballNode = null;
        _this.circleNode = null;
        return _this;
    }
    Enemy_1 = Enemy;
    Enemy.prototype.init = function (data) {
        if (this.spriteFrameArr.length <= 0)
            return;
        Object.assign(this, data);
        DataManager_1.default.instance.reds.push(this);
        this.unscheduleAllCallbacks();
        this.tempDis = 0;
        this.rendor();
    };
    Enemy.prototype.rendor = function () {
        var current = DataManager_1.default.instance.level - 1;
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrameArr[current];
        this.node.setPosition(this.x, this.y);
        this.node.angle = -this.angle;
        // 直线移动
        if (this.status == Enum_1.ENUM_ENEMY_STATUS.MOVE) {
            this.schedule(this.move, 0.01);
        }
        else if (this.status == Enum_1.ENUM_ENEMY_STATUS.ROUND) {
            // 计算圆心
            this.circleCenter.x = this.blue.x;
            this.circleCenter.y = this.blue.y;
            this.schedule(this.circleMove, 0.01);
        }
    };
    Enemy.prototype.setBallActive = function (status) {
        this.ballNode.active = status;
    };
    Enemy.prototype.setCircleActive = function (status) {
        this.circleNode.color = cc.color(245, 103, 103, 255);
        this.circleNode.active = status;
    };
    Enemy.prototype.setParent = function (blue) {
        this.blue = blue;
    };
    Enemy.prototype.setSpeed = function (speed) {
        this.speed = speed;
        if (speed == 0) {
            this.unscheduleAllCallbacks();
        }
    };
    Enemy.prototype.playEffect = function () {
        var _a, _b;
        (_b = (_a = this.node) === null || _a === void 0 ? void 0 : _a.getChildByName('Effect')) === null || _b === void 0 ? void 0 : _b.getComponent(cc.ParticleSystem).resetSystem();
    };
    /**
     * 实现物体的移动功能。
     * 此函数主要负责根据物体的当前状态（方向、速度、距离）更新物体的位置。
     * 移动是基于固定的时间步长（dt）进行的，物体在X轴或Y轴上移动取决于isDirX的值。
     * 当物体移动的距离超过预设的距离时，物体的方向会发生反转，以实现往复运动的效果。
     */
    Enemy.prototype.move = function () {
        var dt = 0.016;
        if (this.isDirX) {
            this.tempDis += dt * this.speed * this.dir;
            if (this.tempDis > this.distance) {
                this.dir = -1;
            }
            else if (this.tempDis < -this.distance) {
                this.dir = 1;
            }
            this.node.x += dt * this.speed * this.dir;
        }
        else {
            this.tempDis += dt * this.speed * this.dir;
            if (this.tempDis > this.distance) {
                this.dir = -1;
            }
            else if (this.tempDis < -this.distance) {
                this.dir = 1;
            }
            this.node.y += dt * this.speed * this.dir;
        }
    };
    /**
     * 使节点沿圆形路径移动。
     * @param dt 时间间隔，用于计算位移。
     */
    Enemy.prototype.circleMove = function (dt) {
        // 顺逆时针
        var dir = 1;
        if (!this.isDirX)
            dir = -1;
        // 先计算弧度
        this.radian += dt * (this.speed / 100) * dir;
        var x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
        var y = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
        this.node.position = cc.v3(x, y, 0);
        // Math.atan2 反正切函数 返回从X轴到某个点的角度（以弧度为单位）。
        var angle = Math.atan2(y, x) / (Math.PI / 180);
        this.node.angle = angle;
    };
    /**
     * 当检测到碰撞事件发生时的处理函数。
     * @param other 另一个碰撞器，可能是球体。
     * @param self 自身的碰撞器，表示敌人的碰撞器。
     *
     * 此函数在敌人的碰撞器与球体碰撞时被调用，根据碰撞的情况执行不同的逻辑，
     * 如播放振动效果、改变敌人状态、结束游戏等。
     */
    // 碰撞检测
    Enemy.prototype.onCollisionEnter = function (other, self) {
        // 跟球做碰撞
        if (other.tag == Enum_1.ENUM_COLLIDER_TAG.BALL) {
            if (DataManager_1.default.instance.vibrate) {
                EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_VIBRATE);
            }
            // 是否必杀状态
            if (other.node.getChildByName('Shield').active) {
                // 击破防守员
                this.setSpeed(0);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.DIE);
                self.node.getComponent(Enemy_1).status = Enum_1.ENUM_ENEMY_STATUS.DIE;
                self.node.getComponent(cc.Animation).play();
            }
            else {
                if (self.node.getComponent(Enemy_1).status == Enum_1.ENUM_ENEMY_STATUS.DIE)
                    return;
                // 拦截游戏结束
                other.node.active = false;
                this.setSpeed(0);
                this.playEffect();
                this.setBallActive(true);
                EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_LOSE);
            }
        }
    };
    var Enemy_1;
    __decorate([
        property([cc.SpriteFrame])
    ], Enemy.prototype, "spriteFrameArr", void 0);
    __decorate([
        property(cc.Node)
    ], Enemy.prototype, "ballNode", void 0);
    __decorate([
        property(cc.Node)
    ], Enemy.prototype, "circleNode", void 0);
    Enemy = Enemy_1 = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHeEIsK0JBQWdHO0FBQ2hHLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsdURBQWtEO0FBSTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBNkpDO1FBekpHLFlBQU0sR0FBc0Isd0JBQWlCLENBQUMsSUFBSSxDQUFBO1FBQ2xELE9BQU87UUFDUCxXQUFLLEdBQVcsR0FBRyxDQUFBO1FBQ25CLGVBQWU7UUFDZixjQUFRLEdBQVcsR0FBRyxDQUFBO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUE7UUFDbkIsZUFBZTtRQUNmLFlBQU0sR0FBWSxLQUFLLENBQUE7UUFDdkIsT0FBTztRQUNQLFNBQUcsR0FBVyxDQUFDLENBQUE7UUFDZixhQUFhO1FBQ2IsWUFBTSxHQUFXLENBQUMsQ0FBQTtRQUNsQixhQUFhO1FBQ2Isa0JBQVksR0FBVyxHQUFHLENBQUE7UUFDMUIsYUFBYTtRQUNiLGtCQUFZLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDbkMsUUFBUTtRQUNSLFVBQUksR0FBVyxJQUFJLENBQUE7UUFHbkIsb0JBQWMsR0FBcUIsRUFBRSxDQUFBO1FBRXJDLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7O0lBaUk5QixDQUFDO2NBN0pvQixLQUFLO0lBOEJ0QixvQkFBSSxHQUFKLFVBQUssSUFBUztRQUNWLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU07UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxD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SUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO2FBQzlDO2lCQUFNO2dCQUNILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLHdCQUFpQixDQUFDLEdBQUc7b0JBQUUsT0FBTTtnQkFDekUsU0FBUztnQkFDVCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEIsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDeEQ7U0FDSjtJQUNMLENBQUM7O0lBcElEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lEQUNVO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUTtJQTVCVCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNkp6QjtJQUFELFlBQUM7Q0E3SkQsQUE2SkMsQ0E3SmtDLEVBQUUsQ0FBQyxTQUFTLEdBNko5QztrQkE3Sm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbCBcclxuXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0NPTExJREVSX1RBRywgRU5VTV9FTkVNWV9TVEFUVVMsIEVOVU1fR0FNRV9FVkVOVCB9IGZyb20gXCIuL0VudW1cIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4vU3RhdGljSW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgYW5nbGU6IG51bWJlclxyXG4gICAgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUyA9IEVOVU1fRU5FTVlfU1RBVFVTLklETEVcclxuICAgIC8vIOi/kOWKqOWPguaVsFxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMFxyXG4gICAgLy8g6L+Q5Yqo5L2N56e7KOmSiOWvueawtOW5s+i/kOWKqClcclxuICAgIGRpc3RhbmNlOiBudW1iZXIgPSA1MDBcclxuICAgIHRlbXBEaXM6IG51bWJlciA9IDBcclxuICAgIC8vIOenu+WKqOaWueWQkSjpkojlr7nmsLTlubPov5DliqgpXHJcbiAgICBpc0Rpclg6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgLy8g56e75Yqo5pa55ZCRXHJcbiAgICBkaXI6IG51bWJlciA9IDFcclxuICAgIC8vIOW8p+W6pijpkojlr7nlnIblkajov5DliqgpXHJcbiAgICByYWRpYW46IG51bWJlciA9IDBcclxuICAgIC8vIOWNiuW+hCjpkojlr7nlnIblkajov5DliqgpXHJcbiAgICBjaXJjbGVSYWRpdXM6IG51bWJlciA9IDI1MFxyXG4gICAgLy8g5ZyG5b+DKOmSiOWvueWchuWRqOi/kOWKqClcclxuICAgIGNpcmNsZUNlbnRlcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICAvLyDlhbbniLbov5vmlLvmlrlcclxuICAgIGJsdWU6IFBsYXllciA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNwcml0ZUZyYW1lQXJyOiBjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFsbE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNpcmNsZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGVGcmFtZUFyci5sZW5ndGggPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMucHVzaCh0aGlzKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy50ZW1wRGlzID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRvcigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgLSAxXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycltjdXJyZW50XVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSlcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtdGhpcy5hbmdsZVxyXG4gICAgICAgIC8vIOebtOe6v+enu+WKqFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5tb3ZlLCAwLjAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQpIHtcclxuICAgICAgICAgICAgLy8g6K6h566X5ZyG5b+DXHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQ2VudGVyLnggPSB0aGlzLmJsdWUueFxyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUNlbnRlci55ID0gdGhpcy5ibHVlLnlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNpcmNsZU1vdmUsIDAuMDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRCYWxsQWN0aXZlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYmFsbE5vZGUuYWN0aXZlID0gc3RhdHVzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2lyY2xlQWN0aXZlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTm9kZS5jb2xvciA9IGNjLmNvbG9yKDI0NSwgMTAzLCAxMDMsIDI1NSlcclxuICAgICAgICB0aGlzLmNpcmNsZU5vZGUuYWN0aXZlID0gc3RhdHVzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFyZW50KGJsdWU6IFBsYXllcikge1xyXG4gICAgICAgIHRoaXMuYmx1ZSA9IGJsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkXHJcbiAgICAgICAgaWYgKHNwZWVkID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUVmZmVjdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGU/LmdldENoaWxkQnlOYW1lKCdFZmZlY3QnKT8uZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5yZXNldFN5c3RlbSgpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWunueOsOeJqeS9k+eahOenu+WKqOWKn+iDveOAglxyXG4gICAgICog5q2k5Ye95pWw5Li76KaB6LSf6LSj5qC55o2u54mp5L2T55qE5b2T5YmN54q25oCB77yI5pa55ZCR44CB6YCf5bqm44CB6Led56a777yJ5pu05paw54mp5L2T55qE5L2N572u44CCXHJcbiAgICAgKiDnp7vliqjmmK/ln7rkuo7lm7rlrprnmoTml7bpl7TmraXplb/vvIhkdO+8iei/m+ihjOeahO+8jOeJqeS9k+WcqFjovbTmiJZZ6L205LiK56e75Yqo5Y+W5Yaz5LqOaXNEaXJY55qE5YC844CCXHJcbiAgICAgKiDlvZPniankvZPnp7vliqjnmoTot53nprvotoXov4fpooTorr7nmoTot53nprvml7bvvIzniankvZPnmoTmlrnlkJHkvJrlj5HnlJ/lj43ovazvvIzku6Xlrp7njrDlvoDlpI3ov5DliqjnmoTmlYjmnpzjgIJcclxuICAgICAqL1xyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSAwLjAxNjtcclxuICAgICAgICBpZiAodGhpcy5pc0RpclgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wRGlzICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBEaXMgPiB0aGlzLmRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IC0xXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZW1wRGlzIDwgLXRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wRGlzICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBEaXMgPiB0aGlzLmRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IC0xXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZW1wRGlzIDwgLXRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkvb/oioLngrnmsr/lnIblvaLot6/lvoTnp7vliqjjgIJcclxuICAgICAqIEBwYXJhbSBkdCDml7bpl7Tpl7TpmpTvvIznlKjkuo7orqHnrpfkvY3np7vjgIJcclxuICAgICAqL1xyXG4gICAgY2lyY2xlTW92ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8g6aG66YCG5pe26ZKIXHJcbiAgICAgICAgbGV0IGRpciA9IDFcclxuICAgICAgICBpZiAoIXRoaXMuaXNEaXJYKSBkaXIgPSAtMVxyXG5cclxuICAgICAgICAvLyDlhYjorqHnrpflvKfluqZcclxuICAgICAgICB0aGlzLnJhZGlhbiArPSBkdCAqICh0aGlzLnNwZWVkIC8gMTAwKSAqIGRpcjtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5jb3ModGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5zaW4odGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh4LCB5LCAwKTtcclxuICAgICAgICAvLyBNYXRoLmF0YW4yIOWPjeato+WIh+WHveaVsCDov5Tlm57ku45Y6L205Yiw5p+Q5Liq54K555qE6KeS5bqm77yI5Lul5byn5bqm5Li65Y2V5L2N77yJ44CCXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KSAvIChNYXRoLlBJIC8gMTgwKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPmo4DmtYvliLDnorDmkp7kuovku7blj5HnlJ/ml7bnmoTlpITnkIblh73mlbDjgIJcclxuICAgICAqIEBwYXJhbSBvdGhlciDlj6bkuIDkuKrnorDmkp7lmajvvIzlj6/og73mmK/nkIPkvZPjgIJcclxuICAgICAqIEBwYXJhbSBzZWxmIOiHqui6q+eahOeisOaSnuWZqO+8jOihqOekuuaVjOS6uueahOeisOaSnuWZqOOAglxyXG4gICAgICogXHJcbiAgICAgKiDmraTlh73mlbDlnKjmlYzkurrnmoTnorDmkp7lmajkuI7nkIPkvZPnorDmkp7ml7booqvosIPnlKjvvIzmoLnmja7norDmkp7nmoTmg4XlhrXmiafooYzkuI3lkIznmoTpgLvovpHvvIxcclxuICAgICAqIOWmguaSreaUvuaMr+WKqOaViOaenOOAgeaUueWPmOaVjOS6uueKtuaAgeOAgee7k+adn+a4uOaIj+etieOAglxyXG4gICAgICovXHJcbiAgICAvLyDnorDmkp7mo4DmtYtcclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkJveENvbGxpZGVyLCBzZWxmOiBjYy5Cb3hDb2xsaWRlcikge1xyXG4gICAgICAgIC8vIOi3n+eQg+WBmueisOaSnlxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gRU5VTV9DT0xMSURFUl9UQUcuQkFMTCkge1xyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UudmlicmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULkdBTUVfVklCUkFURSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5piv5ZCm5b+F5p2A54q25oCBXHJcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLmdldENoaWxkQnlOYW1lKCdTaGllbGQnKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWHu+egtOmYsuWuiOWRmFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTcGVlZCgwKVxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuRElFKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChFbmVteSkuc3RhdHVzID0gRU5VTV9FTkVNWV9TVEFUVVMuRElFXHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5ub2RlLmdldENvbXBvbmVudChFbmVteSkuc3RhdHVzID09IEVOVU1fRU5FTVlfU1RBVFVTLkRJRSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAvLyDmi6bmiKrmuLjmiI/nu5PmnZ9cclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3BlZWQoMClcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUVmZmVjdCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJhbGxBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5HQU1FX0xPU0UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=