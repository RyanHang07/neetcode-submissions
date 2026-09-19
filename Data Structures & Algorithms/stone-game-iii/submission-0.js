class Solution {
    /**
     * @param {number[]} stoneValue
     * @return {string}
     */
    stoneGameIII(stoneValue) {
        const n = stoneValue.length;
        const dp = Array.from({ length: n }, () => [null, null]);

        const dfs = (i, alice) => {
            if (i >= n) return 0;
            if (dp[i][alice] !== null) return dp[i][alice];

            let res = alice === 1 ? -Infinity : Infinity;
            let score = 0;
            for (let j = i; j < Math.min(i + 3, n); j++) {
                if (alice === 1) {
                    score += stoneValue[j];
                    res = Math.max(res, score + dfs(j + 1, 0));
                } else {
                    score -= stoneValue[j];
                    res = Math.min(res, score + dfs(j + 1, 1));
                }
            }

            dp[i][alice] = res;
            return res;
        };

        const result = dfs(0, 1);
        if (result === 0) return 'Tie';
        return result > 0 ? 'Alice' : 'Bob';
    }
}