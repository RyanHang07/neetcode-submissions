class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort();
        let perms = [[]];

        for(let p = 0; p < nums.length; p++){
            let nextPerms = [];
            for(let i = 0; i < perms.length; i++){
                for(let j = 0; j < perms[i].length+1; j++){
                    if(perms[i][j-1] === nums[p]) break;
                    let pCopy = perms[i].slice();
                    pCopy.splice(j, 0, nums[p]);
                    nextPerms.push(pCopy);
                }
            }
            perms = nextPerms;
        }

        return perms;
    }
}
