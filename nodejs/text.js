// let node = require('./config')
// function* hello() {
//     yield 100
//     yield (() => {
//         return 200
//     })()
//     return 300
// }
// let h = hello()
// console.log(h.next())
// console.log(h.next())
// console.log(h.next())

// 闭包
// function bi() {
//     let blue = '111';
//     function inner() {
//         console.log(blue)
//     }
//     return inner
// }
// let b = bi()
// b()

// class
// class bobo {
//     constructor(name) {
//         this.name = name
//     }
//     tostring() {
//         return '111'
//     }
// }

// class tto extends bobo {
//     constructor(x) {
//         super(name)
//         this.x = x
//     }
//     tobolo() {
//         return super.tostring()
//     }
// }

// console.log(tto)

// 测试数据
// console.log(node)
// let dataMenus = node.node.menus
// let datenote = ["个人信息,吸毒史"]
// let a = dataMenus.map(e => {
//     return {
//         name: e.name,
//         menu: e.menu.filter(i => {
//             return datenote.includes(i.title)
//         })
// menu: e.menu.map(l => {
//     if (datenote.includes(l.title)) {
//         return {
//             api: l.api,
//             title: l.title,
//             showstyle: true
//         }
//     }
//     return {
//         api: l.api,
//         title: l.title,
//         showstyle: false
//     }
// })
//     }
// })
// for (let i = a.length - 1; i >= 0; i--) {
//     if (JSON.stringify(a[i].menu) === '[]') {
//         a.splice(i, 1)
//     }
// if (a[i].menu.some(e => {
//     return e.showstyle === true
// })) {
//     a.splice(i, 1)
// }

// }
// console.log(JSON.stringify(a))
// Promise的链式调用
/**
 *
 * @param {Number} value1
 * promise.resolve()启动的函数可以链式调用但是不支持异步
 */

// let task1 = (value1) => {
//     let concat1 = value1 + 1
//     console.log(concat1)
//     return concat1
// }
// let task2 = (value2) => {
//     // let concat2 = value2 + 2
//     // console.log(concat2)
//     // return concat2
//     setTimeout(() => {
//         let concat2 = value2 + 2
//         console.log(concat2)
//         // return concat2
//         Promise.resolve(concat2)
//     }, 500);
// }
// let task3 = (value3) => { console.log(value3 + 3) }

// Promise.resolve(1).then(task1).then(task2).then(task3)


/**
 *
 * 链式调用总结:
 * 调用的所有函数都必须是promise函数
 * 在第一个函数执行的resolve中的参数就是下一个then中函数的参数
 * 异步的情况必须是在异步中seolve要不然不能构成链式调用
 */
// let task1 = (value1) => {
//     return new Promise((resolve, reject) => {
//         if (resolve) {
//             let concat1 = value1 + 1
//             console.log(concat1)
//             resolve(concat1)
//         } else {
//             throw new Error('error value1');

//         }
//     })
// }

// let task2 = (value2) => {
//     return new Promise((resolve, reject) => {
//         if (resolve) {
//             let concat2 = ''
//             setTimeout(() => {
//                 concat2 = value2 + 2
//                 console.log(concat2)
//                 resolve(concat2)
//             }, 500);
//         } else {
//             throw new Error('error value2')
//         }
//     })
// }

// let task3 = (value3) => {
//     return new Promise((resolve, reject) => {
//         if (resolve) {
//             let concat3 = value3 + 3
//             console.log(concat3)
//             resolve(concat3)
//         } else {
//             throw new Error('error value3')
//         }
//     })
// }

// task1(1).then(task2).then(task3)

// this.$jsonp('url', data, function callback (e) {
//     console.log(e)
// })

// setTimeout(() => {
//     console.log(1)
// }, 100);

// setTimeout(() => {
//     console.log(2)
// }, 0);

// console.log(3)


/**
 * @param {parseInt(x,y)} parseInt 转换为10进制第一个参数为需要转换的数据 第二个参数是这个数据是什么进制
 * @param {(x).toString(y)} toString x:需要转换的数据  y:转换为什么进制
 */
// parseInt转16进制
// console.log((7233).toString(16))
// console.log(parseInt('1c41', 16))
//2进制到10进制；
// parseInt(10, 2) //=>2
// //2进制到10进制；
// parseInt(100, 2) //=>4
// //16进制到10进制
// parseInt(12, 16) //=>18
// //8进制到10进制
// parseInt(12, 8); //=>10
// //10进制转为16进制
// (10).toString(16) // =>"a"
//     //8进制转为16进制
//     (012).toString(16) // =>"a"
//     //16进制转为10进制
//     (0x16).toString(10) // =>"22"
//     //16进制转为8进制
//     (0x16).toString(8) // =>"26"
//     //10进制转为2进制 //=>
//     (1111).toString(2) // => "10001010111"
//     //8进制转为2进制 //=>
//     (01111).toString(2) //=>"1001001001"
//     //16进制转为2进制 //=>
//     (0x16).toString(2) // => "10110"

/**
 * @async call
 * @async apply
 * @constant fun.call(obj,1,2,3) call中传入的是单个参数值
 * @constant fun.apply(obj,[1,2,3]) apply中传入的是参数集合
 */
// let a = function () {
//     this.name = 'red'
//     this.say = function () {
//         console.log(this.color)
//     }
// }
// a.prototype = {
//     color: 'red',
//     say: function () {
//         console.log(this.color)
//     }
// }
// let b = new a
// e = {
//     color: 'blue'
// }
// b.say.apply(e)
// d = {
//     color: 'readonly',
//     haha: () => {

//     }
// }
/**
 * @constant jquery
 *
 */
// let $ = require('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
// console.log($)
// let script = document.createElement('script')
// script.setAttribute('src', 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
// console.log($)
