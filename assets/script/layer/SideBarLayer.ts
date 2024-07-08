import { ENUM_AUDIO_CLIP, ENUM_UI_TYPE } from '../Enum';
import { StaticInstance } from '../StaticInstance';
import AudioManager from '../manager/AudioManager';
import DataManager from '../manager/DataManager';
import BaseLayer from './Baselayer';
declare let tt: any;
const { ccclass, property } = cc._decorator;

@ccclass
export class SideBarLayer extends BaseLayer {
    @property(cc.Node)
    private go_side_btn: cc.Node = null;
    @property(cc.Node)
    private get_gift_btn: cc.Node = null;
    isFromSidebar: boolean = false;
    protected onEnable(): void {
        const value = DataManager.instance.SideBarReward
        if (value) {
            this.hiddenBtn();
        }
        else {
            if (window["tt"]) {
                tt.onShow(res => {
                    // 获取启动信息，可以判断是否从侧边栏启动
                    // 判断是否从侧边栏启动
                    this.isFromSidebar = res.scene === 'sidebar';
                    // 在这里根据isFromSidebar的值显示或隐藏相关的按钮节点
                    console.log('启动信息: ', res);
                    if (this.go_side_btn) {
                        this.go_side_btn.active = !this.isFromSidebar; // 根据启动状态判断是否显示去侧边栏按钮
                    }
                    if (this.get_gift_btn) {
                        this.get_gift_btn.active = this.isFromSidebar; // 根据启动状态判断是否显示返回按钮
                    }
                });
            }
        }
    }

    hiddenBtn() {
        this.go_side_btn.active = false;
        this.get_gift_btn.active = false;
    }

    onBtnClose(): void {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SIDEBARLAYER, false)
    }

    onCblLingquClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        // EnergyMgr.ins.changeEnergy(true, 10)
        for (let i = 0; i < DataManager.instance.skillNums.length; i++) {
            DataManager.instance.skillNums[i] += 1;
        }
        DataManager.instance.SideBarReward = true;
        this.hiddenBtn();
    }
    onGoCblClick() {
        AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
        if (window["tt"]) {
            tt.checkScene({
                //判断当前宿主是否支持跳转侧边栏
                scene: 'sidebar',
                success: (res: any) => {
                    console.log('检查结果: ', res.isExist);
                    if (res.isExist) {
                        // 展示奖励入口，进入步骤二
                        console.log('当前宿主版本支持侧边栏场景');
                        // 支持侧边栏场景，跳转到侧边栏
                        tt.navigateToScene({
                            scene: 'sidebar',
                            success: (res: any) => {
                                console.log('跳转成功');
                                tt.showToast({
                                    title: '跳转成功',
                                    // icon: "none",
                                    duration: 2000,
                                });
                            },
                            fail: (res: any) => {
                                console.log('跳转失败: ', res);
                                // 跳转失败回调逻辑
                                tt.showToast({
                                    title: '跳转成功',
                                    // icon: "none",
                                    duration: 2000,
                                });
                            },
                        });
                    } else {
                        console.log('当前宿主版本不支持侧边栏场景');
                        // 显示提示或进行其他操作
                    }
                },
                fail: (res: any) => {
                    console.log('失败回调逻辑:', res);
                    // 失败回调逻辑，显示错误信息或进行其他操作
                },
            });
        }
    }
}


