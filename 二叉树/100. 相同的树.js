/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 自己写的
const isSameTree = function (p, q) {
    if (p == null && q == null) return true
    // if (p == null && q != null) return false; 简写逻辑闭环
    // else if (q == null && p != null) return false;
    if (p == null || q == null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 别人写的
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree2 = function (p, q) {
    if (p == null && q == null)
        return true;
    if (p == null || q == null)
        return false;
    if (p.val != q.val)
        return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
