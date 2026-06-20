class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];
        for (let mask = 0; mask < 1 << n; mask++) {
            if (mask.toString(2).split('1').length - 1 !== k) {
                continue;
            }

            const comb = [];
            for (let bit = 0; bit < n; bit++) {
                if (mask & (1 << bit)) {
                    comb.push(bit + 1);
                }
            }
            res.push(comb);
        }
        return res;
    }
}