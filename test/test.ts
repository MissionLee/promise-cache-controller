import CacheController from "../index";
CacheController.setCache('a',"hello")

CacheController.getCache('a').then(function(value){
    console.log(value)
}).catch(function(some){
    console.log(some)
})