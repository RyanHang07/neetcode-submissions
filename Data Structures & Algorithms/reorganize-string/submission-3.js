class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const freq = new Array(26).fill(0);
        for (const char of s) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const maxFreq = Math.max(...freq);
        if (maxFreq > Math.floor((s.length + 1) / 2)) {
            return '';
        }

        const findMaxIndex = () => {
            let maxIdx = 0;
            for (let i = 1; i < freq.length; i++) {
                if (freq[i] > freq[maxIdx]) {
                    maxIdx = i;
                }
            }
            return maxIdx;
        };

        const res = [];
        while (res.length < s.length) {
            const maxIdx = findMaxIndex();
            const maxChar = String.fromCharCode(maxIdx + 'a'.charCodeAt(0));
            res.push(maxChar);
            freq[maxIdx]--;

            if (freq[maxIdx] === 0) {
                continue;
            }

            const tmp = freq[maxIdx];
            freq[maxIdx] = -Infinity;
            const nextMaxIdx = findMaxIndex();
            const nextMaxChar = String.fromCharCode(
                nextMaxIdx + 'a'.charCodeAt(0),
            );
            res.push(nextMaxChar);
            freq[maxIdx] = tmp;
            freq[nextMaxIdx]--;
        }

        return res.join('');
    }
}