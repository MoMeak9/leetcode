/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
    return findNode(root, key)

    // 返回 node 或代替 node 的节点
    function findNode(node, key) {
        if (!node) return null
        if (node.val === key) return removeNode(node)
        else if (node.val < key) {
            // NOTICE: 修正节点 `node.right` 的上联系
            node.right = findNode(node.right, key)
            return node
        } else {
            node.left = findNode(node.left, key)
            return node
        }
    }

    // 删除节点 node ，返回代替 node 的节点（即升序排序中 node 的下一个节点，可能为 null）
    function removeNode(node) {
        if (!node.right) return node.left // node.left 可能为 null
        // next 为升序序列中 node 的下一个节点
        // nextParent 为 next 的父节点
        // 找 next ，先从 node 向右走一步，然后尝试向左走到头（可能无法向左走）
        let next = node.right, nextParent = node
        while (next.left) {
            nextParent = next
            next = next.left
        }

        // NOTICE: 要分开讨论初始情况 `node.right === next`
        // 因为有区别：
        // * 在 if 中是 `nextParent.right` 指向 `next`
        // * 在 else 中是 `nextParent.left` 指向 `next`
        if (next === node.right) {
            next.left = node.left
        } else {
            // 修正 next 原位置的上下左右联系
            // NOTICE: 不管有没有 `next.right` ，都要修正 `next` 的上联系，即 `nextParent.left` ，否则树中有环
            nextParent.left = null
            if (next.right) {
                nextParent.left = next.right
                next.right = null
            }

            // 用 next 代替 node ，并修正新位置的下左右联系
            next.left = node.left
            next.right = node.right
        }

        // 清理 node 的下左右联系
        node.left = null
        node.right = null

        return next
    }
}
