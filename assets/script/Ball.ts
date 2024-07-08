// Created by carolsail 

import Endpoint from "./Endpoint";
import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_GAME_STATUS, ENUM_PLAYER_STATUS, ENUM_UI_TYPE } from "./Enum";
import AudioManager from "./manager/AudioManager";
import DataManager from "./manager/DataManager";
import EventManager from "./manager/EventManager";
import Player from "./Player";
import { StaticInstance } from "./StaticInstance";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Ball extends cc.Component {

    x: number
    y: number
    speed: number = 3000
    speedMin: number = 300

    init(data: any) {
        Object.assign(this, data)
        this.rendor()
    }

    rendor() {
        this.node.setPosition(this.x, this.y)
    }
    /**
     * 控制足球移动的函数
     * @param start 发起移动的球员
     * @param end 移动的终点，可能是另一名球员或终点
     * @param progress 移动的进度，用于计算移动速度和触发不同阶段的事件
     */
    move(start: Player, end: Player | Endpoint, progress: number) {
        // 踢球状态
        start.setStatus(ENUM_PLAYER_STATUS.SHOOTING)
        start.playEffect()
        this.node.getChildByName('Shield').active = DataManager.instance.powerCount >= DataManager.instance.powerCountTarget
        const spos = start.node.getPosition()
        const epos = end.node.getPosition()
        const distance = spos.sub(epos).mag()

        let moveSpeed = this.speed * progress
        if (progress >= 0.5 && progress <= 0.7) {
            moveSpeed = this.speed * 0.5
        } else if (progress < 0.5 && progress >= 0) {
            // 满能量
            if (DataManager.instance.powerCount == DataManager.instance.powerCountTarget) {
                moveSpeed = this.speed
            } else {
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.BOO)
                moveSpeed = this.speedMin
            }
        }
        const moveTime = distance / moveSpeed

        cc.tween(this.node).to(moveTime, { position: cc.v3(epos.x, epos.y, 0) }).call(() => {
            // 接球音效
            AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CATCH)
            // 移动足球销毁
            this.node.destroy()
            // 回待机状态
            start.setStatus(ENUM_PLAYER_STATUS.IDLE)
            if (end instanceof Player) {
                // 进持球状态
                end.setStatus(ENUM_PLAYER_STATUS.READY)
                end.setCircleActive(false)

                let x = 0, y = 0
                const next = DataManager.instance.getBlueNext()
                if (next) {
                    x = next.x
                    y = next.y
                    next.turnTo(end.x, end.y)
                    next.setCircleActive(true)
                    // 移动相机
                    EventManager.instance.emit(ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: next })
                } else {
                    const endpoint = DataManager.instance.getEndpoint()
                    x = endpoint.x
                    y = endpoint.y
                    // 移动相机
                    EventManager.instance.emit(ENUM_GAME_EVENT.CAMERA_MOVE, { current: end.node, next: endpoint })
                }
                end.turnTo(x, y)
                // 接球效果
                if (progress > 0.7 && progress <= 1) end.playEffect()

            } else {
                // 球门显示足球
                end.setBallActive(true)
            }

            // 判断能量槽情况，游戏状态切换
            if (DataManager.instance.status === ENUM_GAME_STATUS.SHOOTING) {
                DataManager.instance.status = ENUM_GAME_STATUS.RUNING
                // 技能饮品
                if (DataManager.instance.powerEffectLoop <= 0) {
                    // 增益食物
                    if (DataManager.instance.foodEffectLoop <= 0) {
                        DataManager.instance.powerCount += 1
                        if (DataManager.instance.powerCount > DataManager.instance.powerCountTarget) {
                            DataManager.instance.powerCount = 0
                        }
                        StaticInstance.uiManager.setPowerBar()
                    } else {
                        DataManager.instance.foodEffectLoop -= 1
                    }
                } else {
                    DataManager.instance.powerEffectLoop -= 1
                }

                if (DataManager.instance.powerCount == DataManager.instance.powerCountTarget) {
                    StaticInstance.uiManager.setNoticeLabel('必杀技')
                    StaticInstance.uiManager.toggle(ENUM_UI_TYPE.NOTICE)
                    AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SKILL)
                }
            }

            // 音效
            if (progress > 0.7 && progress <= 0.8) {
                StaticInstance.uiManager.setNoticeLabel('好球')
                StaticInstance.uiManager.toggle(ENUM_UI_TYPE.NOTICE)
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.GOOD)
            } else if (progress > 0.8 && progress <= 0.85) {
                StaticInstance.uiManager.setNoticeLabel('漂亮')
                StaticInstance.uiManager.toggle(ENUM_UI_TYPE.NOTICE)
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.GREAT)
            } else if (progress > 0.85 && progress <= 0.9) {
                StaticInstance.uiManager.setNoticeLabel('哇~')
                StaticInstance.uiManager.toggle(ENUM_UI_TYPE.NOTICE)
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.EXCELLENT)
            } else if (progress > 0.9 && progress <= 0.95) {
                StaticInstance.uiManager.setNoticeLabel('牛牛牛')
                StaticInstance.uiManager.toggle(ENUM_UI_TYPE.NOTICE)
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.AMAZING)
            } else if (progress > 0.95 && progress <= 1) {
                StaticInstance.uiManager.setNoticeLabel('世界波')
                StaticInstance.uiManager.toggle(ENUM_UI_TYPE.NOTICE)
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.UNBELIEVABLE)
            }

        }).start()
    }
}
