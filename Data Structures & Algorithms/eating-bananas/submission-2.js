class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0
        let r = Math.max(...piles);
        let k = 0;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            let totalHours = 0;
            for (const pile of piles) {
                totalHours += Math.ceil(pile / mid);
            }
            
            if (totalHours <= h) {
                r = mid - 1;
                k = mid;
            } else {
                l = mid + 1;
            }

        }

        return k;
    }
}
