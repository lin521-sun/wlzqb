
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/WinLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcV2luTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLGdDQUF5RTtBQUN6RSxzREFBcUQ7QUFDckQsd0RBQW1EO0FBQ25ELHlDQUFvQztBQUNwQyx3REFBbUQ7QUFDbkQsb0RBQStDO0FBRXpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFTO0lBQS9DO1FBQUEscUVBMkNDO1FBekNHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFZLElBQUksQ0FBQzs7SUF1Q3pCLENBQUM7SUF0Q2EseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNQLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hELHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hELHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsd0NBQXdDO1FBQ3hDLG9CQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUNBQWtCLEdBQWxCLFVBQW1CLE1BQWU7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwRCxJQUFHLE1BQU0sRUFBQztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUNHO1lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFKSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkM1QjtJQUFELGVBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3FDLG1CQUFTLEdBMkM5QztrQkEzQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0dBTUVfRVZFTlQsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi8uLi9TdGF0aWNJbnN0YW5jZSc7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBCYXNlTGF5ZXIgZnJvbSBcIi4vQmFzZWxheWVyXCI7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Nka01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5MYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdvRmlyZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5leHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIC8vVE9ETyDmjpLooYzmppzmjInpkq4g5YWl5Y+j5pyJ56S85oyJ6ZKuIOa3u+WKoOahjOmdouaMiemSriDpmpDol49cclxuICAgICAgICAgICAgdGhpcy5nb0ZpcmUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblJlc3RhcnRDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5XSU4sIGZhbHNlKVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5HQU1FX1JFU1RBUlQpXHJcbiAgICB9XHJcblxyXG4gICAgb25OZXh0Q2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuV0lOLCBmYWxzZSlcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuR0FNRV9ORVhUKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICAvLyBTZGtNYW5hZ2VyLmluc3RhbmNlLmdhbWVTaGFyZUFjdGl2ZSgpXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5zaGFyZUdhbWVUb0ZyaWVuZChudWxsLCAn5YiG5Lqr57uZ5aW95Y+LJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbXBsZXRlTm90aWNlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnQ29tcGxldGUnKS5hY3RpdmUgPSBzdGF0dXNcclxuICAgICAgICBpZihzdGF0dXMpe1xyXG4gICAgICAgICAgICB0aGlzLm5leHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkdvRmlyZUNsaWNrKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UucmVjb3JkaW5nVmlkZW9TaGFyZShudWxsLCAn5b2V5Yi26KeG6aKR5YiG5LqrJyk7XHJcbiAgICB9XHJcbn1cclxuIl19