class Solution {
    /**
     * @param {number[]} piles
     * @return {number}
     */
    stoneGameII(piles) {
        const n = piles.length;
        this.dp = Array.from({ length: 2 }, () =>
            Array.from({ length: n }, () => Array(n + 1).fill(-1)),
        );

        const dfs = (alice, i, M) => {
            if (i === n) return 0;
            if (this.dp[alice][i][M] !== -1) return this.dp[alice][i][M];

            let res = alice === 1 ? 0 : Infinity;
            let total = 0;

            for (let X = 1; X <= 2 * M; X++) {
                if (i + X > n) break;
                total += piles[i + X - 1];
                if (alice === 1) {
                    res = Math.max(res, total + dfs(0, i + X, Math.max(M, X)));
                } else {
                    res = Math.min(res, dfs(1, i + X, Math.max(M, X)));
                }
            }

            this.dp[alice][i][M] = res;
            return res;
        };

        return dfs(1, 0, 1);
    }
}