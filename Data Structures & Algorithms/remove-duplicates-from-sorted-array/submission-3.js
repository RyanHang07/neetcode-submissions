class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 1;
        for (let r = 1; r < nums.length; r++) {
            if (nums[r] !== nums[r-1]) {
                nums[l++] = nums[r];
            }
        }
        return l;
    }
}
