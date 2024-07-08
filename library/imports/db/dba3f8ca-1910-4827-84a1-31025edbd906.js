"use strict";
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