// Created by carolsail

import { ENUM_GAME_STATUS, ENUM_PLAYER_STATUS } from "../Enum"
import Endpoint from "../Endpoint"
import Enemy from "../Enemy"
import Player from "../Player"
import Food from "../Food"

const STORAGE_KEY = 'FOOTBALL_STORAGE_KEY'
declare let tt: any;
export interface ICurrentLevel {
    level: number,
    score: number,
    collected: number
}

export default class DataManager {

    private static _instance: any = null

    static getInstance<T>(): T {
        if (this._instance === null) {
            this._instance = new this()
        }

        return this._instance
    }

    static get instance() {
        return this.getInstance<DataManager>()
    }

    _maxLevel: number = 1
    _level: number = 1
    _audioMusic: boolean = true
    _audioSound: boolean = true
    _vibrate: boolean = true
    _SideBarReward: boolean = false
    // 技能点
    skillNums: number[] = [0, 0, 0, 0, 0]
    status: ENUM_GAME_STATUS = ENUM_GAME_STATUS.INIT
    blues: Player[] = []
    reds: Enemy[] = []
    foods: Food[] = []
    currentData: ICurrentLevel = null
    endpoint: Endpoint = null
    // 技能累计数
    powerCount: number = 0
    // 达成条件
    powerCountTarget: number = 4
    // 技能饮品效果
    powerEffectLoop: number = 0
    // 增益牛扒效果
    foodEffectLoop: number = 0
    // 游戏每局时间
    timer: number = 60
    // 加时
    extraTime: number = 30

    // 加载进度
    loadingRate: number = 0

    get level() {
        return this._level
    }

    set level(data: number) {
        this._level = data
        this.save()
    }

    get maxLevel() {
        return this._maxLevel
    }

    set maxLevel(data: number) {
        this._maxLevel = data
        this.save()
    }

    get audioMusic() {
        return this._audioMusic
    }

    set audioMusic(data: boolean) {
        this._audioMusic = data
        this.save()
    }

    get audioSound() {
        return this._audioSound
    }

    set audioSound(data: boolean) {
        this._audioSound = data
        this.save()
    }

    get vibrate() {
        return this._vibrate
    }

    set vibrate(data: boolean) {
        this._vibrate = data
        this.save()
    }

    get SideBarReward() {
        return this._SideBarReward
    }

