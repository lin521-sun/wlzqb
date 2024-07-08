// Created by carolsail

import { ENUM_GAME_EVENT } from './Enum';
import DataManager from './manager/DataManager';
import EventManager from './manager/EventManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Camera extends cc.Component {

    isMove: boolean = false
    // 位移目标位置为下一个block中心
    targetPos: cc.Vec2 = cc.Vec2.ZERO;

    onLoad() {
        EventManager.instance.on(ENUM_GAME_EVENT.CAMERA_MOVE, this.onCameraMove, this)
    }

    protected onDestroy(): void {
        EventManager.instance.off(ENUM_GAME_EVENT.CAMERA_MOVE, this.onCameraMove)
    }
    /**
     * 当摄像机移动时触发的事件处理函数。
     * 主要用于计算和设置摄像机的目标位置，基于当前和下一个场景物体的位置。
     * 
     * @param {Object} param0 包含当前和下一个场景物体位置的对象。
     * @param {cc.Vec2} param0.current 当前场景物体的位置。
     * @param {cc.Vec2} [param0.next] 下一个场景物体的位置，如果有的话。
     */
    onCameraMove({ current, next }) {
        this.isMove = false
        const level = DataManager.instance.currentData
        if (level['cameraMove'].x || level['cameraMove'].y) {
            this.isMove = true
            // const endpoint = DataManager.instance.endpoint
            if (level['cameraMove'].x) {
                let moveX = current.x
                if (next) {
                    const mid = Math.abs(next.x - current.x) / 2
                    if (next.x >= current.x) {
                        moveX += mid
                    } else {
                        moveX -= mid
                    }
                }
                this.targetPos.x = moveX
            } else {
                this.targetPos.x = 0
            }

            if (level['cameraMove'].y) {
                let moveY = current.y
                if (next) {
                    const mid = Math.abs(next.y - current.y) / 2
                    if (next.y >= current.y) {
                        moveY += mid
                    } else {
                        moveY -= mid
                    }
                }
                if (moveY > 0) moveY = Math.min(0, moveY)
                if (moveY < 0) moveY = Math.min(-200, moveY + 200)
                this.targetPos.y = moveY
            } else {
                this.targetPos.y = 0
            }
        } else {
            this.node.setPosition(cc.Vec2.ZERO)
        }
    }

    onCameraReset() {
        this.isMove = false
        this.node.setPosition(cc.Vec2.ZERO)
    }

    update(dt: number) {
        if (this.isMove) {
            // 相机所在位置
            let currentPos = this.node.getPosition();
            // 平滑过度
            currentPos.lerp(this.targetPos, 0.02, currentPos);
            this.node.setPosition(currentPos);
        }
    }
}
