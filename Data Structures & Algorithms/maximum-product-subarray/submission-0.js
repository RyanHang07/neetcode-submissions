class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let A = [];
        let cur = [];
        let res = -Infinity;

        nums.forEach((num) => {
            res = Math.max(res, num);
            if (num === 0) {
                if (cur.length) A.push(cur);
                cur = [];
            } else {
                cur.push(num);
            }
        });
        if (cur.length) A.push(cur);

        A.forEach((sub) => {
            let negs = 0;
            sub.forEach((i) => {
                if (i < 0) negs++;
            });

            let prod = 1;
            let need = negs % 2 === 0 ? negs : negs - 1;
            negs = 0;
            for (let i = 0, j = 0; i < sub.length; i++) {
                prod *= sub[i];
                if (sub[i] < 0) {
                    negs++;
                    while (negs > need) {
                        prod /= sub[j];
                        if (sub[j] < 0) negs--;
                        j++;
                    }
                }
                if (j <= i) res = Math.max(res, prod);
            }
        });

        return res;
    }
}