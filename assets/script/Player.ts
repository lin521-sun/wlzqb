import { ENUM_PLAYER_STATUS } from './Enum';
// Created by carolsail 

import DataManager from "./manager/DataManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    x: number
    y: number
    angle: number
    status: ENUM_PLAYER_STATUS = ENUM_PLAYER_STATUS.IDLE

    @property([cc.SpriteFrame])
    spriteFrameArr: cc.SpriteFrame[] = []
    @property(cc.Node)
    ballNode: cc.Node = null
    @property(cc.Node)
    circleNode: cc.Node = null

    init(data: any) {
        if (this.spriteFrameArr.length <= 0) return
        Object.assign(this, data)
        DataManager.instance.blues.push(this)
        this.rendor()
    }
    /**
     * 渲染节点的状态和位置。
     * 
     * 本函数负责更新节点的状态，并将其设置到指定的位置和角度。它不接受任何参数，也没有返回值。
     * 主要用于在每次渲染周期中更新节点的视觉表现，确保节点的状态与数据模型保持一致。
     */
    rendor() {
        this.setStatus(this.status)
        this.node.setPosition(this.x, this.y)
        this.node.angle = -this.angle
    }
    /**
     * 将节点转向目标位置。
     * 此函数计算当前节点到目标位置(x, y)的角度，并将节点的角度调整为面向目标位置。
     * 它使用了数学中的反正切函数来计算角度，然后将角度转换为度数，并调整为顺时针旋转的度数。
     * 
     * @param {number} x - 目标位置的x坐标，默认为0。
     * @param {number} y - 目标位置的y坐标，默认为0。
     */
    turnTo(x: number = 0, y: number = 0) {
        let r = Math.atan2(y - this.y, x - this.x);
        let degree = r * 180 / Math.PI
        degree = 360 - degree
        this.node.angle = -degree
    }
    /**
     * 设置玩家状态。
     * @param status 玩家状态，使用ENUM_PLAYER_STATUS枚举值。
     */
    setStatus(status: ENUM_PLAYER_STATUS) {
        this.status = status
        const sprite = this.node.getComponent(cc.Sprite)
        if (this.status == ENUM_PLAYER_STATUS.IDLE) {
            sprite.spriteFrame = this.spriteFrameArr[0]
            this.ballNode.active = false
        } else if (this.status == ENUM_PLAYER_STATUS.READY) {
            sprite.spriteFrame = this.spriteFrameArr[0]
            this.ballNode.active = true
        } else if (this.status == ENUM_PLAYER_STATUS.SHOOTING) {
            sprite.spriteFrame = this.spriteFrameArr[1]
            this.ballNode.active = false
        }
    }
    /**
     * 设置圆圈节点的激活状态。
     * 
     * 此方法用于根据传入的布尔值，激活或停用一个圆圈节点。激活状态通常用于表示某个元素是否可用
     * 或是否被选中。通过修改圆圈节点的active属性，可以改变其在用户界面中的表现，例如改变颜色或形状。
     * 
     * @param status 布尔值，指示圆圈节点是否应该被激活。true表示激活，false表示停用。
     */
    setCircleActive(status: boolean) {
        this.circleNode.active = status
    }
    /**
     * 玩家角色触发的特效播放函数。
     * 本函数旨在寻找名为'Effect'的子节点，该节点通常包含一个粒子系统组件，
     * 用于播放各种视觉特效，如爆炸、火焰等。找到该节点后，将调用粒子系统的
     * resetSystem方法来重置并启动特效播放。
     * 
     * 注意：由于使用了可选链操作符(?.)，如果节点或组件不存在，函数将安全地返回，
     * 而不会抛出错误或中断执行。
     */
    playEffect() {
        this.node?.getChildByName('Effect')?.getComponent(cc.ParticleSystem).resetSystem()
    }
}
