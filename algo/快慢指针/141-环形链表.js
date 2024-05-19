var hasCycle = function (head) {
    let fast = head,
        slow = head;

    if (!head || !head.next) {
        return false;
    }

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) {
            return true
        }
    }

    return false;
};
