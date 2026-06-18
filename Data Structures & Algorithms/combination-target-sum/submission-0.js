class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let cur = [];
        this.backtrack(nums, target, ans, cur, 0);
        return ans;
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @param {number[][]} ans
     * @param {number[]} cur
     * @param {number} index
     */
    backtrack(nums, target, ans, cur, index) {
        if (target === 0) {
            ans.push([...cur]);
        } else if (target < 0 || index >= nums.length) {
            return;
        } else {
            cur.push(nums[index]);
            this.backtrack(nums, target - nums[index], ans, cur, index);

            cur.pop();
            this.backtrack(nums, target, ans, cur, index + 1);
        }
    }
}