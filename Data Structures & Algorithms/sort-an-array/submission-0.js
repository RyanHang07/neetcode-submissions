class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    mergeSort(arr, l, r) {
        if (l >= r) {
            return;
        }
        let m = Math.floor((l + r) / 2);
        this.mergeSort(arr, l, m);
        this.mergeSort(arr, m + 1, r);
        this.merge(arr, l, m, r);
    }

    merge(arr, l, m, r) {
        let temp = [];
        let i = l;
        let j = m + 1;

        while (i <= m && j <= r) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i++]);
            } else {
                temp.push(arr[j++]);
            }
        }

        while (i <= m) temp.push(arr[i++]);
        while (j <= r) temp.push(arr[j++]);

        for (let i = l; i <= r; i++) {
            arr[i] = temp[i - l];
        }
    }
}
