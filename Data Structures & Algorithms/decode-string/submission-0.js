class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char !== ']') {
                stack.push(char);
            } else {
                let substr = '';
                while (stack[stack.length - 1] !== '[') {
                    substr = stack.pop() + substr;
                }
                stack.pop();
                let k = '';
                while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                    k = stack.pop() + k;
                }
                stack.push(substr.repeat(parseInt(k, 10)));
            }
        }

        return stack.join('');
    }
}
