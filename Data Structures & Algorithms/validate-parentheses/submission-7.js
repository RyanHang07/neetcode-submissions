class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (char == '(' || char == '{' || char == '[') {
                stack.push(char);
            } else {
                let popped = stack.pop();
                if (popped == '(' && char ==')') {
                    continue;
                } 
                if (popped == '{' && char =='}') {
                    continue;
                } 
                if (popped == '[' && char ==']') {
                    continue;
                }
                return false;
            }
        }

        if (stack.length > 0) {
            return false;
        }

        return true;
    }
}
