
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxVSU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLGtDQUF5QztBQUN6QyxzREFBcUQ7QUFFckQsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUMzQyw4Q0FBeUM7QUFDekMsZ0RBQTJDO0FBQzNDLHNEQUFpRDtBQUNqRCxrREFBNkM7QUFDN0Msc0RBQWlEO0FBQ2pELGdEQUEyQztBQUMzQyw4Q0FBeUM7QUFDekMsb0RBQStDO0FBQy9DLHNEQUFxRDtBQUUvQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQStKQztRQTVKRyxlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRTNCLGVBQVMsR0FBYyxJQUFJLENBQUE7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQWlCLElBQUksQ0FBQTtRQUVqQyxnQkFBVSxHQUFlLElBQUksQ0FBQTtRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUE7UUFFakMsZUFBUyxHQUFjLElBQUksQ0FBQTtRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLGlCQUFXLEdBQWdCLElBQUksQ0FBQTtRQUUvQixrQkFBWSxHQUFpQixJQUFJLENBQUE7UUFFekIsV0FBSyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFBOztJQXNJdEQsQ0FBQztJQXJJRzs7O1dBR087SUFDRywwQkFBTSxHQUFoQjtRQUNJLCtCQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENB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Q0FBQztnREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO21EQUNVO0lBRWpDO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7aURBQ1E7SUFFN0I7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzttREFDVTtJQUVqQztRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7K0NBQ007SUFFekI7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQztrREFDUztJQUUvQjtRQURDLFFBQVEsQ0FBQywyQkFBWSxDQUFDO21EQUNVO0lBdkJoQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0o3QjtJQUFELGdCQUFDO0NBL0pELEFBK0pDLENBL0pzQyxFQUFFLENBQUMsU0FBUyxHQStKbEQ7a0JBL0pvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCB7IEVOVU1fVUlfVFlQRSB9IGZyb20gJy4vLi4vRW51bSc7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi8uLi9TdGF0aWNJbnN0YW5jZSc7XHJcbmltcG9ydCBCYXNlTGF5ZXIgZnJvbSAnLi4vbGF5ZXIvQmFzZWxheWVyJztcclxuaW1wb3J0IEdhbWVMYXllciBmcm9tICcuLi9sYXllci9HYW1lTGF5ZXInO1xyXG5pbXBvcnQgTWVudUxheWVyIGZyb20gJy4uL2xheWVyL01lbnVMYXllcic7XHJcbmltcG9ydCBXaW5MYXllciBmcm9tICcuLi9sYXllci9XaW5MYXllcic7XHJcbmltcG9ydCBMb3NlTGF5ZXIgZnJvbSAnLi4vbGF5ZXIvTG9zZUxheWVyJztcclxuaW1wb3J0IFNldHRpbmdMYXllciBmcm9tICcuLi9sYXllci9TZXR0aW5nTGF5ZXInO1xyXG5pbXBvcnQgTGV2ZWxMYXllciBmcm9tICcuLi9sYXllci9MZXZlbExheWVyJztcclxuaW1wb3J0IExvYWRpbmdMYXllciBmcm9tICcuLi9sYXllci9Mb2FkaW5nTGF5ZXInO1xyXG5pbXBvcnQgUmFua0xheWVyIGZyb20gJy4uL2xheWVyL1JhbmtMYXllcic7XHJcbmltcG9ydCBUaXBMYXllciBmcm9tICcuLi9sYXllci9UaXBMYXllcic7XHJcbmltcG9ydCBOb3RpY2VMYXllciBmcm9tICcuLi9sYXllci9Ob3RpY2VMYXllcic7XHJcbmltcG9ydCB7IFNpZGVCYXJMYXllciB9IGZyb20gJy4uL2xheWVyL1NpZGVCYXJMYXllcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZUxheWVyKVxyXG4gICAgZ2FtZUxheWVyOiBHYW1lTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoTWVudUxheWVyKVxyXG4gICAgbWVudUxheWVyOiBNZW51TGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoV2luTGF5ZXIpXHJcbiAgICB3aW5MYXllcjogV2luTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoTG9zZUxheWVyKVxyXG4gICAgbG9zZUxheWVyOiBMb3NlTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoU2V0dGluZ0xheWVyKVxyXG4gICAgc2V0dGluZ0xheWVyOiBTZXR0aW5nTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoTGV2ZWxMYXllcilcclxuICAgIGxldmVsTGF5ZXI6IExldmVsTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoTG9hZGluZ0xheWVyKVxyXG4gICAgbG9hZGluZ0xheWVyOiBMb2FkaW5nTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoUmFua0xheWVyKVxyXG4gICAgcmFua0xheWVyOiBSYW5rTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoVGlwTGF5ZXIpXHJcbiAgICB0aXBMYXllcjogVGlwTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoTm90aWNlTGF5ZXIpXHJcbiAgICBub3RpY2VMYXllcjogTm90aWNlTGF5ZXIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoU2lkZUJhckxheWVyKVxyXG4gICAgc2lkZUJhckxheWVyOiBTaWRlQmFyTGF5ZXIgPSBudWxsXHJcblxyXG4gICAgcHJpdmF0ZSB1aU1hcCA9IG5ldyBNYXA8RU5VTV9VSV9UWVBFLCBCYXNlTGF5ZXI+KClcclxuICAgIC8qKlxyXG4gICAgICAgICAqIOWcqOexu+WunuS+i+WKoOi9veWujOaIkOWQjuiwg+eUqOeahOWHveaVsOOAglxyXG4gICAgICAgICAqIOivpeWHveaVsOi0n+i0o+WIneWni+WMllVJ566h55CG5Zmo77yM5bm25bCG5ZCE56eNVUnlsYLkuI7mnprkuL7nsbvlnovlr7nlupTotbfmnaXvvIzku6Xkvr/kuo7lkI7nu63moLnmja7mnprkuL7nsbvlnovlv6vpgJ/orr/pl67nm7jlupTnmoRVSeWxguOAglxyXG4gICAgICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS5zZXRVSU1hbmFnZXIodGhpcylcclxuICAgICAgICB0aGlzLnVpTWFwLnNldChFTlVNX1VJX1RZUEUuR0FNRSwgdGhpcy5nYW1lTGF5ZXIpXHJcbiAgICAgICAgdGhpcy51aU1hcC5zZXQoRU5VTV9VSV9UWVBFLk1FTlUsIHRoaXMubWVudUxheWVyKVxyXG4gICAgICAgIHRoaXMudWlNYXAuc2V0KEVOVU1fVUlfVFlQRS5XSU4sIHRoaXMud2luTGF5ZXIpXHJcbiAgICAgICAgdGhpcy51aU1hcC5zZXQoRU5VTV9VSV9UWVBFLkxPU0UsIHRoaXMubG9zZUxheWVyKVxyXG4gICAgICAgIHRoaXMudWlNYXAuc2V0KEVOVU1fVUlfVFlQRS5TRVRUSU5HLCB0aGlzLnNldHRpbmdMYXllcilcclxuICAgICAgICB0aGlzLnVpTWFwLnNldChFTlVNX1VJX1RZUEUuTEVWRUwsIHRoaXMubGV2ZWxMYXllcilcclxuICAgICAgICB0aGlzLnVpTWFwLnNldChFTlVNX1VJX1RZUEUuTE9BRElORywgdGhpcy5sb2FkaW5nTGF5ZXIpXHJcbiAgICAgICAgdGhpcy51aU1hcC5zZXQoRU5VTV9VSV9UWVBFLlJBTkssIHRoaXMucmFua0xheWVyKVxyXG4gICAgICAgIHRoaXMudWlNYXAuc2V0KEVOVU1fVUlfVFlQRS5USVAsIHRoaXMudGlwTGF5ZXIpXHJcbiAgICAgICAgdGhpcy51aU1hcC5zZXQoRU5VTV9VSV9UWVBFLk5PVElDRSwgdGhpcy5ub3RpY2VMYXllcilcclxuICAgICAgICB0aGlzLnVpTWFwLnNldChFTlVNX1VJX1RZUEUuU0lERUJBUkxBWUVSLCB0aGlzLnNpZGVCYXJMYXllcilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YiH5o2iVUnlsYLnmoTmmL7npLrmiJbpmpDol4/nirbmgIHjgIJcclxuICAgICAqIFxyXG4gICAgICog5q2k5pa55rOV55So5LqO5qC55o2u57uZ5a6a55qEVUnnsbvlnovlkoznirbmgIHvvIzliIfmjaLnm7jlupTnmoRVSeWxgueahOWPr+ingeaAp+OAguWmguaenOaPkOS+m+S6huWbnuiwg+WHveaVsO+8jOWImeWcqOWIh+aNouWujOaIkOWQjuiwg+eUqOWug+OAglxyXG4gICAgICog5Li76KaB55So5LqO5ZyoVUnnrqHnkIblmajkuK3liqjmgIHmmL7npLrmiJbpmpDol4/kuI3lkIznmoRVSeWxgu+8jOS7peWTjeW6lOeUqOaIt+eahOaTjeS9nOaIluezu+e7n+eahOeKtuaAgeWPmOWMluOAglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ga2V5IFVJ5bGC55qE57G75Z6L5p6a5Li+5YC877yM55So5LqO5ZSv5LiA5qCH6K+G5LiA5LiqVUnlsYLjgIJcclxuICAgICAqIEBwYXJhbSBzdGF0dXMg5piv5ZCm5pi+56S6VUnlsYLnmoTmoIflv5fvvIzpu5jorqTkuLp0cnVl6KGo56S65pi+56S644CCXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5YiH5o2i5a6M5oiQ5ZCO6LCD55So55qE5Zue6LCD5Ye95pWw77yM5Y+v6YCJ44CCXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZShrZXk6IEVOVU1fVUlfVFlQRSwgc3RhdHVzOiBib29sZWFuID0gdHJ1ZSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudWlNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnVpTWFwLmdldChrZXkpXHJcbiAgICAgICAgICAgIHN0YXR1cyA/IGxheWVyLnNob3coKSA6IGxheWVyLmhpZGUoKVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7muLjmiI/nlYzpnaLnmoTlipvph4/mnaHjgIJcclxuICAgICAqIFxyXG4gICAgICog5pys5Ye95pWw5peo5Zyo6LCD5pW05ri45oiP55WM6Z2i5Lit5Yqb6YeP5p2h55qE5pi+56S654q25oCB5oiW5bGe5oCn44CC6YCa6L+H5LuOVUnmmKDlsITkuK3ojrflj5bnibnlrprnsbvlnovnmoTmuLjmiI/lsYLvvIxcclxuICAgICAqIOeEtuWQjuiwg+eUqOivpeWxgueahHNldFBvd2VyQmFy5pa55rOV5p2l5a6e546w44CC5q2k5Yqf6IO95Y+v6IO955So5LqO5pu05paw5Yqb6YeP5p2h55qE5aGr5YWF56iL5bqm44CB5pi+56S65qC35byP5oiW5YW25LuW55u45YWz5bGe5oCn77yMXHJcbiAgICAgKiDku6Xlj43mmKDmuLjmiI/ov5vnqIvkuK3nmoTlrp7ml7blj5jljJbjgIJcclxuICAgICAqIFxyXG4gICAgICogQHJlbWFya3NcclxuICAgICAqIOatpOWHveaVsOWBh+iuvlVJ5pig5bCE77yIdWlNYXDvvInlt7LmraPnoa7phY3nva7vvIzlubbkuJTlrZjlnKjlr7nlupTkuo5HQU1F57G75Z6L55qE5ri45oiP5bGC44CCXHJcbiAgICAgKiDkvb/nlKjnsbvlnovmlq3oqIDmnaXnoa7kv53ojrflj5bnmoTlsYLnoa7lrp7mmK9HYW1lTGF5ZXLnsbvlnovvvIznhLblkI7osIPnlKjlhbZzZXRQb3dlckJhcuaWueazleOAglxyXG4gICAgICogXHJcbiAgICAgKiBAc2VlIHtFTlVNX1VJX1RZUEV9IOa4uOaIj+eVjOmdouexu+Wei+eahOaemuS4vuWumuS5ieOAglxyXG4gICAgICogQHNlZSB7R2FtZUxheWVyfSDmuLjmiI/lsYLnmoTnsbvlrprkuYnvvIzljIXlkKtzZXRQb3dlckJhcuaWueazleOAglxyXG4gICAgICovXHJcbiAgICBzZXRQb3dlckJhcigpIHtcclxuICAgICAgICBjb25zdCBsYXllciA9IHRoaXMudWlNYXAuZ2V0KEVOVU1fVUlfVFlQRS5HQU1FKSBhcyBHYW1lTGF5ZXJcclxuICAgICAgICBsYXllci5zZXRQb3dlckJhcigpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumYn+S8jeagh+etvuOAglxyXG4gICAgICogXHJcbiAgICAgKiDmnKzlh73mlbDml6jlnKjkuLrmuLjmiI/nlYzpnaLkuK3nmoTpmJ/kvI3ljLrln5/orr7nva7moIfnrb7jgILpgJrov4forr/pl65VSeaYoOWwhOihqO+8jOiOt+WPlueJueWumuS6jua4uOaIj+eahOWxguWvueixoe+8jFxyXG4gICAgICog5bm26LCD55So5YW25pa55rOV5p2l6K6+572u6Zif5LyN5qCH562+44CC5q2k5Yqf6IO95a+55LqO5pi+56S65ri45oiP5Lit55qE6Zif5LyN5L+h5oGv6Iez5YWz6YeN6KaB77yM56Gu5L+d546p5a626IO95aSf5riF5pmw5ZywXHJcbiAgICAgKiDop4Llr5/liLDpmJ/kvI3nmoTnu4TmiJDlkoznirbmgIHjgIJcclxuICAgICAqL1xyXG4gICAgc2V0VGVhbUxhYmVsKCkge1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy51aU1hcC5nZXQoRU5VTV9VSV9UWVBFLkdBTUUpIGFzIEdhbWVMYXllclxyXG4gICAgICAgIGxheWVyLnNldFRlYW1MYWJlbCgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcE51bSgpIHtcclxuICAgICAgICBjb25zdCBsYXllciA9IHRoaXMudWlNYXAuZ2V0KEVOVU1fVUlfVFlQRS5HQU1FKSBhcyBHYW1lTGF5ZXJcclxuICAgICAgICBsYXllci5zZXRQcm9wTnVtKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5ri45oiP5bGC55qE6YGT5YW35pWw6YeP44CCXHJcbiAgICAgKiBcclxuICAgICAqIOacrOWHveaVsOaXqOWcqOiwg+aVtOa4uOaIj+WxguS4remBk+WFt+eahOaVsOmHj+OAgumAmui/h+iuv+mXrlVJ5pig5bCE6I635Y+W54m55a6a57G75Z6L55qE5ri45oiP5bGC77yMXHJcbiAgICAgKiDnhLblkI7osIPnlKjor6XlsYLnmoRzZXRQcm9wTnVt5pa55rOV5p2l5a6e546w6YGT5YW35pWw6YeP55qE6K6+572u44CC5q2k5pON5L2c5a+55LqO56Gu5L+d5ri45oiP55qEXHJcbiAgICAgKiDmraPnoa7ov5vooYzlkozlubPooaHmgKfoh7PlhbPph43opoHjgIJcclxuICAgICAqIFxyXG4gICAgICogQHJlbWFya3NcclxuICAgICAqIOatpOWHveaVsOWBh+iuvlVJ5pig5bCE77yIdWlNYXDvvInlt7LmraPnoa7liJ3lp4vljJbvvIzlubbkuJTlrZjlnKjlr7nlupTnmoRHQU1F57G75Z6L5bGC44CCXHJcbiAgICAgKi9cclxuICAgIHNldExvc2VUaXRsZShtc2c6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnVpTWFwLmdldChFTlVNX1VJX1RZUEUuTE9TRSkgYXMgTG9zZUxheWVyXHJcbiAgICAgICAgbGF5ZXIuc2V0TG9zZVRpdGxlKG1zZylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5o+Q56S65L+h5oGv44CCXHJcbiAgICAgKiBcclxuICAgICAqIOacrOWHveaVsOeUqOS6juabtOaWsOeUqOaIt+eVjOmdouS4reaPkOekuuWxgueahOaPkOekuuS/oeaBr+OAguWug+aOpeWPl+S4gOS4quWPr+mAieeahOaVsOWtl+WPguaVsOadpeaMh+WumuimgeaYvuekuueahOaPkOekuuS/oeaBr+eahOe8luWPt+OAglxyXG4gICAgICog5aaC5p6c5rKh5pyJ5o+Q5L6b5Y+C5pWw77yM5YiZ6buY6K6k5L2/55SoMeS9nOS4uuaPkOekuuS/oeaBr+e8luWPt+OAguatpOWKn+iDveS4u+imgeeUqOS6juS4jueUqOaIt+eVjOmdoueahOS6pOS6ku+8jOaPkOS+m+WKqOaAgeabtOaWsOaPkOekuuS/oeaBr+eahOiDveWKm+OAglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gbnVtIHtudW1iZXJ9IC0g6KaB5pi+56S655qE5o+Q56S65L+h5oGv55qE57yW5Y+344CC6buY6K6k5YC85Li6MeOAglxyXG4gICAgICovXHJcbiAgICBzZXRUaXAobnVtOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnVpTWFwLmdldChFTlVNX1VJX1RZUEUuVElQKSBhcyBUaXBMYXllclxyXG4gICAgICAgIGxheWVyLnNldFRpcChudW0pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumAmuefpeagh+etvuaWh+acrOOAglxyXG4gICAgICogXHJcbiAgICAgKiDmraTmlrnms5XnlKjkuo7mm7TmlrDnlKjmiLfnlYzpnaLkuK3pgJrnn6XlsYLnmoTmoIfnrb7mlofmnKzjgILlpoLmnpzmnKrmjIflrprmlofmnKzvvIzliJnpu5jorqTkvb/nlKjnqbrlrZfnrKbkuLLjgIJcclxuICAgICAqIOmAmui/h+S7jlVJ5pig5bCE5Lit6I635Y+W54m55a6a57G75Z6L55qE6YCa55+l5bGC77yM5bm26LCD55So5YW26K6+572u5qCH562+5paH5pys55qE5pa55rOV5p2l5a6e546w5pu05paw44CCXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBzdHIge3N0cmluZ30gLSDopoHorr7nva7nmoTpgJrnn6XmoIfnrb7mlofmnKzvvIzpu5jorqTkuLrnqbrlrZfnrKbkuLLjgIJcclxuICAgICAqL1xyXG4gICAgc2V0Tm90aWNlTGFiZWwoc3RyOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy51aU1hcC5nZXQoRU5VTV9VSV9UWVBFLk5PVElDRSkgYXMgTm90aWNlTGF5ZXJcclxuICAgICAgICBsYXllci5zZXROb3RpY2VMYWJlbChzdHIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuWujOaIkOmAmuefpVxyXG4gICAgICog5q2k5Ye95pWw55So5LqO5Zyo5ri45oiP56qX5Y+j5Lit5pi+56S65a6M5oiQ6YCa55+l44CC5a6D5Z+65LqO5Lyg5YWl55qE54q25oCB5Yaz5a6a5piv5ZCm5pi+56S66YCa55+l44CCXHJcbiAgICAgKiDpgJrnn6XnmoTmmL7npLrkuI7lkKbnlLFgc3RhdHVzYOWPguaVsOWGs+Wumu+8jOWmguaenGBzdGF0dXNg5Li655yf77yM5YiZ5pi+56S66YCa55+l77yb5ZCm5YiZ77yM6ZqQ6JeP6YCa55+l44CCXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBzdGF0dXMge2Jvb2xlYW59IC0g5o6n5Yi26YCa55+l5piv5ZCm5pi+56S655qE5qCH5b+X77yM6buY6K6k5Li6ZmFsc2XvvIzljbPpu5jorqTpmpDol4/pgJrnn6XjgIJcclxuICAgICAqL1xyXG4gICAgc2hvd0NvbXBsZXRlTm90aWNlKHN0YXR1czogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnVpTWFwLmdldChFTlVNX1VJX1RZUEUuV0lOKSBhcyBXaW5MYXllclxyXG4gICAgICAgIGxheWVyLnNob3dDb21wbGV0ZU5vdGljZShzdGF0dXMpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWBnOatoua4uOaIj+iusOW9leOAglxyXG4gICAgICogXHJcbiAgICAgKiDmnKzlh73mlbDnlKjkuo7nu5PmnZ/muLjmiI/lsYLnmoTorrDlvZXnirbmgIHjgILlnKjmuLjmiI/ov4fnqIvkuK3vvIzlj6/og73pnIDopoHorrDlvZXnjqnlrrbnmoTmk43kvZzmiJbmuLjmiI/nirbmgIHvvIxcclxuICAgICAqIOiAjOi/meS4quWHveaVsOaPkOS+m+S6huS4gOS4quaWueW8j+adpeWBnOatoui/meenjeiusOW9le+8jOWPr+iDveaYr+S4uuS6huS/neWtmOW9k+WJjeeKtuaAge+8jOaIluiAheaYr+WboOS4uua4uOaIj+e7k+adn+etieWOn+WboOOAglxyXG4gICAgICogXHJcbiAgICAgKiBAcmVtYXJrc1xyXG4gICAgICog5pys5Ye95pWw6aaW5YWI6YCa6L+HVUnmmKDlsITojrflj5bliLDmuLjmiI/lsYLlr7nosaHvvIznhLblkI7osIPnlKjor6Xlr7nosaHnmoRlbmRSZWNvcmTmlrnms5XmnaXnu5PmnZ/orrDlvZXjgIJcclxuICAgICAqIOi/meenjeiuvuiuoeaooeW8j+S9v+W+l+S7o+eggeWFt+aciei+g+WlveeahOaooeWdl+WMluWSjOWPr+aJqeWxleaAp+OAglxyXG4gICAgICovXHJcbiAgICBzdG9wUmVjb3JkKCkge1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy51aU1hcC5nZXQoRU5VTV9VSV9UWVBFLkdBTUUpIGFzIEdhbWVMYXllclxyXG4gICAgICAgIGxheWVyLmVuZFJlY29yZCgpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==