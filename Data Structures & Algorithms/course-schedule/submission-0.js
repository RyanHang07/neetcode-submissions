class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let indegree = Array(numCourses).fill(0);
        let adj = Array.from({ length: numCourses }, () => []);
        for (let [src, dst] of prerequisites) {
            indegree[dst]++;
            adj[src].push(dst);
        }

        let q = new Queue();
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                q.push(i);
            }
        }

        let finish = 0;
        while (!q.isEmpty()) {
            let node = q.pop();
            finish++;
            for (let nei of adj[node]) {
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    q.push(nei);
                }
            }
        }

        return finish === numCourses;
    }
}