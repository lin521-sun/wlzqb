// Created by carolsail 

import Ball from "./Ball";
import { ENUM_AUDIO_CLIP, ENUM_COLLIDER_TAG, ENUM_ENEMY_STATUS, ENUM_GAME_EVENT } from "./Enum";
import AudioManager from "./manager/AudioManager";
import DataManager from "./manager/DataManager";
import EventManager from "./manager/EventManager";
import Player from "./Player";
import { StaticInstance } from "./StaticInstance";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {
    x: number
    y: number
    angle: number
    status: ENUM_ENEMY_STATUS = ENUM_ENEMY_STATUS.IDLE
    // 运动参数
    speed: number = 200
    // 运动位移(针对水平运动)
    distance: number = 500
    tempDis: number = 0
    // 移动方向(针对水平运动)
    isDirX: boolean = false
    // 移动方向
    dir: number = 1
    // 弧度(针对圆周运动)
    radian: number = 0
    // 半径(针对圆周运动)
    circleRadius: number = 250
    // 圆心(针对圆周运动)
    circleCenter: cc.Vec2 = cc.v2(0, 0)
    // 其父进攻方
    blue: Player = null

    @property([cc.SpriteFrame])
    spriteFrameArr: cc.SpriteFrame[] = []
    @property(cc.Node)
    ballNode: cc.Node = null
    @property(cc.Node)
    circleNode: cc.Node = null

    init(data: any) {
        if (this.spriteFrameArr.length <= 0) return
        Object.assign(this, data)
        DataManager.instance.reds.push(this)
        this.unscheduleAllCallbacks()
        this.tempDis = 0;
        this.rendor()
    }

    rendor() {
        let current = DataManager.instance.level - 1
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrameArr[current]
        this.node.setPosition(this.x, this.y)
        this.node.angle = -this.angle
        // 直线移动
        if (this.status == ENUM_ENEMY_STATUS.MOVE) {
            this.schedule(this.move, 0.01)
        } else if (this.status == ENUM_ENEMY_STATUS.ROUND) {
            // 计算圆心
            this.circleCenter.x = this.blue.x
            this.circleCenter.y = this.blue.y
            this.schedule(this.circleMove, 0.01);
        }
    }

    setBallActive(status: boolean) {
        this.ballNode.active = status
    }

    setCircleActive(status: boolean) {
        this.circleNode.color = cc.color(245, 103, 103, 255)
        this.circleNode.active = status
    }

    setParent(blue: Player) {
        this.blue = blue
    }

    setSpeed(speed: number) {
        this.speed = speed
        if (speed == 0) {
            this.unscheduleAllCallbacks()
        }
    }

    playEffect() {
        this.node?.getChildByName('Effect')?.getComponent(cc.ParticleSystem).resetSystem()
    }
    /**
     * 实现物体的移动功能。
     * 此函数主要负责根据物体的当前状态（方向、速度、距离）更新物体的位置。
     * 移动是基于固定的时间步长（dt）进行的，物体在X轴或Y轴上移动取决于isDirX的值。
     * 当物体移动的距离超过预设的距离时，物体的方向会发生反转，以实现往复运动的效果。
     */
    move() {
        let dt = 0.016;
        if (this.isDirX) {
            this.tempDis += dt * this.speed * this.dir
            if (this.tempDis > this.distance) {
                this.dir = -1
            } else if (this.tempDis < -this.distance) {
                this.dir = 1
            }
            this.node.x += dt * this.speed * this.dir
        } else {
            this.tempDis += dt * this.speed * this.dir
            if (this.tempDis > this.distance) {
                this.dir = -1
            } else if (this.tempDis < -this.distance) {
                this.dir = 1
            }
            this.node.y += dt * this.speed * this.dir
        }
    }
    /**
     * 使节点沿圆形路径移动。
     * @param dt 时间间隔，用于计算位移。
     */
    circleMove(dt: number) {
        // 顺逆时针
        let dir = 1
        if (!this.isDirX) dir = -1

        // 先计算弧度
        this.radian += dt * (this.speed / 100) * dir;
        let x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
        let y = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
        this.node.position = cc.v3(x, y, 0);
        // Math.atan2 反正切函数 返回从X轴到某个点的角度（以弧度为单位）。
        let angle = Math.atan2(y, x) / (Math.PI / 180);

        this.node.angle = angle;
    }

    /**
     * 当检测到碰撞事件发生时的处理函数。
     * @param other 另一个碰撞器，可能是球体。
     * @param self 自身的碰撞器，表示敌人的碰撞器。
     * 
     * 此函数在敌人的碰撞器与球体碰撞时被调用，根据碰撞的情况执行不同的逻辑，
     * 如播放振动效果、改变敌人状态、结束游戏等。
     */
    // 碰撞检测
    onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider) {
        // 跟球做碰撞
        if (other.tag == ENUM_COLLIDER_TAG.BALL) {
            if (DataManager.instance.vibrate) {
                EventManager.instance.emit(ENUM_GAME_EVENT.GAME_VIBRATE);
            }
            // 是否必杀状态
            if (other.node.getChildByName('Shield').active) {
                // 击破防守员
                this.setSpeed(0)
                AudioManager.instance.playSound(ENUM_AUDIO_CLIP.DIE)
                self.node.getComponent(Enemy).status = ENUM_ENEMY_STATUS.DIE
                self.node.getComponent(cc.Animation).play()
            } else {
                if (self.node.getComponent(Enemy).status == ENUM_ENEMY_STATUS.DIE) return
                // 拦截游戏结束
                other.node.active = false
                this.setSpeed(0)
                this.playEffect()
                this.setBallActive(true)
                EventManager.instance.emit(ENUM_GAME_EVENT.GAME_LOSE)
            }
        }
    }
}