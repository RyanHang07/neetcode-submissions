class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = new Set();
        while (!seen.has(n)) {
            seen.add(n);
            n = this.squaredDigits(n);
            if (n == 1) {
                return true;
            }
        }
        return false;
    }

    squaredDigits(n) {
        let result = 0;
        while (n > 0) {
            let digit = n % 10;
            result += Math.pow(digit, 2);
            n = Math.floor(n / 10);
        }
        return result;
    }
}
