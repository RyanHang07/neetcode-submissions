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
     * @return {number[]}
     */
    preorderTraversal(root) {
        const res = []

        const preorder = (node) => {
            if (!node) return;
            res.push(node.val);
            preorder(node.left);
            preorder(node.right);
        };

        preorder(root);
        return res;
    }
}
