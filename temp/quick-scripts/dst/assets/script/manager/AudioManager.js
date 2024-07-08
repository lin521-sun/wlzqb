
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsa0NBQTRDO0FBQzVDLDZDQUF3QztBQUN4QyxxREFBK0M7QUFFL0M7SUFBQTtRQUNZLGdCQUFXLEdBQW1CLElBQUksQ0FBQTtJQXlFOUMsQ0FBQztJQXRFVSx3QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDeEI7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVELHNCQUFXLHdCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFnQixDQUFBO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUNqQyxDQUFDO0lBQ0Q7Ozs7V0FJTztJQUNELGdDQUFTLEdBQWY7Ozs7Ozt3QkFDSSxJQUFJLENBQUMscUJBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVTs0QkFBRSxzQkFBTTt3QkFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTs0QkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs0QkFDdkIsc0JBQU07eUJBQ1Q7d0JBQ1kscUJBQU0seUJBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFlLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFsRSxJQUFJLEdBQUcsU0FBMkQ7d0JBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTt3QkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7Ozs7S0FDMUI7SUFDRDs7Ozs7O1dBTU87SUFDUCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7UUFVSTtJQUNFLGdDQUFTLEdBQWYsVUFBZ0IsSUFBcUIsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCOzs7Ozs7d0JBQzFELElBQUksQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVOzRCQUFFLHNCQUFNO3dCQUMvQixxQkFBTSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFuRCxJQUFJLEdBQUcsU0FBNEM7d0JBQ3pELHNCQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBQTs7OztLQUNqRDtJQUNEOzs7Ozs7O09BT0c7SUFDSCxnQ0FBUyxHQUFULFVBQVUsT0FBZTtRQUNyQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBdkVjLHNCQUFTLEdBQVEsSUFBSSxDQUFBO0lBd0V4QyxtQkFBQztDQTFFRCxBQTBFQyxJQUFBO2tCQTFFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAgfSBmcm9tICcuLy4uL0VudW0nO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBSZXNvdXJjZU1hbmFnZXIgZnJvbSBcIi4vUmVzb3VyY2VNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGF1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGxcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW55ID0gbnVsbFxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPigpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpXHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmluaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZTxBdWRpb01hbmFnZXI+KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UgPSBuZXcgY2MuQXVkaW9Tb3VyY2UoKVxyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UubG9vcCA9IHRydWVcclxuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnZvbHVtZSA9IDAuM1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAgICog5byC5q2l5pKt5pS+6IOM5pmv6Z+z5LmQ44CCXHJcbiAgICAgICAgICog5q2k5pa55rOV6aaW5YWI5qOA5p+l5piv5ZCm5pyJ5Y+v55So55qE6IOM5pmv6Z+z5LmQ6LWE5rqQ77yM54S25ZCO5bCd6K+V5pKt5pS+44CC5aaC5p6c5b2T5YmN6Z+z6aKR5rqQ5bey57uP5pyJ6Z+z6L2o77yM5YiZ55u05o6l5pKt5pS+77ybXHJcbiAgICAgICAgICog5ZCm5YiZ77yM5LuO6LWE5rqQ566h55CG5Zmo5byC5q2l6I635Y+W6IOM5pmv6Z+z5LmQ6Z+z6L2o77yM5bm25bCG5YW25YiG6YWN57uZ6Z+z6aKR5rqQ5ZCO5pKt5pS+44CCXHJcbiAgICAgICAgICovXHJcbiAgICBhc3luYyBwbGF5TXVzaWMoKSB7XHJcbiAgICAgICAgaWYgKCFEYXRhTWFuYWdlci5pbnN0YW5jZS5hdWRpb011c2ljKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5hdWRpb1NvdXJjZS5jbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGlwID0gYXdhaXQgUmVzb3VyY2VNYW5hZ2VyLmluc3RhbmNlLmdldENsaXAoRU5VTV9BVURJT19DTElQLkJHTSlcclxuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLmNsaXAgPSBjbGlwXHJcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICAqIOWBnOatoumfs+S5kOaSreaUvuOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOivpeaWueazleeUqOS6juWBnOatouW9k+WJjeato+WcqOi/m+ihjOeahOmfs+S5kOaSreaUvuOAguWug+iwg+eUqOS6humfs+mikea6kOeahHN0b3Dmlrnms5XvvIxcclxuICAgICAgICAgKiDku6Xkvr/nq4vljbPnu5PmnZ/pn7PkuZDmkq3mlL7jgILov5nlr7nkuo7pnIDopoHlnKjlupTnlKjnqIvluo/kuK3mjqfliLbpn7PkuZDmkq3mlL7nmoTlnLrmma/pnZ7luLjmnInnlKjvvIxcclxuICAgICAgICAgKiDmr5TlpoLlnKjmuLjmiI/miJblqpLkvZPlupTnlKjkuK3moLnmja7nlKjmiLfmk43kvZzlgZzmraLog4zmma/pn7PkuZDjgIJcclxuICAgICAgICAgKi9cclxuICAgIHN0b3BNdXNpYygpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnN0b3AoKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICog5byC5q2l5pKt5pS+5aOw6Z+z5pWI5p6c44CCXHJcbiAgICAgICogXHJcbiAgICAgICog5q2k5Ye95pWw55So5LqO5qC55o2u57uZ5a6a55qE5aOw6Z+z5ZCN56ew5byC5q2l5pKt5pS+5aOw6Z+z5pWI5p6c44CC5a6D6aaW5YWI5qOA5p+l5pWw5o2u566h55CG5Zmo5Lit5piv5ZCm5a2Y5Zyo5aOw6Z+z6LWE5rqQ77yMXHJcbiAgICAgICog54S25ZCO5LuO6LWE5rqQ566h55CG5Zmo5Lit6I635Y+W5aOw6Z+z5Ymq6L6R77yM5bm25L2/55SoVW5pdHnnmoTpn7PpopHlvJXmk47mkq3mlL7or6Xlo7Dpn7PliarovpHjgIJcclxuICAgICAgKiDlpoLmnpzmjIflrprkuoblvqrnjq/mkq3mlL7vvIzlo7Dpn7PlsIbkuIDnm7Tmkq3mlL7nm7TliLDlgZzmraLmiJbmuLjmiI/nu5PmnZ/jgIJcclxuICAgICAgKiBcclxuICAgICAgKiBAcGFyYW0gbmFtZSDlo7Dpn7PmlYjmnpznmoTlkI3np7DvvIzkvb/nlKjmnprkuL7nsbvlnotFTlVNX0FVRElPX0NMSVDmnaXmjIflrprjgIJcclxuICAgICAgKiBAcGFyYW0gaXNMb29wIOaYr+WQpuW+queOr+aSreaUvuWjsOmfs++8jOm7mOiupOS4umZhbHNl77yI5LiN5b6q546v77yJ44CCXHJcbiAgICAgICogQHJldHVybnMg6L+U5Zue5LiA5Liq6KGo56S65aOw6Z+z5pKt5pS+55qE5ZSv5LiA5qCH6K+G56ym44CCXHJcbiAgICAgICovXHJcbiAgICBhc3luYyBwbGF5U291bmQobmFtZTogRU5VTV9BVURJT19DTElQLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICghRGF0YU1hbmFnZXIuaW5zdGFuY2UuYXVkaW9Tb3VuZCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2xpcCA9IGF3YWl0IFJlc291cmNlTWFuYWdlci5pbnN0YW5jZS5nZXRDbGlwKG5hbWUpXHJcbiAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgaXNMb29wKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PmlYjjgIJcclxuICAgICAqIFxyXG4gICAgICog5pys5Ye95pWw6YCa6L+H6Z+z6aKR5byV5pOO5YGc5q2i5oyH5a6a6Z+z5pWI55qE5pKt5pS+44CC6Z+z5pWI6YCa5bi45piv5oyH55+t5L+D55qE6Z+z6aKR54mH5q6177yM5L6L5aaC5ri45oiP5Lit55qE5Lq654mp6ISa5q2l5aOw44CB5pS75Ye75aOw562J44CCXHJcbiAgICAgKiDkvb/nlKjpn7PmlYhJROS9nOS4uuWPguaVsO+8jOWPr+S7peebtOaOpeWumuS9jeWIsOato+WcqOaSreaUvueahOmfs+aViO+8jOWunueOsOeyvuehrueahOaOp+WItuOAglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXVkaW9JZCDpn7PmlYjnmoRJRO+8jOeUqOS6juWUr+S4gOagh+ivhuS4gOS4qumfs+aViOWunuS+i+OAglxyXG4gICAgICovXHJcbiAgICBzdG9wU291bmQoYXVkaW9JZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChhdWRpb0lkKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==