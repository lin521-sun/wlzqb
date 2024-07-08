
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/SdkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e65f5PAdAxIfKGNcYyplzVz', 'SdkManager');
// script/manager/SdkManager.ts

"use strict";
/**
 * 广告sdk & 网络控制
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Toast = require('../Toast.js');
var SdkManager = /** @class */ (function () {
    function SdkManager() {
        this.isdebug = false; //是测试模式  该模式 无广告 无网络
        this.videoRecordingState = 0;
        this.video_recorder = null;
        this.videoStartTime = null;
        this.videoPath = null;
        this.videoIsExist = 0; //视频是否存在 默认存在
        this.recorderTime = 120; //视频录制时间
        this.videoAd = null; //激励视频
        this.chaPingErr = false; //插屏报错（触发频繁限制等）
        this.chaPing = null;
        this.bannerAd = null; //横屏广告
        this.videoCallBack = null; //激励视频成功回调
        this.videoFailCallBack = null; //激励视频失败回调
        this.isshowbanner = false;
        //platformSdk:any = tt //字节跳动sdk
        this.tt_info = {
            gamename: "字节游戏名称",
            shareTitle: '迷你世界杯，好玩又刺激',
            appId: 'tt6790112df8a1500202',
            videoId: '771b782kleif62q61h',
            chapingId: 'chapingid',
            bannerId: "bannerid",
            templateId: ['', '', '', ''],
            videoTopics: ['', ''],
            appSecret: '',
        };
        this.ks_info = {
            gamename: "",
            shareTitle: '',
            appId: '',
            bannerId: "",
            videoId: '',
            chapingId: '',
            templateId: ['', '', '', ''],
            videoTopics: ['', ''],
            appSecret: '',
        };
        this.wx_info = {
            gamename: "微信游戏名称",
            shareTitle: '迷你世界杯，好玩又刺激',
            appId: 'wx338b3042ae221abb',
            bannerId: "bannerid",
            videoId: 'videoid',
            videoId2: 'videoid',
            chapingId: 'chapingid',
            gezi: 'geziid',
            NativeAd: {
                juzhen: 'juzhenid',
                duogezi: 'duogeziid',
                dangezi: 'dangeziid'
            },
            templateId: ['', '', '', ''],
            videoTopics: ['', '']
        };
        this.url = 'https://www.xxxxx.top/sgame';
        this.web_url = ' https://www.xxxxx.top/pv';
    }
    Object.defineProperty(SdkManager, "instance", {
        get: function () {
            if (null == this._instance) {
                this._instance = new SdkManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SdkManager.prototype, "platform", {
        get: function () {
            if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
                this._platform = 'tt';
                return this._platform;
            }
            else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                this._platform = 'wx';
                return this._platform;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SdkManager.prototype, "plaform", {
        set: function (str) {
            this._platform = str;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取平台 类
     */
    SdkManager.prototype.getPlatformClass = function () {
        var p_class = null;
        switch (this.platform) {
            case 'tt':
                //@ts-ignore
                p_class = tt;
                break;
            case 'op':
                //@ts-ignore
                p_class = qg;
                break;
            case 'wx':
                //@ts-ignore
                p_class = wx;
                break;
            case 'ks':
                //@ts-ignore
                p_class = ks;
                break;
        }
        return p_class;
    };
    /**
     * 获取分享标题
     */
    SdkManager.prototype.getShareTitle = function () {
        var title = '';
        switch (this.platform) {
            case 'tt':
                title = this.tt_info.shareTitle;
                break;
            case 'ks':
                title = this.ks_info.shareTitle;
                break;
            case 'wx':
                title = this.wx_info.shareTitle;
                break;
        }
        return title;
    };
    /**
     * 获取名字
     */
    SdkManager.prototype.getName = function () {
        var name = '';
        switch (this.platform) {
            case 'tt':
                name = this.tt_info.gamename;
                break;
            case 'ks':
                name = this.ks_info.gamename;
                break;
            case 'wx':
                name = this.wx_info.gamename;
                break;
        }
        return name;
    };
    /**
     * 获取appid
     */
    SdkManager.prototype.getAppId = function () {
        var appid = '';
        switch (this.platform) {
            case 'tt':
                appid = this.tt_info.appId;
                break;
            case 'ks':
                appid = this.ks_info.appId;
                break;
            case 'wx':
                appid = this.wx_info.appId;
                break;
        }
        return appid;
    };
    /**
     * 获取AppSecret
     */
    SdkManager.prototype.getAppSecret = function () {
        var appSecret = '';
        switch (this.platform) {
            case 'tt':
                appSecret = this.tt_info.appSecret;
                break;
            case 'ks':
                break;
        }
        return appSecret;
    };
    /**
     * 获取bannerid
     */
    SdkManager.prototype.getBannerId = function () {
        var bannerID = '';
        switch (this.platform) {
            case 'tt':
                bannerID = this.tt_info.bannerId;
                break;
            case 'ks':
                bannerID = this.ks_info.bannerId;
                break;
            case 'wx':
                bannerID = this.wx_info.bannerId;
                break;
        }
        return bannerID;
    };
    /**
     * 获取videoid
     */
    SdkManager.prototype.getVideoId = function () {
        var videoId = '';
        switch (this.platform) {
            case 'tt':
                videoId = this.tt_info.videoId;
                break;
            case 'ks':
                videoId = this.ks_info.videoId;
                break;
            case 'wx':
                videoId = this.wx_info.videoId;
                break;
        }
        return videoId;
    };
    SdkManager.prototype.getVideoId2 = function () {
        if (this.platform == 'wx') {
            var videoId = '';
            videoId = this.wx_info.videoId2;
            return videoId;
        }
    };
    /**
     * 获取id
     * @param type
     */
    SdkManager.prototype.getNativeAd = function (type) {
        var id = '';
        switch (this.platform) {
            case 'tt':
                break;
            case 'wx':
                if (type == 0) {
                    id = this.wx_info.NativeAd.juzhen;
                }
                else if (type == 1) {
                    id = this.wx_info.NativeAd.duogezi;
                }
                else if (type == 2) {
                    id = this.wx_info.NativeAd.dangezi;
                    console.log('广告id', id);
                }
                break;
        }
        return id;
    };
    /**
     * 获取插屏广告id
     */
    SdkManager.prototype.getChaPingId = function () {
        var chapingId = '';
        switch (this.platform) {
            case 'tt':
                chapingId = this.tt_info.chapingId;
                break;
            case 'ks':
                chapingId = this.ks_info.chapingId;
                break;
            case 'wx':
                chapingId = this.wx_info.chapingId;
                break;
        }
        return chapingId;
    };
    /**
     * 获取分享审核id
     */
    SdkManager.prototype.getTemplateId = function () {
        var templateId = '';
        var id_lenth = this.tt_info.templateId.length;
        var randIndex = this.getRangeRandom(0, id_lenth);
        switch (this.platform) {
            case 'tt':
                templateId = this.tt_info.templateId[randIndex];
                break;
            case 'wx':
                templateId = this.wx_info.templateId[randIndex];
                break;
        }
        return templateId;
    };
    /**
     * 游戏分享
     */
    SdkManager.prototype.gameShare = function (callBack) {
        if (this.isdebug)
            return callBack();
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            //console.log('游戏分享')
            var title = this.getShareTitle();
            var templateId = this.getTemplateId();
            this.getPlatformClass().shareAppMessage({
                title: title,
                templateId: templateId,
                query: "",
                success: function () {
                    //console.log("分享成功");
                    callBack();
                },
                fail: function (e) {
                    //console.log("分享失败");
                }
            });
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 分享到好友
     * @param callback
     */
    SdkManager.prototype.shareGameToFriend = function (callback, note) {
        if (this.isdebug)
            return callback();
        var notestr = '你的好友邀请你一起战斗';
        if (note)
            notestr = note;
        var self = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var title = this.getName();
            this.getPlatformClass().shareAppMessage({
                channel: "invite",
                title: title,
                desc: notestr,
                imageUrl: "",
                query: "",
                success: function () {
                    //console.log("分享成功");
                },
                fail: function (e) {
                    //console.log("分享失败");
                },
            });
        }
    };
    /**
     *  banner 广告显示
     */
    SdkManager.prototype.bannerAdShow = function () {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            if (self.bannerAd == null) {
                var winSize_1 = this.getPlatformClass().getSystemInfoSync();
                var bannerWidth = winSize_1.windowWidth;
                var bannerHeight = 100;
                // // 广告
                var bannerID = this.getBannerId();
                self.bannerAd = this.getPlatformClass().createBannerAd({
                    adUnitId: bannerID,
                    style: {
                        left: (winSize_1.windowWidth - bannerWidth) / 2,
                        top: winSize_1.windowHeight - bannerHeight,
                        width: bannerWidth,
                        height: bannerHeight,
                    }
                });
                self.bannerAd.onResize(function (res) {
                    self.bannerAd.style.left = (winSize_1.windowWidth - res.width) / 2;
                    self.bannerAd.style.top = winSize_1.windowHeight - res.height;
                });
                self.bannerAd.onError(function (res) {
                    //console.log(res);
                });
            }
            if (self.bannerAd != null) {
                self.bannerAd.show();
            }
        }
        else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            if (self.bannerAd == null) {
                self.isshowbanner = false;
                var winSize_2 = this.getPlatformClass().getSystemInfoSync();
                var bannerWidth = winSize_2.windowWidth;
                var bannerHeight = 100;
                // // 广告
                var bannerID = this.getBannerId();
                self.bannerAd = this.getPlatformClass().createBannerAd({
                    adUnitId: bannerID,
                    adIntervals: 30,
                    style: {
                        left: (winSize_2.windowWidth - bannerWidth) / 2,
                        top: winSize_2.windowHeight - bannerHeight,
                        width: bannerWidth,
                        height: bannerHeight,
                    }
                });
                self.bannerAd.onResize(function (res) {
                    self.bannerAd.style.left = (winSize_2.windowWidth - res.width) / 2;
                    self.bannerAd.style.top = winSize_2.windowHeight - res.height;
                });
                self.bannerAd.onError(function (res) {
                    console.log('banner失败', res);
                    self.bannerAd = null;
                    //self.bannerAds_Load()
                });
                self.bannerAd.onLoad(function () {
                    console.log('banner 广告加载成功');
                    //gameConfig.isshowbanner = true
                });
            }
            if (self.bannerAd != null) {
                self.bannerAd.show();
            }
        }
    };
    /**
     * banner 广告隐藏
     */
    SdkManager.prototype.bannerAdHide = function () {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools' || sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            if (self.bannerAd != null) {
                self.bannerAd.hide();
            }
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 插屏广告加载
     */
    SdkManager.prototype.chaPingAdLoad = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            var chapingId = this.getChaPingId();
            this.chaPing = this.getPlatformClass().createInterstitialAd({ adUnitId: chapingId });
            this.chaPing.onError(function (err) {
                console.log('插屏广告拉取失败', err);
                //gameConfig.chaPing = wx.createInterstitialAd({ adUnitId: chapingId })
            });
        }
    };
    /**
     * 插屏广告显示
     */
    SdkManager.prototype.chaPingAdShow = function (callback) {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            if (self.chaPingErr == true) {
                if (callback) {
                    this.showToast('资源未准备好...');
                    return callback();
                }
            }
            self.chaPingErr = true;
            setTimeout(function () {
                self.chaPingErr = false;
            }, 45000);
            self.chaPing.show()
                .then(function () {
                if (callback) {
                    callback();
                }
            })
                .catch(function (err) {
                console.error(err);
                self.showToast('资源未准备好...');
                console.log('展示广告失败');
                if (callback) {
                    callback();
                }
                //gameConfig.chaPing = wx.createInterstitialAd({ adUnitId: this.getChaPingId() })
            });
        }
        else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('插屏开发工具不操作');
            if (self.chaPingErr == true)
                return;
            self.chaPingErr = true;
            setTimeout(function () {
                self.chaPingErr = false;
            }, 60000);
            var chapingId = this.getChaPingId();
            if (this.getPlatformClass().createInterstitialAd) {
                var interstitialAd_1 = this.getPlatformClass().createInterstitialAd({
                    adUnitId: chapingId
                });
                interstitialAd_1
                    .load()
                    .then(function () {
                    interstitialAd_1.show();
                })
                    .catch(function (err) {
                    console.log(err);
                    setTimeout(function () {
                        interstitialAd_1.load().then(function () { interstitialAd_1.show; });
                    }, 5);
                });
                interstitialAd_1.onClose(function () {
                    if (interstitialAd_1) {
                        interstitialAd_1.destroy();
                    }
                });
            }
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 激励广告加载
     */
    SdkManager.prototype.videoAdLoad = function () {
        if (this.isdebug)
            return;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            var videoId = this.getVideoId2();
            self.videoAd = this.getPlatformClass().createRewardedVideoAd({
                adUnitId: videoId,
            });
            self.videoAd.onError(function (res) {
                console.log('激励视频错误', res);
            });
            self.videoAd.load();
            var endCallBack = function (res) {
                if (res.isEnded == true) {
                    if (self.videoCallBack != null) {
                        console.log('获取奖励');
                        self.videoCallBack();
                    }
                    if (this._type != -1) {
                        self.showToast('已获得');
                    }
                }
                else {
                    if (self.videoFailCallBack != null)
                        self.videoFailCallBack();
                }
                self.isvideoend = true;
                setTimeout(function () {
                    self.checkVideo = false;
                }, 60000);
            };
            self.videoAd.onClose(endCallBack); //绑定结束回调
        }
        else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            var videoId = this.getVideoId();
            this.videoAd = this.getPlatformClass().createRewardedVideoAd({
                adUnitId: videoId,
            });
            this.videoAd.onError(function (res) {
                //console.log('激励视频错误',res)
            });
            this.videoAd.load();
            var endCallBack = function (res) {
                if (res.isEnded == true) {
                    if (self.videoCallBack != null) {
                        //console.log('获取奖励')
                        self.videoCallBack();
                    }
                    if (this._type != -1) {
                        self.showToast('已获得');
                    }
                }
                else {
                    if (self.videoFailCallBack != null)
                        self.videoFailCallBack();
                }
                self.isvideoend = true;
            };
            self.videoAd.onClose(endCallBack); //绑定结束回调
        }
        else if (this.platform == 'ks') {
        }
    };
    /**
     * 展示激励视频
     * 参数1 成功回调
     * 参数2 失败回调 可以省略
     */
    SdkManager.prototype.videoAdShow = function (success, faile, type) {
        if (this.isdebug) {
            if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
                this.showToast('你作弊了!');
            }
            else {
                Toast('你作弊了!');
            }
            return success();
        }
        var self = this;
        if (this.checkVideo == true)
            return this.showToast('勿频繁点击');
        setTimeout(function () {
            self.checkVideo = false;
        }, 1000);
        this.videoCallBack = success;
        this.videoFailCallBack = faile;
        this._type = type;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) { //微信
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.brand == 'devtools')
                return console.log('开发工具不操作');
            this._type = type;
            if (self.videoAd == null || self.videoAd == undefined) {
                return this.videoCallBack();
            }
            self.videoAd.onError(function (res) {
                console.log('广告出错监听', res);
            });
            // /**展示 */
            self.videoAd
                .show()
                .then(function () {
            })
                .catch(function (err) {
                self.showToast('激励视频播放失败');
                console.log('打印激励视频错误', err);
                // 可以手动加载一次
                self.videoAd.load().then(function () {
                    // 加载成功后需要再显示广告
                    return self.videoAd.show();
                });
            });
        }
        else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            this.checkVideo = true;
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return success(), console.log('开发工具不操作');
            if (this.videoAd == null || this.videoAd == undefined) {
                return this.videoCallBack();
            }
            this.videoAd.onError(function (res) {
                //console.log('广告出错监听', res)
            });
            // /**展示 */
            this.videoAd
                .show()
                .then(function () {
            })
                .catch(function (err) {
                self.showToast('激励视频播放失败');
                //console.log('打印激励视频错误', err)
                // 可以手动加载一次
                self.videoAd.load().then(function () {
                    // 加载成功后需要再显示广告
                    return self.videoAd.show();
                });
            });
        }
        else if (this.platform == 'ks') {
        }
        else {
            self.videoCallBack();
        }
    };
    /**
     * 字节
     * 录制视频开始
     */
    SdkManager.prototype.recordingVideoStart = function () {
        if (this.isdebug)
            return;
        var self = this;
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            self.videoRecordingState = 1;
            self.videoIsExist = 0;
            self.video_recorder = this.getPlatformClass().getGameRecorderManager();
            self.videoStartTime = Date.parse(new Date().toString()); //Date.parse(new Date());
            //开始回调
            self.video_recorder.onStart(function (res) {
                console.log('录屏开始');
                //console.log(res);
            });
            //开始
            self.video_recorder.start({
                duration: self.recorderTime,
            });
            //录制结束回调
            self.video_recorder.onStop(function (res) {
                self.videoRecordingState = 2;
                self.videoPath = res.videoPath;
                console.log('录屏结束', self.videoPath);
                // do somethine;
            });
            //录制错误回调
            self.video_recorder.onError(function (res) {
                //console.log("录屏error", res)
            });
        }
    };
    /**
     * 录制视频结束
     */
    SdkManager.prototype.recordingVideoEnd = function () {
        if (this.isdebug)
            return;
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            console.log('录屏结束1');
            //gameConfig.shareVideoTips = 0;
            if (self.video_recorder) {
                var endTime = Date.parse(new Date().toString()); //Date.parse(new Date());
                if ((endTime - self.videoStartTime) / 1000 <= 5) {
                    self.videoIsExist = 1;
                }
                else {
                    self.videoIsExist = 0;
                }
                self.video_recorder.stop();
            }
        }
    };
    /**
     * 录制视频分享
     * 参数1 成功回调方法
     * 参数2 失败回调方法
     */
    SdkManager.prototype.recordingVideoShare = function (callBack, failCallBack) {
        if (this.isdebug)
            return callBack();
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            var sysData = this.getPlatformClass().getSystemInfoSync();
            if (sysData.appName == 'devtools')
                return console.log('开发工具不操作');
            var self = this;
            if (self.videoIsExist == 1) {
                self.showToast('录制时间过短');
                return;
            }
            var result = 200;
            self.videoRecordingState = 3;
            console.log(self.videoPath);
            this.getPlatformClass().shareAppMessage({
                channel: 'video',
                title: '',
                imageUrl: '',
                query: '',
                extra: {
                    videoPath: self.videoPath,
                    videoTopics: self.tt_info.videoTopics,
                    createChallenge: true
                },
                success: function () {
                    self.showToast('分享视频成功');
                    callBack();
                    //self.recording_Video_Start()
                },
                fail: function (e) {
                    result = 201;
                    self.showToast('分享视频失败');
                    //console.log('分享失败', e)
                    failCallBack();
                    //self.recording_Video_Start()
                }
            });
        }
        else {
            callBack();
        }
    };
    //录屏是否存在
    SdkManager.prototype.getVideoIsExist = function () {
        return this.videoIsExist;
    };
    /**
     * 添加桌面
     * @param scb
     * @param fcb
     */
    SdkManager.prototype.addShortcut = function (scb, fcb) {
        this.getPlatformClass().addShortcut({
            success: function () {
                this.showToast("添加桌面成功");
                scb();
            },
            fail: function (err) {
                this.showToast("添加桌面失败");
                fcb();
            },
        });
    };
    /**
     * 提示框
     */
    SdkManager.prototype.showToast = function (str) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            this.getPlatformClass().showToast({
                title: str,
                duration: 1000,
                success: function (res) {
                    //console.log(`${res}`);
                },
                fail: function (res) {
                    //console.log(`showToast调用失败`);
                }
            });
        }
        else {
            // Toast(str)
            console.log(str);
        }
    };
    /**
     * 获取不重复的随机数
     * @param minValue 最小值
     * @param maxValue 最大值
     * @param valueNum 随机个数
     */
    SdkManager.prototype.getRandomValueDif = function (minValue, maxValue, valueNum) {
        // 全部随机数值  
        var allNums = new Array;
        // 判断获取随机数个数  
        var size = valueNum ? (valueNum > maxValue - minValue + 1 ? maxValue - minValue + 1 : valueNum) : 1;
        // 生成随机数值区间数组  
        for (var i = minValue, k = 0; i <= maxValue; i++, k++) {
            allNums[k] = i;
        }
        var arr = [];
        // 随机从数组里面取值
        allNums.sort(function () { return 0.5 - Math.random(); });
        for (var j = 0; j < size; j++) {
            var index = Math.floor(Math.random() * allNums.length);
            arr.push(allNums[index]);
            var tmp = allNums[index];
            allNums[index] = allNums[allNums.length - 1];
            allNums[allNums.length - 1] = tmp;
            allNums.pop();
        }
        return arr;
    };
    /**
     * 获取范围内的随机数
     * @param minValue 最小值
     * @param maxValue 最大值
     */
    SdkManager.prototype.getRangeRandom = function (minValue, maxValue) {
        // 获取数组从第一个开始到指定个数的下标区间  
        return this.getRandomValueDif(minValue, maxValue, 1)[0];
    };
    SdkManager.prototype.vibrateShort = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            this.getPlatformClass().vibrateShort();
        }
    };
    /**
     * 跳转其他小游戏
     */
    SdkManager.prototype.turnToApp = function (appId) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].navigateToMiniProgram({
                appId: appId
            });
        }
        else {
            this.showToast('平台错误');
        }
    };
    // 设置排行榜
    SdkManager.prototype.setRankScore = function (value) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].postMessage({
                event: 'setScore',
                score: value
            });
        }
        else {
            this.showToast('平台错误');
        }
    };
    // 获取好友排行榜
    SdkManager.prototype.getRank = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].postMessage({
                event: 'getRank'
            });
        }
        else {
            this.showToast('平台错误');
        }
    };
    // 被动分享
    SdkManager.prototype.gameSharePassive = function () {
        var _this = this;
        // 监听小程序右上角菜单的「转发」按钮
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            // 显示当前页面的转发按钮
            window['wx'].showShareMenu({
                success: function (res) {
                    // console.log('开启被动转发成功！');
                },
                fail: function (res) {
                    // console.log('开启被动转发失败！');
                }
            });
            // 获取当前棋局oneChess信息，JSON.stringfy()后传入query
            window['wx'].onShareAppMessage(function () {
                return {
                    title: _this.getShareTitle()
                };
            });
        }
    };
    // 主动分享
    SdkManager.prototype.gameShareActive = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            window['wx'].shareAppMessage({
                title: this.getShareTitle()
            });
        }
    };
    SdkManager._instance = null;
    return SdkManager;
}());
exports.default = SdkManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxTZGtNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7QUFFRixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFbEM7SUFBQTtRQUtJLFlBQU8sR0FBRyxLQUFLLENBQUEsQ0FBSSxvQkFBb0I7UUF1QnZDLHdCQUFtQixHQUFPLENBQUMsQ0FBQztRQUM1QixtQkFBYyxHQUFPLElBQUksQ0FBQztRQUMxQixtQkFBYyxHQUFPLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQU8sSUFBSSxDQUFDO1FBQ3JCLGlCQUFZLEdBQU8sQ0FBQyxDQUFDLENBQUEsYUFBYTtRQUNsQyxpQkFBWSxHQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVE7UUFDaEMsWUFBTyxHQUFPLElBQUksQ0FBQyxDQUFDLE1BQU07UUFDMUIsZUFBVSxHQUFPLEtBQUssQ0FBQyxDQUFDLGVBQWU7UUFDdkMsWUFBTyxHQUFPLElBQUksQ0FBQTtRQUNsQixhQUFRLEdBQU8sSUFBSSxDQUFDLENBQUMsTUFBTTtRQUMzQixrQkFBYSxHQUFHLElBQUksQ0FBQSxDQUFDLFVBQVU7UUFDL0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFBLENBQUMsVUFBVTtRQUNuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQTtRQUNwQixnQ0FBZ0M7UUFFaEMsWUFBTyxHQUFPO1lBQ1YsUUFBUSxFQUFDLFFBQVE7WUFDakIsVUFBVSxFQUFDLGFBQWE7WUFDeEIsS0FBSyxFQUFDLHNCQUFzQjtZQUM1QixPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztZQUN6QixXQUFXLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1lBQ25CLFNBQVMsRUFBQyxFQUFFO1NBQ2YsQ0FBQTtRQUVELFlBQU8sR0FBTztZQUNWLFFBQVEsRUFBQyxFQUFFO1lBQ1gsVUFBVSxFQUFDLEVBQUU7WUFDYixLQUFLLEVBQUMsRUFBRTtZQUNSLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztZQUN6QixXQUFXLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1lBQ25CLFNBQVMsRUFBQyxFQUFFO1NBQ2YsQ0FBQTtRQUVELFlBQU8sR0FBTztZQUNWLFFBQVEsRUFBQyxRQUFRO1lBQ2pCLFVBQVUsRUFBQyxhQUFhO1lBQ3hCLEtBQUssRUFBQyxvQkFBb0I7WUFDMUIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsT0FBTyxFQUFDLFNBQVM7WUFDakIsUUFBUSxFQUFDLFNBQVM7WUFDbEIsU0FBUyxFQUFDLFdBQVc7WUFHckIsSUFBSSxFQUFDLFFBQVE7WUFDYixRQUFRLEVBQUM7Z0JBQ0wsTUFBTSxFQUFDLFVBQVU7Z0JBQ2pCLE9BQU8sRUFBQyxXQUFXO2dCQUNuQixPQUFPLEVBQUMsV0FBVzthQUN0QjtZQUNELFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztZQUN6QixXQUFXLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1NBQ3RCLENBQUE7UUFFRCxRQUFHLEdBQVUsNkJBQTZCLENBQUE7UUFDMUMsWUFBTyxHQUFHLDJCQUEyQixDQUFBO0lBdTNCekMsQ0FBQztJQXo4Qkcsc0JBQWtCLHNCQUFRO2FBQTFCO1lBQ0ksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksZ0NBQVE7YUFBWjtZQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO2dCQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7YUFDeEI7aUJBQUssSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTthQUN4QjtRQUNMLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksK0JBQU87YUFBWCxVQUFZLEdBQVc7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7UUFDeEIsQ0FBQzs7O09BQUE7SUFnRUQ7O09BRUc7SUFDRixxQ0FBZ0IsR0FBaEI7UUFDRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDbEIsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxZQUFZO2dCQUNaLE9BQU8sR0FBRyxFQUFFLENBQUE7Z0JBQ2hCLE1BQUs7WUFDTCxLQUFLLElBQUk7Z0JBQ0wsWUFBWTtnQkFDWixPQUFPLEdBQUcsRUFBRSxDQUFBO2dCQUNoQixNQUFLO1lBQ0wsS0FBSyxJQUFJO2dCQUNMLFlBQVk7Z0JBQ1osT0FBTyxHQUFHLEVBQUUsQ0FBQTtnQkFDaEIsTUFBSztZQUNMLEtBQUssSUFBSTtnQkFDTCxZQUFZO2dCQUNaLE9BQU8sR0FBRyxFQUFFLENBQUE7Z0JBQ2hCLE1BQUs7U0FDUjtRQUNELE9BQU8sT0FBTyxDQUFBO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILGtDQUFhLEdBQWI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDZCxRQUFPLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDakIsS0FBSyxJQUFJO2dCQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQTtnQkFDbkMsTUFBSztZQUNMLEtBQUssSUFBSTtnQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7Z0JBQ25DLE1BQUs7WUFDTCxLQUFLLElBQUk7Z0JBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO2dCQUNuQyxNQUFLO1NBQ1I7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2IsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUE7Z0JBQ2hDLE1BQUs7WUFDTCxLQUFLLElBQUk7Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFBO2dCQUNoQyxNQUFLO1lBQ0wsS0FBSyxJQUFJO2dCQUNMLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQTtnQkFDaEMsTUFBSztTQUNSO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ2QsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7Z0JBQzlCLE1BQUs7WUFDTCxLQUFLLElBQUk7Z0JBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO2dCQUM5QixNQUFLO1lBQ0wsS0FBSyxJQUFJO2dCQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQTtnQkFDOUIsTUFBSztTQUNSO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0YsaUNBQVksR0FBWjtRQUNHLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUNsQixRQUFPLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDakIsS0FBSyxJQUFJO2dCQUNMLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQTtnQkFDdEMsTUFBSztZQUNMLEtBQUssSUFBSTtnQkFDVCxNQUFLO1NBQ1I7UUFDRCxPQUFPLFNBQVMsQ0FBQTtJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBVyxHQUFYO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLFFBQU8sSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNqQixLQUFLLElBQUk7Z0JBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFBO2dCQUNwQyxNQUFLO1lBQ0wsS0FBSyxJQUFJO2dCQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQTtnQkFDcEMsTUFBSztZQUNMLEtBQUssSUFBSTtnQkFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUE7Z0JBQ3BDLE1BQUs7U0FDUjtRQUNELE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFVLEdBQVY7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7UUFDaEIsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUE7Z0JBQ2xDLE1BQUs7WUFDTCxLQUFLLElBQUk7Z0JBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO2dCQUNsQyxNQUFLO1lBQ0wsS0FBSyxJQUFJO2dCQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTtnQkFDbEMsTUFBSztTQUNSO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDbEIsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQ3JCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtZQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUE7WUFDL0IsT0FBTyxPQUFPLENBQUE7U0FDakI7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0YsZ0NBQVcsR0FBWCxVQUFZLElBQVk7UUFDckIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1gsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2pCLEtBQUssSUFBSTtnQkFFVCxNQUFLO1lBQ0wsS0FBSyxJQUFJO2dCQUNMLElBQUcsSUFBSSxJQUFJLENBQUMsRUFBQztvQkFDVCxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBO2lCQUNwQztxQkFBSyxJQUFHLElBQUksSUFBSSxDQUFDLEVBQUM7b0JBQ2YsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQTtpQkFDckM7cUJBQUssSUFBRyxJQUFJLElBQUksQ0FBQyxFQUFDO29CQUNmLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUE7b0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO2lCQUMxQjtnQkFDTCxNQUFLO1NBQ1I7UUFDRCxPQUFPLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFZLEdBQVo7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDbEIsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUE7Z0JBQ3RDLE1BQUs7WUFDTCxLQUFLLElBQUk7Z0JBQ0wsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFBO2dCQUN0QyxNQUFLO1lBQ0wsS0FBSyxJQUFJO2dCQUNMLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQTtnQkFDdEMsTUFBSztTQUNSO1FBQ0QsT0FBTyxTQUFTLENBQUE7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQWEsR0FBYjtRQUNJLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUE7UUFDN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDaEQsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ25ELE1BQUs7WUFDTCxLQUFLLElBQUk7Z0JBQ0wsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNuRCxNQUFLO1NBQ1I7UUFDRCxPQUFPLFVBQVUsQ0FBQTtJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw4QkFBUyxHQUFULFVBQVUsUUFBYTtRQUNuQixJQUFHLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxRQUFRLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFO1lBQ3JGLHFCQUFxQjtZQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDaEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDcEMsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLEtBQUssRUFBRSxFQUFFO2dCQUNULE9BQU87b0JBQ0wsc0JBQXNCO29CQUN0QixRQUFRLEVBQUUsQ0FBQTtnQkFDWixDQUFDO2dCQUNELElBQUksWUFBQyxDQUFDO29CQUNKLHNCQUFzQjtnQkFDeEIsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNOO2FBQUssSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBQztTQUU5QjtJQUNMLENBQUM7SUFHRDs7O09BR0c7SUFDSCxzQ0FBaUIsR0FBakIsVUFBa0IsUUFBYSxFQUFFLElBQVk7UUFDekMsSUFBRyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sUUFBUSxFQUFFLENBQUE7UUFDbEMsSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFBO1FBQzNCLElBQUcsSUFBSTtZQUFFLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUNyRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNwQyxPQUFPLEVBQUUsUUFBUTtnQkFDakIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTztvQkFDTCxzQkFBc0I7Z0JBQ3hCLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLENBQUM7b0JBQ0osc0JBQXNCO2dCQUN4QixDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBWSxHQUFaO1FBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU07UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLFNBQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMxRCxJQUFJLFdBQVcsR0FBRyxTQUFPLENBQUMsV0FBVyxDQUFDO2dCQUN0QyxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLFFBQVE7Z0JBQ1IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLEtBQUssRUFBRTt3QkFDSCxJQUFJLEVBQUUsQ0FBQyxTQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7d0JBQzdDLEdBQUcsRUFBRSxTQUFPLENBQUMsWUFBWSxHQUFHLFlBQVk7d0JBQ3hDLEtBQUssRUFBRSxXQUFXO3dCQUNsQixNQUFNLEVBQUUsWUFBWTtxQkFDdkI7aUJBQ0osQ0FBQyxDQUFBO2dCQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQUEsR0FBRztvQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBTyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFO2dCQUNqRSxDQUFDLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUc7b0JBQy9CLG1CQUFtQjtnQkFDdkIsQ0FBQyxDQUFDLENBQUE7YUFDTDtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEI7U0FDSjthQUFLLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN6RCxJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksVUFBVTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDN0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7Z0JBQ3pCLElBQUksU0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFELElBQUksV0FBVyxHQUFVLFNBQU8sQ0FBQyxXQUFXLENBQUM7Z0JBQzdDLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsUUFBUTtnQkFDUixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsY0FBYyxDQUFDO29CQUNuRCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsV0FBVyxFQUFDLEVBQUU7b0JBQ2QsS0FBSyxFQUFFO3dCQUNILElBQUksRUFBRSxDQUFDLFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQzt3QkFDN0MsR0FBRyxFQUFFLFNBQU8sQ0FBQyxZQUFZLEdBQUcsWUFBWTt3QkFDeEMsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLE1BQU0sRUFBRSxZQUFZO3FCQUN2QjtpQkFDSixDQUFDLENBQUE7Z0JBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBQSxHQUFHO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUU7Z0JBQ2pFLENBQUMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztvQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO29CQUNwQix1QkFBdUI7Z0JBQzNCLENBQUMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO29CQUM1QixnQ0FBZ0M7Z0JBQ3BDLENBQUMsQ0FBQyxDQUFBO2FBQ0w7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBWSxHQUFaO1FBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU07UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUNyRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQ3pELElBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxVQUFVLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxVQUFVO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUU5RixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCO1NBQ0o7YUFBSyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1NBRTlCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0osa0NBQWEsR0FBYjtRQUNLLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN6RCxJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksVUFBVTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFN0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtZQUVwRixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQix1RUFBdUU7WUFDM0UsQ0FBQyxDQUFDLENBQUE7U0FFTDtJQUNOLENBQUM7SUFFQTs7T0FFRztJQUNILGtDQUFhLEdBQWIsVUFBYyxRQUFjO1FBQ3hCLElBQUcsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFNO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN6RCxJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksVUFBVTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFN0QsSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBQztnQkFDdkIsSUFBRyxRQUFRLEVBQUM7b0JBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtvQkFDM0IsT0FBTyxRQUFRLEVBQUUsQ0FBQTtpQkFDcEI7YUFFSjtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1lBQ3RCLFVBQVUsQ0FBQztnQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtZQUMzQixDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7WUFFUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtpQkFDbEIsSUFBSSxDQUFDO2dCQUNGLElBQUcsUUFBUSxFQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFBO2lCQUNiO1lBRUwsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDckIsSUFBRyxRQUFRLEVBQUM7b0JBQ1IsUUFBUSxFQUFFLENBQUE7aUJBQ2I7Z0JBRUQsaUZBQWlGO1lBQ3JGLENBQUMsQ0FBQyxDQUFBO1NBQ0w7YUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDO1lBQzdDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFDekQsSUFBRyxPQUFPLENBQUMsT0FBTyxJQUFJLFVBQVU7Z0JBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ2pFLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJO2dCQUFFLE9BQU07WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7WUFDdEIsVUFBVSxDQUFDO2dCQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQzNCLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQTtZQUNSLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUNuQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFO2dCQUM5QyxJQUFNLGdCQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ2hFLFFBQVEsRUFBRSxTQUFTO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsZ0JBQWM7cUJBQ1QsSUFBSSxFQUFFO3FCQUNOLElBQUksQ0FBQztvQkFDRixnQkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixVQUFVLENBQUM7d0JBQ1AsZ0JBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBSyxnQkFBYyxDQUFDLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO29CQUN6RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRVYsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsZ0JBQWMsQ0FBQyxPQUFPLENBQUM7b0JBQ25CLElBQUcsZ0JBQWMsRUFBQzt3QkFDZCxnQkFBYyxDQUFDLE9BQU8sRUFBRSxDQUFBO3FCQUMzQjtnQkFFTCxDQUFDLENBQUMsQ0FBQTthQUNMO1NBQ0o7YUFBSyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1NBRTlCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0osZ0NBQVcsR0FBWDtRQUNLLElBQUcsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFNO1FBQ3ZCLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUM7WUFFckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN6RCxJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksVUFBVTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFN0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3pELFFBQVEsRUFBRSxPQUFPO2FBRXBCLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO1lBRW5CLElBQUksV0FBVyxHQUFHLFVBQVMsR0FBRztnQkFDMUIsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDckIsSUFBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBQzt3QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTt3QkFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO3FCQUN2QjtvQkFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUM7d0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7cUJBQ3hCO2lCQUNKO3FCQUFNO29CQUNILElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUk7d0JBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7aUJBQy9EO2dCQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO2dCQUV0QixVQUFVLENBQUM7b0JBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7Z0JBQzNCLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQTtZQUVaLENBQUMsQ0FBQTtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtTQUM5QzthQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN6RCxJQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksVUFBVTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3pELFFBQVEsRUFBRSxPQUFPO2FBRXBCLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDckIsMkJBQTJCO1lBQy9CLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUVuQixJQUFJLFdBQVcsR0FBRyxVQUFTLEdBQUc7Z0JBQzFCLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUM7d0JBQzFCLHFCQUFxQjt3QkFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO3FCQUN2QjtvQkFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUM7d0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7cUJBQ3hCO2lCQUNKO3FCQUFNO29CQUNILElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUk7d0JBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7aUJBQy9EO2dCQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1lBQzFCLENBQUMsQ0FBQTtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtTQUM5QzthQUFLLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUM7U0FFOUI7SUFDTixDQUFDO0lBRUE7Ozs7T0FJRztJQUNKLGdDQUFXLEdBQVgsVUFBWSxPQUFZLEVBQUUsS0FBVSxFQUFFLElBQVU7UUFDM0MsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtnQkFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUMxQjtpQkFBSTtnQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDakI7WUFDRCxPQUFPLE9BQU8sRUFBRSxDQUFBO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFMUQsVUFBVSxDQUFDO1lBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7UUFDM0IsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBRVAsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUE7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNqQixJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEVBQUUsSUFBSTtZQUUzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQ3pELElBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxVQUFVO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUU3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUVqQixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFDO2dCQUNqRCxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTthQUM5QjtZQUdELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDOUIsQ0FBQyxDQUFDLENBQUE7WUFFRixXQUFXO1lBQ1gsSUFBSSxDQUFDLE9BQU87aUJBQ1AsSUFBSSxFQUFFO2lCQUNOLElBQUksQ0FBQztZQUNOLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUM1QixXQUFXO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUN6QixlQUFlO29CQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNWO2FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQztZQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtZQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQ3pELElBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxVQUFVO2dCQUFFLE9BQU8sT0FBTyxFQUFFLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN6RSxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFDO2dCQUNqRCxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTthQUM5QjtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDckIsNEJBQTRCO1lBQ2hDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsV0FBVztZQUNYLElBQUksQ0FBQyxPQUFPO2lCQUNQLElBQUksRUFBRTtpQkFDTixJQUFJLENBQUM7WUFDTixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUMxQiw4QkFBOEI7Z0JBQzlCLFdBQVc7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLGVBQWU7b0JBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7YUFBSyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1NBRTlCO2FBQ0c7WUFDQSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7U0FDdkI7SUFDTixDQUFDO0lBSUE7OztPQUdHO0lBQ0gsd0NBQW1CLEdBQW5CO1FBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU07UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUMxQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQ3pELElBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxVQUFVO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMvRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUV2RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUMseUJBQXlCO1lBQ2pGLE1BQU07WUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLG1CQUFtQjtZQUN2QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUk7WUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztnQkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQzlCLENBQUMsQ0FBQztZQUNILFFBQVE7WUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUc7Z0JBQzFCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNuQyxnQkFBZ0I7WUFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxRQUFRO1lBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUMzQiw2QkFBNkI7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFpQixHQUFqQjtRQUNJLElBQUcsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFNO1FBQ3ZCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFDMUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN6RCxJQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksVUFBVTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixnQ0FBZ0M7WUFDaEMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQSxDQUFFLHlCQUF5QjtnQkFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3pCO3FCQUFJO29CQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdDQUFtQixHQUFuQixVQUFvQixRQUFhLEVBQUUsWUFBaUI7UUFDaEQsSUFBRyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sUUFBUSxFQUFFLENBQUE7UUFDbEMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUMxQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQ3pELElBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxVQUFVO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMvRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7WUFDZixJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFDO2dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUN4QixPQUFPO2FBQ1Y7WUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsRUFBRTtnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUU7b0JBQ0gsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO29CQUNyQyxlQUFlLEVBQUUsSUFBSTtpQkFDeEI7Z0JBQ0QsT0FBTztvQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUN4QixRQUFRLEVBQUUsQ0FBQTtvQkFDViw4QkFBOEI7Z0JBQ2xDLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLENBQUM7b0JBQ0YsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUN4Qix3QkFBd0I7b0JBQ3hCLFlBQVksRUFBRSxDQUFBO29CQUNkLDhCQUE4QjtnQkFDbEMsQ0FBQzthQUNKLENBQUMsQ0FBQTtTQUNMO2FBQUk7WUFDRCxRQUFRLEVBQUUsQ0FBQTtTQUNiO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixvQ0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZ0NBQVcsR0FBWCxVQUFZLEdBQVksRUFBRSxHQUFZO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNoQyxPQUFPO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsRUFBRSxDQUFBO1lBQ1QsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsRUFBRSxDQUFBO1lBQ1QsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILDhCQUFTLEdBQVQsVUFBVSxHQUFHO1FBQ1QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUNyRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQzlCLEtBQUssRUFBRSxHQUFHO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sWUFBQyxHQUFHO29CQUNYLHdCQUF3QjtnQkFDeEIsQ0FBQztnQkFDRCxJQUFJLFlBQUMsR0FBRztvQkFDUiwrQkFBK0I7Z0JBQy9CLENBQUM7YUFDSixDQUFDLENBQUM7U0FDTjthQUFJO1lBQ0YsYUFBYTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbEI7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzQ0FBaUIsR0FBakIsVUFBa0IsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQzFDLFdBQVc7UUFDWCxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQztRQUV4QixjQUFjO1FBQ2QsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEcsZUFBZTtRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRyxDQUFDLEVBQUUsRUFBRTtZQUNwRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBRVosWUFBWTtRQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBYyxHQUFkLFVBQWUsUUFBUSxFQUFFLFFBQVE7UUFDN0IseUJBQXlCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDO1lBQ2pGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFBO1NBQ3pDO0lBQ0wsQ0FBQztJQUdEOztPQUVHO0lBQ0osOEJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQztZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMscUJBQXFCLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNSLGlDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3RCLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDckIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBRUQsVUFBVTtJQUNWLDRCQUFPLEdBQVA7UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxTQUFTO2FBQ25CLENBQUMsQ0FBQztTQUNOO2FBQUk7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDUCxxQ0FBZ0IsR0FBaEI7UUFBQSxpQkFtQkM7UUFsQkcsb0JBQW9CO1FBQ3BCLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDckMsY0FBYztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxVQUFDLEdBQVE7b0JBQ2QsNEJBQTRCO2dCQUNoQyxDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQVE7b0JBQ1gsNEJBQTRCO2dCQUNoQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsMkNBQTJDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsT0FBTztvQkFDSCxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRTtpQkFDOUIsQ0FBQTtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsT0FBTztJQUNQLG9DQUFlLEdBQWY7UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQzlCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQTc4QmMsb0JBQVMsR0FBYyxJQUFJLENBQUE7SUE4OEI3QyxpQkFBQztDQS84QkQsQUErOEJDLElBQUE7a0JBLzhCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlub/lkYpzZGsgJiDnvZHnu5zmjqfliLZcclxuICovXHJcblxyXG4gbGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vVG9hc3QuanMnKVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNka01hbmFnZXIge1xyXG4gICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOlNka01hbmFnZXIgPSBudWxsXHJcbiAgICAgaXN2aWRlb2VuZDogYm9vbGVhbjtcclxuICAgICBjaGVja1ZpZGVvOiBib29sZWFuO1xyXG4gICAgIHByaXZhdGUgX3R5cGU6IGFueTtcclxuICAgICBpc2RlYnVnID0gZmFsc2UgICAgLy/mmK/mtYvor5XmqKHlvI8gIOivpeaooeW8jyDml6Dlub/lkYog5peg572R57ucXHJcbiAgICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNka01hbmFnZXIoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgICB9XHJcbiBcclxuICAgICAvL3BsYXRmb3JtOnN0cmluZyA9ICd0dCdcclxuICAgICBwcml2YXRlIF9wbGF0Zm9ybTpzdHJpbmdcclxuICAgICBnZXQgcGxhdGZvcm0oKTpzdHJpbmcge1xyXG4gICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcclxuICAgICAgICAgICAgIHRoaXMuX3BsYXRmb3JtID0gJ3R0J1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtXHJcbiAgICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAgdGhpcy5fcGxhdGZvcm0gPSAnd3gnXHJcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm1cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICBzZXQgcGxhZm9ybShzdHI6IHN0cmluZyl7XHJcbiAgICAgICAgIHRoaXMuX3BsYXRmb3JtID0gc3RyXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgdmlkZW9SZWNvcmRpbmdTdGF0ZTphbnkgPSAwO1xyXG4gICAgIHZpZGVvX3JlY29yZGVyOmFueSA9IG51bGw7XHJcbiAgICAgdmlkZW9TdGFydFRpbWU6YW55ID0gbnVsbDtcclxuICAgICB2aWRlb1BhdGg6YW55ID0gbnVsbDtcclxuICAgICB2aWRlb0lzRXhpc3Q6YW55ID0gMDsvL+inhumikeaYr+WQpuWtmOWcqCDpu5jorqTlrZjlnKhcclxuICAgICByZWNvcmRlclRpbWU6YW55ID0gMTIwOyAvL+inhumikeW9leWItuaXtumXtFxyXG4gICAgIHZpZGVvQWQ6YW55ID0gbnVsbDsgLy/mv4DlirHop4bpopFcclxuICAgICBjaGFQaW5nRXJyOmFueSA9IGZhbHNlOyAvL+aPkuWxj+aKpemUme+8iOinpuWPkemikee5gemZkOWItuetie+8iVxyXG4gICAgIGNoYVBpbmc6YW55ID0gbnVsbFxyXG4gICAgIGJhbm5lckFkOmFueSA9IG51bGw7IC8v5qiq5bGP5bm/5ZGKXHJcbiAgICAgdmlkZW9DYWxsQmFjayA9IG51bGwgLy/mv4DlirHop4bpopHmiJDlip/lm57osINcclxuICAgICB2aWRlb0ZhaWxDYWxsQmFjayA9IG51bGwgLy/mv4DlirHop4bpopHlpLHotKXlm57osINcclxuICAgICBpc3Nob3diYW5uZXIgPSBmYWxzZVxyXG4gICAgIC8vcGxhdGZvcm1TZGs6YW55ID0gdHQgLy/lrZfoioLot7PliqhzZGtcclxuIFxyXG4gICAgIHR0X2luZm86YW55ID0ge1xyXG4gICAgICAgICBnYW1lbmFtZTpcIuWtl+iKgua4uOaIj+WQjeensFwiLFxyXG4gICAgICAgICBzaGFyZVRpdGxlOifov7fkvaDkuJbnlYzmna/vvIzlpb3njqnlj4jliLrmv4AnLFxyXG4gICAgICAgICBhcHBJZDondHQ2NzkwMTEyZGY4YTE1MDAyMDInLCAgXHJcbiAgICAgICAgIHZpZGVvSWQ6ICc3NzFiNzgya2xlaWY2MnE2MWgnLCBcclxuICAgICAgICAgY2hhcGluZ0lkOiAnY2hhcGluZ2lkJywgXHJcbiAgICAgICAgIGJhbm5lcklkOiBcImJhbm5lcmlkXCIsXHJcbiAgICAgICAgIHRlbXBsYXRlSWQ6IFsnJywnJywnJywnJ10sXHJcbiAgICAgICAgIHZpZGVvVG9waWNzOlsnJywnJ10sXHJcbiAgICAgICAgIGFwcFNlY3JldDonJyxcclxuICAgICB9XHJcbiBcclxuICAgICBrc19pbmZvOmFueSA9IHtcclxuICAgICAgICAgZ2FtZW5hbWU6XCJcIixcclxuICAgICAgICAgc2hhcmVUaXRsZTonJyxcclxuICAgICAgICAgYXBwSWQ6JycsIFxyXG4gICAgICAgICBiYW5uZXJJZDogXCJcIixcclxuICAgICAgICAgdmlkZW9JZDogJycsIFxyXG4gICAgICAgICBjaGFwaW5nSWQ6ICcnLCBcclxuICAgICAgICAgdGVtcGxhdGVJZDogWycnLCcnLCcnLCcnXSxcclxuICAgICAgICAgdmlkZW9Ub3BpY3M6WycnLCcnXSxcclxuICAgICAgICAgYXBwU2VjcmV0OicnLFxyXG4gICAgIH1cclxuIFxyXG4gICAgIHd4X2luZm86YW55ID0ge1xyXG4gICAgICAgICBnYW1lbmFtZTpcIuW+ruS/oea4uOaIj+WQjeensFwiLFxyXG4gICAgICAgICBzaGFyZVRpdGxlOifov7fkvaDkuJbnlYzmna/vvIzlpb3njqnlj4jliLrmv4AnLFxyXG4gICAgICAgICBhcHBJZDond3gzMzhiMzA0MmFlMjIxYWJiJywgLy9hcHBpZFxyXG4gICAgICAgICBiYW5uZXJJZDogXCJiYW5uZXJpZFwiLC8v5qiq5bmFXHJcbiAgICAgICAgIHZpZGVvSWQ6J3ZpZGVvaWQnLCAvLzYtLS0zMHMg5r+A5YqxXHJcbiAgICAgICAgIHZpZGVvSWQyOid2aWRlb2lkJywgLy82LS0tNjBzIOa/gOWKsSDkuLvopoHnlKjov5nkuKogICBcclxuICAgICAgICAgY2hhcGluZ0lkOidjaGFwaW5naWQnLCAvL+aPkuWxj1xyXG4gXHJcbiBcclxuICAgICAgICAgZ2V6aTonZ2V6aWlkJywgLy/moLzlrZDmnKrmjqXlhaVcclxuICAgICAgICAgTmF0aXZlQWQ6eyAvLyDljp/nlJ8g5qC85a2Q5pyq5o6l5YWlXHJcbiAgICAgICAgICAgICBqdXpoZW46J2p1emhlbmlkJyxcclxuICAgICAgICAgICAgIGR1b2dlemk6J2R1b2dlemlpZCcsXHJcbiAgICAgICAgICAgICBkYW5nZXppOidkYW5nZXppaWQnXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHRlbXBsYXRlSWQ6IFsnJywnJywnJywnJ10sXHJcbiAgICAgICAgIHZpZGVvVG9waWNzOlsnJywnJ10gICBcclxuICAgICB9XHJcbiBcclxuICAgICB1cmw6c3RyaW5nID0gJ2h0dHBzOi8vd3d3Lnh4eHh4LnRvcC9zZ2FtZScgXHJcbiAgICAgd2ViX3VybCA9ICcgaHR0cHM6Ly93d3cueHh4eHgudG9wL3B2J1xyXG5cclxuICAgICAvKipcclxuICAgICAgKiDojrflj5blubPlj7Ag57G7XHJcbiAgICAgICovXHJcbiAgICAgIGdldFBsYXRmb3JtQ2xhc3MoKXtcclxuICAgICAgICAgdmFyIHBfY2xhc3MgPSBudWxsXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICBwX2NsYXNzID0gdHRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICdvcCc6XHJcbiAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgcF9jbGFzcyA9IHFnXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAnd3gnOlxyXG4gICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgIHBfY2xhc3MgPSB3eFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ2tzJzpcclxuICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICBwX2NsYXNzID0ga3NcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIHBfY2xhc3NcclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5bliIbkuqvmoIfpophcclxuICAgICAgKi9cclxuICAgICBnZXRTaGFyZVRpdGxlKCl7XHJcbiAgICAgICAgIHZhciB0aXRsZSA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICB0aXRsZSA9IHRoaXMudHRfaW5mby5zaGFyZVRpdGxlXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIHRpdGxlID0gdGhpcy5rc19pbmZvLnNoYXJlVGl0bGVcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnd4X2luZm8uc2hhcmVUaXRsZVxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIHRpdGxlXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+W5ZCN5a2XXHJcbiAgICAgICovXHJcbiAgICAgZ2V0TmFtZSgpe1xyXG4gICAgICAgICB2YXIgbmFtZSA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy50dF9pbmZvLmdhbWVuYW1lXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIG5hbWUgPSB0aGlzLmtzX2luZm8uZ2FtZW5hbWVcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgbmFtZSA9IHRoaXMud3hfaW5mby5nYW1lbmFtZVxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIG5hbWVcclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5ZhcHBpZCBcclxuICAgICAgKi9cclxuICAgICBnZXRBcHBJZCgpe1xyXG4gICAgICAgICB2YXIgYXBwaWQgPSAnJ1xyXG4gICAgICAgICBzd2l0Y2godGhpcy5wbGF0Zm9ybSl7XHJcbiAgICAgICAgICAgICBjYXNlICd0dCc6XHJcbiAgICAgICAgICAgICAgICAgYXBwaWQgPSB0aGlzLnR0X2luZm8uYXBwSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICdrcyc6XHJcbiAgICAgICAgICAgICAgICAgYXBwaWQgPSB0aGlzLmtzX2luZm8uYXBwSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgYXBwaWQgPSB0aGlzLnd4X2luZm8uYXBwSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIHJldHVybiBhcHBpZFxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOiOt+WPlkFwcFNlY3JldFxyXG4gICAgICAqL1xyXG4gICAgICBnZXRBcHBTZWNyZXQoKXtcclxuICAgICAgICAgdmFyIGFwcFNlY3JldCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBhcHBTZWNyZXQgPSB0aGlzLnR0X2luZm8uYXBwU2VjcmV0XHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGFwcFNlY3JldFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5ZiYW5uZXJpZFxyXG4gICAgICAqL1xyXG4gICAgIGdldEJhbm5lcklkKCl7XHJcbiAgICAgICAgIHZhciBiYW5uZXJJRCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBiYW5uZXJJRCA9IHRoaXMudHRfaW5mby5iYW5uZXJJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ2tzJzpcclxuICAgICAgICAgICAgICAgICBiYW5uZXJJRCA9IHRoaXMua3NfaW5mby5iYW5uZXJJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ3d4JzpcclxuICAgICAgICAgICAgICAgICBiYW5uZXJJRCA9IHRoaXMud3hfaW5mby5iYW5uZXJJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGJhbm5lcklEXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+WdmlkZW9pZFxyXG4gICAgICAqL1xyXG4gICAgIGdldFZpZGVvSWQoKXtcclxuICAgICAgICAgdmFyIHZpZGVvSWQgPSAnJ1xyXG4gICAgICAgICBzd2l0Y2godGhpcy5wbGF0Zm9ybSl7XHJcbiAgICAgICAgICAgICBjYXNlICd0dCc6XHJcbiAgICAgICAgICAgICAgICAgdmlkZW9JZCA9IHRoaXMudHRfaW5mby52aWRlb0lkXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIHZpZGVvSWQgPSB0aGlzLmtzX2luZm8udmlkZW9JZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgIGNhc2UgJ3d4JzpcclxuICAgICAgICAgICAgICAgICB2aWRlb0lkID0gdGhpcy53eF9pbmZvLnZpZGVvSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIHJldHVybiB2aWRlb0lkXHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRWaWRlb0lkMigpe1xyXG4gICAgICAgICBpZih0aGlzLnBsYXRmb3JtID09ICd3eCcpe1xyXG4gICAgICAgICAgICAgdmFyIHZpZGVvSWQgPSAnJ1xyXG4gICAgICAgICAgICAgdmlkZW9JZCA9IHRoaXMud3hfaW5mby52aWRlb0lkMlxyXG4gICAgICAgICAgICAgcmV0dXJuIHZpZGVvSWRcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOiOt+WPlmlkXHJcbiAgICAgICogQHBhcmFtIHR5cGUgXHJcbiAgICAgICovXHJcbiAgICAgIGdldE5hdGl2ZUFkKHR5cGU6IG51bWJlcil7XHJcbiAgICAgICAgIHZhciBpZCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgaWQgPSB0aGlzLnd4X2luZm8uTmF0aXZlQWQuanV6aGVuXHJcbiAgICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgaWQgPSB0aGlzLnd4X2luZm8uTmF0aXZlQWQuZHVvZ2V6aVxyXG4gICAgICAgICAgICAgICAgIH1lbHNlIGlmKHR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlkID0gdGhpcy53eF9pbmZvLk5hdGl2ZUFkLmRhbmdlemlcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W5v+WRimlkJywgaWQpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGlkXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+W5o+S5bGP5bm/5ZGKaWRcclxuICAgICAgKi9cclxuICAgICBnZXRDaGFQaW5nSWQoKXtcclxuICAgICAgICAgdmFyIGNoYXBpbmdJZCA9ICcnXHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnBsYXRmb3JtKXtcclxuICAgICAgICAgICAgIGNhc2UgJ3R0JzpcclxuICAgICAgICAgICAgICAgICBjaGFwaW5nSWQgPSB0aGlzLnR0X2luZm8uY2hhcGluZ0lkXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAna3MnOlxyXG4gICAgICAgICAgICAgICAgIGNoYXBpbmdJZCA9IHRoaXMua3NfaW5mby5jaGFwaW5nSWRcclxuICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICBjYXNlICd3eCc6XHJcbiAgICAgICAgICAgICAgICAgY2hhcGluZ0lkID0gdGhpcy53eF9pbmZvLmNoYXBpbmdJZFxyXG4gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgcmV0dXJuIGNoYXBpbmdJZFxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOiOt+WPluWIhuS6q+WuoeaguGlkXHJcbiAgICAgICovXHJcbiAgICAgZ2V0VGVtcGxhdGVJZCgpe1xyXG4gICAgICAgICB2YXIgdGVtcGxhdGVJZCA9ICcnXHJcbiAgICAgICAgIHZhciBpZF9sZW50aCA9IHRoaXMudHRfaW5mby50ZW1wbGF0ZUlkLmxlbmd0aFxyXG4gICAgICAgICB2YXIgcmFuZEluZGV4ID0gdGhpcy5nZXRSYW5nZVJhbmRvbSgwLCBpZF9sZW50aClcclxuICAgICAgICAgc3dpdGNoKHRoaXMucGxhdGZvcm0pe1xyXG4gICAgICAgICAgICAgY2FzZSAndHQnOlxyXG4gICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQgPSB0aGlzLnR0X2luZm8udGVtcGxhdGVJZFtyYW5kSW5kZXhdXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgY2FzZSAnd3gnOlxyXG4gICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQgPSB0aGlzLnd4X2luZm8udGVtcGxhdGVJZFtyYW5kSW5kZXhdXHJcbiAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgICByZXR1cm4gdGVtcGxhdGVJZFxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOa4uOaIj+WIhuS6q1xyXG4gICAgICAqL1xyXG4gICAgIGdhbWVTaGFyZShjYWxsQmFjazogYW55KXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm4gY2FsbEJhY2soKVxyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+a4uOaIj+WIhuS6qycpXHJcbiAgICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmdldFNoYXJlVGl0bGUoKVxyXG4gICAgICAgICAgICAgdmFyIHRlbXBsYXRlSWQgPSB0aGlzLmdldFRlbXBsYXRlSWQoKVxyXG4gICAgICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGVJZCwgLy8g5pu/5o2i5oiQ6YCa6L+H5a6h5qC455qE5YiG5LqrSURcclxuICAgICAgICAgICAgICAgICBxdWVyeTogXCJcIixcclxuICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrKClcclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGZhaWwoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWIhuS6q+Wksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfWVsc2UgaWYodGhpcy5wbGF0Zm9ybSA9PSAna3MnKXtcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDliIbkuqvliLDlpb3lj4tcclxuICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgICovXHJcbiAgICAgc2hhcmVHYW1lVG9GcmllbmQoY2FsbGJhY2s6IGFueSwgbm90ZT86c3RyaW5nKXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm4gY2FsbGJhY2soKVxyXG4gICAgICAgICBsZXQgbm90ZXN0ciA9ICfkvaDnmoTlpb3lj4vpgoDor7fkvaDkuIDotbfmiJjmlpcnXHJcbiAgICAgICAgIGlmKG5vdGUpIG5vdGVzdHIgPSBub3RlXHJcbiAgICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuZ2V0TmFtZSgpXHJcbiAgICAgICAgICAgICB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgIGNoYW5uZWw6IFwiaW52aXRlXCIsIC8vIOaLiei1t+mCgOivt+mdouadv+WIhuS6q+a4uOaIj+WlveWPi1xyXG4gICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICBkZXNjOiBub3Rlc3RyLFxyXG4gICAgICAgICAgICAgICAgIGltYWdlVXJsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgIHF1ZXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5YiG5Lqr5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5YiG5Lqr5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICogIGJhbm5lciDlub/lkYrmmL7npLpcclxuICAgICAgKi9cclxuICAgICBiYW5uZXJBZFNob3coKXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm5cclxuICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKSB7XHJcbiAgICAgICAgICAgICBpZiAoc2VsZi5iYW5uZXJBZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgbGV0IHdpblNpemUgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICAgICAgIGxldCBiYW5uZXJXaWR0aCA9IHdpblNpemUud2luZG93V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGJhbm5lckhlaWdodCA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAvLyAvLyDlub/lkYpcclxuICAgICAgICAgICAgICAgICBsZXQgYmFubmVySUQgPSB0aGlzLmdldEJhbm5lcklkKClcclxuICAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogYmFubmVySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAod2luU2l6ZS53aW5kb3dXaWR0aCAtIGJhbm5lcldpZHRoKSAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHdpblNpemUud2luZG93SGVpZ2h0IC0gYmFubmVySGVpZ2h0ICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYmFubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuIFxyXG4gICAgICAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gKHdpblNpemUud2luZG93V2lkdGggLSByZXMud2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5TaXplLndpbmRvd0hlaWdodCAtIHJlcy5oZWlnaHQgO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5vbkVycm9yKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpZiAoc2VsZi5iYW5uZXJBZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSAgPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYnJhbmQgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gICAgICAgICAgICAgaWYgKHNlbGYuYmFubmVyQWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgIHNlbGYuaXNzaG93YmFubmVyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICBsZXQgd2luU2l6ZSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGJhbm5lcldpZHRoOm51bWJlciA9IHdpblNpemUud2luZG93V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGJhbm5lckhlaWdodCA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAvLyAvLyDlub/lkYpcclxuICAgICAgICAgICAgICAgICBsZXQgYmFubmVySUQgPSB0aGlzLmdldEJhbm5lcklkKClcclxuICAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuY3JlYXRlQmFubmVyQWQoeyBcclxuICAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IGJhbm5lcklELFxyXG4gICAgICAgICAgICAgICAgICAgICBhZEludGVydmFsczozMCwgIC8v6Ieq5Yqo5Yi35paw5pe26Ze0IOacgOWwkTMwIOOAgiDml6DvvIzkuI3oh6rliqhcclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICh3aW5TaXplLndpbmRvd1dpZHRoIC0gYmFubmVyV2lkdGgpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogd2luU2l6ZS53aW5kb3dIZWlnaHQgLSBiYW5uZXJIZWlnaHQgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBiYW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gKHdpblNpemUud2luZG93V2lkdGggLSByZXMud2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5TaXplLndpbmRvd0hlaWdodCAtIHJlcy5oZWlnaHQgO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5vbkVycm9yKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jhbm5lcuWksei0pScscmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLmJhbm5lckFkc19Mb2FkKClcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jhbm5lciDlub/lkYrliqDovb3miJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAvL2dhbWVDb25maWcuaXNzaG93YmFubmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgIH0pICAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpZiAoc2VsZi5iYW5uZXJBZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zaG93KCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiBiYW5uZXIg5bm/5ZGK6ZqQ6JePXHJcbiAgICAgICovXHJcbiAgICAgYmFubmVyQWRIaWRlKCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuXHJcbiAgICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIGxldCBzeXNEYXRhID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAgaWYoc3lzRGF0YS5icmFuZCA9PSAnZGV2dG9vbHMnIHx8IHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiBcclxuICAgICAgICAgICAgIGlmIChzZWxmLmJhbm5lckFkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkLmhpZGUoKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfWVsc2UgaWYodGhpcy5wbGF0Zm9ybSA9PSAna3MnKXtcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog5o+S5bGP5bm/5ZGK5Yqg6L29XHJcbiAgICAgICovXHJcbiAgICBjaGFQaW5nQWRMb2FkKCl7XHJcbiAgICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmJyYW5kID09ICdkZXZ0b29scycpIHJldHVybiBjb25zb2xlLmxvZygn5byA5Y+R5bel5YW35LiN5pON5L2cJylcclxuIFxyXG4gICAgICAgICAgICAgdmFyIGNoYXBpbmdJZCA9IHRoaXMuZ2V0Q2hhUGluZ0lkKClcclxuICAgICAgICAgICAgIHRoaXMuY2hhUGluZyA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmNyZWF0ZUludGVyc3RpdGlhbEFkKHsgYWRVbml0SWQ6IGNoYXBpbmdJZCB9KVxyXG4gXHJcbiAgICAgICAgICAgICB0aGlzLmNoYVBpbmcub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5LlsY/lub/lkYrmi4nlj5blpLHotKUnLGVycilcclxuICAgICAgICAgICAgICAgICAvL2dhbWVDb25maWcuY2hhUGluZyA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHsgYWRVbml0SWQ6IGNoYXBpbmdJZCB9KVxyXG4gICAgICAgICAgICAgfSlcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDmj5LlsY/lub/lkYrmmL7npLpcclxuICAgICAgKi9cclxuICAgICBjaGFQaW5nQWRTaG93KGNhbGxiYWNrPzogYW55KXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm5cclxuICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmJyYW5kID09ICdkZXZ0b29scycpIHJldHVybiBjb25zb2xlLmxvZygn5byA5Y+R5bel5YW35LiN5pON5L2cJylcclxuIFxyXG4gICAgICAgICAgICAgaWYoc2VsZi5jaGFQaW5nRXJyID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoJ+i1hOa6kOacquWHhuWkh+WlvS4uLicpXHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIHNlbGYuY2hhUGluZ0VyciA9IHRydWVcclxuICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICBzZWxmLmNoYVBpbmdFcnIgPSBmYWxzZVxyXG4gICAgICAgICAgICAgfSw0NTAwMClcclxuIFxyXG4gICAgICAgICAgICAgc2VsZi5jaGFQaW5nLnNob3coKVxyXG4gICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICBzZWxmLnNob3dUb2FzdCgn6LWE5rqQ5pyq5YeG5aSH5aW9Li4uJylcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bGV56S65bm/5ZGK5aSx6LSlJylcclxuICAgICAgICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgLy9nYW1lQ29uZmlnLmNoYVBpbmcgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7IGFkVW5pdElkOiB0aGlzLmdldENoYVBpbmdJZCgpIH0pXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSl7ICAgICAgICAgXHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+aPkuWxj+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiAgICAgICAgICAgICBpZihzZWxmLmNoYVBpbmdFcnIgPT0gdHJ1ZSkgcmV0dXJuXHJcbiAgICAgICAgICAgICBzZWxmLmNoYVBpbmdFcnIgPSB0cnVlXHJcbiAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgc2VsZi5jaGFQaW5nRXJyID0gZmFsc2VcclxuICAgICAgICAgICAgIH0sNjAwMDApXHJcbiAgICAgICAgICAgICB2YXIgY2hhcGluZ0lkID0gdGhpcy5nZXRDaGFQaW5nSWQoKVxyXG4gICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmNyZWF0ZUludGVyc3RpdGlhbEFkKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzdGl0aWFsQWQgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiBjaGFwaW5nSWQgIFxyXG4gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkXHJcbiAgICAgICAgICAgICAgICAgICAgIC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5sb2FkKCkudGhlbigoKT0+e2ludGVyc3RpdGlhbEFkLnNob3d9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQub25DbG9zZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnN0aXRpYWxBZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9ZWxzZSBpZih0aGlzLnBsYXRmb3JtID09ICdrcycpe1xyXG4gXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDmv4DlirHlub/lkYrliqDovb1cclxuICAgICAgKi9cclxuICAgIHZpZGVvQWRMb2FkKCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuXHJcbiAgICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gXHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYnJhbmQgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gXHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgIHZhciB2aWRlb0lkID0gdGhpcy5nZXRWaWRlb0lkMigpXHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICAgICAgIGFkVW5pdElkOiB2aWRlb0lkLFxyXG4gICAgICAgICAgICAgICAgIC8vbXVsdGl0b246IHRydWVcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQub25FcnJvcigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHplJnor68nLHJlcylcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQubG9hZCgpXHJcbiBcclxuICAgICAgICAgICAgIHZhciBlbmRDYWxsQmFjayA9IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgaWYgKHJlcy5pc0VuZGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi52aWRlb0NhbGxCYWNrICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluWlluWKsScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvQ2FsbEJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl90eXBlICE9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1RvYXN0KCflt7LojrflvpcnKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudmlkZW9GYWlsQ2FsbEJhY2sgIT0gbnVsbCkgc2VsZi52aWRlb0ZhaWxDYWxsQmFjaygpIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBzZWxmLmlzdmlkZW9lbmQgPSB0cnVlXHJcbiBcclxuICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tWaWRlbyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgfSw2MDAwMClcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5vbkNsb3NlKGVuZENhbGxCYWNrKTsgLy/nu5Hlrprnu5PmnZ/lm57osINcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpe1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmFwcE5hbWUgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gXHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgIHZhciB2aWRlb0lkID0gdGhpcy5nZXRWaWRlb0lkKClcclxuICAgICAgICAgICAgIHRoaXMudmlkZW9BZCA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IHZpZGVvSWQsXHJcbiAgICAgICAgICAgICAgICAgLy9tdWx0aXRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vbkVycm9yKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKR6ZSZ6K+vJyxyZXMpXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgdGhpcy52aWRlb0FkLmxvYWQoKVxyXG4gXHJcbiAgICAgICAgICAgICB2YXIgZW5kQ2FsbEJhY2sgPSBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYudmlkZW9DYWxsQmFjayAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+iOt+WPluWlluWKsScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvQ2FsbEJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl90eXBlICE9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1RvYXN0KCflt7LojrflvpcnKVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudmlkZW9GYWlsQ2FsbEJhY2sgIT0gbnVsbCkgc2VsZi52aWRlb0ZhaWxDYWxsQmFjaygpIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBzZWxmLmlzdmlkZW9lbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvQWQub25DbG9zZShlbmRDYWxsQmFjayk7IC8v57uR5a6a57uT5p2f5Zue6LCDXHJcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMucGxhdGZvcm0gPT0gJ2tzJyl7XHJcbiBcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog5bGV56S65r+A5Yqx6KeG6aKRIFxyXG4gICAgICAqIOWPguaVsDEg5oiQ5Yqf5Zue6LCDXHJcbiAgICAgICog5Y+C5pWwMiDlpLHotKXlm57osIMg5Y+v5Lul55yB55WlXHJcbiAgICAgICovXHJcbiAgICB2aWRlb0FkU2hvdyhzdWNjZXNzOiBhbnksIGZhaWxlOiBhbnksIHR5cGU/OiBhbnkpe1xyXG4gICAgICAgICBpZih0aGlzLmlzZGVidWcpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAgPT09IGNjLnN5cy5XRUNIQVRfR0FNRSB8fCBjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgn5L2g5L2c5byK5LqGIScpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+S9oOS9nOW8iuS6hiEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzKClcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgaWYodGhpcy5jaGVja1ZpZGVvID09IHRydWUpIHJldHVybiB0aGlzLnNob3dUb2FzdCgn5Yu/6aKR57mB54K55Ye7JylcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICBzZWxmLmNoZWNrVmlkZW8gPSBmYWxzZVxyXG4gICAgICAgICB9LDEwMDApXHJcbiBcclxuICAgICAgICAgdGhpcy52aWRlb0NhbGxCYWNrID0gc3VjY2Vzc1xyXG4gICAgICAgICB0aGlzLnZpZGVvRmFpbENhbGxCYWNrID0gZmFpbGVcclxuICAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGVcclxuICAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7IC8v5b6u5L+hXHJcbiBcclxuICAgICAgICAgICAgIGxldCBzeXNEYXRhID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAgaWYoc3lzRGF0YS5icmFuZCA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiBcclxuICAgICAgICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlXHJcbiBcclxuICAgICAgICAgICAgIGlmKHNlbGYudmlkZW9BZCA9PSBudWxsIHx8IHNlbGYudmlkZW9BZCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZGVvQ2FsbEJhY2soKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5vbkVycm9yKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W5v+WRiuWHuumUmeebkeWQrCcsIHJlcylcclxuICAgICAgICAgICAgIH0pXHJcbiBcclxuICAgICAgICAgICAgIC8vIC8qKuWxleekuiAqL1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb0FkXHJcbiAgICAgICAgICAgICAgICAgLnNob3coKVxyXG4gICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dUb2FzdCgn5r+A5Yqx6KeG6aKR5pKt5pS+5aSx6LSlJylcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+WNsOa/gOWKseinhumikemUmeivrycsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul5omL5Yqo5Yqg6L295LiA5qyhXHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIOWKoOi9veaIkOWKn+WQjumcgOimgeWGjeaYvuekuuW5v+WRilxyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52aWRlb0FkLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXsgXHJcbiAgICAgICAgICAgICB0aGlzLmNoZWNrVmlkZW8gPSB0cnVlXHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gc3VjY2VzcygpLGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gICAgICAgICAgICAgaWYodGhpcy52aWRlb0FkID09IG51bGwgfHwgdGhpcy52aWRlb0FkID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9DYWxsQmFjaygpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB0aGlzLnZpZGVvQWQub25FcnJvcigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+W5v+WRiuWHuumUmeebkeWQrCcsIHJlcylcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAvLyAvKirlsZXnpLogKi9cclxuICAgICAgICAgICAgIHRoaXMudmlkZW9BZFxyXG4gICAgICAgICAgICAgICAgIC5zaG93KClcclxuICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93VG9hc3QoJ+a/gOWKseinhumikeaSreaUvuWksei0pScpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+aJk+WNsOa/gOWKseinhumikemUmeivrycsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul5omL5Yqo5Yqg6L295LiA5qyhXHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIOWKoOi9veaIkOWKn+WQjumcgOimgeWGjeaYvuekuuW5v+WRilxyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi52aWRlb0FkLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMucGxhdGZvcm0gPT0gJ2tzJyl7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb0NhbGxCYWNrKClcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICAgXHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDlrZfoioJcclxuICAgICAgKiDlvZXliLbop4bpopHlvIDlp4tcclxuICAgICAgKi9cclxuICAgICByZWNvcmRpbmdWaWRlb1N0YXJ0KCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuIFxyXG4gICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuICAgICAgICAgICAgIGxldCBzeXNEYXRhID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgICAgICAgaWYoc3lzRGF0YS5hcHBOYW1lID09ICdkZXZ0b29scycpIHJldHVybiBjb25zb2xlLmxvZygn5byA5Y+R5bel5YW35LiN5pON5L2cJylcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9SZWNvcmRpbmdTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvSXNFeGlzdCA9IDA7XHJcbiAgICAgICAgICAgICBzZWxmLnZpZGVvX3JlY29yZGVyID0gdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgIFxyXG4gICAgICAgICAgICAgc2VsZi52aWRlb1N0YXJ0VGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKS50b1N0cmluZygpKSAvL0RhdGUucGFyc2UobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAvL+W8gOWni+Wbnuiwg1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb19yZWNvcmRlci5vblN0YXJ0KHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9leWxj+W8gOWniycpO1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgLy/lvIDlp4tcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9fcmVjb3JkZXIuc3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzZWxmLnJlY29yZGVyVGltZSwgLy/lvZXliLbml7bplb9cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgLy/lvZXliLbnu5PmnZ/lm57osINcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9fcmVjb3JkZXIub25TdG9wKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGluZ1N0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvUGF0aCA9IHJlcy52aWRlb1BhdGg7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W9leWxj+e7k+adnycsIHNlbGYudmlkZW9QYXRoKVxyXG4gICAgICAgICAgICAgICAgIC8vIGRvIHNvbWV0aGluZTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgLy/lvZXliLbplJnor6/lm57osINcclxuICAgICAgICAgICAgIHNlbGYudmlkZW9fcmVjb3JkZXIub25FcnJvcihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZXlsY9lcnJvclwiLCByZXMpXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOW9leWItuinhumikee7k+adn1xyXG4gICAgICAqL1xyXG4gICAgIHJlY29yZGluZ1ZpZGVvRW5kKCl7XHJcbiAgICAgICAgIGlmKHRoaXMuaXNkZWJ1ZykgcmV0dXJuXHJcbiAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKSB7XHJcbiAgICAgICAgICAgICBsZXQgc3lzRGF0YSA9IHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICAgICAgIGlmKHN5c0RhdGEuYXBwTmFtZSA9PSAnZGV2dG9vbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ+W8gOWPkeW3peWFt+S4jeaTjeS9nCcpXHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZXlsY/nu5PmnZ8xJyk7XHJcbiAgICAgICAgICAgICAvL2dhbWVDb25maWcuc2hhcmVWaWRlb1RpcHMgPSAwO1xyXG4gICAgICAgICAgICAgaWYgKHNlbGYudmlkZW9fcmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICB2YXIgZW5kVGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKS50b1N0cmluZygpKSAgLy9EYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgIGlmICgoZW5kVGltZSAtIHNlbGYudmlkZW9TdGFydFRpbWUpIC8gMTAwMCA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9Jc0V4aXN0ID0gMTtcclxuICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb0lzRXhpc3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvX3JlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIOW9leWItuinhumikeWIhuS6q1xyXG4gICAgICAqIOWPguaVsDEg5oiQ5Yqf5Zue6LCD5pa55rOVXHJcbiAgICAgICog5Y+C5pWwMiDlpLHotKXlm57osIPmlrnms5VcclxuICAgICAgKi9cclxuICAgICByZWNvcmRpbmdWaWRlb1NoYXJlKGNhbGxCYWNrOiBhbnksIGZhaWxDYWxsQmFjazogYW55KXtcclxuICAgICAgICAgaWYodGhpcy5pc2RlYnVnKSByZXR1cm4gY2FsbEJhY2soKVxyXG4gICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSkge1xyXG4gICAgICAgICAgICAgbGV0IHN5c0RhdGEgPSB0aGlzLmdldFBsYXRmb3JtQ2xhc3MoKS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgICAgICBpZihzeXNEYXRhLmFwcE5hbWUgPT0gJ2RldnRvb2xzJykgcmV0dXJuIGNvbnNvbGUubG9nKCflvIDlj5Hlt6XlhbfkuI3mk43kvZwnKVxyXG4gICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgICBpZihzZWxmLnZpZGVvSXNFeGlzdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICBzZWxmLnNob3dUb2FzdCgn5b2V5Yi25pe26Ze06L+H55+tJylcclxuICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMjAwO1xyXG4gICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGluZ1N0YXRlID0gMztcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudmlkZW9QYXRoKVxyXG4gICAgICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICBjaGFubmVsOiAndmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICBpbWFnZVVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgIGV4dHJhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHZpZGVvUGF0aDogc2VsZi52aWRlb1BhdGgsIC8vIOWPr+eUqOW9leWxj+W+l+WIsOeahOinhumikeWcsOWdgFxyXG4gICAgICAgICAgICAgICAgICAgICB2aWRlb1RvcGljczogc2VsZi50dF9pbmZvLnZpZGVvVG9waWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICBjcmVhdGVDaGFsbGVuZ2U6IHRydWVcclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1RvYXN0KCfliIbkuqvop4bpopHmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5yZWNvcmRpbmdfVmlkZW9fU3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDIwMTtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93VG9hc3QoJ+WIhuS6q+inhumikeWksei0pScpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+WIhuS6q+Wksei0pScsIGUpXHJcbiAgICAgICAgICAgICAgICAgICAgIGZhaWxDYWxsQmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vc2VsZi5yZWNvcmRpbmdfVmlkZW9fU3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgY2FsbEJhY2soKVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLy/lvZXlsY/mmK/lkKblrZjlnKhcclxuICAgICBnZXRWaWRlb0lzRXhpc3QoKXtcclxuICAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9Jc0V4aXN0XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog5re75Yqg5qGM6Z2iXHJcbiAgICAgICogQHBhcmFtIHNjYiBcclxuICAgICAgKiBAcGFyYW0gZmNiIFxyXG4gICAgICAqL1xyXG4gICAgIGFkZFNob3J0Y3V0KHNjYjpGdW5jdGlvbiwgZmNiOkZ1bmN0aW9uKXtcclxuICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuYWRkU2hvcnRjdXQoe1xyXG4gICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIua3u+WKoOahjOmdouaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICBzY2IoKVxyXG4gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCLmt7vliqDmoYzpnaLlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgZmNiKClcclxuICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICog5o+Q56S65qGGXHJcbiAgICAgICovXHJcbiAgICAgc2hvd1RvYXN0KHN0cil7XHJcbiAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgfHwgY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSkge1xyXG4gICAgICAgICAgICAgdGhpcy5nZXRQbGF0Zm9ybUNsYXNzKCkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICB0aXRsZTogc3RyLFxyXG4gICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYHNob3dUb2FzdOiwg+eUqOWksei0pWApO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gVG9hc3Qoc3RyKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIpXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiBcclxuICAgICAvKipcclxuICAgICAgKiDojrflj5bkuI3ph43lpI3nmoTpmo/mnLrmlbBcclxuICAgICAgKiBAcGFyYW0gbWluVmFsdWUg5pyA5bCP5YC8XHJcbiAgICAgICogQHBhcmFtIG1heFZhbHVlIOacgOWkp+WAvFxyXG4gICAgICAqIEBwYXJhbSB2YWx1ZU51bSDpmo/mnLrkuKrmlbBcclxuICAgICAgKi9cclxuICAgICBnZXRSYW5kb21WYWx1ZURpZihtaW5WYWx1ZSwgbWF4VmFsdWUsIHZhbHVlTnVtKSB7XHJcbiAgICAgICAgIC8vIOWFqOmDqOmaj+acuuaVsOWAvCAgXHJcbiAgICAgICAgIGxldCBhbGxOdW1zID0gbmV3IEFycmF5O1xyXG4gXHJcbiAgICAgICAgIC8vIOWIpOaWreiOt+WPlumaj+acuuaVsOS4quaVsCAgXHJcbiAgICAgICAgIGxldCBzaXplID0gdmFsdWVOdW0gPyAodmFsdWVOdW0gPiBtYXhWYWx1ZSAtIG1pblZhbHVlICsgMSA/IG1heFZhbHVlIC0gbWluVmFsdWUgKyAxIDogdmFsdWVOdW0pIDogMTtcclxuIFxyXG4gICAgICAgICAvLyDnlJ/miJDpmo/mnLrmlbDlgLzljLrpl7TmlbDnu4QgIFxyXG4gICAgICAgICBmb3IgKGxldCBpID0gbWluVmFsdWUsIGsgPSAwOyBpIDw9IG1heFZhbHVlOyBpKysgLCBrKyspIHtcclxuICAgICAgICAgICAgIGFsbE51bXNba10gPSBpO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgbGV0IGFyciA9IFtdXHJcbiBcclxuICAgICAgICAgLy8g6ZqP5py65LuO5pWw57uE6YeM6Z2i5Y+W5YC8XHJcbiAgICAgICAgIGFsbE51bXMuc29ydChmdW5jdGlvbiAoKSB7IHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpOyB9KTtcclxuICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbE51bXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgIGFyci5wdXNoKGFsbE51bXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgIGxldCB0bXAgPSBhbGxOdW1zW2luZGV4XTtcclxuICAgICAgICAgICAgIGFsbE51bXNbaW5kZXhdID0gYWxsTnVtc1thbGxOdW1zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgYWxsTnVtc1thbGxOdW1zLmxlbmd0aCAtIDFdID0gdG1wO1xyXG4gICAgICAgICAgICAgYWxsTnVtcy5wb3AoKTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635Y+W6IyD5Zu05YaF55qE6ZqP5py65pWwXHJcbiAgICAgICogQHBhcmFtIG1pblZhbHVlIOacgOWwj+WAvFxyXG4gICAgICAqIEBwYXJhbSBtYXhWYWx1ZSDmnIDlpKflgLxcclxuICAgICAgKi9cclxuICAgICBnZXRSYW5nZVJhbmRvbShtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgLy8g6I635Y+W5pWw57uE5LuO56ys5LiA5Liq5byA5aeL5Yiw5oyH5a6a5Liq5pWw55qE5LiL5qCH5Yy66Ze0ICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tVmFsdWVEaWYobWluVmFsdWUsIG1heFZhbHVlLCAxKVswXTtcclxuICAgICB9XHJcbiBcclxuICAgICB2aWJyYXRlU2hvcnQoKXtcclxuICAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSB8fCBjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcclxuICAgICAgICAgICAgIHRoaXMuZ2V0UGxhdGZvcm1DbGFzcygpLnZpYnJhdGVTaG9ydCgpXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG5cclxuICAgICAvKipcclxuICAgICAgKiDot7Povazlhbbku5blsI/muLjmiI9cclxuICAgICAgKi9cclxuICAgIHR1cm5Ub0FwcChhcHBJZDogc3RyaW5nKXtcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KCflubPlj7DplJnor68nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDorr7nva7mjpLooYzmppxcclxuICAgIHNldFJhbmtTY29yZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3NldFNjb3JlJyxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoJ+W5s+WPsOmUmeivrycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDojrflj5blpb3lj4vmjpLooYzmppxcclxuICAgIGdldFJhbmsoKSB7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ2dldFJhbmsnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgn5bmz5Y+w6ZSZ6K+vJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6KKr5Yqo5YiG5LqrXHJcbiAgICBnYW1lU2hhcmVQYXNzaXZlKCkge1xyXG4gICAgICAgIC8vIOebkeWQrOWwj+eoi+W6j+WPs+S4iuinkuiPnOWNleeahOOAjOi9rOWPkeOAjeaMiemSrlxyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAvLyDmmL7npLrlvZPliY3pobXpnaLnmoTovazlj5HmjInpkq5cclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+W8gOWQr+iiq+WKqOi9rOWPkeaIkOWKn++8gScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflvIDlkK/ooqvliqjovazlj5HlpLHotKXvvIEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPluW9k+WJjeaji+WxgG9uZUNoZXNz5L+h5oGv77yMSlNPTi5zdHJpbmdmeSgp5ZCO5Lyg5YWlcXVlcnlcclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLm9uU2hhcmVBcHBNZXNzYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0U2hhcmVUaXRsZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLvliqjliIbkuqtcclxuICAgIGdhbWVTaGFyZUFjdGl2ZSgpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICB3aW5kb3dbJ3d4J10uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldFNoYXJlVGl0bGUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiB9XHJcbiAiXX0=