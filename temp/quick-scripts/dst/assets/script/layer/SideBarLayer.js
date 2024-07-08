
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/SideBarLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '483a4Jyx5pB46RwG4OHpMmz', 'SideBarLayer');
// script/layer/SideBarLayer.ts

"use strict";
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
exports.SideBarLayer = void 0;
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var DataManager_1 = require("../manager/DataManager");
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SideBarLayer = /** @class */ (function (_super) {
    __extends(SideBarLayer, _super);
    function SideBarLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.go_side_btn = null;
        _this.get_gift_btn = null;
        _this.isFromSidebar = false;
        return _this;
    }
    SideBarLayer.prototype.onEnable = function () {
        var _this = this;
        var value = DataManager_1.default.instance.SideBarReward;
        if (value) {
            this.hiddenBtn();
        }
        else {
            if (window["tt"]) {
                tt.onShow(function (res) {
                    // 获取启动信息，可以判断是否从侧边栏启动
                    // 判断是否从侧边栏启动
                    _this.isFromSidebar = res.scene === 'sidebar';
                    // 在这里根据isFromSidebar的值显示或隐藏相关的按钮节点
                    console.log('启动信息: ', res);
                    if (_this.go_side_btn) {
                        _this.go_side_btn.active = !_this.isFromSidebar; // 根据启动状态判断是否显示去侧边栏按钮
                    }
                    if (_this.get_gift_btn) {
                        _this.get_gift_btn.active = _this.isFromSidebar; // 根据启动状态判断是否显示返回按钮
                    }
                });
            }
        }
    };
    SideBarLayer.prototype.hiddenBtn = function () {
        this.go_side_btn.active = false;
        this.get_gift_btn.active = false;
    };
    SideBarLayer.prototype.onBtnClose = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SIDEBARLAYER, false);
    };
    SideBarLayer.prototype.onCblLingquClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        // EnergyMgr.ins.changeEnergy(true, 10)
        for (var i = 0; i < DataManager_1.default.instance.skillNums.length; i++) {
            DataManager_1.default.instance.skillNums[i] += 1;
        }
        DataManager_1.default.instance.SideBarReward = true;
        this.hiddenBtn();
    };
    SideBarLayer.prototype.onGoCblClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (window["tt"]) {
            tt.checkScene({
                //判断当前宿主是否支持跳转侧边栏
                scene: 'sidebar',
                success: function (res) {
                    console.log('检查结果: ', res.isExist);
                    if (res.isExist) {
                        // 展示奖励入口，进入步骤二
                        console.log('当前宿主版本支持侧边栏场景');
                        // 支持侧边栏场景，跳转到侧边栏
                        tt.navigateToScene({
                            scene: 'sidebar',
                            success: function (res) {
                                console.log('跳转成功');
                                tt.showToast({
                                    title: '跳转成功',
                                    // icon: "none",
                                    duration: 2000,
                                });
                            },
                            fail: function (res) {
                                console.log('跳转失败: ', res);
                                // 跳转失败回调逻辑
                                tt.showToast({
                                    title: '跳转成功',
                                    // icon: "none",
                                    duration: 2000,
                                });
                            },
                        });
                    }
                    else {
                        console.log('当前宿主版本不支持侧边栏场景');
                        // 显示提示或进行其他操作
                    }
                },
                fail: function (res) {
                    console.log('失败回调逻辑:', res);
                    // 失败回调逻辑，显示错误信息或进行其他操作
                },
            });
        }
    };
    __decorate([
        property(cc.Node)
    ], SideBarLayer.prototype, "go_side_btn", void 0);
    __decorate([
        property(cc.Node)
    ], SideBarLayer.prototype, "get_gift_btn", void 0);
    SideBarLayer = __decorate([
        ccclass
    ], SideBarLayer);
    return SideBarLayer;
}(Baselayer_1.default));
exports.SideBarLayer = SideBarLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcU2lkZUJhckxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBd0Q7QUFDeEQsb0RBQW1EO0FBQ25ELHdEQUFtRDtBQUNuRCxzREFBaUQ7QUFDakQseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLGdDQUFTO0lBQTNDO1FBQUEscUVBNkZDO1FBM0ZXLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3JDLG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQXdGbkMsQ0FBQztJQXZGYSwrQkFBUSxHQUFsQjtRQUFBLGlCQXNCQztRQXJCRyxJQUFNLEtBQUssR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUE7UUFDaEQsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7YUFDSTtZQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHO29CQUNULHNCQUFzQjtvQkFDdEIsYUFBYTtvQkFDYixLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDO29CQUM3QyxtQ0FBbUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLHFCQUFxQjtxQkFDdkU7b0JBQ0QsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO3dCQUNu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QUFDO3FEQUNrQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNtQjtJQUo1QixZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBNkZ4QjtJQUFELG1CQUFDO0NBN0ZELEFBNkZDLENBN0ZpQyxtQkFBUyxHQTZGMUM7QUE3Rlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fVUlfVFlQRSB9IGZyb20gJy4uL0VudW0nO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4uL1N0YXRpY0luc3RhbmNlJztcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlcic7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IEJhc2VMYXllciBmcm9tICcuL0Jhc2VsYXllcic7XHJcbmRlY2xhcmUgbGV0IHR0OiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU2lkZUJhckxheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBnb19zaWRlX2J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZ2V0X2dpZnRfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzRnJvbVNpZGViYXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLlNpZGVCYXJSZXdhcmRcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRkZW5CdG4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICAgICAgdHQub25TaG93KHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5ZCv5Yqo5L+h5oGv77yM5Y+v5Lul5Yik5pat5piv5ZCm5LuO5L6n6L655qCP5ZCv5YqoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5piv5ZCm5LuO5L6n6L655qCP5ZCv5YqoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Zyb21TaWRlYmFyID0gcmVzLnNjZW5lID09PSAnc2lkZWJhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Zyo6L+Z6YeM5qC55o2uaXNGcm9tU2lkZWJhcueahOWAvOaYvuekuuaIlumakOiXj+ebuOWFs+eahOaMiemSruiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflkK/liqjkv6Hmga86ICcsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29fc2lkZV9idG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb19zaWRlX2J0bi5hY3RpdmUgPSAhdGhpcy5pc0Zyb21TaWRlYmFyOyAvLyDmoLnmja7lkK/liqjnirbmgIHliKTmlq3mmK/lkKbmmL7npLrljrvkvqfovrnmoI/mjInpkq5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0X2dpZnRfYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X2dpZnRfYnRuLmFjdGl2ZSA9IHRoaXMuaXNGcm9tU2lkZWJhcjsgLy8g5qC55o2u5ZCv5Yqo54q25oCB5Yik5pat5piv5ZCm5pi+56S66L+U5Zue5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZGVuQnRuKCkge1xyXG4gICAgICAgIHRoaXMuZ29fc2lkZV9idG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nZXRfZ2lmdF9idG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5TSURFQkFSTEFZRVIsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2JsTGluZ3F1Q2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgLy8gRW5lcmd5TWdyLmlucy5jaGFuZ2VFbmVyZ3kodHJ1ZSwgMTApXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2tpbGxOdW1zW2ldICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLlNpZGVCYXJSZXdhcmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGlkZGVuQnRuKCk7XHJcbiAgICB9XHJcbiAgICBvbkdvQ2JsQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIHR0LmNoZWNrU2NlbmUoe1xyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3lvZPliY3lrr/kuLvmmK/lkKbmlK/mjIHot7PovazkvqfovrnmoI9cclxuICAgICAgICAgICAgICAgIHNjZW5lOiAnc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5qOA5p+l57uT5p6cOiAnLCByZXMuaXNFeGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pc0V4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWxleekuuWlluWKseWFpeWPo++8jOi/m+WFpeatpemqpOS6jFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN5a6/5Li754mI5pys5pSv5oyB5L6n6L655qCP5Zy65pmvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaUr+aMgeS+p+i+ueagj+WcuuaZr++8jOi3s+i9rOWIsOS+p+i+ueagj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0dC5uYXZpZ2F0ZVRvU2NlbmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmU6ICdzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfot7PovazmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+i3s+i9rOaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6Lez6L2s5aSx6LSlOiAnLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi3s+i9rOWksei0peWbnuiwg+mAu+i+kVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR0LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6Lez6L2s5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeWuv+S4u+eJiOacrOS4jeaUr+aMgeS+p+i+ueagj+WcuuaZrycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmmL7npLrmj5DnpLrmiJbov5vooYzlhbbku5bmk43kvZxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0peWbnuiwg+mAu+i+kTonLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWksei0peWbnuiwg+mAu+i+ke+8jOaYvuekuumUmeivr+S/oeaBr+aIlui/m+ihjOWFtuS7luaTjeS9nFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19