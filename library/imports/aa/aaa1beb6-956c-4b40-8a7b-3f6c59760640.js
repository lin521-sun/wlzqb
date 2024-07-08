"use strict";
cc._RF.push(module, 'aaa1b62lWxLQIp7P2xZdgZA', 'GameLayer');
// script/layer/GameLayer.ts

"use strict";
// Created by carolsail
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enemy_1 = require("../Enemy");
var Enum_1 = require("../Enum");
var AudioManager_1 = require("../manager/AudioManager");
var DataManager_1 = require("../manager/DataManager");
var EventManager_1 = require("../manager/EventManager");
var SdkManager_1 = require("../manager/SdkManager");
var Player_1 = require("../Player");
var StaticInstance_1 = require("../StaticInstance");
var Baselayer_1 = require("./Baselayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forceBar = null;
        _this.powerBar = null;
        _this.timerLabel = null;
        _this.propsNode = null;
        _this.tipsNode = null;
        _this.teamLabel = null;
        // 点按状态
        _this.holdFlag = false;
        _this.progressSpeed = 3;
        //技能
        _this.isPassBall = false;
        _this.isRedCard = false;
        _this.isYellowCard = false;
        _this.isDrink = false;
        _this.isExtraTime = false;
        _this.startRecordNode = null;
        _this.stopRecordNode = null;
        _this.passBall = null;
        _this.redCard = null;
        _this.yellowCard = null;
        _this.drink = null;
        _this.extraTime = null;
        _this.passBallOnce = false;
        _this.redCardOnce = false;
        _this.yellowCardOnce = false;
        _this.drinkOnce = false;
        _this.extraTimeOnce = false;
        _this.passBallCount = 0;
        _this.redCardCount = 0;
        _this.yellowCardCount = 0;
        _this.drinkCount = 0;
        _this.extraTimeCount = 0;
        return _this;
    }
    GameLayer.prototype.onLoad = function () {
        var _this = this;
        this.startRecordNode = this.node.getChildByName('Panel').getChildByName('camrea_btn');
        this.startRecordNode.on('click', function () {
            _this.startRecord();
        }, this);
        this.stopRecordNode = this.node.getChildByName('Panel').getChildByName('camrea_sotp_btn');
        this.stopRecordNode.on('click', function () {
            _this.endRecord();
        }, this);
        if (!window["tt"]) {
            this.startRecordNode.active = false;
            this.stopRecordNode.active = false;
        }
    };
    GameLayer.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchstart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchend, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchend, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.TIMER_START, this.onTimerStart, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.TIMER_STOP, this.onTimerStop, this);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_RESTART);
        // 取消技能选择
        if (this.isPassBall)
            this.isPassBall = false;
        if (this.isRedCard)
            this.isRedCard = false;
        if (this.isYellowCard)
            this.isYellowCard = false;
        if (this.isDrink)
            this.isDrink = false;
        if (this.isExtraTime)
            this.isExtraTime = false;
        this.setTipsNode(false);
    };
    GameLayer.prototype.onSettingClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.RENDOR_HOME_BTN, true);
    };
    // 设置技能点ui
    GameLayer.prototype.setPropNum = function () {
        var _this = this;
        this.propsNode.children.forEach(function (prop, index) {
            var nums = prop.getChildByName('Nums');
            var video = prop.getChildByName('video');
            if (DataManager_1.default.instance.skillNums[index] > 0) {
                nums.active = true;
                video.active = false;
                var num = DataManager_1.default.instance.skillNums[index];
                if (index == 1) {
                    num = num + _this.redCardCount;
                }
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + num;
            }
            else if ((index == 0) && (_this.passBallCount > 0 || _this.passBallOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.passBallCount;
            }
            else if ((index == 1) && (_this.redCardCount > 0 || _this.redCardOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.redCardCount;
            }
            else if ((index == 2) && (_this.yellowCardCount > 0 || _this.yellowCardOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.yellowCardCount;
            }
            else if ((index == 3) && (_this.drinkCount > 0 || _this.drinkOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.drinkCount;
            }
            else if ((index == 4) && (_this.extraTimeCount > 0 || _this.extraTimeOnce)) {
                nums.active = true;
                video.active = false;
                nums.getChildByName('Label').getComponent(cc.Label).string = "" + _this.extraTimeCount;
            }
            else {
                nums.active = false;
                video.active = true;
            }
        });
    };
    GameLayer.prototype.setTeamLabel = function () {
        this.teamLabel.string = DataManager_1.default.instance.currentData['info'].team;
    };
    GameLayer.prototype.setPowerBar = function () {
        this.powerBar.progress = DataManager_1.default.instance.powerCount / DataManager_1.default.instance.powerCountTarget;
    };
    GameLayer.prototype.setTipsNode = function (status, styleIndex) {
        if (styleIndex === void 0) { styleIndex = 0; }
        this.tipsNode.getChildByName('Style').children.forEach(function (item, index) {
            item.active = styleIndex === index ? true : false;
        });
        this.tipsNode.active = status;
    };
    // 选队友传球
    GameLayer.prototype.onPropPassBall = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[0] <= 0) {
            if (this.passBallCount > 0) {
                // 脚下框动画
                DataManager_1.default.instance.blues.forEach(function (blue) {
                    if (blue.status != Enum_1.ENUM_PLAYER_STATUS.READY)
                        blue.setCircleActive(true);
                });
                this.setTipsNode(true, 0);
                this.isPassBall = true;
                this.isRedCard = false;
                this.isYellowCard = false;
                this.isDrink = false;
                this.isExtraTime = false;
                if (this.passBallOnce) {
                    this.grey(this.passBall);
                }
            }
            else if (!this.passBallOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[0] += 1
                    _this.passBallCount += 1;
                    _this.setPropNum();
                    _this.passBallOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            // 脚下框动画
            DataManager_1.default.instance.blues.forEach(function (blue) {
                if (blue.status != Enum_1.ENUM_PLAYER_STATUS.READY)
                    blue.setCircleActive(true);
            });
            this.setTipsNode(true, 0);
            this.isPassBall = true;
            this.isRedCard = false;
            this.isYellowCard = false;
            this.isDrink = false;
            this.isExtraTime = false;
            if (this.passBallOnce) {
                this.grey(this.passBall);
            }
        }
    };
    // 红牌罚下一名防守员
    GameLayer.prototype.onPropRedCard = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[1] <= 0) {
            if (this.redCardCount > 0) {
                this.setTipsNode(true, 1);
                this.isPassBall = false;
                this.isRedCard = true;
                this.isYellowCard = false;
                this.isDrink = false;
                this.isExtraTime = false;
                // 先减速运动待选择
                DataManager_1.default.instance.reds.forEach(function (red) {
                    red.setSpeed(red.speed / 10);
                    red.setCircleActive(true);
                });
                if (this.redCardOnce) {
                    this.grey(this.redCard);
                }
            }
            else if (!this.redCardOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[1] += 1
                    _this.redCardCount += 1;
                    _this.setPropNum();
                    _this.redCardOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 1);
            this.isPassBall = false;
            this.isRedCard = true;
            this.isYellowCard = false;
            this.isDrink = false;
            this.isExtraTime = false;
            // 先减速运动待选择
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed / 10);
                red.setCircleActive(true);
            });
            if (this.redCardOnce) {
                this.grey(this.redCard);
            }
        }
    };
    // 黄牌降低一名防守员速度
    GameLayer.prototype.onPropYellowCard = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[2] <= 0) {
            if (this.yellowCardCount > 0) {
                this.setTipsNode(true, 2);
                this.isPassBall = false;
                this.isRedCard = false;
                this.isYellowCard = true;
                this.isDrink = false;
                this.isExtraTime = false;
                // 先降速运动
                DataManager_1.default.instance.reds.forEach(function (red) {
                    red.setSpeed(red.speed / 10);
                    red.setCircleActive(true);
                });
                if (this.yellowCardOnce) {
                    this.grey(this.yellowCard);
                }
            }
            else if (!this.yellowCardOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[2] += 1
                    _this.yellowCardCount += 1;
                    _this.setPropNum();
                    _this.yellowCardOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 2);
            this.isPassBall = false;
            this.isRedCard = false;
            this.isYellowCard = true;
            this.isDrink = false;
            this.isExtraTime = false;
            // 先降速运动
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed / 10);
                red.setCircleActive(true);
            });
            if (this.yellowCardOnce) {
                this.grey(this.yellowCard);
            }
        }
    };
    // 饮品让能量持续3回合
    GameLayer.prototype.onPropDrink = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[3] <= 0) {
            if (this.drinkCount > 0) {
                this.setTipsNode(true, 3);
                this.isPassBall = false;
                this.isRedCard = false;
                this.isYellowCard = false;
                this.isDrink = true;
                this.isExtraTime = false;
                if (this.drinkOnce) {
                    this.grey(this.drink);
                }
            }
            else if (!this.drinkOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[3] += 1
                    _this.drinkCount += 1;
                    _this.setPropNum();
                    _this.drinkOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 3);
            this.isPassBall = false;
            this.isRedCard = false;
            this.isYellowCard = false;
            this.isDrink = true;
            this.isExtraTime = false;
            if (this.drinkOnce) {
                this.grey(this.drink);
            }
        }
    };
    // 加时让时间增加30s
    GameLayer.prototype.onPropExtraTime = function () {
        var _this = this;
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (DataManager_1.default.instance.skillNums[4] <= 0) {
            if (this.extraTimeCount > 0) {
                this.setTipsNode(true, 4);
                this.isPassBall = false;
                this.isRedCard = false;
                this.isYellowCard = false;
                this.isDrink = false;
                this.isExtraTime = true;
                if (this.extraTimeOnce) {
                    this.grey(this.extraTime);
                }
            }
            else if (!this.extraTimeOnce) {
                SdkManager_1.default.instance.videoAdShow(function () {
                    // console.log('激励视频成功回调')
                    // DataManager.instance.skillNums[4] += 1
                    _this.extraTimeCount += 1;
                    _this.setPropNum();
                    _this.extraTimeOnce = true;
                }, function () {
                    console.log('激励视频有误');
                });
            }
        }
        else {
            this.setTipsNode(true, 4);
            this.isPassBall = false;
            this.isRedCard = false;
            this.isYellowCard = false;
            this.isDrink = false;
            this.isExtraTime = true;
            if (this.extraTimeOnce) {
                this.grey(this.extraTime);
            }
        }
    };
    GameLayer.prototype.onPropCancel = function () {
        if (this.isPassBall) {
            this.isPassBall = false;
            // 取消框
            DataManager_1.default.instance.blues.forEach(function (blue) {
                blue.setCircleActive(false);
            });
            var nextBlue = DataManager_1.default.instance.getBlueNext();
            if (nextBlue)
                nextBlue.setCircleActive(true);
        }
        if (this.isRedCard) {
            this.isRedCard = false;
            // 恢复速度
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed * 10);
                red.setCircleActive(false);
            });
        }
        if (this.isYellowCard) {
            this.isYellowCard = false;
            // 恢复速度
            DataManager_1.default.instance.reds.forEach(function (red) {
                red.setSpeed(red.speed * 10);
                red.setCircleActive(false);
            });
        }
        if (this.isDrink)
            this.isDrink = false;
        if (this.isExtraTime)
            this.isExtraTime = false;
        this.setTipsNode(false);
    };
    GameLayer.prototype.onTimerStart = function (isExtraTimeOnce) {
        var _this = this;
        if (isExtraTimeOnce === void 0) { isExtraTimeOnce = false; }
        if (window["tt"]) {
            this.startRecord();
        }
        this.passBallOnce = false;
        this.redCardOnce = false;
        this.yellowCardOnce = false;
        this.drinkOnce = false;
        if (!isExtraTimeOnce) {
            this.extraTimeOnce = false;
        }
        this.normal(this.passBall);
        this.normal(this.redCard);
        this.normal(this.yellowCard);
        this.normal(this.drink);
        this.normal(this.extraTime);
        this.passBallCount = 0;
        this.redCardCount = 1;
        this.yellowCardCount = 0;
        this.drinkCount = 0;
        this.extraTimeCount = 0;
        this.setPropNum();
        this.timerLabel.string = "" + DataManager_1.default.instance.timer;
        this.unscheduleAllCallbacks();
        this.schedule(function () {
            if (DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.WIN
                || DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.LOSE) {
                _this.unscheduleAllCallbacks();
            }
            if (DataManager_1.default.instance.timer <= 1) {
                _this.unscheduleAllCallbacks();
                // 取消技能选择
                if (_this.isPassBall)
                    _this.isPassBall = false;
                if (_this.isRedCard)
                    _this.isRedCard = false;
                if (_this.isYellowCard)
                    _this.isYellowCard = false;
                if (_this.isDrink)
                    _this.isDrink = false;
                if (_this.isExtraTime)
                    _this.isExtraTime = false;
                _this.setTipsNode(false);
                if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.WIN) {
                    EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_LOSE, '时间到');
                }
            }
            if (DataManager_1.default.instance.timer == 5) {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SPELL);
            }
            DataManager_1.default.instance.timer--;
            _this.timerLabel.string = "" + DataManager_1.default.instance.timer;
        }, 1);
    };
    GameLayer.prototype.onTimerStop = function () {
        this.timerLabel.string = '';
        this.unscheduleAllCallbacks();
    };
    GameLayer.prototype.onTouchstart = function () {
        // this.progressSpeed = getRandom(2, 5)
        if (DataManager_1.default.instance.status != Enum_1.ENUM_GAME_STATUS.RUNING && DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.SHOOTING)
            return;
        if (this.isPassBall || this.isRedCard || this.isYellowCard || this.isDrink || this.isExtraTime)
            return;
        this.holdFlag = true;
    };
    GameLayer.prototype.onTouchend = function (e) {
        var location = e.getLocation();
        // 传球
        if (this.isPassBall) {
            var target = DataManager_1.default.instance.getPassPlayer(location.x, location.y);
            if (target) {
                // 取消技能
                this.isPassBall = false;
                this.setTipsNode(false);
                // 取消框
                DataManager_1.default.instance.blues.forEach(function (blue) {
                    blue.setCircleActive(false);
                });
                // 扣技能点
                if (DataManager_1.default.instance.skillNums[0] > 0) {
                    DataManager_1.default.instance.cutSkillNums(0);
                }
                else {
                    this.passBallCount--;
                }
                this.setPropNum();
                // 先转向
                var ready = DataManager_1.default.instance.getBlueReady();
                ready.turnTo(target.x, target.y);
                // 传球
                EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, { progress: 1, next: target.getComponent(Player_1.default) });
            }
            return;
        }
        // 红牌
        if (this.isRedCard) {
            var target_1 = DataManager_1.default.instance.getCardEnemy(location.x, location.y);
            if (target_1) {
                // 取消技能
                this.isRedCard = false;
                this.setTipsNode(false);
                // 恢复速度
                DataManager_1.default.instance.reds.forEach(function (red) {
                    if (target_1) {
                        if (target_1.uuid != red.node.uuid)
                            red.setSpeed(red.speed * 10);
                    }
                    else {
                        red.setSpeed(red.speed * 10);
                    }
                    red.setCircleActive(false);
                });
                // 扣技能点
                if (DataManager_1.default.instance.skillNums[1] > 0) {
                    DataManager_1.default.instance.cutSkillNums(1);
                }
                else {
                    this.redCardCount--;
                }
                this.setPropNum();
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.LAUGH);
                target_1.getComponent(Enemy_1.default).setSpeed(0);
                target_1.getComponent(cc.Animation).play();
                var toPos = this.timerLabel.node.getPosition();
                cc.tween(target_1).to(0.2, { position: cc.v3(toPos.x, toPos.y, 0) }).call(function () {
                    target_1.active = false;
                }).start();
            }
            return;
        }
        // 黄牌
        if (this.isYellowCard) {
            var target_2 = DataManager_1.default.instance.getCardEnemy(location.x, location.y);
            if (target_2) {
                // 取消技能
                this.isYellowCard = false;
                this.setTipsNode(false);
                // 恢复速度
                DataManager_1.default.instance.reds.forEach(function (red) {
                    if (target_2) {
                        if (target_2.uuid != red.node.uuid)
                            red.setSpeed(red.speed * 10);
                    }
                    else {
                        red.setSpeed(red.speed * 10);
                    }
                    red.setCircleActive(false);
                });
                // 扣技能点
                if (DataManager_1.default.instance.skillNums[2] > 0) {
                    DataManager_1.default.instance.cutSkillNums(2);
                }
                else {
                    this.yellowCardCount--;
                }
                this.setPropNum();
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SLOWDOWN);
            }
            return;
        }
        // 饮品
        if (this.isDrink) {
            this.isDrink = false;
            this.setTipsNode(false);
            // 扣技能点
            if (DataManager_1.default.instance.skillNums[3] > 0) {
                DataManager_1.default.instance.cutSkillNums(3);
            }
            else {
                this.drinkCount--;
            }
            this.setPropNum();
            DataManager_1.default.instance.powerEffectLoop = 2;
            DataManager_1.default.instance.powerCount = DataManager_1.default.instance.powerCountTarget;
            this.setPowerBar();
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SKILL);
            return;
        }
        // 加时
        if (this.isExtraTime) {
            this.isExtraTime = false;
            this.setTipsNode(false);
            // 扣技能点
            if (DataManager_1.default.instance.skillNums[4] > 0) {
                DataManager_1.default.instance.cutSkillNums(4);
            }
            else {
                this.extraTimeCount--;
            }
            this.setPropNum();
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.TIMER);
            DataManager_1.default.instance.timer += DataManager_1.default.instance.extraTime;
            this.onTimerStart(true);
            return;
        }
        this.holdFlag = false;
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.PLAYER_SHOOT, { progress: this.forceBar.progress });
    };
    GameLayer.prototype.update = function (dt) {
        if (this.holdFlag && this.forceBar) {
            this.forceBar.progress += this.progressSpeed * dt / 2;
            if (this.forceBar.progress > 1)
                this.forceBar.progress = 0;
        }
        else {
            if (DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.RUNING) {
                this.forceBar.progress = 0;
            }
        }
    };
    GameLayer.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchstart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchend, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchend, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.TIMER_START, this.onTimerStart);
    };
    GameLayer.prototype.startRecord = function () {
        this.startRecordNode.active = false;
        this.stopRecordNode.active = true;
        SdkManager_1.default.instance.recordingVideoStart();
    };
    GameLayer.prototype.endRecord = function () {
        if (window["tt"]) {
            this.startRecordNode.active = true;
            this.stopRecordNode.active = false;
            SdkManager_1.default.instance.recordingVideoEnd();
        }
    };
    GameLayer.prototype.normal = function (icon) {
        icon.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon));
        // icon.node.getChildByName("icon").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon.node.getChildByName("icon").getComponent(cc.Sprite)));
        // icon.node.getChildByName("video").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', icon.node.getChildByName("video").getComponent(cc.Sprite)));
    };
    GameLayer.prototype.grey = function (icon) {
        icon.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon));
        // icon.node.getChildByName("icon").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon.node.getChildByName("icon").getComponent(cc.Sprite)));
        // icon.node.getChildByName("video").getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', icon.node.getChildByName("video").getComponent(cc.Sprite)));
    };
    __decorate([
        property(cc.ProgressBar)
    ], GameLayer.prototype, "forceBar", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameLayer.prototype, "powerBar", void 0);
    __decorate([
        property(cc.Label)
    ], GameLayer.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "propsNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "tipsNode", void 0);
    __decorate([
        property(cc.Label)
    ], GameLayer.prototype, "teamLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "passBall", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "redCard", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "yellowCard", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "drink", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameLayer.prototype, "extraTime", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(Baselayer_1.default));
exports.default = GameLayer;

cc._RF.pop();