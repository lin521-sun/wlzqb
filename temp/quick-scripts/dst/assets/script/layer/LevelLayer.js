
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