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
const swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = head.next; // head 是原始链表头，newHead是新链表头
    // 交换后的 head.next 是唯一考虑变换的
    head.next = swapPairs(newHead.next); // 递归公式
    newHead.next = head; // 互换完成
    return newHead;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
