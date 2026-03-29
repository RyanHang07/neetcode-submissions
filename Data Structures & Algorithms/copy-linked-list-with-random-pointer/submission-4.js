// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;

        const myMap = new Map();
        let itr = head;

        while (itr !== null) {
            myMap.set(itr, new Node(itr.val));
            itr = itr.next;
        }

        itr = head;
        while(itr !== null) {
            myMap.get(itr).next = itr.next ? myMap.get(itr.next) : null;
            myMap.get(itr).random = itr.random ? myMap.get(itr.random) : null;
            itr = itr.next;
        }

        return myMap.get(head);
    }
}
