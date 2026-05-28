class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.timestamp = 0;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        node.freq++;
        node.timestamp = ++this.timestamp;
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.capacity <= 0) return;

        this.timestamp++;
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            node.freq++;
            node.timestamp = this.timestamp;
            return;
        }

        if (this.cache.size >= this.capacity) {
            let minFreq = Infinity,
                minTimestamp = Infinity,
                lfuKey = null;

            for (const [k, node] of this.cache.entries()) {
                if (
                    node.freq < minFreq ||
                    (node.freq === minFreq && node.timestamp < minTimestamp)
                ) {
                    minFreq = node.freq;
                    minTimestamp = node.timestamp;
                    lfuKey = k;
                }
            }

            if (lfuKey !== null) this.cache.delete(lfuKey);
        }

        this.cache.set(key, { value, freq: 1, timestamp: this.timestamp });
    }
}