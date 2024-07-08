
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cf7b6Ytg5KA6jWVBeOJfS5', 'EventManager');
// script/manager/EventManager.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.eventMap = new Map();
    }
    EventManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(EventManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    /**
       * 注册事件监听器。
       *
       * 此方法用于将一个事件监听函数绑定到特定的事件名上。如果事件名已存在，则将新的监听函数添加到已有的监听函数列表中；
       * 如果事件名不存在，则创建一个新的事件名并添加监听函数。
       *
       * @param name 事件名。用于标识要监听的事件。
       * @param event 事件监听函数。当事件被触发时，这个函数将被调用。
       * @param context 上下文对象。可选参数，用于指定事件监听函数执行时的上下文对象，默认为undefined。
       */
    EventManager.prototype.on = function (name, event, context) {
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            eventArr.push({ event: event, context: context });
        }
        else {
            this.eventMap.set(name, [{ event: event, context: context }]);
        }
    };
    /**
       * 取消绑定一个事件处理函数。
       * @param name 事件的名称。
       * @param event 待取消绑定的事件处理函数。
       *
       * 此函数用于从特定事件名下的事件处理函数数组中移除指定的事件处理函数。
       * 如果事件名存在且数组中包含指定的事件处理函数，则将其移除。
       */
    EventManager.prototype.off = function (name, event) {
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            var index = eventArr.findIndex(function (item) { return item.event == event; });
            if (index > -1)
                eventArr.splice(index, 1);
        }
    };
    /**
         * 发送事件给对应的监听器。
         *
         * 此函数用于触发特定名称的事件，事件的监听器将根据名称从事件映射表中找到并调用。
         * 如果事件有上下文（context），则在该上下文中调用事件处理函数；如果没有，则直接调用事件处理函数。
         * 这种设计允许灵活地处理事件，无论是需要特定上下文还是不需要。
         *
         * @param name 事件的名称。这是用来从事件映射表中查找对应的事件监听器的关键字。
         * @param params 传递给事件处理函数的参数。这些参数是可变的，允许调用者传递任意数量的参数。
         */
    EventManager.prototype.emit = function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            eventArr.forEach(function (_a) {
                var event = _a.event, context = _a.context;
                context ? event.apply(context, params) : event(params);
            });
        }
    };
    /**
        * 清空事件映射表
        *
        * 该方法用于清除当前实例中事件映射表的所有绑定。调用后，事件映射表将为空，不再包含任何事件绑定。
        * 这是清理资源、避免内存泄漏的一种方式，特别是在需要重新绑定事件或完全解绑所有事件时。
        *
        * @remarks
        * 此方法不接受任何参数，也不返回任何值。
        */
    EventManager.prototype.clear = function () {
        this.eventMap.clear();
    };
    EventManager._instance = null;
    return EventManager;
}());
exports.default = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxFdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7QUFPdkI7SUFBQTtRQVdJLGFBQVEsR0FBbUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQW9FeEQsQ0FBQztJQTVFVSx3QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1NBQzlCO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFJRCxzQkFBVyx3QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBZ0IsQ0FBQTtRQUMzQyxDQUFDOzs7T0FBQTtJQUNEOzs7Ozs7Ozs7U0FTSztJQUNMLHlCQUFFLEdBQUYsVUFBRyxJQUFZLEVBQUUsS0FBZSxFQUFFLE9BQWlCO1FBQy9DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQTtTQUNwQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNoRDtJQUNMLENBQUM7SUFDRDs7Ozs7OztTQU9LO0lBQ0wsMEJBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxLQUFlO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFuQixDQUFtQixDQUFDLENBQUE7WUFDN0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzVDO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7Ozs7V0FTTztJQUNQLDJCQUFJLEdBQUosVUFBSyxJQUFZO1FBQUUsZ0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQiwrQkFBb0I7O1FBQ25DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWtCO29CQUFoQixLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUE7Z0JBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMxRCxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7OztVQVFNO0lBQ04sNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQTdFYyxzQkFBUyxHQUFRLElBQUksQ0FBQTtJQThFeEMsbUJBQUM7Q0EvRUQsQUErRUMsSUFBQTtrQkEvRW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbFxyXG5cclxuaW50ZXJmYWNlIElFdmVudEl0ZW0ge1xyXG4gICAgZXZlbnQ6IEZ1bmN0aW9uXHJcbiAgICBjb250ZXh0OiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFueSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oKTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRNYXA6IE1hcDxTdHJpbmcsIEFycmF5PElFdmVudEl0ZW0+PiA9IG5ldyBNYXAoKVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2U8RXZlbnRNYW5hZ2VyPigpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICog5rOo5YaM5LqL5Lu255uR5ZCs5Zmo44CCXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiDmraTmlrnms5XnlKjkuo7lsIbkuIDkuKrkuovku7bnm5HlkKzlh73mlbDnu5HlrprliLDnibnlrprnmoTkuovku7blkI3kuIrjgILlpoLmnpzkuovku7blkI3lt7LlrZjlnKjvvIzliJnlsIbmlrDnmoTnm5HlkKzlh73mlbDmt7vliqDliLDlt7LmnInnmoTnm5HlkKzlh73mlbDliJfooajkuK3vvJtcclxuICAgICAgICog5aaC5p6c5LqL5Lu25ZCN5LiN5a2Y5Zyo77yM5YiZ5Yib5bu65LiA5Liq5paw55qE5LqL5Lu25ZCN5bm25re75Yqg55uR5ZCs5Ye95pWw44CCXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiBAcGFyYW0gbmFtZSDkuovku7blkI3jgILnlKjkuo7moIfor4bopoHnm5HlkKznmoTkuovku7bjgIJcclxuICAgICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuebkeWQrOWHveaVsOOAguW9k+S6i+S7tuiiq+inpuWPkeaXtu+8jOi/meS4quWHveaVsOWwhuiiq+iwg+eUqOOAglxyXG4gICAgICAgKiBAcGFyYW0gY29udGV4dCDkuIrkuIvmloflr7nosaHjgILlj6/pgInlj4LmlbDvvIznlKjkuo7mjIflrprkuovku7bnm5HlkKzlh73mlbDmiafooYzml7bnmoTkuIrkuIvmloflr7nosaHvvIzpu5jorqTkuLp1bmRlZmluZWTjgIJcclxuICAgICAgICovXHJcbiAgICBvbihuYW1lOiBzdHJpbmcsIGV2ZW50OiBGdW5jdGlvbiwgY29udGV4dD86IHVua25vd24pIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudE1hcC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRBcnIgPSB0aGlzLmV2ZW50TWFwLmdldChuYW1lKVxyXG4gICAgICAgICAgICBldmVudEFyci5wdXNoKHsgZXZlbnQsIGNvbnRleHQgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFwLnNldChuYW1lLCBbeyBldmVudCwgY29udGV4dCB9XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICog5Y+W5raI57uR5a6a5LiA5Liq5LqL5Lu25aSE55CG5Ye95pWw44CCXHJcbiAgICAgICAqIEBwYXJhbSBuYW1lIOS6i+S7tueahOWQjeensOOAglxyXG4gICAgICAgKiBAcGFyYW0gZXZlbnQg5b6F5Y+W5raI57uR5a6a55qE5LqL5Lu25aSE55CG5Ye95pWw44CCXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiDmraTlh73mlbDnlKjkuo7ku47nibnlrprkuovku7blkI3kuIvnmoTkuovku7blpITnkIblh73mlbDmlbDnu4TkuK3np7vpmaTmjIflrprnmoTkuovku7blpITnkIblh73mlbDjgIJcclxuICAgICAgICog5aaC5p6c5LqL5Lu25ZCN5a2Y5Zyo5LiU5pWw57uE5Lit5YyF5ZCr5oyH5a6a55qE5LqL5Lu25aSE55CG5Ye95pWw77yM5YiZ5bCG5YW256e76Zmk44CCXHJcbiAgICAgICAqL1xyXG4gICAgb2ZmKG5hbWU6IHN0cmluZywgZXZlbnQ6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50QXJyID0gdGhpcy5ldmVudE1hcC5nZXQobmFtZSlcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBldmVudEFyci5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmV2ZW50ID09IGV2ZW50KVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgZXZlbnRBcnIuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICAqIOWPkemAgeS6i+S7tue7meWvueW6lOeahOebkeWQrOWZqOOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOatpOWHveaVsOeUqOS6juinpuWPkeeJueWumuWQjeensOeahOS6i+S7tu+8jOS6i+S7tueahOebkeWQrOWZqOWwhuagueaNruWQjeensOS7juS6i+S7tuaYoOWwhOihqOS4reaJvuWIsOW5tuiwg+eUqOOAglxyXG4gICAgICAgICAqIOWmguaenOS6i+S7tuacieS4iuS4i+aWh++8iGNvbnRleHTvvInvvIzliJnlnKjor6XkuIrkuIvmlofkuK3osIPnlKjkuovku7blpITnkIblh73mlbDvvJvlpoLmnpzmsqHmnInvvIzliJnnm7TmjqXosIPnlKjkuovku7blpITnkIblh73mlbDjgIJcclxuICAgICAgICAgKiDov5nnp43orr7orqHlhYHorrjngbXmtLvlnLDlpITnkIbkuovku7bvvIzml6DorrrmmK/pnIDopoHnibnlrprkuIrkuIvmlofov5jmmK/kuI3pnIDopoHjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZSDkuovku7bnmoTlkI3np7DjgILov5nmmK/nlKjmnaXku47kuovku7bmmKDlsITooajkuK3mn6Xmib7lr7nlupTnmoTkuovku7bnm5HlkKzlmajnmoTlhbPplK7lrZfjgIJcclxuICAgICAgICAgKiBAcGFyYW0gcGFyYW1zIOS8oOmAkue7meS6i+S7tuWkhOeQhuWHveaVsOeahOWPguaVsOOAgui/meS6m+WPguaVsOaYr+WPr+WPmOeahO+8jOWFgeiuuOiwg+eUqOiAheS8oOmAkuS7u+aEj+aVsOmHj+eahOWPguaVsOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgZW1pdChuYW1lOiBzdHJpbmcsIC4uLnBhcmFtczogdW5rbm93bltdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50QXJyID0gdGhpcy5ldmVudE1hcC5nZXQobmFtZSlcclxuICAgICAgICAgICAgZXZlbnRBcnIuZm9yRWFjaCgoeyBldmVudCwgY29udGV4dCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0ID8gZXZlbnQuYXBwbHkoY29udGV4dCwgcGFyYW1zKSA6IGV2ZW50KHBhcmFtcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICAqIOa4heepuuS6i+S7tuaYoOWwhOihqFxyXG4gICAgICAgICogXHJcbiAgICAgICAgKiDor6Xmlrnms5XnlKjkuo7muIXpmaTlvZPliY3lrp7kvovkuK3kuovku7bmmKDlsITooajnmoTmiYDmnInnu5HlrprjgILosIPnlKjlkI7vvIzkuovku7bmmKDlsITooajlsIbkuLrnqbrvvIzkuI3lho3ljIXlkKvku7vkvZXkuovku7bnu5HlrprjgIJcclxuICAgICAgICAqIOi/meaYr+a4heeQhui1hOa6kOOAgemBv+WFjeWGheWtmOazhOa8j+eahOS4gOenjeaWueW8j++8jOeJueWIq+aYr+WcqOmcgOimgemHjeaWsOe7keWumuS6i+S7tuaIluWujOWFqOino+e7keaJgOacieS6i+S7tuaXtuOAglxyXG4gICAgICAgICogXHJcbiAgICAgICAgKiBAcmVtYXJrc1xyXG4gICAgICAgICog5q2k5pa55rOV5LiN5o6l5Y+X5Lu75L2V5Y+C5pWw77yM5Lmf5LiN6L+U5Zue5Lu75L2V5YC844CCXHJcbiAgICAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYXAuY2xlYXIoKVxyXG4gICAgfVxyXG59Il19