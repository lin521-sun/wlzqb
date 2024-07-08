"use strict";
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