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
 * @return {string[]}
 */

/*----- solution 1 -----
Recursion, DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var binaryTreePaths = function (root) {
  const result = [],
    buildPath = (node, path) => {
      if (node) {
        path += node.val.toString()
        if (!node.left && !node.right) {
          result.push(path)
        } else {
          path += '->'
          buildPath(node.left, path)
          buildPath(node.right, path)
        }
      }
    }
  buildPath(root, '')
  return result
}
