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
            let mid = Math.floor((l+r)/2);
            if(mid*mid > x){
                r = mid - 1;
            }
            else if(mid*mid < x){
                res = mid;
                l = mid + 1;
            }
            else{
                return mid;
            }
        }
        return res;
    }
}
