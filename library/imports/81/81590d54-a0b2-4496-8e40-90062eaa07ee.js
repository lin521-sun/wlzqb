"use strict";
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