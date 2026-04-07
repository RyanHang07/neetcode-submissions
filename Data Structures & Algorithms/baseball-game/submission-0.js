class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for (const op of operations) {
            switch (op) {
                case "+":
                    const top = stack.pop();
                    const newTop = top + stack[stack.length - 1];
                    stack.push(top);
                    stack.push(newTop);
                    break;
                case "D":
                    stack.push(2 * stack[stack.length - 1]);
                    break;
                case "C":
                    stack.pop();
                    break;
                default:
                    stack.push(parseInt(op));
            }
        }
        return stack.reduce((a, b) => a + b, 0);
    }
}
