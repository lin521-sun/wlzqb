// Created by carolsail

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseLayer extends cc.Component {

    show() {
        this.node.active = true;
    }

    hide() {
        this.node.active = false
    }
}
