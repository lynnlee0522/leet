/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: bigint
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: bigint, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function widthOfBinaryTree(root: TreeNode | null): bigint {
  if (!root) return 0n;

  const queue = [[root, 0, 0n]];
  let maxWidth = 0n;

  while (queue.length) {
    const len = queue.length;
    const max: bigint =
      (queue[len - 1][2] as bigint) - (queue[0][2] as bigint) + 1n;
    if (max > maxWidth) {
      maxWidth = max;
    }

    for (let i = 0; i < len; i++) {
      const target = queue.shift();
      if ((target as TreeNode[])[0].left) {
        queue.push([
          (target as TreeNode[])[0].left,
          (target as number[])[1] + 1,
          (target as bigint[])[2] * 2n + 1n,
        ]);
      }
      if ((target as TreeNode[])[0].right) {
        queue.push([
          (target as TreeNode[])[0].right,
          (target as number[])[1] + 1,
          (target as bigint[])[2] * 2n + 1n,
        ]);
      }
    }
  }

  return maxWidth;
}
