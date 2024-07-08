// Created by carolsail
import { ENUM_RESOURCE_TYPE } from './../Enum';
import DataManager from './DataManager';

export default class ResourceManager {

    public clipMap = {}
    public flagMap = {}

    private static _instance: any = null

    static getInstance<T>(): T {
        if (this._instance === null) {
            this._instance = new this()
        }

        return this._instance
    }

    static get instance() {
        return this.getInstance<ResourceManager>()
    }
    /**
        * 异步加载指定类型的资源。
        * @param type 资源类型，使用ENUM_RESOURCE_TYPE枚举定义。
        * @returns 返回一个Promise，表示加载过程的完成。
        */
    public async loadRes(type: ENUM_RESOURCE_TYPE) {
        return new Promise<void>((resolve, reject) => {
            const rate = DataManager.instance.loadingRate
            switch (type) {
                case ENUM_RESOURCE_TYPE.AUDIO:
                    cc.resources.loadDir('audio', cc.AudioClip, (finished: number, total: number) => {
                        // 资源加载进度
                        // 保留两位小数
                        const loadingRate = Math.floor((rate + 0.5 * finished / total) * 100) / 100
                        DataManager.instance.loadingRate = Math.max(loadingRate, DataManager.instance.loadingRate)
                    }, (err, assets) => {
                        if (err) reject && reject()
                        let asset: any
                        for (let i = 0; i < assets.length; i++) {
                            asset = assets[i];
                            if (!this.clipMap[asset.name]) this.clipMap[asset.name] = asset
                        }
                        resolve && resolve()
                    })
                    break
                case ENUM_RESOURCE_TYPE.FLAG:
                    cc.resources.loadDir('flag', cc.SpriteFrame, (finished: number, total: number) => {
                        // 资源加载进度
                        // 保留两位小数
                        const loadingRate = Math.floor((rate + 0.5 * finished / total) * 100) / 100
                        DataManager.instance.loadingRate = Math.max(loadingRate, DataManager.instance.loadingRate)
                    }, (err, assets) => {
                        if (err) reject && reject()
                        let asset: any
                        for (let i = 0; i < assets.length; i++) {
                            asset = assets[i];
                            if (!this.flagMap[asset.name]) this.flagMap[asset.name] = asset
                        }
                        resolve && resolve()
                    })
                    break
            }
        })
    }

    public getClip(name: string) {
        return this.clipMap[name]
    }

    public getFlag(name: string) {
        return this.flagMap[name]
    }
}
