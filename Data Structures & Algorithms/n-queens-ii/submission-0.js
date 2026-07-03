class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        let res = 0;
        let board = Array.from({ length: n }, () => Array(n).fill('.'));

        const backtrack = (r) => {
            if (r === n) {
                res++;
                return;
            }
            for (let c = 0; c < n; c++) {
                if (this.isSafe(r, c, board)) {
                    board[r][c] = 'Q';
                    backtrack(r + 1);
                    board[r][c] = '.';
                }
            }
        };

        backtrack(0);
        return res;
    }

    /**
     * @param {number} r
     * @param {number} c
     * @param {string[][]} board
     * @return {boolean}
     */
    isSafe(r, c, board) {
        for (let i = r - 1; i >= 0; i--) {
            if (board[i][c] === 'Q') return false;
        }
        for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = r - 1, j = c + 1; i >= 0 && j < board.length; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
}