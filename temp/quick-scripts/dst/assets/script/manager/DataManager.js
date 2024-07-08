
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOztBQUV2QixnQ0FBOEQ7QUFHOUQsb0NBQThCO0FBRzlCLElBQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFBO0FBUTFDO0lBQUE7UUFnQkksY0FBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFBO1FBQ2xCLGdCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLGdCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsbUJBQWMsR0FBWSxLQUFLLENBQUE7UUFDL0IsTUFBTTtRQUNOLGNBQVMsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNyQyxXQUFNLEdBQXFCLHVCQUFnQixDQUFDLElBQUksQ0FBQTtRQUNoRCxVQUFLLEdBQWEsRUFBRSxDQUFBO1FBQ3BCLFNBQUksR0FBWSxFQUFFLENBQUE7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQTtRQUNsQixnQkFBVyxHQUFrQixJQUFJLENBQUE7UUFDakMsYUFBUSxHQUFhLElBQUksQ0FBQTtRQUN6QixRQUFRO1FBQ1IsZUFBVSxHQUFXLENBQUMsQ0FBQTtRQUN0QixPQUFPO1FBQ1AscUJBQWdCLEdBQVcsQ0FBQyxDQUFBO1FBQzVCLFNBQVM7UUFDVCxvQkFBZSxHQUFXLENBQUMsQ0FBQTtRQUMzQixTQUFTO1FBQ1QsbUJBQWMsR0FBVyxDQUFDLENBQUE7UUFDMUIsU0FBUztRQUNULFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsS0FBSztRQUNMLGNBQVMsR0FBVyxFQUFFLENBQUE7UUFFdEIsT0FBTztRQUNQLGdCQUFXLEdBQVcsQ0FBQyxDQUFBO0lBbU0zQixDQUFDO0lBM09VLHVCQUFXLEdBQWxCO1FBQ0ksSUFB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QUNyRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2xELElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxNQUFNLElBQUkseUJBQWtCLENBQUMsS0FBSztvQkFBRSxNQUFNLEdBQUcsSUFBSSxDQUFBO2FBQ2xGO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0lBNU9jLHFCQUFTLEdBQVEsSUFBSSxDQUFBO0lBNk94QyxrQkFBQztDQS9PRCxBQStPQyxJQUFBO2tCQS9Pb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0dBTUVfU1RBVFVTLCBFTlVNX1BMQVlFUl9TVEFUVVMgfSBmcm9tIFwiLi4vRW51bVwiXHJcbmltcG9ydCBFbmRwb2ludCBmcm9tIFwiLi4vRW5kcG9pbnRcIlxyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4uL0VuZW15XCJcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCJcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4uL0Zvb2RcIlxyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSAnRk9PVEJBTExfU1RPUkFHRV9LRVknXHJcbmRlY2xhcmUgbGV0IHR0OiBhbnk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1cnJlbnRMZXZlbCB7XHJcbiAgICBsZXZlbDogbnVtYmVyLFxyXG4gICAgc2NvcmU6IG51bWJlcixcclxuICAgIGNvbGxlY3RlZDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFueSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oKTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZTxEYXRhTWFuYWdlcj4oKVxyXG4gICAgfVxyXG5cclxuICAgIF9tYXhMZXZlbDogbnVtYmVyID0gMVxyXG4gICAgX2xldmVsOiBudW1iZXIgPSAxXHJcbiAgICBfYXVkaW9NdXNpYzogYm9vbGVhbiA9IHRydWVcclxuICAgIF9hdWRpb1NvdW5kOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgX3ZpYnJhdGU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBfU2lkZUJhclJld2FyZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICAvLyDmioDog73ngrlcclxuICAgIHNraWxsTnVtczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMF1cclxuICAgIHN0YXR1czogRU5VTV9HQU1FX1NUQVRVUyA9IEVOVU1fR0FNRV9TVEFUVVMuSU5JVFxyXG4gICAgYmx1ZXM6IFBsYXllcltdID0gW11cclxuICAgIHJlZHM6IEVuZW15W10gPSBbXVxyXG4gICAgZm9vZHM6IEZvb2RbXSA9IFtdXHJcbiAgICBjdXJyZW50RGF0YTogSUN1cnJlbnRMZXZlbCA9IG51bGxcclxuICAgIGVuZHBvaW50OiBFbmRwb2ludCA9IG51bGxcclxuICAgIC8vIOaKgOiDvee0r+iuoeaVsFxyXG4gICAgcG93ZXJDb3VudDogbnVtYmVyID0gMFxyXG4gICAgLy8g6L6+5oiQ5p2h5Lu2XHJcbiAgICBwb3dlckNvdW50VGFyZ2V0OiBudW1iZXIgPSA0XHJcbiAgICAvLyDmioDog73ppa7lk4HmlYjmnpxcclxuICAgIHBvd2VyRWZmZWN0TG9vcDogbnVtYmVyID0gMFxyXG4gICAgLy8g5aKe55uK54mb5omS5pWI5p6cXHJcbiAgICBmb29kRWZmZWN0TG9vcDogbnVtYmVyID0gMFxyXG4gICAgLy8g5ri45oiP5q+P5bGA5pe26Ze0XHJcbiAgICB0aW1lcjogbnVtYmVyID0gNjBcclxuICAgIC8vIOWKoOaXtlxyXG4gICAgZXh0cmFUaW1lOiBudW1iZXIgPSAzMFxyXG5cclxuICAgIC8vIOWKoOi9vei/m+W6plxyXG4gICAgbG9hZGluZ1JhdGU6IG51bWJlciA9IDBcclxuXHJcbiAgICBnZXQgbGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxldmVsKGRhdGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xldmVsID0gZGF0YVxyXG4gICAgICAgIHRoaXMuc2F2ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1heExldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhMZXZlbFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYXhMZXZlbChkYXRhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXhMZXZlbCA9IGRhdGFcclxuICAgICAgICB0aGlzLnNhdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBhdWRpb011c2ljKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdWRpb011c2ljXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGF1ZGlvTXVzaWMoZGF0YTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvTXVzaWMgPSBkYXRhXHJcbiAgICAgICAgdGhpcy5zYXZlKClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXVkaW9Tb3VuZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9Tb3VuZFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBhdWRpb1NvdW5kKGRhdGE6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9hdWRpb1NvdW5kID0gZGF0YVxyXG4gICAgICAgIHRoaXMuc2F2ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpYnJhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpYnJhdGVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmlicmF0ZShkYXRhOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fdmlicmF0ZSA9IGRhdGFcclxuICAgICAgICB0aGlzLnNhdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBTaWRlQmFyUmV3YXJkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TaWRlQmFyUmV3YXJkXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFNpZGVCYXJSZXdhcmQoZGF0YTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX1NpZGVCYXJSZXdhcmQgPSBkYXRhXHJcbiAgICAgICAgdGhpcy5zYXZlKClcclxuICAgIH1cclxuICAgIGN1dFNraWxsTnVtcyhrOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNraWxsTnVtc1trXS0tXHJcbiAgICAgICAgdGhpcy5zYXZlKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6YeN572u5ri45oiP54q25oCB44CCXHJcbiAgICAgKiBcclxuICAgICAqIOivpeaWueazleWwhua4uOaIj+eKtuaAgemHjee9ruS4uuWIneWni+WAvO+8jOS7peS+v+W8gOWni+aWsOeahOa4uOaIj+aIlumHjeaWsOWIneWni+WMluW9k+WJjea4uOaIj+OAglxyXG4gICAgICog5a6D5riF6Zmk5LqG546p5a626KeS6Imy44CB6aOf54mp562J5ri45oiP5YWD57Sg77yM5bm26YeN572u5LqG55u45YWz6K6h5pWw5Zmo5ZKM5a6a5pe25Zmo44CCXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5JTklUXHJcbiAgICAgICAgdGhpcy5ibHVlcyA9IFtdXHJcbiAgICAgICAgdGhpcy5yZWRzID0gW11cclxuICAgICAgICB0aGlzLmZvb2RzID0gW11cclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5wb3dlckNvdW50ID0gMFxyXG4gICAgICAgIHRoaXMudGltZXIgPSA2MFxyXG4gICAgICAgIHRoaXMucG93ZXJFZmZlY3RMb29wID0gMFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmuLjmiI/ov5vluqblkozorr7nva7jgIJcclxuICAgICAqIFxyXG4gICAgICog5q2k5Ye95pWw6LSf6LSj5bCG5b2T5YmN5ri45oiP55qE57qn5Yir44CB5pyA5aSn57qn5Yir44CB6Z+z6aKR6K6+572u44CB5oyv5Yqo6K6+572u44CB5oqA6IO95pWw6YeP5ZKM5L6n6L655qCP5aWW5Yqx562J5L+h5oGv5a2Y5YKo5Yiw5pys5Zyw5a2Y5YKo5Lit44CCXHJcbiAgICAgKiDlroPpppblhYjmo4Dmn6XmmK/lkKblrZjlnKjlkI3kuLpcInR0XCLnmoTlhajlsYDlj5jph4/vvIzku6Xnoa7lrprkvb/nlKjlk6rnp43lrZjlgqjmlrnms5XvvIjmnKzlnLDlrZjlgqjmiJblkIzmraXlrZjlgqjvvInjgIJcclxuICAgICAqIOWmguaenFwidHRcIuS4jeWtmOWcqO+8jOWImeS9v+eUqGNjLnN5cy5sb2NhbFN0b3JhZ2XmnaXkv53lrZjmlbDmja7vvJvlpoLmnpxcInR0XCLlrZjlnKjvvIzliJnkvb/nlKh0dC5zZXRTdG9yYWdlU3luY+adpeS/neWtmOaVsOaNruOAglxyXG4gICAgICog6L+Z56eN6K6+6K6h5YWB6K645ri45oiP5Zyo5LiN5ZCM546v5aKD77yI5L6L5aaCd2Vi5ZKM56e75Yqo6K6+5aSH77yJ5LiL54G15rS75Zyw5L+d5a2Y546p5a6255qE6L+b5bqm5ZKM6K6+572u44CCXHJcbiAgICAgKi9cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dbXCJ0dFwiXSkge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgbWF4TGV2ZWw6IHRoaXMubWF4TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBhdWRpb011c2ljOiB0aGlzLmF1ZGlvTXVzaWMsXHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdW5kOiB0aGlzLmF1ZGlvU291bmQsXHJcbiAgICAgICAgICAgICAgICB2aWJyYXRlOiB0aGlzLnZpYnJhdGUsXHJcbiAgICAgICAgICAgICAgICBza2lsbE51bXM6IHRoaXMuc2tpbGxOdW1zLFxyXG4gICAgICAgICAgICAgICAgU2lkZUJhclJld2FyZDogdGhpcy5TaWRlQmFyUmV3YXJkXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdHQuc2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgbWF4TGV2ZWw6IHRoaXMubWF4TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBhdWRpb011c2ljOiB0aGlzLmF1ZGlvTXVzaWMsXHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdW5kOiB0aGlzLmF1ZGlvU291bmQsXHJcbiAgICAgICAgICAgICAgICB2aWJyYXRlOiB0aGlzLnZpYnJhdGUsXHJcbiAgICAgICAgICAgICAgICBza2lsbE51bXM6IHRoaXMuc2tpbGxOdW1zLFxyXG4gICAgICAgICAgICAgICAgU2lkZUJhclJld2FyZDogdGhpcy5TaWRlQmFyUmV3YXJkXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS7juacrOWcsOWtmOWCqOS4reaBouWkjea4uOaIj+iuvue9ruWSjOi/m+W6puOAglxyXG4gICAgICog5q2k5Ye95pWw6LSf6LSj5LuO5pys5Zyw5a2Y5YKo5Lit6K+75Y+W5ri45oiP55qE6YWN572u5L+h5oGv77yM5aaC5YWz5Y2h6L+b5bqm44CB6Z+z5pWI6K6+572u562J77yM5bm25pu05paw5a6e5L6L55qE55u45bqU5bGe5oCn44CCXHJcbiAgICAgKiDlroPpppblhYjmo4Dmn6XmmK/lkKblrZjlnKjnibnlrprkuo7lupTnlKjnqIvluo/nmoTlrZjlgqjmnLrliLbvvIzlpoLmnpzkuI3lrZjlnKjvvIzliJnkvb/nlKjpgJrnlKjnmoRXZWLlrZjlgqjmnLrliLbjgIJcclxuICAgICAqIOWcqOivu+WPluaVsOaNruWQju+8jOWwneivleino+aekEpTT07lrZfnrKbkuLLkuLrlr7nosaHvvIzlubbmoLnmja7op6PmnpDnu5Pmnpzmm7TmlrDmuLjmiI/nirbmgIHjgIJcclxuICAgICAqIOWmguaenOino+aekOWksei0pe+8jOWwhumHjee9ruaJgOacieiuvue9ruWSjOi/m+W6puWIsOWIneWni+eKtuaAgeOAglxyXG4gICAgICovXHJcbiAgICByZXN0b3JlKCkge1xyXG4gICAgICAgIGxldCBfZGF0YSA9IG51bGxcclxuICAgICAgICBpZiAoIXdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIF9kYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSBhcyBhbnlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF9kYXRhID0gdHQuZ2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9LRVkpIGFzIGFueVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShfZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IGRhdGE/LmxldmVsIHx8IDFcclxuICAgICAgICAgICAgdGhpcy5tYXhMZXZlbCA9IGRhdGE/Lm1heExldmVsIHx8IDFcclxuICAgICAgICAgICAgdGhpcy5hdWRpb011c2ljID0gZGF0YT8uYXVkaW9NdXNpYyA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdW5kID0gZGF0YT8uYXVkaW9Tb3VuZCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgdGhpcy52aWJyYXRlID0gZGF0YT8udmlicmF0ZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgdGhpcy5za2lsbE51bXMgPSBkYXRhPy5za2lsbE51bXMgfHwgWzAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgICAgIHRoaXMuU2lkZUJhclJld2FyZCA9IGRhdGEgPT09IG51bGwgPyB0aGlzLlNpZGVCYXJSZXdhcmQgOiBkYXRhLlNpZGVCYXJSZXdhcmQ7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSAxXHJcbiAgICAgICAgICAgIHRoaXMubWF4TGV2ZWwgPSAxXHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9NdXNpYyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdW5kID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnZpYnJhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2tpbGxOdW1zID0gWzAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgICAgIHRoaXMuU2lkZUJhclJld2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aSE5LqO5YeG5aSH54q25oCB55qE6JOd5pa56Zif5ZGY77yI6ISa5pys77yJXHJcbiAgICBnZXRCbHVlUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5ibHVlcy5maW5kKGl0ZW0gPT4gaXRlbS5zdGF0dXMgPT09IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSlcclxuICAgICAgICByZXR1cm4gcmVhZHlcclxuICAgIH1cclxuICAgIC8vIOWwsei/keW+heS8oOeQg+eahOiTneaWuemYn+WRmO+8iOiEmuacrO+8iVxyXG4gICAgZ2V0Qmx1ZU5leHQoKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZHlJbmRleCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmJsdWVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc3RhdHVzID09PSBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkpXHJcbiAgICAgICAgaWYgKHJlYWR5SW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmx1ZXNbcmVhZHlJbmRleCArIDFdXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5bnu4jngrnvvIjohJrmnKzvvIlcclxuICAgIGdldEVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiBEYXRhTWFuYWdlci5pbnN0YW5jZS5lbmRwb2ludFxyXG4gICAgfVxyXG4gICAgLy8g5qC55o2u54K55Ye75bGP5bmV6L+U5Zue5oyH5a6a57qi5pa55oiQ5ZGY77yI6IqC54K577yJXHJcbiAgICBnZXRDYXJkRW5lbXkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVkOiBjYy5Ob2RlID0gaXRlbS5ub2RlXHJcbiAgICAgICAgICAgIC8vIOi9rOS4uuS4lueVjOWdkOagh1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IHJlZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHJlZC5wb3NpdGlvbilcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gY2MuZmluZCgnQ2FudmFzL01haW4vQ2FtZXJhJykucG9zaXRpb25cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGguYWJzKHdvcmxkLnggLSAoY2FtZXJhLnggKyB4KSlcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGguYWJzKHdvcmxkLnkgLSAoY2FtZXJhLnkgKyB5KSlcclxuICAgICAgICAgICAgaWYgKG9mZnNldFggPD0gcmVkLndpZHRoIC8gMiAmJiBvZmZzZXRZIDw9IHJlZC5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSByZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgfVxyXG4gICAgLy8g5qC55o2u54K55Ye75bGP5bmV6L+U5Zue5oyH5a6a55qE6JOd5pa55oiQ5ZGY77yI6IqC54K577yJXHJcbiAgICBnZXRQYXNzUGxheWVyKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldDogY2MuTm9kZSA9IG51bGxcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5ibHVlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBibHVlOiBjYy5Ob2RlID0gaXRlbS5ub2RlXHJcbiAgICAgICAgICAgIC8vIOi9rOS4uuS4lueVjOWdkOagh1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IGJsdWUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihibHVlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5maW5kKCdDYW52YXMvTWFpbi9DYW1lcmEnKS5wb3NpdGlvblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5hYnMod29ybGQueCAtIChjYW1lcmEueCArIHgpKVxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gTWF0aC5hYnMod29ybGQueSAtIChjYW1lcmEueSArIHkpKVxyXG4gICAgICAgICAgICBpZiAob2Zmc2V0WCA8PSBibHVlLndpZHRoIC8gMiAmJiBvZmZzZXRZIDw9IGJsdWUuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsdWUuZ2V0Q29tcG9uZW50KFBsYXllcikuc3RhdHVzICE9IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSkgdGFyZ2V0ID0gYmx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0XHJcbiAgICB9XHJcbn1cclxuIl19