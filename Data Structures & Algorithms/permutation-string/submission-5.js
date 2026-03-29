class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        let s1Count = new Array(26).fill(0);
        let windowCount = new Array(26).fill(0);
        
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
        }

        for (let i = 0; i < s2.length; i++) {
            windowCount[s2.charCodeAt(i) - 97]++;

            if (i >= s1.length) {
                windowCount[s2.charCodeAt(i - s1.length) - 97]--;
            }

            if (i >= s1.length - 1) {
                if (this.arraysEqual(s1Count, windowCount)) {
                    return true;
                }
            }
        }

        return false;
    }

    arraysEqual(s1, s2) {
        for (let i = 0; i < 26; i++) {
            if (s1[i] != s2[i]) {
                return false;
            }
        }
        return true;
    }
}
