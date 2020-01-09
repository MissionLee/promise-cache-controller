import LocalStorageCacheAdapter from '../adapters/LocalStorageCacheAdapter'
// ⭐ 很坑的一点，IDEA创建文件 xx.ts import没有问题，但是创建 TypeScript 类型的 xx文件 import的时候找不到
import RAMCacheAdapter from '../adapters/RAMCacheAdapter';
let LocalStorageCacheController = new LocalStorageCacheAdapter()
let RAMCacheController = new RAMCacheAdapter();
let CacheController  = LocalStorageCacheController;
if(!CacheController.support()){
    CacheController = RAMCacheController;
}
// export 多个普通对象要写在一起
export {LocalStorageCacheController,RAMCacheController};
// 可以独立export default
export default CacheController;

