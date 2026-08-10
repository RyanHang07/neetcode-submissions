class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const prereq = new Map();
        for (const [course, pre] of prerequisites) {
            if (!prereq.has(course)) {
                prereq.set(course, []);
            }
            prereq.get(course).push(pre);
        }

        const output = [];
        const visit = new Set();
        const cycle = new Set();

        for (let c = 0; c < numCourses; c++) {
            if (!this.dfs(c, prereq, visit, cycle, output)) {
                return [];
            }
        }

        return output;
    }

    /**
     * @param {number} course
     * @param {Map} prereq
     * @param {Set} visit
     * @param {Set} cycle
     * @param {number[]} output
     * @return {boolean}
     */
    dfs(course, prereq, visit, cycle, output) {
        if (cycle.has(course)) {
            return false;
        }
        if (visit.has(course)) {
            return true;
        }

        cycle.add(course);
        for (const pre of prereq.get(course) || []) {
            if (!this.dfs(pre, prereq, visit, cycle, output)) {
                return false;
            }
        }
        cycle.delete(course);
        visit.add(course);
        output.push(course);
        return true;
    }
}