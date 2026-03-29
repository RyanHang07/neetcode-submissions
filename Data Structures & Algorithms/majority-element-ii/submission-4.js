class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = new Map();
        let result = [];
        for (let num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1)
        }
        for (let key of map.keys()) {
            if (map.get(key) > Math.floor(nums.length / 3)) {
                result.push(key);
            }
        }
        return result;
    }
}
