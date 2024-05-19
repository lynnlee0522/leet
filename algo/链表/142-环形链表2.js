/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let node = head;
    let flag = false;

    if (!node || !node.next) {
        return null
    }

    while(node.next) {
        if (node.flag) {
            
        }
        node = node.next
        node.flag = true
    }

    return null
};