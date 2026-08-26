class UnionFind {
    /**
     * @constructor
     * @param {number} n
     */
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    /**
     * @param {number} v1
     * @return {number}
     */
    find(v1) {
        if (this.par[v1] !== v1) {
            this.par[v1] = this.find(this.par[v1]);
        }
        return this.par[v1];
    }

    /**
     * @param {number} v1
     * @param {number} v2
     * @return {boolean}
     */
    union(v1, v2) {
        const p1 = this.find(v1),
            p2 = this.find(v2);
        if (p1 === p2) return false;
        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.par[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        edges = edges.map((edge, idx) => [...edge, idx]);
        edges.sort((a, b) => a[2] - b[2]);

        const uf = new UnionFind(n);
        let mstWeight = 0;
        for (const [v1, v2, w] of edges) {
            if (uf.union(v1, v2)) {
                mstWeight += w;
            }
        }

        const critical = [];
        const pseudo = [];

        for (const [n1, n2, weight, i] of edges) {
            // Try without current edge
            const ufWithout = new UnionFind(n);
            let weightWithout = 0;
            for (const [v1, v2, w, j] of edges) {
                if (j !== i && ufWithout.union(v1, v2)) {
                    weightWithout += w;
                }
            }
            if (
                Math.max(...ufWithout.rank) !== n ||
                weightWithout > mstWeight
            ) {
                critical.push(i);
                continue;
            }

            // Try with current edge
            const ufWith = new UnionFind(n);
            ufWith.union(n1, n2);
            let weightWith = weight;
            for (const [v1, v2, w, j] of edges) {
                if (ufWith.union(v1, v2)) {
                    weightWith += w;
                }
            }
            if (weightWith === mstWeight) {
                pseudo.push(i);
            }
        }

        return [critical, pseudo];
    }
}