
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Ball');
require('./assets/script/Breath');
require('./assets/script/Camera');
require('./assets/script/Endpoint');
require('./assets/script/Enemy');
require('./assets/script/Enum');
require('./assets/script/Food');
require('./assets/script/Index');
require('./assets/script/Levels');
require('./assets/script/Paper');
require('./assets/script/Player');
require('./assets/script/StaticInstance');
require('./assets/script/Timer');
require('./assets/script/Toast');
require('./assets/script/Utils');
require('./assets/script/layer/Baselayer');
require('./assets/script/layer/GameLayer');
require('./assets/script/layer/LevelLayer');
require('./assets/script/layer/LoadingLayer');
require('./assets/script/layer/LoseLayer');
require('./assets/script/layer/MenuLayer');
require('./assets/script/layer/NoticeLayer');
require('./assets/script/layer/RankLayer');
require('./assets/script/layer/SettingLayer');
require('./assets/script/layer/SideBarLayer');
require('./assets/script/layer/TipLayer');
require('./assets/script/layer/WinLayer');
require('./assets/script/manager/AudioManager');
require('./assets/script/manager/DataManager');
require('./assets/script/manager/EventManager');
require('./assets/script/manager/GameManager');
require('./assets/script/manager/ResourceManager');
require('./assets/script/manager/SdkManager');
require('./assets/script/manager/UIManager');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/LevelLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ecdckqBJVEvLztePMbE7hy', 'LevelLayer');
// script/layer/LevelLayer.ts

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
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("./../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var Baselayer_1 = require("./Baselayer");
var ResourceManager_1 = require("../manager/ResourceManager");
var DataManager_1 = require("../manager/DataManager");
var Levels_1 = require("../Levels");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelLayer = /** @class */ (function (_super) {
    __extends(LevelLayer, _super);
    function LevelLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelContent = null;
        _this.levelItemPrefab = null;
        return _this;
    }
    LevelLayer.prototype.onEnable = function () {
        this.onRendor();
    };
    LevelLayer.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LEVEL, false);
    };
    LevelLayer.prototype.onRendor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, data, levelItem, level, flag, button, event;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.levelContent && this.levelItemPrefab))
                            return [2 /*return*/];
                        this.levelContent.removeAllChildren();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < Levels_1.Levels.length)) return [3 /*break*/, 4];
                        data = Levels_1.Levels[i]['info'];
                        levelItem = cc.instantiate(this.levelItemPrefab);
                        level = i + 1;
                        return [4 /*yield*/, ResourceManager_1.default.instance.getFlag(data['icon'])];
                    case 2:
                        flag = _a.sent();
                        levelItem.getChildByName('flag').getComponent(cc.Sprite).spriteFrame = flag;
                        levelItem.getChildByName('team').getComponent(cc.Label).string = "" + data['team'];
                        levelItem.getChildByName('intro').getComponent(cc.Label).string = "" + data['intro'];
                        levelItem.parent = this.levelContent;
                        button = levelItem.getComponent(cc.Button);
                        if (level > DataManager_1.default.instance.maxLevel) {
                            levelItem.getChildByName('lock').active = true;
                            button.enabled = false;
                        }
                        else {
                            levelItem.getChildByName('lock').active = false;
                            event = new cc.Component.EventHandler();
                            event.target = this.node;
                            event.component = 'LevelLayer';
                            event.handler = 'onLevelItemClick';
                            event.customEventData = "" + level;
                            button.clickEvents.push(event);
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LevelLayer.prototype.onLevelItemClick = function (e, level) {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        var currentLevel = parseInt(level);
        if (currentLevel <= DataManager_1.default.instance.maxLevel) {
            DataManager_1.default.instance.level = currentLevel;
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, false);
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LEVEL, false);
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.GAME);
        }
    };
    __decorate([
        property(cc.Node)
    ], LevelLayer.prototype, "levelContent", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelLayer.prototype, "levelItemPrefab", void 0);
    LevelLayer = __decorate([
        ccclass
    ], LevelLayer);
    return LevelLayer;
}(Baselayer_1.default));
exports.default = LevelLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcTGV2ZWxMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsZ0NBQXlFO0FBQ3pFLHNEQUFxRDtBQUNyRCx3REFBbUQ7QUFDbkQseUNBQW9DO0FBQ3BDLDhEQUF5RDtBQUN6RCxzREFBaUQ7QUFDakQsb0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFTO0lBQWpEO1FBQUEscUVBdURDO1FBcERHLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLHFCQUFlLEdBQWMsSUFBSSxDQUFBOztJQWtEckMsQ0FBQztJQWhERyw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFFSyw2QkFBUSxHQUFkOzs7Ozs7d0JBQ0ksSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDOzRCQUFFLHNCQUFNO3dCQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUE7d0JBQzdCLENBQUMsR0FBRyxDQUFDOzs7NkJBQUUsQ0FBQSxDQUFDLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQTt3QkFDdEIsSUFBSSxHQUFHLGVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxN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QUFELGlCQUFDO0NBdkRELEFBdURDLENBdkR1QyxtQkFBUyxHQXVEaEQ7a0JBdkRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9HQU1FX0VWRU5ULCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4vLi4vU3RhdGljSW5zdGFuY2UnO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQmFzZUxheWVyIGZyb20gXCIuL0Jhc2VsYXllclwiO1xyXG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Jlc291cmNlTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTGV2ZWxzIH0gZnJvbSBcIi4uL0xldmVsc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbExheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxldmVsQ29udGVudDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsZXZlbEl0ZW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMub25SZW5kb3IoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLkxFVkVMLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblJlbmRvcigpe1xyXG4gICAgICAgIGlmKCEodGhpcy5sZXZlbENvbnRlbnQgJiYgdGhpcy5sZXZlbEl0ZW1QcmVmYWIpKSByZXR1cm5cclxuICAgICAgICB0aGlzLmxldmVsQ29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IExldmVscy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBMZXZlbHNbaV1bJ2luZm8nXVxyXG4gICAgICAgICAgICBjb25zdCBsZXZlbEl0ZW06IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsSXRlbVByZWZhYilcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBpICsgMVxyXG4gICAgICAgICAgICBjb25zdCBmbGFnID0gYXdhaXQgUmVzb3VyY2VNYW5hZ2VyLmluc3RhbmNlLmdldEZsYWcoZGF0YVsnaWNvbiddKVxyXG4gICAgICAgICAgICBsZXZlbEl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ZsYWcnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGZsYWdcclxuICAgICAgICAgICAgbGV2ZWxJdGVtLmdldENoaWxkQnlOYW1lKCd0ZWFtJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtkYXRhWyd0ZWFtJ119YFxyXG4gICAgICAgICAgICBsZXZlbEl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ludHJvJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtkYXRhWydpbnRybyddfWBcclxuICAgICAgICAgICAgbGV2ZWxJdGVtLnBhcmVudCA9IHRoaXMubGV2ZWxDb250ZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGxldmVsSXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICAgICBpZihsZXZlbCA+IERhdGFNYW5hZ2VyLmluc3RhbmNlLm1heExldmVsKXtcclxuICAgICAgICAgICAgICAgIGxldmVsSXRlbS5nZXRDaGlsZEJ5TmFtZSgnbG9jaycpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xvY2snKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gYnV0dG9u5re75Yqg5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKClcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY29tcG9uZW50ID0gJ0xldmVsTGF5ZXInXHJcbiAgICAgICAgICAgICAgICBldmVudC5oYW5kbGVyID0gJ29uTGV2ZWxJdGVtQ2xpY2snXHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXN0b21FdmVudERhdGEgPSBgJHtsZXZlbH1gXHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMucHVzaChldmVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxldmVsSXRlbUNsaWNrKGU6IGFueSwgbGV2ZWw6IHN0cmluZyl7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgY29uc3QgY3VycmVudExldmVsOiBudW1iZXIgPSBwYXJzZUludChsZXZlbClcclxuICAgICAgICBpZihjdXJyZW50TGV2ZWwgPD0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubWF4TGV2ZWwpe1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbCA9IGN1cnJlbnRMZXZlbFxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NRU5VLCBmYWxzZSlcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTEVWRUwsIGZhbHNlKVxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5HQU1FKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dba3fjKGRBIJ4ShMQJe29kG', 'Camera');
// script/Camera.ts

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
var Enum_1 = require("./Enum");
var DataManager_1 = require("./manager/DataManager");
var EventManager_1 = require("./manager/EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMove = false;
        // 位移目标位置为下一个block中心
        _this.targetPos = cc.Vec2.ZERO;
        return _this;
    }
    Camera.prototype.onLoad = function () {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, this.onCameraMove, this);
    };
    Camera.prototype.onDestroy = function () {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, this.onCameraMove);
    };
    /**
     * 当摄像机移动时触发的事件处理函数。
     * 主要用于计算和设置摄像机的目标位置，基于当前和下一个场景物体的位置。
     *
     * @param {Object} param0 包含当前和下一个场景物体位置的对象。
     * @param {cc.Vec2} param0.current 当前场景物体的位置。
     * @param {cc.Vec2} [param0.next] 下一个场景物体的位置，如果有的话。
     */
    Camera.prototype.onCameraMove = function (_a) {
        var current = _a.current, next = _a.next;
        this.isMove = false;
        var level = DataManager_1.default.instance.currentData;
        if (level['cameraMove'].x || level['cameraMove'].y) {
            this.isMove = true;
            // const endpoint = DataManager.instance.endpoint
            if (level['cameraMove'].x) {
                var moveX = current.x;
                if (next) {
                    var mid = Math.abs(next.x - current.x) / 2;
                    if (next.x >= current.x) {
                        moveX += mid;
                    }
                    else {
                        moveX -= mid;
                    }
                }
                this.targetPos.x = moveX;
            }
            else {
                this.targetPos.x = 0;
            }
            if (level['cameraMove'].y) {
                var moveY = current.y;
                if (next) {
                    var mid = Math.abs(next.y - current.y) / 2;
                    if (next.y >= current.y) {
                        moveY += mid;
                    }
                    else {
                        moveY -= mid;
                    }
                }
                if (moveY > 0)
                    moveY = Math.min(0, moveY);
                if (moveY < 0)
                    moveY = Math.min(-200, moveY + 200);
                this.targetPos.y = moveY;
            }
            else {
                this.targetPos.y = 0;
            }
        }
        else {
            this.node.setPosition(cc.Vec2.ZERO);
        }
    };
    Camera.prototype.onCameraReset = function () {
        this.isMove = false;
        this.node.setPosition(cc.Vec2.ZERO);
    };
    Camera.prototype.update = function (dt) {
        if (this.isMove) {
            // 相机所在位置
            var currentPos = this.node.getPosition();
            // 平滑过度
            currentPos.lerp(this.targetPos, 0.02, currentPos);
            this.node.setPosition(currentPos);
        }
    };
    Camera = __decorate([
        ccclass
    ], Camera);
    return Camera;
}(cc.Component));
exports.default = Camera;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLCtCQUF5QztBQUN6QyxxREFBZ0Q7QUFDaEQsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNkVDO1FBM0VHLFlBQU0sR0FBWSxLQUFLLENBQUE7UUFDdkIsb0JBQW9CO1FBQ3BCLGVBQVMsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUF5RXRDLENBQUM7SUF2RUcsdUJBQU0sR0FBTjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxzQkFBZSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2xGLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBZSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCw2QkFBWSxHQUFaLFVBQWEsRUFBaUI7WUFBZixPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBTSxLQUFLLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFBO1FBQzlDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2xCLGlEQUFpRDtZQUNqRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3JCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUM1QyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRTt3QkFDckIsS0FBSyxJQUFJLEdBQUcsQ0FBQTtxQkFDZjt5QkFBTTt3QkFDSCxLQUFLLElBQUksR0FBRyxDQUFBO3FCQUNmO2lCQUNKO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTthQUMzQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkI7WUFFRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3JCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUM1QyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRTt3QkFDckIsS0FBSyxJQUFJLEdBQUcsQ0FBQTtxQkFDZjt5QkFBTTt3QkFDSCxLQUFLLElBQUksR0FBRyxDQUFBO3FCQUNmO2lCQUNKO2dCQUNELElBQUksS0FBSyxHQUFHLENBQUM7b0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUN6QyxJQUFJLEtBQUssR0FBRyxDQUFDO29CQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQTtnQkFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO2FBQzNCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELDhCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLFNBQVM7WUFDVCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pDLE9BQU87WUFDUCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQTVFZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZFMUI7SUFBRCxhQUFDO0NBN0VELEFBNkVDLENBN0VtQyxFQUFFLENBQUMsU0FBUyxHQTZFL0M7a0JBN0VvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCB7IEVOVU1fR0FNRV9FVkVOVCB9IGZyb20gJy4vRW51bSc7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL21hbmFnZXIvRGF0YU1hbmFnZXInO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4vbWFuYWdlci9FdmVudE1hbmFnZXInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgaXNNb3ZlOiBib29sZWFuID0gZmFsc2VcclxuICAgIC8vIOS9jeenu+ebruagh+S9jee9ruS4uuS4i+S4gOS4qmJsb2Nr5Lit5b+DXHJcbiAgICB0YXJnZXRQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHRoaXMub25DYW1lcmFNb3ZlLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9mZihFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHRoaXMub25DYW1lcmFNb3ZlKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPmkYTlg4/mnLrnp7vliqjml7bop6blj5HnmoTkuovku7blpITnkIblh73mlbDjgIJcclxuICAgICAqIOS4u+imgeeUqOS6juiuoeeul+WSjOiuvue9ruaRhOWDj+acuueahOebruagh+S9jee9ru+8jOWfuuS6juW9k+WJjeWSjOS4i+S4gOS4quWcuuaZr+eJqeS9k+eahOS9jee9ruOAglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wIOWMheWQq+W9k+WJjeWSjOS4i+S4gOS4quWcuuaZr+eJqeS9k+S9jee9rueahOWvueixoeOAglxyXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBwYXJhbTAuY3VycmVudCDlvZPliY3lnLrmma/niankvZPnmoTkvY3nva7jgIJcclxuICAgICAqIEBwYXJhbSB7Y2MuVmVjMn0gW3BhcmFtMC5uZXh0XSDkuIvkuIDkuKrlnLrmma/niankvZPnmoTkvY3nva7vvIzlpoLmnpzmnInnmoTor53jgIJcclxuICAgICAqL1xyXG4gICAgb25DYW1lcmFNb3ZlKHsgY3VycmVudCwgbmV4dCB9KSB7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGxldmVsID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudERhdGFcclxuICAgICAgICBpZiAobGV2ZWxbJ2NhbWVyYU1vdmUnXS54IHx8IGxldmVsWydjYW1lcmFNb3ZlJ10ueSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gY29uc3QgZW5kcG9pbnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5lbmRwb2ludFxyXG4gICAgICAgICAgICBpZiAobGV2ZWxbJ2NhbWVyYU1vdmUnXS54KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW92ZVggPSBjdXJyZW50LnhcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlkID0gTWF0aC5hYnMobmV4dC54IC0gY3VycmVudC54KSAvIDJcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC54ID49IGN1cnJlbnQueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlWCArPSBtaWRcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlWCAtPSBtaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvcy54ID0gbW92ZVhcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zLnggPSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbFsnY2FtZXJhTW92ZSddLnkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb3ZlWSA9IGN1cnJlbnQueVxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmFicyhuZXh0LnkgLSBjdXJyZW50LnkpIC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0LnkgPj0gY3VycmVudC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZICs9IG1pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZIC09IG1pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlWSA+IDApIG1vdmVZID0gTWF0aC5taW4oMCwgbW92ZVkpXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZVkgPCAwKSBtb3ZlWSA9IE1hdGgubWluKC0yMDAsIG1vdmVZICsgMjAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb3MueSA9IG1vdmVZXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvcy55ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW1lcmFSZXNldCgpIHtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92ZSkge1xyXG4gICAgICAgICAgICAvLyDnm7jmnLrmiYDlnKjkvY3nva5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy8g5bmz5ruR6L+H5bqmXHJcbiAgICAgICAgICAgIGN1cnJlbnRQb3MubGVycCh0aGlzLnRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Enum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae8f9gG3kdMW4ocmDG/8ZAW', 'Enum');
// script/Enum.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM_UI_TYPE = exports.ENUM_RESOURCE_TYPE = exports.ENUM_AUDIO_CLIP = exports.ENUM_GAME_EVENT = exports.ENUM_COLLIDER_TAG = exports.ENUM_GAME_STATUS = exports.ENUM_ENEMY_STATUS = exports.ENUM_PLAYER_STATUS = void 0;
var ENUM_PLAYER_STATUS;
(function (ENUM_PLAYER_STATUS) {
    ENUM_PLAYER_STATUS[ENUM_PLAYER_STATUS["IDLE"] = 0] = "IDLE";
    ENUM_PLAYER_STATUS[ENUM_PLAYER_STATUS["READY"] = 1] = "READY";
    ENUM_PLAYER_STATUS[ENUM_PLAYER_STATUS["SHOOTING"] = 2] = "SHOOTING"; // 踢球
})(ENUM_PLAYER_STATUS = exports.ENUM_PLAYER_STATUS || (exports.ENUM_PLAYER_STATUS = {}));
var ENUM_ENEMY_STATUS;
(function (ENUM_ENEMY_STATUS) {
    ENUM_ENEMY_STATUS[ENUM_ENEMY_STATUS["IDLE"] = 0] = "IDLE";
    ENUM_ENEMY_STATUS[ENUM_ENEMY_STATUS["MOVE"] = 1] = "MOVE";
    ENUM_ENEMY_STATUS[ENUM_ENEMY_STATUS["ROUND"] = 2] = "ROUND";
    ENUM_ENEMY_STATUS[ENUM_ENEMY_STATUS["DIE"] = 3] = "DIE"; // 死亡
})(ENUM_ENEMY_STATUS = exports.ENUM_ENEMY_STATUS || (exports.ENUM_ENEMY_STATUS = {}));
// 游戏状态
var ENUM_GAME_STATUS;
(function (ENUM_GAME_STATUS) {
    ENUM_GAME_STATUS[ENUM_GAME_STATUS["INIT"] = 0] = "INIT";
    ENUM_GAME_STATUS[ENUM_GAME_STATUS["RUNING"] = 1] = "RUNING";
    ENUM_GAME_STATUS[ENUM_GAME_STATUS["SHOOTING"] = 2] = "SHOOTING";
    ENUM_GAME_STATUS[ENUM_GAME_STATUS["LOSE"] = 3] = "LOSE";
    ENUM_GAME_STATUS[ENUM_GAME_STATUS["WIN"] = 4] = "WIN";
})(ENUM_GAME_STATUS = exports.ENUM_GAME_STATUS || (exports.ENUM_GAME_STATUS = {}));
// 碰撞体
var ENUM_COLLIDER_TAG;
(function (ENUM_COLLIDER_TAG) {
    ENUM_COLLIDER_TAG[ENUM_COLLIDER_TAG["ENEMY"] = 0] = "ENEMY";
    ENUM_COLLIDER_TAG[ENUM_COLLIDER_TAG["BALL"] = 1] = "BALL";
    ENUM_COLLIDER_TAG[ENUM_COLLIDER_TAG["FOOD"] = 2] = "FOOD";
})(ENUM_COLLIDER_TAG = exports.ENUM_COLLIDER_TAG || (exports.ENUM_COLLIDER_TAG = {}));
// 事件类型
var ENUM_GAME_EVENT;
(function (ENUM_GAME_EVENT) {
    ENUM_GAME_EVENT["GAME_RESTART"] = "GAME_RESTART";
    ENUM_GAME_EVENT["GAME_NEXT"] = "GAME_NEXT";
    ENUM_GAME_EVENT["GAME_LOSE"] = "GAME_LOSE";
    ENUM_GAME_EVENT["GAME_WIN"] = "GAME_WIN";
    ENUM_GAME_EVENT["PLAYER_SHOOT"] = "PLAYER_SHOOT";
    ENUM_GAME_EVENT["CAMERA_MOVE"] = "CAMERA_MOVE";
    ENUM_GAME_EVENT["TIMER_START"] = "TIMER_START";
    ENUM_GAME_EVENT["TIMER_STOP"] = "TIMER_STOP";
    ENUM_GAME_EVENT["RENDOR_HOME_BTN"] = "RENDOR_HOME_BTN";
    ENUM_GAME_EVENT["GAME_VIBRATE"] = "GAME_VIBRATE";
})(ENUM_GAME_EVENT = exports.ENUM_GAME_EVENT || (exports.ENUM_GAME_EVENT = {}));
// 音效
var ENUM_AUDIO_CLIP;
(function (ENUM_AUDIO_CLIP) {
    ENUM_AUDIO_CLIP["BGM"] = "bgm";
    ENUM_AUDIO_CLIP["CLICK"] = "click";
    ENUM_AUDIO_CLIP["LOSE"] = "lose";
    ENUM_AUDIO_CLIP["WIN"] = "win";
    ENUM_AUDIO_CLIP["SHOOT"] = "shoot";
    ENUM_AUDIO_CLIP["CATCH"] = "catch";
    ENUM_AUDIO_CLIP["DIE"] = "die";
    ENUM_AUDIO_CLIP["LAUGH"] = "laugh";
    ENUM_AUDIO_CLIP["SLOWDOWN"] = "slowdown";
    ENUM_AUDIO_CLIP["GOOD"] = "good";
    ENUM_AUDIO_CLIP["GREAT"] = "great";
    ENUM_AUDIO_CLIP["EXCELLENT"] = "excellent";
    ENUM_AUDIO_CLIP["AMAZING"] = "amazing";
    ENUM_AUDIO_CLIP["UNBELIEVABLE"] = "unbelievable";
    ENUM_AUDIO_CLIP["BOO"] = "boo";
    ENUM_AUDIO_CLIP["SKILL"] = "skill";
    ENUM_AUDIO_CLIP["TIMER"] = "timer";
    ENUM_AUDIO_CLIP["SPELL"] = "spell";
    ENUM_AUDIO_CLIP["COLLECT"] = "collect";
})(ENUM_AUDIO_CLIP = exports.ENUM_AUDIO_CLIP || (exports.ENUM_AUDIO_CLIP = {}));
var ENUM_RESOURCE_TYPE;
(function (ENUM_RESOURCE_TYPE) {
    ENUM_RESOURCE_TYPE["AUDIO"] = "audio";
    ENUM_RESOURCE_TYPE["FLAG"] = "flag";
})(ENUM_RESOURCE_TYPE = exports.ENUM_RESOURCE_TYPE || (exports.ENUM_RESOURCE_TYPE = {}));
var ENUM_UI_TYPE;
(function (ENUM_UI_TYPE) {
    ENUM_UI_TYPE[ENUM_UI_TYPE["MENU"] = 0] = "MENU";
    ENUM_UI_TYPE[ENUM_UI_TYPE["GAME"] = 1] = "GAME";
    ENUM_UI_TYPE[ENUM_UI_TYPE["LEVEL"] = 2] = "LEVEL";
    ENUM_UI_TYPE[ENUM_UI_TYPE["SETTING"] = 3] = "SETTING";
    ENUM_UI_TYPE[ENUM_UI_TYPE["LOSE"] = 4] = "LOSE";
    ENUM_UI_TYPE[ENUM_UI_TYPE["WIN"] = 5] = "WIN";
    ENUM_UI_TYPE[ENUM_UI_TYPE["LOADING"] = 6] = "LOADING";
    ENUM_UI_TYPE[ENUM_UI_TYPE["RANK"] = 7] = "RANK";
    ENUM_UI_TYPE[ENUM_UI_TYPE["TIP"] = 8] = "TIP";
    ENUM_UI_TYPE[ENUM_UI_TYPE["NOTICE"] = 9] = "NOTICE";
    ENUM_UI_TYPE[ENUM_UI_TYPE["SIDEBARLAYER"] = 10] = "SIDEBARLAYER";
})(ENUM_UI_TYPE = exports.ENUM_UI_TYPE || (exports.ENUM_UI_TYPE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuZXhwb3J0IGVudW0gRU5VTV9QTEFZRVJfU1RBVFVTIHtcclxuICAgIElETEUsIC8vIOW+heaculxyXG4gICAgUkVBRFksIC8vIOaMgeeQg1xyXG4gICAgU0hPT1RJTkcgLy8g6Lii55CDXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVOVU1fRU5FTVlfU1RBVFVTIHtcclxuICAgIElETEUsIC8vIOW+heaculxyXG4gICAgTU9WRSwgLy8g55u057q/56e75YqoXHJcbiAgICBST1VORCwgLy8g5ZyG5ZGo6L+Q5YqoXHJcbiAgICBESUUgLy8g5q275LqhXHJcbn1cclxuXHJcbi8vIOa4uOaIj+eKtuaAgVxyXG5leHBvcnQgZW51bSBFTlVNX0dBTUVfU1RBVFVTIHtcclxuICAgIElOSVQsXHJcbiAgICBSVU5JTkcsXHJcbiAgICBTSE9PVElORyxcclxuICAgIExPU0UsXHJcbiAgICBXSU5cclxufVxyXG5cclxuLy8g56Kw5pKe5L2TXHJcbmV4cG9ydCBlbnVtIEVOVU1fQ09MTElERVJfVEFHIHtcclxuICAgIEVORU1ZID0gMCxcclxuICAgIEJBTEwgPSAxLFxyXG4gICAgRk9PRCA9IDJcclxufVxyXG5cclxuLy8g5LqL5Lu257G75Z6LXHJcbmV4cG9ydCBlbnVtIEVOVU1fR0FNRV9FVkVOVCB7XHJcbiAgICBHQU1FX1JFU1RBUlQgPSAnR0FNRV9SRVNUQVJUJyxcclxuICAgIEdBTUVfTkVYVCA9ICdHQU1FX05FWFQnLFxyXG4gICAgR0FNRV9MT1NFID0gJ0dBTUVfTE9TRScsXHJcbiAgICBHQU1FX1dJTiA9ICdHQU1FX1dJTicsXHJcbiAgICBQTEFZRVJfU0hPT1QgPSAnUExBWUVSX1NIT09UJyxcclxuICAgIENBTUVSQV9NT1ZFID0gJ0NBTUVSQV9NT1ZFJyxcclxuICAgIFRJTUVSX1NUQVJUID0gJ1RJTUVSX1NUQVJUJyxcclxuICAgIFRJTUVSX1NUT1AgPSAnVElNRVJfU1RPUCcsXHJcbiAgICBSRU5ET1JfSE9NRV9CVE4gPSAnUkVORE9SX0hPTUVfQlROJyxcclxuICAgIEdBTUVfVklCUkFURSA9ICdHQU1FX1ZJQlJBVEUnLFxyXG59XHJcblxyXG4vLyDpn7PmlYhcclxuZXhwb3J0IGVudW0gRU5VTV9BVURJT19DTElQIHtcclxuICAgIEJHTSA9ICdiZ20nLFxyXG4gICAgQ0xJQ0sgPSAnY2xpY2snLFxyXG4gICAgTE9TRSA9ICdsb3NlJyxcclxuICAgIFdJTiA9ICd3aW4nLFxyXG4gICAgU0hPT1QgPSAnc2hvb3QnLFxyXG4gICAgQ0FUQ0ggPSAnY2F0Y2gnLFxyXG4gICAgRElFID0gJ2RpZScsXHJcbiAgICBMQVVHSCA9ICdsYXVnaCcsXHJcbiAgICBTTE9XRE9XTiA9ICdzbG93ZG93bicsXHJcbiAgICBHT09EID0gJ2dvb2QnLFxyXG4gICAgR1JFQVQgPSAnZ3JlYXQnLFxyXG4gICAgRVhDRUxMRU5UID0gJ2V4Y2VsbGVudCcsXHJcbiAgICBBTUFaSU5HID0gJ2FtYXppbmcnLFxyXG4gICAgVU5CRUxJRVZBQkxFID0gJ3VuYmVsaWV2YWJsZScsXHJcbiAgICBCT08gPSAnYm9vJyxcclxuICAgIFNLSUxMID0gJ3NraWxsJyxcclxuICAgIFRJTUVSID0gJ3RpbWVyJyxcclxuICAgIFNQRUxMID0gJ3NwZWxsJyxcclxuICAgIENPTExFQ1QgPSAnY29sbGVjdCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRU5VTV9SRVNPVVJDRV9UWVBFIHtcclxuICAgIEFVRElPID0gJ2F1ZGlvJyxcclxuICAgIEZMQUcgPSAnZmxhZydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRU5VTV9VSV9UWVBFIHtcclxuICAgIE1FTlUsXHJcbiAgICBHQU1FLFxyXG4gICAgTEVWRUwsXHJcbiAgICBTRVRUSU5HLFxyXG4gICAgTE9TRSxcclxuICAgIFdJTixcclxuICAgIExPQURJTkcsXHJcbiAgICBSQU5LLFxyXG4gICAgVElQLFxyXG4gICAgTk9USUNFLFxyXG4gICAgU0lERUJBUkxBWUVSXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5b15tC14ZMlq6qjLJMPHpv', 'Food');
// script/Food.ts

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
var StaticInstance_1 = require("./StaticInstance");
var Enum_1 = require("./Enum");
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = Enum_1.ENUM_ENEMY_STATUS.IDLE;
        // 运动参数
        _this.speed = 200;
        // 运动位移(针对水平运动)
        _this.distance = 500;
        _this.tempDis = 0;
        // 移动方向(针对水平运动)
        _this.isDirX = false;
        // 移动方向
        _this.dir = 1;
        // 弧度(针对圆周运动)
        _this.radian = 0;
        // 半径(针对圆周运动)
        _this.circleRadius = 250;
        // 圆心(针对圆周运动)
        _this.circleCenter = cc.v2(0, 0);
        // 其父进攻方
        _this.blue = null;
        return _this;
    }
    Food.prototype.init = function (data) {
        Object.assign(this, data);
        DataManager_1.default.instance.foods.push(this);
        this.rendor();
    };
    Food.prototype.rendor = function () {
        this.node.setPosition(this.x, this.y);
        this.node.angle = -this.angle;
        // 直线移动
        if (this.status == Enum_1.ENUM_ENEMY_STATUS.MOVE) {
            this.schedule(this.move, 0.01);
        }
        else if (this.status == Enum_1.ENUM_ENEMY_STATUS.ROUND) {
            // 计算圆心
            this.circleCenter.x = this.blue.x;
            this.circleCenter.y = this.blue.y;
            this.schedule(this.circleMove, 0.01);
        }
    };
    Food.prototype.setParent = function (blue) {
        this.blue = blue;
    };
    Food.prototype.setSpeed = function (speed) {
        this.speed = speed;
        if (speed == 0) {
            this.unscheduleAllCallbacks();
        }
    };
    Food.prototype.playEffect = function () {
        var _a, _b;
        (_b = (_a = this.node) === null || _a === void 0 ? void 0 : _a.getChildByName('Effect')) === null || _b === void 0 ? void 0 : _b.getComponent(cc.ParticleSystem).resetSystem();
    };
    /**
     * 根据指定的时间间隔和移动方向更新物体的位置。
     * @param dt 时间间隔，用于计算物体在该时间段内的位移。
     */
    Food.prototype.move = function (dt) {
        if (this.isDirX) {
            this.tempDis += dt * this.speed * this.dir;
            if (this.tempDis > this.distance) {
                this.dir = -1;
            }
            else if (this.tempDis < -this.distance) {
                this.dir = 1;
            }
            this.node.x += dt * this.speed * this.dir;
        }
        else {
            this.tempDis += dt * this.speed * this.dir;
            if (this.tempDis > this.distance) {
                this.dir = -1;
            }
            else if (this.tempDis < -this.distance) {
                this.dir = 1;
            }
            this.node.y += dt * this.speed * this.dir;
        }
    };
    /**
     * 让节点沿圆形路径移动。
     * 此函数通过计算新的位置和角度，更新节点在圆形路径上的位置。
     * 它使用数学库中的三角函数来根据当前的弧度和速度计算新的x和y坐标。
     * @param dt 时间间隔，用于计算弧度的增加量。
     */
    Food.prototype.circleMove = function (dt) {
        // 先计算弧度
        this.radian += dt * (this.speed / 100);
        var x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
        var y = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
        this.node.position = cc.v3(x, y, 0);
        // Math.atan2 反正切函数 返回从X轴到某个点的角度（以弧度为单位）。
        var angle = Math.atan2(y, x) / (Math.PI / 180);
        this.node.angle = angle;
    };
    /**
 * 当检测到碰撞事件发生时的处理函数。
 * @param other 另一个碰撞器，用于判断是否与特定标签的物体发生碰撞。
 * @param self 自身的碰撞器，用于判断自身是否属于特定标签。
 *
 * 该函数在碰撞检测到特定对象时触发，执行相应的逻辑操作，如播放音效、禁用当前节点、
 * 更新数据管理器中的状态等。这些操作基于碰撞的对象标签（如球或食物）进行。
 */
    // 碰撞检测
    Food.prototype.onCollisionEnter = function (other, self) {
        // 跟球做碰撞
        if (other.tag == Enum_1.ENUM_COLLIDER_TAG.BALL) {
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.COLLECT);
            self.node.active = false;
            if (self.tag == Enum_1.ENUM_COLLIDER_TAG.FOOD) {
                // console.log('食物补充能量')
                if (DataManager_1.default.instance.powerEffectLoop <= 0) {
                    DataManager_1.default.instance.foodEffectLoop = 1;
                    DataManager_1.default.instance.powerCount = DataManager_1.default.instance.powerCountTarget;
                    StaticInstance_1.StaticInstance.uiManager.setPowerBar();
                }
            }
        }
    };
    Food = __decorate([
        ccclass
    ], Food);
    return Food;
}(cc.Component));
exports.default = Food;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDLFVBQVUsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQTtvQkFDdkUsK0JBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7aUJBQ3pDO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUF4SGdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F5SHhCO0lBQUQsV0FBQztDQXpIRCxBQXlIQyxDQXpIaUMsRUFBRSxDQUFDLFNBQVMsR0F5SDdDO2tCQXpIb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi9TdGF0aWNJbnN0YW5jZSc7XHJcbi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IEJhbGwgZnJvbSBcIi4vQmFsbFwiO1xyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fQ09MTElERVJfVEFHLCBFTlVNX0VORU1ZX1NUQVRVUywgRU5VTV9HQU1FX0VWRU5UIH0gZnJvbSBcIi4vRW51bVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9FdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHg6IG51bWJlclxyXG4gICAgeTogbnVtYmVyXHJcbiAgICBhbmdsZTogbnVtYmVyXHJcbiAgICBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTID0gRU5VTV9FTkVNWV9TVEFUVVMuSURMRVxyXG4gICAgLy8g6L+Q5Yqo5Y+C5pWwXHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwXHJcbiAgICAvLyDov5DliqjkvY3np7so6ZKI5a+55rC05bmz6L+Q5YqoKVxyXG4gICAgZGlzdGFuY2U6IG51bWJlciA9IDUwMFxyXG4gICAgdGVtcERpczogbnVtYmVyID0gMFxyXG4gICAgLy8g56e75Yqo5pa55ZCRKOmSiOWvueawtOW5s+i/kOWKqClcclxuICAgIGlzRGlyWDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICAvLyDnp7vliqjmlrnlkJFcclxuICAgIGRpcjogbnVtYmVyID0gMVxyXG4gICAgLy8g5byn5bqmKOmSiOWvueWchuWRqOi/kOWKqClcclxuICAgIHJhZGlhbjogbnVtYmVyID0gMFxyXG4gICAgLy8g5Y2K5b6EKOmSiOWvueWchuWRqOi/kOWKqClcclxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyID0gMjUwXHJcbiAgICAvLyDlnIblv4Mo6ZKI5a+55ZyG5ZGo6L+Q5YqoKVxyXG4gICAgY2lyY2xlQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgIC8vIOWFtueItui/m+aUu+aWuVxyXG4gICAgYmx1ZTogUGxheWVyID0gbnVsbFxyXG5cclxuICAgIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RzLnB1c2godGhpcylcclxuICAgICAgICB0aGlzLnJlbmRvcigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSlcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtdGhpcy5hbmdsZVxyXG4gICAgICAgIC8vIOebtOe6v+enu+WKqFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5tb3ZlLCAwLjAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQpIHtcclxuICAgICAgICAgICAgLy8g6K6h566X5ZyG5b+DXHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQ2VudGVyLnggPSB0aGlzLmJsdWUueFxyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUNlbnRlci55ID0gdGhpcy5ibHVlLnlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNpcmNsZU1vdmUsIDAuMDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJlbnQoYmx1ZTogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5ibHVlID0gYmx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHNwZWVkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWRcclxuICAgICAgICBpZiAoc3BlZWQgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5RWZmZWN0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZT8uZ2V0Q2hpbGRCeU5hbWUoJ0VmZmVjdCcpPy5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnJlc2V0U3lzdGVtKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5oyH5a6a55qE5pe26Ze06Ze06ZqU5ZKM56e75Yqo5pa55ZCR5pu05paw54mp5L2T55qE5L2N572u44CCXHJcbiAgICAgKiBAcGFyYW0gZHQg5pe26Ze06Ze06ZqU77yM55So5LqO6K6h566X54mp5L2T5Zyo6K+l5pe26Ze05q615YaF55qE5L2N56e744CCXHJcbiAgICAgKi9cclxuICAgIG1vdmUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlyWCkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBEaXMgKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcERpcyA+IHRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gLTFcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlbXBEaXMgPCAtdGhpcy5kaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBEaXMgKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcERpcyA+IHRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gLTFcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlbXBEaXMgPCAtdGhpcy5kaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuqeiKgueCueayv+WchuW9oui3r+W+hOenu+WKqOOAglxyXG4gICAgICog5q2k5Ye95pWw6YCa6L+H6K6h566X5paw55qE5L2N572u5ZKM6KeS5bqm77yM5pu05paw6IqC54K55Zyo5ZyG5b2i6Lev5b6E5LiK55qE5L2N572u44CCXHJcbiAgICAgKiDlroPkvb/nlKjmlbDlrablupPkuK3nmoTkuInop5Llh73mlbDmnaXmoLnmja7lvZPliY3nmoTlvKfluqblkozpgJ/luqborqHnrpfmlrDnmoR45ZKMeeWdkOagh+OAglxyXG4gICAgICogQHBhcmFtIGR0IOaXtumXtOmXtOmalO+8jOeUqOS6juiuoeeul+W8p+W6pueahOWinuWKoOmHj+OAglxyXG4gICAgICovXHJcbiAgICBjaXJjbGVNb3ZlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyDlhYjorqHnrpflvKfluqZcclxuICAgICAgICB0aGlzLnJhZGlhbiArPSBkdCAqICh0aGlzLnNwZWVkIC8gMTAwKTtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5jb3ModGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5zaW4odGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh4LCB5LCAwKTtcclxuICAgICAgICAvLyBNYXRoLmF0YW4yIOWPjeato+WIh+WHveaVsCDov5Tlm57ku45Y6L205Yiw5p+Q5Liq54K555qE6KeS5bqm77yI5Lul5byn5bqm5Li65Y2V5L2N77yJ44CCXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KSAvIChNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICog5b2T5qOA5rWL5Yiw56Kw5pKe5LqL5Lu25Y+R55Sf5pe255qE5aSE55CG5Ye95pWw44CCXHJcbiAqIEBwYXJhbSBvdGhlciDlj6bkuIDkuKrnorDmkp7lmajvvIznlKjkuo7liKTmlq3mmK/lkKbkuI7nibnlrprmoIfnrb7nmoTniankvZPlj5HnlJ/norDmkp7jgIJcclxuICogQHBhcmFtIHNlbGYg6Ieq6Lqr55qE56Kw5pKe5Zmo77yM55So5LqO5Yik5pat6Ieq6Lqr5piv5ZCm5bGe5LqO54m55a6a5qCH562+44CCXHJcbiAqIFxyXG4gKiDor6Xlh73mlbDlnKjnorDmkp7mo4DmtYvliLDnibnlrprlr7nosaHml7bop6blj5HvvIzmiafooYznm7jlupTnmoTpgLvovpHmk43kvZzvvIzlpoLmkq3mlL7pn7PmlYjjgIHnpoHnlKjlvZPliY3oioLngrnjgIFcclxuICog5pu05paw5pWw5o2u566h55CG5Zmo5Lit55qE54q25oCB562J44CC6L+Z5Lqb5pON5L2c5Z+65LqO56Kw5pKe55qE5a+56LGh5qCH562+77yI5aaC55CD5oiW6aOf54mp77yJ6L+b6KGM44CCXHJcbiAqL1xyXG4gICAgLy8g56Kw5pKe5qOA5rWLXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Cb3hDb2xsaWRlciwgc2VsZjogY2MuQm94Q29sbGlkZXIpIHtcclxuICAgICAgICAvLyDot5/nkIPlgZrnorDmkp5cclxuICAgICAgICBpZiAob3RoZXIudGFnID09IEVOVU1fQ09MTElERVJfVEFHLkJBTEwpIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ09MTEVDVClcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmIChzZWxmLnRhZyA9PSBFTlVNX0NPTExJREVSX1RBRy5GT09EKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6aOf54mp6KGl5YWF6IO96YePJylcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckVmZmVjdExvb3AgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RFZmZlY3RMb29wID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldFBvd2VyQmFyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cf7b6Ytg5KA6jWVBeOJfS5', 'EventManager');
// script/manager/EventManager.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.eventMap = new Map();
    }
    EventManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(EventManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    /**
       * 注册事件监听器。
       *
       * 此方法用于将一个事件监听函数绑定到特定的事件名上。如果事件名已存在，则将新的监听函数添加到已有的监听函数列表中；
       * 如果事件名不存在，则创建一个新的事件名并添加监听函数。
       *
       * @param name 事件名。用于标识要监听的事件。
       * @param event 事件监听函数。当事件被触发时，这个函数将被调用。
       * @param context 上下文对象。可选参数，用于指定事件监听函数执行时的上下文对象，默认为undefined。
       */
    EventManager.prototype.on = function (name, event, context) {
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            eventArr.push({ event: event, context: context });
        }
        else {
            this.eventMap.set(name, [{ event: event, context: context }]);
        }
    };
    /**
       * 取消绑定一个事件处理函数。
       * @param name 事件的名称。
       * @param event 待取消绑定的事件处理函数。
       *
       * 此函数用于从特定事件名下的事件处理函数数组中移除指定的事件处理函数。
       * 如果事件名存在且数组中包含指定的事件处理函数，则将其移除。
       */
    EventManager.prototype.off = function (name, event) {
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            var index = eventArr.findIndex(function (item) { return item.event == event; });
            if (index > -1)
                eventArr.splice(index, 1);
        }
    };
    /**
         * 发送事件给对应的监听器。
         *
         * 此函数用于触发特定名称的事件，事件的监听器将根据名称从事件映射表中找到并调用。
         * 如果事件有上下文（context），则在该上下文中调用事件处理函数；如果没有，则直接调用事件处理函数。
         * 这种设计允许灵活地处理事件，无论是需要特定上下文还是不需要。
         *
         * @param name 事件的名称。这是用来从事件映射表中查找对应的事件监听器的关键字。
         * @param params 传递给事件处理函数的参数。这些参数是可变的，允许调用者传递任意数量的参数。
         */
    EventManager.prototype.emit = function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            eventArr.forEach(function (_a) {
                var event = _a.event, context = _a.context;
                context ? event.apply(context, params) : event(params);
            });
        }
    };
    /**
        * 清空事件映射表
        *
        * 该方法用于清除当前实例中事件映射表的所有绑定。调用后，事件映射表将为空，不再包含任何事件绑定。
        * 这是清理资源、避免内存泄漏的一种方式，特别是在需要重新绑定事件或完全解绑所有事件时。
        *
        * @remarks
        * 此方法不接受任何参数，也不返回任何值。
        */
    EventManager.prototype.clear = function () {
        this.eventMap.clear();
    };
    EventManager._instance = null;
    return EventManager;
}());
exports.default = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxFdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7QUFPdkI7SUFBQTtRQVdJLGFBQVEsR0FBbUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQW9FeEQsQ0FBQztJQTVFVSx3QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1NBQzlCO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFJRCxzQkFBVyx3QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBZ0IsQ0FBQTtRQUMzQyxDQUFDOzs7T0FBQTtJQUNEOzs7Ozs7Ozs7U0FTSztJQUNMLHlCQUFFLEdBQUYsVUFBRyxJQUFZLEVBQUUsS0FBZSxFQUFFLE9BQWlCO1FBQy9DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQTtTQUNwQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNoRDtJQUNMLENBQUM7SUFDRDs7Ozs7OztTQU9LO0lBQ0wsMEJBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxLQUFlO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFuQixDQUFtQixDQUFDLENBQUE7WUFDN0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzVDO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7Ozs7V0FTTztJQUNQLDJCQUFJLEdBQUosVUFBSyxJQUFZO1FBQUUsZ0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQiwrQkFBb0I7O1FBQ25DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWtCO29CQUFoQixLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUE7Z0JBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMxRCxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7OztVQVFNO0lBQ04sNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQTdFYyxzQkFBUyxHQUFRLElBQUksQ0FBQTtJQThFeEMsbUJBQUM7Q0EvRUQsQUErRUMsSUFBQTtrQkEvRW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuaW50ZXJmYWNlIElFdmVudEl0ZW0ge1xyXG4gICAgZXZlbnQ6IEZ1bmN0aW9uXHJcbiAgICBjb250ZXh0OiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFueSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oKTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRNYXA6IE1hcDxTdHJpbmcsIEFycmF5PElFdmVudEl0ZW0+PiA9IG5ldyBNYXAoKVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2U8RXZlbnRNYW5hZ2VyPigpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICog5rOo5YaM5LqL5Lu255uR5ZCs5Zmo44CCXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiDmraTmlrnms5XnlKjkuo7lsIbkuIDkuKrkuovku7bnm5HlkKzlh73mlbDnu5HlrprliLDnibnlrprnmoTkuovku7blkI3kuIrjgILlpoLmnpzkuovku7blkI3lt7LlrZjlnKjvvIzliJnlsIbmlrDnmoTnm5HlkKzlh73mlbDmt7vliqDliLDlt7LmnInnmoTnm5HlkKzlh73mlbDliJfooajkuK3vvJtcclxuICAgICAgICog5aaC5p6c5LqL5Lu25ZCN5LiN5a2Y5Zyo77yM5YiZ5Yib5bu65LiA5Liq5paw55qE5LqL5Lu25ZCN5bm25re75Yqg55uR5ZCs5Ye95pWw44CCXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiBAcGFyYW0gbmFtZSDkuovku7blkI3jgILnlKjkuo7moIfor4bopoHnm5HlkKznmoTkuovku7bjgIJcclxuICAgICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuebkeWQrOWHveaVsOOAguW9k+S6i+S7tuiiq+inpuWPkeaXtu+8jOi/meS4quWHveaVsOWwhuiiq+iwg+eUqOOAglxyXG4gICAgICAgKiBAcGFyYW0gY29udGV4dCDkuIrkuIvmloflr7nosaHjgILlj6/pgInlj4LmlbDvvIznlKjkuo7mjIflrprkuovku7bnm5HlkKzlh73mlbDmiafooYzml7bnmoTkuIrkuIvmloflr7nosaHvvIzpu5jorqTkuLp1bmRlZmluZWTjgIJcclxuICAgICAgICovXHJcbiAgICBvbihuYW1lOiBzdHJpbmcsIGV2ZW50OiBGdW5jdGlvbiwgY29udGV4dD86IHVua25vd24pIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudE1hcC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRBcnIgPSB0aGlzLmV2ZW50TWFwLmdldChuYW1lKVxyXG4gICAgICAgICAgICBldmVudEFyci5wdXNoKHsgZXZlbnQsIGNvbnRleHQgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFwLnNldChuYW1lLCBbeyBldmVudCwgY29udGV4dCB9XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICog5Y+W5raI57uR5a6a5LiA5Liq5LqL5Lu25aSE55CG5Ye95pWw44CCXHJcbiAgICAgICAqIEBwYXJhbSBuYW1lIOS6i+S7tueahOWQjeensOOAglxyXG4gICAgICAgKiBAcGFyYW0gZXZlbnQg5b6F5Y+W5raI57uR5a6a55qE5LqL5Lu25aSE55CG5Ye95pWw44CCXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiDmraTlh73mlbDnlKjkuo7ku47nibnlrprkuovku7blkI3kuIvnmoTkuovku7blpITnkIblh73mlbDmlbDnu4TkuK3np7vpmaTmjIflrprnmoTkuovku7blpITnkIblh73mlbDjgIJcclxuICAgICAgICog5aaC5p6c5LqL5Lu25ZCN5a2Y5Zyo5LiU5pWw57uE5Lit5YyF5ZCr5oyH5a6a55qE5LqL5Lu25aSE55CG5Ye95pWw77yM5YiZ5bCG5YW256e76Zmk44CCXHJcbiAgICAgICAqL1xyXG4gICAgb2ZmKG5hbWU6IHN0cmluZywgZXZlbnQ6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50QXJyID0gdGhpcy5ldmVudE1hcC5nZXQobmFtZSlcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBldmVudEFyci5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmV2ZW50ID09IGV2ZW50KVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgZXZlbnRBcnIuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICAqIOWPkemAgeS6i+S7tue7meWvueW6lOeahOebkeWQrOWZqOOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOatpOWHveaVsOeUqOS6juinpuWPkeeJueWumuWQjeensOeahOS6i+S7tu+8jOS6i+S7tueahOebkeWQrOWZqOWwhuagueaNruWQjeensOS7juS6i+S7tuaYoOWwhOihqOS4reaJvuWIsOW5tuiwg+eUqOOAglxyXG4gICAgICAgICAqIOWmguaenOS6i+S7tuacieS4iuS4i+aWh++8iGNvbnRleHTvvInvvIzliJnlnKjor6XkuIrkuIvmlofkuK3osIPnlKjkuovku7blpITnkIblh73mlbDvvJvlpoLmnpzmsqHmnInvvIzliJnnm7TmjqXosIPnlKjkuovku7blpITnkIblh73mlbDjgIJcclxuICAgICAgICAgKiDov5nnp43orr7orqHlhYHorrjngbXmtLvlnLDlpITnkIbkuovku7bvvIzml6DorrrmmK/pnIDopoHnibnlrprkuIrkuIvmlofov5jmmK/kuI3pnIDopoHjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZSDkuovku7bnmoTlkI3np7DjgILov5nmmK/nlKjmnaXku47kuovku7bmmKDlsITooajkuK3mn6Xmib7lr7nlupTnmoTkuovku7bnm5HlkKzlmajnmoTlhbPplK7lrZfjgIJcclxuICAgICAgICAgKiBAcGFyYW0gcGFyYW1zIOS8oOmAkue7meS6i+S7tuWkhOeQhuWHveaVsOeahOWPguaVsOOAgui/meS6m+WPguaVsOaYr+WPr+WPmOeahO+8jOWFgeiuuOiwg+eUqOiAheS8oOmAkuS7u+aEj+aVsOmHj+eahOWPguaVsOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgZW1pdChuYW1lOiBzdHJpbmcsIC4uLnBhcmFtczogdW5rbm93bltdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50QXJyID0gdGhpcy5ldmVudE1hcC5nZXQobmFtZSlcclxuICAgICAgICAgICAgZXZlbnRBcnIuZm9yRWFjaCgoeyBldmVudCwgY29udGV4dCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0ID8gZXZlbnQuYXBwbHkoY29udGV4dCwgcGFyYW1zKSA6IGV2ZW50KHBhcmFtcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICAqIOa4heepuuS6i+S7tuaYoOWwhOihqFxyXG4gICAgICAgICogXHJcbiAgICAgICAgKiDor6Xmlrnms5XnlKjkuo7muIXpmaTlvZPliY3lrp7kvovkuK3kuovku7bmmKDlsITooajnmoTmiYDmnInnu5HlrprjgILosIPnlKjlkI7vvIzkuovku7bmmKDlsITooajlsIbkuLrnqbrvvIzkuI3lho3ljIXlkKvku7vkvZXkuovku7bnu5HlrprjgIJcclxuICAgICAgICAqIOi/meaYr+a4heeQhui1hOa6kOOAgemBv+WFjeWGheWtmOazhOa8j+eahOS4gOenjeaWueW8j++8jOeJueWIq+aYr+WcqOmcgOimgemHjeaWsOe7keWumuS6i+S7tuaIluWujOWFqOino+e7keaJgOacieS6i+S7tuaXtuOAglxyXG4gICAgICAgICogXHJcbiAgICAgICAgKiBAcmVtYXJrc1xyXG4gICAgICAgICog5q2k5pa55rOV5LiN5o6l5Y+X5Lu75L2V5Y+C5pWw77yM5Lmf5LiN6L+U5Zue5Lu75L2V5YC844CCXHJcbiAgICAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYXAuY2xlYXIoKVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Endpoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '815901UoLJElo5AkAYuqgfu', 'Endpoint');
// script/Endpoint.ts

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
var Enum_1 = require("./Enum");
var DataManager_1 = require("./manager/DataManager");
var EventManager_1 = require("./manager/EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    function Endpoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ballNode = null;
        return _this;
    }
    Endpoint.prototype.init = function (data) {
        Object.assign(this, data);
        DataManager_1.default.instance.endpoint = this;
        this.rendor();
    };
    Endpoint.prototype.rendor = function () {
        this.node.setPosition(this.x, this.y);
        this.node.angle = -this.angle;
    };
    Endpoint.prototype.setBallActive = function (status) {
        this.ballNode.active = status;
        if (DataManager_1.default.instance.status !== Enum_1.ENUM_GAME_STATUS.LOSE) {
            // 过关
            EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_WIN);
        }
    };
    __decorate([
        property(cc.Node)
    ], Endpoint.prototype, "ballNode", void 0);
    Endpoint = __decorate([
        ccclass
    ], Endpoint);
    return Endpoint;
}(cc.Component));
exports.default = Endpoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFbmRwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsK0JBQTJEO0FBQzNELHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQkM7UUFwQkcsY0FBUSxHQUFZLElBQUksQ0FBQTs7SUFvQjVCLENBQUM7SUFsQkcsdUJBQUksR0FBSixVQUFLLElBQVM7UUFDVixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNqQyxDQUFDO0lBRUQsZ0NBQWEsR0FBYixVQUFjLE1BQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQzdCLElBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLHVCQUFnQixDQUFDLElBQUksRUFBQztZQUNyRCxLQUFLO1lBQ0wsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDdkQ7SUFDTCxDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFQUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkI1QjtJQUFELGVBQUM7Q0EzQkQsQUEyQkMsQ0EzQnFDLEVBQUUsQ0FBQyxTQUFTLEdBMkJqRDtrQkEzQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbCBcclxuXHJcbmltcG9ydCB7IEVOVU1fR0FNRV9FVkVOVCwgRU5VTV9HQU1FX1NUQVRVUyB9IGZyb20gXCIuL0VudW1cIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0V2ZW50TWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRwb2ludCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXJcclxuICAgIGFuZ2xlOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhbGxOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIGluaXQoZGF0YTogYW55KXtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZW5kcG9pbnQgPSB0aGlzXHJcbiAgICAgICAgdGhpcy5yZW5kb3IoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRvcigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSlcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtdGhpcy5hbmdsZVxyXG4gICAgfVxyXG5cclxuICAgIHNldEJhbGxBY3RpdmUoc3RhdHVzOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLmJhbGxOb2RlLmFjdGl2ZSA9IHN0YXR1c1xyXG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPT0gRU5VTV9HQU1FX1NUQVRVUy5MT1NFKXtcclxuICAgICAgICAgICAgLy8g6L+H5YWzXHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5HQU1FX1dJTilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32b2c8K0k9PwqUU5AtOXtgS', 'Player');
// script/Player.ts

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
var Enum_1 = require("./Enum");
// Created by carolsail 
var DataManager_1 = require("./manager/DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = Enum_1.ENUM_PLAYER_STATUS.IDLE;
        _this.spriteFrameArr = [];
        _this.ballNode = null;
        _this.circleNode = null;
        return _this;
    }
    Player.prototype.init = function (data) {
        if (this.spriteFrameArr.length <= 0)
            return;
        Object.assign(this, data);
        DataManager_1.default.instance.blues.push(this);
        this.rendor();
    };
    /**
     * 渲染节点的状态和位置。
     *
     * 本函数负责更新节点的状态，并将其设置到指定的位置和角度。它不接受任何参数，也没有返回值。
     * 主要用于在每次渲染周期中更新节点的视觉表现，确保节点的状态与数据模型保持一致。
     */
    Player.prototype.rendor = function () {
        this.setStatus(this.status);
        this.node.setPosition(this.x, this.y);
        this.node.angle = -this.angle;
    };
    /**
     * 将节点转向目标位置。
     * 此函数计算当前节点到目标位置(x, y)的角度，并将节点的角度调整为面向目标位置。
     * 它使用了数学中的反正切函数来计算角度，然后将角度转换为度数，并调整为顺时针旋转的度数。
     *
     * @param {number} x - 目标位置的x坐标，默认为0。
     * @param {number} y - 目标位置的y坐标，默认为0。
     */
    Player.prototype.turnTo = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var r = Math.atan2(y - this.y, x - this.x);
        var degree = r * 180 / Math.PI;
        degree = 360 - degree;
        this.node.angle = -degree;
    };
    /**
     * 设置玩家状态。
     * @param status 玩家状态，使用ENUM_PLAYER_STATUS枚举值。
     */
    Player.prototype.setStatus = function (status) {
        this.status = status;
        var sprite = this.node.getComponent(cc.Sprite);
        if (this.status == Enum_1.ENUM_PLAYER_STATUS.IDLE) {
            sprite.spriteFrame = this.spriteFrameArr[0];
            this.ballNode.active = false;
        }
        else if (this.status == Enum_1.ENUM_PLAYER_STATUS.READY) {
            sprite.spriteFrame = this.spriteFrameArr[0];
            this.ballNode.active = true;
        }
        else if (this.status == Enum_1.ENUM_PLAYER_STATUS.SHOOTING) {
            sprite.spriteFrame = this.spriteFrameArr[1];
            this.ballNode.active = false;
        }
    };
    /**
     * 设置圆圈节点的激活状态。
     *
     * 此方法用于根据传入的布尔值，激活或停用一个圆圈节点。激活状态通常用于表示某个元素是否可用
     * 或是否被选中。通过修改圆圈节点的active属性，可以改变其在用户界面中的表现，例如改变颜色或形状。
     *
     * @param status 布尔值，指示圆圈节点是否应该被激活。true表示激活，false表示停用。
     */
    Player.prototype.setCircleActive = function (status) {
        this.circleNode.active = status;
    };
    /**
     * 玩家角色触发的特效播放函数。
     * 本函数旨在寻找名为'Effect'的子节点，该节点通常包含一个粒子系统组件，
     * 用于播放各种视觉特效，如爆炸、火焰等。找到该节点后，将调用粒子系统的
     * resetSystem方法来重置并启动特效播放。
     *
     * 注意：由于使用了可选链操作符(?.)，如果节点或组件不存在，函数将安全地返回，
     * 而不会抛出错误或中断执行。
     */
    Player.prototype.playEffect = function () {
        var _a, _b;
        (_b = (_a = this.node) === null || _a === void 0 ? void 0 : _a.getChildByName('Effect')) === null || _b === void 0 ? void 0 : _b.getComponent(cc.ParticleSystem).resetSystem();
    };
    __decorate([
        property([cc.SpriteFrame])
    ], Player.prototype, "spriteFrameArr", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "ballNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "circleNode", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRDO0FBQzVDLHdCQUF3QjtBQUV4QixxREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFxRkM7UUFqRkcsWUFBTSxHQUF1Qix5QkFBa0IsQ0FBQyxJQUFJLENBQUE7UUFHcEQsb0JBQWMsR0FBcUIsRUFBRSxDQUFBO1FBRXJDLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7O0lBMEU5QixDQUFDO0lBeEVHLHFCQUFJLEdBQUosVUFBSyxJQUFTO1FBQ1YsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTTtRQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ2pDLENBQUM7SUFDRDs7Ozs7OztPQU9HO0lBQ0gsdUJBQU0sR0FBTixVQUFPLENBQWEsRUFBRSxDQUFhO1FBQTVCLGtCQUFBLEVBQUEsS0FBYTtRQUFFLGtCQUFBLEVBQUEsS0FBYTtRQUMvQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBO1FBQzlCLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBQzdCLENBQUM7SUFDRDs7O09BR0c7SUFDSCwwQkFBUyxHQUFULFVBQVUsTUFBMEI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSx5QkFBa0IsQ0FBQyxJQUFJLEVBQUU7WUFDeEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUMvQjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSx5QkFBa0IsQ0FBQyxLQUFLLEVBQUU7WUFDaEQsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUM5QjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSx5QkFBa0IsQ0FBQyxRQUFRLEVBQUU7WUFDbkQsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUMvQjtJQUNMLENBQUM7SUFDRDs7Ozs7OztPQU9HO0lBQ0gsZ0NBQWUsR0FBZixVQUFnQixNQUFlO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUNuQyxDQUFDO0lBQ0Q7Ozs7Ozs7O09BUUc7SUFDSCwyQkFBVSxHQUFWOztRQUNJLFlBQUEsSUFBSSxDQUFDLElBQUksMENBQUUsY0FBYyxDQUFDLFFBQVEsMkNBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsV0FBVyxHQUFFO0lBQ3RGLENBQUM7SUE3RUQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7a0RBQ1U7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBWFQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXFGMUI7SUFBRCxhQUFDO0NBckZELEFBcUZDLENBckZtQyxFQUFFLENBQUMsU0FBUyxHQXFGL0M7a0JBckZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU5VTV9QTEFZRVJfU1RBVFVTIH0gZnJvbSAnLi9FbnVtJztcclxuLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWwgXHJcblxyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgYW5nbGU6IG51bWJlclxyXG4gICAgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMgPSBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRVxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgc3ByaXRlRnJhbWVBcnI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWxsTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2lyY2xlTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZUZyYW1lQXJyLmxlbmd0aCA8PSAwKSByZXR1cm5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmx1ZXMucHVzaCh0aGlzKVxyXG4gICAgICAgIHRoaXMucmVuZG9yKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riy5p+T6IqC54K555qE54q25oCB5ZKM5L2N572u44CCXHJcbiAgICAgKiBcclxuICAgICAqIOacrOWHveaVsOi0n+i0o+abtOaWsOiKgueCueeahOeKtuaAge+8jOW5tuWwhuWFtuiuvue9ruWIsOaMh+WumueahOS9jee9ruWSjOinkuW6puOAguWug+S4jeaOpeWPl+S7u+S9leWPguaVsO+8jOS5n+ayoeaciei/lOWbnuWAvOOAglxyXG4gICAgICog5Li76KaB55So5LqO5Zyo5q+P5qyh5riy5p+T5ZGo5pyf5Lit5pu05paw6IqC54K555qE6KeG6KeJ6KGo546w77yM56Gu5L+d6IqC54K555qE54q25oCB5LiO5pWw5o2u5qih5Z6L5L+d5oyB5LiA6Ie044CCXHJcbiAgICAgKi9cclxuICAgIHJlbmRvcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXR1cyh0aGlzLnN0YXR1cylcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy54LCB0aGlzLnkpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gLXRoaXMuYW5nbGVcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bCG6IqC54K56L2s5ZCR55uu5qCH5L2N572u44CCXHJcbiAgICAgKiDmraTlh73mlbDorqHnrpflvZPliY3oioLngrnliLDnm67moIfkvY3nva4oeCwgeSnnmoTop5LluqbvvIzlubblsIboioLngrnnmoTop5LluqbosIPmlbTkuLrpnaLlkJHnm67moIfkvY3nva7jgIJcclxuICAgICAqIOWug+S9v+eUqOS6huaVsOWtpuS4reeahOWPjeato+WIh+WHveaVsOadpeiuoeeul+inkuW6pu+8jOeEtuWQjuWwhuinkuW6pui9rOaNouS4uuW6puaVsO+8jOW5tuiwg+aVtOS4uumhuuaXtumSiOaXi+i9rOeahOW6puaVsOOAglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCAtIOebruagh+S9jee9rueahHjlnZDmoIfvvIzpu5jorqTkuLow44CCXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSAtIOebruagh+S9jee9rueahHnlnZDmoIfvvIzpu5jorqTkuLow44CCXHJcbiAgICAgKi9cclxuICAgIHR1cm5Ubyh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgbGV0IHIgPSBNYXRoLmF0YW4yKHkgLSB0aGlzLnksIHggLSB0aGlzLngpO1xyXG4gICAgICAgIGxldCBkZWdyZWUgPSByICogMTgwIC8gTWF0aC5QSVxyXG4gICAgICAgIGRlZ3JlZSA9IDM2MCAtIGRlZ3JlZVxyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC1kZWdyZWVcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u546p5a6254q25oCB44CCXHJcbiAgICAgKiBAcGFyYW0gc3RhdHVzIOeOqeWutueKtuaAge+8jOS9v+eUqEVOVU1fUExBWUVSX1NUQVRVU+aemuS4vuWAvOOAglxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0dXMoc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSkge1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lQXJyWzBdXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbE5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSkge1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lQXJyWzBdXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbE5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gRU5VTV9QTEFZRVJfU1RBVFVTLlNIT09USU5HKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVBcnJbMV1cclxuICAgICAgICAgICAgdGhpcy5iYWxsTm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5ZyG5ZyI6IqC54K555qE5r+A5rS754q25oCB44CCXHJcbiAgICAgKiBcclxuICAgICAqIOatpOaWueazleeUqOS6juagueaNruS8oOWFpeeahOW4g+WwlOWAvO+8jOa/gOa0u+aIluWBnOeUqOS4gOS4quWchuWciOiKgueCueOAgua/gOa0u+eKtuaAgemAmuW4uOeUqOS6juihqOekuuafkOS4quWFg+e0oOaYr+WQpuWPr+eUqFxyXG4gICAgICog5oiW5piv5ZCm6KKr6YCJ5Lit44CC6YCa6L+H5L+u5pS55ZyG5ZyI6IqC54K555qEYWN0aXZl5bGe5oCn77yM5Y+v5Lul5pS55Y+Y5YW25Zyo55So5oi355WM6Z2i5Lit55qE6KGo546w77yM5L6L5aaC5pS55Y+Y6aKc6Imy5oiW5b2i54q244CCXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBzdGF0dXMg5biD5bCU5YC877yM5oyH56S65ZyG5ZyI6IqC54K55piv5ZCm5bqU6K+l6KKr5r+A5rS744CCdHJ1ZeihqOekuua/gOa0u++8jGZhbHNl6KGo56S65YGc55So44CCXHJcbiAgICAgKi9cclxuICAgIHNldENpcmNsZUFjdGl2ZShzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNpcmNsZU5vZGUuYWN0aXZlID0gc3RhdHVzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuinkuiJsuinpuWPkeeahOeJueaViOaSreaUvuWHveaVsOOAglxyXG4gICAgICog5pys5Ye95pWw5peo5Zyo5a+75om+5ZCN5Li6J0VmZmVjdCfnmoTlrZDoioLngrnvvIzor6XoioLngrnpgJrluLjljIXlkKvkuIDkuKrnspLlrZDns7vnu5/nu4Tku7bvvIxcclxuICAgICAqIOeUqOS6juaSreaUvuWQhOenjeinhuinieeJueaViO+8jOWmgueIhueCuOOAgeeBq+eEsOetieOAguaJvuWIsOivpeiKgueCueWQju+8jOWwhuiwg+eUqOeykuWtkOezu+e7n+eahFxyXG4gICAgICogcmVzZXRTeXN0ZW3mlrnms5XmnaXph43nva7lubblkK/liqjnibnmlYjmkq3mlL7jgIJcclxuICAgICAqIFxyXG4gICAgICog5rOo5oSP77ya55Sx5LqO5L2/55So5LqG5Y+v6YCJ6ZO+5pON5L2c56ymKD8uKe+8jOWmguaenOiKgueCueaIlue7hOS7tuS4jeWtmOWcqO+8jOWHveaVsOWwhuWuieWFqOWcsOi/lOWbnu+8jFxyXG4gICAgICog6ICM5LiN5Lya5oqb5Ye66ZSZ6K+v5oiW5Lit5pat5omn6KGM44CCXHJcbiAgICAgKi9cclxuICAgIHBsYXlFZmZlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlPy5nZXRDaGlsZEJ5TmFtZSgnRWZmZWN0Jyk/LmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkucmVzZXRTeXN0ZW0oKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '300caQwqn9CLp9cuBTzRefJ', 'Enemy');
// script/Enemy.ts

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
var Enum_1 = require("./Enum");
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var EventManager_1 = require("./manager/EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = Enum_1.ENUM_ENEMY_STATUS.IDLE;
        // 运动参数
        _this.speed = 200;
        // 运动位移(针对水平运动)
        _this.distance = 500;
        _this.tempDis = 0;
        // 移动方向(针对水平运动)
        _this.isDirX = false;
        // 移动方向
        _this.dir = 1;
        // 弧度(针对圆周运动)
        _this.radian = 0;
        // 半径(针对圆周运动)
        _this.circleRadius = 250;
        // 圆心(针对圆周运动)
        _this.circleCenter = cc.v2(0, 0);
        // 其父进攻方
        _this.blue = null;
        _this.spriteFrameArr = [];
        _this.ballNode = null;
        _this.circleNode = null;
        return _this;
    }
    Enemy_1 = Enemy;
    Enemy.prototype.init = function (data) {
        if (this.spriteFrameArr.length <= 0)
            return;
        Object.assign(this, data);
        DataManager_1.default.instance.reds.push(this);
        this.unscheduleAllCallbacks();
        this.tempDis = 0;
        this.rendor();
    };
    Enemy.prototype.rendor = function () {
        var current = DataManager_1.default.instance.level - 1;
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrameArr[current];
        this.node.setPosition(this.x, this.y);
        this.node.angle = -this.angle;
        // 直线移动
        if (this.status == Enum_1.ENUM_ENEMY_STATUS.MOVE) {
            this.schedule(this.move, 0.01);
        }
        else if (this.status == Enum_1.ENUM_ENEMY_STATUS.ROUND) {
            // 计算圆心
            this.circleCenter.x = this.blue.x;
            this.circleCenter.y = this.blue.y;
            this.schedule(this.circleMove, 0.01);
        }
    };
    Enemy.prototype.setBallActive = function (status) {
        this.ballNode.active = status;
    };
    Enemy.prototype.setCircleActive = function (status) {
        this.circleNode.color = cc.color(245, 103, 103, 255);
        this.circleNode.active = status;
    };
    Enemy.prototype.setParent = function (blue) {
        this.blue = blue;
    };
    Enemy.prototype.setSpeed = function (speed) {
        this.speed = speed;
        if (speed == 0) {
            this.unscheduleAllCallbacks();
        }
    };
    Enemy.prototype.playEffect = function () {
        var _a, _b;
        (_b = (_a = this.node) === null || _a === void 0 ? void 0 : _a.getChildByName('Effect')) === null || _b === void 0 ? void 0 : _b.getComponent(cc.ParticleSystem).resetSystem();
    };
    /**
     * 实现物体的移动功能。
     * 此函数主要负责根据物体的当前状态（方向、速度、距离）更新物体的位置。
     * 移动是基于固定的时间步长（dt）进行的，物体在X轴或Y轴上移动取决于isDirX的值。
     * 当物体移动的距离超过预设的距离时，物体的方向会发生反转，以实现往复运动的效果。
     */
    Enemy.prototype.move = function () {
        var dt = 0.016;
        if (this.isDirX) {
            this.tempDis += dt * this.speed * this.dir;
            if (this.tempDis > this.distance) {
                this.dir = -1;
            }
            else if (this.tempDis < -this.distance) {
                this.dir = 1;
            }
            this.node.x += dt * this.speed * this.dir;
        }
        else {
            this.tempDis += dt * this.speed * this.dir;
            if (this.tempDis > this.distance) {
                this.dir = -1;
            }
            else if (this.tempDis < -this.distance) {
                this.dir = 1;
            }
            this.node.y += dt * this.speed * this.dir;
        }
    };
    /**
     * 使节点沿圆形路径移动。
     * @param dt 时间间隔，用于计算位移。
     */
    Enemy.prototype.circleMove = function (dt) {
        // 顺逆时针
        var dir = 1;
        if (!this.isDirX)
            dir = -1;
        // 先计算弧度
        this.radian += dt * (this.speed / 100) * dir;
        var x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
        var y = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
        this.node.position = cc.v3(x, y, 0);
        // Math.atan2 反正切函数 返回从X轴到某个点的角度（以弧度为单位）。
        var angle = Math.atan2(y, x) / (Math.PI / 180);
        this.node.angle = angle;
    };
    /**
     * 当检测到碰撞事件发生时的处理函数。
     * @param other 另一个碰撞器，可能是球体。
     * @param self 自身的碰撞器，表示敌人的碰撞器。
     *
     * 此函数在敌人的碰撞器与球体碰撞时被调用，根据碰撞的情况执行不同的逻辑，
     * 如播放振动效果、改变敌人状态、结束游戏等。
     */
    // 碰撞检测
    Enemy.prototype.onCollisionEnter = function (other, self) {
        // 跟球做碰撞
        if (other.tag == Enum_1.ENUM_COLLIDER_TAG.BALL) {
            if (DataManager_1.default.instance.vibrate) {
                EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_VIBRATE);
            }
            // 是否必杀状态
            if (other.node.getChildByName('Shield').active) {
                // 击破防守员
                this.setSpeed(0);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.DIE);
                self.node.getComponent(Enemy_1).status = Enum_1.ENUM_ENEMY_STATUS.DIE;
                self.node.getComponent(cc.Animation).play();
            }
            else {
                if (self.node.getComponent(Enemy_1).status == Enum_1.ENUM_ENEMY_STATUS.DIE)
                    return;
                // 拦截游戏结束
                other.node.active = false;
                this.setSpeed(0);
                this.playEffect();
                this.setBallActive(true);
                EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_LOSE);
            }
        }
    };
    var Enemy_1;
    __decorate([
        property([cc.SpriteFrame])
    ], Enemy.prototype, "spriteFrameArr", void 0);
    __decorate([
        property(cc.Node)
    ], Enemy.prototype, "ballNode", void 0);
    __decorate([
        property(cc.Node)
    ], Enemy.prototype, "circleNode", void 0);
    Enemy = Enemy_1 = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHeEIsK0JBQWdHO0FBQ2hHLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsdURBQWtEO0FBSTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBNkpDO1FBekpHLFlBQU0sR0FBc0Isd0JBQWlCLENBQUMsSUFBSSxDQUFBO1FBQ2xELE9BQU87UUFDUCxXQUFLLEdBQVcsR0FBRyxDQUFBO1FBQ25CLGVBQWU7UUFDZixjQUFRLEdBQVcsR0FBRyxDQUFBO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUE7UUFDbkIsZUFBZTtRQUNmLFlBQU0sR0FBWSxLQUFLLENBQUE7UUFDdkIsT0FBTztRQUNQLFNBQUcsR0FBVyxDQUFDLENBQUE7UUFDZixhQUFhO1FBQ2IsWUFBTSxHQUFXLENBQUMsQ0FBQTtRQUNsQixhQUFhO1FBQ2Isa0JBQVksR0FBVyxHQUFHLENBQUE7UUFDMUIsYUFBYTtRQUNiLGtCQUFZLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDbkMsUUFBUTtRQUNSLFVBQUksR0FBVyxJQUFJLENBQUE7UUFHbkIsb0JBQWMsR0FBcUIsRUFBRSxDQUFBO1FBRXJDLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7O0lBaUk5QixDQUFDO2NBN0pvQixLQUFLO0lBOEJ0QixvQkFBSSxHQUFKLFVBQUssSUFBUztRQUNWLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU07UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxD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SUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO2FBQzlDO2lCQUFNO2dCQUNILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLHdCQUFpQixDQUFDLEdBQUc7b0JBQUUsT0FBTTtnQkFDekUsU0FBUztnQkFDVCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEIsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDeEQ7U0FDSjtJQUNMLENBQUM7O0lBcElEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lEQUNVO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUTtJQTVCVCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNkp6QjtJQUFELFlBQUM7Q0E3SkQsQUE2SkMsQ0E3SmtDLEVBQUUsQ0FBQyxTQUFTLEdBNko5QztrQkE3Sm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbCBcclxuXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0NPTExJREVSX1RBRywgRU5VTV9FTkVNWV9TVEFUVVMsIEVOVU1fR0FNRV9FVkVOVCB9IGZyb20gXCIuL0VudW1cIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4vU3RhdGljSW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgYW5nbGU6IG51bWJlclxyXG4gICAgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUyA9IEVOVU1fRU5FTVlfU1RBVFVTLklETEVcclxuICAgIC8vIOi/kOWKqOWPguaVsFxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMFxyXG4gICAgLy8g6L+Q5Yqo5L2N56e7KOmSiOWvueawtOW5s+i/kOWKqClcclxuICAgIGRpc3RhbmNlOiBudW1iZXIgPSA1MDBcclxuICAgIHRlbXBEaXM6IG51bWJlciA9IDBcclxuICAgIC8vIOenu+WKqOaWueWQkSjpkojlr7nmsLTlubPov5DliqgpXHJcbiAgICBpc0Rpclg6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgLy8g56e75Yqo5pa55ZCRXHJcbiAgICBkaXI6IG51bWJlciA9IDFcclxuICAgIC8vIOW8p+W6pijpkojlr7nlnIblkajov5DliqgpXHJcbiAgICByYWRpYW46IG51bWJlciA9IDBcclxuICAgIC8vIOWNiuW+hCjpkojlr7nlnIblkajov5DliqgpXHJcbiAgICBjaXJjbGVSYWRpdXM6IG51bWJlciA9IDI1MFxyXG4gICAgLy8g5ZyG5b+DKOmSiOWvueWchuWRqOi/kOWKqClcclxuICAgIGNpcmNsZUNlbnRlcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICAvLyDlhbbniLbov5vmlLvmlrlcclxuICAgIGJsdWU6IFBsYXllciA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNwcml0ZUZyYW1lQXJyOiBjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFsbE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNpcmNsZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGVGcmFtZUFyci5sZW5ndGggPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMucHVzaCh0aGlzKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy50ZW1wRGlzID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRvcigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgLSAxXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUFycltjdXJyZW50XVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSlcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtdGhpcy5hbmdsZVxyXG4gICAgICAgIC8vIOebtOe6v+enu+WKqFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5tb3ZlLCAwLjAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQpIHtcclxuICAgICAgICAgICAgLy8g6K6h566X5ZyG5b+DXHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQ2VudGVyLnggPSB0aGlzLmJsdWUueFxyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUNlbnRlci55ID0gdGhpcy5ibHVlLnlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNpcmNsZU1vdmUsIDAuMDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRCYWxsQWN0aXZlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYmFsbE5vZGUuYWN0aXZlID0gc3RhdHVzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2lyY2xlQWN0aXZlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTm9kZS5jb2xvciA9IGNjLmNvbG9yKDI0NSwgMTAzLCAxMDMsIDI1NSlcclxuICAgICAgICB0aGlzLmNpcmNsZU5vZGUuYWN0aXZlID0gc3RhdHVzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFyZW50KGJsdWU6IFBsYXllcikge1xyXG4gICAgICAgIHRoaXMuYmx1ZSA9IGJsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkXHJcbiAgICAgICAgaWYgKHNwZWVkID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUVmZmVjdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGU/LmdldENoaWxkQnlOYW1lKCdFZmZlY3QnKT8uZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5yZXNldFN5c3RlbSgpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWunueOsOeJqeS9k+eahOenu+WKqOWKn+iDveOAglxyXG4gICAgICog5q2k5Ye95pWw5Li76KaB6LSf6LSj5qC55o2u54mp5L2T55qE5b2T5YmN54q25oCB77yI5pa55ZCR44CB6YCf5bqm44CB6Led56a777yJ5pu05paw54mp5L2T55qE5L2N572u44CCXHJcbiAgICAgKiDnp7vliqjmmK/ln7rkuo7lm7rlrprnmoTml7bpl7TmraXplb/vvIhkdO+8iei/m+ihjOeahO+8jOeJqeS9k+WcqFjovbTmiJZZ6L205LiK56e75Yqo5Y+W5Yaz5LqOaXNEaXJY55qE5YC844CCXHJcbiAgICAgKiDlvZPniankvZPnp7vliqjnmoTot53nprvotoXov4fpooTorr7nmoTot53nprvml7bvvIzniankvZPnmoTmlrnlkJHkvJrlj5HnlJ/lj43ovazvvIzku6Xlrp7njrDlvoDlpI3ov5DliqjnmoTmlYjmnpzjgIJcclxuICAgICAqL1xyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSAwLjAxNjtcclxuICAgICAgICBpZiAodGhpcy5pc0RpclgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wRGlzICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBEaXMgPiB0aGlzLmRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IC0xXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZW1wRGlzIDwgLXRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wRGlzICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBEaXMgPiB0aGlzLmRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IC0xXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZW1wRGlzIDwgLXRoaXMuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IGR0ICogdGhpcy5zcGVlZCAqIHRoaXMuZGlyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkvb/oioLngrnmsr/lnIblvaLot6/lvoTnp7vliqjjgIJcclxuICAgICAqIEBwYXJhbSBkdCDml7bpl7Tpl7TpmpTvvIznlKjkuo7orqHnrpfkvY3np7vjgIJcclxuICAgICAqL1xyXG4gICAgY2lyY2xlTW92ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8g6aG66YCG5pe26ZKIXHJcbiAgICAgICAgbGV0IGRpciA9IDFcclxuICAgICAgICBpZiAoIXRoaXMuaXNEaXJYKSBkaXIgPSAtMVxyXG5cclxuICAgICAgICAvLyDlhYjorqHnrpflvKfluqZcclxuICAgICAgICB0aGlzLnJhZGlhbiArPSBkdCAqICh0aGlzLnNwZWVkIC8gMTAwKSAqIGRpcjtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5jb3ModGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuY2lyY2xlUmFkaXVzICogTWF0aC5zaW4odGhpcy5yYWRpYW4pICsgdGhpcy5jaXJjbGVDZW50ZXIueTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh4LCB5LCAwKTtcclxuICAgICAgICAvLyBNYXRoLmF0YW4yIOWPjeato+WIh+WHveaVsCDov5Tlm57ku45Y6L205Yiw5p+Q5Liq54K555qE6KeS5bqm77yI5Lul5byn5bqm5Li65Y2V5L2N77yJ44CCXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KSAvIChNYXRoLlBJIC8gMTgwKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPmo4DmtYvliLDnorDmkp7kuovku7blj5HnlJ/ml7bnmoTlpITnkIblh73mlbDjgIJcclxuICAgICAqIEBwYXJhbSBvdGhlciDlj6bkuIDkuKrnorDmkp7lmajvvIzlj6/og73mmK/nkIPkvZPjgIJcclxuICAgICAqIEBwYXJhbSBzZWxmIOiHqui6q+eahOeisOaSnuWZqO+8jOihqOekuuaVjOS6uueahOeisOaSnuWZqOOAglxyXG4gICAgICogXHJcbiAgICAgKiDmraTlh73mlbDlnKjmlYzkurrnmoTnorDmkp7lmajkuI7nkIPkvZPnorDmkp7ml7booqvosIPnlKjvvIzmoLnmja7norDmkp7nmoTmg4XlhrXmiafooYzkuI3lkIznmoTpgLvovpHvvIxcclxuICAgICAqIOWmguaSreaUvuaMr+WKqOaViOaenOOAgeaUueWPmOaVjOS6uueKtuaAgeOAgee7k+adn+a4uOaIj+etieOAglxyXG4gICAgICovXHJcbiAgICAvLyDnorDmkp7mo4DmtYtcclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkJveENvbGxpZGVyLCBzZWxmOiBjYy5Cb3hDb2xsaWRlcikge1xyXG4gICAgICAgIC8vIOi3n+eQg+WBmueisOaSnlxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gRU5VTV9DT0xMSURFUl9UQUcuQkFMTCkge1xyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UudmlicmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULkdBTUVfVklCUkFURSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5piv5ZCm5b+F5p2A54q25oCBXHJcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLmdldENoaWxkQnlOYW1lKCdTaGllbGQnKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWHu+egtOmYsuWuiOWRmFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTcGVlZCgwKVxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuRElFKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChFbmVteSkuc3RhdHVzID0gRU5VTV9FTkVNWV9TVEFUVVMuRElFXHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5ub2RlLmdldENvbXBvbmVudChFbmVteSkuc3RhdHVzID09IEVOVU1fRU5FTVlfU1RBVFVTLkRJRSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAvLyDmi6bmiKrmuLjmiI/nu5PmnZ9cclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3BlZWQoMClcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUVmZmVjdCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJhbGxBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5HQU1FX0xPU0UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/StaticInstance.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3b2f3Ixi1KYaFJJSRu8WLn', 'StaticInstance');
// script/StaticInstance.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticInstance = void 0;
var StaticInstance = /** @class */ (function () {
    function StaticInstance() {
    }
    StaticInstance.setUIManager = function (context) {
        StaticInstance.uiManager = context;
    };
    StaticInstance.uiManager = undefined;
    return StaticInstance;
}());
exports.StaticInstance = StaticInstance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGF0aWNJbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7QUFJdkI7SUFBQTtJQU1BLENBQUM7SUFIVSwyQkFBWSxHQUFuQixVQUFvQixPQUFrQjtRQUNsQyxjQUFjLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBSk0sd0JBQVMsR0FBMEIsU0FBUyxDQUFDO0lBS3hELHFCQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL1VJTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRpY0luc3RhbmNlIHtcclxuICAgIHN0YXRpYyB1aU1hbmFnZXI6IFVJTWFuYWdlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGF0aWMgc2V0VUlNYW5hZ2VyKGNvbnRleHQ6IFVJTWFuYWdlcil7XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyID0gY29udGV4dDtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Paper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd444bmZkVlD5q++CCDvYz2S', 'Paper');
// script/Paper.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Paper = /** @class */ (function (_super) {
    __extends(Paper, _super);
    function Paper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200;
        return _this;
    }
    /**
     * 更新节点的位置。
     *
     * 此方法用于根据指定的时间间隔更新节点的垂直位置，实现节点的向下移动效果。
     * 当节点移动到超出视图范围的下边界时，将其重新定位到视图的上边界，以实现循环移动的效果。
     *
     * @param dt 时间间隔，用于计算节点移动的距离。
     */
    Paper.prototype.update = function (dt) {
        this.node.y -= this.speed * dt;
        if (this.node.y <= -1625)
            this.node.y = 1625;
    };
    Paper = __decorate([
        ccclass
    ], Paper);
    return Paper;
}(cc.Component));
exports.default = Paper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQYXBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFlQztRQWJHLFdBQUssR0FBVyxHQUFHLENBQUE7O0lBYXZCLENBQUM7SUFaRzs7Ozs7OztPQU9HO0lBQ0gsc0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtJQUNoRCxDQUFDO0lBZGdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FlekI7SUFBRCxZQUFDO0NBZkQsQUFlQyxDQWZrQyxFQUFFLENBQUMsU0FBUyxHQWU5QztrQkFmb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFwZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDBcclxuICAgIC8qKlxyXG4gICAgICog5pu05paw6IqC54K555qE5L2N572u44CCXHJcbiAgICAgKiBcclxuICAgICAqIOatpOaWueazleeUqOS6juagueaNruaMh+WumueahOaXtumXtOmXtOmalOabtOaWsOiKgueCueeahOWeguebtOS9jee9ru+8jOWunueOsOiKgueCueeahOWQkeS4i+enu+WKqOaViOaenOOAglxyXG4gICAgICog5b2T6IqC54K556e75Yqo5Yiw6LaF5Ye66KeG5Zu+6IyD5Zu055qE5LiL6L6555WM5pe277yM5bCG5YW26YeN5paw5a6a5L2N5Yiw6KeG5Zu+55qE5LiK6L6555WM77yM5Lul5a6e546w5b6q546v56e75Yqo55qE5pWI5p6c44CCXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBkdCDml7bpl7Tpl7TpmpTvvIznlKjkuo7orqHnrpfoioLngrnnp7vliqjnmoTot53nprvjgIJcclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLnNwZWVkICogZHRcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPD0gLTE2MjUpIHRoaXMubm9kZS55ID0gMTYyNVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/LoadingLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35c84P7FIFGgpj/anWWEj0X', 'LoadingLayer');
// script/layer/LoadingLayer.ts

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
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingLayer = /** @class */ (function (_super) {
    __extends(LoadingLayer, _super);
    function LoadingLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingLayer = __decorate([
        ccclass
    ], LoadingLayer);
    return LoadingLayer;
}(Baselayer_1.default));
exports.default = LoadingLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcTG9hZGluZ0xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4Qix5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVM7SUFBbkQ7O0lBQXFELENBQUM7SUFBakMsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQUFxQjtJQUFELG1CQUFDO0NBQXRELEFBQXNELENBQVosbUJBQVMsR0FBRztrQkFBakMsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IEJhc2VMYXllciBmcm9tIFwiLi9CYXNlbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIHt9XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/GameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aaa1b62lWxLQIp7P2xZdgZA', 'GameLayer');
// script/layer/GameLayer.ts

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
var Enemy_1 = require("../Enemy");
var Enum_1 = require("../Enum");
var AudioManager_1 = require("../manager/AudioManager");
var DataManager_1 = require("../manager/DataManager");
var EventManager_1 = require("../manager/EventManager");
var SdkManager_1 = require("../manager/SdkManager");
var Player_1 = require("../Player");
var StaticInstance_1 = require("../StaticInstance");
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forceBar = null;
        _this.powerBar = null;
        _this.timerLabel = null;
        _this.propsNode = null;
        _this.tipsNode = null;
        _this.teamLabel = null;
        // 点按状态
        _this.holdFlag = false;
        _this.progressSpeed = 3;
        //技能
        _this.isPassBall = false;
        _this.isRedCard = false;
        _this.isYellowCard = false;
        _this.isDrink = false;
        _this.isExtraTime = false;
        _this.startRecordNode = null;
        _this.stopRecordNode = null;
        _this.passBall = null;
        _this.redCard = null;
        _this.yellowCard = null;
        _this.drink = null;
        _this.extraTime = null;
        _this.passBallOnce = false;
        _this.redCardOnce = false;
        _this.yellowCardOnce = false;
        _this.drinkOnce = false;
        _this.extraTimeOnce = false;
        _this.passBallCount = 0;
        _this.redCardCount = 0;
        _this.yellowCardCount = 0;
        _this.drinkCount = 0;
        _this.extraTimeCount = 0;
        return _this;
    }
    GameLayer.prototype.onLoad = function () {
        var _this = this;
        this.startRecordNode = this.node.getChildByName('Panel').getChildByName('camrea_btn');
        this.startRecordNode.on('click', function () {
            _this.startRecord();
        }, this);
        this.stopRecordNode = this.node.getChildByName('Panel').getChildByName('camrea_sotp_btn');
        this.stopRecordNode.on('click', function () {
            _this.endRecord();
        }, this);
        if (!window["tt"]) {
            this.startRecordNode.active = false;
            this.stopRecordNode.active = false;
        }
    };
    GameLayer.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchstart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchend, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchend, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.TIMER_START, this.onTimerStart, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.TIMER_STOP, this.onTimerStop, this);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_RESTART);
        // 取消技能选择
        if (this.isPassBall)
            this.isPassBall = false;
        if (this.isRedCard)
            this.isRedCard = false;
        if (this.isYellowCard)
            this.isYellowCard = false;
        if (this.isDrink)
            this.isDrink = false;
        if (this.isExtraTime)
            this.isExtraTime = false;
        this.setTipsNode(false);
    };
    GameLayer.prototype.onSettingClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.RENDOR_HOME_BTN, true);
    };
    // 设置技能点ui
    GameLayer.prototype.setPropNum = function () {
        var _this = this;
        this.propsNode.children.forEach(function (prop, index) {
            var nums = prop.getChildByName('Nums');
            var video = prop.getChildByName('video');
            if (DataManager_1.default.instance.skillNums[index] > 0) {
                nums.active = true;
                video.active = false;
                var num = DataManager_1.default.instance.skillNums[index];
                if (index == 1) {
                    num = num + _this.redCardCount;
                }
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + num;
            }
            else if ((index == 0) && (_this.passBallCount > 0 || _this.passBallOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.passBallCount;
            }
            else if ((index == 1) && (_this.redCardCount > 0 || _this.redCardOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.redCardCount;
            }
            else if ((index == 2) && (_this.yellowCardCount > 0 || _this.yellowCardOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.yellowCardCount;
            }
            else if ((index == 3) && (_this.drinkCount > 0 || _this.drinkOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.drinkCount;
            }
            else if ((index == 4) && (_this.extraTimeCount > 0 || _this.extraTimeOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.extraTimeCount;
            }
            else {
                nums.active = false;
                video.active = true;
            }
        });
    };
    GameLayer.prototype.setTeamLabel = function () {
        this.teamLabel.string = DataManager_1.default.instance.currentData['info'].team;
    };
    GameLayer.prototype.setPowerBar = function () {
        this.powerBar.progress = DataManager_1.default.instance.powerCount / DataManager_1.default.instance.powerCountTarget;
    };
    GameLayer.prototype.setTipsNode = function (status, styleIndex) {
        if (styleIndex === void 0) { styleIndex = 0; }
        this.tipsNode.getChildByName('Style').children.forEach(function (item, index) {
            item.active = styleIndex === index ? true : false;
        });
        this.tipsNode.active = status;
    };
    // 选队友传球
    GameLayer.prototype.onPropPassBall = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[0] <= 0) {
            if (this.passBallCount > 0) {
                // 脚下框动画
                DataManager_1.default.instance.blues.forEach(function (blue) {
                    if (blue.status != Enum_1.ENUM_PLAYER_STATUS.READY)
                        blue.setCircleActive(true);
                });
                this.setTipsNode(true, 0);
                this.isPassBall = true;
                this.isRedCard = false;
                this.isYellowCard = false;
                this.isDrink = false;
                this.isExtraTime = false;
                if (this.passBallOnce) {
                    this.grey(this.passBall);
                }
            }
            else if (!this.passBallOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[0] += 1
                    _this.passBallCount += 1;
                    _this.setPropNum();
                    _this.passBallOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            // 脚下框动画
            DataManager_1.default.instance.blues.forEach(function (blue) {
                if (blue.status != Enum_1.ENUM_PLAYER_STATUS.READY)
                    blue.setCircleActive(true);
            });
            this.setTipsNode(true, 0);
            this.isPassBall = true;
            this.isRedCard = false;
            this.isYellowCard = false;
            this.isDrink = false;
            this.isExtraTime = false;
            if (this.passBallOnce) {
                this.grey(this.passBall);
            }
        }
    };
    // 红牌罚下一名防守员
    GameLayer.prototype.onPropRedCard = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[1] <= 0) {
            if (this.redCardCount > 0) {
                this.setTipsNode(true, 1);
                this.isPassBall = false;
                this.isRedCard = true;
                this.isYellowCard = false;
                this.isDrink = false;
                this.isExtraTime = false;
                // 先减速运动待选择
                DataManager_1.default.instance.reds.forEach(function (red) {
                    red.setSpeed(red.speed / 10);
                    red.setCircleActive(true);
                });
                if (this.redCardOnce) {
                    this.grey(this.redCard);
                }
            }
            else if (!this.redCardOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[1] += 1
                    _this.redCardCount += 1;
                    _this.setPropNum();
                    _this.redCardOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 1);
            this.isPassBall = false;
            this.isRedCard = true;
            this.isYellowCard = false;
            this.isDrink = false;
            this.isExtraTime = false;
            // 先减速运动待选择
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed / 10);
                red.setCircleActive(true);
            });
            if (this.redCardOnce) {
                this.grey(this.redCard);
            }
        }
    };
    // 黄牌降低一名防守员速度
    GameLayer.prototype.onPropYellowCard = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[2] <= 0) {
            if (this.yellowCardCount > 0) {
                this.setTipsNode(true, 2);
                this.isPassBall = false;
                this.isRedCard = false;
                this.isYellowCard = true;
                this.isDrink = false;
                this.isExtraTime = false;
                // 先降速运动
                DataManager_1.default.instance.reds.forEach(function (red) {
                    red.setSpeed(red.speed / 10);
                    red.setCircleActive(true);
                });
                if (this.yellowCardOnce) {
                    this.grey(this.yellowCard);
                }
            }
            else if (!this.yellowCardOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[2] += 1
                    _this.yellowCardCount += 1;
                    _this.setPropNum();
                    _this.yellowCardOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 2);
            this.isPassBall = false;
            this.isRedCard = false;
            this.isYellowCard = true;
            this.isDrink = false;
            this.isExtraTime = false;
            // 先降速运动
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed / 10);
                red.setCircleActive(true);
            });
            if (this.yellowCardOnce) {
                this.grey(this.yellowCard);
            }
        }
    };
    // 饮品让能量持续3回合
    GameLayer.prototype.onPropDrink = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[3] <= 0) {
            if (this.drinkCount > 0) {
                this.setTipsNode(true, 3);
                this.isPassBall = false;
                this.isRedCard = false;
                this.isYellowCard = false;
                this.isDrink = true;
                this.isExtraTime = false;
                if (this.drinkOnce) {
                    this.grey(this.drink);
                }
            }
            else if (!this.drinkOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[3] += 1
                    _this.drinkCount += 1;
                    _this.setPropNum();
                    _this.drinkOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 3);
            this.isPassBall = false;
            this.isRedCard = false;
            this.isYellowCard = false;
            this.isDrink = true;
            this.isExtraTime = false;
            if (this.drinkOnce) {
                this.grey(this.drink);
            }
        }
    };
    // 加时让时间增加30s
    GameLayer.prototype.onPropExtraTime = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[4] <= 0) {
            if (this.extraTimeCount > 0) {
                this.setTipsNode(true, 4);
                this.isPassBall = false;
                this.isRedCard = false;
                this.isYellowCard = false;
                this.isDrink = false;
                this.isExtraTime = true;
                if (this.extraTimeOnce) {
                    this.grey(this.extraTime);
                }
            }
            else if (!this.extraTimeOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[4] += 1
                    _this.extraTimeCount += 1;
                    _this.setPropNum();
                    _this.extraTimeOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 4);
            this.isPassBall = false;
            this.isRedCard = false;
            this.isYellowCard = false;
            this.isDrink = false;
            this.isExtraTime = true;
            if (this.extraTimeOnce) {
                this.grey(this.extraTime);
            }
        }
    };
    GameLayer.prototype.onPropCancel = function () {
        if (this.isPassBall) {
            this.isPassBall = false;
            // 取消框
            DataManager_1.default.instance.blues.forEach(function (blue) {
                blue.setCircleActive(false);
            });
            var nextBlue = DataManager_1.default.instance.getBlueNext();
            if (nextBlue)
                nextBlue.setCircleActive(true);
        }
        if (this.isRedCard) {
            this.isRedCard = false;
            // 恢复速度
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed * 10);
                red.setCircleActive(false);
            });
        }
        if (this.isYellowCard) {
            this.isYellowCard = false;
            // 恢复速度
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed * 10);
                red.setCircleActive(false);
            });
        }
        if (this.isDrink)
            this.isDrink = false;
        if (this.isExtraTime)
            this.isExtraTime = false;
        this.setTipsNode(false);
    };
    GameLayer.prototype.onTimerStart = function (isExtraTimeOnce) {
        var _this = this;
        if (isExtraTimeOnce === void 0) { isExtraTimeOnce = false; }
        if (window["tt"]) {
            this.startRecord();
        }
        this.passBallOnce = false;
        this.redCardOnce = false;
        this.yellowCardOnce = false;
        this.drinkOnce = false;
        if (!isExtraTimeOnce) {
            this.extraTimeOnce = false;
        }
        this.normal(this.passBall);
        this.normal(this.redCard);
        this.normal(this.yellowCard);
        this.normal(this.drink);
        this.normal(this.extraTime);
        this.passBallCount = 0;
        this.redCardCount = 1;
        this.yellowCardCount = 0;
        this.drinkCount = 0;
        this.extraTimeCount = 0;
        this.setPropNum();
        this.timerLabel.string = "" + DataManager_1.default.instance.timer;
        this.unscheduleAllCallbacks();
        this.schedule(function () {
            if (DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.WIN
                || DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.LOSE) {
                _this.unscheduleAllCallbacks();
            }
            if (DataManager_1.default.instance.timer <= 1) {
                _this.unscheduleAllCallbacks();
                // 取消技能选择
                if (_this.isPassBall)
                    _this.isPassBall = false;
                if (_this.isRedCard)
                    _this.isRedCard = false;
                if (_this.isYellowCard)
                    _this.isYellowCard = false;
                if (_this.isDrink)
                    _this.isDrink = false;
                if (_this.isExtraTime)
                    _this.isExtraTime = false;
                _this.setTipsNode(false);
                if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.WIN) {
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_LOSE, '时间到');
                }
            }
            if (DataManager_1.default.instance.timer == 5) {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SPELL);
            }
            DataManager_1.default.instance.timer--;
            _this.timerLabel.string = "" + DataManager_1.default.instance.timer;
        }, 1);
    };
    GameLayer.prototype.onTimerStop = function () {
        this.timerLabel.string = '';
        this.unscheduleAllCallbacks();
    };
    GameLayer.prototype.onTouchstart = function () {
        // this.progressSpeed = getRandom(2, 5)
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING && DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.SHOOTING)
            return;
        if (this.isPassBall || this.isRedCard || this.isYellowCard || this.isDrink || this.isExtraTime)
            return;
        this.holdFlag = true;
    };
    GameLayer.prototype.onTouchend = function (e) {
        var location = e.getLocation();
        // 传球
        if (this.isPassBall) {
            var target = DataManager_1.default.instance.getPassPlayer(location.x, location.y);
            if (target) {
                // 取消技能
                this.isPassBall = false;
                this.setTipsNode(false);
                // 取消框
                DataManager_1.default.instance.blues.forEach(function (blue) {
                    blue.setCircleActive(false);
                });
                // 扣技能点
                if (DataManager_1.default.instance.skillNums[0] > 0) {
                    DataManager_1.default.instance.cutSkillNums(0);
                }
                else {
                    this.passBallCount--;
                }
                this.setPropNum();
                // 先转向
                var ready = DataManager_1.default.instance.getBlueReady();
                ready.turnTo(target.x, target.y);
                // 传球
                EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, { progress: 1, next: target.getComponent(Player_1.default) });
            }
            return;
        }
        // 红牌
        if (this.isRedCard) {
            var target_1 = DataManager_1.default.instance.getCardEnemy(location.x, location.y);
            if (target_1) {
                // 取消技能
                this.isRedCard = false;
                this.setTipsNode(false);
                // 恢复速度
                DataManager_1.default.instance.reds.forEach(function (red) {
                    if (target_1) {
                        if (target_1.uuid != red.node.uuid)
                            red.setSpeed(red.speed * 10);
                    }
                    else {
                        red.setSpeed(red.speed * 10);
                    }
                    red.setCircleActive(false);
                });
                // 扣技能点
                if (DataManager_1.default.instance.skillNums[1] > 0) {
                    DataManager_1.default.instance.cutSkillNums(1);
                }
                else {
                    this.redCardCount--;
                }
                this.setPropNum();
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.LAUGH);
                target_1.getComponent(Enemy_1.default).setSpeed(0);
                target_1.getComponent(cc.Animation).play();
                var toPos = this.timerLabel.node.getPosition();
                cc.tween(target_1).to(0.2, { position: cc.v3(toPos.x, toPos.y, 0) }).call(function () {
                    target_1.active = false;
                }).start();
            }
            return;
        }
        // 黄牌
        if (this.isYellowCard) {
            var target_2 = DataManager_1.default.instance.getCardEnemy(location.x, location.y);
            if (target_2) {
                // 取消技能
                this.isYellowCard = false;
                this.setTipsNode(false);
                // 恢复速度
                DataManager_1.default.instance.reds.forEach(function (red) {
                    if (target_2) {
                        if (target_2.uuid != red.node.uuid)
                            red.setSpeed(red.speed * 10);
                    }
                    else {
                        red.setSpeed(red.speed * 10);
                    }
                    red.setCircleActive(false);
                });
                // 扣技能点
                if (DataManager_1.default.instance.skillNums[2] > 0) {
                    DataManager_1.default.instance.cutSkillNums(2);
                }
                else {
                    this.yellowCardCount--;
                }
                this.setPropNum();
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SLOWDOWN);
            }
            return;
        }
        // 饮品
        if (this.isDrink) {
            this.isDrink = false;
            this.setTipsNode(false);
            // 扣技能点
            if (DataManager_1.default.instance.skillNums[3] > 0) {
                DataManager_1.default.instance.cutSkillNums(3);
            }
            else {
                this.drinkCount--;
            }
            this.setPropNum();
            DataManager_1.default.instance.powerEffectLoop = 2;
            DataManager_1.default.instance.powerCount = DataManager_1.default.instance.powerCountTarget;
            this.setPowerBar();
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SKILL);
            return;
        }
        // 加时
        if (this.isExtraTime) {
            this.isExtraTime = false;
            this.setTipsNode(false);
            // 扣技能点
            if (DataManager_1.default.instance.skillNums[4] > 0) {
                DataManager_1.default.instance.cutSkillNums(4);
            }
            else {
                this.extraTimeCount--;
            }
            this.setPropNum();
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.TIMER);
            DataManager_1.default.instance.timer += DataManager_1.default.instance.extraTime;
            this.onTimerStart(true);
            return;
        }
        this.holdFlag = false;
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, { progress: this.forceBar.progress });
    };
    GameLayer.prototype.update = function (dt) {
        if (this.holdFlag && this.forceBar) {
            this.forceBar.progress += this.progressSpeed * dt / 2;
            if (this.forceBar.progress > 1)
                this.forceBar.progress = 0;
        }
        else {
            if (DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.RUNING) {
                this.forceBar.progress = 0;
            }
        }
    };
    GameLayer.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchstart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchend, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchend, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.TIMER_START, this.onTimerStart);
    };
    GameLayer.prototype.startRecord = function () {
        this.startRecordNode.active = false;
        this.stopRecordNode.active = true;
        SdkManager_1.default.instance.recordingVideoStart();
    };
    GameLayer.prototype.endRecord = function () {
        if (window["tt"]) {
            this.startRecordNode.active = true;
            this.stopRecordNode.active = false;
            SdkManager_1.default.instance.recordingVideoEnd();
        }
    };
    GameLayer.prototype.normal = function (icon) {
        icon.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon));
        // icon.node.getChildByName("icon").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon.node.getChildByName("icon").getComponent(cc.Sprite)));
        // icon.node.getChildByName("video").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon.node.getChildByName("video").getComponent(cc.Sprite)));
    };
    GameLayer.prototype.grey = function (icon) {
        icon.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon));
        // icon.node.getChildByName("icon").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon.node.getChildByName("icon").getComponent(cc.Sprite)));
        // icon.node.getChildByName("video").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon.node.getChildByName("video").getComponent(cc.Sprite)));
    };
    __decorate([
        property(cc.ProgressBar)
    ], GameLayer.prototype, "forceBar", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameLayer.prototype, "powerBar", void 0);
    __decorate([
        property(cc.Label)
    ], GameLayer.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "propsNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "tipsNode", void 0);
    __decorate([
        property(cc.Label)
    ], GameLayer.prototype, "teamLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "passBall", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "redCard", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "yellowCard", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "drink", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "extraTime", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(Baselayer_1.default));
exports.default = GameLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcR2FtZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixrQ0FBNkI7QUFDN0IsZ0NBQStHO0FBQy9HLHdEQUFtRDtBQUNuRCxzREFBaUQ7QUFDakQsd0RBQW1EO0FBQ25ELG9EQUErQztBQUMvQyxvQ0FBK0I7QUFDL0Isb0RBQW1EO0FBRW5ELHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQW1vQkM7UUFob0JHLGNBQVEsR0FBbUIsSUFBSSxDQUFBO1FBRS9CLGNBQVEsR0FBbUIsSUFBSSxDQUFBO1FBRS9CLGdCQUFVLEdBQWEsSUFBSSxDQUFBO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBQzFCLE9BQU87UUFDUCxjQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFBO1FBQ3pCLElBQUk7UUFDSixnQkFBVSxHQUFZLEtBQUssQ0FBQTtRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFBO1FBQzFCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFDNUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsY0FBUSxHQUFjLElBQUksQ0FBQTtRQUUxQixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBRTVCLFdBQUssR0FBYyxJQUFJLENBQUE7UUFFdkIsZUFBUyxHQUFjLElB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USxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNPO0lBYTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDTztJQWxDVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbW9CN0I7SUFBRCxnQkFBQztDQW5vQkQsQUFtb0JDLENBbm9Cc0MsbUJBQVMsR0Ftb0IvQztrQkFub0JvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCBFbmVteSBmcm9tIFwiLi4vRW5lbXlcIjtcclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0dBTUVfRVZFTlQsIEVOVU1fR0FNRV9TVEFUVVMsIEVOVU1fUExBWUVSX1NUQVRVUywgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Nka01hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbSB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgQmFzZUxheWVyIGZyb20gXCIuL0Jhc2VsYXllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgZm9yY2VCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcG93ZXJCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb3BzTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlwc05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0ZWFtTGFiZWw6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgLy8g54K55oyJ54q25oCBXHJcbiAgICBob2xkRmxhZzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcm9ncmVzc1NwZWVkOiBudW1iZXIgPSAzXHJcbiAgICAvL+aKgOiDvVxyXG4gICAgaXNQYXNzQmFsbDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBpc1JlZENhcmQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNZZWxsb3dDYXJkOiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzRHJpbms6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNFeHRyYVRpbWU6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgc3RhcnRSZWNvcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0b3BSZWNvcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwYXNzQmFsbDogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHJlZENhcmQ6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICB5ZWxsb3dDYXJkOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZHJpbms6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBleHRyYVRpbWU6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIHBhc3NCYWxsT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICByZWRDYXJkT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICB5ZWxsb3dDYXJkT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBkcmlua09uY2U6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgZXh0cmFUaW1lT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwYXNzQmFsbENvdW50OiBudW1iZXIgPSAwXHJcbiAgICByZWRDYXJkQ291bnQ6IG51bWJlciA9IDBcclxuICAgIHllbGxvd0NhcmRDb3VudDogbnVtYmVyID0gMFxyXG4gICAgZHJpbmtDb3VudDogbnVtYmVyID0gMFxyXG4gICAgZXh0cmFUaW1lQ291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnRSZWNvcmROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdQYW5lbCcpLmdldENoaWxkQnlOYW1lKCdjYW1yZWFfYnRuJyk7XHJcbiAgICAgICAgdGhpcy5zdGFydFJlY29yZE5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UmVjb3JkKClcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RvcFJlY29yZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BhbmVsJykuZ2V0Q2hpbGRCeU5hbWUoJ2NhbXJlYV9zb3RwX2J0bicpXHJcbiAgICAgICAgdGhpcy5zdG9wUmVjb3JkTm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kUmVjb3JkKCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBpZiAoIXdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRSZWNvcmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BSZWNvcmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hzdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hlbmQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuVElNRVJfU1RBUlQsIHRoaXMub25UaW1lclN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuVElNRVJfU1RPUCwgdGhpcy5vblRpbWVyU3RvcCwgdGhpcylcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuR0FNRV9SRVNUQVJUKVxyXG4gICAgICAgIC8vIOWPlua2iOaKgOiDvemAieaLqVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGFzc0JhbGwpIHRoaXMuaXNQYXNzQmFsbCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWRDYXJkKSB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNZZWxsb3dDYXJkKSB0aGlzLmlzWWVsbG93Q2FyZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmluaykgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5pc0V4dHJhVGltZSkgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBvblNldHRpbmdDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5TRVRUSU5HKVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5SRU5ET1JfSE9NRV9CVE4sIHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6+572u5oqA6IO954K5dWlcclxuICAgIHNldFByb3BOdW0oKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgocHJvcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbnVtcyA9IHByb3AuZ2V0Q2hpbGRCeU5hbWUoJ051bXMnKVxyXG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IHByb3AuZ2V0Q2hpbGRCeU5hbWUoJ3ZpZGVvJylcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1tpbmRleF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBudW1zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0gPSBudW0gKyB0aGlzLnJlZENhcmRDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG51bXMuZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtudW19YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChpbmRleCA9PSAwKSAmJiAodGhpcy5wYXNzQmFsbENvdW50ID4gMCB8fCB0aGlzLnBhc3NCYWxsT25jZSkpIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbnVtcy5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke3RoaXMucGFzc0JhbGxDb3VudH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGluZGV4ID09IDEpICYmICh0aGlzLnJlZENhcmRDb3VudCA+IDAgfHwgdGhpcy5yZWRDYXJkT25jZSkpIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbnVtcy5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke3RoaXMucmVkQ2FyZENvdW50fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgoaW5kZXggPT0gMikgJiYgKHRoaXMueWVsbG93Q2FyZENvdW50ID4gMCB8fCB0aGlzLnllbGxvd0NhcmRPbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBudW1zLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy55ZWxsb3dDYXJkQ291bnR9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChpbmRleCA9PSAzKSAmJiAodGhpcy5kcmlua0NvdW50ID4gMCB8fCB0aGlzLmRyaW5rT25jZSkpIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbnVtcy5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke3RoaXMuZHJpbmtDb3VudH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGluZGV4ID09IDQpICYmICh0aGlzLmV4dHJhVGltZUNvdW50ID4gMCB8fCB0aGlzLmV4dHJhVGltZU9uY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG51bXMuZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHt0aGlzLmV4dHJhVGltZUNvdW50fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZWFtTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy50ZWFtTGFiZWwuc3RyaW5nID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudERhdGFbJ2luZm8nXS50ZWFtXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG93ZXJCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlckJhci5wcm9ncmVzcyA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGlwc05vZGUoc3RhdHVzOiBib29sZWFuLCBzdHlsZUluZGV4OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy50aXBzTm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3R5bGUnKS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHN0eWxlSW5kZXggPT09IGluZGV4ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLmFjdGl2ZSA9IHN0YXR1c1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmAiemYn+WPi+S8oOeQg1xyXG4gICAgb25Qcm9wUGFzc0JhbGwoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1swXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3NCYWxsQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDohJrkuIvmoYbliqjnlLtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmJsdWVzLmZvckVhY2goYmx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsdWUuc3RhdHVzICE9IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSkgYmx1ZS5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKHRydWUsIDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzWWVsbG93Q2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHJpbmsgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXNzQmFsbE9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyZXkodGhpcy5wYXNzQmFsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMucGFzc0JhbGxPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnZpZGVvQWRTaG93KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5oiQ5Yqf5Zue6LCDJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMF0gKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc0JhbGxDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzQmFsbE9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6ISa5LiL5qGG5Yqo55S7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmJsdWVzLmZvckVhY2goYmx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmx1ZS5zdGF0dXMgIT0gRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZKSBibHVlLnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKHRydWUsIDApXHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXNzQmFsbCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzWWVsbG93Q2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNFeHRyYVRpbWUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzQmFsbE9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLnBhc3NCYWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDnuqLniYznvZrkuIvkuIDlkI3pmLLlrojlkZhcclxuICAgIG9uUHJvcFJlZENhcmQoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1sxXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZENhcmRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGlwc05vZGUodHJ1ZSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQYXNzQmFsbCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIOWFiOWHj+mAn+i/kOWKqOW+hemAieaLqVxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVkcy5mb3JFYWNoKHJlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAvIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZC5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWRDYXJkT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLnJlZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLnJlZENhcmRPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnZpZGVvQWRTaG93KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5oiQ5Yqf5Zue6LCDJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMV0gKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkQ2FyZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZENhcmRPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5pyJ6K+vJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGlwc05vZGUodHJ1ZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5pc1Bhc3NCYWxsID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIOWFiOWHj+mAn+i/kOWKqOW+hemAieaLqVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yZWRzLmZvckVhY2gocmVkID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZC5zZXRTcGVlZChyZWQuc3BlZWQgLyAxMClcclxuICAgICAgICAgICAgICAgIHJlZC5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVkQ2FyZE9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLnJlZENhcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOm7hOeJjOmZjeS9juS4gOWQjemYsuWuiOWRmOmAn+W6plxyXG4gICAgb25Qcm9wWWVsbG93Q2FyZCgpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzICE9IEVOVU1fR0FNRV9TVEFUVVMuUlVOSU5HKSByZXR1cm5cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2tpbGxOdW1zWzJdIDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMueWVsbG93Q2FyZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCAyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Bhc3NCYWxsID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWRDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFeHRyYVRpbWUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8g5YWI6ZmN6YCf6L+Q5YqoXHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yZWRzLmZvckVhY2gocmVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWQuc2V0U3BlZWQocmVkLnNwZWVkIC8gMTApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnllbGxvd0NhcmRPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmV5KHRoaXMueWVsbG93Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMueWVsbG93Q2FyZE9uY2UpIHtcclxuICAgICAgICAgICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudmlkZW9BZFNob3coKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmiJDlip/lm57osIMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1syXSArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWxsb3dDYXJkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BOdW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVsbG93Q2FyZE9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCAyKVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzRHJpbmsgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gZmFsc2VcclxuICAgICAgICAgICAgLy8g5YWI6ZmN6YCf6L+Q5YqoXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAvIDEwKVxyXG4gICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy55ZWxsb3dDYXJkT25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmV5KHRoaXMueWVsbG93Q2FyZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6aWu5ZOB6K6p6IO96YeP5oyB57utM+WbnuWQiFxyXG4gICAgb25Qcm9wRHJpbmsoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1szXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyaW5rQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKHRydWUsIDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1llbGxvd0NhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcmlua09uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyZXkodGhpcy5kcmluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZHJpbmtPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnZpZGVvQWRTaG93KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5oiQ5Yqf5Zue6LCDJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbM10gKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJpbmtDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmlua09uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCAzKVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gZmFsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJpbmtPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyZXkodGhpcy5kcmluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yqg5pe26K6p5pe26Ze05aKe5YqgMzBzXHJcbiAgICBvblByb3BFeHRyYVRpbWUoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1s0XSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhVGltZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCA0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Bhc3NCYWxsID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWRDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLmV4dHJhVGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS52aWRlb0FkU2hvdygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+a/gOWKseinhumikeaIkOWKn+WbnuiwgycpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2tpbGxOdW1zWzRdICs9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhVGltZUNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhVGltZU9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCA0KVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IHRydWVcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmV5KHRoaXMuZXh0cmFUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByb3BDYW5jZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXNzQmFsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyDlj5bmtojmoYZcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmx1ZXMuZm9yRWFjaChibHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGJsdWUuc2V0Q2lyY2xlQWN0aXZlKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBuZXh0Qmx1ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldEJsdWVOZXh0KClcclxuICAgICAgICAgICAgaWYgKG5leHRCbHVlKSBuZXh0Qmx1ZS5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWRDYXJkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWRDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgLy8g5oGi5aSN6YCf5bqmXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNZZWxsb3dDYXJkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgLy8g5oGi5aSN6YCf5bqmXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmluaykgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5pc0V4dHJhVGltZSkgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVyU3RhcnQoaXNFeHRyYVRpbWVPbmNlID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlY29yZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhc3NCYWxsT25jZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVkQ2FyZE9uY2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnllbGxvd0NhcmRPbmNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmlua09uY2UgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWlzRXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhVGltZU9uY2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub3JtYWwodGhpcy5wYXNzQmFsbCk7XHJcbiAgICAgICAgdGhpcy5ub3JtYWwodGhpcy5yZWRDYXJkKTtcclxuICAgICAgICB0aGlzLm5vcm1hbCh0aGlzLnllbGxvd0NhcmQpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsKHRoaXMuZHJpbmspO1xyXG4gICAgICAgIHRoaXMubm9ybWFsKHRoaXMuZXh0cmFUaW1lKTtcclxuICAgICAgICB0aGlzLnBhc3NCYWxsQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMucmVkQ2FyZENvdW50ID0gMTtcclxuICAgICAgICB0aGlzLnllbGxvd0NhcmRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmlua0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmV4dHJhVGltZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnNldFByb3BOdW0oKTtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXJ9YFxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPT0gRU5VTV9HQU1FX1NUQVRVUy5XSU5cclxuICAgICAgICAgICAgICAgIHx8IERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9PSBFTlVNX0dBTUVfU1RBVFVTLkxPU0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnRpbWVyIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI5oqA6IO96YCJ5oupXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Bhc3NCYWxsKSB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWRDYXJkKSB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1llbGxvd0NhcmQpIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRHJpbmspIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4dHJhVGltZSkgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgIT0gRU5VTV9HQU1FX1NUQVRVUy5XSU4pIHtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuR0FNRV9MT1NFLCAn5pe26Ze05YiwJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXIgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU1BFTEwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXItLVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXJ9YFxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25UaW1lclN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9ICcnXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvZ3Jlc3NTcGVlZCA9IGdldFJhbmRvbSgyLCA1KVxyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgIT0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkcgJiYgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID09IEVOVU1fR0FNRV9TVEFUVVMuU0hPT1RJTkcpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmlzUGFzc0JhbGwgfHwgdGhpcy5pc1JlZENhcmQgfHwgdGhpcy5pc1llbGxvd0NhcmQgfHwgdGhpcy5pc0RyaW5rIHx8IHRoaXMuaXNFeHRyYVRpbWUpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaG9sZEZsYWcgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaGVuZChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBlLmdldExvY2F0aW9uKClcclxuICAgICAgICAvLyDkvKDnkINcclxuICAgICAgICBpZiAodGhpcy5pc1Bhc3NCYWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBhc3NQbGF5ZXIobG9jYXRpb24ueCwgbG9jYXRpb24ueSlcclxuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI5oqA6IO9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOahhlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmx1ZXMuZm9yRWFjaChibHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBibHVlLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3NCYWxsQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgICAgICAvLyDlhYjovazlkJFcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Qmx1ZVJlYWR5KClcclxuICAgICAgICAgICAgICAgIHJlYWR5LnR1cm5Ubyh0YXJnZXQueCwgdGFyZ2V0LnkpXHJcbiAgICAgICAgICAgICAgICAvLyDkvKDnkINcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5QTEFZRVJfU0hPT1QsIHsgcHJvZ3Jlc3M6IDEsIG5leHQ6IHRhcmdldC5nZXRDb21wb25lbnQoUGxheWVyKSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnuqLniYxcclxuICAgICAgICBpZiAodGhpcy5pc1JlZENhcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Q2FyZEVuZW15KGxvY2F0aW9uLngsIGxvY2F0aW9uLnkpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOaKgOiDvVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIOaBouWkjemAn+W6plxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVkcy5mb3JFYWNoKHJlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnV1aWQgIT0gcmVkLm5vZGUudXVpZCkgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZC5zZXRTcGVlZChyZWQuc3BlZWQgKiAxMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMV0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZENhcmRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkxBVUdIKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudChFbmVteSkuc2V0U3BlZWQoMClcclxuICAgICAgICAgICAgICAgIHRhcmdldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvUG9zID0gdGhpcy50aW1lckxhYmVsLm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0KS50bygwLjIsIHsgcG9zaXRpb246IGNjLnYzKHRvUG9zLngsIHRvUG9zLnksIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpu4TniYxcclxuICAgICAgICBpZiAodGhpcy5pc1llbGxvd0NhcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Q2FyZEVuZW15KGxvY2F0aW9uLngsIGxvY2F0aW9uLnkpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOaKgOiDvVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1llbGxvd0NhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIOaBouWkjemAn+W6plxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVkcy5mb3JFYWNoKHJlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnV1aWQgIT0gcmVkLm5vZGUudXVpZCkgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZC5zZXRTcGVlZChyZWQuc3BlZWQgKiAxMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMl0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllbGxvd0NhcmRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLlNMT1dET1dOKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDppa7lk4FcclxuICAgICAgICBpZiAodGhpcy5pc0RyaW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGlwc05vZGUoZmFsc2UpXHJcbiAgICAgICAgICAgIC8vIOaJo+aKgOiDveeCuVxyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2tpbGxOdW1zWzNdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyaW5rQ291bnQtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb3BOdW0oKVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckVmZmVjdExvb3AgPSAyXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG93ZXJCYXIoKVxyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5TS0lMTClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWKoOaXtlxyXG4gICAgICAgIGlmICh0aGlzLmlzRXh0cmFUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFeHRyYVRpbWUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKGZhbHNlKVxyXG4gICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1s0XSA+IDApIHtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmN1dFNraWxsTnVtcyg0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYVRpbWVDb3VudC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLlRJTUVSKVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS50aW1lciArPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5leHRyYVRpbWVcclxuICAgICAgICAgICAgdGhpcy5vblRpbWVyU3RhcnQodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9sZEZsYWcgPSBmYWxzZVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5QTEFZRVJfU0hPT1QsIHsgcHJvZ3Jlc3M6IHRoaXMuZm9yY2VCYXIucHJvZ3Jlc3MgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ob2xkRmxhZyAmJiB0aGlzLmZvcmNlQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VCYXIucHJvZ3Jlc3MgKz0gdGhpcy5wcm9ncmVzc1NwZWVkICogZHQgLyAyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcmNlQmFyLnByb2dyZXNzID4gMSkgdGhpcy5mb3JjZUJhci5wcm9ncmVzcyA9IDBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID09IEVOVU1fR0FNRV9TVEFUVVMuUlVOSU5HKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlQmFyLnByb2dyZXNzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hlbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hlbmQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULlRJTUVSX1NUQVJULCB0aGlzLm9uVGltZXJTdGFydClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFJlY29yZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UmVjb3JkTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0b3BSZWNvcmROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5yZWNvcmRpbmdWaWRlb1N0YXJ0KClcclxuICAgIH1cclxuICAgIGVuZFJlY29yZCgpIHtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlY29yZE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wUmVjb3JkTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5yZWNvcmRpbmdWaWRlb0VuZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBub3JtYWwoaWNvbjogY2MuU3ByaXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWNvbi5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIGljb24pKTtcclxuICAgICAgICAvLyBpY29uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgICAgIC8vIGljb24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ3JleShpY29uOiBjYy5TcHJpdGUpOiB2b2lkIHtcclxuICAgICAgICBpY29uLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBpY29uKSk7XHJcbiAgICAgICAgLy8gaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgICAgIC8vIGljb24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBpY29uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '076f9NV1ThDb5+NMok6LV1k', 'Utils');
// script/Utils.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.getRandom = void 0;
// 生产随机数字
function getRandom(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
exports.getRandom = getRandom;
// 引用数据值传递
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7QUFFdkIsU0FBUztBQUNULFNBQWdCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBWTtJQUNqRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNqRSxDQUFDO0FBRkQsOEJBRUM7QUFFRCxVQUFVO0FBQ1YsU0FBZ0IsS0FBSyxDQUFDLEdBQVE7SUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUMxQyxDQUFDO0FBRkQsc0JBRUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuLy8g55Sf5Lqn6ZqP5py65pWw5a2XXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb20obG93ZXI6IG51bWJlciwgdXBwZXI6bnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcisxKSkgKyBsb3dlcjtcclxufVxyXG5cclxuLy8g5byV55So5pWw5o2u5YC85Lyg6YCSXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmo6IGFueSl7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Toast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eafdcUc1dFAap3MzTvb07dQ', 'Toast');
// script/Toast.js

"use strict";

//一个简单的tost组件，用法：
// let Toast = reqire('Toast.js')
// Toast(text,{gravity,duration,bg_color})
//text:要显示的字符串
//gravity(可选):位置，String类型，可选值('CENTER','TOP','BOTTOM'),默认为'CENTER'
//duration(可选):时间，Number类型，单位为秒，默认1s
//bg_color(可选):颜色，cc.color类型，默认cc.color(102, 102, 102, 200)
function Toast(text, _temp) {
  if (text === void 0) {
    text = "";
  }

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$gravity = _ref.gravity,
      gravity = _ref$gravity === void 0 ? "CENTER" : _ref$gravity,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      _ref$bg_color = _ref.bg_color,
      bg_color = _ref$bg_color === void 0 ? cc.color(102, 102, 102, 200) : _ref$bg_color;

  // canvas
  var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
  var width = canvas.node.width;
  var height = canvas.node.height;
  var bgNode = new cc.Node(); // Lable文本格式设置

  var textNode = new cc.Node();
  var textLabel = textNode.addComponent(cc.Label);
  textLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
  textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
  textLabel.fontSize = 30;
  textLabel.string = text; // 当文本宽度过长时，设置为自动换行格式

  if (text.length * textLabel.fontSize > width * 3 / 5) {
    textNode.width = width * 3 / 5;
    textLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
  } else {
    textNode.width = text.length * textLabel.fontSize;
  }

  var lineCount = ~~(text.length * textLabel.fontSize / (width * 3 / 5)) + 1;
  textNode.height = textLabel.fontSize * lineCount; // 背景设置

  var ctx = bgNode.addComponent(cc.Graphics);
  ctx.arc(-textNode.width / 2, 0, textNode.height / 2 + 20, 0.5 * Math.PI, 1.5 * Math.PI, true);
  ctx.lineTo(textNode.width / 2, -(textNode.height / 2 + 20));
  ctx.arc(textNode.width / 2, 0, textNode.height / 2 + 20, 1.5 * Math.PI, 0.5 * Math.PI, true);
  ctx.lineTo(-textNode.width / 2, textNode.height / 2 + 20);
  ctx.fillColor = bg_color;
  ctx.fill();
  bgNode.addChild(textNode);
  var camera = cc.find('Canvas/Main/Camera').position; // gravity 设置Toast显示的位置

  if (gravity === "CENTER") {
    bgNode.y = 0 + camera.y;
    bgNode.x = 0 + camera.x;
  } else if (gravity === "TOP") {
    bgNode.y = bgNode.y + height / 5 * 2 + camera.y;
  } else if (gravity === "BOTTOM") {
    bgNode.y = bgNode.y - height / 5 * 2 + camera.y;
  }

  canvas.node.addChild(bgNode);
  var finished = cc.callFunc(function () {
    bgNode.destroy();
  });
  var action = cc.sequence(cc.moveBy(duration, cc.v2(0, 0)), cc.fadeOut(0.3), finished);
  bgNode.runAction(action);
}

module.exports = Toast;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUb2FzdC5qcyJdLCJuYW1lcyI6WyJUb2FzdCIsInRleHQiLCJncmF2aXR5IiwiZHVyYXRpb24iLCJiZ19jb2xvciIsImNjIiwiY29sb3IiLCJjYW52YXMiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIkNhbnZhcyIsIndpZHRoIiwibm9kZSIsImhlaWdodCIsImJnTm9kZSIsIk5vZGUiLCJ0ZXh0Tm9kZSIsInRleHRMYWJlbCIsImFkZENvbXBvbmVudCIsIkxhYmVsIiwiaG9yaXpvbnRhbEFsaWduIiwiSG9yaXpvbnRhbEFsaWduIiwiQ0VOVEVSIiwidmVydGljYWxBbGlnbiIsIlZlcnRpY2FsQWxpZ24iLCJmb250U2l6ZSIsInN0cmluZyIsImxlbmd0aCIsIm92ZXJmbG93IiwiT3ZlcmZsb3ciLCJSRVNJWkVfSEVJR0hUIiwibGluZUNvdW50IiwiY3R4IiwiR3JhcGhpY3MiLCJhcmMiLCJNYXRoIiwiUEkiLCJsaW5lVG8iLCJmaWxsQ29sb3IiLCJmaWxsIiwiYWRkQ2hpbGQiLCJjYW1lcmEiLCJmaW5kIiwicG9zaXRpb24iLCJ5IiwieCIsImZpbmlzaGVkIiwiY2FsbEZ1bmMiLCJkZXN0cm95IiwiYWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlQnkiLCJ2MiIsImZhZGVPdXQiLCJydW5BY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsS0FBVCxDQUNFQyxJQURGLFNBT0U7QUFBQSxNQU5BQSxJQU1BO0FBTkFBLElBQUFBLElBTUEsR0FOTyxFQU1QO0FBQUE7O0FBQUEsZ0NBREksRUFDSjtBQUFBLDBCQUpFQyxPQUlGO0FBQUEsTUFKRUEsT0FJRiw2QkFKWSxRQUlaO0FBQUEsMkJBSEVDLFFBR0Y7QUFBQSxNQUhFQSxRQUdGLDhCQUhhLENBR2I7QUFBQSwyQkFGRUMsUUFFRjtBQUFBLE1BRkVBLFFBRUYsOEJBRmFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLENBRWI7O0FBQ0E7QUFDQSxNQUFJQyxNQUFNLEdBQUdGLEVBQUUsQ0FBQ0csUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxzQkFBdkIsQ0FBOENMLEVBQUUsQ0FBQ00sTUFBakQsQ0FBYjtBQUNBLE1BQUlDLEtBQUssR0FBR0wsTUFBTSxDQUFDTSxJQUFQLENBQVlELEtBQXhCO0FBQ0EsTUFBSUUsTUFBTSxHQUFHUCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsTUFBekI7QUFFQSxNQUFJQyxNQUFNLEdBQUcsSUFBSVYsRUFBRSxDQUFDVyxJQUFQLEVBQWIsQ0FOQSxDQVFBOztBQUNBLE1BQUlDLFFBQVEsR0FBRyxJQUFJWixFQUFFLENBQUNXLElBQVAsRUFBZjtBQUNBLE1BQUlFLFNBQVMsR0FBR0QsUUFBUSxDQUFDRSxZQUFULENBQXNCZCxFQUFFLENBQUNlLEtBQXpCLENBQWhCO0FBQ0FGLEVBQUFBLFNBQVMsQ0FBQ0csZUFBVixHQUE0QmhCLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTRSxlQUFULENBQXlCQyxNQUFyRDtBQUNBTCxFQUFBQSxTQUFTLENBQUNNLGFBQVYsR0FBMEJuQixFQUFFLENBQUNlLEtBQUgsQ0FBU0ssYUFBVCxDQUF1QkYsTUFBakQ7QUFDQUwsRUFBQUEsU0FBUyxDQUFDUSxRQUFWLEdBQXFCLEVBQXJCO0FBQ0FSLEVBQUFBLFNBQVMsQ0FBQ1MsTUFBVixHQUFtQjFCLElBQW5CLENBZEEsQ0FnQkE7O0FBQ0EsTUFBSUEsSUFBSSxDQUFDMkIsTUFBTCxHQUFjVixTQUFTLENBQUNRLFFBQXhCLEdBQW9DZCxLQUFLLEdBQUcsQ0FBVCxHQUFjLENBQXJELEVBQXdEO0FBQ3RESyxJQUFBQSxRQUFRLENBQUNMLEtBQVQsR0FBa0JBLEtBQUssR0FBRyxDQUFULEdBQWMsQ0FBL0I7QUFDQU0sSUFBQUEsU0FBUyxDQUFDVyxRQUFWLEdBQXFCeEIsRUFBRSxDQUFDZSxLQUFILENBQVNVLFFBQVQsQ0FBa0JDLGFBQXZDO0FBQ0QsR0FIRCxNQUdPO0FBQ0xkLElBQUFBLFFBQVEsQ0FBQ0wsS0FBVCxHQUFpQlgsSUFBSSxDQUFDMkIsTUFBTCxHQUFjVixTQUFTLENBQUNRLFFBQXpDO0FBQ0Q7O0FBQ0QsTUFBSU0sU0FBUyxHQUNYLENBQUMsRUFBRy9CLElBQUksQ0FBQzJCLE1BQUwsR0FBY1YsU0FBUyxDQUFDUSxRQUF6QixJQUF1Q2QsS0FBSyxHQUFHLENBQVQsR0FBYyxDQUFwRCxDQUFGLENBQUQsR0FBNkQsQ0FEL0Q7QUFFQUssRUFBQUEsUUFBUSxDQUFDSCxNQUFULEdBQWtCSSxTQUFTLENBQUNRLFFBQVYsR0FBcUJNLFNBQXZDLENBekJBLENBMkJBOztBQUNBLE1BQUlDLEdBQUcsR0FBR2xCLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQmQsRUFBRSxDQUFDNkIsUUFBdkIsQ0FBVjtBQUNBRCxFQUFBQSxHQUFHLENBQUNFLEdBQUosQ0FDRSxDQUFDbEIsUUFBUSxDQUFDTCxLQUFWLEdBQWtCLENBRHBCLEVBRUUsQ0FGRixFQUdFSyxRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsRUFIeEIsRUFJRSxNQUFNc0IsSUFBSSxDQUFDQyxFQUpiLEVBS0UsTUFBTUQsSUFBSSxDQUFDQyxFQUxiLEVBTUUsSUFORjtBQVFBSixFQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBV3JCLFFBQVEsQ0FBQ0wsS0FBVCxHQUFpQixDQUE1QixFQUErQixFQUFFSyxRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsRUFBeEIsQ0FBL0I7QUFDQW1CLEVBQUFBLEdBQUcsQ0FBQ0UsR0FBSixDQUNFbEIsUUFBUSxDQUFDTCxLQUFULEdBQWlCLENBRG5CLEVBRUUsQ0FGRixFQUdFSyxRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsRUFIeEIsRUFJRSxNQUFNc0IsSUFBSSxDQUFDQyxFQUpiLEVBS0UsTUFBTUQsSUFBSSxDQUFDQyxFQUxiLEVBTUUsSUFORjtBQVFBSixFQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxDQUFDckIsUUFBUSxDQUFDTCxLQUFWLEdBQWtCLENBQTdCLEVBQWdDSyxRQUFRLENBQUNILE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsRUFBdEQ7QUFDQW1CLEVBQUFBLEdBQUcsQ0FBQ00sU0FBSixHQUFnQm5DLFFBQWhCO0FBQ0E2QixFQUFBQSxHQUFHLENBQUNPLElBQUo7QUFFQXpCLEVBQUFBLE1BQU0sQ0FBQzBCLFFBQVAsQ0FBZ0J4QixRQUFoQjtBQUVBLE1BQU15QixNQUFNLEdBQUdyQyxFQUFFLENBQUNzQyxJQUFILENBQVEsb0JBQVIsRUFBOEJDLFFBQTdDLENBcERBLENBc0RBOztBQUNBLE1BQUkxQyxPQUFPLEtBQUssUUFBaEIsRUFBMEI7QUFDeEJhLElBQUFBLE1BQU0sQ0FBQzhCLENBQVAsR0FBVyxJQUFJSCxNQUFNLENBQUNHLENBQXRCO0FBQ0E5QixJQUFBQSxNQUFNLENBQUMrQixDQUFQLEdBQVcsSUFBSUosTUFBTSxDQUFDSSxDQUF0QjtBQUNELEdBSEQsTUFHTyxJQUFJNUMsT0FBTyxLQUFLLEtBQWhCLEVBQXVCO0FBQzVCYSxJQUFBQSxNQUFNLENBQUM4QixDQUFQLEdBQVc5QixNQUFNLENBQUM4QixDQUFQLEdBQVkvQixNQUFNLEdBQUcsQ0FBVixHQUFlLENBQTFCLEdBQThCNEIsTUFBTSxDQUFDRyxDQUFoRDtBQUNELEdBRk0sTUFFQSxJQUFJM0MsT0FBTyxLQUFLLFFBQWhCLEVBQTBCO0FBQy9CYSxJQUFBQSxNQUFNLENBQUM4QixDQUFQLEdBQVc5QixNQUFNLENBQUM4QixDQUFQLEdBQVkvQixNQUFNLEdBQUcsQ0FBVixHQUFlLENBQTFCLEdBQThCNEIsTUFBTSxDQUFDRyxDQUFoRDtBQUNEOztBQUVEdEMsRUFBQUEsTUFBTSxDQUFDTSxJQUFQLENBQVk0QixRQUFaLENBQXFCMUIsTUFBckI7QUFFQSxNQUFJZ0MsUUFBUSxHQUFHMUMsRUFBRSxDQUFDMkMsUUFBSCxDQUFZLFlBQVc7QUFDcENqQyxJQUFBQSxNQUFNLENBQUNrQyxPQUFQO0FBQ0QsR0FGYyxDQUFmO0FBR0EsTUFBSUMsTUFBTSxHQUFHN0MsRUFBRSxDQUFDOEMsUUFBSCxDQUNYOUMsRUFBRSxDQUFDK0MsTUFBSCxDQUFVakQsUUFBVixFQUFvQkUsRUFBRSxDQUFDZ0QsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQXBCLENBRFcsRUFFWGhELEVBQUUsQ0FBQ2lELE9BQUgsQ0FBVyxHQUFYLENBRlcsRUFHWFAsUUFIVyxDQUFiO0FBS0FoQyxFQUFBQSxNQUFNLENBQUN3QyxTQUFQLENBQWlCTCxNQUFqQjtBQUNEOztBQUVETSxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6RCxLQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/kuIDkuKrnroDljZXnmoR0b3N057uE5Lu277yM55So5rOV77yaXHJcbi8vIGxldCBUb2FzdCA9IHJlcWlyZSgnVG9hc3QuanMnKVxyXG4vLyBUb2FzdCh0ZXh0LHtncmF2aXR5LGR1cmF0aW9uLGJnX2NvbG9yfSlcclxuLy90ZXh0OuimgeaYvuekuueahOWtl+espuS4slxyXG4vL2dyYXZpdHko5Y+v6YCJKTrkvY3nva7vvIxTdHJpbmfnsbvlnovvvIzlj6/pgInlgLwoJ0NFTlRFUicsJ1RPUCcsJ0JPVFRPTScpLOm7mOiupOS4uidDRU5URVInXHJcbi8vZHVyYXRpb24o5Y+v6YCJKTrml7bpl7TvvIxOdW1iZXLnsbvlnovvvIzljZXkvY3kuLrnp5LvvIzpu5jorqQxc1xyXG4vL2JnX2NvbG9yKOWPr+mAiSk66aKc6Imy77yMY2MuY29sb3LnsbvlnovvvIzpu5jorqRjYy5jb2xvcigxMDIsIDEwMiwgMTAyLCAyMDApXHJcbmZ1bmN0aW9uIFRvYXN0KFxyXG4gIHRleHQgPSBcIlwiLFxyXG4gIHtcclxuICAgIGdyYXZpdHkgPSBcIkNFTlRFUlwiLFxyXG4gICAgZHVyYXRpb24gPSAxLFxyXG4gICAgYmdfY29sb3IgPSBjYy5jb2xvcigxMDIsIDEwMiwgMTAyLCAyMDApXHJcbiAgfSA9IHt9XHJcbikge1xyXG4gIC8vIGNhbnZhc1xyXG4gIGxldCBjYW52YXMgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuQ2FudmFzKTtcclxuICBsZXQgd2lkdGggPSBjYW52YXMubm9kZS53aWR0aDtcclxuICBsZXQgaGVpZ2h0ID0gY2FudmFzLm5vZGUuaGVpZ2h0O1xyXG5cclxuICBsZXQgYmdOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuXHJcbiAgLy8gTGFibGXmlofmnKzmoLzlvI/orr7nva5cclxuICBsZXQgdGV4dE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gIGxldCB0ZXh0TGFiZWwgPSB0ZXh0Tm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gIHRleHRMYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gIHRleHRMYWJlbC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XHJcbiAgdGV4dExhYmVsLmZvbnRTaXplID0gMzA7XHJcbiAgdGV4dExhYmVsLnN0cmluZyA9IHRleHQ7XHJcblxyXG4gIC8vIOW9k+aWh+acrOWuveW6pui/h+mVv+aXtu+8jOiuvue9ruS4uuiHquWKqOaNouihjOagvOW8j1xyXG4gIGlmICh0ZXh0Lmxlbmd0aCAqIHRleHRMYWJlbC5mb250U2l6ZSA+ICh3aWR0aCAqIDMpIC8gNSkge1xyXG4gICAgdGV4dE5vZGUud2lkdGggPSAod2lkdGggKiAzKSAvIDU7XHJcbiAgICB0ZXh0TGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZXh0Tm9kZS53aWR0aCA9IHRleHQubGVuZ3RoICogdGV4dExhYmVsLmZvbnRTaXplO1xyXG4gIH1cclxuICBsZXQgbGluZUNvdW50ID1cclxuICAgIH5+KCh0ZXh0Lmxlbmd0aCAqIHRleHRMYWJlbC5mb250U2l6ZSkgLyAoKHdpZHRoICogMykgLyA1KSkgKyAxO1xyXG4gIHRleHROb2RlLmhlaWdodCA9IHRleHRMYWJlbC5mb250U2l6ZSAqIGxpbmVDb3VudDtcclxuXHJcbiAgLy8g6IOM5pmv6K6+572uXHJcbiAgbGV0IGN0eCA9IGJnTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gIGN0eC5hcmMoXHJcbiAgICAtdGV4dE5vZGUud2lkdGggLyAyLFxyXG4gICAgMCxcclxuICAgIHRleHROb2RlLmhlaWdodCAvIDIgKyAyMCxcclxuICAgIDAuNSAqIE1hdGguUEksXHJcbiAgICAxLjUgKiBNYXRoLlBJLFxyXG4gICAgdHJ1ZVxyXG4gICk7XHJcbiAgY3R4LmxpbmVUbyh0ZXh0Tm9kZS53aWR0aCAvIDIsIC0odGV4dE5vZGUuaGVpZ2h0IC8gMiArIDIwKSk7XHJcbiAgY3R4LmFyYyhcclxuICAgIHRleHROb2RlLndpZHRoIC8gMixcclxuICAgIDAsXHJcbiAgICB0ZXh0Tm9kZS5oZWlnaHQgLyAyICsgMjAsXHJcbiAgICAxLjUgKiBNYXRoLlBJLFxyXG4gICAgMC41ICogTWF0aC5QSSxcclxuICAgIHRydWVcclxuICApO1xyXG4gIGN0eC5saW5lVG8oLXRleHROb2RlLndpZHRoIC8gMiwgdGV4dE5vZGUuaGVpZ2h0IC8gMiArIDIwKTtcclxuICBjdHguZmlsbENvbG9yID0gYmdfY29sb3I7XHJcbiAgY3R4LmZpbGwoKTtcclxuXHJcbiAgYmdOb2RlLmFkZENoaWxkKHRleHROb2RlKTtcclxuXHJcbiAgY29uc3QgY2FtZXJhID0gY2MuZmluZCgnQ2FudmFzL01haW4vQ2FtZXJhJykucG9zaXRpb25cclxuXHJcbiAgLy8gZ3Jhdml0eSDorr7nva5Ub2FzdOaYvuekuueahOS9jee9rlxyXG4gIGlmIChncmF2aXR5ID09PSBcIkNFTlRFUlwiKSB7XHJcbiAgICBiZ05vZGUueSA9IDAgKyBjYW1lcmEueTtcclxuICAgIGJnTm9kZS54ID0gMCArIGNhbWVyYS54O1xyXG4gIH0gZWxzZSBpZiAoZ3Jhdml0eSA9PT0gXCJUT1BcIikge1xyXG4gICAgYmdOb2RlLnkgPSBiZ05vZGUueSArIChoZWlnaHQgLyA1KSAqIDIgKyBjYW1lcmEueTtcclxuICB9IGVsc2UgaWYgKGdyYXZpdHkgPT09IFwiQk9UVE9NXCIpIHtcclxuICAgIGJnTm9kZS55ID0gYmdOb2RlLnkgLSAoaGVpZ2h0IC8gNSkgKiAyICsgY2FtZXJhLnk7XHJcbiAgfVxyXG5cclxuICBjYW52YXMubm9kZS5hZGRDaGlsZChiZ05vZGUpO1xyXG5cclxuICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgIGJnTm9kZS5kZXN0cm95KCk7XHJcbiAgfSk7XHJcbiAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxyXG4gICAgY2MubW92ZUJ5KGR1cmF0aW9uLCBjYy52MigwLCAwKSksXHJcbiAgICBjYy5mYWRlT3V0KDAuMyksXHJcbiAgICBmaW5pc2hlZFxyXG4gICk7XHJcbiAgYmdOb2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRvYXN0OyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Levels.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '904f4qPW5xCjqt6NxfPlLWC', 'Levels');
// script/Levels.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Levels = void 0;
var Enum_1 = require("./Enum");
// Created by carolsail
var Enum_2 = require("./Enum");
//关卡数据
exports.Levels = [
    {
        info: { team: '德国', intro: '正赛', icon: 'DE' },
        blue: [
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            { x: -200, y: -150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: -200, y: 150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: 200, y: 300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: { x: 0, y: 555, width: 200, red: [] },
        cameraMove: { x: false, y: false },
        isTip: true
    },
    {
        info: { team: '瑞士', intro: '正赛1', icon: 'CH' },
        blue: [
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -200, y: -150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: -150, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            { x: -200, y: 150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 50, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '苏格兰', intro: '正赛2', icon: 'SCO' },
        blue: [
            { x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -300, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false }
                ]
            },
            {
                x: 200, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: -200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: 250, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: 350, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 },
                ]
            },
            {
                x: -200, y: 250, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: 150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '匈牙利', intro: '正赛3', icon: 'HUN' },
        blue: [
            { x: 200, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: -100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -100, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: false },
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: true },
                ]
            },
            {
                x: -200, y: 100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: 100, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: false },
                    { x: -200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '意大利', intro: '正赛4', icon: 'IT' },
        blue: [
            { x: 0, y: -400, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: -200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            { x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: 200, angle: 90, red: [
                    { x: 0, y: 200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '瑞士', intro: '正赛5', icon: 'CH' },
        blue: [
            { x: -150, y: -250, angle: 315, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: -400, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -400, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            { x: 150, y: -250, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: -100, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -400, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 200, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 250, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 300, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 350, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 400, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 450, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '克罗地亚', intro: '正赛6', icon: 'CRO' },
        blue: [
            {
                x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: -200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '西班牙', intro: '正赛7', icon: 'ES' },
        blue: [
            {
                x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: -200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -300, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false }
                ]
            },
            {
                x: 0, y: 200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 },
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '阿尔巴尼亚', intro: '正赛8', icon: 'ALB' },
        blue: [
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true },
                ]
            },
            {
                x: 0, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '斯洛文尼亚', intro: '正赛9', icon: 'SLO' },
        blue: [
            { x: -200, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: true },
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true },
                ]
            },
            {
                x: 200, y: 300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '丹麦', intro: '正赛10', icon: 'DK' },
        blue: [
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: -200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: false },
                ]
            },
            {
                x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false },
                ]
            },
            { x: 200, y: 200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] }
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '克罗地亚', intro: '正赛11', icon: 'CRO' },
        blue: [
            {
                x: -200, y: 150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: 150, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false }
                ]
            },
            { x: 220, y: 150, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: -200, y: -150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -150, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: false }
                ]
            },
            { x: 200, y: -150, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: -400, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: []
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '英格兰', intro: '正赛12', icon: 'ENG' },
        blue: [
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '塞尔维亚', intro: '正赛13', icon: 'SRB' },
        blue: [
            {
                x: 200, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 180, isDirX: true },
                ], food: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 80 },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 420, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '奥地利', intro: '正赛14', icon: 'AUT' },
        blue: [
            { x: 400, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 300, y: 0, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false },
                    { x: 200, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true },
                ]
            },
            {
                x: 0, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            { x: -200, y: -200, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: -200, y: 200, angle: 90, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            { x: 100, y: 200, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false }
    },
    {
        info: { team: '法国', intro: '正赛15', icon: 'FR' },
        blue: [
            { x: 200, y: -700, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -200, y: -600, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: -600, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 150, isDirX: false },
                ]
            },
            {
                x: 200, y: -500, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -500, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false },
                ]
            },
            { x: -200, y: -400, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -300, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false },
                ]
            },
            {
                x: -200, y: -200, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            { x: 200, y: -100, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: -200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 200, y: 100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            {
                x: -200, y: 200, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            { x: 200, y: 300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: { x: 0, y: 555, width: 200, red: [] },
        cameraMove: { x: false, y: true },
        isTip: false
    },
    {
        info: { team: '荷兰', intro: '正赛16', icon: 'NL' },
        blue: [
            { x: 400, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: 500, y: -100, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 500, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 500, y: 300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 500, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 },
                ], food: [
                    { x: 500, y: 150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 100, isDirX: true },
                ]
            },
            {
                x: 200, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 250, y: 50, angle: 320, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            { x: 0, y: -100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '奥地利', intro: '正赛17', icon: 'AUT' },
        blue: [
            { x: 0, y: -200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: 150, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 250, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: true },
                    { x: 0, y: 50, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 0, y: 150, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '波兰', intro: '正赛18', icon: 'POL' },
        blue: [
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -100, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [], food: [
                    { x: 0, y: -300, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 120, isDirX: false },
                ]
            },
            {
                x: -400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -300, y: -300, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            {
                x: -200, y: 100, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -220, y: 0, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true },
                ]
            },
            {
                x: 200, y: -50, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 500, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: true },
                { x: 0, y: 355, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '罗马尼亚', intro: '正赛19', icon: 'RO' },
        blue: [
            {
                x: -500, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: -500, y: 300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100 }
                ]
            },
            {
                x: -500, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -500, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -500, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -500, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                ]
            },
            {
                x: 0, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 0, y: 200, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.IDLE, speed: 500, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '比利时', intro: '正赛20', icon: 'BE' },
        blue: [
            { x: 0, y: -800, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: 0, y: -600, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 0, y: -700, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                ]
            },
            {
                x: 0, y: -400, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -500, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            {
                x: 0, y: -200, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                { x: 0, y: 355, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: true },
        isTip: false
    },
    {
        info: { team: '斯洛伐克', intro: '正赛21', icon: 'SK' },
        blue: [
            { x: -800, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: -600, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -400, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '乌克兰', intro: '正赛22', icon: 'UKR' },
        blue: [
            { x: 600, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 600, y: -300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 600, y: 150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 600, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true },
                    { x: 600, y: -150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                ]
            },
            {
                x: 0, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 150, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false },
                    { x: 300, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false },
                    { x: 450, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '斯洛伐克', intro: '正赛23', icon: 'SK' },
        blue: [
            { x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: -200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: -150, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: -50, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 0, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 50, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 100, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '捷克', intro: '正赛24', icon: 'CZ' },
        blue: [
            { x: -600, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -600, y: -300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -600, y: 100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: -600, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true },
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false },
                    { x: -400, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false },
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '土耳其', intro: '正赛25', icon: 'TR' },
        blue: [
            { x: 600, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 600, y: -100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: true },
                    { x: 600, y: 50, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true }
                ]
            },
            {
                x: 100, y: -300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 650, circleRadius: 100, isDirX: true },
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 150, isDirX: false },
                ]
            },
            {
                x: -200, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: false },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                { x: -100, y: 355, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 180, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '葡萄牙', intro: '正赛26', icon: 'POR' },
        blue: [
            { x: -800, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: -600, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -400, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
            {
                x: -400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
            {
                x: 400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 600, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
            {
                x: 400, y: 300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '格鲁吉亚', intro: '正赛27', icon: 'GEO' },
        blue: [
            { x: 900, y: -900, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: 900, y: -600, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 900, y: -600, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 900, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 900, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 },
                    { x: 900, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true },
                    { x: 900, y: -400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true }
                ]
            },
            {
                x: 600, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 600, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 300, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 350, y: -200, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            {
                x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 150, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false },
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false },
                    { x: -100, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: true },
        isTip: false
    }
];
// export const Levels = [
//     {
//         info: {team: '意大利', intro: '友谊赛', icon: 'IT'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: -200, y: 150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: 300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: []},
//         cameraMove: {x: false, y: false},
//         isTip: true
//     },
//     {
//         info: {team: '沙特', intro: '正赛1', icon: 'SA'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -150, angle: 180, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: 200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: -200, y: 150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 50, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '哥斯达黎加', intro: '正赛2', icon: 'CR'},
//         blue: [
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -300, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false}
//             ]},
//             {x: 200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: -200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: 200, y: 250, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: 350, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: 250, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '伊朗', intro: '正赛3', icon: 'IR'},
//         blue: [
//             {x: 200, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 0, y: -100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -100, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: false},
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: true},
//             ]},
//             {x: -200, y: 100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: 100, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: false},
//                 {x: -200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '突尼斯', intro: '正赛4', icon: 'TN'},
//         blue: [
//             {x: 0, y: -400, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 0, y: -200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 0, y: 200, angle: 90, red: [
//                 {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '卡塔尔', intro: '正赛5', icon: 'QA'},
//         blue: [
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: -200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '喀麦隆', intro: '正赛6', icon: 'CM'},
//         blue: [
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: -200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -300, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false}
//             ]},
//             {x: 0, y: 200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100},
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '澳大利亚', intro: '正赛7', icon: 'AU'},
//         blue: [
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true},
//             ]},
//             {x: 0, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '加纳', intro: '正赛8', icon: 'GH'},
//         blue: [
//             {x: -200, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: true},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true},
//             ]},
//             {x: 200, y: 300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '摩洛哥', intro: '正赛9', icon: 'MA'},
//         blue: [
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: -200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: false},
//             ]},
//             {x: 200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false},
//             ]},
//             {x: 200, y: 200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: []}
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '日本', intro: '正赛10', icon: 'JP'},
//         blue: [
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '韩国', intro: '正赛11', icon: 'KR'},
//         blue: [
//             {x: 200, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 180, isDirX: true},
//             ], food: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 80},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 420, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '威尔士', intro: '正赛12', icon: 'WE'},
//         blue: [
//             {x: 400, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 300, y: 0, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//                 {x: 200, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true},
//             ]},
//             {x: 0, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 0, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: -200, y: -200, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: -200, y: 200, angle: 90, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: 100, y: 200, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false}
//     },
//     {
//         info: {team: '厄瓜多尔', intro: '正赛13', icon: 'EC'},
//         blue: [
//             {x: 200, y: -700, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: -600, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 150, isDirX: false},
//             ]},
//             {x: 200, y: -500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -500, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false},
//             ]},
//             {x: -200, y: -400, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -300, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false},
//             ]},
//             {x: -200, y: -200, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: 200, y: -100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: -200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: 100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: -200, y: 200, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: 200, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: []},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '加拿大', intro: '正赛14', icon: 'CA'},
//         blue: [
//             {x: 400, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: 500, y: -100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 500, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 500, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 500, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100},
//             ], food: [
//                 {x: 500, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 100, isDirX: true},
//             ]},
//             {x: 200, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 250, y: 50, angle: 320, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 0, y: -100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '美国', intro: '正赛15', icon: 'US'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -100, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [], food: [
//                 {x: 0, y: -300, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 120, isDirX: false},
//             ]},
//             {x: -400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -300, y: -300, angle: 0, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: -200, y: 100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -220, y: 0, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true},
//             ]},
//             {x: 200, y: -50, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 500, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: true},
//             {x: 0, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '墨西哥', intro: '正赛16', icon: 'MX'},
//         blue: [
//             {x: -500, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.READY, red:[
//                 {x: -500, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100}
//             ]},
//             {x: -500, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: -500, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -500, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: -500, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             ]},
//             {x: 0, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 0, y: 200, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.IDLE, speed: 500, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '波兰', intro: '正赛17', icon: 'PL'},
//         blue: [
//             {x: 0, y: -800, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: 0, y: -600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 0, y: -700, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             ]},
//             {x: 0, y: -400, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 0, y: -500, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 0, y: -200, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, food:[
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             {x: 0, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '塞内加尔', intro: '正赛19', icon: 'SN'},
//         blue: [
//             {x: -800, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: -600, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -400, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '瑞士', intro: '正赛20', icon: 'CH'},
//         blue: [
//             {x: 600, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 600, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true},
//                 {x: 600, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//             ]},
//             {x: 0, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 150, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false},
//                 {x: 300, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false},
//                 {x: 450, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '塞尔维亚', intro: '正赛21', icon: 'RS'},
//         blue: [
//             {x: -600, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -600, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -600, y: 100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: -600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true},
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false},
//                 {x: -400, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false},
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '克罗地亚', intro: '正赛22', icon: 'HR'},
//         blue: [
//             {x: 600, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 600, y: -100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: true},
//                 {x: 600, y: 50, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true}
//             ]},
//             {x: 100, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 650, circleRadius: 100, isDirX: true},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 150, isDirX: false},
//             ]},
//             {x: -200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: false},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             {x: -100, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 180, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '丹麦', intro: '正赛23', icon: 'DK'},
//         blue: [
//             {x: -800, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: -600, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -400, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: -400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 600, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 400, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '荷兰', intro: '决赛1', icon: 'NL'},
//         blue: [
//             {x: 900, y: -900, angle: 90, status: ENUM_PLAYER_STATUS.READY},
//             {x: 900, y: -600, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 900, y: -600, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 900, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 900, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//                 {x: 900, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true},
//                 {x: 900, y: -400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true}
//             ]},
//             {x: 600, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 300, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 350, y: -200, angle: 0, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 150, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false},
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false},
//                 {x: -100, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '葡萄牙', intro: '决赛2', icon: 'PT'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: true},
//             {x: 0, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: true},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: true},
//             {x: 0, y: 100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 100, distance: 220, isDirX: true},
//             {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//             {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 280, distance: 200, isDirX: true},
//             {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 440, distance: 160, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '英格兰', intro: '决赛3', icon: 'EN'},
//         blue: [
//             {x: -600, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: -300, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: false},
//             ], red:[
//                 {x: -450, y: -800, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//             ]},
//             {x: 0, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: -800, angle: 180, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 400, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 200, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: false},
//             ], red:[
//                 {x: 300, y: -800, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//             ]},
//             {x: 400, y: -400, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 400, y: -500, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 0, y: -400, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 200, y: -400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: false},
//             ], red:[
//                 {x: 300, y: -400, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 350, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '西班牙', intro: '决赛4', icon: 'ES'},
//         blue: [
//             {x: 600, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 300, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 0, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 300, y: -900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 0, y: -900, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -300, y: -900, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 700, circleRadius: 100, isDirX: true}
//             ]},
//             {x: -300, y: -600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 560, circleRadius: 100}
//             ]},
//             {x: -300, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 550, circleRadius: 100}
//             ]},
//             {x: -200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '德国', intro: '决赛5', icon: 'DE'},
//         blue: [
//             {x: 0, y: -2200, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: 200, y: -1800, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: -1900, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 140, isDirX: true},
//                 {x: 100, y: -1800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: false},
//             ]},
//             {x: 0, y: -1400, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDirX: true}
//             ]},
//             {x: -200, y: -1000, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -1100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: true},
//                 {x: -100, y: -1000, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 140, isDirX: false},
//             ]},
//             {x: 0, y: -600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -50, y: -700, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 0, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: true},
//             ]},
//             {x: 200, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDirX: true}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//             {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '阿根廷', intro: '决赛6', icon: 'AR'},
//         blue: [
//             {x: -600, y: -2000, angle: 270, status: ENUM_PLAYER_STATUS.READY, red:[
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -300, y: -2000, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDir: true}
//             ]},
//             {x: 0, y: -2000, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -1600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -1800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 120, isDirX: true}
//             ]},
//             {x: 300, y: -1600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDir: true}
//             ]},
//             {x: 600, y: -1600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 600, y: -1200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: -1400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 120, isDirX: true}
//             ]},
//             {x: 300, y: -1200, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 120}
//             ]},
//             {x: 0, y: -800, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -900, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 100, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: false},
//             ]},
//             {x: -300, y: -800, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -400, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//                 {x: 0, y: -600, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: true},
//             {x: 0, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '比利时', intro: '决赛7', icon: 'BE'},
//         blue: [
//             {x: -1600, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY},
//             {x: -1200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -1100, y: -300, status: ENUM_ENEMY_STATUS.IDLE}
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 150, isDirX: true}
//             ]},
//             {x: -800, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -700, y: -300, status: ENUM_ENEMY_STATUS.IDLE}
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 150, isDirX: true}
//             ]},
//             {x: -400, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -300, y: -300, status: ENUM_ENEMY_STATUS.IDLE}
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 150, isDirX: true}
//             ]},
//             {x: 0, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: false}
//             ]},
//             {x: 0, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 250, isDirX: true},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '法国', intro: '决赛8', icon: 'FR'},
//         blue: [
//             {x: 1600, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 480, circleRadius: 100},
//             ]},
//             {x: 1600, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1600, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 510, distance: 160, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//             ]},
//             {x: 1600, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1600, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 520, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 490, circleRadius: 100},
//             ]},
//             {x: 1200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1400, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 490, distance: 140, isDirX: false},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 510, circleRadius: 100, isDirX: true},
//             ]},
//             {x: 1200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1200, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 520, circleRadius: 100, isDirX: true},
//             ]},
//             {x: 1200, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1200, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 160, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 510, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 800, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1000, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 510, distance: 140, isDirX: false},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 490, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 800, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 800, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 550, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 550, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 800, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 800, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 520, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 480, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 0, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 180, isDirX: false},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 520, distance: 200, isDirX: true},
//             {x: 50, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 480, distance: 200, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '巴西', intro: '决赛9', icon: 'BR'},
//         blue: [
//             {x: 200, y: -5500, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -5300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -5100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -5150, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -4900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -4700, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -4750, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -4500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -4300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -4350, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -4100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -3900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -3950, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -3700, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -3500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -3550, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -3300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -3100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -3150, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -2900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -2700, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -2750, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -2300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -2100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -2150, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -1800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -1500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -1550, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -1200, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -950, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -350, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ]},
//             {x: 200, y: 100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 50, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: 300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//         ]},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '中国', intro: '冠军赛', icon: 'CN'},
//         blue: [
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: []},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     }
// ]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMZXZlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRDO0FBQzVDLHVCQUF1QjtBQUV2QiwrQkFBMkM7QUFDM0MsTUFBTTtBQUNPLFFBQUEsTUFBTSxHQUFHO0lBQ2xCO1FBQ0ksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7UUFDN0MsSUFBSSxFQUFFO1lBQ0YsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSx5QkFBa0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUMxRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUseUJBQWtCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDeEUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUseUJBQWtCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDdEUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSx5QkFBa0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUN2RSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSx5QkFBa0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtT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QUFDNUcseUJBQXlCO0FBQ3pCLDZHQUE2RztBQUM3RyxrQkFBa0I7QUFDbEIsbUZBQW1GO0FBQ25GLCtFQUErRTtBQUMvRSxrQkFBa0I7QUFDbEIscUZBQXFGO0FBQ3JGLDZHQUE2RztBQUM3RyxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHNEQUFzRDtBQUN0RCx5RUFBeUU7QUFDekUsY0FBYztBQUNkLDJDQUEyQztBQUMzQyx1QkFBdUI7QUFDdkIsU0FBUztBQUNULFFBQVE7QUFDUix3REFBd0Q7QUFDeEQsa0JBQWtCO0FBQ2xCLHNGQUFzRjtBQUN0RixhQUFhO0FBQ2IseURBQXlEO0FBQ3pELDRDQUE0QztBQUM1Qyx1QkFBdUI7QUFDdkIsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTlVNX1BMQVlFUl9TVEFUVVMgfSBmcm9tICcuL0VudW0nO1xyXG4vLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuaW1wb3J0IHsgRU5VTV9FTkVNWV9TVEFUVVMgfSBmcm9tIFwiLi9FbnVtXCI7XHJcbi8v5YWz5Y2h5pWw5o2uXHJcbmV4cG9ydCBjb25zdCBMZXZlbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5b635Zu9JywgaW50cm86ICfmraPotZsnLCBpY29uOiAnREUnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtMTUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7IHg6IC0yMDAsIHk6IDE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHsgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfnkZ7lo6snLCBpbnRybzogJ+ato+i1mzEnLCBpY29uOiAnQ0gnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTE1MCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogNTAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+iLj+agvOWFsCcsIGludHJvOiAn5q2j6LWbMicsIGljb246ICdTQ08nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAyNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMjAwLCB5OiAzNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMjUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WMiOeJmeWIqScsIGludHJvOiAn5q2j6LWbMycsIGljb246ICdIVU4nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IDEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5oSP5aSn5YipJywgaW50cm86ICfmraPotZs0JywgaWNvbjogJ0lUJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAtNDAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn55Ge5aOrJywgaW50cm86ICfmraPotZs1JywgaWNvbjogJ0NIJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtMTUwLCB5OiAtMjUwLCBhbmdsZTogMzE1LCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTQwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IHg6IDE1MCwgeTogLTI1MCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMTAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC00MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMTAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDIwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyNTAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDM1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0MDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDUwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WFi+e9l+WcsOS6micsIGludHJvOiAn5q2j6LWbNicsIGljb246ICdDUk8nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn6KW/54+t54mZJywgaW50cm86ICfmraPotZs3JywgaWNvbjogJ0VTJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDUwLCBkaXN0YW5jZTogMjUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn6Zi/5bCU5be05bC85LqaJywgaW50cm86ICfmraPotZs4JywgaWNvbjogJ0FMQicgfSxcclxuICAgICAgICBibHVlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IGZhbHNlLCB5OiBmYWxzZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfmlq/mtJvmloflsLzkuponLCBpbnRybzogJ+ato+i1mzknLCBpY29uOiAnU0xPJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDUwLCBkaXN0YW5jZTogMjUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAzMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+S4uem6picsIGludHJvOiAn5q2j6LWbMTAnLCBpY29uOiAnREsnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5YWL572X5Zyw5LqaJywgaW50cm86ICfmraPotZsxMScsIGljb246ICdDUk8nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAxNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjIwLCB5OiAxNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjAwLCB5OiAtMTUwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC00MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn6Iux5qC85YWwJywgaW50cm86ICfmraPotZsxMicsIGljb246ICdFTkcnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzNTAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5aGe5bCU57u05LqaJywgaW50cm86ICfmraPotZsxMycsIGljb246ICdTUkInIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzNTAsIGNpcmNsZVJhZGl1czogMTgwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiA4MCB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQyMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WlpeWcsOWIqScsIGludHJvOiAn5q2j6LWbMTQnLCBpY29uOiAnQVVUJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiA0MDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDIwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMzAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IHg6IC0yMDAsIHk6IC0yMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMjAwLCBhbmdsZTogOTAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyNTAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAxMDAsIHk6IDIwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogdHJ1ZSwgeTogZmFsc2UgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfms5Xlm70nLCBpbnRybzogJ+ato+i1mzE1JywgaWNvbjogJ0ZSJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC03MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IC02MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogLTYwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI1MCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC01MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtNTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtNDAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTIwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHsgeDogLTIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyNTAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMjAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjAwLCB5OiAzMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDogeyB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW10gfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IGZhbHNlLCB5OiB0cnVlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+iNt+WFsCcsIGludHJvOiAn5q2j6LWbMTYnLCBpY29uOiAnTkwnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDQwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogNTAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA1MDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA1MDAsIHk6IDMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwIH0sXHJcbiAgICAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA1MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMjUwLCB5OiA1MCwgYW5nbGU6IDMyMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WlpeWcsOWIqScsIGludHJvOiAn5q2j6LWbMTcnLCBpY29uOiAnQVVUJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDE1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyNTAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDE1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5rOi5YWwJywgaW50cm86ICfmraPotZsxOCcsIGljb246ICdQT0wnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTEwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10sIGZvb2Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTMwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IDEwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjIwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAtNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE0MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDM1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogdHJ1ZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn572X6ams5bC85LqaJywgaW50cm86ICfmraPotZsxOScsIGljb246ICdSTycgfSxcclxuICAgICAgICBibHVlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC01MDAsIHk6IDMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtNTAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDM1MCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNTAwLCB5OiAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC01MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNTAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC01MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+avlOWIqeaXticsIGludHJvOiAn5q2j6LWbMjAnLCBpY29uOiAnQkUnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDAsIHk6IC04MDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC02MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTcwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC00MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtNTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIGZvb2Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogMzU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogdHJ1ZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfmlq/mtJvkvJDlhYsnLCBpbnRybzogJ+ato+i1mzIxJywgaWNvbjogJ1NLJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtODAwLCB5OiAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNjAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogdHJ1ZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5LmM5YWL5YWwJywgaW50cm86ICfmraPotZsyMicsIGljb246ICdVS1InIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDYwMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA2MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA2MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA2MDAsIHk6IC0xNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTUwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMzAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNDUwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiB0cnVlLCB5OiBmYWxzZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfmlq/mtJvkvJDlhYsnLCBpbnRybzogJ+ato+i1mzIzJywgaWNvbjogJ1NLJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtNTAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA1MCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAxMDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5o235YWLJywgaW50cm86ICfmraPotZsyNCcsIGljb246ICdDWicgfSxcclxuICAgICAgICBibHVlOiBbXHJcbiAgICAgICAgICAgIHsgeDogLTYwMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNjAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTYwMCwgeTogMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiB0cnVlLCB5OiBmYWxzZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICflnJ/ogLPlhbYnLCBpbnRybzogJ+ato+i1mzI1JywgaWNvbjogJ1RSJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiA2MDAsIHk6IDMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogNjAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA2MDAsIHk6IDUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjUwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTUwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyB4OiAtMTAwLCB5OiAzNTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTgwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+iRoeiQhOeJmScsIGludHJvOiAn5q2j6LWbMjYnLCBpY29uOiAnUE9SJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtODAwLCB5OiAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNjAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNDAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA0MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA2MDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDQwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+agvOmygeWQieS6micsIGludHJvOiAn5q2j6LWbMjcnLCBpY29uOiAnR0VPJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiA5MDAsIHk6IC05MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogOTAwLCB5OiAtNjAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDkwMCwgeTogLTYwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDkwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA5MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDkwMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogOTAwLCB5OiAtNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogNjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMzAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAzNTAsIHk6IC0yMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAxNTAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiB0cnVlLCB5OiB0cnVlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9XHJcbl1cclxuLy8gZXhwb3J0IGNvbnN0IExldmVscyA9IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+aEj+Wkp+WIqScsIGludHJvOiAn5Y+L6LCK6LWbJywgaWNvbjogJ0lUJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IHRydWVcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfmspnnibknLCBpbnRybzogJ+ato+i1mzEnLCBpY29uOiAnU0EnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0xNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTUwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCBhbmdsZTogMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiA1MCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+WTpeaWr+i+vum7juWKoCcsIGludHJvOiAn5q2j6LWbMicsIGljb246ICdDUid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0yMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAyNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogMzUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMjUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+S8iuaclycsIGludHJvOiAn5q2j6LWbMycsIGljb246ICdJUid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTEwMCwgeTogMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+eqgeWwvOaWrycsIGludHJvOiAn5q2j6LWbNCcsIGljb246ICdUTid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC00MDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMjAwLCBhbmdsZTogOTAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+WNoeWhlOWwlCcsIGludHJvOiAn5q2j6LWbNScsIGljb246ICdRQSd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIGFuZ2xlOiAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICflloDpuqbpmoYnLCBpbnRybzogJ+ato+i1mzYnLCBpY29uOiAnQ00nfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI1MCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiBmYWxzZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfmvrPlpKfliKnkuponLCBpbnRybzogJ+ato+i1mzcnLCBpY29uOiAnQVUnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIGFuZ2xlOiAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5Yqg57qzJywgaW50cm86ICfmraPotZs4JywgaWNvbjogJ0dIJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfmkanmtJvlk6UnLCBpbnRybzogJ+ato+i1mzknLCBpY29uOiAnTUEnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCBhbmdsZTogMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+aXpeacrCcsIGludHJvOiAn5q2j6LWbMTAnLCBpY29uOiAnSlAnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfpn6nlm70nLCBpbnRybzogJ+ato+i1mzExJywgaWNvbjogJ0tSJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzUwLCBjaXJjbGVSYWRpdXM6IDE4MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQyMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICflqIHlsJTlo6snLCBpbnRybzogJ+ato+i1mzEyJywgaWNvbjogJ1dFJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogNDAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAzMDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0yMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMjAwLCBhbmdsZTogOTAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDIwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX1cclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfljoTnk5zlpJrlsJQnLCBpbnRybzogJ+ato+i1mzEzJywgaWNvbjogJ0VDJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtNzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtNjAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMTAwLCB5OiAtNjAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC01MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTUwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtNDAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMjAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0xMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAyMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW119LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogdHJ1ZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5Yqg5ou/5aSnJywgaW50cm86ICfmraPotZsxNCcsIGljb246ICdDQSd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDQwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFl9LFxyXG4vLyAgICAgICAgICAgICB7eDogNTAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDUwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDUwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDI1MCwgeTogNTAsIGFuZ2xlOiAzMjAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+e+juWbvScsIGludHJvOiAn5q2j6LWbMTUnLCBpY29uOiAnVVMnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0xMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI1MCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTQwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0zMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjIwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTUwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA1MDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5aKo6KW/5ZOlJywgaW50cm86ICfmraPotZsxNicsIGljb246ICdNWCd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC01MDAsIHk6IDMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtNTAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDM1MCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTUwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtNTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC01MDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTUwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+azouWFsCcsIGludHJvOiAn5q2j6LWbMTcnLCBpY29uOiAnUEwnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtODAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtNzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC00MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtNTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiB0cnVlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfloZ7lhoXliqDlsJQnLCBpbnRybzogJ+ato+i1mzE5JywgaWNvbjogJ1NOJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTgwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFl9LFxyXG4vLyAgICAgICAgICAgICB7eDogLTYwMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtNDAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfnkZ7lo6snLCBpbnRybzogJ+ato+i1mzIwJywgaWNvbjogJ0NIJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogNjAwLCB5OiAzMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IC0xNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxNTAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA0NTAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfloZ7lsJTnu7TkuponLCBpbnRybzogJ+ato+i1mzIxJywgaWNvbjogJ1JTJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTYwMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtNjAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC02MDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICflhYvnvZflnLDkuponLCBpbnRybzogJ+ato+i1mzIyJywgaWNvbjogJ0hSJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogNjAwLCB5OiAzMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMTAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDY1MCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMTAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTgwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfkuLnpuqYnLCBpbnRybzogJ+ato+i1mzIzJywgaWNvbjogJ0RLJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTgwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFl9LFxyXG4vLyAgICAgICAgICAgICB7eDogLTYwMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA0MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA0MDAsIHk6IDMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn6I235YWwJywgaW50cm86ICflhrPotZsxJywgaWNvbjogJ05MJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogOTAwLCB5OiAtOTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZfSxcclxuLy8gICAgICAgICAgICAge3g6IDkwMCwgeTogLTYwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogOTAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDkwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogOTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA5MDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDkwMCwgeTogLTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDMwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDM1MCwgeTogLTIwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTUwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0xMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogdHJ1ZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn6JGh6JCE54mZJywgaW50cm86ICflhrPotZsyJywgaWNvbjogJ1BUJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNjAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMTAwLCBkaXN0YW5jZTogMjIwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI4MCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDQwLCBkaXN0YW5jZTogMTYwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+iLseagvOWFsCcsIGludHJvOiAn5Yaz6LWbMycsIGljb246ICdFTid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC02MDAsIHk6IC04MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC04MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMzAwLCB5OiAtODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF0sIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTQ1MCwgeTogLTgwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMTAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogNDAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMjAwLCB5OiAtODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF0sIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMzAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDQwMCwgeTogLTQwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNDAwLCB5OiAtNTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtNDAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNjAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDMwMCwgeTogLTQwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzNTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IHRydWV9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+ilv+ePreeJmScsIGludHJvOiAn5Yaz6LWbNCcsIGljb246ICdFUyd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTYwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC02MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC05MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC05MDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTMwMCwgeTogLTkwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDcwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMzAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTYwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMzAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDU1MCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IHRydWV9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+W+t+WbvScsIGludHJvOiAn5Yaz6LWbNScsIGljb246ICdERSd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0yMjAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0xODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTE5MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNjAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTE4MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDYwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTAwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTEwMCwgeTogLTEwMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNjAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC01MCwgeTogLTcwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTgwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiB0cnVlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfpmL/moLnlu7cnLCBpbnRybzogJ+WGs+i1mzYnLCBpY29uOiAnQVInfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAtNjAwLCB5OiAtMjAwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0zMDAsIHk6IC0yMDAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXI6IHRydWV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTIwMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0xNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0xODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQ1MCwgY2lyY2xlUmFkaXVzOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC0xNjAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTE2MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA2MDAsIHk6IC0xMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogLTE0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDEyMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDMwMCwgeTogLTEyMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQ1MCwgY2lyY2xlUmFkaXVzOiAxMjB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTgwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC05MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTgwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0zMDAsIHk6IC04MDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC02MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogdHJ1ZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5q+U5Yip5pe2JywgaW50cm86ICflhrPotZs3JywgaWNvbjogJ0JFJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTE2MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMTIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTExMDAsIHk6IC0zMDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC04MDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC03MDAsIHk6IC0zMDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0zMDAsIHk6IC0zMDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfms5Xlm70nLCBpbnRybzogJ+WGs+i1mzgnLCBpY29uOiAnRlInfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAxNjAwLCB5OiAzMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0ODAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAxNjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTYwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUxMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDE2MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxNjAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUyMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQ5MCwgY2lyY2xlUmFkaXVzOiAxMDB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDEyMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxNDAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ5MCwgZGlzdGFuY2U6IDE0MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDEyMDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMjAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUyMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMTIwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTIwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUxMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDgwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUxMCwgZGlzdGFuY2U6IDE0MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0OTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA4MDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA4MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA4MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA4MDAsIHk6IC0xNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTIwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDgwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogNDAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDE4MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUyMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAge3g6IDUwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDgwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5be06KW/JywgaW50cm86ICflhrPotZs5JywgaWNvbjogJ0JSJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtNTUwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTUzMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtNTEwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAtNTE1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtNDkwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC00NzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC00NzUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC00NTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogODB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTQzMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTQzNTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTQxMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzkwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAtMzk1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMzcwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zNTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC0zNTUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogODB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTMxMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTMxNTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTI5MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMjcwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAtMjc1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMjMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0yMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC0yMTUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0xODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogODB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTE1MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTE1NTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTEyMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtOTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC05NTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTYwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTM1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiB0cnVlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfkuK3lm70nLCBpbnRybzogJ+WGoOWGm+i1mycsIGljb246ICdDTid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH1cclxuLy8gXVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec912nHvPNB/pYgN9JyOtzu', 'Ball');
// script/Ball.ts

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
var Enum_1 = require("./Enum");
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var EventManager_1 = require("./manager/EventManager");
var Player_1 = require("./Player");
var StaticInstance_1 = require("./StaticInstance");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 3000;
        _this.speedMin = 300;
        return _this;
    }
    Ball.prototype.init = function (data) {
        Object.assign(this, data);
        this.rendor();
    };
    Ball.prototype.rendor = function () {
        this.node.setPosition(this.x, this.y);
    };
    /**
     * 控制足球移动的函数
     * @param start 发起移动的球员
     * @param end 移动的终点，可能是另一名球员或终点
     * @param progress 移动的进度，用于计算移动速度和触发不同阶段的事件
     */
    Ball.prototype.move = function (start, end, progress) {
        var _this = this;
        // 踢球状态
        start.setStatus(Enum_1.ENUM_PLAYER_STATUS.SHOOTING);
        start.playEffect();
        this.node.getChildByName('Shield').active = DataManager_1.default.instance.powerCount >= DataManager_1.default.instance.powerCountTarget;
        var spos = start.node.getPosition();
        var epos = end.node.getPosition();
        var distance = spos.sub(epos).mag();
        var moveSpeed = this.speed * progress;
        if (progress >= 0.5 && progress <= 0.7) {
            moveSpeed = this.speed * 0.5;
        }
        else if (progress < 0.5 && progress >= 0) {
            // 满能量
            if (DataManager_1.default.instance.powerCount == DataManager_1.default.instance.powerCountTarget) {
                moveSpeed = this.speed;
            }
            else {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.BOO);
                moveSpeed = this.speedMin;
            }
        }
        var moveTime = distance / moveSpeed;
        cc.tween(this.node).to(moveTime, { position: cc.v3(epos.x, epos.y, 0) }).call(function () {
            // 接球音效
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CATCH);
            // 移动足球销毁
            _this.node.destroy();
            // 回待机状态
            start.setStatus(Enum_1.ENUM_PLAYER_STATUS.IDLE);
            if (end instanceof Player_1.default) {
                // 进持球状态
                end.setStatus(Enum_1.ENUM_PLAYER_STATUS.READY);
                end.setCircleActive(false);
                var x = 0, y = 0;
                var next = DataManager_1.default.instance.getBlueNext();
                if (next) {
                    x = next.x;
                    y = next.y;
                    next.turnTo(end.x, end.y);
                    next.setCircleActive(true);
                    // 移动相机
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: next });
                }
                else {
                    var endpoint = DataManager_1.default.instance.getEndpoint();
                    x = endpoint.x;
                    y = endpoint.y;
                    // 移动相机
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: endpoint });
                }
                end.turnTo(x, y);
                // 接球效果
                if (progress > 0.7 && progress <= 1)
                    end.playEffect();
            }
            else {
                // 球门显示足球
                end.setBallActive(true);
            }
            // 判断能量槽情况，游戏状态切换
            if (DataManager_1.default.instance.status === Enum_1.ENUM_GAME_STATUS.SHOOTING) {
                DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.RUNING;
                // 技能饮品
                if (DataManager_1.default.instance.powerEffectLoop <= 0) {
                    // 增益食物
                    if (DataManager_1.default.instance.foodEffectLoop <= 0) {
                        DataManager_1.default.instance.powerCount += 1;
                        if (DataManager_1.default.instance.powerCount > DataManager_1.default.instance.powerCountTarget) {
                            DataManager_1.default.instance.powerCount = 0;
                        }
                        StaticInstance_1.StaticInstance.uiManager.setPowerBar();
                    }
                    else {
                        DataManager_1.default.instance.foodEffectLoop -= 1;
                    }
                }
                else {
                    DataManager_1.default.instance.powerEffectLoop -= 1;
                }
                if (DataManager_1.default.instance.powerCount == DataManager_1.default.instance.powerCountTarget) {
                    StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('必杀技');
                    StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                    AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SKILL);
                }
            }
            // 音效
            if (progress > 0.7 && progress <= 0.8) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('好球');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GOOD);
            }
            else if (progress > 0.8 && progress <= 0.85) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('漂亮');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GREAT);
            }
            else if (progress > 0.85 && progress <= 0.9) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('哇~');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.EXCELLENT);
            }
            else if (progress > 0.9 && progress <= 0.95) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('牛牛牛');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.AMAZING);
            }
            else if (progress > 0.95 && progress <= 1) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('世界波');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.UNBELIEVABLE);
            }
        }).start();
    };
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3BELHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBQzdEO2lCQUFNLElBQUksUUFBUSxHQUFHLEdBQUcsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUMzQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlDLCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNwRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUMzRDtpQkFBTSxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtnQkFDekMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUM5QywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDcEQsc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDaEU7UUFFTCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFuSWdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FvSXhCO0lBQUQsV0FBQztDQXBJRCxBQW9JQyxDQXBJaUMsRUFBRSxDQUFDLFNBQVMsR0FvSTdDO2tCQXBJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IEVuZHBvaW50IGZyb20gXCIuL0VuZHBvaW50XCI7XHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9HQU1FX0VWRU5ULCBFTlVNX0dBTUVfU1RBVFVTLCBFTlVNX1BMQVlFUl9TVEFUVVMsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuL0VudW1cIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4vU3RhdGljSW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDMwMDBcclxuICAgIHNwZWVkTWluOiBudW1iZXIgPSAzMDBcclxuXHJcbiAgICBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSlcclxuICAgICAgICB0aGlzLnJlbmRvcigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o6n5Yi26Laz55CD56e75Yqo55qE5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQg5Y+R6LW356e75Yqo55qE55CD5ZGYXHJcbiAgICAgKiBAcGFyYW0gZW5kIOenu+WKqOeahOe7iOeCue+8jOWPr+iDveaYr+WPpuS4gOWQjeeQg+WRmOaIlue7iOeCuVxyXG4gICAgICogQHBhcmFtIHByb2dyZXNzIOenu+WKqOeahOi/m+W6pu+8jOeUqOS6juiuoeeul+enu+WKqOmAn+W6puWSjOinpuWPkeS4jeWQjOmYtuauteeahOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBtb3ZlKHN0YXJ0OiBQbGF5ZXIsIGVuZDogUGxheWVyIHwgRW5kcG9pbnQsIHByb2dyZXNzOiBudW1iZXIpIHtcclxuICAgICAgICAvLyDouKLnkIPnirbmgIFcclxuICAgICAgICBzdGFydC5zZXRTdGF0dXMoRU5VTV9QTEFZRVJfU1RBVFVTLlNIT09USU5HKVxyXG4gICAgICAgIHN0YXJ0LnBsYXlFZmZlY3QoKVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2hpZWxkJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudCA+PSBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICAgICAgY29uc3Qgc3BvcyA9IHN0YXJ0Lm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIGNvbnN0IGVwb3MgPSBlbmQubm9kZS5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzcG9zLnN1YihlcG9zKS5tYWcoKVxyXG5cclxuICAgICAgICBsZXQgbW92ZVNwZWVkID0gdGhpcy5zcGVlZCAqIHByb2dyZXNzXHJcbiAgICAgICAgaWYgKHByb2dyZXNzID49IDAuNSAmJiBwcm9ncmVzcyA8PSAwLjcpIHtcclxuICAgICAgICAgICAgbW92ZVNwZWVkID0gdGhpcy5zcGVlZCAqIDAuNVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwLjUgJiYgcHJvZ3Jlc3MgPj0gMCkge1xyXG4gICAgICAgICAgICAvLyDmu6Hog73ph49cclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPT0gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZVNwZWVkID0gdGhpcy5zcGVlZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQk9PKVxyXG4gICAgICAgICAgICAgICAgbW92ZVNwZWVkID0gdGhpcy5zcGVlZE1pblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1vdmVUaW1lID0gZGlzdGFuY2UgLyBtb3ZlU3BlZWRcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogY2MudjMoZXBvcy54LCBlcG9zLnksIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDmjqXnkIPpn7PmlYhcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0FUQ0gpXHJcbiAgICAgICAgICAgIC8vIOenu+WKqOi2s+eQg+mUgOavgVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIC8vIOWbnuW+heacuueKtuaAgVxyXG4gICAgICAgICAgICBzdGFydC5zZXRTdGF0dXMoRU5VTV9QTEFZRVJfU1RBVFVTLklETEUpXHJcbiAgICAgICAgICAgIGlmIChlbmQgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOi/m+aMgeeQg+eKtuaAgVxyXG4gICAgICAgICAgICAgICAgZW5kLnNldFN0YXR1cyhFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkpXHJcbiAgICAgICAgICAgICAgICBlbmQuc2V0Q2lyY2xlQWN0aXZlKGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB4ID0gMCwgeSA9IDBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRCbHVlTmV4dCgpXHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSBuZXh0LnhcclxuICAgICAgICAgICAgICAgICAgICB5ID0gbmV4dC55XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dC50dXJuVG8oZW5kLngsIGVuZC55KVxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQuc2V0Q2lyY2xlQWN0aXZlKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g56e75Yqo55u45py6XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULkNBTUVSQV9NT1ZFLCB7IGN1cnJlbnQ6IGVuZC5ub2RlLCBuZXh0OiBuZXh0IH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0RW5kcG9pbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHggPSBlbmRwb2ludC54XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IGVuZHBvaW50LnlcclxuICAgICAgICAgICAgICAgICAgICAvLyDnp7vliqjnm7jmnLpcclxuICAgICAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHsgY3VycmVudDogZW5kLm5vZGUsIG5leHQ6IGVuZHBvaW50IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbmQudHVyblRvKHgsIHkpXHJcbiAgICAgICAgICAgICAgICAvLyDmjqXnkIPmlYjmnpxcclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDAuNyAmJiBwcm9ncmVzcyA8PSAxKSBlbmQucGxheUVmZmVjdCgpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g55CD6Zeo5pi+56S66Laz55CDXHJcbiAgICAgICAgICAgICAgICBlbmQuc2V0QmFsbEFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliKTmlq3og73ph4/mp73mg4XlhrXvvIzmuLjmiI/nirbmgIHliIfmjaJcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9PT0gRU5VTV9HQU1FX1NUQVRVUy5TSE9PVElORykge1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkdcclxuICAgICAgICAgICAgICAgIC8vIOaKgOiDvemlruWTgVxyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyRWZmZWN0TG9vcCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aKe55uK6aOf54mpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RFZmZlY3RMb29wIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudCArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50ID4gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudCA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0UG93ZXJCYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RFZmZlY3RMb29wIC09IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyRWZmZWN0TG9vcCAtPSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPT0gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXROb3RpY2VMYWJlbCgn5b+F5p2A5oqAJylcclxuICAgICAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5OT1RJQ0UpXHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU0tJTEwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOmfs+aViFxyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwLjcgJiYgcHJvZ3Jlc3MgPD0gMC44KSB7XHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0Tm90aWNlTGFiZWwoJ+WlveeQgycpXHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5OT1RJQ0UpXHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5HT09EKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gMC44ICYmIHByb2dyZXNzIDw9IDAuODUpIHtcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXROb3RpY2VMYWJlbCgn5ryC5LquJylcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLk5PVElDRSlcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkdSRUFUKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gMC44NSAmJiBwcm9ncmVzcyA8PSAwLjkpIHtcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXROb3RpY2VMYWJlbCgn5ZOHficpXHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5OT1RJQ0UpXHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5FWENFTExFTlQpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPiAwLjkgJiYgcHJvZ3Jlc3MgPD0gMC45NSkge1xyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE5vdGljZUxhYmVsKCfniZvniZvniZsnKVxyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTk9USUNFKVxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQU1BWklORylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA+IDAuOTUgJiYgcHJvZ3Jlc3MgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE5vdGljZUxhYmVsKCfkuJbnlYzms6InKVxyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTk9USUNFKVxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuVU5CRUxJRVZBQkxFKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/NoticeLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fc6dets5NEHq/jsMDracXv', 'NoticeLayer');
// script/layer/NoticeLayer.ts

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
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("./../StaticInstance");
// Created by carolsail 
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NoticeLayer = /** @class */ (function (_super) {
    __extends(NoticeLayer, _super);
    function NoticeLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.spriteArr = [];
        _this.icon = null;
        return _this;
    }
    NoticeLayer.prototype.onEnable = function () {
        this.scheduleOnce(function () {
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE, false);
        }, 1);
    };
    NoticeLayer.prototype.setNoticeLabel = function (str) {
        // this.label.string = `${str}`
        var index = 0;
        switch (str) {
            case '必杀技':
                index = 0;
                break;
            case '好球':
                index = 1;
                break;
            case '漂亮':
                index = 2;
                break;
            case '哇~':
                index = 3;
                break;
            case '牛牛牛':
                index = 4;
                break;
            case '世界波':
                index = 5;
                break;
            default:
                break;
        }
        this.icon.spriteFrame = this.spriteArr[index];
    };
    __decorate([
        property(cc.Label)
    ], NoticeLayer.prototype, "label", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NoticeLayer.prototype, "spriteArr", void 0);
    __decorate([
        property(cc.Sprite)
    ], NoticeLayer.prototype, "icon", void 0);
    NoticeLayer = __decorate([
        ccclass
    ], NoticeLayer);
    return NoticeLayer;
}(Baselayer_1.default));
exports.default = NoticeLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcTm90aWNlTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQXVDO0FBQ3ZDLHNEQUFxRDtBQUNyRCx3QkFBd0I7QUFFeEIseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFTO0lBQWxEO1FBQUEscUVBeUNDO1FBdENHLFdBQUssR0FBYSxJQUFJLENBQUE7UUFFdEIsZUFBUyxHQUEwQixFQUFFLENBQUE7UUFFckMsVUFBSSxHQUFjLElBQUksQ0FBQTs7SUFrQzFCLENBQUM7SUFqQ0csOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDL0QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLCtCQUErQjtRQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxRQUFRLEdBQUcsRUFBRTtZQUNULEtBQUssS0FBSztnQkFDTixLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLE1BQU07WUFDVixLQUFLLElBQUk7Z0JBQ0wsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDVixNQUFNO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ1YsTUFBTTtZQUNWLEtBQUssSUFBSTtnQkFDTCxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDVixNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ1YsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2tEQUNVO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0U7SUFQTCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBeUMvQjtJQUFELGtCQUFDO0NBekNELEFBeUNDLENBekN3QyxtQkFBUyxHQXlDakQ7a0JBekNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU5VTV9VSV9UWVBFIH0gZnJvbSAnLi4vRW51bSc7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi8uLi9TdGF0aWNJbnN0YW5jZSc7XHJcbi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IEJhc2VMYXllciBmcm9tIFwiLi9CYXNlbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpY2VMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBzcHJpdGVBcnI6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5OT1RJQ0UsIGZhbHNlKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Tm90aWNlTGFiZWwoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyB0aGlzLmxhYmVsLnN0cmluZyA9IGAke3N0cn1gXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBzd2l0Y2ggKHN0cikge1xyXG4gICAgICAgICAgICBjYXNlICflv4XmnYDmioAnOlxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ+WlveeQgyc6XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAn5ryC5LquJzpcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICflk4d+JzpcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICfniZvniZvniZsnOlxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSA0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ+S4lueVjOazoic6XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUFycltpbmRleF07XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/LoseLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9948ctChV5AL5qJXK15ECQz', 'LoseLayer');
// script/layer/LoseLayer.ts

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
var LoseLayer = /** @class */ (function (_super) {
    __extends(LoseLayer, _super);
    function LoseLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.tackleLabel = null;
        _this.timeOutLabel = null;
        return _this;
    }
    LoseLayer.prototype.onHomeClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.GAME, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, true);
    };
    LoseLayer.prototype.onRestartClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_RESTART);
    };
    LoseLayer.prototype.onShareClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        // SdkManager.instance.gameShareActive()
        SdkManager_1.default.instance.shareGameToFriend(null, '分享给好友');
    };
    LoseLayer.prototype.setLoseTitle = function (msg) {
        // if(this.titleLabel) this.titleLabel.string = msg
        if (msg == '被抢断') {
            this.tackleLabel.active = true;
            this.timeOutLabel.active = false;
        }
        else {
            this.tackleLabel.active = false;
            this.timeOutLabel.active = true;
        }
    };
    __decorate([
        property(cc.Label)
    ], LoseLayer.prototype, "titleLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LoseLayer.prototype, "tackleLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LoseLayer.prototype, "timeOutLabel", void 0);
    LoseLayer = __decorate([
        ccclass
    ], LoseLayer);
    return LoseLayer;
}(Baselayer_1.default));
exports.default = LoseLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcTG9zZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixnQ0FBeUU7QUFDekUsc0RBQXFEO0FBQ3JELHdEQUFtRDtBQUNuRCx5Q0FBb0M7QUFDcEMsd0RBQW1EO0FBQ25ELG9EQUErQztBQUV6QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQXVDQztRQXBDRyxnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixrQkFBWSxHQUFZLElBQUksQ0FBQTs7SUFnQ2hDLENBQUM7SUE5QkcsK0JBQVcsR0FBWDtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN6RCwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDekQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3pELHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsd0NBQXdDO1FBQ3hDLG9CQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0NBQVksR0FBWixVQUFhLEdBQVc7UUFDcEIsbURBQW1EO1FBQ25ELElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDcEM7YUFDRztZQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBUFgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXVDN0I7SUFBRCxnQkFBQztDQXZDRCxBQXVDQyxDQXZDc0MsbUJBQVMsR0F1Qy9DO2tCQXZDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9FVkVOVCwgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tICcuLy4uL1N0YXRpY0luc3RhbmNlJztcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VMYXllciBmcm9tIFwiLi9CYXNlbGF5ZXJcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9FdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFNka01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvU2RrTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvc2VMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGVMYWJlbDogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhY2tsZUxhYmVsOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1lT3V0TGFiZWw6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25Ib21lQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTE9TRSwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuR0FNRSwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUVOVSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBvblJlc3RhcnRDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5MT1NFLCBmYWxzZSlcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuR0FNRV9SRVNUQVJUKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICAvLyBTZGtNYW5hZ2VyLmluc3RhbmNlLmdhbWVTaGFyZUFjdGl2ZSgpXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5zaGFyZUdhbWVUb0ZyaWVuZChudWxsLCAn5YiG5Lqr57uZ5aW95Y+LJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9zZVRpdGxlKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy50aXRsZUxhYmVsKSB0aGlzLnRpdGxlTGFiZWwuc3RyaW5nID0gbXNnXHJcbiAgICAgICAgaWYgKG1zZyA9PSAn6KKr5oqi5patJykge1xyXG4gICAgICAgICAgICB0aGlzLnRhY2tsZUxhYmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGltZU91dExhYmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRhY2tsZUxhYmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRMYWJlbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83ea9fld2RENaAewLnZ4Rbr', 'Timer');
// script/Timer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
        // onLoad () {}
        // start () {}
        // update (dt: number) {}
    }
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUaW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFVQztRQVBHLFdBQUssR0FBYSxJQUFJLENBQUM7O1FBRXZCLGVBQWU7UUFFZixjQUFjO1FBRWQseUJBQXlCO0lBQzdCLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBSE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVU1QjtJQUFELGVBQUM7Q0FWRCxBQVVDLENBVnFDLEVBQUUsQ0FBQyxTQUFTLEdBVWpEO2tCQVZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWwgXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICAvLyBzdGFydCAoKSB7fVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQ6IG51bWJlcikge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/RankLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b3b6DNG/pGWK/6lqk3+Yvj', 'RankLayer');
// script/layer/RankLayer.ts

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
var SdkManager_1 = require("../manager/SdkManager");
var StaticInstance_1 = require("../StaticInstance");
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankLayer = /** @class */ (function (_super) {
    __extends(RankLayer, _super);
    function RankLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankLayer.prototype.onEnable = function () {
        // 读取排行榜数据
        SdkManager_1.default.instance.getRank();
    };
    RankLayer.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.RANK, false);
    };
    RankLayer = __decorate([
        ccclass
    ], RankLayer);
    return RankLayer;
}(Baselayer_1.default));
exports.default = RankLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcUmFua0xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixnQ0FBd0Q7QUFDeEQsd0RBQW1EO0FBQ25ELG9EQUErQztBQUMvQyxvREFBbUQ7QUFDbkQseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFTO0lBQWhEOztJQVdBLENBQUM7SUFURyw0QkFBUSxHQUFSO1FBQ0ksVUFBVTtRQUNWLG9CQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFWZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVc3QjtJQUFELGdCQUFDO0NBWEQsQUFXQyxDQVhzQyxtQkFBUyxHQVcvQztrQkFYb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgU2RrTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9TZGtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcbmltcG9ydCBCYXNlTGF5ZXIgZnJvbSBcIi4vQmFzZWxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcblxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICAvLyDor7vlj5bmjpLooYzmppzmlbDmja5cclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLmdldFJhbmsoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlJBTkssIGZhbHNlKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/SettingLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eda224K5PpC4bGab1R/H3j8', 'SettingLayer');
// script/layer/SettingLayer.ts

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
var DataManager_1 = require("../manager/DataManager");
var EventManager_1 = require("../manager/EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SettingLayer = /** @class */ (function (_super) {
    __extends(SettingLayer, _super);
    function SettingLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.musicNode = null;
        _this.soundNode = null;
        _this.vibrateNode = null;
        _this.gamemusicNode = null;
        _this.gamesoundNode = null;
        _this.gamevibrateNode = null;
        _this.mainSettingNode = null;
        _this.gameSettingNode = null;
        return _this;
    }
    SettingLayer.prototype.onEnable = function () {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.RENDOR_HOME_BTN, this.setHomeBtn, this);
        this.rendorMusic();
        this.rendorSound();
        this.rendorVibrate();
        // 游戏中调起setting的时候要暂停timer
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_STOP);
    };
    SettingLayer.prototype.onDisable = function () {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.RENDOR_HOME_BTN, this.setHomeBtn);
        // 游戏中关闭setting的时候要暂停timer
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_START);
    };
    SettingLayer.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, false);
    };
    SettingLayer.prototype.onHomeClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.GAME, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, true);
    };
    SettingLayer.prototype.onMusicClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.audioMusic = !DataManager_1.default.instance.audioMusic;
        if (DataManager_1.default.instance.audioMusic) {
            AudioManager_1.default.instance.playMusic();
        }
        else {
            AudioManager_1.default.instance.stopMusic();
        }
        this.rendorMusic();
    };
    SettingLayer.prototype.onSoundClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.audioSound = !DataManager_1.default.instance.audioSound;
        this.rendorSound();
    };
    SettingLayer.prototype.onVibrateClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.vibrate = !DataManager_1.default.instance.vibrate;
        this.rendorVibrate();
    };
    SettingLayer.prototype.setHomeBtn = function (status) {
        if (status === void 0) { status = true; }
        this.mainSettingNode.active = !status;
        this.gameSettingNode.active = status;
    };
    SettingLayer.prototype.rendorMusic = function () {
        // this.musicNode.getChildByName('on').active = DataManager.instance.audioMusic
        this.musicNode.getChildByName('off').active = !DataManager_1.default.instance.audioMusic;
        // this.gamemusicNode.getChildByName('on').active = DataManager.instance.audioMusic
        this.gamemusicNode.getChildByName('off').active = !DataManager_1.default.instance.audioMusic;
    };
    SettingLayer.prototype.rendorSound = function () {
        // this.soundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.soundNode.getChildByName('off').active = !DataManager_1.default.instance.audioSound;
        // this.gamesoundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.gamesoundNode.getChildByName('off').active = !DataManager_1.default.instance.audioSound;
    };
    SettingLayer.prototype.rendorVibrate = function () {
        // this.soundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.vibrateNode.getChildByName('off').active = !DataManager_1.default.instance.vibrate;
        // this.gamesoundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.gamevibrateNode.getChildByName('off').active = !DataManager_1.default.instance.vibrate;
    };
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "musicNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "soundNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "vibrateNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gamemusicNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gamesoundNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gamevibrateNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "mainSettingNode", void 0);
    __decorate([
        property(cc.Node)
    ], SettingLayer.prototype, "gameSettingNode", void 0);
    SettingLayer = __decorate([
        ccclass
    ], SettingLayer);
    return SettingLayer;
}(Baselayer_1.default));
exports.default = SettingLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcU2V0dGluZ0xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixnQ0FBeUU7QUFDekUsc0RBQXFEO0FBQ3JELHdEQUFtRDtBQUNuRCx5Q0FBb0M7QUFDcEMsc0RBQWlEO0FBQ2pELHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBUztJQUFuRDtRQUFBLHFFQThGQztRQTNGRyxlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IscUJBQWUsR0FBWSxJQUFJLENBQUE7UUFFL0IscUJBQWUsR0FBWSxJQUFJLENBQUE7UUFFL0IscUJBQWUsR0FBWSxJQUFJLENBQUE7O0lBNkVuQyxDQUFDO0lBM0VhLCtCQUFRLEdBQWxCO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLHNCQUFlLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDaEYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDcEIsMEJBQTBCO1FBQzFCLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFUyxnQ0FBUyxHQUFuQjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBZSxDQUFD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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9HQU1FX0VWRU5ULCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4vLi4vU3RhdGljSW5zdGFuY2UnO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQmFzZUxheWVyIGZyb20gXCIuL0Jhc2VsYXllclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9FdmVudE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0xheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG11c2ljTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc291bmROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2aWJyYXRlTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZW11c2ljTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZXNvdW5kTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZXZpYnJhdGVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluU2V0dGluZ05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVTZXR0aW5nTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9uKEVOVU1fR0FNRV9FVkVOVC5SRU5ET1JfSE9NRV9CVE4sIHRoaXMuc2V0SG9tZUJ0biwgdGhpcylcclxuICAgICAgICB0aGlzLnJlbmRvck11c2ljKClcclxuICAgICAgICB0aGlzLnJlbmRvclNvdW5kKClcclxuICAgICAgICB0aGlzLnJlbmRvclZpYnJhdGUoKVxyXG4gICAgICAgIC8vIOa4uOaIj+S4reiwg+i1t3NldHRpbmfnmoTml7blgJnopoHmmoLlgZx0aW1lclxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5USU1FUl9TVE9QKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9mZihFTlVNX0dBTUVfRVZFTlQuUkVORE9SX0hPTUVfQlROLCB0aGlzLnNldEhvbWVCdG4pXHJcbiAgICAgICAgLy8g5ri45oiP5Lit5YWz6Zetc2V0dGluZ+eahOaXtuWAmeimgeaaguWBnHRpbWVyXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULlRJTUVSX1NUQVJUKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlNFVFRJTkcsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uSG9tZUNsaWNrKCl7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuR0FNRSwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuU0VUVElORywgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUVOVSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBvbk11c2ljQ2xpY2soKXtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLmF1ZGlvTXVzaWNcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljKXtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlNdXNpYygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5zdG9wTXVzaWMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRvck11c2ljKClcclxuICAgIH1cclxuXHJcbiAgICBvblNvdW5kQ2xpY2soKXtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb1NvdW5kID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLmF1ZGlvU291bmRcclxuICAgICAgICB0aGlzLnJlbmRvclNvdW5kKClcclxuICAgIH1cclxuXHJcbiAgICBvblZpYnJhdGVDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnZpYnJhdGUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UudmlicmF0ZVxyXG4gICAgICAgIHRoaXMucmVuZG9yVmlicmF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0SG9tZUJ0bihzdGF0dXM6IGJvb2xlYW4gPSB0cnVlKXtcclxuICAgICAgICB0aGlzLm1haW5TZXR0aW5nTm9kZS5hY3RpdmUgPSAhc3RhdHVzXHJcbiAgICAgICAgdGhpcy5nYW1lU2V0dGluZ05vZGUuYWN0aXZlID0gc3RhdHVzXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yTXVzaWMoKXtcclxuICAgICAgICAvLyB0aGlzLm11c2ljTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb24nKS5hY3RpdmUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljXHJcbiAgICAgICAgdGhpcy5tdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29mZicpLmFjdGl2ZSA9ICFEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lbXVzaWNOb2RlLmdldENoaWxkQnlOYW1lKCdvbicpLmFjdGl2ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmF1ZGlvTXVzaWNcclxuICAgICAgICB0aGlzLmdhbWVtdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29mZicpLmFjdGl2ZSA9ICFEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRvclNvdW5kKCl7XHJcbiAgICAgICAgLy8gdGhpcy5zb3VuZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29uJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgICAgIHRoaXMuc291bmROb2RlLmdldENoaWxkQnlOYW1lKCdvZmYnKS5hY3RpdmUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZXNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb24nKS5hY3RpdmUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb1NvdW5kXHJcbiAgICAgICAgdGhpcy5nYW1lc291bmROb2RlLmdldENoaWxkQnlOYW1lKCdvZmYnKS5hY3RpdmUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRvclZpYnJhdGUoKXtcclxuICAgICAgICAvLyB0aGlzLnNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb24nKS5hY3RpdmUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb1NvdW5kXHJcbiAgICAgICAgdGhpcy52aWJyYXRlTm9kZS5nZXRDaGlsZEJ5TmFtZSgnb2ZmJykuYWN0aXZlID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLnZpYnJhdGVcclxuICAgICAgICAvLyB0aGlzLmdhbWVzb3VuZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ29uJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZFxyXG4gICAgICAgIHRoaXMuZ2FtZXZpYnJhdGVOb2RlLmdldENoaWxkQnlOYW1lKCdvZmYnKS5hY3RpdmUgPSAhRGF0YU1hbmFnZXIuaW5zdGFuY2UudmlicmF0ZVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bb4bIpEUNPt4B+WGt/oh03', 'AudioManager');
// script/manager/AudioManager.ts

"use strict";
// Created by carolsail
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
var Enum_1 = require("./../Enum");
var DataManager_1 = require("./DataManager");
var ResourceManager_1 = require("./ResourceManager");
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.audioSource = null;
    }
    AudioManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
            this._instance.init();
        }
        return this._instance;
    };
    Object.defineProperty(AudioManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.init = function () {
        this.audioSource = new cc.AudioSource();
        this.audioSource.loop = true;
        this.audioSource.volume = 0.3;
    };
    /**
         * 异步播放背景音乐。
         * 此方法首先检查是否有可用的背景音乐资源，然后尝试播放。如果当前音频源已经有音轨，则直接播放；
         * 否则，从资源管理器异步获取背景音乐音轨，并将其分配给音频源后播放。
         */
    AudioManager.prototype.playMusic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!DataManager_1.default.instance.audioMusic)
                            return [2 /*return*/];
                        if (this.audioSource.clip) {
                            this.audioSource.play();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, ResourceManager_1.default.instance.getClip(Enum_1.ENUM_AUDIO_CLIP.BGM)];
                    case 1:
                        clip = _a.sent();
                        this.audioSource.clip = clip;
                        this.audioSource.play();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
         * 停止音乐播放。
         *
         * 该方法用于停止当前正在进行的音乐播放。它调用了音频源的stop方法，
         * 以便立即结束音乐播放。这对于需要在应用程序中控制音乐播放的场景非常有用，
         * 比如在游戏或媒体应用中根据用户操作停止背景音乐。
         */
    AudioManager.prototype.stopMusic = function () {
        this.audioSource.stop();
    };
    /**
      * 异步播放声音效果。
      *
      * 此函数用于根据给定的声音名称异步播放声音效果。它首先检查数据管理器中是否存在声音资源，
      * 然后从资源管理器中获取声音剪辑，并使用Unity的音频引擎播放该声音剪辑。
      * 如果指定了循环播放，声音将一直播放直到停止或游戏结束。
      *
      * @param name 声音效果的名称，使用枚举类型ENUM_AUDIO_CLIP来指定。
      * @param isLoop 是否循环播放声音，默认为false（不循环）。
      * @returns 返回一个表示声音播放的唯一标识符。
      */
    AudioManager.prototype.playSound = function (name, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!DataManager_1.default.instance.audioSound)
                            return [2 /*return*/];
                        return [4 /*yield*/, ResourceManager_1.default.instance.getClip(name)];
                    case 1:
                        clip = _a.sent();
                        return [2 /*return*/, cc.audioEngine.playEffect(clip, isLoop)];
                }
            });
        });
    };
    /**
     * 停止播放音效。
     *
     * 本函数通过音频引擎停止指定音效的播放。音效通常是指短促的音频片段，例如游戏中的人物脚步声、攻击声等。
     * 使用音效ID作为参数，可以直接定位到正在播放的音效，实现精确的控制。
     *
     * @param audioId 音效的ID，用于唯一标识一个音效实例。
     */
    AudioManager.prototype.stopSound = function (audioId) {
        cc.audioEngine.stopEffect(audioId);
    };
    AudioManager._instance = null;
    return AudioManager;
}());
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsa0NBQTRDO0FBQzVDLDZDQUF3QztBQUN4QyxxREFBK0M7QUFFL0M7SUFBQTtRQUNZLGdCQUFXLEdBQW1CLElBQUksQ0FBQTtJQXlFOUMsQ0FBQztJQXRFVSx3QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDeEI7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVELHNCQUFXLHdCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFnQixDQUFBO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUNqQyxDQUFDO0lBQ0Q7Ozs7V0FJTztJQUNELGdDQUFTLEdBQWY7Ozs7Ozt3QkFDSSxJQUFJLENBQUMscUJBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVTs0QkFBRSxzQkFBTTt3QkFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTs0QkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs0QkFDdkIsc0JBQU07eUJBQ1Q7d0JBQ1kscUJBQU0seUJBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFlLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFsRSxJQUFJLEdBQUcsU0FBMkQ7d0JBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTt3QkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7Ozs7S0FDMUI7SUFDRDs7Ozs7O1dBTU87SUFDUCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7UUFVSTtJQUNFLGdDQUFTLEdBQWYsVUFBZ0IsSUFBcUIsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCOzs7Ozs7d0JBQzFELElBQUksQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVOzRCQUFFLHNCQUFNO3dCQUMvQixxQkFBTSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFuRCxJQUFJLEdBQUcsU0FBNEM7d0JBQ3pELHNCQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBQTs7OztLQUNqRDtJQUNEOzs7Ozs7O09BT0c7SUFDSCxnQ0FBUyxHQUFULFVBQVUsT0FBZTtRQUNyQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBdkVjLHNCQUFTLEdBQVEsSUFBSSxDQUFBO0lBd0V4QyxtQkFBQztDQTFFRCxBQTBFQyxJQUFBO2tCQTFFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAgfSBmcm9tICcuLy4uL0VudW0nO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBSZXNvdXJjZU1hbmFnZXIgZnJvbSBcIi4vUmVzb3VyY2VNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGF1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGxcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW55ID0gbnVsbFxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPigpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpXHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmluaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZTxBdWRpb01hbmFnZXI+KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UgPSBuZXcgY2MuQXVkaW9Tb3VyY2UoKVxyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UubG9vcCA9IHRydWVcclxuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnZvbHVtZSA9IDAuM1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAgICog5byC5q2l5pKt5pS+6IOM5pmv6Z+z5LmQ44CCXHJcbiAgICAgICAgICog5q2k5pa55rOV6aaW5YWI5qOA5p+l5piv5ZCm5pyJ5Y+v55So55qE6IOM5pmv6Z+z5LmQ6LWE5rqQ77yM54S25ZCO5bCd6K+V5pKt5pS+44CC5aaC5p6c5b2T5YmN6Z+z6aKR5rqQ5bey57uP5pyJ6Z+z6L2o77yM5YiZ55u05o6l5pKt5pS+77ybXHJcbiAgICAgICAgICog5ZCm5YiZ77yM5LuO6LWE5rqQ566h55CG5Zmo5byC5q2l6I635Y+W6IOM5pmv6Z+z5LmQ6Z+z6L2o77yM5bm25bCG5YW25YiG6YWN57uZ6Z+z6aKR5rqQ5ZCO5pKt5pS+44CCXHJcbiAgICAgICAgICovXHJcbiAgICBhc3luYyBwbGF5TXVzaWMoKSB7XHJcbiAgICAgICAgaWYgKCFEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5hdWRpb1NvdXJjZS5jbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGlwID0gYXdhaXQgUmVzb3VyY2VNYW5hZ2VyLmluc3RhbmNlLmdldENsaXAoRU5VTV9BVURJT19DTElQLkJHTSlcclxuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLmNsaXAgPSBjbGlwXHJcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICAqIOWBnOatoumfs+S5kOaSreaUvuOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOivpeaWueazleeUqOS6juWBnOatouW9k+WJjeato+WcqOi/m+ihjOeahOmfs+S5kOaSreaUvuOAguWug+iwg+eUqOS6humfs+mikea6kOeahHN0b3Dmlrnms5XvvIxcclxuICAgICAgICAgKiDku6Xkvr/nq4vljbPnu5PmnZ/pn7PkuZDmkq3mlL7jgILov5nlr7nkuo7pnIDopoHlnKjlupTnlKjnqIvluo/kuK3mjqfliLbpn7PkuZDmkq3mlL7nmoTlnLrmma/pnZ7luLjmnInnlKjvvIxcclxuICAgICAgICAgKiDmr5TlpoLlnKjmuLjmiI/miJblqpLkvZPlupTnlKjkuK3moLnmja7nlKjmiLfmk43kvZzlgZzmraLog4zmma/pn7PkuZDjgIJcclxuICAgICAgICAgKi9cclxuICAgIHN0b3BNdXNpYygpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnN0b3AoKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICog5byC5q2l5pKt5pS+5aOw6Z+z5pWI5p6c44CCXHJcbiAgICAgICogXHJcbiAgICAgICog5q2k5Ye95pWw55So5LqO5qC55o2u57uZ5a6a55qE5aOw6Z+z5ZCN56ew5byC5q2l5pKt5pS+5aOw6Z+z5pWI5p6c44CC5a6D6aaW5YWI5qOA5p+l5pWw5o2u566h55CG5Zmo5Lit5piv5ZCm5a2Y5Zyo5aOw6Z+z6LWE5rqQ77yMXHJcbiAgICAgICog54S25ZCO5LuO6LWE5rqQ566h55CG5Zmo5Lit6I635Y+W5aOw6Z+z5Ymq6L6R77yM5bm25L2/55SoVW5pdHnnmoTpn7PpopHlvJXmk47mkq3mlL7or6Xlo7Dpn7PliarovpHjgIJcclxuICAgICAgKiDlpoLmnpzmjIflrprkuoblvqrnjq/mkq3mlL7vvIzlo7Dpn7PlsIbkuIDnm7Tmkq3mlL7nm7TliLDlgZzmraLmiJbmuLjmiI/nu5PmnZ/jgIJcclxuICAgICAgKiBcclxuICAgICAgKiBAcGFyYW0gbmFtZSDlo7Dpn7PmlYjmnpznmoTlkI3np7DvvIzkvb/nlKjmnprkuL7nsbvlnotFTlVNX0FVRElPX0NMSVDmnaXmjIflrprjgIJcclxuICAgICAgKiBAcGFyYW0gaXNMb29wIOaYr+WQpuW+queOr+aSreaUvuWjsOmfs++8jOm7mOiupOS4umZhbHNl77yI5LiN5b6q546v77yJ44CCXHJcbiAgICAgICogQHJldHVybnMg6L+U5Zue5LiA5Liq6KGo56S65aOw6Z+z5pKt5pS+55qE5ZSv5LiA5qCH6K+G56ym44CCXHJcbiAgICAgICovXHJcbiAgICBhc3luYyBwbGF5U291bmQobmFtZTogRU5VTV9BVURJT19DTElQLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICghRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2xpcCA9IGF3YWl0IFJlc291cmNlTWFuYWdlci5pbnN0YW5jZS5nZXRDbGlwKG5hbWUpXHJcbiAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgaXNMb29wKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PmlYjjgIJcclxuICAgICAqIFxyXG4gICAgICog5pys5Ye95pWw6YCa6L+H6Z+z6aKR5byV5pOO5YGc5q2i5oyH5a6a6Z+z5pWI55qE5pKt5pS+44CC6Z+z5pWI6YCa5bi45piv5oyH55+t5L+D55qE6Z+z6aKR54mH5q6177yM5L6L5aaC5ri45oiP5Lit55qE5Lq654mp6ISa5q2l5aOw44CB5pS75Ye75aOw562J44CCXHJcbiAgICAgKiDkvb/nlKjpn7PmlYhJROS9nOS4uuWPguaVsO+8jOWPr+S7peebtOaOpeWumuS9jeWIsOato+WcqOaSreaUvueahOmfs+aViO+8jOWunueOsOeyvuehrueahOaOp+WItuOAglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXVkaW9JZCDpn7PmlYjnmoRJRO+8jOeUqOS6juWUr+S4gOagh+ivhuS4gOS4qumfs+aViOWunuS+i+OAglxyXG4gICAgICovXHJcbiAgICBzdG9wU291bmQoYXVkaW9JZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChhdWRpb0lkKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/TipLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcVGlwTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLGdDQUF5RTtBQUN6RSx3REFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25ELG9EQUFtRDtBQUNuRCx5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVM7SUFBL0M7UUFBQSxxRUF3QkM7UUFyQkcsa0JBQVksR0FBWSxJQUFJLENBQUE7O0lBcUJoQyxDQUFDO0lBbkJHLDJCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEdBQVc7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFRLEdBQUssQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksUUFBUTtRQUNSLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVTtJQUhYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3QjVCO0lBQUQsZUFBQztDQXhCRCxBQXdCQyxDQXhCcUMsbUJBQVMsR0F3QjlDO2tCQXhCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0dBTUVfRVZFTlQsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcbmltcG9ydCBCYXNlTGF5ZXIgZnJvbSBcIi4vQmFzZWxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcExheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxldmVsQ29udGVudDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5USU1FUl9TVE9QKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlRJUCwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGlwKG51bTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxldmVsQ29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBpdGVtLm5hbWUgPT0gYExldmVsJHtudW19YFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgLy8g6K6h5pe25Zmo5byA5ZCvXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULlRJTUVSX1NUQVJUKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Breath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfac45wMC9E/62pruXJ+zFr', 'Breath');
// script/Breath.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Breath = /** @class */ (function (_super) {
    __extends(Breath, _super);
    function Breath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scale = 0.6;
        _this.scale1 = 0.8;
        return _this;
    }
    Breath.prototype.start = function () {
        this.f1();
    };
    /**
        * 执行一个序列动作，首先缩放节点，然后调用f2函数。
        * 此函数通过使用cc.sequence和cc.callFunc组合动作来实现节点的缩放和后续动作的触发。
        * 它无返回值。
        */
    Breath.prototype.f1 = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.scaleTo(0.5, this.scale), cc.callFunc(function () {
            _this.f2();
        })));
    };
    /**
     * 执行一个序列动作，首先缩放节点，然后调用函数f1。
     * 此函数通过cc.sequence创建一个动作序列，首先将节点缩放到指定比例，然后在动作完成后调用f1函数。
     * 使用callFunc动作来在动作序列结束时执行回调函数，这是在Cocos Creator中常见的做法。
     */
    Breath.prototype.f2 = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.scaleTo(0.5, this.scale1), cc.callFunc(function () {
            _this.f1();
        })));
    };
    __decorate([
        property(cc.Integer)
    ], Breath.prototype, "scale", void 0);
    __decorate([
        property(cc.Integer)
    ], Breath.prototype, "scale1", void 0);
    Breath = __decorate([
        ccclass
    ], Breath);
    return Breath;
}(cc.Component));
exports.default = Breath;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCcmVhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1Q0M7UUFwQ0csV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVaLFlBQU0sR0FBRyxHQUFHLENBQUM7O0lBa0NqQixDQUFDO0lBakNHLHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0Q7Ozs7VUFJTTtJQUNOLG1CQUFFLEdBQUY7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNuQyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUNBLENBQ0osQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxtQkFBRSxHQUFGO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEtBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FDQSxDQUNKLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDVDtJQUVaO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MENBQ1I7SUFMSSxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBdUMxQjtJQUFELGFBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q21DLEVBQUUsQ0FBQyxTQUFTLEdBdUMvQztrQkF2Q29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYXRoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHNjYWxlID0gMC42O1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzY2FsZTEgPSAwLjg7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmYxKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICAqIOaJp+ihjOS4gOS4quW6j+WIl+WKqOS9nO+8jOmmluWFiOe8qeaUvuiKgueCue+8jOeEtuWQjuiwg+eUqGYy5Ye95pWw44CCXHJcbiAgICAgICAgKiDmraTlh73mlbDpgJrov4fkvb/nlKhjYy5zZXF1ZW5jZeWSjGNjLmNhbGxGdW5j57uE5ZCI5Yqo5L2c5p2l5a6e546w6IqC54K555qE57yp5pS+5ZKM5ZCO57ut5Yqo5L2c55qE6Kem5Y+R44CCXHJcbiAgICAgICAgKiDlroPml6Dov5Tlm57lgLzjgIJcclxuICAgICAgICAqL1xyXG4gICAgZjEoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIHRoaXMuc2NhbGUpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZjIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5omn6KGM5LiA5Liq5bqP5YiX5Yqo5L2c77yM6aaW5YWI57yp5pS+6IqC54K577yM54S25ZCO6LCD55So5Ye95pWwZjHjgIJcclxuICAgICAqIOatpOWHveaVsOmAmui/h2NjLnNlcXVlbmNl5Yib5bu65LiA5Liq5Yqo5L2c5bqP5YiX77yM6aaW5YWI5bCG6IqC54K557yp5pS+5Yiw5oyH5a6a5q+U5L6L77yM54S25ZCO5Zyo5Yqo5L2c5a6M5oiQ5ZCO6LCD55SoZjHlh73mlbDjgIJcclxuICAgICAqIOS9v+eUqGNhbGxGdW5j5Yqo5L2c5p2l5Zyo5Yqo5L2c5bqP5YiX57uT5p2f5pe25omn6KGM5Zue6LCD5Ye95pWw77yM6L+Z5piv5ZyoQ29jb3MgQ3JlYXRvcuS4reW4uOingeeahOWBmuazleOAglxyXG4gICAgICovXHJcbiAgICBmMigpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuNSwgdGhpcy5zY2FsZTEpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZjEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07295RwCc1KQoWqFTn/8mjp', 'GameManager');
// script/manager/GameManager.ts

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
var Ball_1 = require("../Ball");
var Endpoint_1 = require("../Endpoint");
var Enemy_1 = require("../Enemy");
var Enum_1 = require("../Enum");
var Food_1 = require("../Food");
var Levels_1 = require("../Levels");
var Player_1 = require("../Player");
var StaticInstance_1 = require("../StaticInstance");
var Utils_1 = require("../Utils");
var AudioManager_1 = require("./AudioManager");
var DataManager_1 = require("./DataManager");
var EventManager_1 = require("./EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stageNode = null;
        _this.bluePrefab = [];
        _this.redPrefab = [];
        _this.ballPrefab = null;
        _this.foodPrefab = null;
        _this.endpointPrefab = null;
        _this.levelLabel = null;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_RESTART, this.onGameRestart, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_NEXT, this.onGameNext, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_WIN, this.onGameWin, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_LOSE, this.onGameLose, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, this.onPlayerShoot, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_VIBRATE, this.onVibrate, this);
    };
    /**
     * 触发振动功能。
     * 该方法首先检查是否存在名为"tt"的全局对象，如果是，则调用其vibrateLong方法进行长时间振动。
     * 如果不存在"tt"对象，但存在名为"wx"的全局对象，则调用wx的vibrateLong方法进行长时间振动。
     * 这种做法兼容了不同平台或框架中触发振动的API调用。
     */
    GameManager.prototype.onVibrate = function () {
        if (window["tt"]) {
            tt.vibrateLong({
                success: function (res) {
                    console.log(res);
                },
                fail: function (res) {
                    console.log("vibrateLong\u8C03\u7528\u5931\u8D25");
                },
            });
        }
        else if (window["wx"]) {
            wx.vibrateLong({
                success: function (res) {
                    console.log(res);
                },
                fail: function (res) {
                    console.log("vibrateLong\u8C03\u7528\u5931\u8D25");
                },
            });
        }
    };
    /**
     * 当游戏重新启动时调用此方法。
     *
     * 本方法负责触发数据管理器的重置操作，并初始化游戏。
     * 它是游戏重启流程中的关键步骤，确保游戏状态被正确重置，
     * 为新的游戏循环提供干净的数据环境。
     */
    GameManager.prototype.onGameRestart = function () {
        DataManager_1.default.instance.reset();
        this.initGame();
    };
    /**
     * 处理游戏进入下一关的操作。
     * 当前关卡完成并满足进入下一关的条件后，此方法将被调用。
     * 它主要负责更新关卡进度、重置数据并初始化下一关的游戏。
     */
    GameManager.prototype.onGameNext = function () {
        if (DataManager_1.default.instance.level < Levels_1.Levels.length)
            DataManager_1.default.instance.level++;
        DataManager_1.default.instance.reset();
        this.initGame();
    };
    /**
     * 处理游戏胜利时的逻辑。
     * 停止记录游戏，检查是否完成所有关卡，更新游戏状态，播放胜利音效，并显示相应的UI。
     * 如果当前关卡是最高关卡，则更新最高关卡记录。
     */
    GameManager.prototype.onGameWin = function () {
        StaticInstance_1.StaticInstance.uiManager.stopRecord();
        var maxLevel = DataManager_1.default.instance.level + 1;
        if (maxLevel > Levels_1.Levels.length) {
            maxLevel = Levels_1.Levels.length;
            // 完成所有关卡
            StaticInstance_1.StaticInstance.uiManager.showCompleteNotice(true);
        }
        else {
            StaticInstance_1.StaticInstance.uiManager.showCompleteNotice(false);
        }
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.WIN;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.WIN);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.WIN);
        if (maxLevel > DataManager_1.default.instance.maxLevel) {
            DataManager_1.default.instance.maxLevel = maxLevel;
            // 排行榜设置
            // SdkManager.instance.setRankScore(maxLevel)
        }
    };
    /**
     * 初始化游戏的函数，负责设置游戏的初始状态，包括加载关卡数据、创建游戏场景中的对象等。
     */
    GameManager.prototype.onGameLose = function (msg) {
        if (msg === void 0) { msg = '被抢断'; }
        StaticInstance_1.StaticInstance.uiManager.stopRecord();
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.LOSE;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.LOSE);
        StaticInstance_1.StaticInstance.uiManager.setLoseTitle(msg);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE);
    };
    GameManager.prototype.initGame = function () {
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.INIT;
        var level = DataManager_1.default.instance.level;
        var current = DataManager_1.default.instance.currentData;
        if (!current) {
            // 关卡数据
            if (level > Levels_1.Levels.length)
                level = Levels_1.Levels.length;
            current = Utils_1.clone(Levels_1.Levels[level - 1]);
            if (!current['endpoint'])
                return;
            DataManager_1.default.instance.level = level;
            DataManager_1.default.instance.currentData = current;
        }
        this.levelLabel.string = "" + level;
        // 清除节点信息
        this.stageNode.removeAllChildren();
        // 初始化蓝方
        for (var i = 0; i < current['blue'].length; i++) {
            var data = current['blue'][i];
            var blue = cc.instantiate(this.bluePrefab[0]);
            blue.parent = this.stageNode;
            var params = { x: data.x, y: data.y, angle: data.angle, status: data.status };
            blue.getComponent(Player_1.default).init(params);
            // 生成防守队员
            if (data['red'] && data['red'].length) {
                for (var j = 0; j < data['red'].length; j++) {
                    if (!this.redPrefab)
                        break;
                    var redData = data['red'][j];
                    var red = cc.instantiate(this.redPrefab[0]);
                    red.parent = this.stageNode;
                    var redComp = red.getComponent(Enemy_1.default);
                    redComp.setParent(data);
                    redComp.init(redData);
                }
            }
            // 生成增益道具
            if (data['food'] && data['food'].length) {
                for (var k = 0; k < data['food'].length; k++) {
                    if (!this.foodPrefab)
                        break;
                    var foodData = data['food'][k];
                    var food = cc.instantiate(this.foodPrefab);
                    food.parent = this.stageNode;
                    var redComp = food.getComponent(Food_1.default);
                    redComp.setParent(data);
                    redComp.init(foodData);
                }
            }
        }
        // 终点球门
        var endpoint = cc.instantiate(this.endpointPrefab);
        endpoint.parent = this.stageNode;
        endpoint.getComponent(Endpoint_1.default).init({ x: current['endpoint'].x, y: current['endpoint'].y, angle: current['endpoint'].angle });
        if (current['endpoint']['red'].length) {
            for (var j = 0; j < current['endpoint']['red'].length; j++) {
                var redData = current['endpoint']['red'][j];
                var red = cc.instantiate(this.redPrefab[0]);
                red.parent = this.stageNode;
                red.getComponent(Enemy_1.default).init(redData);
            }
        }
        // 蓝方转向
        var blueReady = DataManager_1.default.instance.getBlueReady();
        var blueNext = DataManager_1.default.instance.getBlueNext();
        if (blueNext) {
            blueReady.turnTo(blueNext.x, blueNext.y);
            blueNext.turnTo(blueReady.x, blueReady.y);
            blueNext.setCircleActive(true);
            // 摄像机移动
            EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: blueReady, next: blueNext });
        }
        else {
            blueReady.turnTo(endpoint.x, endpoint.y);
            // 摄像机移动
            EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: blueReady, next: endpoint });
        }
        // 初始化技能条
        StaticInstance_1.StaticInstance.uiManager.setPowerBar();
        // 设置对战队名
        StaticInstance_1.StaticInstance.uiManager.setTeamLabel();
        // // 设置技能点
        // StaticInstance.uiManager.setPropNum()
        // 是否有提示
        if (current['isTip']) {
            StaticInstance_1.StaticInstance.uiManager.setTip(level);
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.TIP);
        }
        else {
            // 计时器开启
            EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_START);
        }
        // 初始化完毕
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.RUNING;
    };
    /**
     * 玩家射门
     * 首先，它检查游戏状态是否为运行中（RUNING），如果不是，则直接返回，不执行任何操作。

        接下来，将游戏状态设置为射击状态（SHOOTING）。

        然后，播放开火声音（AUDIO_CLIP.SHOOT）。

        从传入的数据中获取射击进度（progress）。

        获取蓝色队伍的准备状态（getBlueReady）。

        获取蓝色队伍的下一个目标位置（getBlueNext），如果传入的数据中包含下一个目标位置（next），则使用该位置代替默认的下一个目标位置。

        如果蓝色队伍已准备就绪，则实例化一个足球对象（ball），将其父对象设置为舞台节点（stageNode）。

        初始化足球对象的位置（x, y）。

        根据是否有下一个目标位置，确定足球的移动终点。

        调用足球对象的移动方法（move），传入起点、终点和射击进度，使足球开始移动。
     */
    GameManager.prototype.onPlayerShoot = function (data) {
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.SHOOTING;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SHOOT);
        var progress = data.progress;
        var start = DataManager_1.default.instance.getBlueReady();
        var next = DataManager_1.default.instance.getBlueNext();
        if (data === null || data === void 0 ? void 0 : data.next) {
            next = data.next;
        }
        if (start) {
            // start.shoot()
            // 移动的足球
            var ball = cc.instantiate(this.ballPrefab);
            ball.parent = this.stageNode;
            var end = null;
            if (next) {
                end = next;
            }
            else {
                end = DataManager_1.default.instance.getEndpoint();
            }
            var ballCom = ball.getComponent(Ball_1.default);
            ballCom.init({ x: start.x, y: start.y });
            ballCom.move(start, end, progress);
        }
    };
    GameManager.prototype.onDestroy = function () {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_RESTART, this.onGameRestart);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_NEXT, this.onGameNext);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_WIN, this.onGameWin);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_LOSE, this.onGameLose);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, this.onPlayerShoot);
    };
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "stageNode", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameManager.prototype, "bluePrefab", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameManager.prototype, "redPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "ballPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "foodPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "endpointPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "levelLabel", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsZ0NBQTJCO0FBQzNCLHdDQUFtQztBQUNuQyxrQ0FBNkI7QUFDN0IsZ0NBQTJGO0FBQzNGLGdDQUEyQjtBQUMzQixvQ0FBbUM7QUFDbkMsb0NBQStCO0FBQy9CLG9EQUFtRDtBQUNuRCxrQ0FBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFHcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtUUM7UUFoUUcsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFnQixFQUFFLENBQUE7UUFFNUIsZUFBUyxHQUFnQixFQUFFLENBQUE7UUFFM0IsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsb0JBQWMsR0FBYyxJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBYSxJQUFJLENBQUE7O0lBb1AvQixDQUFDO0lBbFBHLDRCQUFNLEdBQU47UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMxRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4RSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMxRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoRixDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNYLE9BQU8sWUFBQyxHQUFHO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFDSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNYLE9BQU8sWUFBQyxHQUFHO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0gsbUNBQWEsR0FBYjtRQUNJLHFCQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGdDQUFVLEdBQVY7UUFDSSxJQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxlQUFNLENBQUMsTUFBTTtZQUFFLHFCQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzVFLHFCQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILCtCQUFTLEdBQVQ7UUFDSSwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFFBQVEsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQzdDLElBQUksUUFBUSxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDMUIsUUFBUSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUE7WUFDeEIsU0FBUztZQUNULCtCQUFjLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3BEO2FBQU07WUFDSCwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNyRDtRQUNELHFCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyx1QkFBZ0IsQ0FBQyxHQUFHLENBQUE7UUFDbEQsc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFakQsSUFBSSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7WUFDeEMsUUFBUTtZQUNSLDZDQUE2QztTQUNoRDtJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNILGdDQUFVLEdBQVYsVUFBVyxHQUFtQjtRQUFuQixvQkFBQSxFQUFBLFdBQW1CO1FBQzFCLCtCQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLHFCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyx1QkFBZ0IsQ0FBQyxJQUFJLENBQUE7UUFDbkQsc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFDLCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0kscUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHVCQUFnQixDQUFDLElBQUksQ0FBQTtRQUNuRCxJQUFJLEtBQUssR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUE7UUFDdEMsSUFBSSxPQUFPLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFBO1FBQzlDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixPQUFPO1lBQ1AsSUFBSSxLQUFLLEdBQUcsZUFBTSxDQUFDLE1BQU07Z0JBQUUsS0FBSyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUE7WUFDaEQsT0FBTyxHQUFHLGFBQUssQ0FBQyxlQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQUUsT0FBTTtZQUNoQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1lBQ2xDLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUE7U0FDN0M7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFHLEtBQU8sQ0FBQTtRQUNuQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ2xDLFFBQVE7UUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0IsSUFBTSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1lBQzVCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdEMsU0FBUztZQUNULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7d0JBQUUsTUFBSztvQkFDMUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM5QixJQUFNLEdBQUcsR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDdEQsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO29CQUMzQixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFBO29CQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUN4QjthQUNKO1lBQ0QsU0FBUztZQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7d0JBQUUsTUFBSztvQkFDM0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNoQyxJQUFNLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtvQkFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO29CQUM1QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFBO29CQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUN6QjthQUNKO1NBQ0o7UUFDRCxPQUFPO1FBQ1AsSUFBTSxRQUFRLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDN0QsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ2hDLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUM5SCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDN0MsSUFBTSxHQUFHLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtnQkFDM0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDeEM7U0FDSjtRQUNELE9BQU87UUFDUCxJQUFNLFNBQVMsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNyRCxJQUFNLFFBQVEsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNuRCxJQUFJLFFBQVEsRUFBRTtZQUNWLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDeEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN6QyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlCLFFBQVE7WUFDUixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ2xHO2FBQU07WUFDSCxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3hDLFFBQVE7WUFDUixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ2xHO1FBQ0QsU0FBUztRQUNULCtCQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3RDLFNBQVM7UUFDVCwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUN2QyxXQUFXO1FBQ1gsd0NBQXdDO1FBQ3hDLFFBQVE7UUFDUixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQiwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDcEQ7YUFBTTtZQUNILFFBQVE7WUFDUixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxRDtRQUNELFFBQVE7UUFDUixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsdUJBQWdCLENBQUMsTUFBTSxDQUFBO0lBQ3pELENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUJHO0lBQ0gsbUNBQWEsR0FBYixVQUFjLElBQVM7UUFDbkIsSUFBSSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksdUJBQWdCLENBQUMsTUFBTTtZQUFFLE9BQU07UUFDbEUscUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHVCQUFnQixDQUFDLFFBQVEsQ0FBQTtRQUN2RCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV0RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzlCLElBQU0sS0FBSyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ2pELElBQUksSUFBSSxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdDLElBQUksSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLElBQUksRUFBRTtZQUNaLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1NBQ25CO1FBQ0QsSUFBSSxLQUFLLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLElBQU0sSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUE7WUFDZCxJQUFJLElBQUksRUFBRTtnQkFDTixHQUFHLEdBQUcsSUFBSSxDQUFBO2FBQ2I7aUJBQU07Z0JBQ0gsR0FBRyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO2FBQzNDO1lBQ0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQTtZQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtTQUNyQztJQUNMLENBQUM7SUFFUywrQkFBUyxHQUFuQjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBZSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDM0Usc0JBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHNCQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNyRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsc0JBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25FLHNCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDckUsc0JBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHNCQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBL1BEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7bURBQ007SUFFNUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7a0RBQ0s7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1k7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUTtJQWZWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtUS9CO0lBQUQsa0JBQUM7Q0FuUUQsQUFtUUMsQ0FuUXdDLEVBQUUsQ0FBQyxTQUFTLEdBbVFwRDtrQkFuUW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbCBcclxuXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuLi9CYWxsXCI7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tIFwiLi4vRW5kcG9pbnRcIjtcclxuaW1wb3J0IEVuZW15IGZyb20gXCIuLi9FbmVteVwiO1xyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9FVkVOVCwgRU5VTV9HQU1FX1NUQVRVUywgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4uL0Zvb2RcIjtcclxuaW1wb3J0IHsgTGV2ZWxzIH0gZnJvbSBcIi4uL0xldmVsc1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tIFwiLi4vU3RhdGljSW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgY2xvbmUsIGdldFJhbmRvbSB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9FdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFNka01hbmFnZXIgZnJvbSBcIi4vU2RrTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBsZXQgdHQ6IGFueTtcclxuZGVjbGFyZSBsZXQgd3g6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RhZ2VOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgYmx1ZVByZWZhYjogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcmVkUHJlZmFiOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZvb2RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBlbmRwb2ludFByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuR0FNRV9SRVNUQVJULCB0aGlzLm9uR2FtZVJlc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9uKEVOVU1fR0FNRV9FVkVOVC5HQU1FX05FWFQsIHRoaXMub25HYW1lTmV4dCwgdGhpcylcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub24oRU5VTV9HQU1FX0VWRU5ULkdBTUVfV0lOLCB0aGlzLm9uR2FtZVdpbiwgdGhpcylcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub24oRU5VTV9HQU1FX0VWRU5ULkdBTUVfTE9TRSwgdGhpcy5vbkdhbWVMb3NlLCB0aGlzKVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuUExBWUVSX1NIT09ULCB0aGlzLm9uUGxheWVyU2hvb3QsIHRoaXMpXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9uKEVOVU1fR0FNRV9FVkVOVC5HQU1FX1ZJQlJBVEUsIHRoaXMub25WaWJyYXRlLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDop6blj5HmjK/liqjlip/og73jgIJcclxuICAgICAqIOivpeaWueazlemmluWFiOajgOafpeaYr+WQpuWtmOWcqOWQjeS4ulwidHRcIueahOWFqOWxgOWvueixoe+8jOWmguaenOaYr++8jOWImeiwg+eUqOWFtnZpYnJhdGVMb25n5pa55rOV6L+b6KGM6ZW/5pe26Ze05oyv5Yqo44CCXHJcbiAgICAgKiDlpoLmnpzkuI3lrZjlnKhcInR0XCLlr7nosaHvvIzkvYblrZjlnKjlkI3kuLpcInd4XCLnmoTlhajlsYDlr7nosaHvvIzliJnosIPnlKh3eOeahHZpYnJhdGVMb25n5pa55rOV6L+b6KGM6ZW/5pe26Ze05oyv5Yqo44CCXHJcbiAgICAgKiDov5nnp43lgZrms5XlhbzlrrnkuobkuI3lkIzlubPlj7DmiJbmoYbmnrbkuK3op6blj5HmjK/liqjnmoRBUEnosIPnlKjjgIJcclxuICAgICAqL1xyXG4gICAgb25WaWJyYXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICB0dC52aWJyYXRlTG9uZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdmlicmF0ZUxvbmfosIPnlKjlpLHotKVgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3aW5kb3dbXCJ3eFwiXSkge1xyXG4gICAgICAgICAgICB3eC52aWJyYXRlTG9uZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdmlicmF0ZUxvbmfosIPnlKjlpLHotKVgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T5ri45oiP6YeN5paw5ZCv5Yqo5pe26LCD55So5q2k5pa55rOV44CCXHJcbiAgICAgKiBcclxuICAgICAqIOacrOaWueazlei0n+i0o+inpuWPkeaVsOaNrueuoeeQhuWZqOeahOmHjee9ruaTjeS9nO+8jOW5tuWIneWni+WMlua4uOaIj+OAglxyXG4gICAgICog5a6D5piv5ri45oiP6YeN5ZCv5rWB56iL5Lit55qE5YWz6ZSu5q2l6aqk77yM56Gu5L+d5ri45oiP54q25oCB6KKr5q2j56Gu6YeN572u77yMXHJcbiAgICAgKiDkuLrmlrDnmoTmuLjmiI/lvqrnjq/mj5DkvpvlubLlh4DnmoTmlbDmja7njq/looPjgIJcclxuICAgICAqL1xyXG4gICAgb25HYW1lUmVzdGFydCgpIHtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yZXNldCgpXHJcbiAgICAgICAgdGhpcy5pbml0R2FtZSgpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhua4uOaIj+i/m+WFpeS4i+S4gOWFs+eahOaTjeS9nOOAglxyXG4gICAgICog5b2T5YmN5YWz5Y2h5a6M5oiQ5bm25ruh6Laz6L+b5YWl5LiL5LiA5YWz55qE5p2h5Lu25ZCO77yM5q2k5pa55rOV5bCG6KKr6LCD55So44CCXHJcbiAgICAgKiDlroPkuLvopoHotJ/otKPmm7TmlrDlhbPljaHov5vluqbjgIHph43nva7mlbDmja7lubbliJ3lp4vljJbkuIvkuIDlhbPnmoTmuLjmiI/jgIJcclxuICAgICAqL1xyXG4gICAgb25HYW1lTmV4dCgpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgPCBMZXZlbHMubGVuZ3RoKSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbCsrXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVzZXQoKVxyXG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbmuLjmiI/og5zliKnml7bnmoTpgLvovpHjgIJcclxuICAgICAqIOWBnOatouiusOW9lea4uOaIj++8jOajgOafpeaYr+WQpuWujOaIkOaJgOacieWFs+WNoe+8jOabtOaWsOa4uOaIj+eKtuaAge+8jOaSreaUvuiDnOWIqemfs+aViO+8jOW5tuaYvuekuuebuOW6lOeahFVJ44CCXHJcbiAgICAgKiDlpoLmnpzlvZPliY3lhbPljaHmmK/mnIDpq5jlhbPljaHvvIzliJnmm7TmlrDmnIDpq5jlhbPljaHorrDlvZXjgIJcclxuICAgICAqL1xyXG4gICAgb25HYW1lV2luKCkge1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zdG9wUmVjb3JkKCk7XHJcbiAgICAgICAgbGV0IG1heExldmVsID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgKyAxXHJcbiAgICAgICAgaWYgKG1heExldmVsID4gTGV2ZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtYXhMZXZlbCA9IExldmVscy5sZW5ndGhcclxuICAgICAgICAgICAgLy8g5a6M5oiQ5omA5pyJ5YWz5Y2hXHJcbiAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zaG93Q29tcGxldGVOb3RpY2UodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2hvd0NvbXBsZXRlTm90aWNlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLldJTlxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLldJTilcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5XSU4pXHJcblxyXG4gICAgICAgIGlmIChtYXhMZXZlbCA+IERhdGFNYW5hZ2VyLmluc3RhbmNlLm1heExldmVsKSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLm1heExldmVsID0gbWF4TGV2ZWxcclxuICAgICAgICAgICAgLy8g5o6S6KGM5qac6K6+572uXHJcbiAgICAgICAgICAgIC8vIFNka01hbmFnZXIuaW5zdGFuY2Uuc2V0UmFua1Njb3JlKG1heExldmVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5ri45oiP55qE5Ye95pWw77yM6LSf6LSj6K6+572u5ri45oiP55qE5Yid5aeL54q25oCB77yM5YyF5ous5Yqg6L295YWz5Y2h5pWw5o2u44CB5Yib5bu65ri45oiP5Zy65pmv5Lit55qE5a+56LGh562J44CCXHJcbiAgICAgKi9cclxuICAgIG9uR2FtZUxvc2UobXNnOiBzdHJpbmcgPSAn6KKr5oqi5patJykge1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zdG9wUmVjb3JkKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5MT1NFXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuTE9TRSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TG9zZVRpdGxlKG1zZylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5MT1NFKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRHYW1lKCkge1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9IEVOVU1fR0FNRV9TVEFUVVMuSU5JVFxyXG4gICAgICAgIGxldCBsZXZlbCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsXHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50RGF0YVxyXG4gICAgICAgIGlmICghY3VycmVudCkge1xyXG4gICAgICAgICAgICAvLyDlhbPljaHmlbDmja5cclxuICAgICAgICAgICAgaWYgKGxldmVsID4gTGV2ZWxzLmxlbmd0aCkgbGV2ZWwgPSBMZXZlbHMubGVuZ3RoXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjbG9uZShMZXZlbHNbbGV2ZWwgLSAxXSlcclxuICAgICAgICAgICAgaWYgKCFjdXJyZW50WydlbmRwb2ludCddKSByZXR1cm5cclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgPSBsZXZlbFxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50RGF0YSA9IGN1cnJlbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBgJHtsZXZlbH1gXHJcbiAgICAgICAgLy8g5riF6Zmk6IqC54K55L+h5oGvXHJcbiAgICAgICAgdGhpcy5zdGFnZU5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIC8vIOWIneWni+WMluiTneaWuVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFsnYmx1ZSddLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjdXJyZW50WydibHVlJ11baV1cclxuICAgICAgICAgICAgY29uc3QgYmx1ZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmx1ZVByZWZhYlswXSlcclxuICAgICAgICAgICAgYmx1ZS5wYXJlbnQgPSB0aGlzLnN0YWdlTm9kZVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHg6IGRhdGEueCwgeTogZGF0YS55LCBhbmdsZTogZGF0YS5hbmdsZSwgc3RhdHVzOiBkYXRhLnN0YXR1cyB9XHJcbiAgICAgICAgICAgIGJsdWUuZ2V0Q29tcG9uZW50KFBsYXllcikuaW5pdChwYXJhbXMpXHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOmYsuWuiOmYn+WRmFxyXG4gICAgICAgICAgICBpZiAoZGF0YVsncmVkJ10gJiYgZGF0YVsncmVkJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbJ3JlZCddLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZFByZWZhYikgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWREYXRhID0gZGF0YVsncmVkJ11bal1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWQ6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlZFByZWZhYlswXSlcclxuICAgICAgICAgICAgICAgICAgICByZWQucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWRDb21wID0gcmVkLmdldENvbXBvbmVudChFbmVteSlcclxuICAgICAgICAgICAgICAgICAgICByZWRDb21wLnNldFBhcmVudChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZENvbXAuaW5pdChyZWREYXRhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOWinuebiumBk+WFt1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsnZm9vZCddICYmIGRhdGFbJ2Zvb2QnXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGF0YVsnZm9vZCddLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvb2RQcmVmYWIpIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9vZERhdGEgPSBkYXRhWydmb29kJ11ba11cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb29kOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5mb29kUHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb2QucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWRDb21wID0gZm9vZC5nZXRDb21wb25lbnQoRm9vZClcclxuICAgICAgICAgICAgICAgICAgICByZWRDb21wLnNldFBhcmVudChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZENvbXAuaW5pdChmb29kRGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnu4jngrnnkIPpl6hcclxuICAgICAgICBjb25zdCBlbmRwb2ludDogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5kcG9pbnRQcmVmYWIpXHJcbiAgICAgICAgZW5kcG9pbnQucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICBlbmRwb2ludC5nZXRDb21wb25lbnQoRW5kcG9pbnQpLmluaXQoeyB4OiBjdXJyZW50WydlbmRwb2ludCddLngsIHk6IGN1cnJlbnRbJ2VuZHBvaW50J10ueSwgYW5nbGU6IGN1cnJlbnRbJ2VuZHBvaW50J10uYW5nbGUgfSlcclxuICAgICAgICBpZiAoY3VycmVudFsnZW5kcG9pbnQnXVsncmVkJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFsnZW5kcG9pbnQnXVsncmVkJ10ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZERhdGEgPSBjdXJyZW50WydlbmRwb2ludCddWydyZWQnXVtqXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVkOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5yZWRQcmVmYWJbMF0pXHJcbiAgICAgICAgICAgICAgICByZWQucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICAgICAgICAgIHJlZC5nZXRDb21wb25lbnQoRW5lbXkpLmluaXQocmVkRGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDok53mlrnovazlkJFcclxuICAgICAgICBjb25zdCBibHVlUmVhZHkgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRCbHVlUmVhZHkoKVxyXG4gICAgICAgIGNvbnN0IGJsdWVOZXh0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Qmx1ZU5leHQoKVxyXG4gICAgICAgIGlmIChibHVlTmV4dCkge1xyXG4gICAgICAgICAgICBibHVlUmVhZHkudHVyblRvKGJsdWVOZXh0LngsIGJsdWVOZXh0LnkpXHJcbiAgICAgICAgICAgIGJsdWVOZXh0LnR1cm5UbyhibHVlUmVhZHkueCwgYmx1ZVJlYWR5LnkpXHJcbiAgICAgICAgICAgIGJsdWVOZXh0LnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICAvLyDmkYTlg4/mnLrnp7vliqhcclxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULkNBTUVSQV9NT1ZFLCB7IGN1cnJlbnQ6IGJsdWVSZWFkeSwgbmV4dDogYmx1ZU5leHQgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBibHVlUmVhZHkudHVyblRvKGVuZHBvaW50LngsIGVuZHBvaW50LnkpXHJcbiAgICAgICAgICAgIC8vIOaRhOWDj+acuuenu+WKqFxyXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHsgY3VycmVudDogYmx1ZVJlYWR5LCBuZXh0OiBlbmRwb2ludCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliJ3lp4vljJbmioDog73mnaFcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0UG93ZXJCYXIoKVxyXG4gICAgICAgIC8vIOiuvue9ruWvueaImOmYn+WQjVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRUZWFtTGFiZWwoKVxyXG4gICAgICAgIC8vIC8vIOiuvue9ruaKgOiDveeCuVxyXG4gICAgICAgIC8vIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRQcm9wTnVtKClcclxuICAgICAgICAvLyDmmK/lkKbmnInmj5DnpLpcclxuICAgICAgICBpZiAoY3VycmVudFsnaXNUaXAnXSkge1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0VGlwKGxldmVsKVxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5USVApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6K6h5pe25Zmo5byA5ZCvXHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5USU1FUl9TVEFSVClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5a6M5q+VXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkdcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuWwhOmXqFxyXG4gICAgICog6aaW5YWI77yM5a6D5qOA5p+l5ri45oiP54q25oCB5piv5ZCm5Li66L+Q6KGM5Lit77yIUlVOSU5H77yJ77yM5aaC5p6c5LiN5piv77yM5YiZ55u05o6l6L+U5Zue77yM5LiN5omn6KGM5Lu75L2V5pON5L2c44CCXHJcblxyXG4gICAgICAgIOaOpeS4i+adpe+8jOWwhua4uOaIj+eKtuaAgeiuvue9ruS4uuWwhOWHu+eKtuaAge+8iFNIT09USU5H77yJ44CCXHJcblxyXG4gICAgICAgIOeEtuWQju+8jOaSreaUvuW8gOeBq+WjsOmfs++8iEFVRElPX0NMSVAuU0hPT1TvvInjgIJcclxuXHJcbiAgICAgICAg5LuO5Lyg5YWl55qE5pWw5o2u5Lit6I635Y+W5bCE5Ye76L+b5bqm77yIcHJvZ3Jlc3PvvInjgIJcclxuXHJcbiAgICAgICAg6I635Y+W6JOd6Imy6Zif5LyN55qE5YeG5aSH54q25oCB77yIZ2V0Qmx1ZVJlYWR577yJ44CCXHJcblxyXG4gICAgICAgIOiOt+WPluiTneiJsumYn+S8jeeahOS4i+S4gOS4quebruagh+S9jee9ru+8iGdldEJsdWVOZXh077yJ77yM5aaC5p6c5Lyg5YWl55qE5pWw5o2u5Lit5YyF5ZCr5LiL5LiA5Liq55uu5qCH5L2N572u77yIbmV4dO+8ie+8jOWImeS9v+eUqOivpeS9jee9ruS7o+abv+m7mOiupOeahOS4i+S4gOS4quebruagh+S9jee9ruOAglxyXG5cclxuICAgICAgICDlpoLmnpzok53oibLpmJ/kvI3lt7Llh4blpIflsLHnu6rvvIzliJnlrp7kvovljJbkuIDkuKrotrPnkIPlr7nosaHvvIhiYWxs77yJ77yM5bCG5YW254i25a+56LGh6K6+572u5Li66Iie5Y+w6IqC54K577yIc3RhZ2VOb2Rl77yJ44CCXHJcblxyXG4gICAgICAgIOWIneWni+WMlui2s+eQg+WvueixoeeahOS9jee9ru+8iHgsIHnvvInjgIJcclxuXHJcbiAgICAgICAg5qC55o2u5piv5ZCm5pyJ5LiL5LiA5Liq55uu5qCH5L2N572u77yM56Gu5a6a6Laz55CD55qE56e75Yqo57uI54K544CCXHJcblxyXG4gICAgICAgIOiwg+eUqOi2s+eQg+WvueixoeeahOenu+WKqOaWueazle+8iG1vdmXvvInvvIzkvKDlhaXotbfngrnjgIHnu4jngrnlkozlsITlh7vov5vluqbvvIzkvb/otrPnkIPlvIDlp4vnp7vliqjjgIJcclxuICAgICAqL1xyXG4gICAgb25QbGF5ZXJTaG9vdChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzICE9IEVOVU1fR0FNRV9TVEFUVVMuUlVOSU5HKSByZXR1cm5cclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLlNIT09USU5HXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU0hPT1QpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Qmx1ZVJlYWR5KClcclxuICAgICAgICBsZXQgbmV4dCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldEJsdWVOZXh0KClcclxuICAgICAgICBpZiAoZGF0YT8ubmV4dCkge1xyXG4gICAgICAgICAgICBuZXh0ID0gZGF0YS5uZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFydCkge1xyXG4gICAgICAgICAgICAvLyBzdGFydC5zaG9vdCgpXHJcbiAgICAgICAgICAgIC8vIOenu+WKqOeahOi2s+eQg1xyXG4gICAgICAgICAgICBjb25zdCBiYWxsOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYWxsUHJlZmFiKVxyXG4gICAgICAgICAgICBiYWxsLnBhcmVudCA9IHRoaXMuc3RhZ2VOb2RlXHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBudWxsXHJcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBuZXh0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRFbmRwb2ludCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmFsbENvbSA9IGJhbGwuZ2V0Q29tcG9uZW50KEJhbGwpXHJcbiAgICAgICAgICAgIGJhbGxDb20uaW5pdCh7IHg6IHN0YXJ0LngsIHk6IHN0YXJ0LnkgfSlcclxuICAgICAgICAgICAgYmFsbENvbS5tb3ZlKHN0YXJ0LCBlbmQsIHByb2dyZXNzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULkdBTUVfUkVTVEFSVCwgdGhpcy5vbkdhbWVSZXN0YXJ0KVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULkdBTUVfTkVYVCwgdGhpcy5vbkdhbWVOZXh0KVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULkdBTUVfV0lOLCB0aGlzLm9uR2FtZVdpbilcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub2ZmKEVOVU1fR0FNRV9FVkVOVC5HQU1FX0xPU0UsIHRoaXMub25HYW1lTG9zZSlcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub2ZmKEVOVU1fR0FNRV9FVkVOVC5QTEFZRVJfU0hPT1QsIHRoaXMub25QbGF5ZXJTaG9vdClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/Baselayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf889KxgjhACazYM1k9EYf4', 'Baselayer');
// script/layer/Baselayer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseLayer = /** @class */ (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseLayer.prototype.show = function () {
        this.node.active = true;
    };
    BaseLayer.prototype.hide = function () {
        this.node.active = false;
    };
    BaseLayer = __decorate([
        ccclass
    ], BaseLayer);
    return BaseLayer;
}(cc.Component));
exports.default = BaseLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcQmFzZWxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFTQSxDQUFDO0lBUEcsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUM1QixDQUFDO0lBUmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FTN0I7SUFBRCxnQkFBQztDQVRELEFBU0MsQ0FUc0MsRUFBRSxDQUFDLFNBQVMsR0FTbEQ7a0JBVG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/ResourceManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9a63wBhkNJiZvYfD03Pj96', 'ResourceManager');
// script/manager/ResourceManager.ts

"use strict";
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
// Created by carolsail
var Enum_1 = require("./../Enum");
var DataManager_1 = require("./DataManager");
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.clipMap = {};
        this.flagMap = {};
    }
    ResourceManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(ResourceManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    /**
        * 异步加载指定类型的资源。
        * @param type 资源类型，使用ENUM_RESOURCE_TYPE枚举定义。
        * @returns 返回一个Promise，表示加载过程的完成。
        */
    ResourceManager.prototype.loadRes = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var rate = DataManager_1.default.instance.loadingRate;
                        switch (type) {
                            case Enum_1.ENUM_RESOURCE_TYPE.AUDIO:
                                cc.resources.loadDir('audio', cc.AudioClip, function (finished, total) {
                                    // 资源加载进度
                                    // 保留两位小数
                                    var loadingRate = Math.floor((rate + 0.5 * finished / total) * 100) / 100;
                                    DataManager_1.default.instance.loadingRate = Math.max(loadingRate, DataManager_1.default.instance.loadingRate);
                                }, function (err, assets) {
                                    if (err)
                                        reject && reject();
                                    var asset;
                                    for (var i = 0; i < assets.length; i++) {
                                        asset = assets[i];
                                        if (!_this.clipMap[asset.name])
                                            _this.clipMap[asset.name] = asset;
                                    }
                                    resolve && resolve();
                                });
                                break;
                            case Enum_1.ENUM_RESOURCE_TYPE.FLAG:
                                cc.resources.loadDir('flag', cc.SpriteFrame, function (finished, total) {
                                    // 资源加载进度
                                    // 保留两位小数
                                    var loadingRate = Math.floor((rate + 0.5 * finished / total) * 100) / 100;
                                    DataManager_1.default.instance.loadingRate = Math.max(loadingRate, DataManager_1.default.instance.loadingRate);
                                }, function (err, assets) {
                                    if (err)
                                        reject && reject();
                                    var asset;
                                    for (var i = 0; i < assets.length; i++) {
                                        asset = assets[i];
                                        if (!_this.flagMap[asset.name])
                                            _this.flagMap[asset.name] = asset;
                                    }
                                    resolve && resolve();
                                });
                                break;
                        }
                    })];
            });
        });
    };
    ResourceManager.prototype.getClip = function (name) {
        return this.clipMap[name];
    };
    ResourceManager.prototype.getFlag = function (name) {
        return this.flagMap[name];
    };
    ResourceManager._instance = null;
    return ResourceManager;
}());
exports.default = ResourceManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxSZXNvdXJjZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7QUFDdkIsa0NBQStDO0FBQy9DLDZDQUF3QztBQUV4QztJQUFBO1FBRVcsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUE7SUFtRXZCLENBQUM7SUEvRFUsMkJBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQW1CLENBQUE7UUFDOUMsQ0FBQzs7O09BQUE7SUFDRDs7OztVQUlNO0lBQ08saUNBQU8sR0FBcEIsVUFBcUIsSUFBd0I7Ozs7Z0JBQ3pDLHNCQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ3JDLElBQU0sSUFBSSxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQTt3QkFDN0MsUUFBUSxJQUFJLEVBQUU7NEJBQ1YsS0FBSyx5QkFBa0IsQ0FBQyxLQUFLO2dDQUN6QixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLFFBQWdCLEVBQUUsS0FBYTtvQ0FDeEUsU0FBUztvQ0FDVCxTQUFTO29DQUNULElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7b0NBQzNFLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQ0FDOUYsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07b0NBQ1gsSUFBSSxHQUFHO3dDQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQTtvQ0FDM0IsSUFBSSxLQUFVLENBQUE7b0NBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0NBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2xCLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NENBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFBO3FDQUNsRTtvQ0FDRCxPQUFPLElBQUksT0FBTyxFQUFFLENBQUE7Z0NBQ3hCLENBQUMsQ0FBQyxDQUFBO2dDQUNGLE1BQUs7NEJBQ1QsS0FBSyx5QkFBa0IsQ0FBQyxJQUFJO2dDQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLFFBQWdCLEVBQUUsS0FBYTtvQ0FDekUsU0FBUztvQ0FDVCxTQUFTO29DQUNULElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7b0NBQzNFLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQ0FDOUYsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07b0NBQ1gsSUFBSSxHQUFHO3dDQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQTtvQ0FDM0IsSUFBSSxLQUFVLENBQUE7b0NBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0NBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2xCLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NENBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFBO3FDQUNsRTtvQ0FDRCxPQUFPLElBQUksT0FBTyxFQUFFLENBQUE7Z0NBQ3hCLENBQUMsQ0FBQyxDQUFBO2dDQUNGLE1BQUs7eUJBQ1o7b0JBQ0wsQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBRU0saUNBQU8sR0FBZCxVQUFlLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTSxpQ0FBTyxHQUFkLFVBQWUsSUFBWTtRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQWhFYyx5QkFBUyxHQUFRLElBQUksQ0FBQTtJQWlFeEMsc0JBQUM7Q0F0RUQsQUFzRUMsSUFBQTtrQkF0RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5pbXBvcnQgeyBFTlVNX1JFU09VUkNFX1RZUEUgfSBmcm9tICcuLy4uL0VudW0nO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvdXJjZU1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyBjbGlwTWFwID0ge31cclxuICAgIHB1YmxpYyBmbGFnTWFwID0ge31cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFueSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oKTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZTxSZXNvdXJjZU1hbmFnZXI+KClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICog5byC5q2l5Yqg6L295oyH5a6a57G75Z6L55qE6LWE5rqQ44CCXHJcbiAgICAgICAgKiBAcGFyYW0gdHlwZSDotYTmupDnsbvlnovvvIzkvb/nlKhFTlVNX1JFU09VUkNFX1RZUEXmnprkuL7lrprkuYnjgIJcclxuICAgICAgICAqIEByZXR1cm5zIOi/lOWbnuS4gOS4qlByb21pc2XvvIzooajnpLrliqDovb3ov4fnqIvnmoTlrozmiJDjgIJcclxuICAgICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGxvYWRSZXModHlwZTogRU5VTV9SRVNPVVJDRV9UWVBFKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmF0ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlXHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFTlVNX1JFU09VUkNFX1RZUEUuQVVESU86XHJcbiAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoJ2F1ZGlvJywgY2MuQXVkaW9DbGlwLCAoZmluaXNoZWQ6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDotYTmupDliqDovb3ov5vluqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L+d55WZ5Lik5L2N5bCP5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdSYXRlID0gTWF0aC5mbG9vcigocmF0ZSArIDAuNSAqIGZpbmlzaGVkIC8gdG90YWwpICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IE1hdGgubWF4KGxvYWRpbmdSYXRlLCBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCBhc3NldHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0ICYmIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhc3NldDogYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCA9IGFzc2V0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGlwTWFwW2Fzc2V0Lm5hbWVdKSB0aGlzLmNsaXBNYXBbYXNzZXQubmFtZV0gPSBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFTlVNX1JFU09VUkNFX1RZUEUuRkxBRzpcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcignZmxhZycsIGNjLlNwcml0ZUZyYW1lLCAoZmluaXNoZWQ6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDotYTmupDliqDovb3ov5vluqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L+d55WZ5Lik5L2N5bCP5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdSYXRlID0gTWF0aC5mbG9vcigocmF0ZSArIDAuNSAqIGZpbmlzaGVkIC8gdG90YWwpICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IE1hdGgubWF4KGxvYWRpbmdSYXRlLCBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCBhc3NldHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0ICYmIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhc3NldDogYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCA9IGFzc2V0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5mbGFnTWFwW2Fzc2V0Lm5hbWVdKSB0aGlzLmZsYWdNYXBbYXNzZXQubmFtZV0gPSBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2xpcChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlwTWFwW25hbWVdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZsYWcobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhZ01hcFtuYW1lXVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/SdkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e65f5PAdAxIfKGNcYyplzVz', 'SdkManager');
// script/manager/SdkManager.ts

"use strict";
/**
 * 广告sdk & 网络控制
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Toast = require('../Toast.js');
var SdkManager = /** @class */ (function () {
    function SdkManager() {
        this.isdebug = false; //是测试模式  该模式 无广告 无网络
        this.videoRecordingState = 0;
        this.video_recorder = null;
        this.videoStartTime = null;
        this.videoPath = null;
        this.videoIsExist = 0; //视频是否存在 默认存在
        this.recorderTime = 120; //视频录制时间
        this.videoAd = null; //激励视频
        this.chaPingErr = false; //插屏报错（触发频繁限制等）
        this.chaPing = null;
        this.bannerAd = null; //横屏广告
        this.videoCallBack = null; //激励视频成功回调
        this.videoFailCallBack = null; //激励视频失败回调
        this.isshowbanner = false;
        //platformSdk:any = tt //字节跳动sdk
        this.tt_info = {
            gamename: "字节游戏名称",
            shareTitle: '迷你世界杯，好玩又刺激',
            appId: 'tt6790112df8a1500202',
            videoId: '771b782kleif62q61h',
            chapingId: 'chapingid',
            bannerId: "bannerid",
            templateId: ['', '', '', ''],
            videoTopics: ['', ''],
            appSecret: '',
        };
        this.ks_info = {
            gamename: "",
            shareTitle: '',
            appId: '',
            bannerId: "",
            videoId: '',
            chapingId: '',
            templateId: ['', '', '', ''],
            videoTopics: ['', ''],
            appSecret: '',
        };
        this.wx_info = {
            gamename: "微信游戏名称",
            shareTitle: '迷你世界杯，好玩又刺激',
            appId: 'wx338b3042ae221abb',
            bannerId: "bannerid",
            videoId: 'videoid',
            videoId2: 'videoid',
            chapingId: 'chapingid',
            gezi: 'geziid',
            NativeAd: {
                juzhen: 'juzhenid',
                duogezi: 'duogeziid',
                dangezi: 'dangeziid'
            },
            templateId: ['', '', '', ''],
            videoTopics: ['', '']
        };
        this.url = 'https://www.xxxxx.top/sgame';
        this.web_url = ' https://www.xxxxx.top/pv';
    }
    Object.defineProperty(SdkManager, "instance", {
        get: function () {
            if (null == this._instance) {
                this._instance = new SdkManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SdkManager.prototype, "platform", {
        get: function () {
            if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
                this._platform = 'tt';
                return this._platform;
            }
            else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                this._platform = 'wx';
                return this._platform;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SdkManager.prototype, "plaform", {
        set: function (str) {
            this._platform = str;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取平台 类
     */
    SdkManager.prototype.getPlatformClass = function () {
        var p_class = null;
        switch (this.platform) {
            case 'tt':
                //@ts-ignore
                p_class = tt;
                break;
            case 'op':
                //@ts-ignore
                p_class = qg;
                break;
            case 'wx':
                //@ts-ignore
                p_class = wx;
                break;
            case 'ks':
                //@ts-ignore
                p_class = ks;
                break;
        }
        return p_class;
    };
    /**
     * 获取分享标题
     */
    SdkManager.prototype.getShareTitle = function () {
        var title = '';
        switch (this.platform) {
            case 'tt':
                title = this.tt_info.shareTitle;
                break;
            case 'ks':
                title = this.ks_info.shareTitle;
                break;
            case 'wx':
                title = this.wx_info.shareTitle;
                break;
        }
        return title;
    };
    /**
     * 获取名字
     */
    SdkManager.prototype.getName = function () {
        var name = '';
        switch (this.platform) {
            case 'tt':
                name = this.tt_info.gamename;
                break;
            case 'ks':
                name = this.ks_info.gamename;
                break;
            case 'wx':
                name = this.wx_info.gamename;
                break;
        }
        return name;
    };
    /**
     * 获取appid
     */
    SdkManager.prototype.getAppId = function () {
        var appid = '';
        switch (this.platform) {
            case 'tt':
                appid = this.tt_info.appId;
                break;
            case 'ks':
                appid = this.ks_info.appId;
                break;
            case 'wx':
                appid = this.wx_info.appId;
                break;
        }
        return appid;
    };
    /**
     * 获取AppSecret
     */
    SdkManager.prototype.getAppSecret = function () {
        var appSecret = '';
        switch (this.platform) {
            case 'tt':
                appSecret = this.tt_info.appSecret;
                break;
            case 'ks':
                break;
        }
        return appSecret;
    };
    /**
     * 获取bannerid
     */
    SdkManager.prototype.getBannerId = function () {
        var bannerID = '';
        switch (this.platform) {
            case 'tt':
                bannerID = this.tt_info.bannerId;
                break;
            case 'ks':
                bannerID = this.ks_info.bannerId;
                break;
            case 'wx':
                bannerID = this.wx_info.bannerId;
                break;
        }
        return bannerID;
    };
    /**
     * 获取videoid
     */
    SdkManager.prototype.getVideoId = function () {
        var videoId = '';
        switch (this.platform) {
            case 'tt':
                videoId = this.tt_info.videoId;
                break;
            case 'ks':
                videoId = this.ks_info.videoId;
                break;
            case 'wx':
                videoId = this.wx_info.videoId;
                break;
        }
        return videoId;
    };
    SdkManager.prototype.getVideoId2 = function () {
        if (this.platform == 'wx') {
            var videoId = '';
            videoId = this.wx_info.videoId2;
            return videoId;
        }
    };
    /**
     * 获取id
     * @param type
     */
    SdkManager.prototype.getNativeAd = function (type) {
        var id = '';
        switch (this.platform) {
            case 'tt':
                break;
            case 'wx':
                if (type == 0) {
                    id = this.wx_info.NativeAd.juzhen;
                }
                else if (type == 1) {
                    id = this.wx_info.NativeAd.duogezi;
                }
                else if (type == 2) {
                    id = this.wx_info.NativeAd.dangezi;
                    console.log('广告id', id);
                }
                break;
        }
        return id;
    };
    /**
     * 获取插屏广告id
     */
    SdkManager.prototype.getChaPingId = function () {
        var chapingId = '';
        switch (this.platform) {
            case 'tt':
                chapingId = this.tt_info.chapingId;
                break;
            case 'ks':
                chapingId = this.ks_info.chapingId;
                break;
            case 'wx':
                chapingId = this.wx_info.chapingId;
                break;
        }
        return chapingId;
    };
    /**
     * 获取分享审核id
     */
    SdkManager.prototype.getTemplateId = function () {
        var templateId = '';
        var id_lenth = this.tt_info.templateId.length;
        var randIndex = this.getRangeRandom(0, id_lenth);
        switch (this.platform) {
            case 'tt':
                templateId = this.tt_info.templateId[randIndex];
                break;
            case 'wx':
                templateId = this.wx_info.templateId[randIndex];
                break;
        }
        return templateId;
    };
    /**
     * 游戏分享
     */
    SdkManager.prototype.gameShare = function (callBack) {
        if (this.isdebug)
            return callBack();
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            //console.log('游戏分享')
            var title = this.getShareTitle();
            var templateId = this.getTemplateId();
            this.getPlatformClass().shareAppMessage({
                title: title,
                templateId: templateId,
                query: "",
                success: function () {
                    //console.log("分享成功");
                    callBack();
                },
                fail: function (e) {
                    //console.log("分享失败");
                }
            });
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 分享到好友
     * @param callback
     */
    SdkManager.prototype.shareGameToFriend = function (callback, note) {
        if (this.isdebug)
            return callback();
        var notestr = '你的好友邀请你一起战斗';
        if (note)
            notestr = note;
        var self = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var title = this.getName();
            this.getPlatformClass().shareAppMessage({
                channel: "invite",
                title: title,
                desc: notestr,
                imageUrl: "",
                query: "",
                success: function () {
                    //console.log("分享成功");
                },
                fail: function (e) {
                    //console.log("分享失败");
                },
            });
        }
    };
    /**
     *  banner 广告显示
     */
    SdkManager.prototype.bannerAdShow = function () {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            if (self.bannerAd == null) {
                var winSize_1 = this.getPlatformClass().getSystemInfoSync();
                var bannerWidth = winSize_1.windowWidth;
                var bannerHeight = 100;
                // // 广告
                var bannerID = this.getBannerId();
                self.bannerAd = this.getPlatformClass().createBannerAd({
                    adUnitId: bannerID,
                    style: {
                        left: (winSize_1.windowWidth - bannerWidth) / 2,
                        top: winSize_1.windowHeight - bannerHeight,
                        width: bannerWidth,
                        height: bannerHeight,
                    }
                });
                self.bannerAd.onResize(function (res) {
                    self.bannerAd.style.left = (winSize_1.windowWidth - res.width) / 2;
                    self.bannerAd.style.top = winSize_1.windowHeight - res.height;
                });
                self.bannerAd.onError(function (res) {
                    //console.log(res);
                });
            }
            if (self.bannerAd != null) {
                self.bannerAd.show();
            }
        }
        else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            if (self.bannerAd == null) {
                self.isshowbanner = false;
                var winSize_2 = this.getPlatformClass().getSystemInfoSync();
                var bannerWidth = winSize_2.windowWidth;
                var bannerHeight = 100;
                // // 广告
                var bannerID = this.getBannerId();
                self.bannerAd = this.getPlatformClass().createBannerAd({
                    adUnitId: bannerID,
                    adIntervals: 30,
                    style: {
                        left: (winSize_2.windowWidth - bannerWidth) / 2,
                        top: winSize_2.windowHeight - bannerHeight,
                        width: bannerWidth,
                        height: bannerHeight,
                    }
                });
                self.bannerAd.onResize(function (res) {
                    self.bannerAd.style.left = (winSize_2.windowWidth - res.width) / 2;
                    self.bannerAd.style.top = winSize_2.windowHeight - res.height;
                });
                self.bannerAd.onError(function (res) {
                    console.log('banner失败', res);
                    self.bannerAd = null;
                    //self.bannerAds_Load()
                });
                self.bannerAd.onLoad(function () {
                    console.log('banner 广告加载成功');
                    //gameConfig.isshowbanner = true
                });
            }
            if (self.bannerAd != null) {
                self.bannerAd.show();
            }
        }
    };
    /**
     * banner 广告隐藏
     */
    SdkManager.prototype.bannerAdHide = function () {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools' || sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            if (self.bannerAd != null) {
                self.bannerAd.hide();
            }
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 插屏广告加载
     */
    SdkManager.prototype.chaPingAdLoad = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            var chapingId = this.getChaPingId();
            this.chaPing = this.getPlatformClass().createInterstitialAd({ adUnitId: chapingId });
            this.chaPing.onError(function (err) {
                console.log('插屏广告拉取失败', err);
                //gameConfig.chaPing = wx.createInterstitialAd({ adUnitId: chapingId })
            });
        }
    };
    /**
     * 插屏广告显示
     */
    SdkManager.prototype.chaPingAdShow = function (callback) {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            if (self.chaPingErr == true) {
                if (callback) {
                    this.showToast('资源未准备好...');
                    return callback();
                }
            }
            self.chaPingErr = true;
            setTimeout(function () {
                self.chaPingErr = false;
            }, 45000);
            self.chaPing.show()
                .then(function () {
                if (callback) {
                    callback();
                }
            })
                .catch(function (err) {
                console.error(err);
                self.showToast('资源未准备好...');
                console.log('展示广告失败');
                if (callback) {
                    callback();
                }
                //gameConfig.chaPing = wx.createInterstitialAd({ adUnitId: this.getChaPingId() })
            });
        }
        else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('插屏开发工具不操作');
            if (self.chaPingErr == true)
                return;
            self.chaPingErr = true;
            setTimeout(function () {
                self.chaPingErr = false;
            }, 60000);
            var chapingId = this.getChaPingId();
            if (this.getPlatformClass().createInterstitialAd) {
                var interstitialAd_1 = this.getPlatformClass().createInterstitialAd({
                    adUnitId: chapingId
                });
                interstitialAd_1
                    .load()
                    .then(function () {
                    interstitialAd_1.show();
                })
                    .catch(function (err) {
                    console.log(err);
                    setTimeout(function () {
                        interstitialAd_1.load().then(function () { interstitialAd_1.show; });
                    }, 5);
                });
                interstitialAd_1.onClose(function () {
                    if (interstitialAd_1) {
                        interstitialAd_1.destroy();
                    }
                });
            }
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 激励广告加载
     */
    SdkManager.prototype.videoAdLoad = function () {
        if (this.isdebug)
            return;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            var videoId = this.getVideoId2();
            self.videoAd = this.getPlatformClass().createRewardedVideoAd({
                adUnitId: videoId,
            });
            self.videoAd.onError(function (res) {
                console.log('激励视频错误', res);
            });
            self.videoAd.load();
            var endCallBack = function (res) {
                if (res.isEnded == true) {
                    if (self.videoCallBack != null) {
                        console.log('获取奖励');
                        self.videoCallBack();
                    }
                    if (this._type != -1) {
                        self.showToast('已获得');
                    }
                }
                else {
                    if (self.videoFailCallBack != null)
                        self.videoFailCallBack();
                }
                self.isvideoend = true;
                setTimeout(function () {
                    self.checkVideo = false;
                }, 60000);
            };
            self.videoAd.onClose(endCallBack); //绑定结束回调
        }
        else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            var videoId = this.getVideoId();
            this.videoAd = this.getPlatformClass().createRewardedVideoAd({
                adUnitId: videoId,
            });
            this.videoAd.onError(function (res) {
                //console.log('激励视频错误',res)
            });
            this.videoAd.load();
            var endCallBack = function (res) {
                if (res.isEnded == true) {
                    if (self.videoCallBack != null) {
                        //console.log('获取奖励')
                        self.videoCallBack();
                    }
                    if (this._type != -1) {
                        self.showToast('已获得');
                    }
                }
                else {
                    if (self.videoFailCallBack != null)
                        self.videoFailCallBack();
                }
                self.isvideoend = true;
            };
            self.videoAd.onClose(endCallBack); //绑定结束回调
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 展示激励视频
     * 参数1 成功回调
     * 参数2 失败回调 可以省略
     */
    SdkManager.prototype.videoAdShow = function (success, faile, type) {
        if (this.isdebug) {
            if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
                this.showToast('你作弊了!');
            }
            else {
                Toast('你作弊了!');
            }
            return success();
        }
        var self = this;
        if (this.checkVideo == true)
            return this.showToast('勿频繁点击');
        setTimeout(function () {
            self.checkVideo = false;
        }, 1000);
        this.videoCallBack = success;
        this.videoFailCallBack = faile;
        this._type = type;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) { //微信
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            this._type = type;
            if (self.videoAd == null || self.videoAd == undefined) {
                return this.videoCallBack();
            }
            self.videoAd.onError(function (res) {
                console.log('广告出错监听', res);
            });
            // /**展示 */
            self.videoAd
                .show()
                .then(function () {
            })
                .catch(function (err) {
                self.showToast('激励视频播放失败');
                console.log('打印激励视频错误', err);
                // 可以手动加载一次
                self.videoAd.load().then(function () {
                    // 加载成功后需要再显示广告
                    return self.videoAd.show();
                });
            });
        }
        else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            this.checkVideo = true;
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return success(), console.log('开发工具不操作');
            if (this.videoAd == null || this.videoAd == undefined) {
                return this.videoCallBack();
            }
            this.videoAd.onError(function (res) {
                //console.log('广告出错监听', res)
            });
            // /**展示 */
            this.videoAd
                .show()
                .then(function () {
            })
                .catch(function (err) {
                self.showToast('激励视频播放失败');
                //console.log('打印激励视频错误', err)
                // 可以手动加载一次
                self.videoAd.load().then(function () {
                    // 加载成功后需要再显示广告
                    return self.videoAd.show();
                });
            });
        }
        else if (this.platform == 'ks') {
        }
        else {
            self.videoCallBack();
        }
    };
    /**
     * 字节
     * 录制视频开始
     */
    SdkManager.prototype.recordingVideoStart = function () {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            self.videoRecordingState = 1;
            self.videoIsExist = 0;
            self.video_recorder = this.getPlatformClass().getGameRecorderManager();
            self.videoStartTime = Date.parse(new Date().toString()); //Date.parse(new Date());
            //开始回调
            self.video_recorder.onStart(function (res) {
                console.log('录屏开始');
                //console.log(res);
            });
            //开始
            self.video_recorder.start({
                duration: self.recorderTime,
            });
            //录制结束回调
            self.video_recorder.onStop(function (res) {
                self.videoRecordingState = 2;
                self.videoPath = res.videoPath;
                console.log('录屏结束', self.videoPath);
                // do somethine;
            });
            //录制错误回调
            self.video_recorder.onError(function (res) {
                //console.log("录屏error", res)
            });
        }
    };
    /**
     * 录制视频结束
     */
    SdkManager.prototype.recordingVideoEnd = function () {
        if (this.isdebug)
            return;
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            console.log('录屏结束1');
            //gameConfig.shareVideoTips = 0;
            if (self.video_recorder) {
                var endTime = Date.parse(new Date().toString()); //Date.parse(new Date());
                if ((endTime - self.videoStartTime) / 1000 <= 5) {
                    self.videoIsExist = 1;
                }
                else {
                    self.videoIsExist = 0;
                }
                self.video_recorder.stop();
            }
        }
    };
    /**
     * 录制视频分享
     * 参数1 成功回调方法
     * 参数2 失败回调方法
     */
    SdkManager.prototype.recordingVideoShare = function (callBack, failCallBack) {
        if (this.isdebug)
            return callBack();
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            if (self.videoIsExist == 1) {
                self.showToast('录制时间过短');
                return;
            }
            var result = 200;
            self.videoRecordingState = 3;
            console.log(self.videoPath);
            this.getPlatformClass().shareAppMessage({
                channel: 'video',
                title: '',
                imageUrl: '',
                query: '',
                extra: {
                    videoPath: self.videoPath,
                    videoTopics: self.tt_info.videoTopics,
                    createChallenge: true
                },
                success: function () {
                    self.showToast('分享视频成功');
                    callBack();
                    //self.recording_Video_Start()
                },
                fail: function (e) {
                    result = 201;
                    self.showToast('分享视频失败');
                    //console.log('分享失败', e)
                    failCallBack();
                    //self.recording_Video_Start()
                }
            });
        }
        else {
            callBack();
        }
    };
    //录屏是否存在
    SdkManager.prototype.getVideoIsExist = function () {
        return this.videoIsExist;
    };
    /**
     * 添加桌面
     * @param scb
     * @param fcb
     */
    SdkManager.prototype.addShortcut = function (scb, fcb) {
        this.getPlatformClass().addShortcut({
            success: function () {
                this.showToast("添加桌面成功");
                scb();
            },
            fail: function (err) {
                this.showToast("添加桌面失败");
                fcb();
            },
        });
    };
    /**
     * 提示框
     */
    SdkManager.prototype.showToast = function (str) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            this.getPlatformClass().showToast({
                title: str,
                duration: 1000,
                success: function (res) {
                    //console.log(`${res}`);
                },
                fail: function (res) {
                    //console.log(`showToast调用失败`);
                }
            });
        }
        else {
            // Toast(str)
            console.log(str);
        }
    };
    /**
     * 获取不重复的随机数
     * @param minValue 最小值
     * @param maxValue 最大值
     * @param valueNum 随机个数
     */
    SdkManager.prototype.getRandomValueDif = function (minValue, maxValue, valueNum) {
        // 全部随机数值  
        var allNums = new Array;
        // 判断获取随机数个数  
        var size = valueNum ? (valueNum > maxValue - minValue + 1 ? maxValue - minValue + 1 : valueNum) : 1;
        // 生成随机数值区间数组  
        for (var i = minValue, k = 0; i <= maxValue; i++, k++) {
            allNums[k] = i;
        }
        var arr = [];
        // 随机从数组里面取值
        allNums.sort(function () { return 0.5 - Math.random(); });
        for (var j = 0; j < size; j++) {
            var index = Math.floor(Math.random() * allNums.length);
            arr.push(allNums[index]);
            var tmp = allNums[index];
            allNums[index] = allNums[allNums.length - 1];
            allNums[allNums.length - 1] = tmp;
            allNums.pop();
        }
        return arr;
    };
    /**
     * 获取范围内的随机数
     * @param minValue 最小值
     * @param maxValue 最大值
     */
    SdkManager.prototype.getRangeRandom = function (minValue, maxValue) {
        // 获取数组从第一个开始到指定个数的下标区间  
        return this.getRandomValueDif(minValue, maxValue, 1)[0];
    };
    SdkManager.prototype.vibrateShort = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            this.getPlatformClass().vibrateShort();
        }
    };
    /**
     * 跳转其他小游戏
     */
    SdkManager.prototype.turnToApp = function (appId) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].navigateToMiniProgram({
                appId: appId
            });
        }
        else {
            this.showToast('平台错误');
        }
    };
    // 设置排行榜
    SdkManager.prototype.setRankScore = function (value) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].postMessage({
                event: 'setScore',
                score: value
            });
        }
        else {
            this.showToast('平台错误');
        }
    };
    // 获取好友排行榜
    SdkManager.prototype.getRank = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].postMessage({
                event: 'getRank'
            });
        }
        else {
            this.showToast('平台错误');
        }
    };
    // 被动分享
    SdkManager.prototype.gameSharePassive = function () {
        var _this = this;
        // 监听小程序右上角菜单的「转发」按钮
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            // 显示当前页面的转发按钮
            window['wx'].showShareMenu({
                success: function (res) {
                    // console.log('开启被动转发成功！');
                },
                fail: function (res) {
                    // console.log('开启被动转发失败！');
                }
            });
            // 获取当前棋局oneChess信息，JSON.stringfy()后传入query
            window['wx'].onShareAppMessage(function () {
                return {
                    title: _this.getShareTitle()
                };
            });
        }
    };
    // 主动分享
    SdkManager.prototype.gameShareActive = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].shareAppMessage({
                title: this.getShareTitle()
            });
        }
    };
    SdkManager._instance = null;
    return SdkManager;
}());
exports.default = SdkManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxTZGtNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7QUFFRixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFbEM7SUFBQTtRQUtJLFlBQU8sR0FBRyxLQUFLLENBQUEsQ0FBSSxvQkFBb0I7UUF1QnZDLHdCQUFtQixHQUFPLENBQUMsQ0FBQztRQUM1QixtQkFBYyxHQUFPLElBQUksQ0FBQztRQUMxQixtQkFBYyxHQUFPLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQU8sSUFBSSxDQUFDO1FBQ3JCLGlCQUFZLEdBQU8sQ0FBQyxDQUFDLENBQUEsYUFBYTtRQUNsQyxpQkFBWSxHQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVE7UUFDaEMsWUFBTyxHQUFPLElBQUksQ0FBQyxDQUFDLE1BQU07UUFDMUIsZUFBVSxHQUFPLEtBQUssQ0FBQyxDQUFDLGVBQWU7UUFDdkMsWUFBTyxHQUFPLElBQUksQ0FBQTtRQUNsQixhQUFRLEdBQU8sSUFBSSxDQUFDLENBQUMsTUFBTTtRQUMzQixrQkFBYSxHQUFHLElBQUksQ0FBQSxDQUFDLFVBQVU7UUFDL0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFBLENBQUMsVUFBVTtRQUNuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQTtRQUNwQixnQ0FBZ0M7UUFFaEMsWUFBTyxHQUFPO1lBQ1YsUUFBUSxFQUFDLFFBQVE7WUFDakIsVUFBVSxFQUFDLGFBQWE7WUFDeEIsS0FBSyxFQUFDLHNCQUFzQjtZQUM1QixPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztZQUN6QixXQUFXLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1lBQ25CLFNBQVMs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LEtBQUssRUFBRSxTQUFTO2FBQ25CLENBQUMsQ0FBQztTQUNOO2FBQUk7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDUCxxQ0FBZ0IsR0FBaEI7UUFBQSxpQkFtQkM7UUFsQkcsb0JBQW9CO1FBQ3BCLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDckMsY0FBYztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxVQUFDLEdBQVE7b0JBQ2QsNEJBQTRCO2dCQUNoQyxDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQVE7b0JBQ1gsNEJBQTRCO2dCQUNoQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsMkNBQTJDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsT0FBTztvQkFDSCxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRTtpQkFDOUIsQ0FBQTtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsT0FBTztJQUNQLG9DQUFlLEdBQWY7UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQzlCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQTc4QmMsb0JBQVMsR0FBYyxJQUFJLENBQUE7SUE4OEI3QyxpQkFBQztDQS84QkQsQUErOEJDLElBQUE7a0JBLzhCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlub/lkYpzZGsgJiDnvZHnu5zmjqfliLZcclxuICovXHJcblxyXG4gbGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vVG9hc3QuanMnKVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNka01hbmFnZXIge1xyXG4gICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOlNka01hbmFnZXIgPSBudWxsXHJcbiAgICAgaXN2aWRlb2VuZDogYm9vbGVhbjtcclxuICAgICBjaGVja1ZpZGVvOiBib29sZWFuO1xyXG4gICAgIHByaXZhdGUgX3R5cGU6IGFueTtcclxuICAgICBpc2RlYnVnID0gZmFsc2UgICAgLy/mmK/mtYvor5XmqKHlvI8gIOivpeaooeW8jyDml6Dlub/lkYog5peg572R57ucXHJcbiAgICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNka01hbmFnZXIoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgICB9XHJcbiBcclxuICAgICAvL3BsYXRmb3JtOnN0cmluZyA9ICd0dCdcclxuICAgICBwcml2YXRlIF9wbGF0Zm9ybTpzdHJpbmdcclxuICAgICBnZXQgcGxhdGZvcm0oKTpzdHJpbmcge1xyXG4gICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcclxuICAgICAgICAgICAgIHRoaXMuX3BsYXRmb3JtID0gJ3R0J1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtXHJcbiAgICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAgdGhpcy5fcGxhdGZvcm0gPSAnd3gnXHJcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm1cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICBzZXQgcGxhZm9ybShzdHI6IHN0cmluZyl7XHJcbiAgICAgICAgIHRoaXMuX3BsYXRmb3JtID0gc3RyXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgdmlkZW9SZWNvcmRpbmdTdGF0ZTphbnkgPSAwO1xyXG4gICAgIHZpZGVvX3JlY29yZGVyOmFueSA9IG51bGw7XHJcbiAgICAgdmlkZW9TdGFydFRpbWU6YW55ID0gbnVsbDtcclxuICAgICB2aWRlb1BhdGg6YW55ID0gbnVsbDtcclxuICAgICB2aWRlb0lzRXhpc3Q6YW55ID0gMDsvL+inhumikeaYr+WQpuWtmOWcqCDpu5jorqTlrZjlnKhcclxuICAgICByZWNvcmRlclRpbWU6YW55ID0gMTIwOyAvL+inhumikeW9leWItuaXtumXtFxyXG4gICAgIHZpZGVvQWQ6YW55ID0gbnVsbDsgLy/mv4DlirHop4bpopFcclxuICAgICBjaGFQaW5nRXJyOmFueSA9IGZhbHNlOyAvL+aPkuWxj+aKpemUme+8iOinpuWPkemikee5gemZkOWItuetie+8iVxyXG4gICAgIGNoYVBpbmc6YW55ID0gbnVsbFxyXG4gICAgIGJhbm5lckFkOmFueSA9IG51bGw7IC8v5qiq5bGP5bm/5ZGKXHJcbiAgICAgdmlkZW9DYWxsQmFjayA9IG51bGwgLy/mv4DlirHop4bpopHmiJDlip/lm57osINcclxuICAgICB2aWRlb0ZhaWxDYWxsQmFjayA9IG51bGwgLy/mv4DlirHop4bpopHlpLHotKXlm57osINcclxuICAgICBpc3Nob3diYW5uZXIgPSBmYWxzZVxyXG4gICAgIC8vcGxhdGZvcm1TZGs6YW55ID0gdHQgLy/lrZfoioLot7PliqhzZGtcclxuIFxyXG4gICAgIHR0X2luZm86YW55ID0ge1xyXG4gICAgICAgICBnYW1lbmFtZTpcIuWtl+iKgua4uOaIj+WQjeensFwiLFxyXG4gICAgICAgICBzaGFyZVRpdGxlOifov7fkvaDkuJbnlYzmna/vvIzlpb3njqnlj4jliLrmv4AnLFxyXG4gICAgICAgICBhcHBJZDondHQ2NzkwMTEyZGY4YTE1MDAyMDInLCAgXHJcbiAgICAgICAgIHZpZGVvSWQ6ICc3NzFiNzgya2xlaWY2MnE2MWgnLCBcclxuICAgICAgICAgY2hhcGluZ0lkOiAnY2hhcGluZ2lkJywgXHJcbiAgICAgICAgIGJhbm5lcklkOiBcImJhbm5lcmlkXCIsXHJcbiAgICAgICAgIHRlbXBsYXRlSWQ6IFsnJywnJywnJywnJ10sXHJcbiAgICAgICAgIHZpZGVvVG9waWNzOlsnJywnJ10sXHJcbiAgICAgICAgIGFwcFNlY3JldDonJyxcclxuICAgICB9XHJcbiBcclxuICAgICBrc19pbmZvOmFueSA9IHtcclxuICAgICAgICAgZ2FtZW5hbWU6XCJcIixcclxuICAgICAgICAgc2hhcmVUaXRsZTonJyxcclxuICAgICAgICAgYXBwSWQ6JycsIFxyXG4gICAgICAgICBiYW5uZXJJZDogXCJcIixcclxuICAgICAgICAgdmlkZW9JZDogJycsIFxyXG4gICAgICAgICBjaGFwaW5nSWQ6ICcnLCBcclxuICAgICAgICAgdGVtcGxhdGVJZDogWycnLCcnLCcnLCcnXSxcclxuICAgICAgICAgdmlkZW9Ub3BpY3M6WycnLCcnXSxcclxuICAgICAgICAgYXBwU2VjcmV0OicnLFxyXG4gICAgIH1cclxuIFxyXG4gICAgIHd4X2luZm86YW55ID0ge1xyXG4gICAgICAgICBnYW1lbmFtZTpcIuW+ruS/oea4uOaIj+WQjeensFwiLFxyXG4gICAgICAgICBzaGFyZVRpdGxlOifov7fkvaDkuJbnlYzmna/vvIzlpb3njqnlj4jliLrmv4AnLFxyXG4gICAgICAgICBhcHBJZDond3gzMzhiMzA0MmFlMjIxYWJiJywgLy9hcHBpZFxyXG4gICAgICAgICBiYW5uZXJJZDogXCJiYW5uZXJpZFwiLC8v5qiq5bmFXHJcbiAgICAgICAgIHZpZGVvSWQ6J3ZpZGVvaWQnLCAvLzYtLS0zMHMg5r+A5YqxXHJcbiAgICAgICAgIHZpZGVvSWQyOid2aWRlb2lkJywgLy82LS0tNjBzIOa/gOWKsSDkuLvopoHnlKjov5nkuKogICBcclxuICAgICAgICAgY2hhcGluZ0lkOidjaGFwaW5naWQnLCAvL+aPkuWxj1xyXG4gXHJcbiBcclxuICAgICAgICAgZ2V6aTonZ2V6aWlkJywgLy/moLzlrZDmnKrmjqXlhaVcclxuICAgICAgICAgTmF0aXZlQWQ6eyAvLyDljp/nlJ8g5qC85a2Q5pyq5o6l5YWlXHJcbiAgICAgICAgICAgICBqdXpoZW46J2p1emhlbmlkJyxcclxuICAgICAgICAgICAgIGR1b2dlemk6J2R1b2dlemlpZCcsXHJcbiAgICAgICAgICAgICBkYW5nZXppOidkYW5nZXppaWQnXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHRlbXBsYXRlSWQ6IFsnJywnJywnJywnJ10sXHJcbiAgICAgICAgIHZpZGVvVG9waWNzOlsnJywnJ10gICBcclxuICAgICB9XHJcbiBcclxuICAgICB1cmw6c3RyaW5nID0gJ2h0dHBzOi8vd3d3Lnh4eHh4LnRvcC9zZ2FtZScgXHJcbiAgICAgd2ViX3VybCA9ICcgaHR0cHM6Ly93d3cueHh4eHgudG9wL3B2J1xyXG5cclxuICAgICAvKipcclxuICAgICAgKiDojrflj5blubPlj7Ag57G7XHJcbiAgICAgICovXHJcbiAgICAgIGdldFBsYXRmb3JtQ2xhc3MoKXtcclxuICAgICAgICAgdmFyIHBfY2xhc3MgPSBudWxsXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICBwX2NsYXNzID0gdHRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICdvcCc6XHJcbiAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgcF9jbGFzcyA9IHFnXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAnd3gnOlxyXG4gICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgIHBfY2xhc3MgPSB3eFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ2tzJzpcclxuICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICBwX2NsYXNzID0ga3NcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIHBfY2xhc3NcclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5bliIbkuqvmoIfpophcclxuICAgICAgKi9cclxuICAgICBnZXRTaGFyZVRpdGxlKCl7XHJcbiAgICAgICAgIHZhciB0aXRsZSA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICB0aXRsZSA9IHRoaXMudHRfaW5mby5zaGFyZVRpdGxlXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIHRpdGxlID0gdGhpcy5rc19pbmZvLnNoYXJlVGl0bGVcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnd4X2luZm8uc2hhcmVUaXRsZVxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIHRpdGxlXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+W5ZCN5a2XXHJcbiAgICAgICovXHJcbiAgICAgZ2V0TmFtZSgpe1xyXG4gICAgICAgICB2YXIgbmFtZSA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy50dF9pbmZvLmdhbWVuYW1lXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIG5hbWUgPSB0aGlzLmtzX2luZm8uZ2FtZW5hbWVcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgbmFtZSA9IHRoaXMud3hfaW5mby5nYW1lbmFtZVxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIG5hbWVcclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5ZhcHBpZCBcclxuICAgICAgKi9cclxuICAgICBnZXRBcHBJZCgpe1xyXG4gICAgICAgICB2YXIgYXBwaWQgPSAnJ1xyXG4gICAgICAgICBzd2l0Y2godGhpcy5wbGF0Zm9ybSl7XHJcbiAgICAgICAgICAgICBjYXNlICd0dCc6XHJcbiAgICAgICAgICAgICAgICAgYXBwaWQgPSB0aGlzLnR0X2luZm8uYXBwSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICdrcyc6XHJcbiAgICAgICAgICAgICAgICAgYXBwaWQgPSB0aGlzLmtzX2luZm8uYXBwSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgYXBwaWQgPSB0aGlzLnd4X2luZm8uYXBwSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIHJldHVybiBhcHBpZFxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOiOt+WPlkFwcFNlY3JldFxyXG4gICAgICAqL1xyXG4gICAgICBnZXRBcHBTZWNyZXQoKXtcclxuICAgICAgICAgdmFyIGFwcFNlY3JldCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBhcHBTZWNyZXQgPSB0aGlzLnR0X2luZm8uYXBwU2VjcmV0XHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGFwcFNlY3JldFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5ZiYW5uZXJpZFxyXG4gICAgICAqL1xyXG4gICAgIGdldEJhbm5lcklkKCl7XHJcbiAgICAgICAgIHZhciBiYW5uZXJJRCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBiYW5uZXJJRCA9IHRoaXMudHRfaW5mby5iYW5uZXJJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ2tzJzpcclxuICAgICAgICAgICAgICAgICBiYW5uZXJJRCA9IHRoaXMua3NfaW5mby5iYW5uZXJJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ3d4JzpcclxuICAgICAgICAgICAgICAgICBiYW5uZXJJRCA9IHRoaXMud3hfaW5mby5iYW5uZXJJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGJhbm5lcklEXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+WdmlkZW9pZFxyXG4gICAgICAqL1xyXG4gICAgIGdldFZpZGVvSWQoKXtcclxuICAgICAgICAgdmFyIHZpZGVvSWQgPSAnJ1xyXG4gICAgICAgICBzd2l0Y2godGhpcy5wbGF0Zm9ybSl7XHJcbiAgICAgICAgICAgICBjYXNlICd0dCc6XHJcbiAgICAgICAgICAgICAgICAgdmlkZW9JZCA9IHRoaXMudHRfaW5mby52aWRlb0lkXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIHZpZGVvSWQgPSB0aGlzLmtzX2luZm8udmlkZW9JZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ3d4JzpcclxuICAgICAgICAgICAgICAgICB2aWRlb0lkID0gdGhpcy53eF9pbmZvLnZpZGVvSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIHJldHVybiB2aWRlb0lkXHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRWaWRlb0lkMigpe1xyXG4gICAgICAgICBpZih0aGlzLnBsYXRmb3JtID09ICd3eCcpe1xyXG4gICAgICAgICAgICAgdmFyIHZpZGVvSWQgPSAnJ1xyXG4gICAgICAgICAgICAgdmlkZW9JZCA9IHRoaXMud3hfaW5mby52aWRlb0lkMlxyXG4gICAgICAgICAgICAgcmV0dXJuIHZpZGVvSWRcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOiOt+WPlmlkXHJcbiAgICAgICogQHBhcmFtIHR5cGUgXHJcbiAgICAgICovXHJcbiAgICAgIGdldE5hdGl2ZUFkKHR5cGU6IG51bWJlcil7XHJcbiAgICAgICAgIHZhciBpZCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgaWQgPSB0aGlzLnd4X2luZm8uTmF0aXZlQWQuanV6aGVuXHJcbiAgICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgaWQgPSB0aGlzLnd4X2luZm8uTmF0aXZlQWQuZHVvZ2V6aVxyXG4gICAgICAgICAgICAgICAgIH1lbHNlIGlmKHR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlkID0gdGhpcy53eF9pbmZvLk5hdGl2ZUFkLmRhbmdlemlcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W5v+WRimlkJywgaWQpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGlkXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+W5o+S5bGP5bm/5ZGKaWRcclxuICAgICAgKi9cclxuICAgICBnZXRDaGFQaW5nSWQoKXtcclxuICAgICAgICAgdmFyIGNoYXBpbmdJZCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBjaGFwaW5nSWQgPSB0aGlzLnR0X2luZm8uY2hhcGluZ0lkXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIGNoYXBpbmdJZCA9IHRoaXMua3NfaW5mby5jaGFwaW5nSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgY2hhcGluZ0lkID0gdGhpcy53eF9pbmZvLmNoYXBpbmdJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGNoYXBpbmdJZFxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOiOt+WPluWIhuS6q+WuoeaguGlkXHJcbiAgICAgICovXHJcbiAgICAgZ2V0VGVtcGxhdGVJZCgpe1xyXG4gICAgICAgICB2YXIgdGVtcGxhdGVJZCA9ICcnXHJcbiAgICAgICAgIHZhciBpZF9sZW50aCA9IHRoaXMudHRfaW5mby50ZW1wbGF0ZUlkLmxlbmd0aFxyXG4gICAgICAgICB2YXIgcmFuZEluZGV4ID0gdGhpcy5nZXRSYW5nZVJhbmRvbSgwLCBpZF9sZW50aClcclxuICAgICAgICAgc3dpdGNoKHRoaXMucGxhdGZvcm0pe1xyXG4gICAgICAgICAgICAgY2FzZSAndHQnOlxyXG4gICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQgPSB0aGlzLnR0X2luZm8udGVtcGxhdGVJZFtyYW5kSW5kZXhdXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAnd3gnOlxyXG4gICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQgPSB0aGlzLnd4X2luZm8udGVtcGxhdGVJZFtyYW5kSW5kZXhdXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgICByZXR1cm4gdGVtcGxhdGVJZFxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOa4uOaIj+WIhuS6q1xyXG4gICAgICAqL1xyXG4gICAgIGdhbWVTaGFyZShjYWxsQmFjazogYW55KXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm4gY2FsbEJhY2soKVxyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+a4uOaIj+WIhuS6qycpXHJcbiAgICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmdldFNoYXJlVGl0bGUoKVxyXG4gICAgICAgICAgICAgdmFyIHRlbXBsYXRlSWQgPSB0aGlzLmdldFRlbXBsYXRlSWQoKVxyXG4gICAgICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGVJZCwgLy8g5pu/5o2i5oiQ6YCa6L+H5a6h5qC455qE5YiG5LqrSURcclxuICAgICAgICAgICAgICAgICBxdWVyeTogXCJcIixcclxuICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrKClcclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGZhaWwoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWIhuS6q+Wksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfWVsc2UgaWYodGhpcy5wbGF0Zm9ybSA9PSAna3MnKXtcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDliIbkuqvliLDlpb3lj4tcclxuICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgICovXHJcbiAgICAgc2hhcmVHYW1lVG9GcmllbmQoY2FsbGJhY2s6IGFueSwgbm90ZT86c3RyaW5nKXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm4gY2FsbGJhY2soKVxyXG4gICAgICAgICBsZXQgbm90ZXN0ciA9ICfkvaDnmoTlpb3lj4vpgoDor7fkvaDkuIDotbfmiJjmlpcnXHJcbiAgICAgICAgIGlmKG5vdGUpIG5vdGVzdHIgPSBub3RlXHJcbiAgICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuZ2V0TmFtZSgpXHJcbiAgICAgICAgICAgICB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgIGNoYW5uZWw6IFwiaW52aXRlXCIsIC8vIOaLiei1t+mCgOivt+mdouadv+WIhuS6q+a4uOaIj+WlveWPi1xyXG4gICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICBkZXNjOiBub3Rlc3RyLFxyXG4gICAgICAgICAgICAgICAgIGltYWdlVXJsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgIHF1ZXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5YiG5Lqr5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5YiG5Lqr5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICogIGJhbm5lciDlub/lkYrmmL7npLpcclxuICAgICAgKi9cclxuICAgICBiYW5uZXJBZFNob3coKXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm5cclxuICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKSB7XHJcbiAgICAgICAgICAgICBpZiAoc2VsZi5iYW5uZXJBZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgbGV0IHdpblNpemUgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICAgICAgIGxldCBiYW5uZXJXaWR0aCA9IHdpblNpemUud2luZG93V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGJhbm5lckhlaWdodCA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAvLyAvLyDlub/lkYpcclxuICAgICAgICAgICAgICAgICBsZXQgYmFubmVySUQgPSB0aGlzLmdldEJhbm5lcklkKClcclxuICAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogYmFubmVySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAod2luU2l6ZS53aW5kb3dXaWR0aCAtIGJhbm5lcldpZHRoKSAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHdpblNpemUud2luZG93SGVpZ2h0IC0gYmFubmVySGVpZ2h0ICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYmFubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuIFxyXG4gICAgICAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gKHdpblNpemUud2luZG93V2lkdGggLSByZXMud2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5TaXplLndpbmRvd0hlaWdodCAtIHJlcy5oZWlnaHQgO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5vbkVycm9yKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpZiAoc2VsZi5iYW5uZXJBZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSAgPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYnJhbmQgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gICAgICAgICAgICAgaWYgKHNlbGYuYmFubmVyQWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgIHNlbGYuaXNzaG93YmFubmVyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICBsZXQgd2luU2l6ZSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGJhbm5lcldpZHRoOm51bWJlciA9IHdpblNpemUud2luZG93V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGJhbm5lckhlaWdodCA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAvLyAvLyDlub/lkYpcclxuICAgICAgICAgICAgICAgICBsZXQgYmFubmVySUQgPSB0aGlzLmdldEJhbm5lcklkKClcclxuICAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuY3JlYXRlQmFubmVyQWQoeyBcclxuICAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IGJhbm5lcklELFxyXG4gICAgICAgICAgICAgICAgICAgICBhZEludGVydmFsczozMCwgIC8v6Ieq5Yqo5Yi35paw5pe26Ze0IOacgOWwkTMwIOOAgiDml6DvvIzkuI3oh6rliqhcclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICh3aW5TaXplLndpbmRvd1dpZHRoIC0gYmFubmVyV2lkdGgpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogd2luU2l6ZS53aW5kb3dIZWlnaHQgLSBiYW5uZXJIZWlnaHQgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBiYW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gKHdpblNpemUud2luZG93V2lkdGggLSByZXMud2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5TaXplLndpbmRvd0hlaWdodCAtIHJlcy5oZWlnaHQgO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5vbkVycm9yKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jhbm5lcuWksei0pScscmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLmJhbm5lckFkc19Mb2FkKClcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jhbm5lciDlub/lkYrliqDovb3miJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAvL2dhbWVDb25maWcuaXNzaG93YmFubmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgIH0pICAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpZiAoc2VsZi5iYW5uZXJBZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiBiYW5uZXIg5bm/5ZGK6ZqQ6JePXHJcbiAgICAgICovXHJcbiAgICAgYmFubmVyQWRIaWRlKCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuXHJcbiAgICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIGxldCBzeXNEYXRhID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAgaWYoc3lzRGF0YS5icmFuZCA9PSAnZGV2dG9vbHMnIHx8IHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiBcclxuICAgICAgICAgICAgIGlmIChzZWxmLmJhbm5lckFkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkLmhpZGUoKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfWVsc2UgaWYodGhpcy5wbGF0Zm9ybSA9PSAna3MnKXtcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog5o+S5bGP5bm/5ZGK5Yqg6L29XHJcbiAgICAgICovXHJcbiAgICBjaGFQaW5nQWRMb2FkKCl7XHJcbiAgICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmJyYW5kID09ICdkZXZ0b29scycpIHJldHVybiBjb25zb2xlLmxvZygn5byA5Y+R5bel5YW35LiN5pON5L2cJylcclxuIFxyXG4gICAgICAgICAgICAgdmFyIGNoYXBpbmdJZCA9IHRoaXMuZ2V0Q2hhUGluZ0lkKClcclxuICAgICAgICAgICAgIHRoaXMuY2hhUGluZyA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmNyZWF0ZUludGVyc3RpdGlhbEFkKHsgYWRVbml0SWQ6IGNoYXBpbmdJZCB9KVxyXG4gXHJcbiAgICAgICAgICAgICB0aGlzLmNoYVBpbmcub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY/lub/lkYrmi4nlj5blpLHotKUnLGVycilcclxuICAgICAgICAgICAgICAgICAvL2dhbWVDb25maWcuY2hhUGluZyA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHsgYWRVbml0SWQ6IGNoYXBpbmdJZCB9KVxyXG4gICAgICAgICAgICAgfSlcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDmj5LlsY/lub/lkYrmmL7npLpcclxuICAgICAgKi9cclxuICAgICBjaGFQaW5nQWRTaG93KGNhbGxiYWNrPzogYW55KXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm5cclxuICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmJyYW5kID09ICdkZXZ0b29scycpIHJldHVybiBjb25zb2xlLmxvZygn5byA5Y+R5bel5YW35LiN5pON5L2cJylcclxuIFxyXG4gICAgICAgICAgICAgaWYoc2VsZi5jaGFQaW5nRXJyID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoJ+i1hOa6kOacquWHhuWkh+WlvS4uLicpXHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIHNlbGYuY2hhUGluZ0VyciA9IHRydWVcclxuICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICBzZWxmLmNoYVBpbmdFcnIgPSBmYWxzZVxyXG4gICAgICAgICAgICAgfSw0NTAwMClcclxuIFxyXG4gICAgICAgICAgICAgc2VsZi5jaGFQaW5nLnNob3coKVxyXG4gICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICBzZWxmLnNob3dUb2FzdCgn6LWE5rqQ5pyq5YeG5aSH5aW9Li4uJylcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bGV56S65bm/5ZGK5aSx6LSlJylcclxuICAgICAgICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgLy9nYW1lQ29uZmlnLmNoYVBpbmcgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7IGFkVW5pdElkOiB0aGlzLmdldENoYVBpbmdJZCgpIH0pXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSl7ICAgICAgICAgXHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+aPkuWxj+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiAgICAgICAgICAgICBpZihzZWxmLmNoYVBpbmdFcnIgPT0gdHJ1ZSkgcmV0dXJuXHJcbiAgICAgICAgICAgICBzZWxmLmNoYVBpbmdFcnIgPSB0cnVlXHJcbiAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgc2VsZi5jaGFQaW5nRXJyID0gZmFsc2VcclxuICAgICAgICAgICAgIH0sNjAwMDApXHJcbiAgICAgICAgICAgICB2YXIgY2hhcGluZ0lkID0gdGhpcy5nZXRDaGFQaW5nSWQoKVxyXG4gICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmNyZWF0ZUludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzdGl0aWFsQWQgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiBjaGFwaW5nSWQgIFxyXG4gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkXHJcbiAgICAgICAgICAgICAgICAgICAgIC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5sb2FkKCkudGhlbigoKT0+e2ludGVyc3RpdGlhbEFkLnNob3d9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQub25DbG9zZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnN0aXRpYWxBZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9ZWxzZSBpZih0aGlzLnBsYXRmb3JtID09ICdrcycpe1xyXG4gXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDmv4DlirHlub/lkYrliqDovb1cclxuICAgICAgKi9cclxuICAgIHZpZGVvQWRMb2FkKCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuXHJcbiAgICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gXHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYnJhbmQgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gXHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgIHZhciB2aWRlb0lkID0gdGhpcy5nZXRWaWRlb0lkMigpXHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICAgICAgIGFkVW5pdElkOiB2aWRlb0lkLFxyXG4gICAgICAgICAgICAgICAgIC8vbXVsdGl0b246IHRydWVcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQub25FcnJvcigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHplJnor68nLHJlcylcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQubG9hZCgpXHJcbiBcclxuICAgICAgICAgICAgIHZhciBlbmRDYWxsQmFjayA9IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgaWYgKHJlcy5pc0VuZGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi52aWRlb0NhbGxCYWNrICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWlluWKsScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvQ2FsbEJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl90eXBlICE9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1RvYXN0KCflt7LojrflvpcnKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudmlkZW9GYWlsQ2FsbEJhY2sgIT0gbnVsbCkgc2VsZi52aWRlb0ZhaWxDYWxsQmFjaygpIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBzZWxmLmlzdmlkZW9lbmQgPSB0cnVlXHJcbiBcclxuICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tWaWRlbyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgfSw2MDAwMClcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5vbkNsb3NlKGVuZENhbGxCYWNrKTsgLy/nu5Hlrprnu5PmnZ/lm57osINcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpe1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmFwcE5hbWUgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gXHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgIHZhciB2aWRlb0lkID0gdGhpcy5nZXRWaWRlb0lkKClcclxuICAgICAgICAgICAgIHRoaXMudmlkZW9BZCA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IHZpZGVvSWQsXHJcbiAgICAgICAgICAgICAgICAgLy9tdWx0aXRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vbkVycm9yKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR6ZSZ6K+vJyxyZXMpXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgdGhpcy52aWRlb0FkLmxvYWQoKVxyXG4gXHJcbiAgICAgICAgICAgICB2YXIgZW5kQ2FsbEJhY2sgPSBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYudmlkZW9DYWxsQmFjayAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+iOt+WPluWlluWKsScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvQ2FsbEJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl90eXBlICE9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1RvYXN0KCflt7LojrflvpcnKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudmlkZW9GYWlsQ2FsbEJhY2sgIT0gbnVsbCkgc2VsZi52aWRlb0ZhaWxDYWxsQmFjaygpIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBzZWxmLmlzdmlkZW9lbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQub25DbG9zZShlbmRDYWxsQmFjayk7IC8v57uR5a6a57uT5p2f5Zue6LCDXHJcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMucGxhdGZvcm0gPT0gJ2tzJyl7XHJcbiBcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog5bGV56S65r+A5Yqx6KeG6aKRIFxyXG4gICAgICAqIOWPguaVsDEg5oiQ5Yqf5Zue6LCDXHJcbiAgICAgICog5Y+C5pWwMiDlpLHotKXlm57osIMg5Y+v5Lul55yB55WlXHJcbiAgICAgICovXHJcbiAgICB2aWRlb0FkU2hvdyhzdWNjZXNzOiBhbnksIGZhaWxlOiBhbnksIHR5cGU/OiBhbnkpe1xyXG4gICAgICAgICBpZih0aGlzLmlzZGVidWcpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAgPT09IGNjLnN5cy5XRUNIQVRfR0FNRSB8fCBjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgn5L2g5L2c5byK5LqGIScpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+S9oOS9nOW8iuS6hiEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzKClcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgaWYodGhpcy5jaGVja1ZpZGVvID09IHRydWUpIHJldHVybiB0aGlzLnNob3dUb2FzdCgn5Yu/6aKR57mB54K55Ye7JylcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICBzZWxmLmNoZWNrVmlkZW8gPSBmYWxzZVxyXG4gICAgICAgICB9LDEwMDApXHJcbiBcclxuICAgICAgICAgdGhpcy52aWRlb0NhbGxCYWNrID0gc3VjY2Vzc1xyXG4gICAgICAgICB0aGlzLnZpZGVvRmFpbENhbGxCYWNrID0gZmFpbGVcclxuICAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGVcclxuICAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7IC8v5b6u5L+hXHJcbiBcclxuICAgICAgICAgICAgIGxldCBzeXNEYXRhID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAgaWYoc3lzRGF0YS5icmFuZCA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiBcclxuICAgICAgICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlXHJcbiBcclxuICAgICAgICAgICAgIGlmKHNlbGYudmlkZW9BZCA9PSBudWxsIHx8IHNlbGYudmlkZW9BZCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZGVvQ2FsbEJhY2soKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5vbkVycm9yKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W5v+WRiuWHuumUmeebkeWQrCcsIHJlcylcclxuICAgICAgICAgICAgIH0pXHJcbiBcclxuICAgICAgICAgICAgIC8vIC8qKuWxleekuiAqL1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb0FkXHJcbiAgICAgICAgICAgICAgICAgLnNob3coKVxyXG4gICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dUb2FzdCgn5r+A5Yqx6KeG6aKR5pKt5pS+5aSx6LSlJylcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+WNsOa/gOWKseinhumikemUmeivrycsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul5omL5Yqo5Yqg6L295LiA5qyhXHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIOWKoOi9veaIkOWKn+WQjumcgOimgeWGjeaYvuekuuW5v+WRilxyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52aWRlb0FkLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXsgXHJcbiAgICAgICAgICAgICB0aGlzLmNoZWNrVmlkZW8gPSB0cnVlXHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gc3VjY2VzcygpLGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gICAgICAgICAgICAgaWYodGhpcy52aWRlb0FkID09IG51bGwgfHwgdGhpcy52aWRlb0FkID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9DYWxsQmFjaygpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB0aGlzLnZpZGVvQWQub25FcnJvcigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+W5v+WRiuWHuumUmeebkeWQrCcsIHJlcylcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAvLyAvKirlsZXnpLogKi9cclxuICAgICAgICAgICAgIHRoaXMudmlkZW9BZFxyXG4gICAgICAgICAgICAgICAgIC5zaG93KClcclxuICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93VG9hc3QoJ+a/gOWKseinhumikeaSreaUvuWksei0pScpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+aJk+WNsOa/gOWKseinhumikemUmeivrycsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul5omL5Yqo5Yqg6L295LiA5qyhXHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIOWKoOi9veaIkOWKn+WQjumcgOimgeWGjeaYvuekuuW5v+WRilxyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52aWRlb0FkLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMucGxhdGZvcm0gPT0gJ2tzJyl7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb0NhbGxCYWNrKClcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICAgXHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDlrZfoioJcclxuICAgICAgKiDlvZXliLbop4bpopHlvIDlp4tcclxuICAgICAgKi9cclxuICAgICByZWNvcmRpbmdWaWRlb1N0YXJ0KCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuIFxyXG4gICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIGxldCBzeXNEYXRhID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAgaWYoc3lzRGF0YS5hcHBOYW1lID09ICdkZXZ0b29scycpIHJldHVybiBjb25zb2xlLmxvZygn5byA5Y+R5bel5YW35LiN5pON5L2cJylcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9SZWNvcmRpbmdTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvSXNFeGlzdCA9IDA7XHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvX3JlY29yZGVyID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgIFxyXG4gICAgICAgICAgICAgc2VsZi52aWRlb1N0YXJ0VGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKS50b1N0cmluZygpKSAvL0RhdGUucGFyc2UobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAvL+W8gOWni+Wbnuiwg1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb19yZWNvcmRlci5vblN0YXJ0KHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9leWxj+W8gOWniycpO1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgLy/lvIDlp4tcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9fcmVjb3JkZXIuc3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzZWxmLnJlY29yZGVyVGltZSwgLy/lvZXliLbml7bplb9cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgLy/lvZXliLbnu5PmnZ/lm57osINcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9fcmVjb3JkZXIub25TdG9wKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGluZ1N0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvUGF0aCA9IHJlcy52aWRlb1BhdGg7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9leWxj+e7k+adnycsIHNlbGYudmlkZW9QYXRoKVxyXG4gICAgICAgICAgICAgICAgIC8vIGRvIHNvbWV0aGluZTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgLy/lvZXliLbplJnor6/lm57osINcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9fcmVjb3JkZXIub25FcnJvcihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZXlsY9lcnJvclwiLCByZXMpXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOW9leWItuinhumikee7k+adn1xyXG4gICAgICAqL1xyXG4gICAgIHJlY29yZGluZ1ZpZGVvRW5kKCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuXHJcbiAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKSB7XHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZXlsY/nu5PmnZ8xJyk7XHJcbiAgICAgICAgICAgICAvL2dhbWVDb25maWcuc2hhcmVWaWRlb1RpcHMgPSAwO1xyXG4gICAgICAgICAgICAgaWYgKHNlbGYudmlkZW9fcmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICB2YXIgZW5kVGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKS50b1N0cmluZygpKSAgLy9EYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgIGlmICgoZW5kVGltZSAtIHNlbGYudmlkZW9TdGFydFRpbWUpIC8gMTAwMCA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9Jc0V4aXN0ID0gMTtcclxuICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb0lzRXhpc3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvX3JlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOW9leWItuinhumikeWIhuS6q1xyXG4gICAgICAqIOWPguaVsDEg5oiQ5Yqf5Zue6LCD5pa55rOVXHJcbiAgICAgICog5Y+C5pWwMiDlpLHotKXlm57osIPmlrnms5VcclxuICAgICAgKi9cclxuICAgICByZWNvcmRpbmdWaWRlb1NoYXJlKGNhbGxCYWNrOiBhbnksIGZhaWxDYWxsQmFjazogYW55KXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm4gY2FsbEJhY2soKVxyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSkge1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmFwcE5hbWUgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgICBpZihzZWxmLnZpZGVvSXNFeGlzdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICBzZWxmLnNob3dUb2FzdCgn5b2V5Yi25pe26Ze06L+H55+tJylcclxuICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMjAwO1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGluZ1N0YXRlID0gMztcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudmlkZW9QYXRoKVxyXG4gICAgICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICBjaGFubmVsOiAndmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICBpbWFnZVVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgIGV4dHJhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHZpZGVvUGF0aDogc2VsZi52aWRlb1BhdGgsIC8vIOWPr+eUqOW9leWxj+W+l+WIsOeahOinhumikeWcsOWdgFxyXG4gICAgICAgICAgICAgICAgICAgICB2aWRlb1RvcGljczogc2VsZi50dF9pbmZvLnZpZGVvVG9waWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICBjcmVhdGVDaGFsbGVuZ2U6IHRydWVcclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1RvYXN0KCfliIbkuqvop4bpopHmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5yZWNvcmRpbmdfVmlkZW9fU3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDIwMTtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93VG9hc3QoJ+WIhuS6q+inhumikeWksei0pScpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+WIhuS6q+Wksei0pScsIGUpXHJcbiAgICAgICAgICAgICAgICAgICAgIGZhaWxDYWxsQmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5yZWNvcmRpbmdfVmlkZW9fU3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgY2FsbEJhY2soKVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLy/lvZXlsY/mmK/lkKblrZjlnKhcclxuICAgICBnZXRWaWRlb0lzRXhpc3QoKXtcclxuICAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9Jc0V4aXN0XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog5re75Yqg5qGM6Z2iXHJcbiAgICAgICogQHBhcmFtIHNjYiBcclxuICAgICAgKiBAcGFyYW0gZmNiIFxyXG4gICAgICAqL1xyXG4gICAgIGFkZFNob3J0Y3V0KHNjYjpGdW5jdGlvbiwgZmNiOkZ1bmN0aW9uKXtcclxuICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuYWRkU2hvcnRjdXQoe1xyXG4gICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIua3u+WKoOahjOmdouaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICBzY2IoKVxyXG4gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCLmt7vliqDmoYzpnaLlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgZmNiKClcclxuICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICog5o+Q56S65qGGXHJcbiAgICAgICovXHJcbiAgICAgc2hvd1RvYXN0KHN0cil7XHJcbiAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgfHwgY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSkge1xyXG4gICAgICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICB0aXRsZTogc3RyLFxyXG4gICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYHNob3dUb2FzdOiwg+eUqOWksei0pWApO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gVG9hc3Qoc3RyKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIpXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5bkuI3ph43lpI3nmoTpmo/mnLrmlbBcclxuICAgICAgKiBAcGFyYW0gbWluVmFsdWUg5pyA5bCP5YC8XHJcbiAgICAgICogQHBhcmFtIG1heFZhbHVlIOacgOWkp+WAvFxyXG4gICAgICAqIEBwYXJhbSB2YWx1ZU51bSDpmo/mnLrkuKrmlbBcclxuICAgICAgKi9cclxuICAgICBnZXRSYW5kb21WYWx1ZURpZihtaW5WYWx1ZSwgbWF4VmFsdWUsIHZhbHVlTnVtKSB7XHJcbiAgICAgICAgIC8vIOWFqOmDqOmaj+acuuaVsOWAvCAgXHJcbiAgICAgICAgIGxldCBhbGxOdW1zID0gbmV3IEFycmF5O1xyXG4gXHJcbiAgICAgICAgIC8vIOWIpOaWreiOt+WPlumaj+acuuaVsOS4quaVsCAgXHJcbiAgICAgICAgIGxldCBzaXplID0gdmFsdWVOdW0gPyAodmFsdWVOdW0gPiBtYXhWYWx1ZSAtIG1pblZhbHVlICsgMSA/IG1heFZhbHVlIC0gbWluVmFsdWUgKyAxIDogdmFsdWVOdW0pIDogMTtcclxuIFxyXG4gICAgICAgICAvLyDnlJ/miJDpmo/mnLrmlbDlgLzljLrpl7TmlbDnu4QgIFxyXG4gICAgICAgICBmb3IgKGxldCBpID0gbWluVmFsdWUsIGsgPSAwOyBpIDw9IG1heFZhbHVlOyBpKysgLCBrKyspIHtcclxuICAgICAgICAgICAgIGFsbE51bXNba10gPSBpO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgbGV0IGFyciA9IFtdXHJcbiBcclxuICAgICAgICAgLy8g6ZqP5py65LuO5pWw57uE6YeM6Z2i5Y+W5YC8XHJcbiAgICAgICAgIGFsbE51bXMuc29ydChmdW5jdGlvbiAoKSB7IHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpOyB9KTtcclxuICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbE51bXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgIGFyci5wdXNoKGFsbE51bXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgIGxldCB0bXAgPSBhbGxOdW1zW2luZGV4XTtcclxuICAgICAgICAgICAgIGFsbE51bXNbaW5kZXhdID0gYWxsTnVtc1thbGxOdW1zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgYWxsTnVtc1thbGxOdW1zLmxlbmd0aCAtIDFdID0gdG1wO1xyXG4gICAgICAgICAgICAgYWxsTnVtcy5wb3AoKTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+W6IyD5Zu05YaF55qE6ZqP5py65pWwXHJcbiAgICAgICogQHBhcmFtIG1pblZhbHVlIOacgOWwj+WAvFxyXG4gICAgICAqIEBwYXJhbSBtYXhWYWx1ZSDmnIDlpKflgLxcclxuICAgICAgKi9cclxuICAgICBnZXRSYW5nZVJhbmRvbShtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgLy8g6I635Y+W5pWw57uE5LuO56ys5LiA5Liq5byA5aeL5Yiw5oyH5a6a5Liq5pWw55qE5LiL5qCH5Yy66Ze0ICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tVmFsdWVEaWYobWluVmFsdWUsIG1heFZhbHVlLCAxKVswXTtcclxuICAgICB9XHJcbiBcclxuICAgICB2aWJyYXRlU2hvcnQoKXtcclxuICAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSB8fCBjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcclxuICAgICAgICAgICAgIHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLnZpYnJhdGVTaG9ydCgpXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG5cclxuICAgICAvKipcclxuICAgICAgKiDot7Povazlhbbku5blsI/muLjmiI9cclxuICAgICAgKi9cclxuICAgIHR1cm5Ub0FwcChhcHBJZDogc3RyaW5nKXtcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KCflubPlj7DplJnor68nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDorr7nva7mjpLooYzmppxcclxuICAgIHNldFJhbmtTY29yZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3NldFNjb3JlJyxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoJ+W5s+WPsOmUmeivrycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDojrflj5blpb3lj4vmjpLooYzmppxcclxuICAgIGdldFJhbmsoKSB7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ2dldFJhbmsnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgn5bmz5Y+w6ZSZ6K+vJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6KKr5Yqo5YiG5LqrXHJcbiAgICBnYW1lU2hhcmVQYXNzaXZlKCkge1xyXG4gICAgICAgIC8vIOebkeWQrOWwj+eoi+W6j+WPs+S4iuinkuiPnOWNleeahOOAjOi9rOWPkeOAjeaMiemSrlxyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAvLyDmmL7npLrlvZPliY3pobXpnaLnmoTovazlj5HmjInpkq5cclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+W8gOWQr+iiq+WKqOi9rOWPkeaIkOWKn++8gScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflvIDlkK/ooqvliqjovazlj5HlpLHotKXvvIEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPluW9k+WJjeaji+WxgG9uZUNoZXNz5L+h5oGv77yMSlNPTi5zdHJpbmdmeSgp5ZCO5Lyg5YWlcXVlcnlcclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLm9uU2hhcmVBcHBNZXNzYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0U2hhcmVUaXRsZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLvliqjliIbkuqtcclxuICAgIGdhbWVTaGFyZUFjdGl2ZSgpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICB3aW5kb3dbJ3d4J10uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldFNoYXJlVGl0bGUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiB9XHJcbiAiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d73fovozhD1IBjvGSRJfDn', 'DataManager');
// script/manager/DataManager.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("../Enum");
var Player_1 = require("../Player");
var STORAGE_KEY = 'FOOTBALL_STORAGE_KEY';
var DataManager = /** @class */ (function () {
    function DataManager() {
        this._maxLevel = 1;
        this._level = 1;
        this._audioMusic = true;
        this._audioSound = true;
        this._vibrate = true;
        this._SideBarReward = false;
        // 技能点
        this.skillNums = [0, 0, 0, 0, 0];
        this.status = Enum_1.ENUM_GAME_STATUS.INIT;
        this.blues = [];
        this.reds = [];
        this.foods = [];
        this.currentData = null;
        this.endpoint = null;
        // 技能累计数
        this.powerCount = 0;
        // 达成条件
        this.powerCountTarget = 4;
        // 技能饮品效果
        this.powerEffectLoop = 0;
        // 增益牛扒效果
        this.foodEffectLoop = 0;
        // 游戏每局时间
        this.timer = 60;
        // 加时
        this.extraTime = 30;
        // 加载进度
        this.loadingRate = 0;
    }
    DataManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(DataManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (data) {
            this._level = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "maxLevel", {
        get: function () {
            return this._maxLevel;
        },
        set: function (data) {
            this._maxLevel = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "audioMusic", {
        get: function () {
            return this._audioMusic;
        },
        set: function (data) {
            this._audioMusic = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "audioSound", {
        get: function () {
            return this._audioSound;
        },
        set: function (data) {
            this._audioSound = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "vibrate", {
        get: function () {
            return this._vibrate;
        },
        set: function (data) {
            this._vibrate = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "SideBarReward", {
        get: function () {
            return this._SideBarReward;
        },
        set: function (data) {
            this._SideBarReward = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.cutSkillNums = function (k) {
        this.skillNums[k]--;
        this.save();
    };
    /**
     * 重置游戏状态。
     *
     * 该方法将游戏状态重置为初始值，以便开始新的游戏或重新初始化当前游戏。
     * 它清除了玩家角色、食物等游戏元素，并重置了相关计数器和定时器。
     */
    DataManager.prototype.reset = function () {
        this.status = Enum_1.ENUM_GAME_STATUS.INIT;
        this.blues = [];
        this.reds = [];
        this.foods = [];
        this.currentData = null;
        this.endpoint = null;
        this.powerCount = 0;
        this.timer = 60;
        this.powerEffectLoop = 0;
    };
    /**
     * 保存游戏进度和设置。
     *
     * 此函数负责将当前游戏的级别、最大级别、音频设置、振动设置、技能数量和侧边栏奖励等信息存储到本地存储中。
     * 它首先检查是否存在名为"tt"的全局变量，以确定使用哪种存储方法（本地存储或同步存储）。
     * 如果"tt"不存在，则使用cc.sys.localStorage来保存数据；如果"tt"存在，则使用tt.setStorageSync来保存数据。
     * 这种设计允许游戏在不同环境（例如web和移动设备）下灵活地保存玩家的进度和设置。
     */
    DataManager.prototype.save = function () {
        if (!window["tt"]) {
            cc.sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
                level: this.level,
                maxLevel: this.maxLevel,
                audioMusic: this.audioMusic,
                audioSound: this.audioSound,
                vibrate: this.vibrate,
                skillNums: this.skillNums,
                SideBarReward: this.SideBarReward
            }));
        }
        else {
            tt.setStorageSync(STORAGE_KEY, JSON.stringify({
                level: this.level,
                maxLevel: this.maxLevel,
                audioMusic: this.audioMusic,
                audioSound: this.audioSound,
                vibrate: this.vibrate,
                skillNums: this.skillNums,
                SideBarReward: this.SideBarReward
            }));
        }
    };
    /**
     * 从本地存储中恢复游戏设置和进度。
     * 此函数负责从本地存储中读取游戏的配置信息，如关卡进度、音效设置等，并更新实例的相应属性。
     * 它首先检查是否存在特定于应用程序的存储机制，如果不存在，则使用通用的Web存储机制。
     * 在读取数据后，尝试解析JSON字符串为对象，并根据解析结果更新游戏状态。
     * 如果解析失败，将重置所有设置和进度到初始状态。
     */
    DataManager.prototype.restore = function () {
        var _data = null;
        if (!window["tt"]) {
            _data = cc.sys.localStorage.getItem(STORAGE_KEY);
        }
        else {
            _data = tt.getStorageSync(STORAGE_KEY);
        }
        try {
            var data = JSON.parse(_data);
            this.level = (data === null || data === void 0 ? void 0 : data.level) || 1;
            this.maxLevel = (data === null || data === void 0 ? void 0 : data.maxLevel) || 1;
            this.audioMusic = (data === null || data === void 0 ? void 0 : data.audioMusic) === false ? false : true;
            this.audioSound = (data === null || data === void 0 ? void 0 : data.audioSound) === false ? false : true;
            this.vibrate = (data === null || data === void 0 ? void 0 : data.vibrate) === false ? false : true;
            this.skillNums = (data === null || data === void 0 ? void 0 : data.skillNums) || [0, 0, 0, 0, 0];
            this.SideBarReward = data === null ? this.SideBarReward : data.SideBarReward;
        }
        catch (_a) {
            this.level = 1;
            this.maxLevel = 1;
            this.audioMusic = true;
            this.audioSound = true;
            this.vibrate = true;
            // this.skillNums = [0, 0, 0, 0, 0]
            this.SideBarReward = false;
            this.reset();
        }
    };
    // 处于准备状态的蓝方队员（脚本）
    DataManager.prototype.getBlueReady = function () {
        var ready = DataManager.instance.blues.find(function (item) { return item.status === Enum_1.ENUM_PLAYER_STATUS.READY; });
        return ready;
    };
    // 就近待传球的蓝方队员（脚本）
    DataManager.prototype.getBlueNext = function () {
        var readyIndex = DataManager.instance.blues.findIndex(function (item) { return item.status === Enum_1.ENUM_PLAYER_STATUS.READY; });
        if (readyIndex >= 0) {
            var next = DataManager.instance.blues[readyIndex + 1];
            return next;
        }
        return null;
    };
    // 获取终点（脚本）
    DataManager.prototype.getEndpoint = function () {
        return DataManager.instance.endpoint;
    };
    // 根据点击屏幕返回指定红方成员（节点）
    DataManager.prototype.getCardEnemy = function (x, y) {
        var target = null;
        DataManager.instance.reds.forEach(function (item) {
            var red = item.node;
            // 转为世界坐标
            var world = red.parent.convertToWorldSpaceAR(red.position);
            var camera = cc.find('Canvas/Main/Camera').position;
            var offsetX = Math.abs(world.x - (camera.x + x));
            var offsetY = Math.abs(world.y - (camera.y + y));
            if (offsetX <= red.width / 2 && offsetY <= red.height / 2) {
                target = red;
            }
        });
        return target;
    };
    // 根据点击屏幕返回指定的蓝方成员（节点）
    DataManager.prototype.getPassPlayer = function (x, y) {
        var target = null;
        DataManager.instance.blues.forEach(function (item) {
            var blue = item.node;
            // 转为世界坐标
            var world = blue.parent.convertToWorldSpaceAR(blue.position);
            var camera = cc.find('Canvas/Main/Camera').position;
            var offsetX = Math.abs(world.x - (camera.x + x));
            var offsetY = Math.abs(world.y - (camera.y + y));
            if (offsetX <= blue.width / 2 && offsetY <= blue.height / 2) {
                if (blue.getComponent(Player_1.default).status != Enum_1.ENUM_PLAYER_STATUS.READY)
                    target = blue;
            }
        });
        return target;
    };
    DataManager._instance = null;
    return DataManager;
}());
exports.default = DataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOztBQUV2QixnQ0FBOEQ7QUFHOUQsb0NBQThCO0FBRzlCLElBQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFBO0FBUTFDO0lBQUE7UUFnQkksY0FBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFBO1FBQ2xCLGdCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLGdCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsbUJBQWMsR0FBWSxLQUFLLENBQUE7UUFDL0IsTUFBTTtRQUNOLGNBQVMsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNyQyxXQUFNLEdBQXFCLHVCQUFnQixDQUFDLElBQUksQ0FBQTtRQUNoRCxVQUFLLEdBQWEsRUFBRSxDQUFBO1FBQ3BCLFNBQUksR0FBWSxFQUFFLENBQUE7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQTtRQUNsQixnQkFBVyxHQUFrQixJQUFJLENBQUE7UUFDakMsYUFBUSxHQUFhLElBQUksQ0FBQTtRQUN6QixRQUFRO1FBQ1IsZUFBVSxHQUFXLENBQUMsQ0FBQTtRQUN0QixPQUFPO1FBQ1AscUJBQWdCLEdBQVcsQ0FBQyxDQUFBO1FBQzVCLFNBQVM7UUFDVCxvQkFBZSxHQUFXLENBQUMsQ0FBQTtRQUMzQixTQUFTO1FBQ1QsbUJBQWMsR0FBVyxDQUFDLENBQUE7UUFDMUIsU0FBUztRQUNULFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsS0FBSztRQUNMLGNBQVMsR0FBVyxFQUFFLENBQUE7UUFFdEIsT0FBTztRQUNQLGdCQUFXLEdBQVcsQ0FBQyxDQUFBO0lBbU0zQixDQUFDO0lBM09VLHVCQUFXLEdBQWxCO1FBQ0ksSUFB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QUNyRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2xELElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxNQUFNLElBQUkseUJBQWtCLENBQUMsS0FBSztvQkFBRSxNQUFNLEdBQUcsSUFBSSxDQUFBO2FBQ2xGO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0lBNU9jLHFCQUFTLEdBQVEsSUFBSSxDQUFBO0lBNk94QyxrQkFBQztDQS9PRCxBQStPQyxJQUFBO2tCQS9Pb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0dBTUVfU1RBVFVTLCBFTlVNX1BMQVlFUl9TVEFUVVMgfSBmcm9tIFwiLi4vRW51bVwiXHJcbmltcG9ydCBFbmRwb2ludCBmcm9tIFwiLi4vRW5kcG9pbnRcIlxyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4uL0VuZW15XCJcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCJcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4uL0Zvb2RcIlxyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSAnRk9PVEJBTExfU1RPUkFHRV9LRVknXHJcbmRlY2xhcmUgbGV0IHR0OiBhbnk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1cnJlbnRMZXZlbCB7XHJcbiAgICBsZXZlbDogbnVtYmVyLFxyXG4gICAgc2NvcmU6IG51bWJlcixcclxuICAgIGNvbGxlY3RlZDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFueSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oKTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZTxEYXRhTWFuYWdlcj4oKVxyXG4gICAgfVxyXG5cclxuICAgIF9tYXhMZXZlbDogbnVtYmVyID0gMVxyXG4gICAgX2xldmVsOiBudW1iZXIgPSAxXHJcbiAgICBfYXVkaW9NdXNpYzogYm9vbGVhbiA9IHRydWVcclxuICAgIF9hdWRpb1NvdW5kOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgX3ZpYnJhdGU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBfU2lkZUJhclJld2FyZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICAvLyDmioDog73ngrlcclxuICAgIHNraWxsTnVtczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMF1cclxuICAgIHN0YXR1czogRU5VTV9HQU1FX1NUQVRVUyA9IEVOVU1fR0FNRV9TVEFUVVMuSU5JVFxyXG4gICAgYmx1ZXM6IFBsYXllcltdID0gW11cclxuICAgIHJlZHM6IEVuZW15W10gPSBbXVxyXG4gICAgZm9vZHM6IEZvb2RbXSA9IFtdXHJcbiAgICBjdXJyZW50RGF0YTogSUN1cnJlbnRMZXZlbCA9IG51bGxcclxuICAgIGVuZHBvaW50OiBFbmRwb2ludCA9IG51bGxcclxuICAgIC8vIOaKgOiDvee0r+iuoeaVsFxyXG4gICAgcG93ZXJDb3VudDogbnVtYmVyID0gMFxyXG4gICAgLy8g6L6+5oiQ5p2h5Lu2XHJcbiAgICBwb3dlckNvdW50VGFyZ2V0OiBudW1iZXIgPSA0XHJcbiAgICAvLyDmioDog73ppa7lk4HmlYjmnpxcclxuICAgIHBvd2VyRWZmZWN0TG9vcDogbnVtYmVyID0gMFxyXG4gICAgLy8g5aKe55uK54mb5omS5pWI5p6cXHJcbiAgICBmb29kRWZmZWN0TG9vcDogbnVtYmVyID0gMFxyXG4gICAgLy8g5ri45oiP5q+P5bGA5pe26Ze0XHJcbiAgICB0aW1lcjogbnVtYmVyID0gNjBcclxuICAgIC8vIOWKoOaXtlxyXG4gICAgZXh0cmFUaW1lOiBudW1iZXIgPSAzMFxyXG5cclxuICAgIC8vIOWKoOi9vei/m+W6plxyXG4gICAgbG9hZGluZ1JhdGU6IG51bWJlciA9IDBcclxuXHJcbiAgICBnZXQgbGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxldmVsKGRhdGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xldmVsID0gZGF0YVxyXG4gICAgICAgIHRoaXMuc2F2ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1heExldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhMZXZlbFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYXhMZXZlbChkYXRhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXhMZXZlbCA9IGRhdGFcclxuICAgICAgICB0aGlzLnNhdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBhdWRpb011c2ljKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdWRpb011c2ljXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGF1ZGlvTXVzaWMoZGF0YTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvTXVzaWMgPSBkYXRhXHJcbiAgICAgICAgdGhpcy5zYXZlKClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXVkaW9Tb3VuZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9Tb3VuZFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBhdWRpb1NvdW5kKGRhdGE6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9hdWRpb1NvdW5kID0gZGF0YVxyXG4gICAgICAgIHRoaXMuc2F2ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpYnJhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpYnJhdGVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmlicmF0ZShkYXRhOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fdmlicmF0ZSA9IGRhdGFcclxuICAgICAgICB0aGlzLnNhdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBTaWRlQmFyUmV3YXJkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TaWRlQmFyUmV3YXJkXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFNpZGVCYXJSZXdhcmQoZGF0YTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX1NpZGVCYXJSZXdhcmQgPSBkYXRhXHJcbiAgICAgICAgdGhpcy5zYXZlKClcclxuICAgIH1cclxuICAgIGN1dFNraWxsTnVtcyhrOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNraWxsTnVtc1trXS0tXHJcbiAgICAgICAgdGhpcy5zYXZlKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6YeN572u5ri45oiP54q25oCB44CCXHJcbiAgICAgKiBcclxuICAgICAqIOivpeaWueazleWwhua4uOaIj+eKtuaAgemHjee9ruS4uuWIneWni+WAvO+8jOS7peS+v+W8gOWni+aWsOeahOa4uOaIj+aIlumHjeaWsOWIneWni+WMluW9k+WJjea4uOaIj+OAglxyXG4gICAgICog5a6D5riF6Zmk5LqG546p5a626KeS6Imy44CB6aOf54mp562J5ri45oiP5YWD57Sg77yM5bm26YeN572u5LqG55u45YWz6K6h5pWw5Zmo5ZKM5a6a5pe25Zmo44CCXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5JTklUXHJcbiAgICAgICAgdGhpcy5ibHVlcyA9IFtdXHJcbiAgICAgICAgdGhpcy5yZWRzID0gW11cclxuICAgICAgICB0aGlzLmZvb2RzID0gW11cclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5wb3dlckNvdW50ID0gMFxyXG4gICAgICAgIHRoaXMudGltZXIgPSA2MFxyXG4gICAgICAgIHRoaXMucG93ZXJFZmZlY3RMb29wID0gMFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmuLjmiI/ov5vluqblkozorr7nva7jgIJcclxuICAgICAqIFxyXG4gICAgICog5q2k5Ye95pWw6LSf6LSj5bCG5b2T5YmN5ri45oiP55qE57qn5Yir44CB5pyA5aSn57qn5Yir44CB6Z+z6aKR6K6+572u44CB5oyv5Yqo6K6+572u44CB5oqA6IO95pWw6YeP5ZKM5L6n6L655qCP5aWW5Yqx562J5L+h5oGv5a2Y5YKo5Yiw5pys5Zyw5a2Y5YKo5Lit44CCXHJcbiAgICAgKiDlroPpppblhYjmo4Dmn6XmmK/lkKblrZjlnKjlkI3kuLpcInR0XCLnmoTlhajlsYDlj5jph4/vvIzku6Xnoa7lrprkvb/nlKjlk6rnp43lrZjlgqjmlrnms5XvvIjmnKzlnLDlrZjlgqjmiJblkIzmraXlrZjlgqjvvInjgIJcclxuICAgICAqIOWmguaenFwidHRcIuS4jeWtmOWcqO+8jOWImeS9v+eUqGNjLnN5cy5sb2NhbFN0b3JhZ2XmnaXkv53lrZjmlbDmja7vvJvlpoLmnpxcInR0XCLlrZjlnKjvvIzliJnkvb/nlKh0dC5zZXRTdG9yYWdlU3luY+adpeS/neWtmOaVsOaNruOAglxyXG4gICAgICog6L+Z56eN6K6+6K6h5YWB6K645ri45oiP5Zyo5LiN5ZCM546v5aKD77yI5L6L5aaCd2Vi5ZKM56e75Yqo6K6+5aSH77yJ5LiL54G15rS75Zyw5L+d5a2Y546p5a6255qE6L+b5bqm5ZKM6K6+572u44CCXHJcbiAgICAgKi9cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgbWF4TGV2ZWw6IHRoaXMubWF4TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBhdWRpb011c2ljOiB0aGlzLmF1ZGlvTXVzaWMsXHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdW5kOiB0aGlzLmF1ZGlvU291bmQsXHJcbiAgICAgICAgICAgICAgICB2aWJyYXRlOiB0aGlzLnZpYnJhdGUsXHJcbiAgICAgICAgICAgICAgICBza2lsbE51bXM6IHRoaXMuc2tpbGxOdW1zLFxyXG4gICAgICAgICAgICAgICAgU2lkZUJhclJld2FyZDogdGhpcy5TaWRlQmFyUmV3YXJkXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdHQuc2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgbWF4TGV2ZWw6IHRoaXMubWF4TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBhdWRpb011c2ljOiB0aGlzLmF1ZGlvTXVzaWMsXHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdW5kOiB0aGlzLmF1ZGlvU291bmQsXHJcbiAgICAgICAgICAgICAgICB2aWJyYXRlOiB0aGlzLnZpYnJhdGUsXHJcbiAgICAgICAgICAgICAgICBza2lsbE51bXM6IHRoaXMuc2tpbGxOdW1zLFxyXG4gICAgICAgICAgICAgICAgU2lkZUJhclJld2FyZDogdGhpcy5TaWRlQmFyUmV3YXJkXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS7juacrOWcsOWtmOWCqOS4reaBouWkjea4uOaIj+iuvue9ruWSjOi/m+W6puOAglxyXG4gICAgICog5q2k5Ye95pWw6LSf6LSj5LuO5pys5Zyw5a2Y5YKo5Lit6K+75Y+W5ri45oiP55qE6YWN572u5L+h5oGv77yM5aaC5YWz5Y2h6L+b5bqm44CB6Z+z5pWI6K6+572u562J77yM5bm25pu05paw5a6e5L6L55qE55u45bqU5bGe5oCn44CCXHJcbiAgICAgKiDlroPpppblhYjmo4Dmn6XmmK/lkKblrZjlnKjnibnlrprkuo7lupTnlKjnqIvluo/nmoTlrZjlgqjmnLrliLbvvIzlpoLmnpzkuI3lrZjlnKjvvIzliJnkvb/nlKjpgJrnlKjnmoRXZWLlrZjlgqjmnLrliLbjgIJcclxuICAgICAqIOWcqOivu+WPluaVsOaNruWQju+8jOWwneivleino+aekEpTT07lrZfnrKbkuLLkuLrlr7nosaHvvIzlubbmoLnmja7op6PmnpDnu5Pmnpzmm7TmlrDmuLjmiI/nirbmgIHjgIJcclxuICAgICAqIOWmguaenOino+aekOWksei0pe+8jOWwhumHjee9ruaJgOacieiuvue9ruWSjOi/m+W6puWIsOWIneWni+eKtuaAgeOAglxyXG4gICAgICovXHJcbiAgICByZXN0b3JlKCkge1xyXG4gICAgICAgIGxldCBfZGF0YSA9IG51bGxcclxuICAgICAgICBpZiAoIXdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIF9kYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSBhcyBhbnlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF9kYXRhID0gdHQuZ2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9LRVkpIGFzIGFueVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShfZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IGRhdGE/LmxldmVsIHx8IDFcclxuICAgICAgICAgICAgdGhpcy5tYXhMZXZlbCA9IGRhdGE/Lm1heExldmVsIHx8IDFcclxuICAgICAgICAgICAgdGhpcy5hdWRpb011c2ljID0gZGF0YT8uYXVkaW9NdXNpYyA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdW5kID0gZGF0YT8uYXVkaW9Tb3VuZCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgdGhpcy52aWJyYXRlID0gZGF0YT8udmlicmF0ZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgdGhpcy5za2lsbE51bXMgPSBkYXRhPy5za2lsbE51bXMgfHwgWzAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgICAgIHRoaXMuU2lkZUJhclJld2FyZCA9IGRhdGEgPT09IG51bGwgPyB0aGlzLlNpZGVCYXJSZXdhcmQgOiBkYXRhLlNpZGVCYXJSZXdhcmQ7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSAxXHJcbiAgICAgICAgICAgIHRoaXMubWF4TGV2ZWwgPSAxXHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9NdXNpYyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdW5kID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnZpYnJhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2tpbGxOdW1zID0gWzAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgICAgIHRoaXMuU2lkZUJhclJld2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aSE5LqO5YeG5aSH54q25oCB55qE6JOd5pa56Zif5ZGY77yI6ISa5pys77yJXHJcbiAgICBnZXRCbHVlUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5ibHVlcy5maW5kKGl0ZW0gPT4gaXRlbS5zdGF0dXMgPT09IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSlcclxuICAgICAgICByZXR1cm4gcmVhZHlcclxuICAgIH1cclxuICAgIC8vIOWwsei/keW+heS8oOeQg+eahOiTneaWuemYn+WRmO+8iOiEmuacrO+8iVxyXG4gICAgZ2V0Qmx1ZU5leHQoKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZHlJbmRleCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmJsdWVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc3RhdHVzID09PSBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkpXHJcbiAgICAgICAgaWYgKHJlYWR5SW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmx1ZXNbcmVhZHlJbmRleCArIDFdXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5bnu4jngrnvvIjohJrmnKzvvIlcclxuICAgIGdldEVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiBEYXRhTWFuYWdlci5pbnN0YW5jZS5lbmRwb2ludFxyXG4gICAgfVxyXG4gICAgLy8g5qC55o2u54K55Ye75bGP5bmV6L+U5Zue5oyH5a6a57qi5pa55oiQ5ZGY77yI6IqC54K577yJXHJcbiAgICBnZXRDYXJkRW5lbXkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVkOiBjYy5Ob2RlID0gaXRlbS5ub2RlXHJcbiAgICAgICAgICAgIC8vIOi9rOS4uuS4lueVjOWdkOagh1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IHJlZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHJlZC5wb3NpdGlvbilcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gY2MuZmluZCgnQ2FudmFzL01haW4vQ2FtZXJhJykucG9zaXRpb25cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGguYWJzKHdvcmxkLnggLSAoY2FtZXJhLnggKyB4KSlcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGguYWJzKHdvcmxkLnkgLSAoY2FtZXJhLnkgKyB5KSlcclxuICAgICAgICAgICAgaWYgKG9mZnNldFggPD0gcmVkLndpZHRoIC8gMiAmJiBvZmZzZXRZIDw9IHJlZC5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSByZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgfVxyXG4gICAgLy8g5qC55o2u54K55Ye75bGP5bmV6L+U5Zue5oyH5a6a55qE6JOd5pa55oiQ5ZGY77yI6IqC54K577yJXHJcbiAgICBnZXRQYXNzUGxheWVyKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldDogY2MuTm9kZSA9IG51bGxcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5ibHVlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBibHVlOiBjYy5Ob2RlID0gaXRlbS5ub2RlXHJcbiAgICAgICAgICAgIC8vIOi9rOS4uuS4lueVjOWdkOagh1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IGJsdWUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihibHVlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5maW5kKCdDYW52YXMvTWFpbi9DYW1lcmEnKS5wb3NpdGlvblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5hYnMod29ybGQueCAtIChjYW1lcmEueCArIHgpKVxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gTWF0aC5hYnMod29ybGQueSAtIChjYW1lcmEueSArIHkpKVxyXG4gICAgICAgICAgICBpZiAob2Zmc2V0WCA8PSBibHVlLndpZHRoIC8gMiAmJiBvZmZzZXRZIDw9IGJsdWUuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsdWUuZ2V0Q29tcG9uZW50KFBsYXllcikuc3RhdHVzICE9IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSkgdGFyZ2V0ID0gYmx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
