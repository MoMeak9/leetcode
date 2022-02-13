/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import ListNode from "./ListNode";

/**
 * @description 迭代法
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
    const dummyHead = new ListNode(0); // 创建新的链表储存头部
    dummyHead.next = head;
    let temp = dummyHead; // 从新的头部节点开始
    while (temp.next !== null) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return dummyHead.next; // 返回时去除新的头部
};

// 递归方法
const removeElements2 = function (head, val) {
    // 一定有的终止条件
    if (head === null) {
        return head;
    }
    head.next = removeElements2(head.next, val);
    return head.val === val ? head.next : head; // 递归函数
};
