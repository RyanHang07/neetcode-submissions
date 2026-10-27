class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let m = s.length,
            n = t.length;
        if (n > m) return 0;
        let dp = Array(m + 1)
            .fill()
            .map(() => Array(n + 1).fill(-1));

        const dfs = (i, j) => {
            if (j === n) return 1;
            if (i === m) return 0;
            if (dp[i][j] !== -1) return dp[i][j];

            let res = dfs(i + 1, j);
            if (s[i] === t[j]) {
                res += dfs(i + 1, j + 1);
            }
            dp[i][j] = res;
            return res;
        };

        return dfs(0, 0);
    }
}