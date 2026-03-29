class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let result = new Array(temperatures.length).fill(0);
        for (let i = temperatures.length - 1; i >= 0; i--) {
            while ( stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop();
            }
            
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1] - i;
            }

            stack.push(i);
        }
        return result;
    }
}
