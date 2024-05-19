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
var lowestCommonAncestor = function (root, p, q) {
  const traverse = (node, p, q) => {
    if (node === null || node === p || node === q) {
      return node;
    }

    let left = traverse(node.left, p, q);
    let right = traverse(node.right, p, q);

    if (left && right) {
      return node;
    } else if (left && !right) {
      return left;
    } else {
      return right;
    }
  };

  traverse(root, p, q);
};
