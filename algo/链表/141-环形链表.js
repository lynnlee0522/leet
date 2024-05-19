/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 第一种解法: flag + 遍历
var hasCycle = function (head) {
  let flag = false;
  let node = head;
  while (node !== null) {
    if (node.flag) return node
    node.flag = true;
    node = node.next;
  }
  return false;
};
