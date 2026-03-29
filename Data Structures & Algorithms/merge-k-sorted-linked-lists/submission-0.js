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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let res = new ListNode(0);
        let cur = res;

        while (true) {
            let minNode = -1;
            for (let i = 0; i < lists.length; i++) {
                if(!lists[i]) continue;
                if (minNode === -1 || lists[minNode].val > lists[i].val) {
                    minNode = i;
                }
            }
            
            if (minNode === -1) break;
            cur.next = lists[minNode];
            lists[minNode] = lists[minNode].next;
            cur = cur.next;
        }

        return res.next;
    }
}
