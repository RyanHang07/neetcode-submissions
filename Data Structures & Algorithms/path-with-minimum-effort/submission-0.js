class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const dist = Array.from({ length: rows }, () =>
            Array(cols).fill(Infinity),
        );
        dist[0][0] = 0;

        const minHeap = new MinPriorityQueue((a) => a[0]);
        minHeap.enqueue([0, 0, 0]); // [diff, row, col]

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        while (!minHeap.isEmpty()) {
            const [diff, r, c] = minHeap.dequeue();

            if (r === rows - 1 && c === cols - 1) return diff;
            if (dist[r][c] < diff) continue;

            for (const [dr, dc] of directions) {
                const newR = r + dr;
                const newC = c + dc;
                if (newR < 0 || newC < 0 || newR >= rows || newC >= cols) {
                    continue;
                }

                const newDiff = Math.max(
                    diff,
                    Math.abs(heights[r][c] - heights[newR][newC]),
                );
                if (newDiff < dist[newR][newC]) {
                    dist[newR][newC] = newDiff;
                    minHeap.enqueue([newDiff, newR, newC]);
                }
            }
        }

        return 0;
    }
}