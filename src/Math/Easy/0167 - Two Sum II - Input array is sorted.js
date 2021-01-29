/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*----- solution 1 -----
Two sum edition, did not use the advantage of sorted array.
Time complexity is O(n) 
Space complexity is O(n)
*/
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]) + 1, i + 1];
    }
    map.set(target - nums[i], i);
  }
}

/*----- solution 2 -----
Two pointers pointing at very left and very right.
If the sum of two pointer's value in nums is greater than targer,
move right pointer to left by 1.
If the sum of two pointer's value in nums is less than target,
move left pointer to right by 1.
Else, which means the sum = targer,
return index of left and right pointers.
Time complexity is O(n) 
Space complexity is O(1)
*/
const twoSum = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] > target) {
      right--;
    }
    else if (nums[left] + nums[right] < target) {
      left++;
    }
    else {
      return [left + 1, right + 1];
    }
  }
}