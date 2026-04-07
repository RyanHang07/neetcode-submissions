class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        arr.sort((a,b) => {
            const diff = Math.abs(a-x) - Math.abs(b-x);
            return diff === 0 ? a - b : diff;
        });
        const result = arr.slice(0,k);
        return result.sort((a,b) => (a-b));
    }
}
