// Created by carolsail

import Enemy from "../Enemy";
import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_GAME_STATUS, ENUM_PLAYER_STATUS, ENUM_UI_TYPE } from "../Enum";
import AudioManager from "../manager/AudioManager";
import DataManager from "../manager/DataManager";
import EventManager from "../manager/EventManager";
import SdkManager from "../manager/SdkManager";
import Player from "../Player";
import { StaticInstance } from "../StaticInstance";
import { getRandom } from "../Utils";
import BaseLayer from "./Baselayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends BaseLayer {

    @property(cc.ProgressBar)
    forceBar: cc.ProgressBar = null
    @property(cc.ProgressBar)
    powerBar: cc.ProgressBar = null
    @property(cc.Label)
    timerLabel: cc.Label = null
    @property(cc.Node)
    propsNode: cc.Node = null
    @property(cc.Node)
    tipsNode: cc.Node = null
    @property(cc.Label)
    teamLabel: cc.Label = null
    // 点按状态
    holdFlag: boolean = false
    progressSpeed: number = 3
    //技能
    isPassBall: boolean = false
    isRedCard: boolean = false
    isYellowCard: boolean = false
    isDrink: boolean = false
    isExtraTime: boolean = false
    startRecordNode: cc.Node = null;
    stopRecordNode: cc.Node = null;
    @property(cc.Sprite)
    passBall: cc.Sprite = null
    @property(cc.Sprite)
    redCard: cc.Sprite = null
    @property(cc.Sprite)
    yellowCard: cc.Sprite = null
    @property(cc.Sprite)
    drink: cc.Sprite = null
    @property(cc.Sprite)
    extraTime: cc.Sprite = null
    passBallOnce: boolean = false
    redCardOnce: boolean = false
    yellowCardOnce: boolean = false
    drinkOnce: boolean = false
    extraTimeOnce: boolean = false
    passBallCount: number = 0
    redCardCount: number = 0
    yellowCardCount: number = 0
    drinkCount: number = 0
    extraTimeCount: number = 0

    protected onLoad(): void {
        this.startRecordNode = this.node.getChildByName('Panel').getChildByName('camrea_btn');
        this.startRecordNode.on('click', () => {
            this.startRecord()
        }, this)
        this.stopRecordNode = this.node.getChildByName('Panel').getChildByName('camrea_sotp_btn')
        this.stopRecordNode.on('click', () => {
            this.endRecord();
        }, this)
        if (!window["tt"]) {
            this.startRecordNode.active = false;
            this.stopRecordNode.active = false;
        }
    }

    protected onEnable(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchstart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchend, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchend, this);
        EventManager.instance.on(ENUM_GAME_EVENT.TIMER_START, this.onTimerStart, this)
        EventManager.instance.on(ENUM_GAME_EVENT.TIMER_STOP, this.onTimerStop, this)
        EventManager.instance.emit(ENUM_GAME_EVENT.GAME_RESTART)
        // 取消技能选择
        if (this.isPassBall) this.isPassBall = false
        if (this.isRedCard) this.isRedCard = false
        if (this.isYellowCard) this.isYellowCard = false
        if (this.isDrink) this.isDrink = false
        if (this.isExtraTime) this.isExtraTime = false
        this.setTipsNode(false)
    }

    onSettingClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING)
        EventManager.instance.emit(ENUM_GAME_EVENT.RENDOR_HOME_BTN, true)
    }

    // 设置技能点ui
    setPropNum() {
        this.propsNode.children.forEach((prop, index) => {
            const nums = prop.getChildByName('Nums')
            const video = prop.getChildByName('video')
            if (DataManager.instance.skillNums[index] > 0) {
                nums.active = true;
                video.active = false;
                let num = DataManager.instance.skillNums[index];
                if (index == 1) {
                    num = num + this.redCardCount;
                }
                nums.getChildByName('Label').getComponent(cc.Label).string = `${num}`
            }
            else if ((index == 0) && (this.passBallCount > 0 || this.passBallOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = `${this.passBallCount}`
            }
            else if ((index == 1) && (this.redCardCount > 0 || this.redCardOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = `${this.redCardCount}`
            }
            else if ((index == 2) && (this.yellowCardCount > 0 || this.yellowCardOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = `${this.yellowCardCount}`
            }
            else if ((index == 3) && (this.drinkCount > 0 || this.drinkOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = `${this.drinkCount}`
            }
            else if ((index == 4) && (this.extraTimeCount > 0 || this.extraTimeOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = `${this.extraTimeCount}`
            }
            else {
                nums.active = false;
                video.active = true;
            }
        })
    }

    setTeamLabel() {
        this.teamLabel.string = DataManager.instance.currentData['info'].team
    }

    setPowerBar() {
        this.powerBar.progress = DataManager.instance.powerCount / DataManager.instance.powerCountTarget
    }

    setTipsNode(status: boolean, styleIndex: number = 0) {
        this.tipsNode.getChildByName('Style').children.forEach((item, index) => {
            item.active = styleIndex === index ? true : false
        })
        this.tipsNode.active = status
    }

    // 选队友传球
    onPropPassBall() {
        if (DataManager.instance.status != ENUM_GAME_STATUS.RUNING) return
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        if (DataManager.instance.skillNums[0] <= 0) {
            if (this.passBallCount > 0) {
                // 脚下框动画
                DataManager.instance.blues.forEach(blue => {
                    if (blue.status != ENUM_PLAYER_STATUS.READY) blue.setCircleActive(true)
                })
                this.setTipsNode(true, 0)
                this.isPassBall = true
                this.isRedCard = false
                this.isYellowCard = false
                this.isDrink = false
                this.isExtraTime = false
                if (this.passBallOnce) {
                    this.grey(this.passBall);
                }
            }
            else if (!this.passBallOnce) {
                SdkManager.instance.videoAdShow(() => {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[0] += 1
                    this.passBallCount += 1;
                    this.setPropNum()
                    this.passBallOnce = true;
                }, () => {
                    console.log('激励视频有误')
                })
            }
        }
        else {
            // 脚下框动画
            DataManager.instance.blues.forEach(blue => {
                if (blue.status != ENUM_PLAYER_STATUS.READY) blue.setCircleActive(true)
            })
            this.setTipsNode(true, 0)
            this.isPassBall = true
            this.isRedCard = false
            this.isYellowCard = false
            this.isDrink = false
            this.isExtraTime = false
            if (this.passBallOnce) {
                this.grey(this.passBall);
            }
        }
    }

    // 红牌罚下一名防守员
    onPropRedCard() {
        if (DataManager.instance.status != ENUM_GAME_STATUS.RUNING) return
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        if (DataManager.instance.skillNums[1] <= 0) {
            if (this.redCardCount > 0) {
                this.setTipsNode(true, 1)
                this.isPassBall = false
                this.isRedCard = true
                this.isYellowCard = false
                this.isDrink = false
                this.isExtraTime = false
                // 先减速运动待选择
                DataManager.instance.reds.forEach(red => {
                    red.setSpeed(red.speed / 10)
                    red.setCircleActive(true)
                })
                if (this.redCardOnce) {
                    this.grey(this.redCard);
                }
            }
            else if (!this.redCardOnce) {
                SdkManager.instance.videoAdShow(() => {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[1] += 1
                    this.redCardCount += 1;
                    this.setPropNum()
                    this.redCardOnce = true;
                }, () => {
                    console.log('激励视频有误')
                })
            }
        }
        else {
            this.setTipsNode(true, 1)
            this.isPassBall = false
            this.isRedCard = true
            this.isYellowCard = false
            this.isDrink = false
            this.isExtraTime = false
            // 先减速运动待选择
            DataManager.instance.reds.forEach(red => {
                red.setSpeed(red.speed / 10)
                red.setCircleActive(true)
            })
            if (this.redCardOnce) {
                this.grey(this.redCard);
            }
        }
    }

    // 黄牌降低一名防守员速度
    onPropYellowCard() {
        if (DataManager.instance.status != ENUM_GAME_STATUS.RUNING) return
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        if (DataManager.instance.skillNums[2] <= 0) {
            if (this.yellowCardCount > 0) {
                this.setTipsNode(true, 2)
                this.isPassBall = false
                this.isRedCard = false
                this.isYellowCard = true
                this.isDrink = false
                this.isExtraTime = false
                // 先降速运动
                DataManager.instance.reds.forEach(red => {
                    red.setSpeed(red.speed / 10)
                    red.setCircleActive(true)
                })
                if (this.yellowCardOnce) {
                    this.grey(this.yellowCard);
                }
            }
            else if (!this.yellowCardOnce) {
                SdkManager.instance.videoAdShow(() => {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[2] += 1
                    this.yellowCardCount += 1;
                    this.setPropNum()
                    this.yellowCardOnce = true;
                }, () => {
                    console.log('激励视频有误')
                })
            }
        }
        else {
            this.setTipsNode(true, 2)
            this.isPassBall = false
            this.isRedCard = false
            this.isYellowCard = true
            this.isDrink = false
            this.isExtraTime = false
            // 先降速运动
            DataManager.instance.reds.forEach(red => {
                red.setSpeed(red.speed / 10)
                red.setCircleActive(true)
            })
            if (this.yellowCardOnce) {
                this.grey(this.yellowCard);
            }
        }
    }

    // 饮品让能量持续3回合
    onPropDrink() {
        if (DataManager.instance.status != ENUM_GAME_STATUS.RUNING) return
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        if (DataManager.instance.skillNums[3] <= 0) {
            if (this.drinkCount > 0) {
                this.setTipsNode(true, 3)
                this.isPassBall = false
                this.isRedCard = false
                this.isYellowCard = false
                this.isDrink = true
                this.isExtraTime = false
                if (this.drinkOnce) {
                    this.grey(this.drink);
                }
            }
            else if (!this.drinkOnce) {
                SdkManager.instance.videoAdShow(() => {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[3] += 1
                    this.drinkCount += 1;
                    this.setPropNum()
                    this.drinkOnce = true;
                }, () => {
                    console.log('激励视频有误')
                })
            }
        }
        else {
            this.setTipsNode(true, 3)
            this.isPassBall = false
            this.isRedCard = false
            this.isYellowCard = false
            this.isDrink = true
            this.isExtraTime = false
            if (this.drinkOnce) {
                this.grey(this.drink);
            }
        }
    }

    // 加时让时间增加30s
    onPropExtraTime() {
        if (DataManager.instance.status != ENUM_GAME_STATUS.RUNING) return
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        if (DataManager.instance.skillNums[4] <= 0) {
            if (this.extraTimeCount > 0) {
                this.setTipsNode(true, 4)
                this.isPassBall = false
                this.isRedCard = false
                this.isYellowCard = false
                this.isDrink = false
                this.isExtraTime = true
                if (this.extraTimeOnce) {
                    this.grey(this.extraTime);
                }
            }
            else if (!this.extraTimeOnce) {
                SdkManager.instance.videoAdShow(() => {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[4] += 1
                    this.extraTimeCount += 1;
                    this.setPropNum()
                    this.extraTimeOnce = true;
                }, () => {
                    console.log('激励视频有误')
                })
            }
        }
        else {
            this.setTipsNode(true, 4)
            this.isPassBall = false
            this.isRedCard = false
            this.isYellowCard = false
            this.isDrink = false
            this.isExtraTime = true
            if (this.extraTimeOnce) {
                this.grey(this.extraTime);
            }
        }
    }

    onPropCancel() {
        if (this.isPassBall) {
            this.isPassBall = false
            // 取消框
            DataManager.instance.blues.forEach(blue => {
                blue.setCircleActive(false)
            })
            const nextBlue = DataManager.instance.getBlueNext()
            if (nextBlue) nextBlue.setCircleActive(true)
        }
        if (this.isRedCard) {
            this.isRedCard = false
            // 恢复速度
            DataManager.instance.reds.forEach(red => {
                red.setSpeed(red.speed * 10)
                red.setCircleActive(false)
            })
        }
        if (this.isYellowCard) {
            this.isYellowCard = false
            // 恢复速度
            DataManager.instance.reds.forEach(red => {
                red.setSpeed(red.speed * 10)
                red.setCircleActive(false)
            })
        }
        if (this.isDrink) this.isDrink = false
        if (this.isExtraTime) this.isExtraTime = false
        this.setTipsNode(false)
    }

    onTimerStart(isExtraTimeOnce = false) {
        if (window["tt"]) {
            this.startRecord();
        }
        this.passBallOnce = false;
        this.redCardOnce = false;
        this.yellowCardOnce = false;
        this.drinkOnce = false;
        if (!isExtraTimeOnce) {
            this.extraTimeOnce = false;
        }
        this.normal(this.passBall);
        this.normal(this.redCard);
        this.normal(this.yellowCard);
        this.normal(this.drink);
        this.normal(this.extraTime);
        this.passBallCount = 0;
        this.redCardCount = 1;
        this.yellowCardCount = 0;
        this.drinkCount = 0;
        this.extraTimeCount = 0;
        this.setPropNum();
        this.timerLabel.string = `${DataManager.instance.timer}`
        this.unscheduleAllCallbacks()
        this.schedule(() => {
            if (DataManager.instance.status == ENUM_GAME_STATUS.WIN
                || DataManager.instance.status == ENUM_GAME_STATUS.LOSE) {
                this.unscheduleAllCallbacks()
            }
            if (DataManager.instance.timer <= 1) {
                this.unscheduleAllCallbacks()

                // 取消技能选择
                if (this.isPassBall) this.isPassBall = false
                if (this.isRedCard) this.isRedCard = false
                if (this.isYellowCard) this.isYellowCard = false
                if (this.isDrink) this.isDrink = false
                if (this.isExtraTime) this.isExtraTime = false
                this.setTipsNode(false)

                if (DataManager.instance.status != ENUM_GAME_STATUS.WIN) {
                    EventManager.instance.emit(ENUM_GAME_EVENT.GAME_LOSE, '时间到')
                }
            }
            if (DataManager.instance.timer == 5) {
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SPELL)
            }
            DataManager.instance.timer--
            this.timerLabel.string = `${DataManager.instance.timer}`
        }, 1)
    }

    onTimerStop() {
        this.timerLabel.string = ''
        this.unscheduleAllCallbacks()

    }

    onTouchstart() {
        // this.progressSpeed = getRandom(2, 5)
        if (DataManager.instance.status != ENUM_GAME_STATUS.RUNING && DataManager.instance.status == ENUM_GAME_STATUS.SHOOTING) return
        if (this.isPassBall || this.isRedCard || this.isYellowCard || this.isDrink || this.isExtraTime) return
        this.holdFlag = true
    }

    onTouchend(e: cc.Event.EventTouch) {
        const location = e.getLocation()
        // 传球
        if (this.isPassBall) {
            const target = DataManager.instance.getPassPlayer(location.x, location.y)
            if (target) {
                // 取消技能
                this.isPassBall = false
                this.setTipsNode(false)
                // 取消框
                DataManager.instance.blues.forEach(blue => {
                    blue.setCircleActive(false)
                })
                // 扣技能点
                if (DataManager.instance.skillNums[0] > 0) {
                    DataManager.instance.cutSkillNums(0)
                }
                else {
                    this.passBallCount--;
                }
                this.setPropNum()
                // 先转向
                const ready = DataManager.instance.getBlueReady()
                ready.turnTo(target.x, target.y)
                // 传球
                EventManager.instance.emit(ENUM_GAME_EVENT.PLAYER_SHOOT, { progress: 1, next: target.getComponent(Player) })
            }
            return
        }
        // 红牌
        if (this.isRedCard) {
            const target = DataManager.instance.getCardEnemy(location.x, location.y)
            if (target) {
                // 取消技能
                this.isRedCard = false
                this.setTipsNode(false)
                // 恢复速度
                DataManager.instance.reds.forEach(red => {
                    if (target) {
                        if (target.uuid != red.node.uuid) red.setSpeed(red.speed * 10)
                    } else {
                        red.setSpeed(red.speed * 10)
                    }
                    red.setCircleActive(false)
                })
                // 扣技能点
                if (DataManager.instance.skillNums[1] > 0) {
                    DataManager.instance.cutSkillNums(1)
                }
                else {
                    this.redCardCount--;
                }
                this.setPropNum()
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.LAUGH)
                target.getComponent(Enemy).setSpeed(0)
                target.getComponent(cc.Animation).play()
                const toPos = this.timerLabel.node.getPosition()
                cc.tween(target).to(0.2, { position: cc.v3(toPos.x, toPos.y, 0) }).call(() => {
                    target.active = false
                }).start()
            }
            return
        }
        // 黄牌
        if (this.isYellowCard) {
            const target = DataManager.instance.getCardEnemy(location.x, location.y)
            if (target) {
                // 取消技能
                this.isYellowCard = false
                this.setTipsNode(false)
                // 恢复速度
                DataManager.instance.reds.forEach(red => {
                    if (target) {
                        if (target.uuid != red.node.uuid) red.setSpeed(red.speed * 10)
                    } else {
                        red.setSpeed(red.speed * 10)
                    }
                    red.setCircleActive(false)
                })
                // 扣技能点
                if (DataManager.instance.skillNums[2] > 0) {
                    DataManager.instance.cutSkillNums(2)
                }
                else {
                    this.yellowCardCount--;
                }
                this.setPropNum()
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SLOWDOWN)
            }
            return
        }
        // 饮品
        if (this.isDrink) {
            this.isDrink = false
            this.setTipsNode(false)
            // 扣技能点
            if (DataManager.instance.skillNums[3] > 0) {
                DataManager.instance.cutSkillNums(3)
            }
            else {
                this.drinkCount--;
            }
            this.setPropNum()
            DataManager.instance.powerEffectLoop = 2
            DataManager.instance.powerCount = DataManager.instance.powerCountTarget
            this.setPowerBar()
            AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SKILL)
            return
        }
        // 加时
        if (this.isExtraTime) {
            this.isExtraTime = false
            this.setTipsNode(false)
            // 扣技能点
            if (DataManager.instance.skillNums[4] > 0) {
                DataManager.instance.cutSkillNums(4)
            }
            else {
                this.extraTimeCount--;
            }
            this.setPropNum()
            AudioManager.instance.playSound(ENUM_AUDIO_CLIP.TIMER)
            DataManager.instance.timer += DataManager.instance.extraTime
            this.onTimerStart(true)
            return
        }
        this.holdFlag = false
        EventManager.instance.emit(ENUM_GAME_EVENT.PLAYER_SHOOT, { progress: this.forceBar.progress })
    }

    protected update(dt: number): void {
        if (this.holdFlag && this.forceBar) {
            this.forceBar.progress += this.progressSpeed * dt / 2
            if (this.forceBar.progress > 1) this.forceBar.progress = 0
        } else {
            if (DataManager.instance.status == ENUM_GAME_STATUS.RUNING) {
                this.forceBar.progress = 0
            }
        }
    }

    protected onDisable(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchstart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchend, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchend, this);
        EventManager.instance.off(ENUM_GAME_EVENT.TIMER_START, this.onTimerStart)
    }

    startRecord() {
        this.startRecordNode.active = false;
        this.stopRecordNode.active = true;
        SdkManager.instance.recordingVideoStart()
    }
    endRecord() {
        if (window["tt"]) {
            this.startRecordNode.active = true;
            this.stopRecordNode.active = false;
            SdkManager.instance.recordingVideoEnd()
        }
    }
    private normal(icon: cc.Sprite): void {
        icon.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon));
        // icon.node.getChildByName("icon").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon.node.getChildByName("icon").getComponent(cc.Sprite)));
        // icon.node.getChildByName("video").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon.node.getChildByName("video").getComponent(cc.Sprite)));
    }
    private grey(icon: cc.Sprite): void {
        icon.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon));
        // icon.node.getChildByName("icon").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon.node.getChildByName("icon").getComponent(cc.Sprite)));
        // icon.node.getChildByName("video").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon.node.getChildByName("video").getComponent(cc.Sprite)));
    }
}
