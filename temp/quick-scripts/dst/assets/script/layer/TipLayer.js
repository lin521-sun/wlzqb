
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/TipLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c10d2JomoZBTKtmsE5LQE5t', 'TipLayer');
// script/layer/TipLayer.ts

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
var Enum_1 = require("../Enum");
var AudioManager_1 = require("../manager/AudioManager");
var EventManager_1 = require("../manager/EventManager");
var StaticInstance_1 = require("../StaticInstance");
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipLayer = /** @class */ (function (_super) {
    __extends(TipLayer, _super);
    function TipLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelContent = null;
        return _this;
    }
    TipLayer.prototype.onEnable = function () {
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_STOP);
    };
    TipLayer.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.TIP, false);
    };
    TipLayer.prototype.setTip = function (num) {
        this.levelContent.children.forEach(function (item) {
            item.active = item.name == "Level" + num;
        });
    };
    TipLayer.prototype.onDisable = function () {
        // 计时器开启
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.TIMER_START);
    };
    __decorate([
        property(cc.Node)
    ], TipLayer.prototype, "levelContent", void 0);
    TipLayer = __decorate([
        ccclass
    ], TipLayer);
    return TipLayer;
}(Baselayer_1.default));
exports.default = TipLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcVGlwTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLGdDQUF5RTtBQUN6RSx3REFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25ELG9EQUFtRDtBQUNuRCx5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVM7SUFBL0M7UUFBQSxxRUF3QkM7UUFyQkcsa0JBQVksR0FBWSxJQUFJLENBQUE7O0lBcUJoQyxDQUFDO0lBbkJHLDJCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEdBQVc7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFRLEdBQUssQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksUUFBUTtRQUNSLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVTtJQUhYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3QjVCO0lBQUQsZUFBQztDQXhCRCxBQXdCQyxDQXhCcUMsbUJBQVMsR0F3QjlDO2tCQXhCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0dBTUVfRVZFTlQsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcbmltcG9ydCBCYXNlTGF5ZXIgZnJvbSBcIi4vQmFzZWxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcExheWVyIGV4dGVuZHMgQmFzZUxheWVyIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxldmVsQ29udGVudDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5USU1FUl9TVE9QKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlRJUCwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGlwKG51bTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxldmVsQ29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBpdGVtLm5hbWUgPT0gYExldmVsJHtudW19YFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgLy8g6K6h5pe25Zmo5byA5ZCvXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLmVtaXQoRU5VTV9HQU1FX0VWRU5ULlRJTUVSX1NUQVJUKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==