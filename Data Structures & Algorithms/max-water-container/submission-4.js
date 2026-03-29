class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let pointerOne = 0;
        let pointerTwo = heights.length - 1;

        let result = 0;

        while (pointerOne < pointerTwo) {
            let temp = (pointerTwo - pointerOne) * Math.min(heights[pointerOne], heights[pointerTwo]);
            if (result < temp) {
                result = temp;
            }
            if (heights[pointerOne] > heights[pointerTwo]) {
                pointerTwo--;
            } else {
                pointerOne++;
            }
        }

        return result; 
    }
}
