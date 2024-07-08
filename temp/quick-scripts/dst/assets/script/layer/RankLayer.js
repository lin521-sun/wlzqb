
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/RankLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b3b6DNG/pGWK/6lqk3+Yvj', 'RankLayer');
// script/layer/RankLayer.ts

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
var SdkManager_1 = require("../manager/SdkManager");
var StaticInstance_1 = require("../StaticInstance");
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankLayer = /** @class */ (function (_super) {
    __extends(RankLayer, _super);
    function RankLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankLayer.prototype.onEnable = function () {
        // 读取排行榜数据
        SdkManager_1.default.instance.getRank();
    };
    RankLayer.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.RANK, false);
    };
    RankLayer = __decorate([
        ccclass
    ], RankLayer);
    return RankLayer;
}(Baselayer_1.default));
exports.default = RankLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcUmFua0xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixnQ0FBd0Q7QUFDeEQsd0RBQW1EO0FBQ25ELG9EQUErQztBQUMvQyxvREFBbUQ7QUFDbkQseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFTO0lBQWhEOztJQVdBLENBQUM7SUFURyw0QkFBUSxHQUFSO1FBQ0ksVUFBVTtRQUNWLG9CQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFWZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVc3QjtJQUFELGdCQUFDO0NBWEQsQUFXQyxDQVhzQyxtQkFBUyxHQVcvQztrQkFYb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsIFxyXG5cclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgU2RrTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9TZGtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcbmltcG9ydCBCYXNlTGF5ZXIgZnJvbSBcIi4vQmFzZWxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcblxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICAvLyDor7vlj5bmjpLooYzmppzmlbDmja5cclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLmdldFJhbmsoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpe1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlJBTkssIGZhbHNlKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==