class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber) {
        if (columnNumber === 0) {
            return "";
        }

        const n = columnNumber - 1;
        return (
            this.convertToTitle(Math.floor(n / 26)) 
            + String.fromCharCode('A'.charCodeAt(0) + (n % 26))
        );
    }
}
