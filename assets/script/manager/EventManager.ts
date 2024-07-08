// Created by carolsail

interface IEventItem {
    event: Function
    context: unknown
}

export default class EventManager {
    private static _instance: any = null

    static getInstance<T>(): T {
        if (this._instance === null) {
            this._instance = new this()
        }

        return this._instance
    }

    eventMap: Map<String, Array<IEventItem>> = new Map()

    static get instance() {
        return this.getInstance<EventManager>()
    }
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
    on(name: string, event: Function, context?: unknown) {
        if (this.eventMap.has(name)) {
            const eventArr = this.eventMap.get(name)
            eventArr.push({ event, context })
        } else {
            this.eventMap.set(name, [{ event, context }])
        }
    }
    /**
       * 取消绑定一个事件处理函数。
       * @param name 事件的名称。
       * @param event 待取消绑定的事件处理函数。
       * 
       * 此函数用于从特定事件名下的事件处理函数数组中移除指定的事件处理函数。
       * 如果事件名存在且数组中包含指定的事件处理函数，则将其移除。
       */
    off(name: string, event: Function) {
        if (this.eventMap.has(name)) {
            const eventArr = this.eventMap.get(name)
            const index = eventArr.findIndex(item => item.event == event)
            if (index > -1) eventArr.splice(index, 1)
        }
    }
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
    emit(name: string, ...params: unknown[]) {
        if (this.eventMap.has(name)) {
            const eventArr = this.eventMap.get(name)
            eventArr.forEach(({ event, context }) => {
                context ? event.apply(context, params) : event(params)
            })
        }
    }
    /**
        * 清空事件映射表
        * 
        * 该方法用于清除当前实例中事件映射表的所有绑定。调用后，事件映射表将为空，不再包含任何事件绑定。
        * 这是清理资源、避免内存泄漏的一种方式，特别是在需要重新绑定事件或完全解绑所有事件时。
        * 
        * @remarks
        * 此方法不接受任何参数，也不返回任何值。
        */
    clear() {
        this.eventMap.clear()
    }
}