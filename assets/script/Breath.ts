// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Breath extends cc.Component {

    @property(cc.Integer)
    scale = 0.6;
    @property(cc.Integer)
    scale1 = 0.8;
    start() {
        this.f1();
    }
    /**
        * 执行一个序列动作，首先缩放节点，然后调用f2函数。
        * 此函数通过使用cc.sequence和cc.callFunc组合动作来实现节点的缩放和后续动作的触发。
        * 它无返回值。
        */
    f1() {
        this.node.runAction(
            cc.sequence(cc.scaleTo(0.5, this.scale),
                cc.callFunc(() => {
                    this.f2();
                }
                )
            )
        )
    }
    /**
     * 执行一个序列动作，首先缩放节点，然后调用函数f1。
     * 此函数通过cc.sequence创建一个动作序列，首先将节点缩放到指定比例，然后在动作完成后调用f1函数。
     * 使用callFunc动作来在动作序列结束时执行回调函数，这是在Cocos Creator中常见的做法。
     */
    f2() {
        this.node.runAction(
            cc.sequence(cc.scaleTo(0.5, this.scale1),
                cc.callFunc(() => {
                    this.f1();
                }
                )
            )
        )
    }
}
