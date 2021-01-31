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
var postorderTraversal = function (root) {
  const result = [], postorder = (node, result) => {
    if (node === null) {
      return;
    }
    postorder(node.left, result);
    postorder(node.right, result);
    result.push(node.val);
  }
  postorder(root, result);
  return result;
};

/*----- solution 2 -----
Recursion in shorter code.
Time complexity is O(n) 
Space complexity is O(n)
*/
var postorderTraversal = function (root) {
  return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : [];
};

/*----- solution 3 -----
Iterations.
Using stack to hold treeNodes.
Time complexity is O(n) 
Space complexity is O(n)
*/
var postorderTraversal = function (root) {
  var result = [];
  if (!root) {
    return [];
  }
  var stack = [root];
  while (stack.length) {
    root = stack.pop();
    res.unshift(root.val);
    if (root.left) stack.push(root.left);
    if (root.right) stack.push(root.right);
  }
  return result;
};

