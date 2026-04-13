class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums.length;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return res;
    }
}
