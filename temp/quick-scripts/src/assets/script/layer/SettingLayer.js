"use strict";
cc._RF.push(module, 'eda224K5PpC4bGab1R/H3j8', 'SettingLayer');
// script/layer/SettingLayer.ts

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
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("./../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var Baselayer_1 = require("./Baselayer");
var DataManager_1 = require("../manager/DataManager");
var EventManager_1 = require("../manager/EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SettingLayer = /** @class */ (function (_super) {
    __extends(SettingLayer, _super);
    function SettingLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.musicNode = null;
        _this.soundNode = null;
        _this.vibrateNode = null;
        _this.gamemusicNode = null;
        _this.gamesoundNode = null;
        _this.gamevibrateNode = null;
        _this.mainSettingNode = null;
        _this.gameSettingNode = null;
        return _this;
    }
    SettingLayer.prototype.onEnable = function () {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.RENDOR_HOME_BTN, this.setHomeBtn, this);
        this.rendorMusic();
        this.rendorSound();
        this.rendorVibrate();
        // 游戏中调起setting的时候要暂停timer
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_STOP);
    };
    SettingLayer.prototype.onDisable = function () {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.RENDOR_HOME_BTN, this.setHomeBtn);
        // 游戏中关闭setting的时候要暂停timer
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_START);
    };
    SettingLayer.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, false);
    };
    SettingLayer.prototype.onHomeClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.GAME, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, true);
    };
    SettingLayer.prototype.onMusicClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.audioMusic = !DataManager_1.default.instance.audioMusic;
        if (DataManager_1.default.instance.audioMusic) {
            AudioManager_1.default.instance.playMusic();
        }
        else {
            AudioManager_1.default.instance.stopMusic();
        }
        this.rendorMusic();
    };
    SettingLayer.prototype.onSoundClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.audioSound = !DataManager_1.default.instance.audioSound;
        this.rendorSound();
    };
    SettingLayer.prototype.onVibrateClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.vibrate = !DataManager_1.default.instance.vibrate;
        this.rendorVibrate();
    };
    SettingLayer.prototype.setHomeBtn = function (status) {
        if (status === void 0) { status = true; }
        this.mainSettingNode.active = !status;
        this.gameSettingNode.active = status;
    };
    SettingLayer.prototype.rendorMusic = function () {
        // this.musicNode.getChildByName('on').active = DataManager.instance.audioMusic
        this.musicNode.getChildByName('off').active = !DataManager_1.default.instance.audioMusic;
        // this.gamemusicNode.getChildByName('on').active = DataManager.instance.audioMusic
        this.gamemusicNode.getChildByName('off').active = !DataManager_1.default.instance.audioMusic;
    };
    SettingLayer.prototype.rendorSound = function () {
        // this.soundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.soundNode.getChildByName('off').active = !DataManager_1.default.instance.audioSound;
        // this.gamesoundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.gamesoundNode.getChildByName('off').active = !DataManager_1.default.instance.audioSound;
    };
    SettingLayer.prototype.rendorVibrate = function () {
        // this.soundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.vibrateNode.getChildByName('off').active = !DataManager_1.default.instance.vibrate;
        // this.gamesoundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.gamevibrateNode.getChildByName('off').active = !DataManager_1.default.instance.vibrate;
    };
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "musicNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "soundNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "vibrateNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gamemusicNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gamesoundNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gamevibrateNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "mainSettingNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gameSettingNode", void 0);
    SettingLayer = __decorate([
        ccclass
    ], SettingLayer);
    return SettingLayer;
}(Baselayer_1.default));
exports.default = SettingLayer;

cc._RF.pop();