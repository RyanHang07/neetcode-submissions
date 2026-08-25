class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        prices[src] = 0;

        for (let i = 0; i <= k; i++) {
            const tmpPrices = [...prices];

            for (const flight of flights) {
                const s = flight[0];
                const d = flight[1];
                const p = flight[2];

                if (prices[s] === Number.MAX_SAFE_INTEGER) continue;

                if (prices[s] + p < tmpPrices[d]) tmpPrices[d] = prices[s] + p;
            }

            prices = tmpPrices;
        }

        return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst];
    }
}