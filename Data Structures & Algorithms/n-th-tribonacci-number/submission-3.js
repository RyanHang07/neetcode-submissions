class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.dp = new Map();
    }

    tribonacci(n) {
        if (n == 0) {
            return 0;
        }

        if (n == 1 || n == 2) {
            return 1;
        }

        if (this.dp.has(n)) {
            return this.dp.get(n);
        }

        const result = 
            this.tribonacci(n - 1) + 
            this.tribonacci(n - 2) + 
            this.tribonacci(n - 3);
        this.dp.set(n, result);
        
        return result;
    }
}
