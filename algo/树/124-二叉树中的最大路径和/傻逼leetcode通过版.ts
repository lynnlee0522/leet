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



 function maxPathSum(root: TreeNode | null): number {
    let MAX_SUM = -Infinity;

    // 求最优路径
    const maxGain = (treeNode: TreeNode | null) => {
        if (treeNode === null) {
            return 0;
        }

        const leftGain = Math.max(maxGain(treeNode.left), 0);
        const rightGain = Math.max(maxGain(treeNode.right), 0);
        const priceNewPath = treeNode.val + leftGain + rightGain;

        MAX_SUM = Math.max(MAX_SUM, priceNewPath);
        return treeNode.val + Math.max(leftGain, rightGain);
    };

    maxGain(root);
    return MAX_SUM;
}

