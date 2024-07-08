// Created by carolsail

import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_UI_TYPE } from "../Enum";
import { StaticInstance } from './../StaticInstance';
import AudioManager from "../manager/AudioManager";
import BaseLayer from "./Baselayer";
import EventManager from "../manager/EventManager";
import SdkManager from "../manager/SdkManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoseLayer extends BaseLayer {

    @property(cc.Label)
    titleLabel: cc.Label = null
    @property(cc.Node)
    tackleLabel: cc.Node = null
    @property(cc.Node)
    timeOutLabel: cc.Node = null

    onHomeClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE, false)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.GAME, false)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, true)
    }

    onRestartClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE, false)
        EventManager.instance.emit(ENUM_GAME_EVENT.GAME_RESTART)
    }

    onShareClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        // SdkManager.instance.gameShareActive()
        SdkManager.instance.shareGameToFriend(null, '分享给好友');
    }

    setLoseTitle(msg: string) {
        // if(this.titleLabel) this.titleLabel.string = msg
        if (msg == '被抢断') {
            this.tackleLabel.active = true;
            this.timeOutLabel.active = false;
        }
        else{
            this.tackleLabel.active = false;
            this.timeOutLabel.active = true;
        }
    }
}
