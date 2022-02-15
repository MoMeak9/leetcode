import TreeNode from "./TreeNode";
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function(root) {
    return dfs(root, 0);
};
// 二叉树普遍的两种终止情况（其实是为了加速，null也没有这些属性）
const dfs = (root, prevSum) => {
    // 终止
    if (root === null) {
        return 0;
    }
    const sum = prevSum * 10 + root.val;
    if (root.left == null && root.right == null) {
        // 终止
        return sum;
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
}

