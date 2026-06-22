class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = new Set();
        const perm = [];

        const backtrack = () => {
            if (perm.length === nums.length) {
                res.add(JSON.stringify(perm));
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== -Infinity) {
                    let temp = nums[i];
                    perm.push(nums[i]);
                    nums[i] = -Infinity;
                    backtrack();
                    nums[i] = temp;
                    perm.pop();
                }
            }
        };

        backtrack();
        return Array.from(res).map(JSON.parse);
    }
}
