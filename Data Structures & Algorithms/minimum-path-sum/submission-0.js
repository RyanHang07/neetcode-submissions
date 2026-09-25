class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const m = grid.length,
            n = grid[0].length;
        const dp = Array.from({ length: m }, () => Array(n).fill(-1));

        const dfs = (r, c) => {
            if (r === m - 1 && c === n - 1) {
                return grid[r][c];
            }
            if (r === m || c === n) {
                return Infinity;
            }
            if (dp[r][c] !== -1) {
                return dp[r][c];
            }

            dp[r][c] = grid[r][c] + Math.min(dfs(r + 1, c), dfs(r, c + 1));
            return dp[r][c];
        };

        return dfs(0, 0);
    }
}