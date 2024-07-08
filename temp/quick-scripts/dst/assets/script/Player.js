
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