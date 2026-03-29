class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = 0;

        if (nums.length == 0) {
            return 0;
        }

        let hashSet = new Set();

        for (let i = 0; i < nums.length; i++) {
            hashSet.add(nums[i]);
        }

        for (let j = 0; j < nums.length; j++) {
            let currNum = nums[j];
            let sequence = 0;
            while (hashSet.has(currNum)) {
                sequence++;
                currNum -= 1;
            }
            if (sequence > result) {
                result = sequence;
            }
        }

        return result;
    }
}
