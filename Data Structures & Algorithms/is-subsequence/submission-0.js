class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        const rec = (i, j) => {
            if (i === s.length) return true;
            if (j === t.length) return false;
            if (s[i] === t[j]) return rec(i + 1, j + 1);
            return rec(i, j + 1);
        };
        return rec(0, 0);
    }
}
