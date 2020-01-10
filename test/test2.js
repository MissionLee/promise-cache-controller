// js 中使用 import xxx from yyy 的时候，会报错 SyntaxError: Unexpected token xxx
// 使用require的时候，无法直接取到默认值，还要在后面加上一个 .default 我们这边的处理方法是在 index2.js 里面转接的时候输出default
let CacheController =require("../index2")
CacheController.setCache('a',"hello")
CacheController.getCache('a').then(function(value){
    console.log(value)
}).catch(function(some){
    console.log(some)
})
CacheController.getCache('b').then(function(value){
    console.log(value)
}).catch(function(some){
    console.log(some)
})