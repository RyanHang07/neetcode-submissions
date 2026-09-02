class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = 0,
            resLen = 0;
        const n = s.length;

        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    if (resLen < j - i + 1) {
                        resIdx = i;
                        resLen = j - i + 1;
                    }
                }
            }
        }

        return s.slice(resIdx, resIdx + resLen);
    }
}