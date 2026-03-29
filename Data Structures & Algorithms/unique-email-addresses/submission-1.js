class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let unique = new Set();

        for (let e of emails) {
            let i = 0;
            let local = '';

            while (i < e.length && e[i] !== '@' && e[i] !== '+') {
                if (e[i] !== '.') {
                    local += e[i];
                }
                i++;
            }

            while (i < e.length && e[i] !== '@') {
                i++;
            }

            let domain = e.slice(i + 1);
            unique.add(`${local}@${domain}`);
        }
        return unique.size;
    }
}
