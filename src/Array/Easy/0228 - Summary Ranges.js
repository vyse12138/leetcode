/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    //pointing at starting index of a range
    let start = 0;
    let result = [];
    for (let i = 1; i < nums.length + 1; i++){
        //if not counting continuously
        if (nums[i] - nums[i-1] !== 1){
            //push range to result
            if ((i-1) - start === 0){
                result.push(nums[start].toString());
            }
            else {
                result.push(`${nums[start]}->${nums[i-1]}`);
            }
            start = i;
        }
    }
    return result
};