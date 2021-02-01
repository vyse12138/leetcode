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
 * @return {number[][]}
 */

/*----- solution 1 -----
Iteration.
Using quene.
Time complexity is O(n) 
Space complexity is O(n)
*/
var levelOrder = function(root) {
  if(!root) {
    return [];
  }
  let queue = [root], result = [];
  while(queue.length > 0){
    let length = queue.length;
    let row = [];
    while(length--){
      let node = queue.shift();
      row.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(row);
  }
  return result;
};

