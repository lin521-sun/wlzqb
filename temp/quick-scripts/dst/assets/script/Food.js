
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5b15tC14ZMlq6qjLJMPHpv', 'Food');
// script/Food.ts

"use strict";
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
var StaticInstance_1 = require("./StaticInstance");
var Enum_1 = require("./Enum");
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
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
        return _this;
    }
    Food.prototype.init = function (data) {
        Object.assign(this, data);
        DataManager_1.default.instance.foods.push(this);
        this.rendor();
    };
    Food.prototype.rendor = function () {
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
    Food.prototype.setParent = function (blue) {
        this.blue = blue;
    };
    Food.prototype.setSpeed = function (speed) {
        this.speed = speed;
        if (speed == 0) {
            this.unscheduleAllCallbacks();
        }
    };
    Food.prototype.playEffect = function () {
        var _a, _b;
        (_b = (_a = this.node) === null || _a === void 0 ? void 0 : _a.getChildByName('Effect')) === null || _b === void 0 ? void 0 : _b.getComponent(cc.ParticleSystem).resetSystem();
    };
    /**
     * 根据指定的时间间隔和移动方向更新物体的位置。
     * @param dt 时间间隔，用于计算物体在该时间段内的位移。
     */
    Food.prototype.move = function (dt) {
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
     * 让节点沿圆形路径移动。
     * 此函数通过计算新的位置和角度，更新节点在圆形路径上的位置。
     * 它使用数学库中的三角函数来根据当前的弧度和速度计算新的x和y坐标。
     * @param dt 时间间隔，用于计算弧度的增加量。
     */
    Food.prototype.circleMove = function (dt) {
        // 先计算弧度
        this.radian += dt * (this.speed / 100);
        var x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
        var y = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
        this.node.position = cc.v3(x, y, 0);
        // Math.atan2 反正切函数 返回从X轴到某个点的角度（以弧度为单位）。
        var angle = Math.atan2(y, x) / (Math.PI / 180);
        this.node.angle = angle;
    };
    /**
 * 当检测到碰撞事件发生时的处理函数。
 * @param other 另一个碰撞器，用于判断是否与特定标签的物体发生碰撞。
 * @param self 自身的碰撞器，用于判断自身是否属于特定标签。
 *
 * 该函数在碰撞检测到特定对象时触发，执行相应的逻辑操作，如播放音效、禁用当前节点、
 * 更新数据管理器中的状态等。这些操作基于碰撞的对象标签（如球或食物）进行。
 */
    // 碰撞检测
    Food.prototype.onCollisionEnter = function (other, self) {
        // 跟球做碰撞
        if (other.tag == Enum_1.ENUM_COLLIDER_TAG.BALL) {
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.COLLECT);
            self.node.active = false;
            if (self.tag == Enum_1.ENUM_COLLIDER_TAG.FOOD) {
                // console.log('食物补充能量')
                if (DataManager_1.default.instance.powerEffectLoop <= 0) {
                    DataManager_1.default.instance.foodEffectLoop = 1;
                    DataManager_1.default.instance.powerCount = DataManager_1.default.instance.powerCountTarget;
                    StaticInstance_1.StaticInstance.uiManager.setPowerBar();
                }
            }
        }
    };
    Food = __decorate([
        ccclass
    ], Food);
    return Food;
}(cc.Component));
exports.default = Food;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDLFVBQVUsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQTtvQkFDdkUsK0JBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7aUJBQ3pDO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUF4SGdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F5SHhCO0lBQUQsV0FBQztDQXpIRCxBQXlIQyxDQXpIaUMsRUFBRSxDQUFDLFNBQVMsR0F5SDdDO2tCQXpIb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi9TdGF0aWNJbnN0YW5jZSc7XHJcbi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IEJhbGwgZnJvbSBcIi4vQmFsbFwiO1xyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fQ09MTElERVJfVEFHLCBFTlVNX0VORU1ZX1NUQVRVUywgRU5VTV9HQU1FX0VWRU5UIH0gZnJvbSBcIi4vRW51bVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9FdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHg6IG51bWJlclxyXG4gICAgeTogbnVtYmVyXHJcbiAgICBhbmdsZTogbnVtYmVyXHJcbiAgICBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTID0gRU5VTV9FTkVNWV9TVEFUVVMuSURMRVxyXG4gICAgLy8g6L+Q5Yqo5Y+C5pWwXHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwXHJcbiAgICAvLyDov5DliqjkvY3np7so6ZKI5a+55rC05bmz6L+Q5YqoKVxyXG4gICAgZGlzdGFuY2U6IG51bWJlciA9IDUwMFxyXG4gICAgdGVtcERpczogbnVtYmVyID0gMFxyXG4gICAgLy8g56e75Yqo5pa55ZCRKOmSiOWvueawtOW5s+i/kOWKqClcclxuICAgIGlzRGlyWDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICAvLyDnp7vliqjmlrnlkJFcclxuICAgIGRpcjogbnVtYmVyID0gMVxyXG4gICAgLy8g5byn5bqmKOmSiOWvueWchuWRqOi/kOWKqClcclxuICAgIHJhZGlhbjogbnVtYmVyID0gMFxyXG4gICAgLy8g5Y2K5b6EKOmSiOWvueWchuWRqOi/kOWKqClcclxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyID0gMjUwXHJcbiAgICAvLyDlnIblv4Mo6ZKI5a+55ZyG5ZGo6L+Q5YqoKVxyXG4gICAgY2lyY2xlQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgIC8vIOWFtueItui/m+aUu+aWuVxyXG4gICAgYmx1ZTogUGxheWVyID0gbnVsbFxyXG5cclxuICAgIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RzLnB1c2godGhpcylcclxuICAgICAgICB0aGlzLnJlbmRvcigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSlcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtdGhpcy5hbmdsZVxyXG4gICAgICAgIC8vIOebtOe6v+enu+WKqFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5tb3ZlLCAwLjAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQpIHtcclxuICAgICAgICAgICAgLy8g6K6h566X5ZyG5b+DXHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQ2VudGVyLnggPSB0aGlzLmJsdWUueFxyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUNlbnRlci55ID0gdGhpcy5ibHVlLnlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNpcmNsZU1vdmUsIDAuMDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJlbnQoYmx1ZTogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5ibHVlID0gYmx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHNwZWVkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWRcclxuICAgICAgICBpZiAoc3BlZWQgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5RWZmZWN0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZT8uZ2V0Q2hpbGRCeU5hbWUoJ0VmZmVjdCcpPy5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnJlc2V0U3lzdGVtKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5oyH5a6a55qE5pe26Ze06Ze06ZqU5ZKM56e75Yqo5pa55ZCR5pu05paw54mp5L2T55qE5L2N572u44CCXHJcbiAgICAgKiBAcGFyYW0gZHQg5pe26Ze06Ze06ZqU77yM55So5LqO6K6h566X54mp5L2T5Zyo6K+l5pe26Ze05q615YaF55qE5L2N56e744CCXHJcbiAgICAgKi9cclxuICAgIG1vdmUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlyWCkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBEaXMgKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcERpcyA+IHRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gLTFcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlbXBEaXMgPCAtdGhpcy5kaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBEaXMgKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcERpcyA+IHRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gLTFcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlbXBEaXMgPCAtdGhpcy5kaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuqeiKgueCueayv+WchuW9oui3r+W+hOenu+WKqOOAglxyXG4gICAgICog5q2k5Ye95pWw6YCa6L+H6K6h566X5paw55qE5L2N572u5ZKM6KeS5bqm77yM5pu05paw6IqC54K55Zyo5ZyG5b2i6Lev5b6E5LiK55qE5L2N572u44CCXHJcbiAgICAgKiDlroPkvb/nlKjmlbDlrablupPkuK3nmoTkuInop5Llh73mlbDmnaXmoLnmja7lvZPliY3nmoTlvKfluqblkozpgJ/luqborqHnrpfmlrDnmoR45ZKMeeWdkOagh+OAglxyXG4gICAgICogQHBhcmFtIGR0IOaXtumXtOmXtOmalO+8jOeUqOS6juiuoeeul+W8p+W6pueahOWinuWKoOmHj+OAglxyXG4gICAgICovXHJcbiAgICBjaXJjbGVNb3ZlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyDlhYjorqHnrpflvKfluqZcclxuICAgICAgICB0aGlzLnJhZGlhbiArPSBkdCAqICh0aGlzLnNwZWVkIC8gMTAwKTtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5jb3ModGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5zaW4odGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh4LCB5LCAwKTtcclxuICAgICAgICAvLyBNYXRoLmF0YW4yIOWPjeato+WIh+WHveaVsCDov5Tlm57ku45Y6L205Yiw5p+Q5Liq54K555qE6KeS5bqm77yI5Lul5byn5bqm5Li65Y2V5L2N77yJ44CCXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KSAvIChNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICog5b2T5qOA5rWL5Yiw56Kw5pKe5LqL5Lu25Y+R55Sf5pe255qE5aSE55CG5Ye95pWw44CCXHJcbiAqIEBwYXJhbSBvdGhlciDlj6bkuIDkuKrnorDmkp7lmajvvIznlKjkuo7liKTmlq3mmK/lkKbkuI7nibnlrprmoIfnrb7nmoTniankvZPlj5HnlJ/norDmkp7jgIJcclxuICogQHBhcmFtIHNlbGYg6Ieq6Lqr55qE56Kw5pKe5Zmo77yM55So5LqO5Yik5pat6Ieq6Lqr5piv5ZCm5bGe5LqO54m55a6a5qCH562+44CCXHJcbiAqIFxyXG4gKiDor6Xlh73mlbDlnKjnorDmkp7mo4DmtYvliLDnibnlrprlr7nosaHml7bop6blj5HvvIzmiafooYznm7jlupTnmoTpgLvovpHmk43kvZzvvIzlpoLmkq3mlL7pn7PmlYjjgIHnpoHnlKjlvZPliY3oioLngrnjgIFcclxuICog5pu05paw5pWw5o2u566h55CG5Zmo5Lit55qE54q25oCB562J44CC6L+Z5Lqb5pON5L2c5Z+65LqO56Kw5pKe55qE5a+56LGh5qCH562+77yI5aaC55CD5oiW6aOf54mp77yJ6L+b6KGM44CCXHJcbiAqL1xyXG4gICAgLy8g56Kw5pKe5qOA5rWLXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Cb3hDb2xsaWRlciwgc2VsZjogY2MuQm94Q29sbGlkZXIpIHtcclxuICAgICAgICAvLyDot5/nkIPlgZrnorDmkp5cclxuICAgICAgICBpZiAob3RoZXIudGFnID09IEVOVU1fQ09MTElERVJfVEFHLkJBTEwpIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ09MTEVDVClcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmIChzZWxmLnRhZyA9PSBFTlVNX0NPTExJREVSX1RBRy5GT09EKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6aOf54mp6KGl5YWF6IO96YePJylcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckVmZmVjdExvb3AgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RFZmZlY3RMb29wID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldFBvd2VyQmFyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=