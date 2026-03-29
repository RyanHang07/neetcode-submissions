class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1;
        let index = nums.length / 2;

        while (l <= r) {
            if (nums[index] > target) {
                r = index - 1;
            } else if (nums[index] < target) {
                l = index + 1;
            }

            if (nums[index] == target) {
                return index;
            }
        
            index = Math.floor((l + r) / 2);
        }

        return -1;
    }
}
