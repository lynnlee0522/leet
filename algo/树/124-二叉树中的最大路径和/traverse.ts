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

let MAX_SUM = -Infinity;

function deserialize(data: Array<number | string>): TreeNode | null {
  if (!data || data.length === 0) {
    return null;
  }

  // 根节点
  const root = new TreeNode(Number(data[0]));

  // 队列，只存放当前层次的父节点
  const queue = [root];

  for (let i = 1; i < data.length; ) {
    const parent = queue.shift();

    const left = data[i++];
    if (left !== "null" && left) {
      parent.left = new TreeNode(Number(left));
      queue.push(parent.left);
    } else {
      parent.left = null;
    }

    const right = data[i++];
    if (right !== "null" && right) {
      parent.right = new TreeNode(Number(right));
      queue.push(parent.right);
    } else {
      parent.right = null;
    }
  }

  return root;
}

function maxPathSum(root: Array<number | string>): number {
  const newRoot = deserialize(root);
  maxGain(newRoot);
  return MAX_SUM;
}

// 求最优路径
const maxGain = (treeNode: TreeNode) => {
  if (treeNode === null) {
    return 0;
  }

  const leftGain = Math.max(maxGain(treeNode.left), 0);
  const rightGain = Math.max(maxGain(treeNode.right), 0);

  const priceNewPath = treeNode.val + leftGain + rightGain;

  MAX_SUM = Math.max(MAX_SUM, priceNewPath);

  return treeNode.val + Math.max(leftGain, rightGain);
};


console.log(maxPathSum([0]))