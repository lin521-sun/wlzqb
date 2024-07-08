
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/SettingLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcU2V0dGluZ0xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixnQ0FBeUU7QUFDekUsc0RBQXFEO0FBQ3JELHdEQUFtRDtBQUNuRCx5Q0FBb0M7QUFDcEMsc0RBQWlEO0FBQ2pELHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBUztJQUFuRDtRQUFBLHFFQThGQztRQTNGRyxlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IscUJBQWUsR0FBWSxJQUFJLENBQUE7UUFFL0IscUJBQWUsR0FBWSxJQUFJLENBQUE7UUFFL0IscUJBQWUsR0FBWSxJQUFJLENBQUE7O0lBNkVuQyxDQUFDO0lBM0VhLCtCQUFRLEdBQWxCO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLHNCQUFlLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDaEYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDcEIsMEJBQTBCO1FBQzFCLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFUyxnQ0FBUyxHQUFuQjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBZSxDQUFD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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9HQU1FX0VWRU5ULCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4vLi4vU3RhdGljSW5zdGFuY2UnO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQmFzZUxheWVyIGZyb20gXCIuL0Jhc2VsYXllclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9FdmVudE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG11c2ljTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc291bmROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2aWJyYXRlTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZW11c2ljTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZXNvdW5kTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZXZpYnJhdGVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluU2V0dGluZ05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVTZXR0aW5nTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9uKEVOVU1fR0FNRV9FVkVOVC5SRU5ET1JfSE9NRV9CVE4sIHRoaXMuc2V0SG9tZUJ0biwgdGhpcylcclxuICAgICAgICB0aGlzLnJlbmRvck11c2ljKClcclxuICAgICAgICB0aGlzLnJlbmRvclNvdW5kKClcclxuICAgICAgICB0aGlzLnJlbmRvclZpYnJhdGUoKVxyXG4gICAgICAgIC8vIOa4uOaIj+S4reiwg+i1t3NldHRpbmfnmoTml7blgJnopoHmmoLlgZx0aW1lclxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5USU1FUl9TVE9QKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9mZihFTlVNX0dBTUVfRVZFTlQuUkVORE9SX0hPTUVfQlROLCB0aGlzLnNldEhvbWVCdG4pXHJcbiAgICAgICAgLy8g5ri45oiP5Lit5YWz6Zetc2V0dGluZ+eahOaXtuWAmeimgeaaguWBnHRpbWVyXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULlRJTUVSX1NUQVJUKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlNFVFRJTkcsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uSG9tZUNsaWNrKCl7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuR0FNRSwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuU0VUVElORywgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUVOVSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBvbk11c2ljQ2xpY2soKXtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLmF1ZGlvTXVzaWNcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljKXtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlNdXNpYygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5zdG9wTXVzaWMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRvck11c2ljKClcclxuICAgIH1cclxuXHJcbiAgICBvblNvdW5kQ2xpY2soKXtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb1NvdW5kID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLmF1ZGlvU291bmRcclxuICAgICAgICB0aGlzLnJlbmRvclNvdW5kKClcclxuICAgIH1cclxuXHJcbiAgICBvblZpYnJhdGVDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnZpYnJhdGUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UudmlicmF0ZVxyXG4gICAgICAgIHRoaXMucmVuZG9yVmlicmF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0SG9tZUJ0bihzdGF0dXM6IGJvb2xlYW4gPSB0cnVlKXtcclxuICAgICAgICB0aGlzLm1haW5TZXR0aW5nTm9kZS5hY3RpdmUgPSAhc3RhdHVzXHJcbiAgICAgICAgdGhpcy5nYW1lU2V0dGluZ05vZGUuYWN0aXZlID0gc3RhdHVzXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yTXVzaWMoKXtcclxuICAgICAgICAvLyB0aGlzLm11c2ljTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb24nKS5hY3RpdmUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljXHJcbiAgICAgICAgdGhpcy5tdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29mZicpLmFjdGl2ZSA9ICFEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lbXVzaWNOb2RlLmdldENoaWxkQnlOYW1lKCdvbicpLmFjdGl2ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmF1ZGlvTXVzaWNcclxuICAgICAgICB0aGlzLmdhbWVtdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29mZicpLmFjdGl2ZSA9ICFEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRvclNvdW5kKCl7XHJcbiAgICAgICAgLy8gdGhpcy5zb3VuZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29uJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgICAgIHRoaXMuc291bmROb2RlLmdldENoaWxkQnlOYW1lKCdvZmYnKS5hY3RpdmUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZXNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb24nKS5hY3RpdmUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb1NvdW5kXHJcbiAgICAgICAgdGhpcy5nYW1lc291bmROb2RlLmdldENoaWxkQnlOYW1lKCdvZmYnKS5hY3RpdmUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRvclZpYnJhdGUoKXtcclxuICAgICAgICAvLyB0aGlzLnNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb24nKS5hY3RpdmUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb1NvdW5kXHJcbiAgICAgICAgdGhpcy52aWJyYXRlTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb2ZmJykuYWN0aXZlID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLnZpYnJhdGVcclxuICAgICAgICAvLyB0aGlzLmdhbWVzb3VuZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29uJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgICAgIHRoaXMuZ2FtZXZpYnJhdGVOb2RlLmdldENoaWxkQnlOYW1lKCdvZmYnKS5hY3RpdmUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UudmlicmF0ZVxyXG4gICAgfVxyXG59XHJcbiJdfQ==