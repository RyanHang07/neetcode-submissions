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
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        function dfs(node, depth) {
            if (node === null) {
                return;
            }
            if (!result[depth]) {
                result[depth] = new Array()
            }
            result[depth].push(node.val);
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
        }
        dfs(root, 0);
        return result;
    }
}
