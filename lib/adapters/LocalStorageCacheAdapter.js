"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageCacheAdapter = /** @class */ (function () {
    function LocalStorageCacheAdapter() {
    }
    LocalStorageCacheAdapter.prototype.clear = function () {
        localStorage.clear();
    };
    LocalStorageCacheAdapter.prototype.getCache = function (key) {
        return new Promise(function (resolve) {
            resolve(localStorage.getItem(key));
        });
    };
    LocalStorageCacheAdapter.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageCacheAdapter.prototype.key = function (index) {
        return localStorage.key(index);
    };
    LocalStorageCacheAdapter.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageCacheAdapter.prototype.setCache = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageCacheAdapter.prototype.setItem = function (key, value) {
        this.setCache(key, value);
    };
    LocalStorageCacheAdapter.prototype.support = function () {
        return false;
        // return window && window.localStorage && Storage && window.localStorage instanceof Storage;
    };
    return LocalStorageCacheAdapter;
}());
exports.default = LocalStorageCacheAdapter;
