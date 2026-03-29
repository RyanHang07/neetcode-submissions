class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    let filtered = "";
  for (let c of s) {
    if (/[a-z0-9]/i.test(c)) {
      filtered += c.toLowerCase();
    }
  }
  let l = 0, r = filtered.length - 1;
  while (l < r) {
    if (filtered[l] !== filtered[r]) return false;
    l++;
    r--;
  }
  return true;
};
}
