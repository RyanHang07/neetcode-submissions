/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    rob(root) {
        const cache = new Map();
        cache.set(null, 0);

        const dfs = (node) => {
            if (cache.has(node)) {
                return cache.get(node);
            }
            
            let res = node.val;
            if (node.left) {
                res += dfs(node.left.left) + dfs(node.left.right);
            }
            if (node.right) {
                res += dfs(node.right.left) + dfs(node.right.right);
            }

            res = Math.max(res, dfs(node.left) + dfs(node.right));
            cache.set(node, res);

            return res;
        }
        
        return dfs(root);
    }
}
