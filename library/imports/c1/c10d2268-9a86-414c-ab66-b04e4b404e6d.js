"use strict";
cc._RF.push(module, 'c10d2JomoZBTKtmsE5LQE5t', 'TipLayer');
// script/layer/TipLayer.ts

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
var AudioManager_1 = require("../manager/AudioManager");
var EventManager_1 = require("../manager/EventManager");
var StaticInstance_1 = require("../StaticInstance");
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipLayer = /** @class */ (function (_super) {
    __extends(TipLayer, _super);
    function TipLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelContent = null;
        return _this;
    }
    TipLayer.prototype.onEnable = function () {
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_STOP);
    };
    TipLayer.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.TIP, false);
    };
    TipLayer.prototype.setTip = function (num) {
        this.levelContent.children.forEach(function (item) {
            item.active = item.name == "Level" + num;
        });
    };
    TipLayer.prototype.onDisable = function () {
        // 计时器开启
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_START);
    };
    __decorate([
        property(cc.Node)
    ], TipLayer.prototype, "levelContent", void 0);
    TipLayer = __decorate([
        ccclass
    ], TipLayer);
    return TipLayer;
}(Baselayer_1.default));
exports.default = TipLayer;

cc._RF.pop();