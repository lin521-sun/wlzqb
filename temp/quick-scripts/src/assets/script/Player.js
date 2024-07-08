"use strict";
cc._RF.push(module, '32b2c8K0k9PwqUU5AtOXtgS', 'Player');
// script/Player.ts

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
var Enum_1 = require("./Enum");
// Created by carolsail 
var DataManager_1 = require("./manager/DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = Enum_1.ENUM_PLAYER_STATUS.IDLE;
        _this.spriteFrameArr = [];
        _this.ballNode = null;
        _this.circleNode = null;
        return _this;
    }
    Player.prototype.init = function (data) {
        if (this.spriteFrameArr.length <= 0)
            return;
        Object.assign(this, data);
        DataManager_1.default.instance.blues.push(this);
        this.rendor();
    };
    /**
     * 渲染节点的状态和位置。
     *
     * 本函数负责更新节点的状态，并将其设置到指定的位置和角度。它不接受任何参数，也没有返回值。
     * 主要用于在每次渲染周期中更新节点的视觉表现，确保节点的状态与数据模型保持一致。
     */
    Player.prototype.rendor = function () {
        this.setStatus(this.status);
        this.node.setPosition(this.x, this.y);
        this.node.angle = -this.angle;
    };
    /**
     * 将节点转向目标位置。
     * 此函数计算当前节点到目标位置(x, y)的角度，并将节点的角度调整为面向目标位置。
     * 它使用了数学中的反正切函数来计算角度，然后将角度转换为度数，并调整为顺时针旋转的度数。
     *
     * @param {number} x - 目标位置的x坐标，默认为0。
     * @param {number} y - 目标位置的y坐标，默认为0。
     */
    Player.prototype.turnTo = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var r = Math.atan2(y - this.y, x - this.x);
        var degree = r * 180 / Math.PI;
        degree = 360 - degree;
        this.node.angle = -degree;
    };
    /**
     * 设置玩家状态。
     * @param status 玩家状态，使用ENUM_PLAYER_STATUS枚举值。
     */
    Player.prototype.setStatus = function (status) {
        this.status = status;
        var sprite = this.node.getComponent(cc.Sprite);
        if (this.status == Enum_1.ENUM_PLAYER_STATUS.IDLE) {
            sprite.spriteFrame = this.spriteFrameArr[0];
            this.ballNode.active = false;
        }
        else if (this.status == Enum_1.ENUM_PLAYER_STATUS.READY) {
            sprite.spriteFrame = this.spriteFrameArr[0];
            this.ballNode.active = true;
        }
        else if (this.status == Enum_1.ENUM_PLAYER_STATUS.SHOOTING) {
            sprite.spriteFrame = this.spriteFrameArr[1];
            this.ballNode.active = false;
        }
    };
    /**
     * 设置圆圈节点的激活状态。
     *
     * 此方法用于根据传入的布尔值，激活或停用一个圆圈节点。激活状态通常用于表示某个元素是否可用
     * 或是否被选中。通过修改圆圈节点的active属性，可以改变其在用户界面中的表现，例如改变颜色或形状。
     *
     * @param status 布尔值，指示圆圈节点是否应该被激活。true表示激活，false表示停用。
     */
    Player.prototype.setCircleActive = function (status) {
        this.circleNode.active = status;
    };
    /**
     * 玩家角色触发的特效播放函数。
     * 本函数旨在寻找名为'Effect'的子节点，该节点通常包含一个粒子系统组件，
     * 用于播放各种视觉特效，如爆炸、火焰等。找到该节点后，将调用粒子系统的
     * resetSystem方法来重置并启动特效播放。
     *
     * 注意：由于使用了可选链操作符(?.)，如果节点或组件不存在，函数将安全地返回，
     * 而不会抛出错误或中断执行。
     */
    Player.prototype.playEffect = function () {
        var _a, _b;
        (_b = (_a = this.node) === null || _a === void 0 ? void 0 : _a.getChildByName('Effect')) === null || _b === void 0 ? void 0 : _b.getComponent(cc.ParticleSystem).resetSystem();
    };
    __decorate([
        property([cc.SpriteFrame])
    ], Player.prototype, "spriteFrameArr", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "ballNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "circleNode", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();