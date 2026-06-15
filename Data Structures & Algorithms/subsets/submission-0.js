class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [[]];

        for (let num of nums) {
            let size = res.length;
            for (let i = 0; i < size; i++) {
                let subset = res[i].slice();
                subset.push(num);
                res.push(subset);
            }
        }

        return res;
    }
}
