class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adj = {};
        let indegree = {};
        for (let w of words) {
            for (let c of w) {
                adj[c] = new Set();
                indegree[c] = 0;
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            let w1 = words[i],
                w2 = words[i + 1];
            let minLen = Math.min(w1.length, w2.length);
            if (
                w1.length > w2.length &&
                w1.slice(0, minLen) === w2.slice(0, minLen)
            ) {
                return '';
            }
            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    if (!adj[w1[j]].has(w2[j])) {
                        adj[w1[j]].add(w2[j]);
                        indegree[w2[j]] += 1;
                    }
                    break;
                }
            }
        }

        let q = new Queue();
        for (let c in indegree) {
            if (indegree[c] === 0) {
                q.push(c);
            }
        }

        let res = [];
        while (!q.isEmpty()) {
            let char = q.pop();
            res.push(char);
            for (let neighbor of adj[char]) {
                indegree[neighbor] -= 1;
                if (indegree[neighbor] === 0) {
                    q.push(neighbor);
                }
            }
        }

        if (res.length !== Object.keys(indegree).length) {
            return '';
        }

        return res.join('');
    }
}