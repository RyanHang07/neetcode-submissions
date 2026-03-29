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
    diameterOfBinaryTree(root) {
        let res = [0]
        this.dfs(root, res);
        return res[0];
    }

    dfs(root, res) {
        if (root === null) {
            return 0;
        }
        const left = this.dfs(root.left, res);
        const right = this.dfs(root.right, res);
        res[0] = Math.max(res[0], left + right);
        return 1 + Math.max(left, right)
            
    }
}
