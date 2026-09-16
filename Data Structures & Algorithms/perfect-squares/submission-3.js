class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        while (n % 4 === 0) {
            n = Math.floor(n / 4);
        }

        if (n % 8 === 7) {
            return 4;
        }

        const isSquareNum = (num) => {
            const s = Math.floor(Math.sqrt(num));
            return s * s === num;
        };

        if (isSquareNum(n)) {
            return 1;
        }

        for (let i = 1; i * i <= n; i++) {
            if (isSquareNum(n - i * i)) {
                return 2;
            }
        }

        return 3;
    }
}