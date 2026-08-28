class Solution {
    /**
     * @param {number} k
     * @param {number[][]} rowConditions
     * @param {number[][]} colConditions
     * @return {number[][]}
     */
    buildMatrix(k, rowConditions, colConditions) {
        const rowOrder = this.topoSort(k, rowConditions);
        if (!rowOrder) return [];
        const colOrder = this.topoSort(k, colConditions);
        if (!colOrder) return [];

        const valToRow = {};
        rowOrder.forEach((num, i) => {
            valToRow[num] = i;
        });

        const valToCol = {};
        colOrder.forEach((num, i) => {
            valToCol[num] = i;
        });

        const res = Array.from({ length: k }, () => Array(k).fill(0));
        for (let num = 1; num <= k; num++) {
            const r = valToRow[num];
            const c = valToCol[num];
            res[r][c] = num;
        }
        return res;
    }

    /**
     * @param {number} k
     * @param {number[][]} edges
     * @return {number[]}
     */
    topoSort(k, edges) {
        const adj = Array.from({ length: k + 1 }, () => []);
        edges.forEach(([src, dst]) => {
            adj[src].push(dst);
        });

        const visit = new Set();
        const path = new Set();
        const order = [];

        const dfs = (src) => {
            if (path.has(src)) return false;
            if (visit.has(src)) return true;

            visit.add(src);
            path.add(src);
            for (const nei of adj[src]) {
                if (!dfs(nei)) {
                    return false;
                }
            }
            path.delete(src);
            order.push(src);
            return true;
        };

        for (let src = 1; src <= k; src++) {
            if (!visit.has(src)) {
                if (!dfs(src)) {
                    return null;
                }
            }
        }
        return order.reverse();
    }
}