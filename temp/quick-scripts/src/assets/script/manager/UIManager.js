"use strict";
cc._RF.push(module, 'f9aa8pwkFRNual6xLsFaiDG', 'UIManager');
// script/manager/UIManager.ts

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
var Enum_1 = require("./../Enum");
var StaticInstance_1 = require("./../StaticInstance");
var GameLayer_1 = require("../layer/GameLayer");
var MenuLayer_1 = require("../layer/MenuLayer");
var WinLayer_1 = require("../layer/WinLayer");
var LoseLayer_1 = require("../layer/LoseLayer");
var SettingLayer_1 = require("../layer/SettingLayer");
var LevelLayer_1 = require("../layer/LevelLayer");
var LoadingLayer_1 = require("../layer/LoadingLayer");
var RankLayer_1 = require("../layer/RankLayer");
var TipLayer_1 = require("../layer/TipLayer");
var NoticeLayer_1 = require("../layer/NoticeLayer");
var SideBarLayer_1 = require("../layer/SideBarLayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameLayer = null;
        _this.menuLayer = null;
        _this.winLayer = null;
        _this.loseLayer = null;
        _this.settingLayer = null;
        _this.levelLayer = null;
        _this.loadingLayer = null;
        _this.rankLayer = null;
        _this.tipLayer = null;
        _this.noticeLayer = null;
        _this.sideBarLayer = null;
        _this.uiMap = new Map();
        return _this;
    }
    /**
         * 在类实例加载完成后调用的函数。
         * 该函数负责初始化UI管理器，并将各种UI层与枚举类型对应起来，以便于后续根据枚举类型快速访问相应的UI层。
         */
    UIManager.prototype.onLoad = function () {
        StaticInstance_1.StaticInstance.setUIManager(this);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.GAME, this.gameLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.MENU, this.menuLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.WIN, this.winLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.LOSE, this.loseLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.SETTING, this.settingLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.LEVEL, this.levelLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.LOADING, this.loadingLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.RANK, this.rankLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.TIP, this.tipLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.NOTICE, this.noticeLayer);
        this.uiMap.set(Enum_1.ENUM_UI_TYPE.SIDEBARLAYER, this.sideBarLayer);
    };
    /**
     * 切换UI层的显示或隐藏状态。
     *
     * 此方法用于根据给定的UI类型和状态，切换相应的UI层的可见性。如果提供了回调函数，则在切换完成后调用它。
     * 主要用于在UI管理器中动态显示或隐藏不同的UI层，以响应用户的操作或系统的状态变化。
     *
     * @param key UI层的类型枚举值，用于唯一标识一个UI层。
     * @param status 是否显示UI层的标志，默认为true表示显示。
     * @param callback 切换完成后调用的回调函数，可选。
     */
    UIManager.prototype.toggle = function (key, status, callback) {
        if (status === void 0) { status = true; }
        if (this.uiMap.has(key)) {
            var layer = this.uiMap.get(key);
            status ? layer.show() : layer.hide();
            callback && callback();
        }
    };
    /**
     * 设置游戏界面的力量条。
     *
     * 本函数旨在调整游戏界面中力量条的显示状态或属性。通过从UI映射中获取特定类型的游戏层，
     * 然后调用该层的setPowerBar方法来实现。此功能可能用于更新力量条的填充程度、显示样式或其他相关属性，
     * 以反映游戏进程中的实时变化。
     *
     * @remarks
     * 此函数假设UI映射（uiMap）已正确配置，并且存在对应于GAME类型的游戏层。
     * 使用类型断言来确保获取的层确实是GameLayer类型，然后调用其setPowerBar方法。
     *
     * @see {ENUM_UI_TYPE} 游戏界面类型的枚举定义。
     * @see {GameLayer} 游戏层的类定义，包含setPowerBar方法。
     */
    UIManager.prototype.setPowerBar = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.GAME);
        layer.setPowerBar();
    };
    /**
     * 设置队伍标签。
     *
     * 本函数旨在为游戏界面中的队伍区域设置标签。通过访问UI映射表，获取特定于游戏的层对象，
     * 并调用其方法来设置队伍标签。此功能对于显示游戏中的队伍信息至关重要，确保玩家能够清晰地
     * 观察到队伍的组成和状态。
     */
    UIManager.prototype.setTeamLabel = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.GAME);
        layer.setTeamLabel();
    };
    UIManager.prototype.setPropNum = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.GAME);
        layer.setPropNum();
    };
    /**
     * 设置游戏层的道具数量。
     *
     * 本函数旨在调整游戏层中道具的数量。通过访问UI映射获取特定类型的游戏层，
     * 然后调用该层的setPropNum方法来实现道具数量的设置。此操作对于确保游戏的
     * 正确进行和平衡性至关重要。
     *
     * @remarks
     * 此函数假设UI映射（uiMap）已正确初始化，并且存在对应的GAME类型层。
     */
    UIManager.prototype.setLoseTitle = function (msg) {
        if (msg === void 0) { msg = ''; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.LOSE);
        layer.setLoseTitle(msg);
    };
    /**
     * 设置提示信息。
     *
     * 本函数用于更新用户界面中提示层的提示信息。它接受一个可选的数字参数来指定要显示的提示信息的编号。
     * 如果没有提供参数，则默认使用1作为提示信息编号。此功能主要用于与用户界面的交互，提供动态更新提示信息的能力。
     *
     * @param num {number} - 要显示的提示信息的编号。默认值为1。
     */
    UIManager.prototype.setTip = function (num) {
        if (num === void 0) { num = 1; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.TIP);
        layer.setTip(num);
    };
    /**
     * 设置通知标签文本。
     *
     * 此方法用于更新用户界面中通知层的标签文本。如果未指定文本，则默认使用空字符串。
     * 通过从UI映射中获取特定类型的通知层，并调用其设置标签文本的方法来实现更新。
     *
     * @param str {string} - 要设置的通知标签文本，默认为空字符串。
     */
    UIManager.prototype.setNoticeLabel = function (str) {
        if (str === void 0) { str = ''; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.NOTICE);
        layer.setNoticeLabel(str);
    };
    /**
     * 显示完成通知
     * 此函数用于在游戏窗口中显示完成通知。它基于传入的状态决定是否显示通知。
     * 通知的显示与否由`status`参数决定，如果`status`为真，则显示通知；否则，隐藏通知。
     *
     * @param status {boolean} - 控制通知是否显示的标志，默认为false，即默认隐藏通知。
     */
    UIManager.prototype.showCompleteNotice = function (status) {
        if (status === void 0) { status = false; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.WIN);
        layer.showCompleteNotice(status);
    };
    /**
     * 停止游戏记录。
     *
     * 本函数用于结束游戏层的记录状态。在游戏过程中，可能需要记录玩家的操作或游戏状态，
     * 而这个函数提供了一个方式来停止这种记录，可能是为了保存当前状态，或者是因为游戏结束等原因。
     *
     * @remarks
     * 本函数首先通过UI映射获取到游戏层对象，然后调用该对象的endRecord方法来结束记录。
     * 这种设计模式使得代码具有较好的模块化和可扩展性。
     */
    UIManager.prototype.stopRecord = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.GAME);
        layer.endRecord();
    };
    __decorate([
        property(GameLayer_1.default)
    ], UIManager.prototype, "gameLayer", void 0);
    __decorate([
        property(MenuLayer_1.default)
    ], UIManager.prototype, "menuLayer", void 0);
    __decorate([
        property(WinLayer_1.default)
    ], UIManager.prototype, "winLayer", void 0);
    __decorate([
        property(LoseLayer_1.default)
    ], UIManager.prototype, "loseLayer", void 0);
    __decorate([
        property(SettingLayer_1.default)
    ], UIManager.prototype, "settingLayer", void 0);
    __decorate([
        property(LevelLayer_1.default)
    ], UIManager.prototype, "levelLayer", void 0);
    __decorate([
        property(LoadingLayer_1.default)
    ], UIManager.prototype, "loadingLayer", void 0);
    __decorate([
        property(RankLayer_1.default)
    ], UIManager.prototype, "rankLayer", void 0);
    __decorate([
        property(TipLayer_1.default)
    ], UIManager.prototype, "tipLayer", void 0);
    __decorate([
        property(NoticeLayer_1.default)
    ], UIManager.prototype, "noticeLayer", void 0);
    __decorate([
        property(SideBarLayer_1.SideBarLayer)
    ], UIManager.prototype, "sideBarLayer", void 0);
    UIManager = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

cc._RF.pop();