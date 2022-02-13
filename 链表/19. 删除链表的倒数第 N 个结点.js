import ListNode from "./ListNode";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    let length = getLength(head)
    if (length === 1) {
        return null
    }
    let dummy = new ListNode(0, head)
    let cur = dummy
    for (let i = 1; i < length - n + 1; i++) {
        cur = cur.next
    }
    cur.next = cur.next.next
    return dummy.next
};

const getLength = function (head) {
    let length = 0
    while (head != null) {
        length++
        head = head.next
    }
    return length
}
