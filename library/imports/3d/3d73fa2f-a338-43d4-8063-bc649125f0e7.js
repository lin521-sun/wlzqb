"use strict";
cc._RF.push(module, '3d73fovozhD1IBjvGSRJfDn', 'DataManager');
// script/manager/DataManager.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("../Enum");
var Player_1 = require("../Player");
var STORAGE_KEY = 'FOOTBALL_STORAGE_KEY';
var DataManager = /** @class */ (function () {
    function DataManager() {
        this._maxLevel = 1;
        this._level = 1;
        this._audioMusic = true;
        this._audioSound = true;
        this._vibrate = true;
        this._SideBarReward = false;
        // 技能点
        this.skillNums = [0, 0, 0, 0, 0];
        this.status = Enum_1.ENUM_GAME_STATUS.INIT;
        this.blues = [];
        this.reds = [];
        this.foods = [];
        this.currentData = null;
        this.endpoint = null;
        // 技能累计数
        this.powerCount = 0;
        // 达成条件
        this.powerCountTarget = 4;
        // 技能饮品效果
        this.powerEffectLoop = 0;
        // 增益牛扒效果
        this.foodEffectLoop = 0;
        // 游戏每局时间
        this.timer = 60;
        // 加时
        this.extraTime = 30;
        // 加载进度
        this.loadingRate = 0;
    }
    DataManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(DataManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (data) {
            this._level = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "maxLevel", {
        get: function () {
            return this._maxLevel;
        },
        set: function (data) {
            this._maxLevel = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "audioMusic", {
        get: function () {
            return this._audioMusic;
        },
        set: function (data) {
            this._audioMusic = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "audioSound", {
        get: function () {
            return this._audioSound;
        },
        set: function (data) {
            this._audioSound = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "vibrate", {
        get: function () {
            return this._vibrate;
        },
        set: function (data) {
            this._vibrate = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "SideBarReward", {
        get: function () {
            return this._SideBarReward;
        },
        set: function (data) {
            this._SideBarReward = data;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.cutSkillNums = function (k) {
        this.skillNums[k]--;
        this.save();
    };
    /**
     * 重置游戏状态。
     *
     * 该方法将游戏状态重置为初始值，以便开始新的游戏或重新初始化当前游戏。
     * 它清除了玩家角色、食物等游戏元素，并重置了相关计数器和定时器。
     */
    DataManager.prototype.reset = function () {
        this.status = Enum_1.ENUM_GAME_STATUS.INIT;
        this.blues = [];
        this.reds = [];
        this.foods = [];
        this.currentData = null;
        this.endpoint = null;
        this.powerCount = 0;
        this.timer = 60;
        this.powerEffectLoop = 0;
    };
    /**
     * 保存游戏进度和设置。
     *
     * 此函数负责将当前游戏的级别、最大级别、音频设置、振动设置、技能数量和侧边栏奖励等信息存储到本地存储中。
     * 它首先检查是否存在名为"tt"的全局变量，以确定使用哪种存储方法（本地存储或同步存储）。
     * 如果"tt"不存在，则使用cc.sys.localStorage来保存数据；如果"tt"存在，则使用tt.setStorageSync来保存数据。
     * 这种设计允许游戏在不同环境（例如web和移动设备）下灵活地保存玩家的进度和设置。
     */
    DataManager.prototype.save = function () {
        if (!window["tt"]) {
            cc.sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
                level: this.level,
                maxLevel: this.maxLevel,
                audioMusic: this.audioMusic,
                audioSound: this.audioSound,
                vibrate: this.vibrate,
                skillNums: this.skillNums,
                SideBarReward: this.SideBarReward
            }));
        }
        else {
            tt.setStorageSync(STORAGE_KEY, JSON.stringify({
                level: this.level,
                maxLevel: this.maxLevel,
                audioMusic: this.audioMusic,
                audioSound: this.audioSound,
                vibrate: this.vibrate,
                skillNums: this.skillNums,
                SideBarReward: this.SideBarReward
            }));
        }
    };
    /**
     * 从本地存储中恢复游戏设置和进度。
     * 此函数负责从本地存储中读取游戏的配置信息，如关卡进度、音效设置等，并更新实例的相应属性。
     * 它首先检查是否存在特定于应用程序的存储机制，如果不存在，则使用通用的Web存储机制。
     * 在读取数据后，尝试解析JSON字符串为对象，并根据解析结果更新游戏状态。
     * 如果解析失败，将重置所有设置和进度到初始状态。
     */
    DataManager.prototype.restore = function () {
        var _data = null;
        if (!window["tt"]) {
            _data = cc.sys.localStorage.getItem(STORAGE_KEY);
        }
        else {
            _data = tt.getStorageSync(STORAGE_KEY);
        }
        try {
            var data = JSON.parse(_data);
            this.level = (data === null || data === void 0 ? void 0 : data.level) || 1;
            this.maxLevel = (data === null || data === void 0 ? void 0 : data.maxLevel) || 1;
            this.audioMusic = (data === null || data === void 0 ? void 0 : data.audioMusic) === false ? false : true;
            this.audioSound = (data === null || data === void 0 ? void 0 : data.audioSound) === false ? false : true;
            this.vibrate = (data === null || data === void 0 ? void 0 : data.vibrate) === false ? false : true;
            this.skillNums = (data === null || data === void 0 ? void 0 : data.skillNums) || [0, 0, 0, 0, 0];
            this.SideBarReward = data === null ? this.SideBarReward : data.SideBarReward;
        }
        catch (_a) {
            this.level = 1;
            this.maxLevel = 1;
            this.audioMusic = true;
            this.audioSound = true;
            this.vibrate = true;
            // this.skillNums = [0, 0, 0, 0, 0]
            this.SideBarReward = false;
            this.reset();
        }
    };
    // 处于准备状态的蓝方队员（脚本）
    DataManager.prototype.getBlueReady = function () {
        var ready = DataManager.instance.blues.find(function (item) { return item.status === Enum_1.ENUM_PLAYER_STATUS.READY; });
        return ready;
    };
    // 就近待传球的蓝方队员（脚本）
    DataManager.prototype.getBlueNext = function () {
        var readyIndex = DataManager.instance.blues.findIndex(function (item) { return item.status === Enum_1.ENUM_PLAYER_STATUS.READY; });
        if (readyIndex >= 0) {
            var next = DataManager.instance.blues[readyIndex + 1];
            return next;
        }
        return null;
    };
    // 获取终点（脚本）
    DataManager.prototype.getEndpoint = function () {
        return DataManager.instance.endpoint;
    };
    // 根据点击屏幕返回指定红方成员（节点）
    DataManager.prototype.getCardEnemy = function (x, y) {
        var target = null;
        DataManager.instance.reds.forEach(function (item) {
            var red = item.node;
            // 转为世界坐标
            var world = red.parent.convertToWorldSpaceAR(red.position);
            var camera = cc.find('Canvas/Main/Camera').position;
            var offsetX = Math.abs(world.x - (camera.x + x));
            var offsetY = Math.abs(world.y - (camera.y + y));
            if (offsetX <= red.width / 2 && offsetY <= red.height / 2) {
                target = red;
            }
        });
        return target;
    };
    // 根据点击屏幕返回指定的蓝方成员（节点）
    DataManager.prototype.getPassPlayer = function (x, y) {
        var target = null;
        DataManager.instance.blues.forEach(function (item) {
            var blue = item.node;
            // 转为世界坐标
            var world = blue.parent.convertToWorldSpaceAR(blue.position);
            var camera = cc.find('Canvas/Main/Camera').position;
            var offsetX = Math.abs(world.x - (camera.x + x));
            var offsetY = Math.abs(world.y - (camera.y + y));
            if (offsetX <= blue.width / 2 && offsetY <= blue.height / 2) {
                if (blue.getComponent(Player_1.default).status != Enum_1.ENUM_PLAYER_STATUS.READY)
                    target = blue;
            }
        });
        return target;
    };
    DataManager._instance = null;
    return DataManager;
}());
exports.default = DataManager;

cc._RF.pop();