class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const m = s1.length,
            n = s2.length;
        if (m + n !== s3.length) return false;

        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));
        const dfs = (i, j, k) => {
            if (k === s3.length) {
                return i === s1.length && j === s2.length;
            }
            if (dp[i][j] !== -1) {
                return dp[i][j];
            }

            let res = false;
            if (i < s1.length && s1[i] === s3[k]) {
                res = dfs(i + 1, j, k + 1);
            }

            if (!res && j < s2.length && s2[j] === s3[k]) {
                res = dfs(i, j + 1, k + 1);
            }
            dp[i][j] = res;
            return res;
        };

        return dfs(0, 0, 0);
    }
}