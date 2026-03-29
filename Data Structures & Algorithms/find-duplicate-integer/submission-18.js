class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            let pending = nums[i];
            let temp = nums[Math.abs(nums[i]) - 1] *= -1;
            console.log(temp)
            if (temp > 0) {
                return Math.abs(pending);
            }
            
        }
    }
}
