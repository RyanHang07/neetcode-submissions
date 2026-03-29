class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
    };

    evalRPN(tokens) {
        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (this.isNumeric(tokens[i])) {
                stack.push(parseInt(tokens[i]))
            } else {
                let temp1 = stack.pop();
                let temp2 = stack.pop();
                let result = this.operators[tokens[i]](temp2, temp1);
                stack.push(parseInt(result));
            }
        }

        return stack.pop();
    }

    isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
}
