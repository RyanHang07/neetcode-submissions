class Solution {
    /**
     * @param {number[]} piles
     * @return {boolean}
     */
    stoneGame(piles) {
        const n = piles.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(-1));

        const dfs = (l, r) => {
            if (l > r) {
                return 0;
            }
            if (dp[l][r] !== -1) {
                return dp[l][r];
            }
            const even = (r - l) % 2 === 0;
            const left = even ? piles[l] : 0;
            const right = even ? piles[r] : 0;
            dp[l][r] = Math.max(dfs(l + 1, r) + left, dfs(l, r - 1) + right);
            return dp[l][r];
        };

        const total = piles.reduce((a, b) => a + b, 0);
        const aliceScore = dfs(0, n - 1);
        return aliceScore > total - aliceScore;
    }
}