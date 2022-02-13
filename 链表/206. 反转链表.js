/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    // 起始尾部
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;

        curr.next = prev;
        prev = curr;

        curr = next;
    }
    return prev;
};
