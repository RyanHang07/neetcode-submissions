class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adj = Array.from({ length: numCourses }, () => []);
        const prereqMap = new Map();

        for (const [pre, crs] of prerequisites) {
            adj[crs].push(pre);
        }

        const dfs = (crs) => {
            if (prereqMap.has(crs)) {
                return prereqMap.get(crs);
            }
            const prereqs = new Set();
            for (const pre of adj[crs]) {
                for (const p of dfs(pre)) prereqs.add(p);
            }
            prereqs.add(crs);
            prereqMap.set(crs, prereqs);
            return prereqs;
        };

        for (let crs = 0; crs < numCourses; crs++) {
            dfs(crs);
        }
        return queries.map(([u, v]) => prereqMap.get(v).has(u));
    }
}