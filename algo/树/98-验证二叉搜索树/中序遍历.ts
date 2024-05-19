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

// 当前节点的值是否大于前一个中序遍历得到的节点的值
// 中序遍历
function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  const stack = [];
  let pre = -Infinity;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (root.val <= pre) {
      return false;
    }

    pre = root.val;
    root = root.right;
  }

  return true;
}

export {}
