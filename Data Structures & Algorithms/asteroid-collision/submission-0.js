class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        for (let a of asteroids) {
            while (stack.length && a < 0 && stack[stack.length - 1] > 0) {
                const diff = a + stack[stack.length - 1];
                if (diff < 0) {
                    stack.pop();
                } else if (diff > 0) {
                    a = 0;
                } else {
                    a = 0;
                    stack.pop();
                }
            }
            if (a !== 0) {
                stack.push(a);
            }
        }
        return stack;
    }
}
