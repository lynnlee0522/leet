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

// 假设接收的是一个数组
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

console.log(deserialize([-10,9,20,null,null,15,7]));
