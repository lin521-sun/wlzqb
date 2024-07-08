// Created by carolsail

import { ENUM_AUDIO_CLIP, ENUM_GAME_EVENT, ENUM_UI_TYPE } from "../Enum";
import { StaticInstance } from './../StaticInstance';
import AudioManager from "../manager/AudioManager";
import BaseLayer from "./Baselayer";
import EventManager from "../manager/EventManager";

const { ccclass, property } = cc._decorator;
declare let tt: any;
@ccclass
export default class MenuLayer extends BaseLayer {
  @property(cc.Node)
  Rank: cc.Node = null;
  @property(cc.Node)
  Cbl: cc.Node = null;
  @property(cc.Node)
  Desk: cc.Node = null;
  protected onEnable(): void {
    if (!window["tt"]) {
      //TODO 排行榜按钮 入口有礼按钮 添加桌面按钮 隐藏
      this.Rank.active = false;
      this.Cbl.active = false;
      this.Desk.active = false;
    }
  }

  onStartClick() {
    AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
    StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
    StaticInstance.uiManager.toggle(ENUM_UI_TYPE.GAME)
  }

  onLevelClick() {
    AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
    StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LEVEL)
  }

  onRankClick() {
    AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
    // StaticInstance.uiManager.toggle(ENUM_UI_TYPE.RANK)
    if (window["tt"]) {
      tt.getImRankList({
        relationType: "default", //好友榜、总榜都展示
        dataType: 0, //只圈选type为枚举类型的数据进行排序
        rankType: "day", //每天凌晨0点更新，只对当天0点到现在写入的数据进行排序
        suffix: "分", //为空或不填，一般枚举类型不需要填后缀
        rankTitle: "排行榜(每日更新)", //标题
        zoneId: 'test',
        success(res) {
          console.log(`getImRankData success res: ${res}`);
        },
        fail(res) {
          console.log(`getImRankData fail res: ${res.errMsg}`);
        },
      });
    }
  }
  onCblClick() {
    AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
    StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SIDEBARLAYER)
  }
  onAddDeskClick() {
    AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
    if (window["tt"]) {
      tt.addShortcut({
        success() {
          console.log("添加桌面成功");
        },
        fail(err) {
          console.log("添加桌面失败", err.errMsg);
        },
      });
    }
  }

  onSettingClick() {
    AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
    StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING)
    EventManager.instance.emit(ENUM_GAME_EVENT.RENDOR_HOME_BTN, false)
  }
}
