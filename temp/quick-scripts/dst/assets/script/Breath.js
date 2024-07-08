
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