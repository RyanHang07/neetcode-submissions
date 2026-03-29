class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();
        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }
        while (maxHeap.size() > 1) {
            let rockOne = maxHeap.dequeue();
            let rockTwo = maxHeap.dequeue();
            let rockRes = rockOne - rockTwo;

            if (rockRes !== 0) {
                maxHeap.enqueue(rockRes);
            }
        }

        if (maxHeap.size() === 0) {
            return 0
        } else {
            return maxHeap.dequeue();
        }
    }
}
