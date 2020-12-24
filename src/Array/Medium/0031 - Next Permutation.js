/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*-----solution-----
    3 step to find the next permutation
1.  Iterate from right until the number is not increasing,
    store the position in index1 and break the iteration.
2.  Find the smallest number in all nmumbers that are larger than index1,
    and store the position in index2, then swap them.
3.  Reverse the sub array from index1 + 1 to the end.

e.g.[1, 4, 5, 3, 2]
1.  Index1 is 1 which is pointing at number nums[1] = 4
2.  Find index2 to be 2, which is nums[2] = 5,
    swap them, the array become [1, 5, 4 , 3, 2]
3.  Reverse [4, 3, 2] in the array,
    then the array become [1, 5, 2, 3, 4]
*/
var nextPermutation = function (nums) {
    let index1 = -1, index2;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index1 = i - 1;
            index2 = i;
            break;
        }
    }
    if (index1 !== -1) {
        for (let i = index1 + 1; i < nums.length ; i++) {
            if (nums[i] > nums[index1] && nums[i] <= nums[index2]) {
                index2 = i;
            }
        }

        [nums[index2], nums[index1]] = [nums[index1], nums[index2]]
    }

    index2 = nums.length - 1;
    index1++;
    while (index1 < index2) {
        [nums[index2], nums[index1]] = [nums[index1], nums[index2]]
        index1++;
        index2--;
    }
    return nums;

};


