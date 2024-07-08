
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/ResourceManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9a63wBhkNJiZvYfD03Pj96', 'ResourceManager');
// script/manager/ResourceManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Created by carolsail
var Enum_1 = require("./../Enum");
var DataManager_1 = require("./DataManager");
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.clipMap = {};
        this.flagMap = {};
    }
    ResourceManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(ResourceManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    /**
        * 异步加载指定类型的资源。
        * @param type 资源类型，使用ENUM_RESOURCE_TYPE枚举定义。
        * @returns 返回一个Promise，表示加载过程的完成。
        */
    ResourceManager.prototype.loadRes = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var rate = DataManager_1.default.instance.loadingRate;
                        switch (type) {
                            case Enum_1.ENUM_RESOURCE_TYPE.AUDIO:
                                cc.resources.loadDir('audio', cc.AudioClip, function (finished, total) {
                                    // 资源加载进度
                                    // 保留两位小数
                                    var loadingRate = Math.floor((rate + 0.5 * finished / total) * 100) / 100;
                                    DataManager_1.default.instance.loadingRate = Math.max(loadingRate, DataManager_1.default.instance.loadingRate);
                                }, function (err, assets) {
                                    if (err)
                                        reject && reject();
                                    var asset;
                                    for (var i = 0; i < assets.length; i++) {
                                        asset = assets[i];
                                        if (!_this.clipMap[asset.name])
                                            _this.clipMap[asset.name] = asset;
                                    }
                                    resolve && resolve();
                                });
                                break;
                            case Enum_1.ENUM_RESOURCE_TYPE.FLAG:
                                cc.resources.loadDir('flag', cc.SpriteFrame, function (finished, total) {
                                    // 资源加载进度
                                    // 保留两位小数
                                    var loadingRate = Math.floor((rate + 0.5 * finished / total) * 100) / 100;
                                    DataManager_1.default.instance.loadingRate = Math.max(loadingRate, DataManager_1.default.instance.loadingRate);
                                }, function (err, assets) {
                                    if (err)
                                        reject && reject();
                                    var asset;
                                    for (var i = 0; i < assets.length; i++) {
                                        asset = assets[i];
                                        if (!_this.flagMap[asset.name])
                                            _this.flagMap[asset.name] = asset;
                                    }
                                    resolve && resolve();
                                });
                                break;
                        }
                    })];
            });
        });
    };
    ResourceManager.prototype.getClip = function (name) {
        return this.clipMap[name];
    };
    ResourceManager.prototype.getFlag = function (name) {
        return this.flagMap[name];
    };
    ResourceManager._instance = null;
    return ResourceManager;
}());
exports.default = ResourceManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxSZXNvdXJjZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7QUFDdkIsa0NBQStDO0FBQy9DLDZDQUF3QztBQUV4QztJQUFBO1FBRVcsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUE7SUFtRXZCLENBQUM7SUEvRFUsMkJBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQW1CLENBQUE7UUFDOUMsQ0FBQzs7O09BQUE7SUFDRDs7OztVQUlNO0lBQ08saUNBQU8sR0FBcEIsVUFBcUIsSUFBd0I7Ozs7Z0JBQ3pDLHNCQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ3JDLElBQU0sSUFBSSxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQTt3QkFDN0MsUUFBUSxJQUFJLEVBQUU7NEJBQ1YsS0FBSyx5QkFBa0IsQ0FBQyxLQUFLO2dDQUN6QixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLFFBQWdCLEVBQUUsS0FBYTtvQ0FDeEUsU0FBUztvQ0FDVCxTQUFTO29DQUNULElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7b0NBQzNFLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQ0FDOUYsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07b0NBQ1gsSUFBSSxHQUFHO3dDQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQTtvQ0FDM0IsSUFBSSxLQUFVLENBQUE7b0NBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0NBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2xCLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NENBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFBO3FDQUNsRTtvQ0FDRCxPQUFPLElBQUksT0FBTyxFQUFFLENBQUE7Z0NBQ3hCLENBQUMsQ0FBQyxDQUFBO2dDQUNGLE1BQUs7NEJBQ1QsS0FBSyx5QkFBa0IsQ0FBQyxJQUFJO2dDQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLFFBQWdCLEVBQUUsS0FBYTtvQ0FDekUsU0FBUztvQ0FDVCxTQUFTO29DQUNULElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7b0NBQzNFLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQ0FDOUYsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07b0NBQ1gsSUFBSSxHQUFHO3dDQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQTtvQ0FDM0IsSUFBSSxLQUFVLENBQUE7b0NBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0NBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2xCLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NENBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFBO3FDQUNsRTtvQ0FDRCxPQUFPLElBQUksT0FBTyxFQUFFLENBQUE7Z0NBQ3hCLENBQUMsQ0FBQyxDQUFBO2dDQUNGLE1BQUs7eUJBQ1o7b0JBQ0wsQ0FBQyxDQUFDLEVBQUE7OztLQUNMO0lBRU0saUNBQU8sR0FBZCxVQUFlLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTSxpQ0FBTyxHQUFkLFVBQWUsSUFBWTtRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQWhFYyx5QkFBUyxHQUFRLElBQUksQ0FBQTtJQWlFeEMsc0JBQUM7Q0F0RUQsQUFzRUMsSUFBQTtrQkF0RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5pbXBvcnQgeyBFTlVNX1JFU09VUkNFX1RZUEUgfSBmcm9tICcuLy4uL0VudW0nO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvdXJjZU1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyBjbGlwTWFwID0ge31cclxuICAgIHB1YmxpYyBmbGFnTWFwID0ge31cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFueSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oKTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZTxSZXNvdXJjZU1hbmFnZXI+KClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICog5byC5q2l5Yqg6L295oyH5a6a57G75Z6L55qE6LWE5rqQ44CCXHJcbiAgICAgICAgKiBAcGFyYW0gdHlwZSDotYTmupDnsbvlnovvvIzkvb/nlKhFTlVNX1JFU09VUkNFX1RZUEXmnprkuL7lrprkuYnjgIJcclxuICAgICAgICAqIEByZXR1cm5zIOi/lOWbnuS4gOS4qlByb21pc2XvvIzooajnpLrliqDovb3ov4fnqIvnmoTlrozmiJDjgIJcclxuICAgICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGxvYWRSZXModHlwZTogRU5VTV9SRVNPVVJDRV9UWVBFKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmF0ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlXHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFTlVNX1JFU09VUkNFX1RZUEUuQVVESU86XHJcbiAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoJ2F1ZGlvJywgY2MuQXVkaW9DbGlwLCAoZmluaXNoZWQ6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDotYTmupDliqDovb3ov5vluqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L+d55WZ5Lik5L2N5bCP5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdSYXRlID0gTWF0aC5mbG9vcigocmF0ZSArIDAuNSAqIGZpbmlzaGVkIC8gdG90YWwpICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IE1hdGgubWF4KGxvYWRpbmdSYXRlLCBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCBhc3NldHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0ICYmIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhc3NldDogYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCA9IGFzc2V0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGlwTWFwW2Fzc2V0Lm5hbWVdKSB0aGlzLmNsaXBNYXBbYXNzZXQubmFtZV0gPSBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFTlVNX1JFU09VUkNFX1RZUEUuRkxBRzpcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcignZmxhZycsIGNjLlNwcml0ZUZyYW1lLCAoZmluaXNoZWQ6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDotYTmupDliqDovb3ov5vluqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L+d55WZ5Lik5L2N5bCP5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdSYXRlID0gTWF0aC5mbG9vcigocmF0ZSArIDAuNSAqIGZpbmlzaGVkIC8gdG90YWwpICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IE1hdGgubWF4KGxvYWRpbmdSYXRlLCBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCBhc3NldHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0ICYmIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhc3NldDogYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCA9IGFzc2V0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5mbGFnTWFwW2Fzc2V0Lm5hbWVdKSB0aGlzLmZsYWdNYXBbYXNzZXQubmFtZV0gPSBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2xpcChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlwTWFwW25hbWVdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZsYWcobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhZ01hcFtuYW1lXVxyXG4gICAgfVxyXG59XHJcbiJdfQ==