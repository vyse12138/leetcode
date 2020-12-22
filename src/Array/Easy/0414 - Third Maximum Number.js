/**
 * @param {number[]} nums
 * @return {number}
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