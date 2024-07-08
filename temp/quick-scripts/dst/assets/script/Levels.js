
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Levels.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '904f4qPW5xCjqt6NxfPlLWC', 'Levels');
// script/Levels.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Levels = void 0;
var Enum_1 = require("./Enum");
// Created by carolsail
var Enum_2 = require("./Enum");
//关卡数据
exports.Levels = [
    {
        info: { team: '德国', intro: '正赛', icon: 'DE' },
        blue: [
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            { x: -200, y: -150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: -200, y: 150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: 200, y: 300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: { x: 0, y: 555, width: 200, red: [] },
        cameraMove: { x: false, y: false },
        isTip: true
    },
    {
        info: { team: '瑞士', intro: '正赛1', icon: 'CH' },
        blue: [
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -200, y: -150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: -150, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            { x: -200, y: 150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 50, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '苏格兰', intro: '正赛2', icon: 'SCO' },
        blue: [
            { x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -300, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false }
                ]
            },
            {
                x: 200, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: -200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: 250, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: 350, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 },
                ]
            },
            {
                x: -200, y: 250, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: 150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '匈牙利', intro: '正赛3', icon: 'HUN' },
        blue: [
            { x: 200, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: -100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -100, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: false },
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: true },
                ]
            },
            {
                x: -200, y: 100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: 100, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: false },
                    { x: -200, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '意大利', intro: '正赛4', icon: 'IT' },
        blue: [
            { x: 0, y: -400, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: -200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            { x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: 200, angle: 90, red: [
                    { x: 0, y: 200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '瑞士', intro: '正赛5', icon: 'CH' },
        blue: [
            { x: -150, y: -250, angle: 315, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: -400, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -400, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            { x: 150, y: -250, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: -100, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -400, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 200, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 250, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 300, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 350, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 400, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                    { x: 0, y: 450, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.IDLE },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '克罗地亚', intro: '正赛6', icon: 'CRO' },
        blue: [
            {
                x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: -200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '西班牙', intro: '正赛7', icon: 'ES' },
        blue: [
            {
                x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: -200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -300, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false }
                ]
            },
            {
                x: 0, y: 200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 },
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '阿尔巴尼亚', intro: '正赛8', icon: 'ALB' },
        blue: [
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true },
                ]
            },
            {
                x: 0, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '斯洛文尼亚', intro: '正赛9', icon: 'SLO' },
        blue: [
            { x: -200, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: true },
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true },
                ]
            },
            {
                x: 200, y: 300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '丹麦', intro: '正赛10', icon: 'DK' },
        blue: [
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: -200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: false },
                ]
            },
            {
                x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false },
                ]
            },
            { x: 200, y: 200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] }
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '克罗地亚', intro: '正赛11', icon: 'CRO' },
        blue: [
            {
                x: -200, y: 150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: 150, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false }
                ]
            },
            { x: 220, y: 150, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: -200, y: -150, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -150, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: false }
                ]
            },
            { x: 200, y: -150, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: -400, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: []
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '英格兰', intro: '正赛12', icon: 'ENG' },
        blue: [
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '塞尔维亚', intro: '正赛13', icon: 'SRB' },
        blue: [
            {
                x: 200, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 180, isDirX: true },
                ], food: [
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 80 },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 420, distance: 150, isDirX: true },
            ]
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '奥地利', intro: '正赛14', icon: 'AUT' },
        blue: [
            { x: 400, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 300, y: 0, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false },
                    { x: 200, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true },
                ]
            },
            {
                x: 0, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
            { x: -200, y: -200, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: -200, y: 200, angle: 90, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            { x: 100, y: 200, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false }
    },
    {
        info: { team: '法国', intro: '正赛15', icon: 'FR' },
        blue: [
            { x: 200, y: -700, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -200, y: -600, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: -600, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 150, isDirX: false },
                ]
            },
            {
                x: 200, y: -500, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -500, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false },
                ]
            },
            { x: -200, y: -400, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: -300, angle: 180, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false },
                ]
            },
            {
                x: -200, y: -200, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            { x: 200, y: -100, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: -200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 200, y: 100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            {
                x: -200, y: 200, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100 }
                ]
            },
            { x: 200, y: 300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
        ],
        endpoint: { x: 0, y: 555, width: 200, red: [] },
        cameraMove: { x: false, y: true },
        isTip: false
    },
    {
        info: { team: '荷兰', intro: '正赛16', icon: 'NL' },
        blue: [
            { x: 400, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: 500, y: -100, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 500, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            },
            {
                x: 500, y: 300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 500, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 },
                ], food: [
                    { x: 500, y: 150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 100, isDirX: true },
                ]
            },
            {
                x: 200, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 250, y: 50, angle: 320, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            { x: 0, y: -100, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '奥地利', intro: '正赛17', icon: 'AUT' },
        blue: [
            { x: 0, y: -200, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 0, y: 150, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 250, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: true },
                    { x: 0, y: 50, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 0, y: 150, angle: 270, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '波兰', intro: '正赛18', icon: 'POL' },
        blue: [
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -100, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [], food: [
                    { x: 0, y: -300, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 120, isDirX: false },
                ]
            },
            {
                x: -400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -300, y: -300, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            {
                x: -200, y: 100, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -220, y: 0, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true },
                ]
            },
            {
                x: 200, y: -50, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 500, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100 }
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: true },
                { x: 0, y: 355, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '罗马尼亚', intro: '正赛19', icon: 'RO' },
        blue: [
            {
                x: -500, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [
                    { x: -500, y: 300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100 }
                ]
            },
            {
                x: -500, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -500, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -500, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -500, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                ]
            },
            {
                x: 0, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 0, y: 200, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.IDLE, speed: 500, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '比利时', intro: '正赛20', icon: 'BE' },
        blue: [
            { x: 0, y: -800, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: 0, y: -600, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 0, y: -700, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                ]
            },
            {
                x: 0, y: -400, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -500, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            {
                x: 0, y: -200, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                { x: 0, y: 355, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true }
            ]
        },
        cameraMove: { x: false, y: true },
        isTip: false
    },
    {
        info: { team: '斯洛伐克', intro: '正赛21', icon: 'SK' },
        blue: [
            { x: -800, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: -600, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -400, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '乌克兰', intro: '正赛22', icon: 'UKR' },
        blue: [
            { x: 600, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 600, y: -300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 600, y: 150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 600, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true },
                    { x: 600, y: -150, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true },
                ]
            },
            {
                x: 0, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 150, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false },
                    { x: 300, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false },
                    { x: 450, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '斯洛伐克', intro: '正赛23', icon: 'SK' },
        blue: [
            { x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            { x: 200, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: 200, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            { x: -200, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [] },
            {
                x: 0, y: -150, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -100, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: -50, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 0, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 50, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: 100, y: 400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, angle: 0, red: []
        },
        cameraMove: { x: false, y: false },
        isTip: false
    },
    {
        info: { team: '捷克', intro: '正赛24', icon: 'CZ' },
        blue: [
            { x: -600, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: -600, y: -300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -600, y: 100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true },
                    { x: -600, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true },
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: -200, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false },
                    { x: -400, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false },
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 200, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 100, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false },
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '土耳其', intro: '正赛25', icon: 'TR' },
        blue: [
            { x: 600, y: 300, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY, red: [] },
            {
                x: 600, y: -100, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: true },
                    { x: 600, y: 50, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true }
                ]
            },
            {
                x: 100, y: -300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 650, circleRadius: 100, isDirX: true },
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 150, isDirX: false },
                ]
            },
            {
                x: -200, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -100, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: false },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true },
                { x: -100, y: 355, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 180, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '葡萄牙', intro: '正赛26', icon: 'POR' },
        blue: [
            { x: -800, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: -600, y: 300, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: -400, y: 0, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
            {
                x: -400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: -300, angle: 180, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
            {
                x: 400, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 600, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
            {
                x: 400, y: 300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 0, y: 0, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 0, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true }
                ]
            },
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: false },
        isTip: false
    },
    {
        info: { team: '格鲁吉亚', intro: '正赛27', icon: 'GEO' },
        blue: [
            { x: 900, y: -900, angle: 90, status: Enum_1.ENUM_PLAYER_STATUS.READY },
            {
                x: 900, y: -600, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 900, y: -600, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 900, y: 0, angle: 270, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 900, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 },
                    { x: 900, y: -200, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true },
                    { x: 900, y: -400, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true }
                ]
            },
            {
                x: 600, y: 0, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, food: [
                    { x: 600, y: 0, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100 }
                ]
            },
            {
                x: 300, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 350, y: -200, angle: 0, status: Enum_2.ENUM_ENEMY_STATUS.IDLE }
                ]
            },
            {
                x: -200, y: -300, angle: 0, status: Enum_1.ENUM_PLAYER_STATUS.IDLE, red: [
                    { x: 150, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false },
                    { x: 0, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false },
                    { x: -100, y: -300, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false },
                ]
            }
        ],
        endpoint: {
            x: 0, y: 555, width: 200, red: [
                { x: 0, y: 455, angle: 90, status: Enum_2.ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true }
            ]
        },
        cameraMove: { x: true, y: true },
        isTip: false
    }
];
// export const Levels = [
//     {
//         info: {team: '意大利', intro: '友谊赛', icon: 'IT'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: -200, y: 150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: 300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: []},
//         cameraMove: {x: false, y: false},
//         isTip: true
//     },
//     {
//         info: {team: '沙特', intro: '正赛1', icon: 'SA'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -150, angle: 180, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: 200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: -200, y: 150, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 50, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '哥斯达黎加', intro: '正赛2', icon: 'CR'},
//         blue: [
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -300, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false}
//             ]},
//             {x: 200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: -200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: 200, y: 250, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: 350, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: 250, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 250, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '伊朗', intro: '正赛3', icon: 'IR'},
//         blue: [
//             {x: 200, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 0, y: -100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -100, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: false},
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: true},
//             ]},
//             {x: -200, y: 100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: 100, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 150, isDirX: false},
//                 {x: -200, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '突尼斯', intro: '正赛4', icon: 'TN'},
//         blue: [
//             {x: 0, y: -400, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 0, y: -200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 0, y: 200, angle: 90, red: [
//                 {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '卡塔尔', intro: '正赛5', icon: 'QA'},
//         blue: [
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: -200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '喀麦隆', intro: '正赛6', icon: 'CM'},
//         blue: [
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: -200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -300, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false}
//             ]},
//             {x: 0, y: 200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100},
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '澳大利亚', intro: '正赛7', icon: 'AU'},
//         blue: [
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true},
//             ]},
//             {x: 0, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '加纳', intro: '正赛8', icon: 'GH'},
//         blue: [
//             {x: -200, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: true},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 250, isDirX: true},
//             ]},
//             {x: 200, y: 300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '摩洛哥', intro: '正赛9', icon: 'MA'},
//         blue: [
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: -200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: false},
//             ]},
//             {x: 200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false},
//             ]},
//             {x: 200, y: 200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: []}
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '日本', intro: '正赛10', icon: 'JP'},
//         blue: [
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '韩国', intro: '正赛11', icon: 'KR'},
//         blue: [
//             {x: 200, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 180, isDirX: true},
//             ], food: [
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 80},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 420, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '威尔士', intro: '正赛12', icon: 'WE'},
//         blue: [
//             {x: 400, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 300, y: 0, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//                 {x: 200, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 100, isDirX: true},
//             ]},
//             {x: 0, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 0, status: ENUM_ENEMY_STATUS.ROUND, speed: 200, circleRadius: 100}
//             ]},
//             {x: -200, y: -200, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: -200, y: 200, angle: 90, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: 100, y: 200, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, angle: 0, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false}
//     },
//     {
//         info: {team: '厄瓜多尔', intro: '正赛13', icon: 'EC'},
//         blue: [
//             {x: 200, y: -700, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: -600, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 150, isDirX: false},
//             ]},
//             {x: 200, y: -500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -500, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false},
//             ]},
//             {x: -200, y: -400, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -300, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 100, isDirX: false},
//             ]},
//             {x: -200, y: -200, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: 200, y: -100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: -200, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//             {x: 200, y: 100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: -200, y: 200, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 250, circleRadius: 100}
//             ]},
//             {x: 200, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: []},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '加拿大', intro: '正赛14', icon: 'CA'},
//         blue: [
//             {x: 400, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: 500, y: -100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 500, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]},
//             {x: 500, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 500, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100},
//             ], food: [
//                 {x: 500, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 100, isDirX: true},
//             ]},
//             {x: 200, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 250, y: 50, angle: 320, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 0, y: -100, angle: 0, status: ENUM_PLAYER_STATUS.IDLE}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '美国', intro: '正赛15', icon: 'US'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -100, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [], food: [
//                 {x: 0, y: -300, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 250, distance: 120, isDirX: false},
//             ]},
//             {x: -400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -300, y: -300, angle: 0, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: -200, y: 100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -220, y: 0, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true},
//             ]},
//             {x: 200, y: -50, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 500, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 300, circleRadius: 100}
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: true},
//             {x: 0, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '墨西哥', intro: '正赛16', icon: 'MX'},
//         blue: [
//             {x: -500, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.READY, red:[
//                 {x: -500, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 350, circleRadius: 100}
//             ]},
//             {x: -500, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: -500, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -500, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: -500, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 400, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             ]},
//             {x: 0, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 0, y: 200, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.IDLE, speed: 500, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '波兰', intro: '正赛17', icon: 'PL'},
//         blue: [
//             {x: 0, y: -800, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: 0, y: -600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 0, y: -700, angle: 0, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             ]},
//             {x: 0, y: -400, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 0, y: -500, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 0, y: -200, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, food:[
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: 100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             {x: 0, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true}
//         ]},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '塞内加尔', intro: '正赛19', icon: 'SN'},
//         blue: [
//             {x: -800, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: -600, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -400, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '瑞士', intro: '正赛20', icon: 'CH'},
//         blue: [
//             {x: 600, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 600, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true},
//                 {x: 600, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: true},
//             ]},
//             {x: 0, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 150, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false},
//                 {x: 300, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false},
//                 {x: 450, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '塞尔维亚', intro: '正赛21', icon: 'RS'},
//         blue: [
//             {x: -600, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -600, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -600, y: 100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: -600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: true},
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false},
//                 {x: -400, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false},
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: false},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '克罗地亚', intro: '正赛22', icon: 'HR'},
//         blue: [
//             {x: 600, y: 300, angle: 270, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: 600, y: -100, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: true},
//                 {x: 600, y: 50, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 120, isDirX: true}
//             ]},
//             {x: 100, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 650, circleRadius: 100, isDirX: true},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 150, isDirX: false},
//             ]},
//             {x: -200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: false},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             {x: -100, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 180, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '丹麦', intro: '正赛23', icon: 'DK'},
//         blue: [
//             {x: -800, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: -600, y: 300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -400, y: 0, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: -400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 600, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 400, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '荷兰', intro: '决赛1', icon: 'NL'},
//         blue: [
//             {x: 900, y: -900, angle: 90, status: ENUM_PLAYER_STATUS.READY},
//             {x: 900, y: -600, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 900, y: -600, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 900, y: 0, angle: 270, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 900, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//                 {x: 900, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true},
//                 {x: 900, y: -400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true}
//             ]},
//             {x: 600, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 300, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 350, y: -200, angle: 0, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: -200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 150, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: false},
//                 {x: 0, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 120, isDirX: false},
//                 {x: -100, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 150, isDirX: false},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 120, isDirX: true}
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '葡萄牙', intro: '决赛2', icon: 'PT'},
//         blue: [
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: true},
//             {x: 0, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: true},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: true},
//             {x: 0, y: 100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 100, distance: 220, isDirX: true},
//             {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//             {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 280, distance: 200, isDirX: true},
//             {x: 0, y: -200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 440, distance: 160, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '英格兰', intro: '决赛3', icon: 'EN'},
//         blue: [
//             {x: -600, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: -300, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: false},
//             ], red:[
//                 {x: -450, y: -800, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//             ]},
//             {x: 0, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -100, y: -800, angle: 180, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 400, y: -800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 200, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: false},
//             ], red:[
//                 {x: 300, y: -800, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//             ]},
//             {x: 400, y: -400, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 400, y: -500, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//             {x: 0, y: -400, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 200, y: -400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 400, distance: 160, isDirX: false},
//             ], red:[
//                 {x: 300, y: -400, angle: 180, status: ENUM_ENEMY_STATUS.MOVE, speed: 200, distance: 200, isDirX: false},
//             ]},
//             {x: 0, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.IDLE}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 350, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '西班牙', intro: '决赛4', icon: 'ES'},
//         blue: [
//             {x: 600, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 300, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 0, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 300, y: -900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 0, y: -900, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -300, y: -900, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 700, circleRadius: 100, isDirX: true}
//             ]},
//             {x: -300, y: -600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 560, circleRadius: 100}
//             ]},
//             {x: -300, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 550, circleRadius: 100}
//             ]},
//             {x: -200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: true}
//             ]},
//             {x: 200, y: 0, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '德国', intro: '决赛5', icon: 'DE'},
//         blue: [
//             {x: 0, y: -2200, angle: 270, status: ENUM_PLAYER_STATUS.READY},
//             {x: 200, y: -1800, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 200, y: -1900, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 140, isDirX: true},
//                 {x: 100, y: -1800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: false},
//             ]},
//             {x: 0, y: -1400, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDirX: true}
//             ]},
//             {x: -200, y: -1000, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -200, y: -1100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 140, isDirX: true},
//                 {x: -100, y: -1000, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 140, isDirX: false},
//             ]},
//             {x: 0, y: -600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -50, y: -700, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 0, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: true},
//             ]},
//             {x: 200, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDirX: true}
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//             {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: true},
//         ]},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '阿根廷', intro: '决赛6', icon: 'AR'},
//         blue: [
//             {x: -600, y: -2000, angle: 270, status: ENUM_PLAYER_STATUS.READY, red:[
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: -300, y: -2000, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 600, circleRadius: 100, isDir: true}
//             ]},
//             {x: 0, y: -2000, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red:[
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -1600, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -1800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 120, isDirX: true}
//             ]},
//             {x: 300, y: -1600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDir: true}
//             ]},
//             {x: 600, y: -1600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 600, y: -1200, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: -1400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 120, isDirX: true}
//             ]},
//             {x: 300, y: -1200, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 120}
//             ]},
//             {x: 0, y: -800, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 0, y: -900, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//                 {x: 100, y: -800, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: false},
//             ]},
//             {x: -300, y: -800, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100}
//             ]},
//             {x: 0, y: -400, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//                 {x: 0, y: -600, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 150, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//             {x: 0, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 600, distance: 150, isDirX: true},
//             {x: 0, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 200, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '比利时', intro: '决赛7', icon: 'BE'},
//         blue: [
//             {x: -1600, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.READY},
//             {x: -1200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -1100, y: -300, status: ENUM_ENEMY_STATUS.IDLE}
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 150, isDirX: true}
//             ]},
//             {x: -800, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -700, y: -300, status: ENUM_ENEMY_STATUS.IDLE}
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 150, isDirX: true}
//             ]},
//             {x: -400, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: -300, y: -300, status: ENUM_ENEMY_STATUS.IDLE}
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 150, isDirX: true}
//             ]},
//             {x: 0, y: -300, angle: 90, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 450, circleRadius: 100, isDirX: false}
//             ]},
//             {x: 0, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 250, isDirX: true},
//             ]}
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//             {x: 0, y: 200, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 200, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '法国', intro: '决赛8', icon: 'FR'},
//         blue: [
//             {x: 1600, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.READY, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 480, circleRadius: 100},
//             ]},
//             {x: 1600, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1600, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 510, distance: 160, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//             ]},
//             {x: 1600, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1600, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 520, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 490, circleRadius: 100},
//             ]},
//             {x: 1200, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1400, y: -300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 490, distance: 140, isDirX: false},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 510, circleRadius: 100, isDirX: true},
//             ]},
//             {x: 1200, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1200, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 520, circleRadius: 100, isDirX: true},
//             ]},
//             {x: 1200, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1200, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 500, distance: 160, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 510, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 800, y: 300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 1000, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 510, distance: 140, isDirX: false},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 490, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 800, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 800, y: 150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 550, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 550, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 800, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 800, y: -150, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 520, distance: 150, isDirX: true},
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 480, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 400, y: -300, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100, isDirX: false},
//             ]},
//             {x: 0, y: 0, angle: 0, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 450, distance: 180, isDirX: false},
//                 {x: 0, y: -100, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 300, distance: 150, isDirX: true},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 520, distance: 200, isDirX: true},
//             {x: 50, y: 300, angle: 90, status: ENUM_ENEMY_STATUS.MOVE, speed: 480, distance: 200, isDirX: true},
//         ]},
//         cameraMove: {x: true, y: false},
//         isTip: false
//     },
//     {
//         info: {team: '巴西', intro: '决赛9', icon: 'BR'},
//         blue: [
//             {x: 200, y: -5500, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//             {x: -200, y: -5300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -5100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -5150, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -4900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -4700, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -4750, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -4500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -4300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -4350, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -4100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -3900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -3950, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -3700, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -3500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -3550, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -3300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -3100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -3150, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -2900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -2700, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -2750, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -2300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -2100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -2150, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -1800, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -1500, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -1550, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -1200, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -900, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -950, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -600, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ]},
//             {x: 200, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: -350, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: -100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 80},
//             ], food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 130},
//             ]},
//             {x: 200, y: 100, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, red: [
//                 {x: 100, y: 50, angle: 145, status: ENUM_ENEMY_STATUS.IDLE},
//             ]},
//             {x: -200, y: 300, angle: 180, status: ENUM_PLAYER_STATUS.IDLE, food: [
//                 {x: 600, y: 0, angle: 90, status: ENUM_ENEMY_STATUS.ROUND, speed: 500, circleRadius: 100},
//             ]},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: [
//             {x: 0, y: 400, angle: 90, status: ENUM_ENEMY_STATUS.IDLE},
//         ]},
//         cameraMove: {x: false, y: true},
//         isTip: false
//     },
//     {
//         info: {team: '中国', intro: '冠军赛', icon: 'CN'},
//         blue: [
//             {x: 0, y: -300, angle: 180, status: ENUM_PLAYER_STATUS.READY, red: []},
//         ],
//         endpoint: {x: 0, y: 500, width: 200, red: []},
//         cameraMove: {x: false, y: false},
//         isTip: false
//     }
// ]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMZXZlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRDO0FBQzVDLHVCQUF1QjtBQUV2QiwrQkFBMkM7QUFDM0MsTUFBTTtBQUNPLFFBQUEsTUFBTSxHQUFHO0lBQ2xCO1FBQ0ksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7UUFDN0MsSUFBSSxFQUFFO1lBQ0YsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSx5QkFBa0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUMxRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUseUJBQWtCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDeEUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUseUJBQWtCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDdEUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSx5QkFBa0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUN2RSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSx5QkFBa0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtT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QUFDNUcseUJBQXlCO0FBQ3pCLDZHQUE2RztBQUM3RyxrQkFBa0I7QUFDbEIsbUZBQW1GO0FBQ25GLCtFQUErRTtBQUMvRSxrQkFBa0I7QUFDbEIscUZBQXFGO0FBQ3JGLDZHQUE2RztBQUM3RyxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHNEQUFzRDtBQUN0RCx5RUFBeUU7QUFDekUsY0FBYztBQUNkLDJDQUEyQztBQUMzQyx1QkFBdUI7QUFDdkIsU0FBUztBQUNULFFBQVE7QUFDUix3REFBd0Q7QUFDeEQsa0JBQWtCO0FBQ2xCLHNGQUFzRjtBQUN0RixhQUFhO0FBQ2IseURBQXlEO0FBQ3pELDRDQUE0QztBQUM1Qyx1QkFBdUI7QUFDdkIsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTlVNX1BMQVlFUl9TVEFUVVMgfSBmcm9tICcuL0VudW0nO1xyXG4vLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuaW1wb3J0IHsgRU5VTV9FTkVNWV9TVEFUVVMgfSBmcm9tIFwiLi9FbnVtXCI7XHJcbi8v5YWz5Y2h5pWw5o2uXHJcbmV4cG9ydCBjb25zdCBMZXZlbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5b635Zu9JywgaW50cm86ICfmraPotZsnLCBpY29uOiAnREUnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtMTUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7IHg6IC0yMDAsIHk6IDE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHsgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfnkZ7lo6snLCBpbnRybzogJ+ato+i1mzEnLCBpY29uOiAnQ0gnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTE1MCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogNTAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+iLj+agvOWFsCcsIGludHJvOiAn5q2j6LWbMicsIGljb246ICdTQ08nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAyNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMjAwLCB5OiAzNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMjUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WMiOeJmeWIqScsIGludHJvOiAn5q2j6LWbMycsIGljb246ICdIVU4nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IDEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5oSP5aSn5YipJywgaW50cm86ICfmraPotZs0JywgaWNvbjogJ0lUJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAtNDAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn55Ge5aOrJywgaW50cm86ICfmraPotZs1JywgaWNvbjogJ0NIJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtMTUwLCB5OiAtMjUwLCBhbmdsZTogMzE1LCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTQwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IHg6IDE1MCwgeTogLTI1MCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMTAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC00MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMTAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDIwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyNTAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDM1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0MDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDUwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WFi+e9l+WcsOS6micsIGludHJvOiAn5q2j6LWbNicsIGljb246ICdDUk8nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn6KW/54+t54mZJywgaW50cm86ICfmraPotZs3JywgaWNvbjogJ0VTJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDUwLCBkaXN0YW5jZTogMjUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn6Zi/5bCU5be05bC85LqaJywgaW50cm86ICfmraPotZs4JywgaWNvbjogJ0FMQicgfSxcclxuICAgICAgICBibHVlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IGZhbHNlLCB5OiBmYWxzZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfmlq/mtJvmloflsLzkuponLCBpbnRybzogJ+ato+i1mzknLCBpY29uOiAnU0xPJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDUwLCBkaXN0YW5jZTogMjUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAzMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+S4uem6picsIGludHJvOiAn5q2j6LWbMTAnLCBpY29uOiAnREsnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5YWL572X5Zyw5LqaJywgaW50cm86ICfmraPotZsxMScsIGljb246ICdDUk8nIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAxNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjIwLCB5OiAxNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTE1MCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjAwLCB5OiAtMTUwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC00MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn6Iux5qC85YWwJywgaW50cm86ICfmraPotZsxMicsIGljb246ICdFTkcnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzNTAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgYW5nbGU6IDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5aGe5bCU57u05LqaJywgaW50cm86ICfmraPotZsxMycsIGljb246ICdTUkInIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzNTAsIGNpcmNsZVJhZGl1czogMTgwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiA4MCB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIGFuZ2xlOiAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQyMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogZmFsc2UsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WlpeWcsOWIqScsIGludHJvOiAn5q2j6LWbMTQnLCBpY29uOiAnQVVUJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiA0MDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDIwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMzAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IHg6IC0yMDAsIHk6IC0yMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMjAwLCBhbmdsZTogOTAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyNTAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAxMDAsIHk6IDIwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogdHJ1ZSwgeTogZmFsc2UgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfms5Xlm70nLCBpbnRybzogJ+ato+i1mzE1JywgaWNvbjogJ0ZSJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC03MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IC02MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogLTYwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI1MCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC01MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtNTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtNDAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogLTIwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHsgeDogLTIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyNTAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwMCwgeTogMjAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgeDogMjAwLCB5OiAzMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDogeyB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW10gfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IGZhbHNlLCB5OiB0cnVlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+iNt+WFsCcsIGludHJvOiAn5q2j6LWbMTYnLCBpY29uOiAnTkwnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDQwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogNTAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA1MDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA1MDAsIHk6IDMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwIH0sXHJcbiAgICAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA1MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAyMDAsIHk6IDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMjUwLCB5OiA1MCwgYW5nbGU6IDMyMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+WlpeWcsOWIqScsIGludHJvOiAn5q2j6LWbMTcnLCBpY29uOiAnQVVUJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDE1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyNTAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDE1MCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5rOi5YWwJywgaW50cm86ICfmraPotZsxOCcsIGljb246ICdQT0wnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTEwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10sIGZvb2Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyNTAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTMwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IDEwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtMjIwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAtNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE0MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDM1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogdHJ1ZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn572X6ams5bC85LqaJywgaW50cm86ICfmraPotZsxOScsIGljb246ICdSTycgfSxcclxuICAgICAgICBibHVlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC01MDAsIHk6IDMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtNTAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDM1MCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNTAwLCB5OiAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC01MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNTAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC01MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAyMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+avlOWIqeaXticsIGludHJvOiAn5q2j6LWbMjAnLCBpY29uOiAnQkUnIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDAsIHk6IC04MDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC02MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTcwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC00MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtNTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIGZvb2Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogMzU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogdHJ1ZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfmlq/mtJvkvJDlhYsnLCBpbnRybzogJ+ato+i1mzIxJywgaWNvbjogJ1NLJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtODAwLCB5OiAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNjAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdmU6IHsgeDogdHJ1ZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5LmM5YWL5YWwJywgaW50cm86ICfmraPotZsyMicsIGljb246ICdVS1InIH0sXHJcbiAgICAgICAgYmx1ZTogW1xyXG4gICAgICAgICAgICB7IHg6IDYwMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA2MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA2MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA2MDAsIHk6IC0xNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTUwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMzAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNDUwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiB0cnVlLCB5OiBmYWxzZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICfmlq/mtJvkvJDlhYsnLCBpbnRybzogJ+ato+i1mzIzJywgaWNvbjogJ1NLJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW10gfSxcclxuICAgICAgICAgICAgeyB4OiAtMjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtNTAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA1MCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAxMDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCBhbmdsZTogMCwgcmVkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiBmYWxzZSwgeTogZmFsc2UgfSxcclxuICAgICAgICBpc1RpcDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5mbzogeyB0ZWFtOiAn5o235YWLJywgaW50cm86ICfmraPotZsyNCcsIGljb246ICdDWicgfSxcclxuICAgICAgICBibHVlOiBbXHJcbiAgICAgICAgICAgIHsgeDogLTYwMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNjAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTYwMCwgeTogMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAtNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiB0cnVlLCB5OiBmYWxzZSB9LFxyXG4gICAgICAgIGlzVGlwOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmZvOiB7IHRlYW06ICflnJ/ogLPlhbYnLCBpbnRybzogJ+ato+i1mzI1JywgaWNvbjogJ1RSJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiA2MDAsIHk6IDMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW10gfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogNjAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA2MDAsIHk6IDUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMTAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjUwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTUwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZHBvaW50OiB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDU1NSwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDQ1NSwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyB4OiAtMTAwLCB5OiAzNTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTgwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+iRoeiQhOeJmScsIGludHJvOiAn5q2j6LWbMjYnLCBpY29uOiAnUE9SJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiAtODAwLCB5OiAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNjAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtNDAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA0MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiA2MDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDQwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRwb2ludDoge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiA1NTUsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiA0NTUsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3ZlOiB7IHg6IHRydWUsIHk6IGZhbHNlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGluZm86IHsgdGVhbTogJ+agvOmygeWQieS6micsIGludHJvOiAn5q2j6LWbMjcnLCBpY29uOiAnR0VPJyB9LFxyXG4gICAgICAgIGJsdWU6IFtcclxuICAgICAgICAgICAgeyB4OiA5MDAsIHk6IC05MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFkgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogOTAwLCB5OiAtNjAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDkwMCwgeTogLTYwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IDkwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiA5MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHg6IDkwMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogOTAwLCB5OiAtNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogNjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMzAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAzNTAsIHk6IC0yMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAxNTAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeDogLTEwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kcG9pbnQ6IHtcclxuICAgICAgICAgICAgeDogMCwgeTogNTU1LCB3aWR0aDogMjAwLCByZWQ6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogNDU1LCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW92ZTogeyB4OiB0cnVlLCB5OiB0cnVlIH0sXHJcbiAgICAgICAgaXNUaXA6IGZhbHNlXHJcbiAgICB9XHJcbl1cclxuLy8gZXhwb3J0IGNvbnN0IExldmVscyA9IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+aEj+Wkp+WIqScsIGludHJvOiAn5Y+L6LCK6LWbJywgaWNvbjogJ0lUJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IHRydWVcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfmspnnibknLCBpbnRybzogJ+ato+i1mzEnLCBpY29uOiAnU0EnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0xNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTUwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAxNTAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCBhbmdsZTogMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiA1MCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+WTpeaWr+i+vum7juWKoCcsIGludHJvOiAn5q2j6LWbMicsIGljb246ICdDUid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0yMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAyNTAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogMzUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMjUwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+S8iuaclycsIGludHJvOiAn5q2j6LWbMycsIGljb246ICdJUid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTEwMCwgeTogMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+eqgeWwvOaWrycsIGludHJvOiAn5q2j6LWbNCcsIGljb246ICdUTid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC00MDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMjAwLCBhbmdsZTogOTAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+WNoeWhlOWwlCcsIGludHJvOiAn5q2j6LWbNScsIGljb246ICdRQSd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIGFuZ2xlOiAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICflloDpuqbpmoYnLCBpbnRybzogJ+ato+i1mzYnLCBpY29uOiAnQ00nfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI1MCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiBmYWxzZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfmvrPlpKfliKnkuponLCBpbnRybzogJ+ato+i1mzcnLCBpY29uOiAnQVUnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIGFuZ2xlOiAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5Yqg57qzJywgaW50cm86ICfmraPotZs4JywgaWNvbjogJ0dIJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDI1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfmkanmtJvlk6UnLCBpbnRybzogJ+ato+i1mzknLCBpY29uOiAnTUEnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCBhbmdsZTogMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+aXpeacrCcsIGludHJvOiAn5q2j6LWbMTAnLCBpY29uOiAnSlAnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfpn6nlm70nLCBpbnRybzogJ+ato+i1mzExJywgaWNvbjogJ0tSJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMzUwLCBjaXJjbGVSYWRpdXM6IDE4MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDIwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQyMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICflqIHlsJTlo6snLCBpbnRybzogJ+ato+i1mzEyJywgaWNvbjogJ1dFJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogNDAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAzMDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAxMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAyMDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0yMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMjAwLCBhbmdsZTogOTAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDIwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgYW5nbGU6IDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX1cclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfljoTnk5zlpJrlsJQnLCBpbnRybzogJ+ato+i1mzEzJywgaWNvbjogJ0VDJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtNzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtNjAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMTAwLCB5OiAtNjAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC01MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTUwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtNDAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjUwLCBkaXN0YW5jZTogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMjAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0xMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDEwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAyMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogMjUwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW119LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW119LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogdHJ1ZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5Yqg5ou/5aSnJywgaW50cm86ICfmraPotZsxNCcsIGljb246ICdDQSd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDQwMCwgeTogLTMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFl9LFxyXG4vLyAgICAgICAgICAgICB7eDogNTAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDUwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNTAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiAzMDAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDUwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDEwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDI1MCwgeTogNTAsIGFuZ2xlOiAzMjAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+e+juWbvScsIGludHJvOiAn5q2j6LWbMTUnLCBpY29uOiAnVVMnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0xMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI1MCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTQwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0zMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjIwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTUwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA1MDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDMwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5aKo6KW/5ZOlJywgaW50cm86ICfmraPotZsxNicsIGljb246ICdNWCd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC01MDAsIHk6IDMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtNTAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDM1MCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTUwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtNTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC01MDAsIHk6IC0zMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTUwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDMwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+azouWFsCcsIGludHJvOiAn5q2j6LWbMTcnLCBpY29uOiAnUEwnfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtODAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtNzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC00MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtNTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOltcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiB0cnVlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfloZ7lhoXliqDlsJQnLCBpbnRybzogJ+ato+i1mzE5JywgaWNvbjogJ1NOJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTgwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFl9LFxyXG4vLyAgICAgICAgICAgICB7eDogLTYwMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtNDAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfnkZ7lo6snLCBpbnRybzogJ+ato+i1mzIwJywgaWNvbjogJ0NIJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogNjAwLCB5OiAzMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IC0xNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxNTAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA0NTAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfloZ7lsJTnu7TkuponLCBpbnRybzogJ+ato+i1mzIxJywgaWNvbjogJ1JTJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTYwMCwgeTogMzAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtNjAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC02MDAsIHk6IDEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICflhYvnvZflnLDkuponLCBpbnRybzogJ+ato+i1mzIyJywgaWNvbjogJ0hSJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogNjAwLCB5OiAzMDAsIGFuZ2xlOiAyNzAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMTAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDY1MCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMTAwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTgwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfkuLnpuqYnLCBpbnRybzogJ+ato+i1mzIzJywgaWNvbjogJ0RLJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTgwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFl9LFxyXG4vLyAgICAgICAgICAgICB7eDogLTYwMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTQwMCwgeTogMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA0MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA0MDAsIHk6IDMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAtMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDEyMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn6I235YWwJywgaW50cm86ICflhrPotZsxJywgaWNvbjogJ05MJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogOTAwLCB5OiAtOTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZfSxcclxuLy8gICAgICAgICAgICAge3g6IDkwMCwgeTogLTYwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogOTAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDkwMCwgeTogMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogOTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA5MDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTIwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDkwMCwgeTogLTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDMwMCwgeTogLTMwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDM1MCwgeTogLTIwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTUwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTMwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0xMDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX1cclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogdHJ1ZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn6JGh6JCE54mZJywgaW50cm86ICflhrPotZsyJywgaWNvbjogJ1BUJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXX0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMzAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDIwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNjAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAxMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMTAwLCBkaXN0YW5jZTogMjIwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDI4MCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0yMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDQwLCBkaXN0YW5jZTogMTYwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiBmYWxzZSwgeTogZmFsc2V9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+iLseagvOWFsCcsIGludHJvOiAn5Yaz6LWbMycsIGljb246ICdFTid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IC02MDAsIHk6IC04MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC04MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMzAwLCB5OiAtODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF0sIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTQ1MCwgeTogLTgwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMTAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogNDAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMjAwLCB5OiAtODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQwMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF0sIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMzAwLCB5OiAtODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAyMDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDQwMCwgeTogLTQwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNDAwLCB5OiAtNTAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtNDAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0MDAsIGRpc3RhbmNlOiAxNjAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDMwMCwgeTogLTQwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogMjAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0xMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzNTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IHRydWV9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+ilv+ePreeJmScsIGludHJvOiAn5Yaz6LWbNCcsIGljb246ICdFUyd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTYwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC02MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC05MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC05MDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTMwMCwgeTogLTkwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDcwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMzAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTYwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMzAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDU1MCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IHRydWV9LFxyXG4vLyAgICAgICAgIGlzVGlwOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpbmZvOiB7dGVhbTogJ+W+t+WbvScsIGludHJvOiAn5Yaz6LWbNScsIGljb246ICdERSd9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0yMjAwLCBhbmdsZTogMjcwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0xODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDIwMCwgeTogLTE5MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNjAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTE4MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDYwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTAwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTEwMCwgeTogLTEwMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNjAwLCBkaXN0YW5jZTogMTQwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC01MCwgeTogLTcwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTgwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiB0cnVlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfpmL/moLnlu7cnLCBpbnRybzogJ+WGs+i1mzYnLCBpY29uOiAnQVInfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAtNjAwLCB5OiAtMjAwMCwgYW5nbGU6IDI3MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0zMDAsIHk6IC0yMDAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6W1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNjAwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXI6IHRydWV9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTIwMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDpbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0xNjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC0xODAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQ1MCwgY2lyY2xlUmFkaXVzOiAxMjAsIGlzRGlyWDogdHJ1ZX1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAzMDAsIHk6IC0xNjAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDYwMCwgeTogLTE2MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH1cclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA2MDAsIHk6IC0xMjAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogLTE0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDEyMCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDMwMCwgeTogLTEyMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQ1MCwgY2lyY2xlUmFkaXVzOiAxMjB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTgwMCwgYW5nbGU6IDAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC05MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTgwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0zMDAsIHk6IC04MDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9XHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogLTQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDAsIHk6IC02MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDQwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA0NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAyMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTAwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA2MDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDMwMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICBdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogdHJ1ZSwgeTogdHJ1ZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5q+U5Yip5pe2JywgaW50cm86ICflhrPotZs3JywgaWNvbjogJ0JFJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogLTE2MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMTIwMCwgeTogLTMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogLTExMDAsIHk6IC0zMDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC04MDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC03MDAsIHk6IC0zMDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC00MDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IC0zMDAsIHk6IC0zMDAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX1cclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDUwLCBjaXJjbGVSYWRpdXM6IDE1MCwgaXNEaXJYOiB0cnVlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfVxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAyNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBlbmRwb2ludDoge3g6IDAsIHk6IDUwMCwgd2lkdGg6IDIwMCwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiA0MDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IDIwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1MDAsIGRpc3RhbmNlOiAyMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IHRydWUsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfms5Xlm70nLCBpbnRybzogJ+WGs+i1mzgnLCBpY29uOiAnRlInfSxcclxuLy8gICAgICAgICBibHVlOiBbXHJcbi8vICAgICAgICAgICAgIHt4OiAxNjAwLCB5OiAzMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0ODAsIGNpcmNsZVJhZGl1czogMTAwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAxNjAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTYwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUxMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMDB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDE2MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxNjAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUyMCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDQ5MCwgY2lyY2xlUmFkaXVzOiAxMDB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDEyMDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxNDAwLCB5OiAtMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ5MCwgZGlzdGFuY2U6IDE0MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDEyMDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMjAwLCB5OiAtMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDE1MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUyMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMTIwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTIwMCwgeTogMTUwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUwMCwgZGlzdGFuY2U6IDE2MCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUxMCwgY2lyY2xlUmFkaXVzOiAxMDAsIGlzRGlyWDogZmFsc2V9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDgwMCwgeTogMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwMCwgeTogMzAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUxMCwgZGlzdGFuY2U6IDE0MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA0OTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA4MDAsIHk6IDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA4MDAsIHk6IDE1MCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiA1NTAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1NTAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiA4MDAsIHk6IC0zMDAsIGFuZ2xlOiAwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA4MDAsIHk6IC0xNTAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNTIwLCBkaXN0YW5jZTogMTUwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNDgwLCBjaXJjbGVSYWRpdXM6IDEwMCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogNDAwLCB5OiAtMzAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTAwLCBpc0Rpclg6IGZhbHNlfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAwLCB5OiAwLCBhbmdsZTogMCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDQ1MCwgZGlzdGFuY2U6IDE4MCwgaXNEaXJYOiBmYWxzZX0sXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMCwgeTogLTEwMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLk1PVkUsIHNwZWVkOiAzMDAsIGRpc3RhbmNlOiAxNTAsIGlzRGlyWDogdHJ1ZX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuTU9WRSwgc3BlZWQ6IDUyMCwgZGlzdGFuY2U6IDIwMCwgaXNEaXJYOiB0cnVlfSxcclxuLy8gICAgICAgICAgICAge3g6IDUwLCB5OiAzMDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5NT1ZFLCBzcGVlZDogNDgwLCBkaXN0YW5jZTogMjAwLCBpc0Rpclg6IHRydWV9LFxyXG4vLyAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIGNhbWVyYU1vdmU6IHt4OiB0cnVlLCB5OiBmYWxzZX0sXHJcbi8vICAgICAgICAgaXNUaXA6IGZhbHNlXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGluZm86IHt0ZWFtOiAn5be06KW/JywgaW50cm86ICflhrPotZs5JywgaWNvbjogJ0JSJ30sXHJcbi8vICAgICAgICAgYmx1ZTogW1xyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtNTUwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuUkVBRFksIHJlZDogW119LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTUzMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtNTEwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAtNTE1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtNDkwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC00NzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC00NzUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC00NTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogODB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTQzMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTQzNTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTQxMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMzkwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAtMzk1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMzcwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zNTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC0zNTUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0zMzAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogODB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTMxMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTMxNTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTI5MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtMjcwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAtMjc1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMjMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0yMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC0yMTUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IC0xODAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdLCBmb29kOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogODB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogLTE1MDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTE1NTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTEyMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEzMH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogMjAwLCB5OiAtOTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IC05NTAsIGFuZ2xlOiAxNDUsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgICAgICB7eDogLTIwMCwgeTogLTYwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgcmVkOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7eDogNjAwLCB5OiAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuUk9VTkQsIHNwZWVkOiA1MDAsIGNpcmNsZVJhZGl1czogMTMwfSxcclxuLy8gICAgICAgICAgICAgXSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDgwfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAyMDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLklETEUsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogLTM1MCwgYW5nbGU6IDE0NSwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5JRExFfSxcclxuLy8gICAgICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgICAgIHt4OiAtMjAwLCB5OiAtMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiA4MH0sXHJcbi8vICAgICAgICAgICAgIF0sIGZvb2Q6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiA2MDAsIHk6IDAsIGFuZ2xlOiA5MCwgc3RhdHVzOiBFTlVNX0VORU1ZX1NUQVRVUy5ST1VORCwgc3BlZWQ6IDUwMCwgY2lyY2xlUmFkaXVzOiAxMzB9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IDIwMCwgeTogMTAwLCBhbmdsZTogMTgwLCBzdGF0dXM6IEVOVU1fUExBWUVSX1NUQVRVUy5JRExFLCByZWQ6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDUwLCBhbmdsZTogMTQ1LCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLklETEV9LFxyXG4vLyAgICAgICAgICAgICBdfSxcclxuLy8gICAgICAgICAgICAge3g6IC0yMDAsIHk6IDMwMCwgYW5nbGU6IDE4MCwgc3RhdHVzOiBFTlVNX1BMQVlFUl9TVEFUVVMuSURMRSwgZm9vZDogW1xyXG4vLyAgICAgICAgICAgICAgICAge3g6IDYwMCwgeTogMCwgYW5nbGU6IDkwLCBzdGF0dXM6IEVOVU1fRU5FTVlfU1RBVFVTLlJPVU5ELCBzcGVlZDogNTAwLCBjaXJjbGVSYWRpdXM6IDEwMH0sXHJcbi8vICAgICAgICAgICAgIF19LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgZW5kcG9pbnQ6IHt4OiAwLCB5OiA1MDAsIHdpZHRoOiAyMDAsIHJlZDogW1xyXG4vLyAgICAgICAgICAgICB7eDogMCwgeTogNDAwLCBhbmdsZTogOTAsIHN0YXR1czogRU5VTV9FTkVNWV9TVEFUVVMuSURMRX0sXHJcbi8vICAgICAgICAgXX0sXHJcbi8vICAgICAgICAgY2FtZXJhTW92ZToge3g6IGZhbHNlLCB5OiB0cnVlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW5mbzoge3RlYW06ICfkuK3lm70nLCBpbnRybzogJ+WGoOWGm+i1mycsIGljb246ICdDTid9LFxyXG4vLyAgICAgICAgIGJsdWU6IFtcclxuLy8gICAgICAgICAgICAge3g6IDAsIHk6IC0zMDAsIGFuZ2xlOiAxODAsIHN0YXR1czogRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIGVuZHBvaW50OiB7eDogMCwgeTogNTAwLCB3aWR0aDogMjAwLCByZWQ6IFtdfSxcclxuLy8gICAgICAgICBjYW1lcmFNb3ZlOiB7eDogZmFsc2UsIHk6IGZhbHNlfSxcclxuLy8gICAgICAgICBpc1RpcDogZmFsc2VcclxuLy8gICAgIH1cclxuLy8gXVxyXG4iXX0=