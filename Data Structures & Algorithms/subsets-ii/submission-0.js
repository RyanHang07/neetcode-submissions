class Solution {
    constructor() {
        this.res = new Set();
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        this.backtrack(nums, 0, []);
        return Array.from(this.res).map((subset) => JSON.parse(subset));
    }

    /**
     * @param {number[]} nums
     * @param {number[]} subset
     * @return {void}
     */
    backtrack(nums, i, subset) {
        if (i === nums.length) {
            this.res.add(JSON.stringify(subset));
            return;
        }

        subset.push(nums[i]);
        this.backtrack(nums, i + 1, subset);
        subset.pop();
        this.backtrack(nums, i + 1, subset);
    }
}