// Created by carolsail

const { ccclass, property } = cc._decorator;

@ccclass
export default class Paper extends cc.Component {

    speed: number = 200
    /**
     * 更新节点的位置。
     * 
     * 此方法用于根据指定的时间间隔更新节点的垂直位置，实现节点的向下移动效果。
     * 当节点移动到超出视图范围的下边界时，将其重新定位到视图的上边界，以实现循环移动的效果。
     * 
     * @param dt 时间间隔，用于计算节点移动的距离。
     */
    update(dt: number) {
        this.node.y -= this.speed * dt
        if (this.node.y <= -1625) this.node.y = 1625
    }
}
