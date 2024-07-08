"use strict";
cc._RF.push(module, '0bb4bIpEUNPt4B+WGt/oh03', 'AudioManager');
// script/manager/AudioManager.ts

"use strict";
// Created by carolsail
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
var Enum_1 = require("./../Enum");
var DataManager_1 = require("./DataManager");
var ResourceManager_1 = require("./ResourceManager");
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.audioSource = null;
    }
    AudioManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
            this._instance.init();
        }
        return this._instance;
    };
    Object.defineProperty(AudioManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.init = function () {
        this.audioSource = new cc.AudioSource();
        this.audioSource.loop = true;
        this.audioSource.volume = 0.3;
    };
    /**
         * 异步播放背景音乐。
         * 此方法首先检查是否有可用的背景音乐资源，然后尝试播放。如果当前音频源已经有音轨，则直接播放；
         * 否则，从资源管理器异步获取背景音乐音轨，并将其分配给音频源后播放。
         */
    AudioManager.prototype.playMusic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!DataManager_1.default.instance.audioMusic)
                            return [2 /*return*/];
                        if (this.audioSource.clip) {
                            this.audioSource.play();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, ResourceManager_1.default.instance.getClip(Enum_1.ENUM_AUDIO_CLIP.BGM)];
                    case 1:
                        clip = _a.sent();
                        this.audioSource.clip = clip;
                        this.audioSource.play();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
         * 停止音乐播放。
         *
         * 该方法用于停止当前正在进行的音乐播放。它调用了音频源的stop方法，
         * 以便立即结束音乐播放。这对于需要在应用程序中控制音乐播放的场景非常有用，
         * 比如在游戏或媒体应用中根据用户操作停止背景音乐。
         */
    AudioManager.prototype.stopMusic = function () {
        this.audioSource.stop();
    };
    /**
      * 异步播放声音效果。
      *
      * 此函数用于根据给定的声音名称异步播放声音效果。它首先检查数据管理器中是否存在声音资源，
      * 然后从资源管理器中获取声音剪辑，并使用Unity的音频引擎播放该声音剪辑。
      * 如果指定了循环播放，声音将一直播放直到停止或游戏结束。
      *
      * @param name 声音效果的名称，使用枚举类型ENUM_AUDIO_CLIP来指定。
      * @param isLoop 是否循环播放声音，默认为false（不循环）。
      * @returns 返回一个表示声音播放的唯一标识符。
      */
    AudioManager.prototype.playSound = function (name, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!DataManager_1.default.instance.audioSound)
                            return [2 /*return*/];
                        return [4 /*yield*/, ResourceManager_1.default.instance.getClip(name)];
                    case 1:
                        clip = _a.sent();
                        return [2 /*return*/, cc.audioEngine.playEffect(clip, isLoop)];
                }
            });
        });
    };
    /**
     * 停止播放音效。
     *
     * 本函数通过音频引擎停止指定音效的播放。音效通常是指短促的音频片段，例如游戏中的人物脚步声、攻击声等。
     * 使用音效ID作为参数，可以直接定位到正在播放的音效，实现精确的控制。
     *
     * @param audioId 音效的ID，用于唯一标识一个音效实例。
     */
    AudioManager.prototype.stopSound = function (audioId) {
        cc.audioEngine.stopEffect(audioId);
    };
    AudioManager._instance = null;
    return AudioManager;
}());
exports.default = AudioManager;

cc._RF.pop();