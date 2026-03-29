class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.includes(0)) {
            let totalProduct = 1;
            let result = [];
            let zeroSeen = false;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] == 0) {
                    if (zeroSeen) {
                        return new Array(nums.length).fill(0);
                    }
                    zeroSeen = true;
                    continue;
                } else {
                    totalProduct *= nums[i];
                }
            }

            for (let i = 0; i < nums.length; i++) {
                if (nums[i] == 0) {
                    result[i] = totalProduct;
                } else {
                    result[i] = 0;
                }
            }
            return result;
        } else {
            let totalProduct = 1;
            let result = [];
            for (const num of nums) {
                totalProduct *= num;
            }
            for (let i = 0; i < nums.length; i++) {
                result[i] = totalProduct / nums[i];
            }
            return result;
        }
    }
}
