// Created by carolsail 

import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_UI_TYPE } from "../Enum";
import AudioManager from "../manager/AudioManager";
import EventManager from "../manager/EventManager";
import { StaticInstance } from "../StaticInstance";
import BaseLayer from "./Baselayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TipLayer extends BaseLayer {

    @property(cc.Node)
    levelContent: cc.Node = null

    onEnable(){
        EventManager.instance.emit(ENUM_GAME_EVENT.TIMER_STOP)
    }

    onCloseClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.TIP, false)
    }

    setTip(num: number){
        this.levelContent.children.forEach(item=>{
            item.active = item.name == `Level${num}`
        })
    }

    onDisable(){
        // 计时器开启
        EventManager.instance.emit(ENUM_GAME_EVENT.TIMER_START)
    }
}
