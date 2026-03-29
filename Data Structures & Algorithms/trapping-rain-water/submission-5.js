class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefix = [];
        let suffix = [];
        let totalWater = 0;

        for (let i = 0; i < height.length; i++) {
            if (i == 0 || i == height.length - 1) {
                prefix.push(height[i]);
                continue;
            }

            let left = i - 1;
            let leftMax = height[i];

            while (left > -1) {
                if (height[left] > leftMax) {
                    leftMax = height[left];
                }
                left--;
            }
            prefix.push(leftMax);
        }

        for (let j = height.length - 1; j >= 0; j--) {
            if (j == 0 || j == height.length - 1) {
                suffix.push(height[j]);
                continue;
            }

            let right = j + 1;
            let rightMax = height[j];

            while (right != height.length) {
                if (height[right] > rightMax) {
                    rightMax = height[right];
                }
                right++;
            }
            suffix.push(rightMax);
        }

        for (let k = 0; k < height.length; k++) {
            totalWater += Math.min(prefix[k], suffix[height.length - 1 - k]) - height[k];
        }

        return totalWater;
    }
}
