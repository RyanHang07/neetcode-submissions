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
     * @return {ListNode}
     */
    reverseList(head) {
       if (head === null || head.next === null) {
            return head;
        }
        
        let prev = null;    // Previous node (starts as null)
        let curr = head;    // Current node we're processing
        
        while (curr !== null) {
            let nextTemp = curr.next;  // Save next node before we lose it
            curr.next = prev;          // Reverse the arrow
            prev = curr;               // Move prev forward
            curr = nextTemp;           // Move curr forward
        }
        
        return prev;  // prev is now the new head
    }
}
