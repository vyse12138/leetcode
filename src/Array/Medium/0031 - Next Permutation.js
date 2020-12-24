/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*-----solution-----
*/
var nextPermutation = function (nums) {
    let index1 = -1, index2 = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index1 = i - 1;
            break;
        }
    }
    if (index1 !== -1) {
        for (let i = nums.length - 1; i > index1; i--) {
            if (nums[i] > nums[index1]) {
                index2 = Math.min(index2, i);
            }
        }

        [nums[index2], nums[index1]] = [nums[index1], nums[index2]]
    }


    index2 = nums.length - 1
    index1++
    while (index1 < index2) {
        [nums[index2], nums[index1]] = [nums[index1], nums[index2]]
        index1++;
        index2--;
    }
    return nums;

};


