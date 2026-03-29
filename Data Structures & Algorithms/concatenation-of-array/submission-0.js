class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2)
        for (let i = 0; i < (nums.length * 2); i++) {
            ans[i] = nums[i % nums.length];
        }
        return ans;
    }
}
