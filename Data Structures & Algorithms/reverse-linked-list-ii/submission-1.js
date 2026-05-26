/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        const reverseList = (node, n) => {
            if (n === 1) {
                return [node, node.next];
            }

            const [newHead, nextNode] = reverseList(node.next, n - 1);
            node.next.next = node;
            node.next = nextNode;

            return [newHead, nextNode];
        }

        if (left === 1) {
            return reverseList(head, right)[0];
        }
        head.next = this.reverseBetween(head.next, left - 1, right - 1);
        return head;
        
    }
}
