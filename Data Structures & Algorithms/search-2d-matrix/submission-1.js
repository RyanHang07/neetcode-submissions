class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;
        let l = 0;
        let r = ROWS * COLS - 1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            let row = Math.floor(m / COLS);
            let col = m % COLS;
            if (target > matrix[row][col]) {
                l = m + 1;
            } else if (target < matrix[row][col]) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
