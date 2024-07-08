// Created by carolsail

import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_UI_TYPE } from "../Enum";
import { StaticInstance } from './../StaticInstance';
import AudioManager from "../manager/AudioManager";
import BaseLayer from "./Baselayer";
import EventManager from "../manager/EventManager";
import SdkManager from "../manager/SdkManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WinLayer extends BaseLayer {
    @property(cc.Node)
    goFire: cc.Node = null;
    @property(cc.Node)
    next: cc.Node = null;
    protected onLoad(): void {
        if (!window["tt"]) {
            //TODO 排行榜按钮 入口有礼按钮 添加桌面按钮 隐藏
            this.goFire.active = false;
          }
    }
    onRestartClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.WIN, false)
        EventManager.instance.emit(ENUM_GAME_EVENT.GAME_RESTART)
    }

    onNextClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.WIN, false)
        EventManager.instance.emit(ENUM_GAME_EVENT.GAME_NEXT)
    }

    onShareClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        // SdkManager.instance.gameShareActive()
        SdkManager.instance.shareGameToFriend(null, '分享给好友');
    }

    showCompleteNotice(status: boolean) {
        this.node.getChildByName('Complete').active = status
        if(status){
            this.next.active = false;
        }
        else{
            this.next.active = true;
        }
    }

    onGoFireClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        SdkManager.instance.recordingVideoShare(null, '录制视频分享');
    }
}
