class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        const n = nums.length;
        const prefix = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        const canSplit = (largest) => {
            let subarrays = 0,
                i = 0;
            while (i < n) {
                let l = i + 1,
                    r = n;
                while (l <= r) {
                    const mid = Math.floor(l + (r - l) / 2);
                    if (prefix[mid] - prefix[i] <= largest) {
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                subarrays++;
                i = r;
                if (subarrays > k) {
                    return false;
                }
            }
            return true;
        };

        let l = Math.max(...nums);
        let r = nums.reduce((a, b) => a + b, 0),
            res = r;
        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            if (canSplit(mid)) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
}