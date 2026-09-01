class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        const n = nums.length;
        const memo = Array.from({ length: n }, () => Array(2).fill(-1));

        const dfs = (i, flag) => {
            if (i >= n || (flag && i === n - 1)) return 0;
            if (memo[i][flag] !== -1) return memo[i][flag];

            memo[i][flag] = Math.max(
                dfs(i + 1, flag),
                nums[i] + dfs(i + 2, flag | (i === 0)),
            );
            return memo[i][flag];
        };

        return Math.max(dfs(0, 1), dfs(1, 0));
    }
}