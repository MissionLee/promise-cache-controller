import CacheAdapter from "./CacheAdapter";

export default class RAMCacheAdapter implements CacheAdapter {
    constructor() {
        this.cache = {};
    }

    cache: {};

    [name: string]: any;

    readonly length: number;

    clear(): void {
        this.cache = {}
    }

    getCache(key: string): Promise<string | null> {
        let _this = this;
        // @ts-ignore
        return new Promise(function getTheCache(resolve, reject) {
            let value = _this.cache[key];
            if (value)
                resolve(value)
            else
                reject("not existed")
        });
    }

    getItem(key: string): string | null {
        return this.cache[key];
    }

    key(index: number): string | null {
        throw new Error("function RAMCacheAdapter.ts.key(index: number) not supported");
    }

    removeItem(key: string): void {
        delete this.cache[key];
    }

    setCache(key: string, value: string): void {
        this.cache[key] = value;
    }

    setItem(key: string, value: string): void {
        this.setCache(key, value);
    }

    support(): boolean {
        return true;
    }

}