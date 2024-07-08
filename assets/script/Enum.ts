// Created by carolsail

export enum ENUM_PLAYER_STATUS {
    IDLE, // 待机
    READY, // 持球
    SHOOTING // 踢球
}

export enum ENUM_ENEMY_STATUS {
    IDLE, // 待机
    MOVE, // 直线移动
    ROUND, // 圆周运动
    DIE // 死亡
}

// 游戏状态
export enum ENUM_GAME_STATUS {
    INIT,
    RUNING,
    SHOOTING,
    LOSE,
    WIN
}

// 碰撞体
export enum ENUM_COLLIDER_TAG {
    ENEMY = 0,
    BALL = 1,
    FOOD = 2
}

// 事件类型
export enum ENUM_GAME_EVENT {
    GAME_RESTART = 'GAME_RESTART',
    GAME_NEXT = 'GAME_NEXT',
    GAME_LOSE = 'GAME_LOSE',
    GAME_WIN = 'GAME_WIN',
    PLAYER_SHOOT = 'PLAYER_SHOOT',
    CAMERA_MOVE = 'CAMERA_MOVE',
    TIMER_START = 'TIMER_START',
    TIMER_STOP = 'TIMER_STOP',
    RENDOR_HOME_BTN = 'RENDOR_HOME_BTN',
    GAME_VIBRATE = 'GAME_VIBRATE',
}

// 音效
export enum ENUM_AUDIO_CLIP {
    BGM = 'bgm',
    CLICK = 'click',
    LOSE = 'lose',
    WIN = 'win',
    SHOOT = 'shoot',
    CATCH = 'catch',
    DIE = 'die',
    LAUGH = 'laugh',
    SLOWDOWN = 'slowdown',
    GOOD = 'good',
    GREAT = 'great',
    EXCELLENT = 'excellent',
    AMAZING = 'amazing',
    UNBELIEVABLE = 'unbelievable',
    BOO = 'boo',
    SKILL = 'skill',
    TIMER = 'timer',
    SPELL = 'spell',
    COLLECT = 'collect'
}

export enum ENUM_RESOURCE_TYPE {
    AUDIO = 'audio',
    FLAG = 'flag'
}

export enum ENUM_UI_TYPE {
    MENU,
    GAME,
    LEVEL,
    SETTING,
    LOSE,
    WIN,
    LOADING,
    RANK,
    TIP,
    NOTICE,
    SIDEBARLAYER
}