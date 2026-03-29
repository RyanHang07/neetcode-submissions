class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let heap = new MaxPriorityQueue((x) => x[0]);

        for (let i = 0; i < nums.length; i++) {
            heap.enqueue([nums[i], i]);
            //[1] keeps tracks of index
            //[0] keeps track so the value

            if (i >= k-1) {
                //If the first element of the heap is outside of the current window
                while (heap.front()[1] <= i-k) {
                    heap.dequeue();
                }
                result.push(heap.front()[0]);
            }
        }

        return result;
    }
}
