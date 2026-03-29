class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let k = 0;

        while (l <= r) {
            let mid = Math.floor((r + l)/ 2);
            if (this.canEatAll(piles, h, mid)) {
                k = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return k;
    }

    canEatAll(piles, h, k) {
        let totalHours = 0;
        for (const pile of piles) {
            totalHours += Math.ceil(pile / k);
        }
        return totalHours <= h;
    }
}
