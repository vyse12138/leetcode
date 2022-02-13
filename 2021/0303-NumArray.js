/**
 * @param {number[]} nums
 */

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

/*----- solution 1 -----
Time complexity is O(1) for creation
Time complexity is O(n) for query
*/
var NumArray = function(nums) {
  this.array = nums;
};
NumArray.prototype.sumRange = function(i, j) {
  return this.array.slice(i,j+1).reduce((a,b) => a+b);
};


 /*----- solution 2 -----
Time complexity is O(1) for creation
Time complexity is O(n) for query
*/
var NumArray = function(nums) {
  let length = nums.length
  this.preSum = new Array(length + 1).fill(0);
  for (let i = 0; i < length; i++) {
    this.preSum[i+1] = this.preSum[i] + nums[i];
  }
};
NumArray.prototype.sumRange = function(i, j) {
  return this.preSum[j+1] - this.preSum[i];
};