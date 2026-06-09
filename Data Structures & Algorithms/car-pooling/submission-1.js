class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        trips.sort((a,b) => a[1] - b[1]);

        const minHeap = new MinPriorityQueue((x) => x[0]);
        let currPass = 0;

        for (const [numPass, start, end] of trips) {
            while (!minHeap.isEmpty() && minHeap.front()[0] <= start) {
                currPass -= minHeap.dequeue()[1];
            }

            currPass += numPass;
            if (currPass > capacity) {
                return false;
            } 

            minHeap.enqueue([end, numPass]);
        }

        return true;
    }
}
