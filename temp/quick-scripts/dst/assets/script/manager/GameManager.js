
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07295RwCc1KQoWqFTn/8mjp', 'GameManager');
// script/manager/GameManager.ts

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
var Ball_1 = require("../Ball");
var Endpoint_1 = require("../Endpoint");
var Enemy_1 = require("../Enemy");
var Enum_1 = require("../Enum");
var Food_1 = require("../Food");
var Levels_1 = require("../Levels");
var Player_1 = require("../Player");
var StaticInstance_1 = require("../StaticInstance");
var Utils_1 = require("../Utils");
var AudioManager_1 = require("./AudioManager");
var DataManager_1 = require("./DataManager");
var EventManager_1 = require("./EventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stageNode = null;
        _this.bluePrefab = [];
        _this.redPrefab = [];
        _this.ballPrefab = null;
        _this.foodPrefab = null;
        _this.endpointPrefab = null;
        _this.levelLabel = null;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_RESTART, this.onGameRestart, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_NEXT, this.onGameNext, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_WIN, this.onGameWin, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_LOSE, this.onGameLose, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, this.onPlayerShoot, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_VIBRATE, this.onVibrate, this);
    };
    /**
     * 触发振动功能。
     * 该方法首先检查是否存在名为"tt"的全局对象，如果是，则调用其vibrateLong方法进行长时间振动。
     * 如果不存在"tt"对象，但存在名为"wx"的全局对象，则调用wx的vibrateLong方法进行长时间振动。
     * 这种做法兼容了不同平台或框架中触发振动的API调用。
     */
    GameManager.prototype.onVibrate = function () {
        if (window["tt"]) {
            tt.vibrateLong({
                success: function (res) {
                    console.log(res);
                },
                fail: function (res) {
                    console.log("vibrateLong\u8C03\u7528\u5931\u8D25");
                },
            });
        }
        else if (window["wx"]) {
            wx.vibrateLong({
                success: function (res) {
                    console.log(res);
                },
                fail: function (res) {
                    console.log("vibrateLong\u8C03\u7528\u5931\u8D25");
                },
            });
        }
    };
    /**
     * 当游戏重新启动时调用此方法。
     *
     * 本方法负责触发数据管理器的重置操作，并初始化游戏。
     * 它是游戏重启流程中的关键步骤，确保游戏状态被正确重置，
     * 为新的游戏循环提供干净的数据环境。
     */
    GameManager.prototype.onGameRestart = function () {
        DataManager_1.default.instance.reset();
        this.initGame();
    };
    /**
     * 处理游戏进入下一关的操作。
     * 当前关卡完成并满足进入下一关的条件后，此方法将被调用。
     * 它主要负责更新关卡进度、重置数据并初始化下一关的游戏。
     */
    GameManager.prototype.onGameNext = function () {
        if (DataManager_1.default.instance.level < Levels_1.Levels.length)
            DataManager_1.default.instance.level++;
        DataManager_1.default.instance.reset();
        this.initGame();
    };
    /**
     * 处理游戏胜利时的逻辑。
     * 停止记录游戏，检查是否完成所有关卡，更新游戏状态，播放胜利音效，并显示相应的UI。
     * 如果当前关卡是最高关卡，则更新最高关卡记录。
     */
    GameManager.prototype.onGameWin = function () {
        StaticInstance_1.StaticInstance.uiManager.stopRecord();
        var maxLevel = DataManager_1.default.instance.level + 1;
        if (maxLevel > Levels_1.Levels.length) {
            maxLevel = Levels_1.Levels.length;
            // 完成所有关卡
            StaticInstance_1.StaticInstance.uiManager.showCompleteNotice(true);
        }
        else {
            StaticInstance_1.StaticInstance.uiManager.showCompleteNotice(false);
        }
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.WIN;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.WIN);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.WIN);
        if (maxLevel > DataManager_1.default.instance.maxLevel) {
            DataManager_1.default.instance.maxLevel = maxLevel;
            // 排行榜设置
            // SdkManager.instance.setRankScore(maxLevel)
        }
    };
    /**
     * 初始化游戏的函数，负责设置游戏的初始状态，包括加载关卡数据、创建游戏场景中的对象等。
     */
    GameManager.prototype.onGameLose = function (msg) {
        if (msg === void 0) { msg = '被抢断'; }
        StaticInstance_1.StaticInstance.uiManager.stopRecord();
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.LOSE;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.LOSE);
        StaticInstance_1.StaticInstance.uiManager.setLoseTitle(msg);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE);
    };
    GameManager.prototype.initGame = function () {
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.INIT;
        var level = DataManager_1.default.instance.level;
        var current = DataManager_1.default.instance.currentData;
        if (!current) {
            // 关卡数据
            if (level > Levels_1.Levels.length)
                level = Levels_1.Levels.length;
            current = Utils_1.clone(Levels_1.Levels[level - 1]);
            if (!current['endpoint'])
                return;
            DataManager_1.default.instance.level = level;
            DataManager_1.default.instance.currentData = current;
        }
        this.levelLabel.string = "" + level;
        // 清除节点信息
        this.stageNode.removeAllChildren();
        // 初始化蓝方
        for (var i = 0; i < current['blue'].length; i++) {
            var data = current['blue'][i];
            var blue = cc.instantiate(this.bluePrefab[0]);
            blue.parent = this.stageNode;
            var params = { x: data.x, y: data.y, angle: data.angle, status: data.status };
            blue.getComponent(Player_1.default).init(params);
            // 生成防守队员
            if (data['red'] && data['red'].length) {
                for (var j = 0; j < data['red'].length; j++) {
                    if (!this.redPrefab)
                        break;
                    var redData = data['red'][j];
                    var red = cc.instantiate(this.redPrefab[0]);
                    red.parent = this.stageNode;
                    var redComp = red.getComponent(Enemy_1.default);
                    redComp.setParent(data);
                    redComp.init(redData);
                }
            }
            // 生成增益道具
            if (data['food'] && data['food'].length) {
                for (var k = 0; k < data['food'].length; k++) {
                    if (!this.foodPrefab)
                        break;
                    var foodData = data['food'][k];
                    var food = cc.instantiate(this.foodPrefab);
                    food.parent = this.stageNode;
                    var redComp = food.getComponent(Food_1.default);
                    redComp.setParent(data);
                    redComp.init(foodData);
                }
            }
        }
        // 终点球门
        var endpoint = cc.instantiate(this.endpointPrefab);
        endpoint.parent = this.stageNode;
        endpoint.getComponent(Endpoint_1.default).init({ x: current['endpoint'].x, y: current['endpoint'].y, angle: current['endpoint'].angle });
        if (current['endpoint']['red'].length) {
            for (var j = 0; j < current['endpoint']['red'].length; j++) {
                var redData = current['endpoint']['red'][j];
                var red = cc.instantiate(this.redPrefab[0]);
                red.parent = this.stageNode;
                red.getComponent(Enemy_1.default).init(redData);
            }
        }
        // 蓝方转向
        var blueReady = DataManager_1.default.instance.getBlueReady();
        var blueNext = DataManager_1.default.instance.getBlueNext();
        if (blueNext) {
            blueReady.turnTo(blueNext.x, blueNext.y);
            blueNext.turnTo(blueReady.x, blueReady.y);
            blueNext.setCircleActive(true);
            // 摄像机移动
            EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: blueReady, next: blueNext });
        }
        else {
            blueReady.turnTo(endpoint.x, endpoint.y);
            // 摄像机移动
            EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.CAMERA_MOVE, { current: blueReady, next: endpoint });
        }
        // 初始化技能条
        StaticInstance_1.StaticInstance.uiManager.setPowerBar();
        // 设置对战队名
        StaticInstance_1.StaticInstance.uiManager.setTeamLabel();
        // // 设置技能点
        // StaticInstance.uiManager.setPropNum()
        // 是否有提示
        if (current['isTip']) {
            StaticInstance_1.StaticInstance.uiManager.setTip(level);
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.TIP);
        }
        else {
            // 计时器开启
            EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_START);
        }
        // 初始化完毕
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.RUNING;
    };
    /**
     * 玩家射门
     * 首先，它检查游戏状态是否为运行中（RUNING），如果不是，则直接返回，不执行任何操作。

        接下来，将游戏状态设置为射击状态（SHOOTING）。

        然后，播放开火声音（AUDIO_CLIP.SHOOT）。

        从传入的数据中获取射击进度（progress）。

        获取蓝色队伍的准备状态（getBlueReady）。

        获取蓝色队伍的下一个目标位置（getBlueNext），如果传入的数据中包含下一个目标位置（next），则使用该位置代替默认的下一个目标位置。

        如果蓝色队伍已准备就绪，则实例化一个足球对象（ball），将其父对象设置为舞台节点（stageNode）。

        初始化足球对象的位置（x, y）。

        根据是否有下一个目标位置，确定足球的移动终点。

        调用足球对象的移动方法（move），传入起点、终点和射击进度，使足球开始移动。
     */
    GameManager.prototype.onPlayerShoot = function (data) {
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.SHOOTING;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SHOOT);
        var progress = data.progress;
        var start = DataManager_1.default.instance.getBlueReady();
        var next = DataManager_1.default.instance.getBlueNext();
        if (data === null || data === void 0 ? void 0 : data.next) {
            next = data.next;
        }
        if (start) {
            // start.shoot()
            // 移动的足球
            var ball = cc.instantiate(this.ballPrefab);
            ball.parent = this.stageNode;
            var end = null;
            if (next) {
                end = next;
            }
            else {
                end = DataManager_1.default.instance.getEndpoint();
            }
            var ballCom = ball.getComponent(Ball_1.default);
            ballCom.init({ x: start.x, y: start.y });
            ballCom.move(start, end, progress);
        }
    };
    GameManager.prototype.onDestroy = function () {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_RESTART, this.onGameRestart);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_NEXT, this.onGameNext);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_WIN, this.onGameWin);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_LOSE, this.onGameLose);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, this.onPlayerShoot);
    };
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "stageNode", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameManager.prototype, "bluePrefab", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameManager.prototype, "redPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "ballPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "foodPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "endpointPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "levelLabel", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsZ0NBQTJCO0FBQzNCLHdDQUFtQztBQUNuQyxrQ0FBNkI7QUFDN0IsZ0NBQTJGO0FBQzNGLGdDQUEyQjtBQUMzQixvQ0FBbUM7QUFDbkMsb0NBQStCO0FBQy9CLG9EQUFtRDtBQUNuRCxrQ0FBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFHcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtUUM7UUFoUUcsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFnQixFQUFFLENBQUE7UUFFNUIsZUFBUyxHQUFnQixFQUFFLENBQUE7UUFFM0IsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsb0JBQWMsR0FBYyxJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBYSxJQUFJLENBQUE7O0lBb1AvQixDQUFDO0lBbFBHLDRCQUFNLEdBQU47UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMxRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4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QVcsQ0FtUS9CO0lBQUQsa0JBQUM7Q0FuUUQsQUFtUUMsQ0FuUXdDLEVBQUUsQ0FBQyxTQUFTLEdBbVFwRDtrQkFuUW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbCBcclxuXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuLi9CYWxsXCI7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tIFwiLi4vRW5kcG9pbnRcIjtcclxuaW1wb3J0IEVuZW15IGZyb20gXCIuLi9FbmVteVwiO1xyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9FVkVOVCwgRU5VTV9HQU1FX1NUQVRVUywgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4uL0Zvb2RcIjtcclxuaW1wb3J0IHsgTGV2ZWxzIH0gZnJvbSBcIi4uL0xldmVsc1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tIFwiLi4vU3RhdGljSW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgY2xvbmUsIGdldFJhbmRvbSB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9FdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFNka01hbmFnZXIgZnJvbSBcIi4vU2RrTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBsZXQgdHQ6IGFueTtcclxuZGVjbGFyZSBsZXQgd3g6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RhZ2VOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgYmx1ZVByZWZhYjogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcmVkUHJlZmFiOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZvb2RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBlbmRwb2ludFByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuR0FNRV9SRVNUQVJULCB0aGlzLm9uR2FtZVJlc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9uKEVOVU1fR0FNRV9FVkVOVC5HQU1FX05FWFQsIHRoaXMub25HYW1lTmV4dCwgdGhpcylcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub24oRU5VTV9HQU1FX0VWRU5ULkdBTUVfV0lOLCB0aGlzLm9uR2FtZVdpbiwgdGhpcylcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub24oRU5VTV9HQU1FX0VWRU5ULkdBTUVfTE9TRSwgdGhpcy5vbkdhbWVMb3NlLCB0aGlzKVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuUExBWUVSX1NIT09ULCB0aGlzLm9uUGxheWVyU2hvb3QsIHRoaXMpXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLm9uKEVOVU1fR0FNRV9FVkVOVC5HQU1FX1ZJQlJBVEUsIHRoaXMub25WaWJyYXRlLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDop6blj5HmjK/liqjlip/og73jgIJcclxuICAgICAqIOivpeaWueazlemmluWFiOajgOafpeaYr+WQpuWtmOWcqOWQjeS4ulwidHRcIueahOWFqOWxgOWvueixoe+8jOWmguaenOaYr++8jOWImeiwg+eUqOWFtnZpYnJhdGVMb25n5pa55rOV6L+b6KGM6ZW/5pe26Ze05oyv5Yqo44CCXHJcbiAgICAgKiDlpoLmnpzkuI3lrZjlnKhcInR0XCLlr7nosaHvvIzkvYblrZjlnKjlkI3kuLpcInd4XCLnmoTlhajlsYDlr7nosaHvvIzliJnosIPnlKh3eOeahHZpYnJhdGVMb25n5pa55rOV6L+b6KGM6ZW/5pe26Ze05oyv5Yqo44CCXHJcbiAgICAgKiDov5nnp43lgZrms5XlhbzlrrnkuobkuI3lkIzlubPlj7DmiJbmoYbmnrbkuK3op6blj5HmjK/liqjnmoRBUEnosIPnlKjjgIJcclxuICAgICAqL1xyXG4gICAgb25WaWJyYXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICB0dC52aWJyYXRlTG9uZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdmlicmF0ZUxvbmfosIPnlKjlpLHotKVgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3aW5kb3dbXCJ3eFwiXSkge1xyXG4gICAgICAgICAgICB3eC52aWJyYXRlTG9uZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdmlicmF0ZUxvbmfosIPnlKjlpLHotKVgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T5ri45oiP6YeN5paw5ZCv5Yqo5pe26LCD55So5q2k5pa55rOV44CCXHJcbiAgICAgKiBcclxuICAgICAqIOacrOaWueazlei0n+i0o+inpuWPkeaVsOaNrueuoeeQhuWZqOeahOmHjee9ruaTjeS9nO+8jOW5tuWIneWni+WMlua4uOaIj+OAglxyXG4gICAgICog5a6D5piv5ri45oiP6YeN5ZCv5rWB56iL5Lit55qE5YWz6ZSu5q2l6aqk77yM56Gu5L+d5ri45oiP54q25oCB6KKr5q2j56Gu6YeN572u77yMXHJcbiAgICAgKiDkuLrmlrDnmoTmuLjmiI/lvqrnjq/mj5DkvpvlubLlh4DnmoTmlbDmja7njq/looPjgIJcclxuICAgICAqL1xyXG4gICAgb25HYW1lUmVzdGFydCgpIHtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yZXNldCgpXHJcbiAgICAgICAgdGhpcy5pbml0R2FtZSgpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhua4uOaIj+i/m+WFpeS4i+S4gOWFs+eahOaTjeS9nOOAglxyXG4gICAgICog5b2T5YmN5YWz5Y2h5a6M5oiQ5bm25ruh6Laz6L+b5YWl5LiL5LiA5YWz55qE5p2h5Lu25ZCO77yM5q2k5pa55rOV5bCG6KKr6LCD55So44CCXHJcbiAgICAgKiDlroPkuLvopoHotJ/otKPmm7TmlrDlhbPljaHov5vluqbjgIHph43nva7mlbDmja7lubbliJ3lp4vljJbkuIvkuIDlhbPnmoTmuLjmiI/jgIJcclxuICAgICAqL1xyXG4gICAgb25HYW1lTmV4dCgpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgPCBMZXZlbHMubGVuZ3RoKSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbCsrXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVzZXQoKVxyXG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbmuLjmiI/og5zliKnml7bnmoTpgLvovpHjgIJcclxuICAgICAqIOWBnOatouiusOW9lea4uOaIj++8jOajgOafpeaYr+WQpuWujOaIkOaJgOacieWFs+WNoe+8jOabtOaWsOa4uOaIj+eKtuaAge+8jOaSreaUvuiDnOWIqemfs+aViO+8jOW5tuaYvuekuuebuOW6lOeahFVJ44CCXHJcbiAgICAgKiDlpoLmnpzlvZPliY3lhbPljaHmmK/mnIDpq5jlhbPljaHvvIzliJnmm7TmlrDmnIDpq5jlhbPljaHorrDlvZXjgIJcclxuICAgICAqL1xyXG4gICAgb25HYW1lV2luKCkge1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zdG9wUmVjb3JkKCk7XHJcbiAgICAgICAgbGV0IG1heExldmVsID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgKyAxXHJcbiAgICAgICAgaWYgKG1heExldmVsID4gTGV2ZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtYXhMZXZlbCA9IExldmVscy5sZW5ndGhcclxuICAgICAgICAgICAgLy8g5a6M5oiQ5omA5pyJ5YWz5Y2hXHJcbiAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zaG93Q29tcGxldGVOb3RpY2UodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2hvd0NvbXBsZXRlTm90aWNlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLldJTlxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLldJTilcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5XSU4pXHJcblxyXG4gICAgICAgIGlmIChtYXhMZXZlbCA+IERhdGFNYW5hZ2VyLmluc3RhbmNlLm1heExldmVsKSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLm1heExldmVsID0gbWF4TGV2ZWxcclxuICAgICAgICAgICAgLy8g5o6S6KGM5qac6K6+572uXHJcbiAgICAgICAgICAgIC8vIFNka01hbmFnZXIuaW5zdGFuY2Uuc2V0UmFua1Njb3JlKG1heExldmVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5ri45oiP55qE5Ye95pWw77yM6LSf6LSj6K6+572u5ri45oiP55qE5Yid5aeL54q25oCB77yM5YyF5ous5Yqg6L295YWz5Y2h5pWw5o2u44CB5Yib5bu65ri45oiP5Zy65pmv5Lit55qE5a+56LGh562J44CCXHJcbiAgICAgKi9cclxuICAgIG9uR2FtZUxvc2UobXNnOiBzdHJpbmcgPSAn6KKr5oqi5patJykge1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zdG9wUmVjb3JkKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5MT1NFXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuTE9TRSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TG9zZVRpdGxlKG1zZylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5MT1NFKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRHYW1lKCkge1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9IEVOVU1fR0FNRV9TVEFUVVMuSU5JVFxyXG4gICAgICAgIGxldCBsZXZlbCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsXHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50RGF0YVxyXG4gICAgICAgIGlmICghY3VycmVudCkge1xyXG4gICAgICAgICAgICAvLyDlhbPljaHmlbDmja5cclxuICAgICAgICAgICAgaWYgKGxldmVsID4gTGV2ZWxzLmxlbmd0aCkgbGV2ZWwgPSBMZXZlbHMubGVuZ3RoXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjbG9uZShMZXZlbHNbbGV2ZWwgLSAxXSlcclxuICAgICAgICAgICAgaWYgKCFjdXJyZW50WydlbmRwb2ludCddKSByZXR1cm5cclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWwgPSBsZXZlbFxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50RGF0YSA9IGN1cnJlbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBgJHtsZXZlbH1gXHJcbiAgICAgICAgLy8g5riF6Zmk6IqC54K55L+h5oGvXHJcbiAgICAgICAgdGhpcy5zdGFnZU5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIC8vIOWIneWni+WMluiTneaWuVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFsnYmx1ZSddLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjdXJyZW50WydibHVlJ11baV1cclxuICAgICAgICAgICAgY29uc3QgYmx1ZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmx1ZVByZWZhYlswXSlcclxuICAgICAgICAgICAgYmx1ZS5wYXJlbnQgPSB0aGlzLnN0YWdlTm9kZVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHg6IGRhdGEueCwgeTogZGF0YS55LCBhbmdsZTogZGF0YS5hbmdsZSwgc3RhdHVzOiBkYXRhLnN0YXR1cyB9XHJcbiAgICAgICAgICAgIGJsdWUuZ2V0Q29tcG9uZW50KFBsYXllcikuaW5pdChwYXJhbXMpXHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOmYsuWuiOmYn+WRmFxyXG4gICAgICAgICAgICBpZiAoZGF0YVsncmVkJ10gJiYgZGF0YVsncmVkJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbJ3JlZCddLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZFByZWZhYikgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWREYXRhID0gZGF0YVsncmVkJ11bal1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWQ6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlZFByZWZhYlswXSlcclxuICAgICAgICAgICAgICAgICAgICByZWQucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWRDb21wID0gcmVkLmdldENvbXBvbmVudChFbmVteSlcclxuICAgICAgICAgICAgICAgICAgICByZWRDb21wLnNldFBhcmVudChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZENvbXAuaW5pdChyZWREYXRhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOWinuebiumBk+WFt1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsnZm9vZCddICYmIGRhdGFbJ2Zvb2QnXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGF0YVsnZm9vZCddLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvb2RQcmVmYWIpIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9vZERhdGEgPSBkYXRhWydmb29kJ11ba11cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb29kOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5mb29kUHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb2QucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWRDb21wID0gZm9vZC5nZXRDb21wb25lbnQoRm9vZClcclxuICAgICAgICAgICAgICAgICAgICByZWRDb21wLnNldFBhcmVudChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZENvbXAuaW5pdChmb29kRGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnu4jngrnnkIPpl6hcclxuICAgICAgICBjb25zdCBlbmRwb2ludDogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5kcG9pbnRQcmVmYWIpXHJcbiAgICAgICAgZW5kcG9pbnQucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICBlbmRwb2ludC5nZXRDb21wb25lbnQoRW5kcG9pbnQpLmluaXQoeyB4OiBjdXJyZW50WydlbmRwb2ludCddLngsIHk6IGN1cnJlbnRbJ2VuZHBvaW50J10ueSwgYW5nbGU6IGN1cnJlbnRbJ2VuZHBvaW50J10uYW5nbGUgfSlcclxuICAgICAgICBpZiAoY3VycmVudFsnZW5kcG9pbnQnXVsncmVkJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFsnZW5kcG9pbnQnXVsncmVkJ10ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZERhdGEgPSBjdXJyZW50WydlbmRwb2ludCddWydyZWQnXVtqXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVkOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5yZWRQcmVmYWJbMF0pXHJcbiAgICAgICAgICAgICAgICByZWQucGFyZW50ID0gdGhpcy5zdGFnZU5vZGVcclxuICAgICAgICAgICAgICAgIHJlZC5nZXRDb21wb25lbnQoRW5lbXkpLmluaXQocmVkRGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDok53mlrnovazlkJFcclxuICAgICAgICBjb25zdCBibHVlUmVhZHkgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRCbHVlUmVhZHkoKVxyXG4gICAgICAgIGNvbnN0IGJsdWVOZXh0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Qmx1ZU5leHQoKVxyXG4gICAgICAgIGlmIChibHVlTmV4dCkge1xyXG4gICAgICAgICAgICBibHVlUmVhZHkudHVyblRvKGJsdWVOZXh0LngsIGJsdWVOZXh0LnkpXHJcbiAgICAgICAgICAgIGJsdWVOZXh0LnR1cm5UbyhibHVlUmVhZHkueCwgYmx1ZVJlYWR5LnkpXHJcbiAgICAgICAgICAgIGJsdWVOZXh0LnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICAvLyDmkYTlg4/mnLrnp7vliqhcclxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULkNBTUVSQV9NT1ZFLCB7IGN1cnJlbnQ6IGJsdWVSZWFkeSwgbmV4dDogYmx1ZU5leHQgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBibHVlUmVhZHkudHVyblRvKGVuZHBvaW50LngsIGVuZHBvaW50LnkpXHJcbiAgICAgICAgICAgIC8vIOaRhOWDj+acuuenu+WKqFxyXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuQ0FNRVJBX01PVkUsIHsgY3VycmVudDogYmx1ZVJlYWR5LCBuZXh0OiBlbmRwb2ludCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliJ3lp4vljJbmioDog73mnaFcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0UG93ZXJCYXIoKVxyXG4gICAgICAgIC8vIOiuvue9ruWvueaImOmYn+WQjVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRUZWFtTGFiZWwoKVxyXG4gICAgICAgIC8vIC8vIOiuvue9ruaKgOiDveeCuVxyXG4gICAgICAgIC8vIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRQcm9wTnVtKClcclxuICAgICAgICAvLyDmmK/lkKbmnInmj5DnpLpcclxuICAgICAgICBpZiAoY3VycmVudFsnaXNUaXAnXSkge1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0VGlwKGxldmVsKVxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5USVApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6K6h5pe25Zmo5byA5ZCvXHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5USU1FUl9TVEFSVClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5a6M5q+VXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkdcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuWwhOmXqFxyXG4gICAgICog6aaW5YWI77yM5a6D5qOA5p+l5ri45oiP54q25oCB5piv5ZCm5Li66L+Q6KGM5Lit77yIUlVOSU5H77yJ77yM5aaC5p6c5LiN5piv77yM5YiZ55u05o6l6L+U5Zue77yM5LiN5omn6KGM5Lu75L2V5pON5L2c44CCXHJcblxyXG4gICAgICAgIOaOpeS4i+adpe+8jOWwhua4uOaIj+eKtuaAgeiuvue9ruS4uuWwhOWHu+eKtuaAge+8iFNIT09USU5H77yJ44CCXHJcblxyXG4gICAgICAgIOeEtuWQju+8jOaSreaUvuW8gOeBq+WjsOmfs++8iEFVRElPX0NMSVAuU0hPT1TvvInjgIJcclxuXHJcbiAgICAgICAg5LuO5Lyg5YWl55qE5pWw5o2u5Lit6I635Y+W5bCE5Ye76L+b5bqm77yIcHJvZ3Jlc3PvvInjgIJcclxuXHJcbiAgICAgICAg6I635Y+W6JOd6Imy6Zif5LyN55qE5YeG5aSH54q25oCB77yIZ2V0Qmx1ZVJlYWR577yJ44CCXHJcblxyXG4gICAgICAgIOiOt+WPluiTneiJsumYn+S8jeeahOS4i+S4gOS4quebruagh+S9jee9ru+8iGdldEJsdWVOZXh077yJ77yM5aaC5p6c5Lyg5YWl55qE5pWw5o2u5Lit5YyF5ZCr5LiL5LiA5Liq55uu5qCH5L2N572u77yIbmV4dO+8ie+8jOWImeS9v+eUqOivpeS9jee9ruS7o+abv+m7mOiupOeahOS4i+S4gOS4quebruagh+S9jee9ruOAglxyXG5cclxuICAgICAgICDlpoLmnpzok53oibLpmJ/kvI3lt7Llh4blpIflsLHnu6rvvIzliJnlrp7kvovljJbkuIDkuKrotrPnkIPlr7nosaHvvIhiYWxs77yJ77yM5bCG5YW254i25a+56LGh6K6+572u5Li66Iie5Y+w6IqC54K577yIc3RhZ2VOb2Rl77yJ44CCXHJcblxyXG4gICAgICAgIOWIneWni+WMlui2s+eQg+WvueixoeeahOS9jee9ru+8iHgsIHnvvInjgIJcclxuXHJcbiAgICAgICAg5qC55o2u5piv5ZCm5pyJ5LiL5LiA5Liq55uu5qCH5L2N572u77yM56Gu5a6a6Laz55CD55qE56e75Yqo57uI54K544CCXHJcblxyXG4gICAgICAgIOiwg+eUqOi2s+eQg+WvueixoeeahOenu+WKqOaWueazle+8iG1vdmXvvInvvIzkvKDlhaXotbfngrnjgIHnu4jngrnlkozlsITlh7vov5vluqbvvIzkvb/otrPnkIPlvIDlp4vnp7vliqjjgIJcclxuICAgICAqL1xyXG4gICAgb25QbGF5ZXJTaG9vdChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzICE9IEVOVU1fR0FNRV9TVEFUVVMuUlVOSU5HKSByZXR1cm5cclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLlNIT09USU5HXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU0hPT1QpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Qmx1ZVJlYWR5KClcclxuICAgICAgICBsZXQgbmV4dCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldEJsdWVOZXh0KClcclxuICAgICAgICBpZiAoZGF0YT8ubmV4dCkge1xyXG4gICAgICAgICAgICBuZXh0ID0gZGF0YS5uZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFydCkge1xyXG4gICAgICAgICAgICAvLyBzdGFydC5zaG9vdCgpXHJcbiAgICAgICAgICAgIC8vIOenu+WKqOeahOi2s+eQg1xyXG4gICAgICAgICAgICBjb25zdCBiYWxsOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYWxsUHJlZmFiKVxyXG4gICAgICAgICAgICBiYWxsLnBhcmVudCA9IHRoaXMuc3RhZ2VOb2RlXHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBudWxsXHJcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBuZXh0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRFbmRwb2ludCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmFsbENvbSA9IGJhbGwuZ2V0Q29tcG9uZW50KEJhbGwpXHJcbiAgICAgICAgICAgIGJhbGxDb20uaW5pdCh7IHg6IHN0YXJ0LngsIHk6IHN0YXJ0LnkgfSlcclxuICAgICAgICAgICAgYmFsbENvbS5tb3ZlKHN0YXJ0LCBlbmQsIHByb2dyZXNzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULkdBTUVfUkVTVEFSVCwgdGhpcy5vbkdhbWVSZXN0YXJ0KVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULkdBTUVfTkVYVCwgdGhpcy5vbkdhbWVOZXh0KVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULkdBTUVfV0lOLCB0aGlzLm9uR2FtZVdpbilcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub2ZmKEVOVU1fR0FNRV9FVkVOVC5HQU1FX0xPU0UsIHRoaXMub25HYW1lTG9zZSlcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uub2ZmKEVOVU1fR0FNRV9FVkVOVC5QTEFZRVJfU0hPT1QsIHRoaXMub25QbGF5ZXJTaG9vdClcclxuICAgIH1cclxufVxyXG4iXX0=