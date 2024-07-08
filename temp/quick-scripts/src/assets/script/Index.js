"use strict";
cc._RF.push(module, 'd8b18KM7cBP1rlp+wsXDDIB', 'Index');
// script/Index.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("./Enum");
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var ResourceManager_1 = require("./manager/ResourceManager");
var SdkManager_1 = require("./manager/SdkManager");
var StaticInstance_1 = require("./StaticInstance");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collisionManagerDebug = false;
        _this.loadfill = null;
        _this.loadball = null;
        _this.jdt = null;
        _this.once = true;
        return _this;
    }
    /**
        * 加载场景时的初始化操作。
        * 此函数负责调用第三方登录SDK进行登录操作，加载资源，恢复游戏状态，初始化碰撞检测系统，
        * 以及加载和初始化微信SDK的相关功能。
        */
    Index.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var colManager, loadTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (window["tt"]) {
                            tt.login({
                                force: true,
                                success: function (res) {
                                    console.log("login \u8C03\u7528\u6210\u529F" + res.code + " " + res.anonymousCode);
                                },
                                fail: function (res) {
                                    console.log("login \u8C03\u7528\u5931\u8D25");
                                },
                            });
                        }
                        DataManager_1.default.instance.loadingRate = 0;
                        this.loadball.x = -278;
                        // 加载resource资源
                        return [4 /*yield*/, ResourceManager_1.default.instance.loadRes(Enum_1.ENUM_RESOURCE_TYPE.AUDIO)];
                    case 1:
                        // 加载resource资源
                        _a.sent();
                        return [4 /*yield*/, ResourceManager_1.default.instance.loadRes(Enum_1.ENUM_RESOURCE_TYPE.FLAG)
                            // 读档
                        ];
                    case 2:
                        _a.sent();
                        // 读档
                        DataManager_1.default.instance.restore();
                        // 播放音乐
                        AudioManager_1.default.instance.playMusic();
                        colManager = cc.director.getCollisionManager();
                        colManager.enabled = true;
                        if (this.collisionManagerDebug) {
                            colManager.enabledDebugDraw = true;
                        }
                        // 初始化微信sdk
                        SdkManager_1.default.instance.videoAdLoad();
                        // SdkManager.instance.getRank()
                        SdkManager_1.default.instance.gameSharePassive();
                        if (window["wx"]) {
                            loadTask = wx.loadSubpackage({
                                name: 'Bundle1',
                                success: function (res) {
                                    // 分包加载成功后通过 success 回调
                                },
                                fail: function (res) {
                                    // 分包加载失败通过 fail 回调
                                }
                            });
                            loadTask.onProgressUpdate(function (res) {
                                console.log('下载进度', res.progress);
                                console.log('已经下载的数据长度', res.totalBytesWritten);
                                console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
   * 根据数据管理器的加载进度更新加载界面的显示。
   * 此方法主要用于在游戏加载过程中，动态更新加载条的填充进度和加载球的位置。
   * 当加载进度达到100%时，切换界面从加载界面到主菜单界面。
   *
   * @param dt 时间间隔，通常代表每帧的时间长度，用于更新动画效果。
   */
    Index.prototype.update = function (dt) {
        // console.log(DataManager.instance.loadingRate)
        if (this.loadfill && this.once) {
            this.loadfill.fillRange = DataManager_1.default.instance.loadingRate;
            this.loadball.x = -278 + this.loadfill.fillRange * 588;
            this.jdt.width = this.loadfill.fillRange * 608;
            if (DataManager_1.default.instance.loadingRate >= 1) {
                this.once = false;
                // menu已加载完毕
                // 展示ui
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOADING, false);
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, true, function () {
                    DataManager_1.default.instance.loadingRate = 1;
                });
            }
        }
    };
    __decorate([
        property
    ], Index.prototype, "collisionManagerDebug", void 0);
    __decorate([
        property(cc.Sprite)
    ], Index.prototype, "loadfill", void 0);
    __decorate([
        property(cc.Node)
    ], Index.prototype, "loadball", void 0);
    __decorate([
        property(cc.Node)
    ], Index.prototype, "jdt", void 0);
    Index = __decorate([
        ccclass
    ], Index);
    return Index;
}(cc.Component));
exports.default = Index;

cc._RF.pop();