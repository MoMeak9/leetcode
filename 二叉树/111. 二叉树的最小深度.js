/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
    // 两种终止情况
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 1;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    // 左右子树分别比较
    if (root.left != null) {
        ans = Math.min(minDepth(root.left), ans);
    }
    if (root.right != null) {
        ans = Math.min(minDepth(root.right), ans);
    }
    return ans + 1;
};

