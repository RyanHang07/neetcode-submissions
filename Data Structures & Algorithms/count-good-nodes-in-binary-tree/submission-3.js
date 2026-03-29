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
    goodNodes(root) {
        let res = [];

        function dfs(node, leastValue) {
            if (!node) return;

            if (node.val >= leastValue) {
                res.push(node.val);
            }

            dfs(node.left, Math.max(node.val, leastValue));
            dfs(node.right, Math.max(node.val, leastValue));
        }

        dfs(root, -101);
        return res.length;
    }
}
