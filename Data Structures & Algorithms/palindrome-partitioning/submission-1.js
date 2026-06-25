class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const part = [];
        const dfs = (j, i) => {
            if (i >= s.length) {
                if (i === j) {
                    res.push([...part]);
                }
                return;
            }
                
            if (this.isPali(s, j, i)) {
                part.push(s.substring(j, i + 1));
                dfs(i + 1, i + 1);
                part.pop();
            }
            
            dfs(j, i + 1);
        };
        
        dfs(0, 0);
        return res;
        
    }
    
    isPali(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
