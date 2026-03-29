class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        for (let i = 0; i < heights.length; i++) {
            let height = heights[i];
            let right = i + 1;
            while (right < heights.length && heights[right] >= height) {
                right++;
            }
            let left = i;
            while (left >= 0 && heights[left] >= height) {
                left--;
            }

            right--;
            left++;

            maxArea = Math.max(maxArea, height * (right - left + 1));
        }

        return maxArea;
    }
}
