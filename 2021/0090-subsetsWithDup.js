/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*----- solution 1 -----
Recursion, Back tracking.
Time complexity is O(n*2^n)
Space complexity is O(n)
*/
var subsetsWithDup = function (nums) {
  const t = [], result = [], dfs = (cur) => {
    if (cur === nums.length) {
      result.push(t.slice());
      return;
    }
    t.push(nums[cur]);
    dfs(cur + 1);
    t.pop();
    dfs(cur + 1);
  };
  dfs(0);
  return result;
};