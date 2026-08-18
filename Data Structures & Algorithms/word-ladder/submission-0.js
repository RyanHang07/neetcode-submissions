class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const words = new Set(wordList);
        if (!words.has(endWord) || beginWord === endWord) {
            return 0;
        }
        let res = 0;
        const q = new Queue([beginWord]);

        while (!q.isEmpty()) {
            res++;
            let len = q.size();
            for (let i = 0; i < len; i++) {
                const node = q.pop();
                if (node === endWord) return res;
                for (let j = 0; j < node.length; j++) {
                    for (let c = 97; c < 123; c++) {
                        if (String.fromCharCode(c) === node[j]) {
                            continue;
                        }
                        const nei =
                            node.slice(0, j) +
                            String.fromCharCode(c) +
                            node.slice(j + 1);
                        if (words.has(nei)) {
                            q.push(nei);
                            words.delete(nei);
                        }
                    }
                }
            }
        }
        return 0;
    }
}