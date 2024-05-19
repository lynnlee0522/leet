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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) return null;

  const serializeArr = [];
  const queue = [root];

  while (queue.length) {
    // 把当前元素放入队列数组中
    const target = queue.shift();

    if (target === null) {
      serializeArr.push(null);
      continue;
    }

    serializeArr.push(target.val);
    queue.push(target.left);
    queue.push(target.right);
  }
  return serializeArr.join(",");
}

// const mockData = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 3,
//     left: {
//       val: 4,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 5,
//       left: null,
//       right: null,
//     },
//   },
// };

// console.log(serialize(mockData));

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data || !data.length) return null;

  const dataArr = data.split(",");
  const root = new TreeNode(Number(dataArr[0]));

  // 只存当前遍历的根节点
  const queue = [root];

  for (let i = 1; i < dataArr.length; ) {
    const parent = queue.shift();

    const left = dataArr[i++];
    if (left) {
      parent.left = new TreeNode(Number(left));
      queue.push(parent.left);
    } else {
      parent.left = null;
    }

    const right = dataArr[i++];
    if (right) {
      parent.right = new TreeNode(Number(right));
      queue.push(parent.right);
    } else {
      parent.right = null;
    }
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
