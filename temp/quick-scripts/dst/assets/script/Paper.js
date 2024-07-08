
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