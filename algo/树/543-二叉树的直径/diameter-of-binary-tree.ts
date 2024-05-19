class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 全程不用考虑直径的问题，直接算最多的节点数，最后-1
function diameterOfBinaryTree(root: TreeNode | null): number {
  // 通过中序遍历
  let maxNodes = 0;

  const nodesCount = (root: TreeNode | null) => {
    if (!root) {
      return 0;
    }

    const leftNodes = nodesCount(root.left);
    const rightNodes = nodesCount(root.right);

    maxNodes = Math.max(maxNodes, leftNodes + rightNodes + 1);
    return Math.max(leftNodes, rightNodes) + 1;
  };

  nodesCount(root);

  return maxNodes - 1;
}
