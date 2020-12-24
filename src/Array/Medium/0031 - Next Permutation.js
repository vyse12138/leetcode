/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*-----solution-----
*/
var nextPermutation = function(nums) {
    let index1 = -1, index2 = -1, temp;
    for (let i = nums.length -1; i >= 0; i--){
        if (nums[i] < nums[i-1] && index1 === -1){
            index1 = i;
        }
        else if (nums[i] < index1 ) {
            [nums[i], nums[index1]] = [nums[index1], nums[i]]
            nums = nums.slice(0,i).concat(nums.slice(i+1, index1).reverse())
            return nums;
        }
    }
    return nums;
    
};