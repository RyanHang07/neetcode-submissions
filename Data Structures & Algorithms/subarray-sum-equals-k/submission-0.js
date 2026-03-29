class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let currSum = 0;
        const prefixSums = new Map();
        prefixSums.set(0,1);

        for (let num of nums) {
            currSum += num;
            let diff = currSum - k;
            res += prefixSums.get(diff) || 0;
            prefixSums.set(currSum, (prefixSums.get(currSum) || 0) + 1);
        }

        return res;
    }
}
