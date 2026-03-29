class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MaxPriorityQueue();

        for (const num of nums) {
            minHeap.enqueue(num);
        }
        
        let result = minHeap.dequeue();
        for (let i = 0; i < k - 1; i++) {
            result = minHeap.dequeue();
        }

        return result;
    }
}
