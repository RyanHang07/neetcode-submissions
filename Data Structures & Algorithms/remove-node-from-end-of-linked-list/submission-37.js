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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
        dummy.next = head;
        
        let fast = dummy;
        let slow = dummy;
        let i = 0
        while (n >= i) {
            fast = fast.next;
            i++;
        }

        while (fast !== null) {
            fast = fast.next
            slow = slow.next
        }

        console.log(fast)
        console.log(slow)

        slow.next = slow.next.next;

        return dummy.next;
    }
}
