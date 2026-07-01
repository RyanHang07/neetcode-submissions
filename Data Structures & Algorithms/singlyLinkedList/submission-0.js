/**
 * Singly Linked List Node
 */
class ListNode {
    /**
     * @param {number} val - Value of the node
     * @param {ListNode} [nextNode=null] - Reference to the next node
     */
    constructor(val, nextNode = null) {
        this.val = val;
        this.next = nextNode;
    }
}

/**
 * Implementation for Singly Linked List
 */
class LinkedList {
    constructor() {
        /**
         * Initialize the list with a 'dummy' node, which makes
         * removing a node from the beginning of list easier.
         * @type {ListNode}
         */
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * Retrieve value at index
     * @param {number} index - Index to retrieve value from
     * @returns {number} Value at index or -1 if index is out of bounds
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1; // Index out of bounds or list is empty
    }

    /**
     * Insert a new node at the head
     * @param {number} val - Value to insert
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            // If list was empty before insertion
            this.tail = newNode;
        }
    }

    /**
     * Insert a new node at the tail
     * @param {number} val - Value to insert
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * Remove node at index
     * @param {number} index - Index to remove node from
     * @returns {boolean} True if removal was successful, false otherwise
     */
    remove(index) {
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // Remove the node ahead of curr
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * Retrieve all values in the list
     * @returns {number[]} An array containing all values in the list
     */
    getValues() {
        let curr = this.head.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
