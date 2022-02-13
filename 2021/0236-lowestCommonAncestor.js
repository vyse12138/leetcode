/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*----- solution 1 -----
Recursion. DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var lowestCommonAncestor = function (root, p, q) {
  let result, dfs = (node, p, q) => {
    if (node) {
      let lson = dfs(node.left, p, q),
        rson = dfs(node.right, p, q);
      if ((lson && rson) || ((node.val === p.val || node.val === q.val) && (lson || rson))) {
        result = node;
      }
      return lson || rson || (node.val === p.val || node.val === q.val);
    }
  }
  dfs(root, p, q);
  return result;
};
