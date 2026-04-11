class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        let cur = '';

        for (const c of path + '/') {
            if (c === '/') {
                if (cur === "..") {
                    if (stack.length) stack.pop();
                } else if (cur !== '' && cur !== '.') {
                    stack.push(cur);
                }
                cur = '';
            } else {
                cur += c;
            }
        }

        return '/' + stack.join('/');
    }
}
