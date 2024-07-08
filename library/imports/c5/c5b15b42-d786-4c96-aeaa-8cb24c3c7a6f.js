"use strict";
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