"use strict";
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