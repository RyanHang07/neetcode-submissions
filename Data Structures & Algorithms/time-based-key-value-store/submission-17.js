class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        } else {
            let l = 0;
            let r = this.keyStore.get(key).length - 1;
            let result = "";
            while (l <= r) {
                let mid = Math.floor((l + r) / 2);
                if (this.keyStore.get(key)[mid][0] <= timestamp) {
                    result = this.keyStore.get(key)[mid][1];
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            return result;
        }

    }
}
