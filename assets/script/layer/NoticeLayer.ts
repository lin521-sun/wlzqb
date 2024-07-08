import { ENUM_UI_TYPE } from '../Enum';
import { StaticInstance } from './../StaticInstance';
// Created by carolsail 

import BaseLayer from "./Baselayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NoticeLayer extends BaseLayer {

    @property(cc.Label)
    label: cc.Label = null
    @property([cc.SpriteFrame])
    spriteArr: Array<cc.SpriteFrame> = []
    @property(cc.Sprite)
    icon: cc.Sprite = null
    onEnable() {
        this.scheduleOnce(() => {
            StaticInstance.uiManager.toggle(ENUM_UI_TYPE.NOTICE, false)
        }, 1)
    }

    setNoticeLabel(str: string) {
        // this.label.string = `${str}`
        let index = 0;
        switch (str) {
            case '必杀技':
                index = 0;
                break;
            case '好球':
                index = 1;
                break;
            case '漂亮':
                index = 2;
                break;
            case '哇~':
                index = 3;
                break;
            case '牛牛牛':
                index = 4;
                break;
            case '世界波':
                index = 5;
                break;
            default:
                break;
        }
        this.icon.spriteFrame = this.spriteArr[index];
    }
}
