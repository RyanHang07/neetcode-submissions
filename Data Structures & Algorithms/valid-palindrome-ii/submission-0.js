class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0,
            r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                return (
                    this.isPalindrome(s.slice(0, l) + s.slice(l + 1)) ||
                    this.isPalindrome(s.slice(0, r) + s.slice(r + 1))
                );
            }
            l++;
            r--;
        }

        return true;
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0,
            right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}