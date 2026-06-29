class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const totalLength = matchsticks.reduce((a, b) => a + b, 0);
        if (totalLength % 4 !== 0) return false;

        const length = totalLength / 4;
        if (Math.max(...matchsticks) > length) return false;

        matchsticks.sort((a, b) => b - a);
        const n = matchsticks.length;
        const dp = new Array(1 << n).fill(-Infinity);

        const dfs = (mask) => {
            if (mask === 0) return 0;
            if (dp[mask] !== -Infinity) return dp[mask];

            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) {
                    const res = dfs(mask ^ (1 << i));
                    if (res >= 0 && res + matchsticks[i] <= length) {
                        dp[mask] = (res + matchsticks[i]) % length;
                        return dp[mask];
                    }

                    if (mask === (1 << n) - 1) {
                        dp[mask] = -1;
                        return -1;
                    }
                }
            }

            dp[mask] = -1;
            return dp[mask];
        };

        return dfs((1 << n) - 1) === 0;
    }
}