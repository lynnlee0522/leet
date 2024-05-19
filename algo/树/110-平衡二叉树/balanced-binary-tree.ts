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

// 平衡二叉树
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 
// 转化为左右两个子树的最长直径的绝对值不超过1
function isBalanced(root: TreeNode | null): boolean {
  let isBalance = true;

  const nodeCounts = (root: TreeNode | null) => {
    if (!root) return 0;

    const leftCounts = nodeCounts(root.left);
    const rightCounts = nodeCounts(root.right);

    if (Math.abs(rightCounts - leftCounts) > 1) {
      isBalance = false;
    }

    return Math.max(leftCounts, rightCounts) + 1;
  };

  nodeCounts(root);

  return isBalance;
}
