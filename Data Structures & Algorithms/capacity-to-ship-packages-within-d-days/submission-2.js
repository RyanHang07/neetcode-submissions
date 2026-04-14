class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((a, b) => a + b, 0);
        let result = right;

        const canShip = (cap) => {
            let ships = 1,
                currCap = cap;
            for (const weight of weights) {
                if (currCap - weight < 0) {
                    ships++;
                    if (ships > days) {
                        return false;
                    }
                    currCap = cap;
                }
                currCap -= weight;
            }
            return true;
        }

        while (left <= right) {
            let mid = Math.floor((left + right)/2);
            if (canShip(mid)) {
                result = Math.min(mid, result);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}
