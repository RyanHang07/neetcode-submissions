class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort((a, b) => a - b);
        let missing = 1;
        for (const num of nums) {
            if (num > 0 && missing === num) {
                missing++;
            }
        }
        return missing;
    }
}
