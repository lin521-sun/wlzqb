
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/StaticInstance.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3b2f3Ixi1KYaFJJSRu8WLn', 'StaticInstance');
// script/StaticInstance.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticInstance = void 0;
var StaticInstance = /** @class */ (function () {
    function StaticInstance() {
    }
    StaticInstance.setUIManager = function (context) {
        StaticInstance.uiManager = context;
    };
    StaticInstance.uiManager = undefined;
    return StaticInstance;
}());
exports.StaticInstance = StaticInstance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGF0aWNJbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7QUFJdkI7SUFBQTtJQU1BLENBQUM7SUFIVSwyQkFBWSxHQUFuQixVQUFvQixPQUFrQjtRQUNsQyxjQUFjLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBSk0sd0JBQVMsR0FBMEIsU0FBUyxDQUFDO0lBS3hELHFCQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL1VJTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRpY0luc3RhbmNlIHtcclxuICAgIHN0YXRpYyB1aU1hbmFnZXI6IFVJTWFuYWdlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGF0aWMgc2V0VUlNYW5hZ2VyKGNvbnRleHQ6IFVJTWFuYWdlcil7XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyID0gY29udGV4dDtcclxuICAgIH1cclxufSJdfQ==