// Created by carolsail 

import { ENUM_GAME_EVENT, ENUM_GAME_STATUS } from "./Enum";
import DataManager from "./manager/DataManager";
import EventManager from "./manager/EventManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Endpoint extends cc.Component {

    x: number
    y: number
    angle: number

    @property(cc.Node)
    ballNode: cc.Node = null

    init(data: any){
        Object.assign(this, data)
        DataManager.instance.endpoint = this
        this.rendor()
    }

    rendor(){
        this.node.setPosition(this.x, this.y)
        this.node.angle = -this.angle
    }

    setBallActive(status: boolean){
        this.ballNode.active = status
        if(DataManager.instance.status !== ENUM_GAME_STATUS.LOSE){
            // 过关
            EventManager.instance.emit(ENUM_GAME_EVENT.GAME_WIN)
        }
    }
}
