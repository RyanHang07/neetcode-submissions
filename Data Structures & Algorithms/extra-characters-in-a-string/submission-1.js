class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const dp = new Map();
        dp.set(s.length, 0);

        const dfs = (i) => {
            if (dp.has(i)) return dp.get(i);

            let res = 1 + dfs(i + 1);
            for (const word of dictionary) {
                if (i + word.length > s.length) continue;

                let flag = true;
                for (let j = 0; j < word.length; j++) {
                    if (s[i + j] !== word[j]) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    res = Math.min(res, dfs(i + word.length));
                }
            }
            dp.set(i, res);
            return res;
        };

        return dfs(0);
    }
}