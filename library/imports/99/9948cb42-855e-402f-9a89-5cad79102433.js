"use strict";
cc._RF.push(module, '9948ctChV5AL5qJXK15ECQz', 'LoseLayer');
// script/layer/LoseLayer.ts

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
var LoseLayer = /** @class */ (function (_super) {
    __extends(LoseLayer, _super);
    function LoseLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.tackleLabel = null;
        _this.timeOutLabel = null;
        return _this;
    }
    LoseLayer.prototype.onHomeClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.GAME, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, true);
    };
    LoseLayer.prototype.onRestartClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_RESTART);
    };
    LoseLayer.prototype.onShareClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        // SdkManager.instance.gameShareActive()
        SdkManager_1.default.instance.shareGameToFriend(null, '分享给好友');
    };
    LoseLayer.prototype.setLoseTitle = function (msg) {
        // if(this.titleLabel) this.titleLabel.string = msg
        if (msg == '被抢断') {
            this.tackleLabel.active = true;
            this.timeOutLabel.active = false;
        }
        else {
            this.tackleLabel.active = false;
            this.timeOutLabel.active = true;
        }
    };
    __decorate([
        property(cc.Label)
    ], LoseLayer.prototype, "titleLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LoseLayer.prototype, "tackleLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LoseLayer.prototype, "timeOutLabel", void 0);
    LoseLayer = __decorate([
        ccclass
    ], LoseLayer);
    return LoseLayer;
}(Baselayer_1.default));
exports.default = LoseLayer;

cc._RF.pop();