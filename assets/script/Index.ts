// Created by carolsail

import { ENUM_RESOURCE_TYPE, ENUM_UI_TYPE } from "./Enum";
import AudioManager from "./manager/AudioManager";
import DataManager from './manager/DataManager';
import ResourceManager from "./manager/ResourceManager";
import SdkManager from "./manager/SdkManager";
import { StaticInstance } from "./StaticInstance";

const { ccclass, property } = cc._decorator;
declare let tt: any;
declare let wx: any;
@ccclass
export default class Index extends cc.Component {

    @property
    collisionManagerDebug: boolean = false;
    @property(cc.Sprite)
    loadfill: cc.Sprite = null
    @property(cc.Node)
    loadball: cc.Node = null
    @property(cc.Node)
    jdt: cc.Node = null
    /**
        * 加载场景时的初始化操作。
        * 此函数负责调用第三方登录SDK进行登录操作，加载资源，恢复游戏状态，初始化碰撞检测系统，
        * 以及加载和初始化微信SDK的相关功能。
        */
    protected async onLoad() {
        if (window["tt"]) {
            tt.login({
                force: true,
                success(res) {
                    console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
                },
                fail(res) {
                    console.log(`login 调用失败`);
                },
            });
        }
        DataManager.instance.loadingRate = 0
        this.loadball.x = -278;
        // 加载resource资源
        await ResourceManager.instance.loadRes(ENUM_RESOURCE_TYPE.AUDIO)
        await ResourceManager.instance.loadRes(ENUM_RESOURCE_TYPE.FLAG)
        // 读档
        DataManager.instance.restore()
        // 播放音乐
        AudioManager.instance.playMusic()
        // 碰撞系统
        const colManager = cc.director.getCollisionManager();
        colManager.enabled = true;
        if (this.collisionManagerDebug) {
            colManager.enabledDebugDraw = true;
        }
        // 初始化微信sdk
        SdkManager.instance.videoAdLoad()
        // SdkManager.instance.getRank()
        SdkManager.instance.gameSharePassive()
        if (window["wx"]) {
            const loadTask = wx.loadSubpackage({
                name: 'Bundle1', // name 可以填 name 或者 root
                success: function (res) {
                    // 分包加载成功后通过 success 回调
                },
                fail: function (res) {
                    // 分包加载失败通过 fail 回调
                }
            })

            loadTask.onProgressUpdate(res => {
                console.log('下载进度', res.progress)
                console.log('已经下载的数据长度', res.totalBytesWritten)
                console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
            })
        }

    }
    once: boolean = true;
    /**
   * 根据数据管理器的加载进度更新加载界面的显示。
   * 此方法主要用于在游戏加载过程中，动态更新加载条的填充进度和加载球的位置。
   * 当加载进度达到100%时，切换界面从加载界面到主菜单界面。
   * 
   * @param dt 时间间隔，通常代表每帧的时间长度，用于更新动画效果。
   */
    protected update(dt: number): void {
        // console.log(DataManager.instance.loadingRate)
        if (this.loadfill && this.once) {
            this.loadfill.fillRange = DataManager.instance.loadingRate
            this.loadball.x = -278 + this.loadfill.fillRange * 588;
            this.jdt.width = this.loadfill.fillRange * 608;
            if (DataManager.instance.loadingRate >= 1) {
                this.once = false;
                // menu已加载完毕
                // 展示ui
                StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOADING, false)
                StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, true, () => {
                    DataManager.instance.loadingRate = 1
                })
            }
        }
    }
}
