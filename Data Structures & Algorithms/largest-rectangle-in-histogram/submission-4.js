class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const leftMost = Array(n).fill(-1);
        const rightMost = Array(n).fill(n);
        const stack = [];

        for (let i = 0; i < n; i++) {
            while (
                stack.length && 
                heights[stack[stack.length-1]] >= heights[i]
            ) {
                stack.pop(); 
            }
            if (stack.length) {
                leftMost[i] = stack[stack.length-1];
            }
            stack.push(i);
        }

        stack.length = 0;

        for (let i = n - 1; i >= 0; i--) {
            while (
                stack.length && 
                heights[stack[stack.length-1]] >= heights[i]
            ) {
                stack.pop(); 
            }
            if (stack.length) {
                rightMost[i] = stack[stack.length-1];
            }
            stack.push(i);
        }

        let maxArea = 0;
        for (let i = 0; i < n; i++) {
            leftMost[i] += 1;
            rightMost[i] -= 1;
            maxArea = Math.max(maxArea, heights[i] * (rightMost[i] - leftMost[i] + 1));
        }

        return maxArea;
    }
}
