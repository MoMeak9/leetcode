import ListNode from "./ListNode";
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 顺序法
const getKthFromEnd = function(head, k) {
    let node = head, n = 0;
    // 找到最后一个节点
    while (node) {
        node = node.next;
        n++;
    }
    // 调换头部
    node = head;
    for (let i = 0; i < n - k; i++) {
        // 遍历至倒数第k个节点，并结束返回
        node = node.next;
    }
    return node;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 快慢指针
const getKthFromEnd2 = function(head, k) {
    let fast = head, slow = head;
    // 快指针先走k格
    while (fast && k > 0) {
        [fast, k] = [fast.next, k - 1];
    }
    // 快指针走到末尾结束
    while (fast) {
        [fast, slow] = [fast.next, slow.next];
    }
    return slow;
};
