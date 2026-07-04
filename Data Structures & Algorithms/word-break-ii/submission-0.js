class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        const res = [];
        const cur = [];

        const backtrack = (i) => {
            if (i === s.length) {
                res.push(cur.join(' '));
                return;
            }

            for (let j = i; j < s.length; j++) {
                const w = s.substring(i, j + 1);
                if (wordSet.has(w)) {
                    cur.push(w);
                    backtrack(j + 1);
                    cur.pop();
                }
            }
        };

        backtrack(0);
        return res;
    }
}