// 这个还没搞明白呢，记得看一下

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: [TreeNode, number][] = [[root, 0]];
  let maxWidth = 0;

  while (queue.length) {
    const len = queue.length;

    let min = 0;
    let max = 0;

    for (let i = 0; i < len; i++) {
      const [node, pos] = queue.shift();

      if (i === 0) {
        min = pos;
      }

      if (i === len - 1) {
        max = pos;
      }

      node.left && queue.push([node.left, (pos << 1) + 1]);
      // 注意: << 的优先级小于 + , 要用括号括住
      node.right && queue.push([node.right, (pos << 1) + 2]);
    }

    const cand = max - min + 1;
    cand > maxWidth && (maxWidth = cand);
  }

  return maxWidth;
}
