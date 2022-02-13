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
 * @return {number[]}
 */

/*----- solution 1 -----
Recursion.
Time complexity is O(n) 
Space complexity is O(n)
*/
var preorderTraversal = function (root) {
  const result = [], preorder = function(node) {
    if (node == null) {
      return;
    }
    result.push(node.val);
    arguments.callee(node.left);
    arguments.callee(node.right);
  }
  preorder(root, result);
  return result;
};

/*----- solution 2 -----
Iterations.
Using stack to hold treeNodes.
Time complexity is O(n) 
Space complexity is O(n)
*/
var preorderTraversal = function (root) {
  const result = [], stack = [];
  root && stack.push(root);
  while (stack.length) {
    let treeNode = stack.pop();
    result.push(treeNode.val);
    treeNode.right && stack.push(treeNode.right);
    treeNode.left && stack.push(treeNode.left);
  }
  return result;
};

/*----- solution 3 -----
Recursion.
Time complexity is O(n) 
Space complexity is O(n)
*/
var preorderTraversal = function(root) {
  return arguments[0] ? [arguments[0].val, ...arguments.callee(arguments[0].left), ...arguments.callee(arguments[0].right)] : [];
};
