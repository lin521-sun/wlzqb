"use strict";
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