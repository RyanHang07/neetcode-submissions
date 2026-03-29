class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let result = 0;
        let j = 0;
        let seen = new Map();

        for (let i = 0; i < s.length; i++) {
            seen.set(s[i], (seen.get(s[i]) || 0) + 1);

            while (seen.size > 2) {
                let currChar = s[j];
                seen.set(currChar, seen.get(currChar) - 1);
                if (seen.get(currChar) == 0) {
                    seen.delete(currChar);
                }
                j++;
            }

            result = Math.max(result, i - j + 1)
        }

        return result;
    }
}
