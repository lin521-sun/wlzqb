"use strict";
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