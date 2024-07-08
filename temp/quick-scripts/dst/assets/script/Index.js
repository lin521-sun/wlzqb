
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsK0JBQTBEO0FBQzFELHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELG1EQUE4QztBQUM5QyxtREFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUEwRkM7UUF2RkcsMkJBQXFCLEdBQVksS0FBSyxDQUFDO1FBRXZDLGNBQVEsR0FBYyxJQUFJLENBQUE7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBd0RuQixVQUFJLEdBQVksSUFBSSxDQUFDOztJQXlCekIsQ0FBQztJQWhGRzs7OztVQUlNO0lBQ1Usc0JBQU0sR0FBdEI7Ozs7Ozt3QkFDSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDO2dDQUNMLEtBQUssRUFBRSxJQUFJO2dDQUNYLE9BQU8sWUFBQyxHQUFHO29DQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWEsR0FBRyxDQUFDLElBQUksU0FBSSxHQUFHLENBQUMsYUFBZSxDQUFDLENBQUM7Z0NBQzlELENBQUM7Z0NBQ0QsSUFBSSxZQUFDLEdBQUc7b0NBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBWSxDQUFDLENBQUM7Z0NBQzlCLENBQUM7NkJBQ0osQ0FBQyxDQUFDO3lCQUNOO3dCQUNELHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7d0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENB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d0RBQzhCO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUNDO0lBVEYsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTBGekI7SUFBRCxZQUFDO0NBMUZELEFBMEZDLENBMUZrQyxFQUFFLENBQUMsU0FBUyxHQTBGOUM7a0JBMUZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCB7IEVOVU1fUkVTT1VSQ0VfVFlQRSwgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4vRW51bVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL21hbmFnZXIvRGF0YU1hbmFnZXInO1xyXG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvUmVzb3VyY2VNYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvU2RrTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gXCIuL1N0YXRpY0luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGxldCB0dDogYW55O1xyXG5kZWNsYXJlIGxldCB3eDogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb2xsaXNpb25NYW5hZ2VyRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBsb2FkZmlsbDogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2FkYmFsbDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgamR0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLyoqXHJcbiAgICAgICAgKiDliqDovb3lnLrmma/ml7bnmoTliJ3lp4vljJbmk43kvZzjgIJcclxuICAgICAgICAqIOatpOWHveaVsOi0n+i0o+iwg+eUqOesrOS4ieaWueeZu+W9lVNES+i/m+ihjOeZu+W9leaTjeS9nO+8jOWKoOi9vei1hOa6kO+8jOaBouWkjea4uOaIj+eKtuaAge+8jOWIneWni+WMlueisOaSnuajgOa1i+ezu+e7n++8jFxyXG4gICAgICAgICog5Lul5Y+K5Yqg6L295ZKM5Yid5aeL5YyW5b6u5L+hU0RL55qE55u45YWz5Yqf6IO944CCXHJcbiAgICAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIHR0LmxvZ2luKHtcclxuICAgICAgICAgICAgICAgIGZvcmNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9naW4g6LCD55So5oiQ5YqfJHtyZXMuY29kZX0gJHtyZXMuYW5vbnltb3VzQ29kZX1gKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2dpbiDosIPnlKjlpLHotKVgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IDBcclxuICAgICAgICB0aGlzLmxvYWRiYWxsLnggPSAtMjc4O1xyXG4gICAgICAgIC8vIOWKoOi9vXJlc291cmNl6LWE5rqQXHJcbiAgICAgICAgYXdhaXQgUmVzb3VyY2VNYW5hZ2VyLmluc3RhbmNlLmxvYWRSZXMoRU5VTV9SRVNPVVJDRV9UWVBFLkFVRElPKVxyXG4gICAgICAgIGF3YWl0IFJlc291cmNlTWFuYWdlci5pbnN0YW5jZS5sb2FkUmVzKEVOVU1fUkVTT1VSQ0VfVFlQRS5GTEFHKVxyXG4gICAgICAgIC8vIOivu+aho1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlc3RvcmUoKVxyXG4gICAgICAgIC8vIOaSreaUvumfs+S5kFxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5TXVzaWMoKVxyXG4gICAgICAgIC8vIOeisOaSnuezu+e7n1xyXG4gICAgICAgIGNvbnN0IGNvbE1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgY29sTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25NYW5hZ2VyRGVidWcpIHtcclxuICAgICAgICAgICAgY29sTWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5b6u5L+hc2RrXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS52aWRlb0FkTG9hZCgpXHJcbiAgICAgICAgLy8gU2RrTWFuYWdlci5pbnN0YW5jZS5nZXRSYW5rKClcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLmdhbWVTaGFyZVBhc3NpdmUoKVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJ3eFwiXSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkVGFzayA9IHd4LmxvYWRTdWJwYWNrYWdlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdCdW5kbGUxJywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veaIkOWKn+WQjumAmui/hyBzdWNjZXNzIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxvYWRUYXNrLm9uUHJvZ3Jlc3NVcGRhdGUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuIvovb3ov5vluqYnLCByZXMucHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bey57uP5LiL6L2955qE5pWw5o2u6ZW/5bqmJywgcmVzLnRvdGFsQnl0ZXNXcml0dGVuKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+mihOacn+mcgOimgeS4i+i9veeahOaVsOaNruaAu+mVv+W6picsIHJlcy50b3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbmNlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAqIOagueaNruaVsOaNrueuoeeQhuWZqOeahOWKoOi9vei/m+W6puabtOaWsOWKoOi9veeVjOmdoueahOaYvuekuuOAglxyXG4gICAqIOatpOaWueazleS4u+imgeeUqOS6juWcqOa4uOaIj+WKoOi9vei/h+eoi+S4re+8jOWKqOaAgeabtOaWsOWKoOi9veadoeeahOWhq+WFhei/m+W6puWSjOWKoOi9veeQg+eahOS9jee9ruOAglxyXG4gICAqIOW9k+WKoOi9vei/m+W6pui+vuWIsDEwMCXml7bvvIzliIfmjaLnlYzpnaLku47liqDovb3nlYzpnaLliLDkuLvoj5zljZXnlYzpnaLjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0gZHQg5pe26Ze06Ze06ZqU77yM6YCa5bi45Luj6KGo5q+P5bin55qE5pe26Ze06ZW/5bqm77yM55So5LqO5pu05paw5Yqo55S75pWI5p6c44CCXHJcbiAgICovXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSlcclxuICAgICAgICBpZiAodGhpcy5sb2FkZmlsbCAmJiB0aGlzLm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZmlsbC5maWxsUmFuZ2UgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRiYWxsLnggPSAtMjc4ICsgdGhpcy5sb2FkZmlsbC5maWxsUmFuZ2UgKiA1ODg7XHJcbiAgICAgICAgICAgIHRoaXMuamR0LndpZHRoID0gdGhpcy5sb2FkZmlsbC5maWxsUmFuZ2UgKiA2MDg7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIG1lbnXlt7LliqDovb3lrozmr5VcclxuICAgICAgICAgICAgICAgIC8vIOWxleekunVpXHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5MT0FESU5HLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLk1FTlUsIHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IDFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19