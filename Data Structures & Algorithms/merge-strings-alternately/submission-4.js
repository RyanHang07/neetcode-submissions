class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let p1 = 0
        let p2 = 0
        let res = "";

        while (p1 < word1.length || p2 < word2.length) {
            if (p1 < word1.length) {
                res += word1[p1];
                p1++;
            }
            if (p2 < word2.length) {
                res += word2[p2];
                p2++;
            }
        }

        return res;
    }
}
