class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        let map = new Map();
        
        for (let str of strings) {
            let key = this.getSignature(str);
            
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }
        
        return Array.from(map.values());
    }

    getSignature(str) {
        let signature = [];
        
        for (let i = 1; i < str.length; i++) {
            let diff = (str.charCodeAt(i) - str.charCodeAt(i - 1) + 26) % 26;
            signature.push(diff);
        }
        
        // Include length in the key to differentiate single chars from multi-char patterns
        return str.length + '#' + signature.join(',');
    }
}
