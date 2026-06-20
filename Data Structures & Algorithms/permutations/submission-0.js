class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        backtrack([], nums, new Array(nums.length).fill(false));
        return res;

        function backtrack(perm, nums, pick) {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) {
                    perm.push(nums[i]);
                    pick[i] = true;
                    backtrack(perm, nums, pick);
                    perm.pop();
                    pick[i] = false;
                }
            }
        }
    }
}