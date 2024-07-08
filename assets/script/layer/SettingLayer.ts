// Created by carolsail

import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_UI_TYPE } from "../Enum";
import { StaticInstance } from './../StaticInstance';
import AudioManager from "../manager/AudioManager";
import BaseLayer from "./Baselayer";
import DataManager from "../manager/DataManager";
import EventManager from "../manager/EventManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SettingLayer extends BaseLayer {

    @property(cc.Node)
    musicNode: cc.Node = null
    @property(cc.Node)
    soundNode: cc.Node = null
    @property(cc.Node)
    vibrateNode: cc.Node = null
    @property(cc.Node)
    gamemusicNode: cc.Node = null
    @property(cc.Node)
    gamesoundNode: cc.Node = null
    @property(cc.Node)
    gamevibrateNode: cc.Node = null
    @property(cc.Node)
    mainSettingNode: cc.Node = null
    @property(cc.Node)
    gameSettingNode: cc.Node = null

    protected onEnable(): void {
        EventManager.instance.on(ENUM_GAME_EVENT.RENDOR_HOME_BTN, this.setHomeBtn, this)
        this.rendorMusic()
        this.rendorSound()
        this.rendorVibrate()
        // 游戏中调起setting的时候要暂停timer
        EventManager.instance.emit(ENUM_GAME_EVENT.TIMER_STOP)
    }

    protected onDisable(): void {
        EventManager.instance.off(ENUM_GAME_EVENT.RENDOR_HOME_BTN, this.setHomeBtn)
        // 游戏中关闭setting的时候要暂停timer
        EventManager.instance.emit(ENUM_GAME_EVENT.TIMER_START)
    }

    onCloseClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING, false)
    }

    onHomeClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.GAME, false)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING, false)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, true)
    }

    onMusicClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        DataManager.instance.audioMusic = !DataManager.instance.audioMusic
        if(DataManager.instance.audioMusic){
            AudioManager.instance.playMusic()
        }else{
            AudioManager.instance.stopMusic()
        }
        this.rendorMusic()
    }

    onSoundClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        DataManager.instance.audioSound = !DataManager.instance.audioSound
        this.rendorSound()
    }

    onVibrateClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        DataManager.instance.vibrate = !DataManager.instance.vibrate
        this.rendorVibrate()
    }

    setHomeBtn(status: boolean = true){
        this.mainSettingNode.active = !status
        this.gameSettingNode.active = status
    }

    rendorMusic(){
        // this.musicNode.getChildByName('on').active = DataManager.instance.audioMusic
        this.musicNode.getChildByName('off').active = !DataManager.instance.audioMusic
        // this.gamemusicNode.getChildByName('on').active = DataManager.instance.audioMusic
        this.gamemusicNode.getChildByName('off').active = !DataManager.instance.audioMusic
    }
    
    rendorSound(){
        // this.soundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.soundNode.getChildByName('off').active = !DataManager.instance.audioSound
        // this.gamesoundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.gamesoundNode.getChildByName('off').active = !DataManager.instance.audioSound
    }

    rendorVibrate(){
        // this.soundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.vibrateNode.getChildByName('off').active = !DataManager.instance.vibrate
        // this.gamesoundNode.getChildByName('on').active = DataManager.instance.audioSound
        this.gamevibrateNode.getChildByName('off').active = !DataManager.instance.vibrate
    }
}
