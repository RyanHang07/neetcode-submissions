class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const memo = Array.from({ length: n }, () => Array(n + 2).fill(-1));

        return this.dfs(nums, 0, -1, memo);
    }

    /**
     * @param {number[]} nums
     * @param {number} i
     * @param {number} j
     * @param {number[][]} memo
     * @return {number}
     */
    dfs(nums, i, j, memo) {
        if (i === nums.length) return 0;
        if (memo[i][j + 1] !== -1) return memo[i][j + 1];

        let LIS = this.dfs(nums, i + 1, j, memo);

        if (j === -1 || nums[j] < nums[i]) {
            LIS = Math.max(LIS, 1 + this.dfs(nums, i + 1, i, memo));
        }

        memo[i][j + 1] = LIS;
        return LIS;
    }
}