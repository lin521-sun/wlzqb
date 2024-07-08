
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Ball');
require('./assets/script/Breath');
require('./assets/script/Camera');
require('./assets/script/Endpoint');
require('./assets/script/Enemy');
require('./assets/script/Enum');
require('./assets/script/Food');
require('./assets/script/Index');
require('./assets/script/Levels');
require('./assets/script/Paper');
require('./assets/script/Player');
require('./assets/script/StaticInstance');
require('./assets/script/Timer');
require('./assets/script/Toast');
require('./assets/script/Utils');
require('./assets/script/layer/Baselayer');
require('./assets/script/layer/GameLayer');
require('./assets/script/layer/LevelLayer');
require('./assets/script/layer/LoadingLayer');
require('./assets/script/layer/LoseLayer');
require('./assets/script/layer/MenuLayer');
require('./assets/script/layer/NoticeLayer');
require('./assets/script/layer/RankLayer');
require('./assets/script/layer/SettingLayer');
require('./assets/script/layer/SideBarLayer');
require('./assets/script/layer/TipLayer');
require('./assets/script/layer/WinLayer');
require('./assets/script/manager/AudioManager');
require('./assets/script/manager/DataManager');
require('./assets/script/manager/EventManager');
require('./assets/script/manager/GameManager');
require('./assets/script/manager/ResourceManager');
require('./assets/script/manager/SdkManager');
require('./assets/script/manager/UIManager');

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