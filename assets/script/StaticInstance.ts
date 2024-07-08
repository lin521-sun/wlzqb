// Created by carolsail

import UIManager from "./manager/UIManager";

export class StaticInstance {
    static uiManager: UIManager | undefined = undefined;

    static setUIManager(context: UIManager){
        StaticInstance.uiManager = context;
    }
}