class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a-b);
        let res = 0;
        let l = 0;
        let r = people.length - 1;
        while (l <= r) {
            let remain = limit - people[r--];
            res++;
            if (l <= r && remain >= people[l]) {
                l++;
            }
        }
        return res;
    }
}
