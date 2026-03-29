class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board.length; c++) {
                const curr = board[r][c];

                if (curr == ".") {
                    continue;
                }

                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(curr) || cols[c].has(curr) || boxes[boxIndex].has(curr)) {
                    return false;
                }

                rows[r].add(curr);
                cols[c].add(curr);
                boxes[boxIndex].add(curr);
            }
        }

        return true;
    }
}
