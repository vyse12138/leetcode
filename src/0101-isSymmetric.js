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
 * @return {boolean}
 */

/*----- solution 1 -----
DFS, recursion.
Compare left node and right node, 
return false if they are not the same or one of them doesnt exist,
return true if reaches the end,
other wise, keep going.
Time complexity is O(n) 
Space complexity is O(n)
*/
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const compare = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }
    else if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    return compare(node1.left, node2.right) && compare(node1.right, node2.left)
  }
  return compare(root.left, root.right);
};

/*----- solution 1 -----
DFS, iteration, queue.
Using queue to store nodes.
Time complexity is O(n) 
Space complexity is O(n)
*/
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const queue = [];
  queue.push(root);
  queue.push(root);
  while (queue.length) {
    let node1 = queue.pop(), node2 = queue.pop();
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    if (node1.left || node2.right) {
      queue.unshift(node1.left);
      queue.unshift(node2.right);
    }
    if (node1.right || node2.left) {
      queue.unshift(node1.right);
      queue.unshift(node2.left);
    }
  }
  return true;
};