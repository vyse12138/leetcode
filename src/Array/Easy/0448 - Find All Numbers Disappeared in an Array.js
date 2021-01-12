/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*----- solution 1 -----
use indexOf function to find missing numbers,
since indexOf function has a time complexity of O(log n)
Time complexity is O(n log n) which does not meet requirement
Space complexity is O(1)
*/
var findDisappearedNumbers = function(nums) {
    let result = [];
    for (i = 0; i < nums.length; i++){
        if (nums.indexOf(i) == -1){
            result.push(i);
        }
    }
    return result;
};

/*----- solution 2 -----
iterate the array, set the element at index |nums[i]|-1 to negative
then all included numbers would be negative,
iterate the array again and find the index of positive numbers
then they are the missing numbers.
Time complexity is O(n)
Space complexity is O(1)
*/
var findDisappearedNumbers = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++){
        nums[Math.abs(nums[i])-1] = -Math.abs(nums[Math.abs(nums[i])-1]);

    }
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0){
            result.push(i+1)
        }
    }
    return result;
};