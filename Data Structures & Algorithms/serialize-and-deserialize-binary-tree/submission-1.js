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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        const dfsSerialize = (node, res) => {
            if (!node) {
                res.push('N');
                return;
            }
            res.push(node.val.toString());
            dfsSerialize(node.left, res);
            dfsSerialize(node.right, res);
        }
        dfsSerialize(root, res);
        return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        const i = { val: 0 };
        const dfsDeserialize = (vals, i) => {
            if (vals[i.val] === 'N') {
                i.val++;
                return null;
            }
            const node = new TreeNode(parseInt(vals[i.val]));
            i.val++;
            node.left = dfsDeserialize(vals, i);
            node.right = dfsDeserialize(vals, i);
            return node;
        }
        return dfsDeserialize(vals, i);
    }
}
