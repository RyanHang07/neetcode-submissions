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
    isBalanced(root) {
        return this.dfs(root) !== -1;
    }

    dfs(root) {
        if (root === null) {
            return 0;
        }

        let left = this.dfs(root.left);
        let right = this.dfs(root.right);

        if (left == -1 || right == -1) {
            return -1;
        }

        if (Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    }
}
