class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let sqrt5 = Math.sqrt(5);
        let phi = (1 + sqrt5) / 2;
        let psi = (1 - sqrt5) / 2;
        n++;
        return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
    }
}
