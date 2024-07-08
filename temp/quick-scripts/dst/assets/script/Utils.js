
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '076f9NV1ThDb5+NMok6LV1k', 'Utils');
// script/Utils.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.getRandom = void 0;
// 生产随机数字
function getRandom(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
exports.getRandom = getRandom;
// 引用数据值传递
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7QUFFdkIsU0FBUztBQUNULFNBQWdCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBWTtJQUNqRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNqRSxDQUFDO0FBRkQsOEJBRUM7QUFFRCxVQUFVO0FBQ1YsU0FBZ0IsS0FBSyxDQUFDLEdBQVE7SUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUMxQyxDQUFDO0FBRkQsc0JBRUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuLy8g55Sf5Lqn6ZqP5py65pWw5a2XXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb20obG93ZXI6IG51bWJlciwgdXBwZXI6bnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcisxKSkgKyBsb3dlcjtcclxufVxyXG5cclxuLy8g5byV55So5pWw5o2u5YC85Lyg6YCSXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmo6IGFueSl7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxyXG59XHJcbiJdfQ==