class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums;
        this.k = k
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        this.nums.sort((a,b) => (a-b));
        console.log(this.nums)
        return this.nums[this.nums.length - this.k];
    }
}
