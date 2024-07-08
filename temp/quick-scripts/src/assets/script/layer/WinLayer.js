"use strict";
cc._RF.push(module, '59e6esQ9ItFoJy1uhve1yy/', 'WinLayer');
// script/layer/WinLayer.ts

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
var EventManager_1 = require("../manager/EventManager");
var SdkManager_1 = require("../manager/SdkManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WinLayer = /** @class */ (function (_super) {
    __extends(WinLayer, _super);
    function WinLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goFire = null;
        _this.next = null;
        return _this;
    }
    WinLayer.prototype.onLoad = function () {
        if (!window["tt"]) {
            //TODO 排行榜按钮 入口有礼按钮 添加桌面按钮 隐藏
            this.goFire.active = false;
        }
    };
    WinLayer.prototype.onRestartClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.WIN, false);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_RESTART);
    };
    WinLayer.prototype.onNextClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.WIN, false);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_NEXT);
    };
    WinLayer.prototype.onShareClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        // SdkManager.instance.gameShareActive()
        SdkManager_1.default.instance.shareGameToFriend(null, '分享给好友');
    };
    WinLayer.prototype.showCompleteNotice = function (status) {
        this.node.getChildByName('Complete').active = status;
        if (status) {
            this.next.active = false;
        }
        else {
            this.next.active = true;
        }
    };
    WinLayer.prototype.onGoFireClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        SdkManager_1.default.instance.recordingVideoShare(null, '录制视频分享');
    };
    __decorate([
        property(cc.Node)
    ], WinLayer.prototype, "goFire", void 0);
    __decorate([
        property(cc.Node)
    ], WinLayer.prototype, "next", void 0);
    WinLayer = __decorate([
        ccclass
    ], WinLayer);
    return WinLayer;
}(Baselayer_1.default));
exports.default = WinLayer;

cc._RF.pop();