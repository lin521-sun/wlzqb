
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