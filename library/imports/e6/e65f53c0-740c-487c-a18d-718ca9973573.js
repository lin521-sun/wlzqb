"use strict";
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