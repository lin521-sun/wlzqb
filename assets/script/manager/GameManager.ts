// Created by carolsail 

import Ball from "../Ball";
import Endpoint from "../Endpoint";
import Enemy from "../Enemy";
import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_GAME_STATUS, ENUM_UI_TYPE } from "../Enum";
import Food from "../Food";
import { Levels } from "../Levels";
import Player from "../Player";
import { StaticInstance } from "../StaticInstance";
import { clone, getRandom } from "../Utils";
import AudioManager from "./AudioManager";
import DataManager from "./DataManager";
import EventManager from "./EventManager";
import SdkManager from "./SdkManager";

const { ccclass, property } = cc._decorator;
declare let tt: any;
declare let wx: any;
@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Node)
    stageNode: cc.Node = null
    @property([cc.Prefab])
    bluePrefab: cc.Prefab[] = []
    @property([cc.Prefab])
    redPrefab: cc.Prefab[] = []
    @property(cc.Prefab)
    ballPrefab: cc.Prefab = null
    @property(cc.Prefab)
    foodPrefab: cc.Prefab = null
    @property(cc.Prefab)
    endpointPrefab: cc.Prefab = null
    @property(cc.Label)
    levelLabel: cc.Label = null

    onLoad() {
        EventManager.instance.on(ENUM_GAME_EVENT.GAME_RESTART, this.onGameRestart, this)
        EventManager.instance.on(ENUM_GAME_EVENT.GAME_NEXT, this.onGameNext, this)
        EventManager.instance.on(ENUM_GAME_EVENT.GAME_WIN, this.onGameWin, this)
        EventManager.instance.on(ENUM_GAME_EVENT.GAME_LOSE, this.onGameLose, this)
        EventManager.instance.on(ENUM_GAME_EVENT.PLAYER_SHOOT, this.onPlayerShoot, this)
        EventManager.instance.on(ENUM_GAME_EVENT.GAME_VIBRATE, this.onVibrate, this)
    }
    /**
     * 触发振动功能。
     * 该方法首先检查是否存在名为"tt"的全局对象，如果是，则调用其vibrateLong方法进行长时间振动。
     * 如果不存在"tt"对象，但存在名为"wx"的全局对象，则调用wx的vibrateLong方法进行长时间振动。
     * 这种做法兼容了不同平台或框架中触发振动的API调用。
     */
    onVibrate() {
        if (window["tt"]) {
            tt.vibrateLong({
                success(res) {
                    console.log(res);
                },
                fail(res) {
                    console.log(`vibrateLong调用失败`);
                },
            });
        }
        else if (window["wx"]) {
            wx.vibrateLong({
                success(res) {
                    console.log(res);
                },
                fail(res) {
                    console.log(`vibrateLong调用失败`);
                },
            });
        }
    }
    /**
     * 当游戏重新启动时调用此方法。
     * 
     * 本方法负责触发数据管理器的重置操作，并初始化游戏。
     * 它是游戏重启流程中的关键步骤，确保游戏状态被正确重置，
     * 为新的游戏循环提供干净的数据环境。
     */
    onGameRestart() {
        DataManager.instance.reset()
        this.initGame()
    }
    /**
     * 处理游戏进入下一关的操作。
     * 当前关卡完成并满足进入下一关的条件后，此方法将被调用。
     * 它主要负责更新关卡进度、重置数据并初始化下一关的游戏。
     */
    onGameNext() {
        if (DataManager.instance.level < Levels.length) DataManager.instance.level++
        DataManager.instance.reset()
        this.initGame()
    }
    /**
     * 处理游戏胜利时的逻辑。
     * 停止记录游戏，检查是否完成所有关卡，更新游戏状态，播放胜利音效，并显示相应的UI。
     * 如果当前关卡是最高关卡，则更新最高关卡记录。
     */
    onGameWin() {
        StaticInstance.uiManager.stopRecord();
        let maxLevel = DataManager.instance.level + 1
        if (maxLevel > Levels.length) {
            maxLevel = Levels.length
            // 完成所有关卡
            StaticInstance.uiManager.showCompleteNotice(true)
        } else {
            StaticInstance.uiManager.showCompleteNotice(false)
        }
        DataManager.instance.status = ENUM_GAME_STATUS.WIN
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.WIN)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.WIN)

        if (maxLevel > DataManager.instance.maxLevel) {
            DataManager.instance.maxLevel = maxLevel
            // 排行榜设置
            // SdkManager.instance.setRankScore(maxLevel)
        }
    }
    /**
     * 初始化游戏的函数，负责设置游戏的初始状态，包括加载关卡数据、创建游戏场景中的对象等。
     */
    onGameLose(msg: string = '被抢断') {
        StaticInstance.uiManager.stopRecord();
        DataManager.instance.status = ENUM_GAME_STATUS.LOSE
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.LOSE)
        StaticInstance.uiManager.setLoseTitle(msg)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE)
    }

    initGame() {
        DataManager.instance.status = ENUM_GAME_STATUS.INIT
        let level = DataManager.instance.level
        let current = DataManager.instance.currentData
        if (!current) {
            // 关卡数据
            if (level > Levels.length) level = Levels.length
            current = clone(Levels[level - 1])
            if (!current['endpoint']) return
            DataManager.instance.level = level
            DataManager.instance.currentData = current
        }

        this.levelLabel.string = `${level}`
        // 清除节点信息
        this.stageNode.removeAllChildren()
        // 初始化蓝方
        for (let i = 0; i < current['blue'].length; i++) {
            const data = current['blue'][i]
            const blue: cc.Node = cc.instantiate(this.bluePrefab[0])
            blue.parent = this.stageNode
            const params = { x: data.x, y: data.y, angle: data.angle, status: data.status }
            blue.getComponent(Player).init(params)
            // 生成防守队员
            if (data['red'] && data['red'].length) {
                for (let j = 0; j < data['red'].length; j++) {
                    if (!this.redPrefab) break
                    const redData = data['red'][j]
                    const red: cc.Node = cc.instantiate(this.redPrefab[0])
                    red.parent = this.stageNode
                    const redComp = red.getComponent(Enemy)
                    redComp.setParent(data)
                    redComp.init(redData)
                }
            }
            // 生成增益道具
            if (data['food'] && data['food'].length) {
                for (let k = 0; k < data['food'].length; k++) {
                    if (!this.foodPrefab) break
                    const foodData = data['food'][k]
                    const food: cc.Node = cc.instantiate(this.foodPrefab)
                    food.parent = this.stageNode
                    const redComp = food.getComponent(Food)
                    redComp.setParent(data)
                    redComp.init(foodData)
                }
            }
        }
        // 终点球门
        const endpoint: cc.Node = cc.instantiate(this.endpointPrefab)
        endpoint.parent = this.stageNode
        endpoint.getComponent(Endpoint).init({ x: current['endpoint'].x, y: current['endpoint'].y, angle: current['endpoint'].angle })
        if (current['endpoint']['red'].length) {
            for (let j = 0; j < current['endpoint']['red'].length; j++) {
                const redData = current['endpoint']['red'][j]
                const red: cc.Node = cc.instantiate(this.redPrefab[0])
                red.parent = this.stageNode
                red.getComponent(Enemy).init(redData)
            }
        }
        // 蓝方转向
        const blueReady = DataManager.instance.getBlueReady()
        const blueNext = DataManager.instance.getBlueNext()
        if (blueNext) {
            blueReady.turnTo(blueNext.x, blueNext.y)
            blueNext.turnTo(blueReady.x, blueReady.y)
            blueNext.setCircleActive(true)
            // 摄像机移动
            EventManager.instance.emit(ENUM_GAME_EVENT.CAMERA_MOVE, { current: blueReady, next: blueNext })
        } else {
            blueReady.turnTo(endpoint.x, endpoint.y)
            // 摄像机移动
            EventManager.instance.emit(ENUM_GAME_EVENT.CAMERA_MOVE, { current: blueReady, next: endpoint })
        }
        // 初始化技能条
        StaticInstance.uiManager.setPowerBar()
        // 设置对战队名
        StaticInstance.uiManager.setTeamLabel()
        // // 设置技能点
        // StaticInstance.uiManager.setPropNum()
        // 是否有提示
        if (current['isTip']) {
            StaticInstance.uiManager.setTip(level)
            StaticInstance.uiManager.toggle(ENUM_UI_TYPE.TIP)
        } else {
            // 计时器开启
            EventManager.instance.emit(ENUM_GAME_EVENT.TIMER_START)
        }
        // 初始化完毕
        DataManager.instance.status = ENUM_GAME_STATUS.RUNING
    }

    /**
     * 玩家射门
     * 首先，它检查游戏状态是否为运行中（RUNING），如果不是，则直接返回，不执行任何操作。

        接下来，将游戏状态设置为射击状态（SHOOTING）。

        然后，播放开火声音（AUDIO_CLIP.SHOOT）。

        从传入的数据中获取射击进度（progress）。

        获取蓝色队伍的准备状态（getBlueReady）。

        获取蓝色队伍的下一个目标位置（getBlueNext），如果传入的数据中包含下一个目标位置（next），则使用该位置代替默认的下一个目标位置。

        如果蓝色队伍已准备就绪，则实例化一个足球对象（ball），将其父对象设置为舞台节点（stageNode）。

        初始化足球对象的位置（x, y）。

        根据是否有下一个目标位置，确定足球的移动终点。

        调用足球对象的移动方法（move），传入起点、终点和射击进度，使足球开始移动。
     */
    onPlayerShoot(data: any) {
        if (DataManager.instance.status != ENUM_GAME_STATUS.RUNING) return
        DataManager.instance.status = ENUM_GAME_STATUS.SHOOTING
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SHOOT)

        const progress = data.progress
        const start = DataManager.instance.getBlueReady()
        let next = DataManager.instance.getBlueNext()
        if (data?.next) {
            next = data.next
        }
        if (start) {
            // start.shoot()
            // 移动的足球
            const ball: cc.Node = cc.instantiate(this.ballPrefab)
            ball.parent = this.stageNode
            let end = null
            if (next) {
                end = next
            } else {
                end = DataManager.instance.getEndpoint()
            }
            const ballCom = ball.getComponent(Ball)
            ballCom.init({ x: start.x, y: start.y })
            ballCom.move(start, end, progress)
        }
    }

    protected onDestroy(): void {
        EventManager.instance.off(ENUM_GAME_EVENT.GAME_RESTART, this.onGameRestart)
        EventManager.instance.off(ENUM_GAME_EVENT.GAME_NEXT, this.onGameNext)
        EventManager.instance.off(ENUM_GAME_EVENT.GAME_WIN, this.onGameWin)
        EventManager.instance.off(ENUM_GAME_EVENT.GAME_LOSE, this.onGameLose)
        EventManager.instance.off(ENUM_GAME_EVENT.PLAYER_SHOOT, this.onPlayerShoot)
    }
}
