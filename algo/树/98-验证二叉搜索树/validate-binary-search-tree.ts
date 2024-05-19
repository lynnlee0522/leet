/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 那么根据二叉搜索树的性质，在递归调用左子树时，我们需要把上界 upper 改为 root.val，
// 即调用 helper(root.left, lower, root.val)，因为左子树里所有节点的值均小于它的根节点的值。
// 同理递归调用右子树时，我们需要把下界 lower 改为 root.val，即调用 helper(root.right, root.val, upper)

const helper = (root: TreeNode | null, lower: number, upper: number) => {
  if (!root) return true;

  if (lower >= root.val || upper <= root.val) {
    return false;
  }

  return (
    helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  );
};

function isValidBST(root: TreeNode | null): boolean {
  return helper(root, -Infinity, Infinity);
}
