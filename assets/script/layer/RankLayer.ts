// Created by carolsail 

import { ENUM_AUDIO_CLIP, ENUM_UI_TYPE } from "../Enum";
import AudioManager from "../manager/AudioManager";
import SdkManager from "../manager/SdkManager";
import { StaticInstance } from "../StaticInstance";
import BaseLayer from "./Baselayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankLayer extends BaseLayer {

    onEnable(){
        // 读取排行榜数据
        SdkManager.instance.getRank()
    }

    onCloseClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.RANK, false)
    }
}
