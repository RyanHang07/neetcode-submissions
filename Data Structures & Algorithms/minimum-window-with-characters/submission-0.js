class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let targetMap = {};
        for (let char of t) {
            targetMap[char] = (targetMap[char] || 0) + 1;
        }

        let windowMap = {};
        const uniqueChars = Object.keys(targetMap).length;
        let minLen = Infinity;
        let minStart = 0;
        let foundChars = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            windowMap[s[right]] = (windowMap[s[right]] || 0 ) + 1;
                if (s[right] in targetMap) { 
                    if (windowMap[s[right]] == targetMap[s[right]]) {
                        foundChars++;
                    }
                }
            while (foundChars === uniqueChars) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minStart = left;
                }
                if (s[left] in targetMap) {
                    windowMap[s[left]]--;
                    if (windowMap[s[left]] < targetMap[s[left]]) {
                        foundChars--;
                    }
                }
                left++;
            }
        }

        if (minLen == Infinity) {
            return "";
        }

        return s.substring(minStart, minLen + minStart);
    }
}
