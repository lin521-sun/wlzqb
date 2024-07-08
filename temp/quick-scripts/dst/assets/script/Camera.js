
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dba3fjKGRBIJ4ShMQJe29kG', 'Camera');
// script/Camera.ts

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
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMove = false;
        // 位移目标位置为下一个block中心
        _this.targetPos = cc.Vec2.ZERO;
        return _this;
    }
    Camera.prototype.onLoad = function () {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, this.onCameraMove, this);
    };
    Camera.prototype.onDestroy = function () {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, this.onCameraMove);
    };
    /**
     * 当摄像机移动时触发的事件处理函数。
     * 主要用于计算和设置摄像机的目标位置，基于当前和下一个场景物体的位置。
     *
     * @param {Object} param0 包含当前和下一个场景物体位置的对象。
     * @param {cc.Vec2} param0.current 当前场景物体的位置。
     * @param {cc.Vec2} [param0.next] 下一个场景物体的位置，如果有的话。
     */
    Camera.prototype.onCameraMove = function (_a) {
        var current = _a.current, next = _a.next;
        this.isMove = false;
        var level = DataManager_1.default.instance.currentData;
        if (level['cameraMove'].x || level['cameraMove'].y) {
            this.isMove = true;
            // const endpoint = DataManager.instance.endpoint
            if (level['cameraMove'].x) {
                var moveX = current.x;
                if (next) {
                    var mid = Math.abs(next.x - current.x) / 2;
                    if (next.x >= current.x) {
                        moveX += mid;
                    }
                    else {
                        moveX -= mid;
                    }
                }
                this.targetPos.x = moveX;
            }
            else {
                this.targetPos.x = 0;
            }
            if (level['cameraMove'].y) {
                var moveY = current.y;
                if (next) {
                    var mid = Math.abs(next.y - current.y) / 2;
                    if (next.y >= current.y) {
                        moveY += mid;
                    }
                    else {
                        moveY -= mid;
                    }
                }
                if (moveY > 0)
                    moveY = Math.min(0, moveY);
                if (moveY < 0)
                    moveY = Math.min(-200, moveY + 200);
                this.targetPos.y = moveY;
            }
            else {
                this.targetPos.y = 0;
            }
        }
        else {
            this.node.setPosition(cc.Vec2.ZERO);
        }
    };
    Camera.prototype.onCameraReset = function () {
        this.isMove = false;
        this.node.setPosition(cc.Vec2.ZERO);
    };
    Camera.prototype.update = function (dt) {
        if (this.isMove) {
            // 相机所在位置
            var currentPos = this.node.getPosition();
            // 平滑过度
            currentPos.lerp(this.targetPos, 0.02, currentPos);
            this.node.setPosition(currentPos);
        }
    };
    Camera = __decorate([
        ccclass
    ], Camera);
    return Camera;
}(cc.Component));
exports.default = Camera;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLCtCQUF5QztBQUN6QyxxREFBZ0Q7QUFDaEQsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNkVDO1FBM0VHLFlBQU0sR0FBWSxLQUFLLENBQUE7UUFDdkIsb0JBQW9CO1FBQ3BCLGVBQVMsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUF5RXRDLENBQUM7SUF2RUcsdUJBQU0sR0FBTjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxzQkFBZSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2xGLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBZSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCw2QkFBWSxHQUFaLFVBQWEsRUFBaUI7WUFBZixPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBTSxLQUFLLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFBO1FBQzlDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2xCLGlEQUFpRDtZQUNqRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3JCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUM1QyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRTt3QkFDckIsS0FBSyxJQUFJLEdBQUcsQ0FBQTtxQkFDZjt5QkFBTTt3QkFDSCxLQUFLLElBQUksR0FBRyxDQUFBO3FCQUNmO2lCQUNKO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTthQUMzQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkI7WUFFRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3JCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUM1QyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRTt3QkFDckIsS0FBSyxJQUFJLEdBQUcsQ0FBQTtxQkFDZjt5QkFBTTt3QkFDSCxLQUFLLElBQUksR0FBRyxDQUFBO3FCQUNmO2lCQUNKO2dCQUNELElBQUksS0FBSyxHQUFHLENBQUM7b0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUN6QyxJQUFJLEtBQUssR0FBRyxDQUFDO29CQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQTtnQkFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO2FBQzNCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELDhCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLFNBQVM7WUFDVCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pDLE9BQU87WUFDUCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQTVFZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZFMUI7SUFBRCxhQUFDO0NBN0VELEFBNkVDLENBN0VtQyxFQUFFLENBQUMsU0FBUyxHQTZFL0M7a0JBN0VvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCB7IEVOVU1fR0FNRV9FVkVOVCB9IGZyb20gJy4vRW51bSc7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL21hbmFnZXIvRGF0YU1hbmFnZXInO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4vbWFuYWdlci9FdmVudE1hbmFnZXInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgaXNNb3ZlOiBib29sZWFuID0gZmFsc2VcclxuICAgIC8vIOS9jeenu+ebruagh+S9jee9ruS4uuS4i+S4gOS4qmJsb2Nr5Lit5b+DXHJcbiAgICB0YXJnZXRQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHRoaXMub25DYW1lcmFNb3ZlLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9mZihFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHRoaXMub25DYW1lcmFNb3ZlKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPmkYTlg4/mnLrnp7vliqjml7bop6blj5HnmoTkuovku7blpITnkIblh73mlbDjgIJcclxuICAgICAqIOS4u+imgeeUqOS6juiuoeeul+WSjOiuvue9ruaRhOWDj+acuueahOebruagh+S9jee9ru+8jOWfuuS6juW9k+WJjeWSjOS4i+S4gOS4quWcuuaZr+eJqeS9k+eahOS9jee9ruOAglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wIOWMheWQq+W9k+WJjeWSjOS4i+S4gOS4quWcuuaZr+eJqeS9k+S9jee9rueahOWvueixoeOAglxyXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBwYXJhbTAuY3VycmVudCDlvZPliY3lnLrmma/niankvZPnmoTkvY3nva7jgIJcclxuICAgICAqIEBwYXJhbSB7Y2MuVmVjMn0gW3BhcmFtMC5uZXh0XSDkuIvkuIDkuKrlnLrmma/niankvZPnmoTkvY3nva7vvIzlpoLmnpzmnInnmoTor53jgIJcclxuICAgICAqL1xyXG4gICAgb25DYW1lcmFNb3ZlKHsgY3VycmVudCwgbmV4dCB9KSB7XHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGxldmVsID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudERhdGFcclxuICAgICAgICBpZiAobGV2ZWxbJ2NhbWVyYU1vdmUnXS54IHx8IGxldmVsWydjYW1lcmFNb3ZlJ10ueSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gY29uc3QgZW5kcG9pbnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5lbmRwb2ludFxyXG4gICAgICAgICAgICBpZiAobGV2ZWxbJ2NhbWVyYU1vdmUnXS54KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW92ZVggPSBjdXJyZW50LnhcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlkID0gTWF0aC5hYnMobmV4dC54IC0gY3VycmVudC54KSAvIDJcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC54ID49IGN1cnJlbnQueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlWCArPSBtaWRcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlWCAtPSBtaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvcy54ID0gbW92ZVhcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zLnggPSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbFsnY2FtZXJhTW92ZSddLnkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb3ZlWSA9IGN1cnJlbnQueVxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmFicyhuZXh0LnkgLSBjdXJyZW50LnkpIC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0LnkgPj0gY3VycmVudC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZICs9IG1pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZIC09IG1pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlWSA+IDApIG1vdmVZID0gTWF0aC5taW4oMCwgbW92ZVkpXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZVkgPCAwKSBtb3ZlWSA9IE1hdGgubWluKC0yMDAsIG1vdmVZICsgMjAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb3MueSA9IG1vdmVZXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvcy55ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW1lcmFSZXNldCgpIHtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92ZSkge1xyXG4gICAgICAgICAgICAvLyDnm7jmnLrmiYDlnKjkvY3nva5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy8g5bmz5ruR6L+H5bqmXHJcbiAgICAgICAgICAgIGN1cnJlbnRQb3MubGVycCh0aGlzLnRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19