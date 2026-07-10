class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const rows = grid.length,
            cols = grid[0].length;
        const visited = Array.from({ length: rows }, () =>
            Array(cols).fill(false),
        );

        const dfs = (i, j) => {
            if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) {
                return 1;
            }
            if (visited[i][j]) {
                return 0;
            }

            visited[i][j] = true;
            return (
                dfs(i, j + 1) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i - 1, j)
            );
        };

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    return dfs(i, j);
                }
            }
        }
        return 0;
    }
}