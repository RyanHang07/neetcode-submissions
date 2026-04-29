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
    maxPathSum(root) {
        let res = -Infinity

        function getMax(root) {
            if (!root) return 0;
            let left = getMax(root.left);
            let right = getMax(root.right);
            let path = root.val + Math.max(left, right);
            return Math.max(0, path);
        }

        function dfs(root) {
            if (!root) return
            let left = getMax(root.left);
            let right = getMax(root.right);
            res = Math.max(res, root.val + left + right);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return res;
        
    }
}
