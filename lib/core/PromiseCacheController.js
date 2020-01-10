"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageCacheAdapter_1 = __importDefault(require("../adapters/LocalStorageCacheAdapter"));
// ⭐ 很坑的一点，IDEA创建文件 xx.ts import没有问题，但是创建 TypeScript 类型的 xx文件 import的时候找不到
var RAMCacheAdapter_1 = __importDefault(require("../adapters/RAMCacheAdapter"));
var LocalStorageCacheController = new LocalStorageCacheAdapter_1.default();
exports.LocalStorageCacheController = LocalStorageCacheController;
var RAMCacheController = new RAMCacheAdapter_1.default();
exports.RAMCacheController = RAMCacheController;
var CacheController = LocalStorageCacheController;
if (!CacheController.support()) {
    CacheController = RAMCacheController;
}
// 可以独立export default
exports.default = CacheController;
