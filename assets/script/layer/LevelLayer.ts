// Created by carolsail

import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_UI_TYPE } from "../Enum";
import { StaticInstance } from './../StaticInstance';
import AudioManager from "../manager/AudioManager";
import BaseLayer from "./Baselayer";
import ResourceManager from "../manager/ResourceManager";
import DataManager from "../manager/DataManager";
import { Levels } from "../Levels";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelLayer extends BaseLayer {

    @property(cc.Node)
    levelContent: cc.Node = null
    @property(cc.Prefab)
    levelItemPrefab: cc.Prefab = null

    onEnable(){
        this.onRendor()
    }

    onCloseClick(){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LEVEL, false)
    }

    async onRendor(){
        if(!(this.levelContent && this.levelItemPrefab)) return
        this.levelContent.removeAllChildren()
        for(let i = 0; i < Levels.length; i++){
            const data = Levels[i]['info']
            const levelItem: cc.Node = cc.instantiate(this.levelItemPrefab)
            const level = i + 1
            const flag = await ResourceManager.instance.getFlag(data['icon'])
            levelItem.getChildByName('flag').getComponent(cc.Sprite).spriteFrame = flag
            levelItem.getChildByName('team').getComponent(cc.Label).string = `${data['team']}`
            levelItem.getChildByName('intro').getComponent(cc.Label).string = `${data['intro']}`
            levelItem.parent = this.levelContent
            const button = levelItem.getComponent(cc.Button)
            if(level > DataManager.instance.maxLevel){
                levelItem.getChildByName('lock').active = true
                button.enabled = false
            }else{
                levelItem.getChildByName('lock').active = false
                // button添加事件
                const event = new cc.Component.EventHandler()
                event.target = this.node
                event.component = 'LevelLayer'
                event.handler = 'onLevelItemClick'
                event.customEventData = `${level}`
                button.clickEvents.push(event)
            }
        }
    }

    onLevelItemClick(e: any, level: string){
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        const currentLevel: number = parseInt(level)
        if(currentLevel <= DataManager.instance.maxLevel){
            DataManager.instance.level = currentLevel
            StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
            StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LEVEL, false)
            StaticInstance.uiManager.toggle(ENUM_UI_TYPE.GAME)
        }
    }
}
