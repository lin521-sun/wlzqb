"use strict";
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