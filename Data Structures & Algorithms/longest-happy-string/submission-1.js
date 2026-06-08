class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        const res = [];
        const maxHeap = new MaxPriorityQueue((x) => x[0]);

        if (a > 0) maxHeap.enqueue([a, 'a']);
        if (b > 0) maxHeap.enqueue([b, 'b']);
        if (c > 0) maxHeap.enqueue([c, 'c']);

        while (!maxHeap.isEmpty()) {
            const [count, char] = maxHeap.dequeue();
            if (
                res.length > 1 &&
                res[res.length - 1] === char &&
                res[res.length - 2] === char
            ) {
                if (maxHeap.isEmpty()) break;
                const [count2, char2] = maxHeap.dequeue();
                res.push(char2);
                if (count2 - 1 > 0) maxHeap.enqueue([count2 - 1, char2]);
                maxHeap.enqueue([count, char]);
            } else {
                res.push(char);
                if (count - 1 > 0) maxHeap.enqueue([count - 1, char]);
            }
        }

        return res.join('');

    }
}
