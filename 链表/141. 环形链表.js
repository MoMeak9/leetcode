/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description 标记法
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    while (head) {
        if (head.tag) {
            return true;
        }
        head.tag = true;
        head = head.next;
    }
    return false;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
    this.tag = false;
}

// 可可爱爱秒杀法
// var hasCycle = function (head) {
//     try {
//         JSON.stringify(head)
//     } catch{
//         return true
//     }
//     return false
// };

