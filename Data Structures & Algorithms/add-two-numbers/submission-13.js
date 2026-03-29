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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let result = new ListNode(0);
        let dummy = result;
        let carry = 0;
        while (l1 !== null || l2 !== null || carry !== 0) {
            let tempResult = carry;

            if (l1 !== null) {
                tempResult += l1.val
                l1 = l1.next;
            }

            if (l2 !== null) {
                tempResult += l2.val
                l2 = l2.next;
            }

            carry = Math.floor(tempResult / 10);
            result.next = new ListNode(tempResult % 10);
            result = result.next;
        }
        
        return dummy.next;
    }
}
