"use strict";
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