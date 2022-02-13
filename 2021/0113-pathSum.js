/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

/*----- solution 1 -----
Recursion, DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var pathSum = function (root, targetSum) {
  if (root && root.val === targetSum && !root.left && !root.right) { return [[targetSum]] }
  let result = [], dfs = (node, path) => {
    if (node) {
      path += node.val.toString() + ' ';
      if (!node.left && !node.right) {
        let sum = path.trim().split(' ').reduce((a, b) => (a - 0) + (b - 0));
        if (sum === targetSum) {
          result.push(path.trim().split(' '));
        }
      }
      else {
        dfs(node.left, path);
        dfs(node.right, path);
      }
    }
  }
  dfs(root, '');
  return result;
};

/*----- solution 1 -----
Recursion, DFS.
Shorter version.
Time complexity is O(n) 
Space complexity is O(n)
*/
var pathSum = function (root, targetSum) {
  let result = [], path = [], dfs = (node, sum) => {
    if (node) {
      path.push(node.val);
      sum -= node.val;
      if (!node.left && !node.right && sum === 0) {
        result.push(path.slice());
      }
      dfs(node.left, sum);
      dfs(node.right, sum);
      path.pop();
    }
  }
  dfs(root, targetSum);
  return result;
};