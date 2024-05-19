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

/* 
如果 key > root.val，说明要删除的节点在右子树，root.right = deleteNode(root.right, key)。
如果 key < root.val，说明要删除的节点在左子树，root.left = deleteNode(root.left, key)。
如果 key == root.val，则该节点就是我们要删除的节点，则：
如果该节点是叶子节点，则直接删除它：root = null。
如果该节点不是叶子节点且有右节点，则用它的后继节点的值替代 root.val = successor.val，然后删除后继节点。
如果该节点不是叶子节点且只有左节点，则用它的前驱节点的值替代 root.val = predecessor.val，然后删除前驱节点。
返回 root。
*/

// Successor 代表的是中序遍历序列的下一个节点。即比当前节点大的最小节点，简称后继节点。
// 先取当前节点的右节点，然后一直取该节点的左节点，直到左节点为空，则最后指向的节点为后继节点。
const successor = (root: TreeNode) => {
  root = root.right;

  if (root.left) {
    root = root.left;
  }

  return root;
};

// Predecessor 代表的是中序遍历序列的前一个节点。即比当前节点小的最大节点，简称前驱节点。
// 先取当前节点的左节点，然后取该节点的右节点，直到右节点为空，则最后指向的节点为前驱节点。
const predecessor = (root: TreeNode) => {
  root = root.left;

  if (root.right) {
    root = root.right;
  }

  return root;
};

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    // 找到要删除的节点
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.right) {
      root.val = successor(root).val;
      root.right = deleteNode(root.right, root.val);
    } else {
      root.val = predecessor(root).val;
      root.left = deleteNode(root.left, root.val);
    }
  }

  return root;
}
