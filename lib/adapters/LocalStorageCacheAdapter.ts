import CacheAdapter from "./CacheAdapter";

export default class LocalStorageCacheAdapter implements CacheAdapter{
    [name: string]: any;

    readonly length: number;

    clear(): void {
        localStorage.clear();
    }

    getCache(key: string): Promise<string | null> {
        return new Promise<string|null>(function(resolve){
            resolve(localStorage.getItem(key))
        });
    }

    getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    key(index: number): string | null {
        return localStorage.key(index);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    setCache(key: string, value: string): void {
        localStorage.setItem(key,value)
    }

    setItem(key: string, value: string): void {
        this.setCache(key,value);
    }

    support(): boolean {
        return window.localStorage && Storage && window.localStorage instanceof Storage;
    }
}