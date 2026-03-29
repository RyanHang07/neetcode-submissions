class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;

            for (let j = i + 1; j < nums.length; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;
                
                let l = j + 1;
                let r = nums.length - 1;
                while (l < r) {
                    const sum = nums[i] + nums[j] + nums[l] + nums[r];
                    if (sum == target) {
                        res.push( [nums[i], nums[j], nums[l], nums[r]] );
                        l++;
                        r--;
                        while (l < r && nums[l] === nums[l - 1])
                            l++;
                        while (l < r && nums[r] === nums[r + 1])
                            r--;
                    } else if (sum < target) {
                        l++;
                    } else {
                        r--;
                    }
                }
            }
        }
        return res;
    }
}
