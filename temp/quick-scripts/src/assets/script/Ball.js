"use strict";
cc._RF.push(module, 'ec912nHvPNB/pYgN9JyOtzu', 'Ball');
// script/Ball.ts

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
var Player_1 = require("./Player");
var StaticInstance_1 = require("./StaticInstance");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 3000;
        _this.speedMin = 300;
        return _this;
    }
    Ball.prototype.init = function (data) {
        Object.assign(this, data);
        this.rendor();
    };
    Ball.prototype.rendor = function () {
        this.node.setPosition(this.x, this.y);
    };
    /**
     * 控制足球移动的函数
     * @param start 发起移动的球员
     * @param end 移动的终点，可能是另一名球员或终点
     * @param progress 移动的进度，用于计算移动速度和触发不同阶段的事件
     */
    Ball.prototype.move = function (start, end, progress) {
        var _this = this;
        // 踢球状态
        start.setStatus(Enum_1.ENUM_PLAYER_STATUS.SHOOTING);
        start.playEffect();
        this.node.getChildByName('Shield').active = DataManager_1.default.instance.powerCount >= DataManager_1.default.instance.powerCountTarget;
        var spos = start.node.getPosition();
        var epos = end.node.getPosition();
        var distance = spos.sub(epos).mag();
        var moveSpeed = this.speed * progress;
        if (progress >= 0.5 && progress <= 0.7) {
            moveSpeed = this.speed * 0.5;
        }
        else if (progress < 0.5 && progress >= 0) {
            // 满能量
            if (DataManager_1.default.instance.powerCount == DataManager_1.default.instance.powerCountTarget) {
                moveSpeed = this.speed;
            }
            else {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.BOO);
                moveSpeed = this.speedMin;
            }
        }
        var moveTime = distance / moveSpeed;
        cc.tween(this.node).to(moveTime, { position: cc.v3(epos.x, epos.y, 0) }).call(function () {
            // 接球音效
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CATCH);
            // 移动足球销毁
            _this.node.destroy();
            // 回待机状态
            start.setStatus(Enum_1.ENUM_PLAYER_STATUS.IDLE);
            if (end instanceof Player_1.default) {
                // 进持球状态
                end.setStatus(Enum_1.ENUM_PLAYER_STATUS.READY);
                end.setCircleActive(false);
                var x = 0, y = 0;
                var next = DataManager_1.default.instance.getBlueNext();
                if (next) {
                    x = next.x;
                    y = next.y;
                    next.turnTo(end.x, end.y);
                    next.setCircleActive(true);
                    // 移动相机
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: next });
                }
                else {
                    var endpoint = DataManager_1.default.instance.getEndpoint();
                    x = endpoint.x;
                    y = endpoint.y;
                    // 移动相机
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: endpoint });
                }
                end.turnTo(x, y);
                // 接球效果
                if (progress > 0.7 && progress <= 1)
                    end.playEffect();
            }
            else {
                // 球门显示足球
                end.setBallActive(true);
            }
            // 判断能量槽情况，游戏状态切换
            if (DataManager_1.default.instance.status === Enum_1.ENUM_GAME_STATUS.SHOOTING) {
                DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.RUNING;
                // 技能饮品
                if (DataManager_1.default.instance.powerEffectLoop <= 0) {
                    // 增益食物
                    if (DataManager_1.default.instance.foodEffectLoop <= 0) {
                        DataManager_1.default.instance.powerCount += 1;
                        if (DataManager_1.default.instance.powerCount > DataManager_1.default.instance.powerCountTarget) {
                            DataManager_1.default.instance.powerCount = 0;
                        }
                        StaticInstance_1.StaticInstance.uiManager.setPowerBar();
                    }
                    else {
                        DataManager_1.default.instance.foodEffectLoop -= 1;
                    }
                }
                else {
                    DataManager_1.default.instance.powerEffectLoop -= 1;
                }
                if (DataManager_1.default.instance.powerCount == DataManager_1.default.instance.powerCountTarget) {
                    StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('必杀技');
                    StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                    AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SKILL);
                }
            }
            // 音效
            if (progress > 0.7 && progress <= 0.8) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('好球');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GOOD);
            }
            else if (progress > 0.8 && progress <= 0.85) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('漂亮');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GREAT);
            }
            else if (progress > 0.85 && progress <= 0.9) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('哇~');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.EXCELLENT);
            }
            else if (progress > 0.9 && progress <= 0.95) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('牛牛牛');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.AMAZING);
            }
            else if (progress > 0.95 && progress <= 1) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('世界波');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.UNBELIEVABLE);
            }
        }).start();
    };
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

cc._RF.pop();