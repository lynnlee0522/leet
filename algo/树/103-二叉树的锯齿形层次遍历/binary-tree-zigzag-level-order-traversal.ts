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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  // 是否从左往右遍历
  let isLeftOrder = true;

  const zigzagArr = [];
  const queue = [root];

  while (queue.length) {
    // 先把该层的长度确定下来
    const size = queue.length;
    const levelArr = [];

    for (let i = 0; i < size; i++) {

      // 从这个地方弹出来
      const target = queue.shift();

      if (isLeftOrder) {
        levelArr.push(target.val);
      } else {
        levelArr.unshift(target.val);
      }

      // 和序列化不同， 因为不用考虑反序列化的问题， 这里不用考虑占位符
      if (target.left) {
        queue.push(target.left);
      }

      if (target.right) {
        queue.push(target.right);
      }
    }

    zigzagArr.push(levelArr);
    isLeftOrder = !isLeftOrder;
  }

  return zigzagArr;
}
