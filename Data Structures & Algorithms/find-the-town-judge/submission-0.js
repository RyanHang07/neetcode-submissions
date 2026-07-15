class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let incoming = new Array(n + 1).fill(0);
        let outgoing = new Array(n + 1).fill(0);

        for (let [src, dst] of trust) {
            outgoing[src]++;
            incoming[dst]++;
        }

        for (let i = 1; i <= n; i++) {
            if (outgoing[i] === 0 && incoming[i] === n - 1) {
                return i;
            }
        }

        return -1;
    }
}