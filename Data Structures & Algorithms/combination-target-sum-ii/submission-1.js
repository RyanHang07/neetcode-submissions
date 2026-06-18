class Solution {
    constructor() {
        this.res = [];
        this.count = new Map();
    }

    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
        const cur = [];
        const A = [];

        for (const num of nums) {
            if (!this.count.has(num)) {
                A.push(num);
            }
            this.count.set(num, (this.count.get(num) || 0) + 1);
        }
        this.backtrack(A, target, cur, 0);
        return this.res;
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @param {number[]} cur
     * @param {number} i
     * @return {void}
     */
    backtrack(nums, target, cur, i) {
        if (target === 0) {
            this.res.push([...cur]);
            return;
        }
        if (target < 0 || i >= nums.length) {
            return;
        }

        if (this.count.get(nums[i]) > 0) {
            cur.push(nums[i]);
            this.count.set(nums[i], this.count.get(nums[i]) - 1);
            this.backtrack(nums, target - nums[i], cur, i);
            this.count.set(nums[i], this.count.get(nums[i]) + 1);
            cur.pop();
        }

        this.backtrack(nums, target, cur, i + 1);
    }
}