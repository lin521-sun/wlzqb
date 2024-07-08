
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/MenuLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcTWVudUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixnQ0FBeUU7QUFDekUsc0RBQXFEO0FBQ3JELHdEQUFtRDtBQUNuRCx5Q0FBb0M7QUFDcEMsd0RBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFTO0lBQWhEO1FBQUEscUVBc0VDO1FBcEVDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFDOztJQWdFdkIsQ0FBQztJQS9EVyw0QkFBUSxHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDekQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNFLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELHFEQUFxRDtRQUNyRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQixFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNmLFlBQVksRUFBRSxTQUFTO2dCQUN2QixRQUFRLEVBQUUsQ0FBQztnQkFDWCxRQUFRLEVBQUUsS0FBSztnQkFDZixNQUFNLEVBQUUsR0FBRztnQkFDWCxTQUFTLEVBQUUsV0FBVztnQkFDdEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxZQUFDLEdBQUc7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBOEIsR0FBSyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBMkIsR0FBRyxDQUFDLE1BQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0QsOEJBQVUsR0FBVjtRQUNFLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFDRCxrQ0FBYyxHQUFkO1FBQ0Usc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsa0NBQWMsR0FBZDtRQUNFLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3JELHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBbkVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBTkYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXNFN0I7SUFBRCxnQkFBQztDQXRFRCxBQXNFQyxDQXRFc0MsbUJBQVMsR0FzRS9DO2tCQXRFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9FVkVOVCwgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tICcuLy4uL1N0YXRpY0luc3RhbmNlJztcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VMYXllciBmcm9tIFwiLi9CYXNlbGF5ZXJcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9FdmVudE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgbGV0IHR0OiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgUmFuazogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ2JsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBEZXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgIC8vVE9ETyDmjpLooYzmppzmjInpkq4g5YWl5Y+j5pyJ56S85oyJ6ZKuIOa3u+WKoOahjOmdouaMiemSriDpmpDol49cclxuICAgICAgdGhpcy5SYW5rLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLkNibC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5EZXNrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdGFydENsaWNrKCkge1xyXG4gICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NRU5VLCBmYWxzZSlcclxuICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLkdBTUUpXHJcbiAgfVxyXG5cclxuICBvbkxldmVsQ2xpY2soKSB7XHJcbiAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLkxFVkVMKVxyXG4gIH1cclxuXHJcbiAgb25SYW5rQ2xpY2soKSB7XHJcbiAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgIC8vIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlJBTkspXHJcbiAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgdHQuZ2V0SW1SYW5rTGlzdCh7XHJcbiAgICAgICAgcmVsYXRpb25UeXBlOiBcImRlZmF1bHRcIiwgLy/lpb3lj4vmppzjgIHmgLvmppzpg73lsZXnpLpcclxuICAgICAgICBkYXRhVHlwZTogMCwgLy/lj6rlnIjpgIl0eXBl5Li65p6a5Li+57G75Z6L55qE5pWw5o2u6L+b6KGM5o6S5bqPXHJcbiAgICAgICAgcmFua1R5cGU6IFwiZGF5XCIsIC8v5q+P5aSp5YeM5pmoMOeCueabtOaWsO+8jOWPquWvueW9k+WkqTDngrnliLDnjrDlnKjlhpnlhaXnmoTmlbDmja7ov5vooYzmjpLluo9cclxuICAgICAgICBzdWZmaXg6IFwi5YiGXCIsIC8v5Li656m65oiW5LiN5aGr77yM5LiA6Iis5p6a5Li+57G75Z6L5LiN6ZyA6KaB5aGr5ZCO57yAXHJcbiAgICAgICAgcmFua1RpdGxlOiBcIuaOkuihjOamnCjmr4/ml6Xmm7TmlrApXCIsIC8v5qCH6aKYXHJcbiAgICAgICAgem9uZUlkOiAndGVzdCcsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBnZXRJbVJhbmtEYXRhIHN1Y2Nlc3MgcmVzOiAke3Jlc31gKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZ2V0SW1SYW5rRGF0YSBmYWlsIHJlczogJHtyZXMuZXJyTXNnfWApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNibENsaWNrKCkge1xyXG4gICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5TSURFQkFSTEFZRVIpXHJcbiAgfVxyXG4gIG9uQWRkRGVza0NsaWNrKCkge1xyXG4gICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgdHQuYWRkU2hvcnRjdXQoe1xyXG4gICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIua3u+WKoOahjOmdouaIkOWKn1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIua3u+WKoOahjOmdouWksei0pVwiLCBlcnIuZXJyTXNnKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2V0dGluZ0NsaWNrKCkge1xyXG4gICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5TRVRUSU5HKVxyXG4gICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULlJFTkRPUl9IT01FX0JUTiwgZmFsc2UpXHJcbiAgfVxyXG59XHJcbiJdfQ==