"use strict";
cc._RF.push(module, '97110aStTNPeKQW9E7Xt6iR', 'MenuLayer');
// script/layer/MenuLayer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuLayer = /** @class */ (function (_super) {
    __extends(MenuLayer, _super);
    function MenuLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Rank = null;
        _this.Cbl = null;
        _this.Desk = null;
        return _this;
    }
    MenuLayer.prototype.onEnable = function () {
        if (!window["tt"]) {
            //TODO 排行榜按钮 入口有礼按钮 添加桌面按钮 隐藏
            this.Rank.active = false;
            this.Cbl.active = false;
            this.Desk.active = false;
        }
    };
    MenuLayer.prototype.onStartClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.GAME);
    };
    MenuLayer.prototype.onLevelClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LEVEL);
    };
    MenuLayer.prototype.onRankClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        // StaticInstance.uiManager.toggle(ENUM_UI_TYPE.RANK)
        if (window["tt"]) {
            tt.getImRankList({
                relationType: "default",
                dataType: 0,
                rankType: "day",
                suffix: "分",
                rankTitle: "排行榜(每日更新)",
                zoneId: 'test',
                success: function (res) {
                    console.log("getImRankData success res: " + res);
                },
                fail: function (res) {
                    console.log("getImRankData fail res: " + res.errMsg);
                },
            });
        }
    };
    MenuLayer.prototype.onCblClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SIDEBARLAYER);
    };
    MenuLayer.prototype.onAddDeskClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (window["tt"]) {
            tt.addShortcut({
                success: function () {
                    console.log("添加桌面成功");
                },
                fail: function (err) {
                    console.log("添加桌面失败", err.errMsg);
                },
            });
        }
    };
    MenuLayer.prototype.onSettingClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.RENDOR_HOME_BTN, false);
    };
    __decorate([
        property(cc.Node)
    ], MenuLayer.prototype, "Rank", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLayer.prototype, "Cbl", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLayer.prototype, "Desk", void 0);
    MenuLayer = __decorate([
        ccclass
    ], MenuLayer);
    return MenuLayer;
}(Baselayer_1.default));
exports.default = MenuLayer;

cc._RF.pop();