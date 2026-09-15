class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        let dp = { 0: 1 };
        for (let total = 1; total <= target; total++) {
            dp[total] = 0;
            for (let num of nums) {
                dp[total] += dp[total - num] || 0;
            }
        }
        return dp[target];
    }
}