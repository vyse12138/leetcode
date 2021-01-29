/**
 * @param {number[]} num
 * @param {number} num
 * @return {number[]}
 */

/*----- solution 1 -----
Two iterations to find the result
Time complexity is O(n^2) 
Space complexity is O(1)
*/
const twoSum = (nums, target) => {
  //for loop the nums array
  for (let i = 0; i < nums.length; i++) {
    //store the value of the first parameter 
    let firstNum = nums[i];
    //for loop the rest nums array
    for (let j = i + 1; j < nums.length; j++) {
      //return when targets are found
      if (target - firstNum == nums[j]) {
        return [i, j];
      }
    }
  }
}

/*----- solution 2 -----
check if map contains the number required,
if yes, return current index and index stored in map.
if no, using map to store [key --- value]: 
[required num to sum to target --- current index]
Time complexity is O(n) 
Space complexity is O(n)
*/
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])];
    }
    map.set(target - nums[i], i);
  }
}