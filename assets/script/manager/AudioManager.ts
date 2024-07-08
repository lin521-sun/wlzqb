// Created by carolsail

import { ENUM_AUDIO_CLIP } from './../Enum';
import DataManager from './DataManager';
import ResourceManager from "./ResourceManager"

export default class AudioManager {
    private audioSource: cc.AudioSource = null
    private static _instance: any = null

    static getInstance<T>(): T {
        if (this._instance === null) {
            this._instance = new this()
            this._instance.init()
        }

        return this._instance
    }

    static get instance() {
        return this.getInstance<AudioManager>()
    }

    init() {
        this.audioSource = new cc.AudioSource()
        this.audioSource.loop = true
        this.audioSource.volume = 0.3
    }
    /**
         * 异步播放背景音乐。
         * 此方法首先检查是否有可用的背景音乐资源，然后尝试播放。如果当前音频源已经有音轨，则直接播放；
         * 否则，从资源管理器异步获取背景音乐音轨，并将其分配给音频源后播放。
         */
    async playMusic() {
        if (!DataManager.instance.audioMusic) return
        if (this.audioSource.clip) {
            this.audioSource.play()
            return
        }
        const clip = await ResourceManager.instance.getClip(ENUM_AUDIO_CLIP.BGM)
        this.audioSource.clip = clip
        this.audioSource.play()
    }
    /**
         * 停止音乐播放。
         * 
         * 该方法用于停止当前正在进行的音乐播放。它调用了音频源的stop方法，
         * 以便立即结束音乐播放。这对于需要在应用程序中控制音乐播放的场景非常有用，
         * 比如在游戏或媒体应用中根据用户操作停止背景音乐。
         */
    stopMusic() {
        this.audioSource.stop()
    }
    /**
      * 异步播放声音效果。
      * 
      * 此函数用于根据给定的声音名称异步播放声音效果。它首先检查数据管理器中是否存在声音资源，
      * 然后从资源管理器中获取声音剪辑，并使用Unity的音频引擎播放该声音剪辑。
      * 如果指定了循环播放，声音将一直播放直到停止或游戏结束。
      * 
      * @param name 声音效果的名称，使用枚举类型ENUM_AUDIO_CLIP来指定。
      * @param isLoop 是否循环播放声音，默认为false（不循环）。
      * @returns 返回一个表示声音播放的唯一标识符。
      */
    async playSound(name: ENUM_AUDIO_CLIP, isLoop: boolean = false) {
        if (!DataManager.instance.audioSound) return
        const clip = await ResourceManager.instance.getClip(name)
        return cc.audioEngine.playEffect(clip, isLoop)
    }
    /**
     * 停止播放音效。
     * 
     * 本函数通过音频引擎停止指定音效的播放。音效通常是指短促的音频片段，例如游戏中的人物脚步声、攻击声等。
     * 使用音效ID作为参数，可以直接定位到正在播放的音效，实现精确的控制。
     * 
     * @param audioId 音效的ID，用于唯一标识一个音效实例。
     */
    stopSound(audioId: number) {
        cc.audioEngine.stopEffect(audioId)
    }
}
