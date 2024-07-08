
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