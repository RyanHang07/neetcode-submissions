class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const minCapital = new PriorityQueue((a, b) => a[0] - b[0]); // Min heap
        const maxProfit = new PriorityQueue((a, b) => b - a); // Max heap

        for (let i = 0; i < capital.length; i++) {
            minCapital.enqueue([capital[i], profits[i]]);
        }

        for (let i = 0; i < k; i++) {
            while (!minCapital.isEmpty() && minCapital.front()[0] <= w) {
                maxProfit.enqueue(minCapital.dequeue()[1]);
            }
            if (maxProfit.isEmpty()) {
                break;
            }
            w += maxProfit.dequeue();
        }

        return w;
    }
}