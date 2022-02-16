/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
    if (!root) return 0;
    let leftValue = sumOfLeftLeaves(root.left);
    let rightValue = sumOfLeftLeaves(root.right);
    // 单层逻辑，两层树的值如何返回？？注意考虑
    let midValue = 0;
    if (root.left && !root.left.left && !root.left.right) {
        midValue = root.left.val;
    }
    return leftValue + rightValue + midValue;
};
