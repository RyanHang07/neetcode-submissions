class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Map();
        dp.set(s.length, 1);

        return this.dfs(s, 0, dp);
    }

    /**
     * @param {string} s
     * @param {number} i
     * @param {Map} dp
     * @return {number}
     */
    dfs(s, i, dp) {
        if (dp.has(i)) {
            return dp.get(i);
        }
        if (s.charAt(i) === '0') {
            return 0;
        }

        let res = this.dfs(s, i + 1, dp);
        if (
            i + 1 < s.length &&
            (s.charAt(i) === '1' ||
                (s.charAt(i) === '2' && s.charAt(i + 1) < '7'))
        ) {
            res += this.dfs(s, i + 2, dp);
        }
        dp.set(i, res);
        return res;
    }
}