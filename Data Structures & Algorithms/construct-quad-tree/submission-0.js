/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        const dfs = (n, r, c) => {
            let allSame = true;

            for (let i = 0; i < n && allSame; i++) {
                for (let j = 0; j < n; j++) {
                    if (grid[r][c] !== grid[r + i][c + j]) {
                        allSame = false;
                        break;
                    }
                }
            }

            if (allSame) {
                return new Node(grid[r][c] === 1, true);
            }

            const mid = Math.floor(n / 2);
            const topLeft = dfs(mid, r, c);
            const topRight = dfs(mid, r, c + mid);
            const bottomLeft = dfs(mid, r + mid, c);
            const bottomRight = dfs(mid, r + mid, c + mid);

            return new Node(
                false,
                false,
                topLeft,
                topRight,
                bottomLeft,
                bottomRight,
            );
        };

        return dfs(grid.length, 0, 0);
    }
}