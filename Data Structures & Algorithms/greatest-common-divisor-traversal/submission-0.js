class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canTraverseAllPairs(nums) {
        const n = nums.length;
        const visit = new Array(n).fill(false);
        const adj = Array.from({ length: n }, () => []);

        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (gcd(nums[i], nums[j]) > 1) {
                    adj[i].push(j);
                    adj[j].push(i);
                }
            }
        }

        const dfs = (node) => {
            visit[node] = true;
            for (const nei of adj[node]) {
                if (!visit[nei]) {
                    dfs(nei);
                }
            }
        };

        dfs(0);
        return visit.every((node) => node);
    }
}