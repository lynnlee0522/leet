// 前序遍历是先根，再左子树， 再右子树

const frontTraverse = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  const traverse = (root) => {
    result.push(root.value);
    if (root.left) {
      traverse(root.left);
    }
    if (root.right) {
      traverse(root.right);
    }
  };

  traverse(root);
  return result;
};

const tree = {
  value: 3,
  left: {
    value: 2,
    left: {
      value: 5,
    },
    right: {
      value: 7,
    },
  },
  right: {
    value: 8,
    left: {
      value: 9,
    },
    right: {
      value: 1,
      left: {
        value: 4,
      },
    },
  },
};

console.log(frontTraverse(tree));
