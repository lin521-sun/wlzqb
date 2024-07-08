
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec912nHvPNB/pYgN9JyOtzu', 'Ball');
// script/Ball.ts

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
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var EventManager_1 = require("./manager/EventManager");
var Player_1 = require("./Player");
var StaticInstance_1 = require("./StaticInstance");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 3000;
        _this.speedMin = 300;
        return _this;
    }
    Ball.prototype.init = function (data) {
        Object.assign(this, data);
        this.rendor();
    };
    Ball.prototype.rendor = function () {
        this.node.setPosition(this.x, this.y);
    };
    /**
     * 控制足球移动的函数
     * @param start 发起移动的球员
     * @param end 移动的终点，可能是另一名球员或终点
     * @param progress 移动的进度，用于计算移动速度和触发不同阶段的事件
     */
    Ball.prototype.move = function (start, end, progress) {
        var _this = this;
        // 踢球状态
        start.setStatus(Enum_1.ENUM_PLAYER_STATUS.SHOOTING);
        start.playEffect();
        this.node.getChildByName('Shield').active = DataManager_1.default.instance.powerCount >= DataManager_1.default.instance.powerCountTarget;
        var spos = start.node.getPosition();
        var epos = end.node.getPosition();
        var distance = spos.sub(epos).mag();
        var moveSpeed = this.speed * progress;
        if (progress >= 0.5 && progress <= 0.7) {
            moveSpeed = this.speed * 0.5;
        }
        else if (progress < 0.5 && progress >= 0) {
            // 满能量
            if (DataManager_1.default.instance.powerCount == DataManager_1.default.instance.powerCountTarget) {
                moveSpeed = this.speed;
            }
            else {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.BOO);
                moveSpeed = this.speedMin;
            }
        }
        var moveTime = distance / moveSpeed;
        cc.tween(this.node).to(moveTime, { position: cc.v3(epos.x, epos.y, 0) }).call(function () {
            // 接球音效
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CATCH);
            // 移动足球销毁
            _this.node.destroy();
            // 回待机状态
            start.setStatus(Enum_1.ENUM_PLAYER_STATUS.IDLE);
            if (end instanceof Player_1.default) {
                // 进持球状态
                end.setStatus(Enum_1.ENUM_PLAYER_STATUS.READY);
                end.setCircleActive(false);
                var x = 0, y = 0;
                var next = DataManager_1.default.instance.getBlueNext();
                if (next) {
                    x = next.x;
                    y = next.y;
                    next.turnTo(end.x, end.y);
                    next.setCircleActive(true);
                    // 移动相机
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: next });
                }
                else {
                    var endpoint = DataManager_1.default.instance.getEndpoint();
                    x = endpoint.x;
                    y = endpoint.y;
                    // 移动相机
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: endpoint });
                }
                end.turnTo(x, y);
                // 接球效果
                if (progress > 0.7 && progress <= 1)
                    end.playEffect();
            }
            else {
                // 球门显示足球
                end.setBallActive(true);
            }
            // 判断能量槽情况，游戏状态切换
            if (DataManager_1.default.instance.status === Enum_1.ENUM_GAME_STATUS.SHOOTING) {
                DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.RUNING;
                // 技能饮品
                if (DataManager_1.default.instance.powerEffectLoop <= 0) {
                    // 增益食物
                    if (DataManager_1.default.instance.foodEffectLoop <= 0) {
                        DataManager_1.default.instance.powerCount += 1;
                        if (DataManager_1.default.instance.powerCount > DataManager_1.default.instance.powerCountTarget) {
                            DataManager_1.default.instance.powerCount = 0;
                        }
                        StaticInstance_1.StaticInstance.uiManager.setPowerBar();
                    }
                    else {
                        DataManager_1.default.instance.foodEffectLoop -= 1;
                    }
                }
                else {
                    DataManager_1.default.instance.powerEffectLoop -= 1;
                }
                if (DataManager_1.default.instance.powerCount == DataManager_1.default.instance.powerCountTarget) {
                    StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('必杀技');
                    StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                    AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SKILL);
                }
            }
            // 音效
            if (progress > 0.7 && progress <= 0.8) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('好球');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GOOD);
            }
            else if (progress > 0.8 && progress <= 0.85) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('漂亮');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GREAT);
            }
            else if (progress > 0.85 && progress <= 0.9) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('哇~');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.EXCELLENT);
            }
            else if (progress > 0.9 && progress <= 0.95) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('牛牛牛');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.AMAZING);
            }
            else if (progress > 0.95 && progress <= 1) {
                StaticInstance_1.StaticInstance.uiManager.setNoticeLabel('世界波');
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.NOTICE);
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.UNBELIEVABLE);
            }
        }).start();
    };
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3BELHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBQzdEO2lCQUFNLElBQUksUUFBUSxHQUFHLEdBQUcsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUMzQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlDLCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNwRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUMzRDtpQkFBTSxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtnQkFDekMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUM5QywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDcEQsc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDaEU7UUFFTCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFuSWdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FvSXhCO0lBQUQsV0FBQztDQXBJRCxBQW9JQyxDQXBJaUMsRUFBRSxDQUFDLFNBQVMsR0FvSTdDO2tCQXBJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IEVuZHBvaW50IGZyb20gXCIuL0VuZHBvaW50XCI7XHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9HQU1FX0VWRU5ULCBFTlVNX0dBTUVfU1RBVFVTLCBFTlVNX1BMQVlFUl9TVEFUVVMsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuL0VudW1cIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4vU3RhdGljSW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDMwMDBcclxuICAgIHNwZWVkTWluOiBudW1iZXIgPSAzMDBcclxuXHJcbiAgICBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSlcclxuICAgICAgICB0aGlzLnJlbmRvcigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9yKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o6n5Yi26Laz55CD56e75Yqo55qE5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQg5Y+R6LW356e75Yqo55qE55CD5ZGYXHJcbiAgICAgKiBAcGFyYW0gZW5kIOenu+WKqOeahOe7iOeCue+8jOWPr+iDveaYr+WPpuS4gOWQjeeQg+WRmOaIlue7iOeCuVxyXG4gICAgICogQHBhcmFtIHByb2dyZXNzIOenu+WKqOeahOi/m+W6pu+8jOeUqOS6juiuoeeul+enu+WKqOmAn+W6puWSjOinpuWPkeS4jeWQjOmYtuauteeahOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBtb3ZlKHN0YXJ0OiBQbGF5ZXIsIGVuZDogUGxheWVyIHwgRW5kcG9pbnQsIHByb2dyZXNzOiBudW1iZXIpIHtcclxuICAgICAgICAvLyDouKLnkIPnirbmgIFcclxuICAgICAgICBzdGFydC5zZXRTdGF0dXMoRU5VTV9QTEFZRVJfU1RBVFVTLlNIT09USU5HKVxyXG4gICAgICAgIHN0YXJ0LnBsYXlFZmZlY3QoKVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2hpZWxkJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudCA+PSBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICAgICAgY29uc3Qgc3BvcyA9IHN0YXJ0Lm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIGNvbnN0IGVwb3MgPSBlbmQubm9kZS5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzcG9zLnN1YihlcG9zKS5tYWcoKVxyXG5cclxuICAgICAgICBsZXQgbW92ZVNwZWVkID0gdGhpcy5zcGVlZCAqIHByb2dyZXNzXHJcbiAgICAgICAgaWYgKHByb2dyZXNzID49IDAuNSAmJiBwcm9ncmVzcyA8PSAwLjcpIHtcclxuICAgICAgICAgICAgbW92ZVNwZWVkID0gdGhpcy5zcGVlZCAqIDAuNVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwLjUgJiYgcHJvZ3Jlc3MgPj0gMCkge1xyXG4gICAgICAgICAgICAvLyDmu6Hog73ph49cclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPT0gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZVNwZWVkID0gdGhpcy5zcGVlZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQk9PKVxyXG4gICAgICAgICAgICAgICAgbW92ZVNwZWVkID0gdGhpcy5zcGVlZE1pblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1vdmVUaW1lID0gZGlzdGFuY2UgLyBtb3ZlU3BlZWRcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byhtb3ZlVGltZSwgeyBwb3NpdGlvbjogY2MudjMoZXBvcy54LCBlcG9zLnksIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDmjqXnkIPpn7PmlYhcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0FUQ0gpXHJcbiAgICAgICAgICAgIC8vIOenu+WKqOi2s+eQg+mUgOavgVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIC8vIOWbnuW+heacuueKtuaAgVxyXG4gICAgICAgICAgICBzdGFydC5zZXRTdGF0dXMoRU5VTV9QTEFZRVJfU1RBVFVTLklETEUpXHJcbiAgICAgICAgICAgIGlmIChlbmQgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOi/m+aMgeeQg+eKtuaAgVxyXG4gICAgICAgICAgICAgICAgZW5kLnNldFN0YXR1cyhFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkpXHJcbiAgICAgICAgICAgICAgICBlbmQuc2V0Q2lyY2xlQWN0aXZlKGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB4ID0gMCwgeSA9IDBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRCbHVlTmV4dCgpXHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSBuZXh0LnhcclxuICAgICAgICAgICAgICAgICAgICB5ID0gbmV4dC55XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dC50dXJuVG8oZW5kLngsIGVuZC55KVxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQuc2V0Q2lyY2xlQWN0aXZlKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g56e75Yqo55u45py6XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULkNBTUVSQV9NT1ZFLCB7IGN1cnJlbnQ6IGVuZC5ub2RlLCBuZXh0OiBuZXh0IH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0RW5kcG9pbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHggPSBlbmRwb2ludC54XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IGVuZHBvaW50LnlcclxuICAgICAgICAgICAgICAgICAgICAvLyDnp7vliqjnm7jmnLpcclxuICAgICAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHsgY3VycmVudDogZW5kLm5vZGUsIG5leHQ6IGVuZHBvaW50IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbmQudHVyblRvKHgsIHkpXHJcbiAgICAgICAgICAgICAgICAvLyDmjqXnkIPmlYjmnpxcclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDAuNyAmJiBwcm9ncmVzcyA8PSAxKSBlbmQucGxheUVmZmVjdCgpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g55CD6Zeo5pi+56S66Laz55CDXHJcbiAgICAgICAgICAgICAgICBlbmQuc2V0QmFsbEFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliKTmlq3og73ph4/mp73mg4XlhrXvvIzmuLjmiI/nirbmgIHliIfmjaJcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9PT0gRU5VTV9HQU1FX1NUQVRVUy5TSE9PVElORykge1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkdcclxuICAgICAgICAgICAgICAgIC8vIOaKgOiDvemlruWTgVxyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyRWZmZWN0TG9vcCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aKe55uK6aOf54mpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RFZmZlY3RMb29wIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudCArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50ID4gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudCA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0UG93ZXJCYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmZvb2RFZmZlY3RMb29wIC09IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyRWZmZWN0TG9vcCAtPSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPT0gRGF0YU1hbmFnZXIuaW5zdGFuY2UucG93ZXJDb3VudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXROb3RpY2VMYWJlbCgn5b+F5p2A5oqAJylcclxuICAgICAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5OT1RJQ0UpXHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU0tJTEwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOmfs+aViFxyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwLjcgJiYgcHJvZ3Jlc3MgPD0gMC44KSB7XHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0Tm90aWNlTGFiZWwoJ+WlveeQgycpXHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5OT1RJQ0UpXHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5HT09EKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gMC44ICYmIHByb2dyZXNzIDw9IDAuODUpIHtcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXROb3RpY2VMYWJlbCgn5ryC5LquJylcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLk5PVElDRSlcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkdSRUFUKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gMC44NSAmJiBwcm9ncmVzcyA8PSAwLjkpIHtcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXROb3RpY2VMYWJlbCgn5ZOHficpXHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5OT1RJQ0UpXHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5FWENFTExFTlQpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPiAwLjkgJiYgcHJvZ3Jlc3MgPD0gMC45NSkge1xyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE5vdGljZUxhYmVsKCfniZvniZvniZsnKVxyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTk9USUNFKVxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQU1BWklORylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA+IDAuOTUgJiYgcHJvZ3Jlc3MgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE5vdGljZUxhYmVsKCfkuJbnlYzms6InKVxyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTk9USUNFKVxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuVU5CRUxJRVZBQkxFKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxufVxyXG4iXX0=