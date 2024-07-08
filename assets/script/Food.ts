import { StaticInstance } from './StaticInstance';
// Created by carolsail 

import Ball from "./Ball";
import { ENUM_AUDIO_CLIP, ENUM_COLLIDER_TAG, ENUM_ENEMY_STATUS, ENUM_GAME_EVENT } from "./Enum";
import AudioManager from "./manager/AudioManager";
import DataManager from "./manager/DataManager";
import EventManager from "./manager/EventManager";
import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Food extends cc.Component {
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

    init(data: any) {
        Object.assign(this, data)
        DataManager.instance.foods.push(this)
        this.rendor()
    }

    rendor() {
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
     * 根据指定的时间间隔和移动方向更新物体的位置。
     * @param dt 时间间隔，用于计算物体在该时间段内的位移。
     */
    move(dt: number) {
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
     * 让节点沿圆形路径移动。
     * 此函数通过计算新的位置和角度，更新节点在圆形路径上的位置。
     * 它使用数学库中的三角函数来根据当前的弧度和速度计算新的x和y坐标。
     * @param dt 时间间隔，用于计算弧度的增加量。
     */
    circleMove(dt: number) {
        // 先计算弧度
        this.radian += dt * (this.speed / 100);
        let x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
        let y = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
        this.node.position = cc.v3(x, y, 0);
        // Math.atan2 反正切函数 返回从X轴到某个点的角度（以弧度为单位）。
        let angle = Math.atan2(y, x) / (Math.PI / 180);
        this.node.angle = angle;
    }

    /**
 * 当检测到碰撞事件发生时的处理函数。
 * @param other 另一个碰撞器，用于判断是否与特定标签的物体发生碰撞。
 * @param self 自身的碰撞器，用于判断自身是否属于特定标签。
 * 
 * 该函数在碰撞检测到特定对象时触发，执行相应的逻辑操作，如播放音效、禁用当前节点、
 * 更新数据管理器中的状态等。这些操作基于碰撞的对象标签（如球或食物）进行。
 */
    // 碰撞检测
    onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider) {
        // 跟球做碰撞
        if (other.tag == ENUM_COLLIDER_TAG.BALL) {
            AudioManager.instance.playSound(ENUM_AUDIO_CLIP.COLLECT)
            self.node.active = false
            if (self.tag == ENUM_COLLIDER_TAG.FOOD) {
                // console.log('食物补充能量')
                if (DataManager.instance.powerEffectLoop <= 0) {
                    DataManager.instance.foodEffectLoop = 1
                    DataManager.instance.powerCount = DataManager.instance.powerCountTarget
                    StaticInstance.uiManager.setPowerBar()
                }
            }
        }
    }
}
