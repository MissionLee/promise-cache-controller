export default interface CacheAdapter extends Storage{
    /**
     * Sets the value of the pair identified by key to value,creating a new key/value pair if none existed for key previously.
     *
     * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
     */
    setCache(key:string,value:string):void;

    /**
     * Returns the current value associated with the given key(Promise<string|null>).
     */
    getCache(key:string):Promise<string|null>;

    /**
     * Returns whether env support the implementation
     */
    support():boolean;
}
