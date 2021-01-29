/**
 * @param {number} num
 * @param {number} num
 * @return {array}
 */

/*----- solution 1 -----
Two iterations to find the result
Time complexity is O(n^2) 
Space complexity is O(1)
*/

const twoSum = (nums, target)=> {
    //for loop the nums array
    for (let i = 0; i < nums.length; i++){
        //store the value of the first parameter 
        let firstNum = nums[i];
        //for loop the rest nums array
        for (let j = i + 1; j < nums.length; j++){
            //return when targets are found
            if(target - firstNum == nums[j]){
                return [i,j];
            }
        }
    }
}
