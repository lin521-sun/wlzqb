"use strict";
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