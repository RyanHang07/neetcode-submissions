class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefixSum = Array.from({length: matrix.length}, () =>
            Array(matrix[0].length).fill(0),
        );

        for (let row = 0; row < matrix.length; row++) {
            this.prefixSum[row][0] = matrix[row][0];
            for (let col = 1; col < matrix[0].length; col++) {
                this.prefixSum[row][col] = this.prefixSum[row][col - 1] + matrix[row][col];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let res = 0;
        for (let r = row1; r <= row2; r++) {
            if (col1 > 0) {
                res += this.prefixSum[r][col2] - this.prefixSum[r][col1 - 1];
            } else {
                res += this.prefixSum[r][col2];
            }
            
        }
        return res;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
