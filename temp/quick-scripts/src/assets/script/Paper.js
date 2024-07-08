"use strict";
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