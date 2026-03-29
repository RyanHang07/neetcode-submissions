class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let code = "";
        for (const str of strs) {
            let len = str.length;
            code += len + "#" + str;
        }
        return code;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        
        while (i < str.length) {
            let length = "";
            while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
                length += str.charAt(i);
                i++;
            }
            length = Number(length);

            i++;
            
            let currentString = "";
            for (let j = 0; j < length; j++) {
                currentString += str.charAt(i);
                i++;
            }
            
            result.push(currentString);
        }
        
        return result;
    }
}
