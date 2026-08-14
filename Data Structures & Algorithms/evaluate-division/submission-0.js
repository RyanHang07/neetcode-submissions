class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        const adj = new Map(); // Map a -> list of [b, a/b]

        for (let i = 0; i < equations.length; i++) {
            const [a, b] = equations[i];
            if (!adj.has(a)) adj.set(a, []);
            if (!adj.has(b)) adj.set(b, []);
            adj.get(a).push([b, values[i]]);
            adj.get(b).push([a, 1 / values[i]]);
        }

        const bfs = (src, target) => {
            if (!adj.has(src) || !adj.has(target)) return -1;

            const queue = new Queue([[src, 1.0]]);
            const visited = new Set();
            visited.add(src);

            while (!queue.isEmpty()) {
                const [node, weight] = queue.pop();

                if (node === target) return weight;

                for (const [nei, neiWeight] of adj.get(node)) {
                    if (!visited.has(nei)) {
                        visited.add(nei);
                        queue.push([nei, weight * neiWeight]);
                    }
                }
            }

            return -1;
        };

        return queries.map(([src, target]) => bfs(src, target));
    }
}