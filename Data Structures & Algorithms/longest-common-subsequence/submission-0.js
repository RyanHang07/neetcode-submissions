class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = Array(text1.length)
            .fill()
            .map(() => Array(text2.length).fill(-1));

        const dfs = (i, j) => {
            if (i === text1.length || j === text2.length) {
                return 0;
            }
            if (memo[i][j] !== -1) {
                return memo[i][j];
            }
            if (text1[i] === text2[j]) {
                memo[i][j] = 1 + dfs(i + 1, j + 1);
            } else {
                memo[i][j] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
            }
            return memo[i][j];
        };

        return dfs(0, 0);
    }
}