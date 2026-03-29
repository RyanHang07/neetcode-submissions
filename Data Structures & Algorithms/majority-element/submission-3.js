class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let myMap = new Map();
        let majorityKey = nums[0];
        for (let num of nums) {
            if (!myMap.has(num)) {
                myMap.set(num, 1);
            } else {
                myMap.set(num, myMap.get(num) + 1);
            }
            if (myMap.get(majorityKey) <= myMap.get(num)) {
                majorityKey = num;
            }
        }
        return majorityKey;
    }
}
