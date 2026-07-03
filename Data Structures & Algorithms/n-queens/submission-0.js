class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let col = 0,
            posDiag = 0,
            negDiag = 0;
        const res = [];
        const board = Array.from({ length: n }, () => Array(n).fill('.'));

        /**
         * @param {number} r
         * @return {void}
         */
        function backtrack(r) {
            if (r === n) {
                res.push(board.map((row) => row.join('')));
                return;
            }
            for (let c = 0; c < n; c++) {
                if (
                    (col & (1 << c)) > 0 ||
                    (posDiag & (1 << (r + c))) > 0 ||
                    (negDiag & (1 << (r - c + n))) > 0
                ) {
                    continue;
                }
                col ^= 1 << c;
                posDiag ^= 1 << (r + c);
                negDiag ^= 1 << (r - c + n);
                board[r][c] = 'Q';

                backtrack(r + 1);

                col ^= 1 << c;
                posDiag ^= 1 << (r + c);
                negDiag ^= 1 << (r - c + n);
                board[r][c] = '.';
            }
        }

        backtrack(0);
        return res;
    }
}