
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/layer/GameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXllclxcR2FtZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixrQ0FBNkI7QUFDN0IsZ0NBQStHO0FBQy9HLHdEQUFtRDtBQUNuRCxzREFBaUQ7QUFDakQsd0RBQW1EO0FBQ25ELG9EQUErQztBQUMvQyxvQ0FBK0I7QUFDL0Isb0RBQW1EO0FBRW5ELHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQW1vQkM7UUFob0JHLGNBQVEsR0FBbUIsSUFBSSxDQUFBO1FBRS9CLGNBQVEsR0FBbUIsSUFBSSxDQUFBO1FBRS9CLGdCQUFVLEdBQWEsSUFBSSxDQUFBO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBQzFCLE9BQU87UUFDUCxjQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFBO1FBQ3pCLElBQUk7UUFDSixnQkFBVSxHQUFZLEtBQUssQ0FBQTtRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFBO1FBQzFCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFDNUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsY0FBUSxHQUFjLElBQUksQ0FBQTtRQUUxQixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBRTVCLFdBQUssR0FBYyxJQUFJLENBQUE7UUFFdkIsZUFBUyxHQUFjLElB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USxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNPO0lBYTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDTztJQWxDVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbW9CN0I7SUFBRCxnQkFBQztDQW5vQkQsQUFtb0JDLENBbm9Cc0MsbUJBQVMsR0Ftb0IvQztrQkFub0JvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmltcG9ydCBFbmVteSBmcm9tIFwiLi4vRW5lbXlcIjtcclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0dBTUVfRVZFTlQsIEVOVU1fR0FNRV9TVEFUVVMsIEVOVU1fUExBWUVSX1NUQVRVUywgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Nka01hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbSB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgQmFzZUxheWVyIGZyb20gXCIuL0Jhc2VsYXllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMYXllciBleHRlbmRzIEJhc2VMYXllciB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgZm9yY2VCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcG93ZXJCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb3BzTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlwc05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0ZWFtTGFiZWw6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgLy8g54K55oyJ54q25oCBXHJcbiAgICBob2xkRmxhZzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcm9ncmVzc1NwZWVkOiBudW1iZXIgPSAzXHJcbiAgICAvL+aKgOiDvVxyXG4gICAgaXNQYXNzQmFsbDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBpc1JlZENhcmQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNZZWxsb3dDYXJkOiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzRHJpbms6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNFeHRyYVRpbWU6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgc3RhcnRSZWNvcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0b3BSZWNvcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwYXNzQmFsbDogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHJlZENhcmQ6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICB5ZWxsb3dDYXJkOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZHJpbms6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBleHRyYVRpbWU6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIHBhc3NCYWxsT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICByZWRDYXJkT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICB5ZWxsb3dDYXJkT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBkcmlua09uY2U6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgZXh0cmFUaW1lT25jZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwYXNzQmFsbENvdW50OiBudW1iZXIgPSAwXHJcbiAgICByZWRDYXJkQ291bnQ6IG51bWJlciA9IDBcclxuICAgIHllbGxvd0NhcmRDb3VudDogbnVtYmVyID0gMFxyXG4gICAgZHJpbmtDb3VudDogbnVtYmVyID0gMFxyXG4gICAgZXh0cmFUaW1lQ291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnRSZWNvcmROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdQYW5lbCcpLmdldENoaWxkQnlOYW1lKCdjYW1yZWFfYnRuJyk7XHJcbiAgICAgICAgdGhpcy5zdGFydFJlY29yZE5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UmVjb3JkKClcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RvcFJlY29yZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BhbmVsJykuZ2V0Q2hpbGRCeU5hbWUoJ2NhbXJlYV9zb3RwX2J0bicpXHJcbiAgICAgICAgdGhpcy5zdG9wUmVjb3JkTm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kUmVjb3JkKCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBpZiAoIXdpbmRvd1tcInR0XCJdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRSZWNvcmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BSZWNvcmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hzdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hlbmQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuVElNRVJfU1RBUlQsIHRoaXMub25UaW1lclN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vbihFTlVNX0dBTUVfRVZFTlQuVElNRVJfU1RPUCwgdGhpcy5vblRpbWVyU3RvcCwgdGhpcylcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuR0FNRV9SRVNUQVJUKVxyXG4gICAgICAgIC8vIOWPlua2iOaKgOiDvemAieaLqVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGFzc0JhbGwpIHRoaXMuaXNQYXNzQmFsbCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWRDYXJkKSB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNZZWxsb3dDYXJkKSB0aGlzLmlzWWVsbG93Q2FyZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmluaykgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5pc0V4dHJhVGltZSkgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBvblNldHRpbmdDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5TRVRUSU5HKVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5SRU5ET1JfSE9NRV9CVE4sIHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6+572u5oqA6IO954K5dWlcclxuICAgIHNldFByb3BOdW0oKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgocHJvcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbnVtcyA9IHByb3AuZ2V0Q2hpbGRCeU5hbWUoJ051bXMnKVxyXG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IHByb3AuZ2V0Q2hpbGRCeU5hbWUoJ3ZpZGVvJylcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1tpbmRleF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBudW1zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW0gPSBudW0gKyB0aGlzLnJlZENhcmRDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG51bXMuZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtudW19YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChpbmRleCA9PSAwKSAmJiAodGhpcy5wYXNzQmFsbENvdW50ID4gMCB8fCB0aGlzLnBhc3NCYWxsT25jZSkpIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbnVtcy5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke3RoaXMucGFzc0JhbGxDb3VudH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGluZGV4ID09IDEpICYmICh0aGlzLnJlZENhcmRDb3VudCA+IDAgfHwgdGhpcy5yZWRDYXJkT25jZSkpIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbnVtcy5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke3RoaXMucmVkQ2FyZENvdW50fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgoaW5kZXggPT0gMikgJiYgKHRoaXMueWVsbG93Q2FyZENvdW50ID4gMCB8fCB0aGlzLnllbGxvd0NhcmRPbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBudW1zLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy55ZWxsb3dDYXJkQ291bnR9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChpbmRleCA9PSAzKSAmJiAodGhpcy5kcmlua0NvdW50ID4gMCB8fCB0aGlzLmRyaW5rT25jZSkpIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbnVtcy5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke3RoaXMuZHJpbmtDb3VudH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGluZGV4ID09IDQpICYmICh0aGlzLmV4dHJhVGltZUNvdW50ID4gMCB8fCB0aGlzLmV4dHJhVGltZU9uY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG51bXMuZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHt0aGlzLmV4dHJhVGltZUNvdW50fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG51bXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZWFtTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy50ZWFtTGFiZWwuc3RyaW5nID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudERhdGFbJ2luZm8nXS50ZWFtXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG93ZXJCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlckJhci5wcm9ncmVzcyA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGlwc05vZGUoc3RhdHVzOiBib29sZWFuLCBzdHlsZUluZGV4OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy50aXBzTm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3R5bGUnKS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHN0eWxlSW5kZXggPT09IGluZGV4ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLmFjdGl2ZSA9IHN0YXR1c1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmAiemYn+WPi+S8oOeQg1xyXG4gICAgb25Qcm9wUGFzc0JhbGwoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1swXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3NCYWxsQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDohJrkuIvmoYbliqjnlLtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmJsdWVzLmZvckVhY2goYmx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsdWUuc3RhdHVzICE9IEVOVU1fUExBWUVSX1NUQVRVUy5SRUFEWSkgYmx1ZS5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKHRydWUsIDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzWWVsbG93Q2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHJpbmsgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXNzQmFsbE9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyZXkodGhpcy5wYXNzQmFsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMucGFzc0JhbGxPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnZpZGVvQWRTaG93KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5oiQ5Yqf5Zue6LCDJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMF0gKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc0JhbGxDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzQmFsbE9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6ISa5LiL5qGG5Yqo55S7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmJsdWVzLmZvckVhY2goYmx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmx1ZS5zdGF0dXMgIT0gRU5VTV9QTEFZRVJfU1RBVFVTLlJFQURZKSBibHVlLnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKHRydWUsIDApXHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXNzQmFsbCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzWWVsbG93Q2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNFeHRyYVRpbWUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzQmFsbE9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLnBhc3NCYWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDnuqLniYznvZrkuIvkuIDlkI3pmLLlrojlkZhcclxuICAgIG9uUHJvcFJlZENhcmQoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1sxXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZENhcmRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGlwc05vZGUodHJ1ZSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQYXNzQmFsbCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIOWFiOWHj+mAn+i/kOWKqOW+hemAieaLqVxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVkcy5mb3JFYWNoKHJlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAvIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZC5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWRDYXJkT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLnJlZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLnJlZENhcmRPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnZpZGVvQWRTaG93KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5oiQ5Yqf5Zue6LCDJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMV0gKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkQ2FyZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZENhcmRPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5pyJ6K+vJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGlwc05vZGUodHJ1ZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5pc1Bhc3NCYWxsID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIOWFiOWHj+mAn+i/kOWKqOW+hemAieaLqVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yZWRzLmZvckVhY2gocmVkID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZC5zZXRTcGVlZChyZWQuc3BlZWQgLyAxMClcclxuICAgICAgICAgICAgICAgIHJlZC5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVkQ2FyZE9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLnJlZENhcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOm7hOeJjOmZjeS9juS4gOWQjemYsuWuiOWRmOmAn+W6plxyXG4gICAgb25Qcm9wWWVsbG93Q2FyZCgpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzICE9IEVOVU1fR0FNRV9TVEFUVVMuUlVOSU5HKSByZXR1cm5cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2tpbGxOdW1zWzJdIDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMueWVsbG93Q2FyZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCAyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Bhc3NCYWxsID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWRDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFeHRyYVRpbWUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8g5YWI6ZmN6YCf6L+Q5YqoXHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yZWRzLmZvckVhY2gocmVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWQuc2V0U3BlZWQocmVkLnNwZWVkIC8gMTApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnllbGxvd0NhcmRPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmV5KHRoaXMueWVsbG93Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMueWVsbG93Q2FyZE9uY2UpIHtcclxuICAgICAgICAgICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudmlkZW9BZFNob3coKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmiJDlip/lm57osIMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1syXSArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWxsb3dDYXJkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BOdW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVsbG93Q2FyZE9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCAyKVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzRHJpbmsgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gZmFsc2VcclxuICAgICAgICAgICAgLy8g5YWI6ZmN6YCf6L+Q5YqoXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAvIDEwKVxyXG4gICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy55ZWxsb3dDYXJkT25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmV5KHRoaXMueWVsbG93Q2FyZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6aWu5ZOB6K6p6IO96YeP5oyB57utM+WbnuWQiFxyXG4gICAgb25Qcm9wRHJpbmsoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1szXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyaW5rQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKHRydWUsIDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1llbGxvd0NhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcmlua09uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyZXkodGhpcy5kcmluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZHJpbmtPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnZpZGVvQWRTaG93KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR5oiQ5Yqf5Zue6LCDJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbM10gKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJpbmtDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmlua09uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCAzKVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gZmFsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJpbmtPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyZXkodGhpcy5kcmluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yqg5pe26K6p5pe26Ze05aKe5YqgMzBzXHJcbiAgICBvblByb3BFeHRyYVRpbWUoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyAhPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1s0XSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhVGltZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCA0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Bhc3NCYWxsID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWRDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXh0cmFUaW1lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JleSh0aGlzLmV4dHJhVGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuZXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS52aWRlb0FkU2hvdygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+a/gOWKseinhumikeaIkOWKn+WbnuiwgycpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2tpbGxOdW1zWzRdICs9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhVGltZUNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhVGltZU9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHmnInor68nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZSh0cnVlLCA0KVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0V4dHJhVGltZSA9IHRydWVcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmV5KHRoaXMuZXh0cmFUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByb3BDYW5jZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXNzQmFsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyDlj5bmtojmoYZcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmx1ZXMuZm9yRWFjaChibHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGJsdWUuc2V0Q2lyY2xlQWN0aXZlKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBuZXh0Qmx1ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldEJsdWVOZXh0KClcclxuICAgICAgICAgICAgaWYgKG5leHRCbHVlKSBuZXh0Qmx1ZS5zZXRDaXJjbGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWRDYXJkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWRDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgLy8g5oGi5aSN6YCf5bqmXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNZZWxsb3dDYXJkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgLy8g5oGi5aSN6YCf5bqmXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJlZHMuZm9yRWFjaChyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmluaykgdGhpcy5pc0RyaW5rID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5pc0V4dHJhVGltZSkgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVyU3RhcnQoaXNFeHRyYVRpbWVPbmNlID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlY29yZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhc3NCYWxsT25jZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVkQ2FyZE9uY2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnllbGxvd0NhcmRPbmNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmlua09uY2UgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWlzRXh0cmFUaW1lT25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhVGltZU9uY2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub3JtYWwodGhpcy5wYXNzQmFsbCk7XHJcbiAgICAgICAgdGhpcy5ub3JtYWwodGhpcy5yZWRDYXJkKTtcclxuICAgICAgICB0aGlzLm5vcm1hbCh0aGlzLnllbGxvd0NhcmQpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsKHRoaXMuZHJpbmspO1xyXG4gICAgICAgIHRoaXMubm9ybWFsKHRoaXMuZXh0cmFUaW1lKTtcclxuICAgICAgICB0aGlzLnBhc3NCYWxsQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMucmVkQ2FyZENvdW50ID0gMTtcclxuICAgICAgICB0aGlzLnllbGxvd0NhcmRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmlua0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmV4dHJhVGltZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnNldFByb3BOdW0oKTtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXJ9YFxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPT0gRU5VTV9HQU1FX1NUQVRVUy5XSU5cclxuICAgICAgICAgICAgICAgIHx8IERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9PSBFTlVNX0dBTUVfU1RBVFVTLkxPU0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnRpbWVyIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI5oqA6IO96YCJ5oupXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Bhc3NCYWxsKSB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWRDYXJkKSB0aGlzLmlzUmVkQ2FyZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1llbGxvd0NhcmQpIHRoaXMuaXNZZWxsb3dDYXJkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRHJpbmspIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4dHJhVGltZSkgdGhpcy5pc0V4dHJhVGltZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgIT0gRU5VTV9HQU1FX1NUQVRVUy5XSU4pIHtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2UuZW1pdChFTlVNX0dBTUVfRVZFTlQuR0FNRV9MT1NFLCAn5pe26Ze05YiwJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXIgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU1BFTEwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXItLVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UudGltZXJ9YFxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25UaW1lclN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9ICcnXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvZ3Jlc3NTcGVlZCA9IGdldFJhbmRvbSgyLCA1KVxyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgIT0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkcgJiYgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID09IEVOVU1fR0FNRV9TVEFUVVMuU0hPT1RJTkcpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmlzUGFzc0JhbGwgfHwgdGhpcy5pc1JlZENhcmQgfHwgdGhpcy5pc1llbGxvd0NhcmQgfHwgdGhpcy5pc0RyaW5rIHx8IHRoaXMuaXNFeHRyYVRpbWUpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaG9sZEZsYWcgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaGVuZChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBlLmdldExvY2F0aW9uKClcclxuICAgICAgICAvLyDkvKDnkINcclxuICAgICAgICBpZiAodGhpcy5pc1Bhc3NCYWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBhc3NQbGF5ZXIobG9jYXRpb24ueCwgbG9jYXRpb24ueSlcclxuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI5oqA6IO9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFzc0JhbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOahhlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmx1ZXMuZm9yRWFjaChibHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBibHVlLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3NCYWxsQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgICAgICAvLyDlhYjovazlkJFcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Qmx1ZVJlYWR5KClcclxuICAgICAgICAgICAgICAgIHJlYWR5LnR1cm5Ubyh0YXJnZXQueCwgdGFyZ2V0LnkpXHJcbiAgICAgICAgICAgICAgICAvLyDkvKDnkINcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5QTEFZRVJfU0hPT1QsIHsgcHJvZ3Jlc3M6IDEsIG5leHQ6IHRhcmdldC5nZXRDb21wb25lbnQoUGxheWVyKSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnuqLniYxcclxuICAgICAgICBpZiAodGhpcy5pc1JlZENhcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Q2FyZEVuZW15KGxvY2F0aW9uLngsIGxvY2F0aW9uLnkpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOaKgOiDvVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlZENhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIOaBouWkjemAn+W6plxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVkcy5mb3JFYWNoKHJlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnV1aWQgIT0gcmVkLm5vZGUudXVpZCkgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZC5zZXRTcGVlZChyZWQuc3BlZWQgKiAxMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMV0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZENhcmRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkxBVUdIKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudChFbmVteSkuc2V0U3BlZWQoMClcclxuICAgICAgICAgICAgICAgIHRhcmdldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvUG9zID0gdGhpcy50aW1lckxhYmVsLm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0KS50bygwLjIsIHsgcG9zaXRpb246IGNjLnYzKHRvUG9zLngsIHRvUG9zLnksIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpu4TniYxcclxuICAgICAgICBpZiAodGhpcy5pc1llbGxvd0NhcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0Q2FyZEVuZW15KGxvY2F0aW9uLngsIGxvY2F0aW9uLnkpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOaKgOiDvVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1llbGxvd0NhcmQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBzTm9kZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIOaBouWkjemAn+W6plxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVkcy5mb3JFYWNoKHJlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnV1aWQgIT0gcmVkLm5vZGUudXVpZCkgcmVkLnNldFNwZWVkKHJlZC5zcGVlZCAqIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZC5zZXRTcGVlZChyZWQuc3BlZWQgKiAxMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnNldENpcmNsZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5za2lsbE51bXNbMl0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllbGxvd0NhcmRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wTnVtKClcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLlNMT1dET1dOKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDppa7lk4FcclxuICAgICAgICBpZiAodGhpcy5pc0RyaW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmluayA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGlwc05vZGUoZmFsc2UpXHJcbiAgICAgICAgICAgIC8vIOaJo+aKgOiDveeCuVxyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2tpbGxOdW1zWzNdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY3V0U2tpbGxOdW1zKDMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyaW5rQ291bnQtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb3BOdW0oKVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckVmZmVjdExvb3AgPSAyXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ291bnQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5wb3dlckNvdW50VGFyZ2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG93ZXJCYXIoKVxyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5TS0lMTClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWKoOaXtlxyXG4gICAgICAgIGlmICh0aGlzLmlzRXh0cmFUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFeHRyYVRpbWUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNldFRpcHNOb2RlKGZhbHNlKVxyXG4gICAgICAgICAgICAvLyDmiaPmioDog73ngrlcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLnNraWxsTnVtc1s0XSA+IDApIHtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmN1dFNraWxsTnVtcyg0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYVRpbWVDb3VudC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcE51bSgpXHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLlRJTUVSKVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS50aW1lciArPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5leHRyYVRpbWVcclxuICAgICAgICAgICAgdGhpcy5vblRpbWVyU3RhcnQodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9sZEZsYWcgPSBmYWxzZVxyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5lbWl0KEVOVU1fR0FNRV9FVkVOVC5QTEFZRVJfU0hPT1QsIHsgcHJvZ3Jlc3M6IHRoaXMuZm9yY2VCYXIucHJvZ3Jlc3MgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ob2xkRmxhZyAmJiB0aGlzLmZvcmNlQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VCYXIucHJvZ3Jlc3MgKz0gdGhpcy5wcm9ncmVzc1NwZWVkICogZHQgLyAyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcmNlQmFyLnByb2dyZXNzID4gMSkgdGhpcy5mb3JjZUJhci5wcm9ncmVzcyA9IDBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID09IEVOVU1fR0FNRV9TVEFUVVMuUlVOSU5HKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlQmFyLnByb2dyZXNzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hlbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hlbmQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5pbnN0YW5jZS5vZmYoRU5VTV9HQU1FX0VWRU5ULlRJTUVSX1NUQVJULCB0aGlzLm9uVGltZXJTdGFydClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFJlY29yZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UmVjb3JkTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0b3BSZWNvcmROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5yZWNvcmRpbmdWaWRlb1N0YXJ0KClcclxuICAgIH1cclxuICAgIGVuZFJlY29yZCgpIHtcclxuICAgICAgICBpZiAod2luZG93W1widHRcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlY29yZE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wUmVjb3JkTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5yZWNvcmRpbmdWaWRlb0VuZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBub3JtYWwoaWNvbjogY2MuU3ByaXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWNvbi5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIGljb24pKTtcclxuICAgICAgICAvLyBpY29uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgICAgIC8vIGljb24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ3JleShpY29uOiBjYy5TcHJpdGUpOiB2b2lkIHtcclxuICAgICAgICBpY29uLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBpY29uKSk7XHJcbiAgICAgICAgLy8gaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgaWNvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgICAgIC8vIGljb24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBpY29uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==