/**
 * @description 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 回溯+递归的方法
const lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = function (root, p, q) {
        // 2. 确定递归终止条件
        if (root === null || root === p || root === q) {
            return root;
        }
        // 3. 确定递归单层逻辑，各检索左右节点
        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);
        if (left !== null && right !== null) {
            return root;
        }
        if (left === null) {
            return right;
        } else {
            return left;
        }

    }
    return travelTree(root, p, q);
};
