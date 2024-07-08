// Created by carolsail

import { ENUM_UI_TYPE } from './../Enum';
import { StaticInstance } from './../StaticInstance';
import BaseLayer from '../layer/Baselayer';
import GameLayer from '../layer/GameLayer';
import MenuLayer from '../layer/MenuLayer';
import WinLayer from '../layer/WinLayer';
import LoseLayer from '../layer/LoseLayer';
import SettingLayer from '../layer/SettingLayer';
import LevelLayer from '../layer/LevelLayer';
import LoadingLayer from '../layer/LoadingLayer';
import RankLayer from '../layer/RankLayer';
import TipLayer from '../layer/TipLayer';
import NoticeLayer from '../layer/NoticeLayer';
import { SideBarLayer } from '../layer/SideBarLayer';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {

    @property(GameLayer)
    gameLayer: GameLayer = null
    @property(MenuLayer)
    menuLayer: MenuLayer = null
    @property(WinLayer)
    winLayer: WinLayer = null
    @property(LoseLayer)
    loseLayer: LoseLayer = null
    @property(SettingLayer)
    settingLayer: SettingLayer = null
    @property(LevelLayer)
    levelLayer: LevelLayer = null
    @property(LoadingLayer)
    loadingLayer: LoadingLayer = null
    @property(RankLayer)
    rankLayer: RankLayer = null
    @property(TipLayer)
    tipLayer: TipLayer = null
    @property(NoticeLayer)
    noticeLayer: NoticeLayer = null
    @property(SideBarLayer)
    sideBarLayer: SideBarLayer = null

    private uiMap = new Map<ENUM_UI_TYPE, BaseLayer>()
    /**
         * 在类实例加载完成后调用的函数。
         * 该函数负责初始化UI管理器，并将各种UI层与枚举类型对应起来，以便于后续根据枚举类型快速访问相应的UI层。
         */
    protected onLoad(): void {
        StaticInstance.setUIManager(this)
        this.uiMap.set(ENUM_UI_TYPE.GAME, this.gameLayer)
        this.uiMap.set(ENUM_UI_TYPE.MENU, this.menuLayer)
        this.uiMap.set(ENUM_UI_TYPE.WIN, this.winLayer)
        this.uiMap.set(ENUM_UI_TYPE.LOSE, this.loseLayer)
        this.uiMap.set(ENUM_UI_TYPE.SETTING, this.settingLayer)
        this.uiMap.set(ENUM_UI_TYPE.LEVEL, this.levelLayer)
        this.uiMap.set(ENUM_UI_TYPE.LOADING, this.loadingLayer)
        this.uiMap.set(ENUM_UI_TYPE.RANK, this.rankLayer)
        this.uiMap.set(ENUM_UI_TYPE.TIP, this.tipLayer)
        this.uiMap.set(ENUM_UI_TYPE.NOTICE, this.noticeLayer)
        this.uiMap.set(ENUM_UI_TYPE.SIDEBARLAYER, this.sideBarLayer)
    }
    /**
     * 切换UI层的显示或隐藏状态。
     * 
     * 此方法用于根据给定的UI类型和状态，切换相应的UI层的可见性。如果提供了回调函数，则在切换完成后调用它。
     * 主要用于在UI管理器中动态显示或隐藏不同的UI层，以响应用户的操作或系统的状态变化。
     * 
     * @param key UI层的类型枚举值，用于唯一标识一个UI层。
     * @param status 是否显示UI层的标志，默认为true表示显示。
     * @param callback 切换完成后调用的回调函数，可选。
     */
    toggle(key: ENUM_UI_TYPE, status: boolean = true, callback?: () => void) {
        if (this.uiMap.has(key)) {
            const layer = this.uiMap.get(key)
            status ? layer.show() : layer.hide()
            callback && callback()
        }
    }
    /**
     * 设置游戏界面的力量条。
     * 
     * 本函数旨在调整游戏界面中力量条的显示状态或属性。通过从UI映射中获取特定类型的游戏层，
     * 然后调用该层的setPowerBar方法来实现。此功能可能用于更新力量条的填充程度、显示样式或其他相关属性，
     * 以反映游戏进程中的实时变化。
     * 
     * @remarks
     * 此函数假设UI映射（uiMap）已正确配置，并且存在对应于GAME类型的游戏层。
     * 使用类型断言来确保获取的层确实是GameLayer类型，然后调用其setPowerBar方法。
     * 
     * @see {ENUM_UI_TYPE} 游戏界面类型的枚举定义。
     * @see {GameLayer} 游戏层的类定义，包含setPowerBar方法。
     */
    setPowerBar() {
        const layer = this.uiMap.get(ENUM_UI_TYPE.GAME) as GameLayer
        layer.setPowerBar()
    }
    /**
     * 设置队伍标签。
     * 
     * 本函数旨在为游戏界面中的队伍区域设置标签。通过访问UI映射表，获取特定于游戏的层对象，
     * 并调用其方法来设置队伍标签。此功能对于显示游戏中的队伍信息至关重要，确保玩家能够清晰地
     * 观察到队伍的组成和状态。
     */
    setTeamLabel() {
        const layer = this.uiMap.get(ENUM_UI_TYPE.GAME) as GameLayer
        layer.setTeamLabel()
    }

    setPropNum() {
        const layer = this.uiMap.get(ENUM_UI_TYPE.GAME) as GameLayer
        layer.setPropNum()
    }
    /**
     * 设置游戏层的道具数量。
     * 
     * 本函数旨在调整游戏层中道具的数量。通过访问UI映射获取特定类型的游戏层，
     * 然后调用该层的setPropNum方法来实现道具数量的设置。此操作对于确保游戏的
     * 正确进行和平衡性至关重要。
     * 
     * @remarks
     * 此函数假设UI映射（uiMap）已正确初始化，并且存在对应的GAME类型层。
     */
    setLoseTitle(msg: string = '') {
        const layer = this.uiMap.get(ENUM_UI_TYPE.LOSE) as LoseLayer
        layer.setLoseTitle(msg)
    }
    /**
     * 设置提示信息。
     * 
     * 本函数用于更新用户界面中提示层的提示信息。它接受一个可选的数字参数来指定要显示的提示信息的编号。
     * 如果没有提供参数，则默认使用1作为提示信息编号。此功能主要用于与用户界面的交互，提供动态更新提示信息的能力。
     * 
     * @param num {number} - 要显示的提示信息的编号。默认值为1。
     */
    setTip(num: number = 1) {
        const layer = this.uiMap.get(ENUM_UI_TYPE.TIP) as TipLayer
        layer.setTip(num)
    }
    /**
     * 设置通知标签文本。
     * 
     * 此方法用于更新用户界面中通知层的标签文本。如果未指定文本，则默认使用空字符串。
     * 通过从UI映射中获取特定类型的通知层，并调用其设置标签文本的方法来实现更新。
     * 
     * @param str {string} - 要设置的通知标签文本，默认为空字符串。
     */
    setNoticeLabel(str: string = '') {
        const layer = this.uiMap.get(ENUM_UI_TYPE.NOTICE) as NoticeLayer
        layer.setNoticeLabel(str)
    }
    /**
     * 显示完成通知
     * 此函数用于在游戏窗口中显示完成通知。它基于传入的状态决定是否显示通知。
     * 通知的显示与否由`status`参数决定，如果`status`为真，则显示通知；否则，隐藏通知。
     * 
     * @param status {boolean} - 控制通知是否显示的标志，默认为false，即默认隐藏通知。
     */
    showCompleteNotice(status: boolean = false) {
        const layer = this.uiMap.get(ENUM_UI_TYPE.WIN) as WinLayer
        layer.showCompleteNotice(status)
    }
    /**
     * 停止游戏记录。
     * 
     * 本函数用于结束游戏层的记录状态。在游戏过程中，可能需要记录玩家的操作或游戏状态，
     * 而这个函数提供了一个方式来停止这种记录，可能是为了保存当前状态，或者是因为游戏结束等原因。
     * 
     * @remarks
     * 本函数首先通过UI映射获取到游戏层对象，然后调用该对象的endRecord方法来结束记录。
     * 这种设计模式使得代码具有较好的模块化和可扩展性。
     */
    stopRecord() {
        const layer = this.uiMap.get(ENUM_UI_TYPE.GAME) as GameLayer
        layer.endRecord()
    }

}
