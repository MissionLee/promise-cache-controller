import LocalStorageCacheAdapter from '../adapters/LocalStorageCacheAdapter'
import RAMCacheAdapter from '../adapters/';
let LocalStorageCacheController = new LocalStorageCacheAdapter()
let RAMCacheController = new RAMCacheAdapter();
let CacheController  = LocalStorageCacheController;
if(!CacheController.support()){
    CacheController = RAMCacheController;
}
export LocalStorageCacheController;
export RAMCacheController;
export default CacheController;

