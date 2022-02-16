/**
 * @param {number[]} height
 * @return {number}
 */

/*----- solution 1 -----
Two pointers left and right.
Calculate the area base on those two pointer.
Compare it with previous maxArea and save the larger one.
move left pointer to right by 1 is left is smaller than right.
vice versa.
Time complexity is O(n^2) 
Space complexity is O(1)
*/
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    maxArea = 0
  while (left < right) {
    let currentWidth = right - left,
      currentHeight = Math.min(height[left], height[right])
    maxArea = Math.max(maxArea, currentWidth * currentHeight)
    if (currentHeight === height[left]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}
