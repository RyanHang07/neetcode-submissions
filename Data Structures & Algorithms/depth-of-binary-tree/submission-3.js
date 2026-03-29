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
    maxDepth(root) {
        return this.rec(root, 0);
    }

    rec(root, depth) {
        if (root !== null) {
            depth += 1;
            return Math.max(
                this.rec(root.left, depth),
                this.rec(root.right, depth)
            );
        } else {
            return depth;
        }
    }
        
}
