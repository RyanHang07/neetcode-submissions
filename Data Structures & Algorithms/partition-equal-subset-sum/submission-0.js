class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((a, b) => a + b, 0);
        if (sum % 2 !== 0) {
            return false;
        }
        const n = nums.length;
        this.memo = Array.from(Array(n + 1), () =>
            Array(sum / 2 + 1).fill(null),
        );

        return this.dfs(nums, 0, sum / 2);
    }

    /**
     * @params {number[]} nums
     * @params {number} i
     * @params {number} target
     * @return {boolean}
     */
    dfs(nums, i, target) {
        if (i === nums.length) {
            return target === 0;
        }
        if (target < 0) {
            return false;
        }
        if (this.memo[i][target] != null) {
            return this.memo[i][target];
        }

        this.memo[i][target] =
            this.dfs(nums, i + 1, target) ||
            this.dfs(nums, i + 1, target - nums[i]);
        return this.memo[i][target];
    }
}