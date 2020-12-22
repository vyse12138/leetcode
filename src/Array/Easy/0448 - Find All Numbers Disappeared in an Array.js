/**
 * @param {number[]} nums
 * @return {number[]}
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

