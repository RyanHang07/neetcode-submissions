class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let index = 0;
        let index2 = numbers.length - 1;

        while (index < index2) {
            if ((numbers[index] + numbers[index2]) == target) {
                let result = [index + 1, index2 + 1];
                return result;
            } else if ((numbers[index] + numbers[index2]) > target) {
                index2--;
            } else {
                index++;
            }
        }
    }
}
