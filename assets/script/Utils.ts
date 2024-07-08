// Created by carolsail

// 生产随机数字
export function getRandom(lower: number, upper:number): number {
    return Math.floor(Math.random() * (upper - lower+1)) + lower;
}

// 引用数据值传递
export function clone(obj: any){
    return JSON.parse(JSON.stringify(obj))
}
