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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q?: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  let ancestor = null;

  const findAncestor = (
    root: TreeNode | null,
    p: TreeNode | null,
    q?: TreeNode | null
  ) => {
    const lSon = root.left ? findAncestor(root.left, p, q) : false;
    const rSon = root.right ? findAncestor(root.right, p, q) : false;

    // 设置祖先
    if (
      (lSon && rSon) ||
      ((root.val === p.val || root.val === q?.val) && (lSon || rSon))
    ) {
      ancestor = root;
    }

    // 返回本次判断结果
    return lSon || rSon || root.val === p.val || root.val === q?.val;
  };

  findAncestor(root, p, q);
  return ancestor;
}

const mock = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

console.log(
  lowestCommonAncestor(
    mock,
    {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
    },
    {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    }
  )
);
