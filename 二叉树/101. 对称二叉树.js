import TreeNode from "./TreeNode";
/**
 * @description 给你一个二叉树的根节点 root ， 检查它是否轴对称。 递归 + 分治法
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
    if(!root) return true;
    const isMirror = (l, r) => {
        if(!l && !r) return true
        // 双重否定转Boolean，转换子问题
        return !!(l && r && l.val === r.val &&
            isMirror(l.left, r.right) &&
            isMirror(l.right, r.left));
    }
    return isMirror(root.left, root.right)
};
