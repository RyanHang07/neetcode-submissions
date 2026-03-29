class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let output = 0;
        for (let i = 0; i < s.length - 1; i++) {
            output += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
        }
        return output;
    }
}
