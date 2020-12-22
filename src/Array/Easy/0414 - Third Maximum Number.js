/**
 * @param {number[]} nums
 * @return {number}
 */

 /*---solution---
 define 3 variables representing the first, second and the third max integer in the list,
 initializing them with the minimal safe integer,
 iterate through the list and compare the element with the 3 max integer,
 return the third max if exsit, else return the first max.
 */
var thirdMax = function(nums) {
    let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER;

    for (i = 0; i < nums.length; i++){
        if (nums[i] > max1){
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        }
        else if (nums[i] > max2 && nums[i] !== max1 ){
            max3 = max2;
            max2 = nums[i];
        }
        else if (nums[i] > max3 && nums[i] !== max1 && nums[i] !== max2 ){
            max3 = nums[i];
        }
    }
    if (max3 !== Number.MIN_SAFE_INTEGER){
        return max3;
    }
    else{
        return max1;
    }
};