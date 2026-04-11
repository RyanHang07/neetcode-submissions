class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const paths = path.split('/');

        for(let p of paths){
            if(p === ".."){
                if(stack.length) stack.pop();
            } else if(p !== '.' && p !== ''){
                stack.push(p);
            }
        }

        return '/' + stack.join('/');
    }
}
