/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        const cache = new Map();
        const get = (index) => {
            if (!cache.has(index)) {
                cache.set(index, mountainArr.get(index))
            }
            return cache.get(index);
        };

        const binarySearch = (l, r, ascending) => {
            while (l <= r) {
                let m = Math.floor ((l + r) / 2);
                const val = get(m);
                if (val === target) {
                    return m;
                }
                if (ascending === val < target) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
            return -1;
        };

        const length = mountainArr.length();

        let l = 1;
        let r = length - 2;
        let peak = 0;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const left = get(m - 1);
            const mid = get(m);
            const right = get(m + 1);
            if (left < mid && mid < right) {
                l = m + 1;
            } else if (left > mid && mid > right) {
                r = m - 1;
            } else {
                peak = m;
                break;
            }
        }

        let res = binarySearch(0, peak, true);
        if (res !== -1) {
            return res;
        }

        return binarySearch(peak, length - 1, false);
    }
}