    set SideBarReward(data: boolean) {
        this._SideBarReward = data
        this.save()
    }
    cutSkillNums(k: number) {
        this.skillNums[k]--
        this.save()
    }
    /**
     * 重置游戏状态。
     * 
     * 该方法将游戏状态重置为初始值，以便开始新的游戏或重新初始化当前游戏。
     * 它清除了玩家角色、食物等游戏元素，并重置了相关计数器和定时器。
     */
    reset() {
        this.status = ENUM_GAME_STATUS.INIT
        this.blues = []
        this.reds = []
        this.foods = []
        this.currentData = null
        this.endpoint = null
        this.powerCount = 0
        this.timer = 60
        this.powerEffectLoop = 0
    }
    /**
     * 保存游戏进度和设置。
     * 
     * 此函数负责将当前游戏的级别、最大级别、音频设置、振动设置、技能数量和侧边栏奖励等信息存储到本地存储中。
     * 它首先检查是否存在名为"tt"的全局变量，以确定使用哪种存储方法（本地存储或同步存储）。
     * 如果"tt"不存在，则使用cc.sys.localStorage来保存数据；如果"tt"存在，则使用tt.setStorageSync来保存数据。
     * 这种设计允许游戏在不同环境（例如web和移动设备）下灵活地保存玩家的进度和设置。
     */
    save() {
        if (!window["tt"]) {
            cc.sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
                level: this.level,
                maxLevel: this.maxLevel,
                audioMusic: this.audioMusic,
                audioSound: this.audioSound,
                vibrate: this.vibrate,
                skillNums: this.skillNums,
                SideBarReward: this.SideBarReward
            }))
        }
        else {
            tt.setStorageSync(STORAGE_KEY, JSON.stringify({
                level: this.level,
                maxLevel: this.maxLevel,
                audioMusic: this.audioMusic,
                audioSound: this.audioSound,
                vibrate: this.vibrate,
                skillNums: this.skillNums,
                SideBarReward: this.SideBarReward
            }))
        }

    }
    /**
     * 从本地存储中恢复游戏设置和进度。
     * 此函数负责从本地存储中读取游戏的配置信息，如关卡进度、音效设置等，并更新实例的相应属性。
     * 它首先检查是否存在特定于应用程序的存储机制，如果不存在，则使用通用的Web存储机制。
     * 在读取数据后，尝试解析JSON字符串为对象，并根据解析结果更新游戏状态。
     * 如果解析失败，将重置所有设置和进度到初始状态。
     */
    restore() {
        let _data = null
        if (!window["tt"]) {
            _data = cc.sys.localStorage.getItem(STORAGE_KEY) as any
        }
        else {
            _data = tt.getStorageSync(STORAGE_KEY) as any
        }
        try {
            const data = JSON.parse(_data)
            this.level = data?.level || 1
            this.maxLevel = data?.maxLevel || 1
            this.audioMusic = data?.audioMusic === false ? false : true
            this.audioSound = data?.audioSound === false ? false : true
            this.vibrate = data?.vibrate === false ? false : true
            this.skillNums = data?.skillNums || [0, 0, 0, 0, 0]
            this.SideBarReward = data === null ? this.SideBarReward : data.SideBarReward;
        } catch {
            this.level = 1
            this.maxLevel = 1
            this.audioMusic = true
            this.audioSound = true
            this.vibrate = true
            // this.skillNums = [0, 0, 0, 0, 0]
            this.SideBarReward = false;
            this.reset()
        }
    }

    // 处于准备状态的蓝方队员（脚本）
    getBlueReady() {
        const ready = DataManager.instance.blues.find(item => item.status === ENUM_PLAYER_STATUS.READY)
        return ready
    }
    // 就近待传球的蓝方队员（脚本）
    getBlueNext() {
        const readyIndex = DataManager.instance.blues.findIndex(item => item.status === ENUM_PLAYER_STATUS.READY)
        if (readyIndex >= 0) {
            const next = DataManager.instance.blues[readyIndex + 1]
            return next
        }
        return null
    }
    // 获取终点（脚本）
    getEndpoint() {
        return DataManager.instance.endpoint
    }
    // 根据点击屏幕返回指定红方成员（节点）
    getCardEnemy(x: number, y: number) {
        let target: cc.Node = null
        DataManager.instance.reds.forEach(item => {
            const red: cc.Node = item.node
            // 转为世界坐标
            const world = red.parent.convertToWorldSpaceAR(red.position)
            const camera = cc.find('Canvas/Main/Camera').position
            const offsetX = Math.abs(world.x - (camera.x + x))
            const offsetY = Math.abs(world.y - (camera.y + y))
            if (offsetX <= red.width / 2 && offsetY <= red.height / 2) {
                target = red
            }
        })
        return target
    }
    // 根据点击屏幕返回指定的蓝方成员（节点）
    getPassPlayer(x: number, y: number) {
        let target: cc.Node = null
        DataManager.instance.blues.forEach(item => {
            const blue: cc.Node = item.node
            // 转为世界坐标
            const world = blue.parent.convertToWorldSpaceAR(blue.position)
            const camera = cc.find('Canvas/Main/Camera').position
            const offsetX = Math.abs(world.x - (camera.x + x))
            const offsetY = Math.abs(world.y - (camera.y + y))
            if (offsetX <= blue.width / 2 && offsetY <= blue.height / 2) {
                if (blue.getComponent(Player).status != ENUM_PLAYER_STATUS.READY) target = blue
            }
        })
        return target
    }
}
