class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MinPriorityQueue((point) => point[0]);

        for (const [x,y] of points) {
            const dist = x**2 + y**2;
            minHeap.enqueue([dist,x,y])
        }

        const res = [];

        while(k > 0) {
            const [_, x, y] = minHeap.dequeue();
            res.push([x, y]);
            k--;
        }

        return res;
    }
}
