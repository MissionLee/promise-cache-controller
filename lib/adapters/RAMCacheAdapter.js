"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RAMCacheAdapter = /** @class */ (function () {
    function RAMCacheAdapter() {
        this.cache = {};
    }
    RAMCacheAdapter.prototype.clear = function () {
        this.cache = {};
    };
    RAMCacheAdapter.prototype.getCache = function (key) {
        var _this = this;
        // @ts-ignore
        return new Promise(function getTheCache(resolve, reject) {
            var value = _this.cache[key];
            if (value)
                resolve(value);
            else
                reject("not existed");
        });
    };
    RAMCacheAdapter.prototype.getItem = function (key) {
        return this.cache[key];
    };
    RAMCacheAdapter.prototype.key = function (index) {
        throw new Error("function RAMCacheAdapter.ts.key(index: number) not supported");
    };
    RAMCacheAdapter.prototype.removeItem = function (key) {
        delete this.cache[key];
    };
    RAMCacheAdapter.prototype.setCache = function (key, value) {
        this.cache[key] = value;
    };
    RAMCacheAdapter.prototype.setItem = function (key, value) {
        this.setCache(key, value);
    };
    RAMCacheAdapter.prototype.support = function () {
        return true;
    };
    return RAMCacheAdapter;
}());
exports.default = RAMCacheAdapter;
