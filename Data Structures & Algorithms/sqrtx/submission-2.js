class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0;
        let r = x;
        let res = 0;
        
        while(l <= r){
            const m = l + Math.floor((r-l) / 2);

            if(m * m > x){
                r = m - 1;
            } else if(m * m < x){
                res = m;
                l = m + 1;
            } else {
                return m;
            }
        }

        return res;
    }
}
