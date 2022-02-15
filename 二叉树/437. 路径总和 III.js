/**
 * @description 注意本题可以为非根节点路径，中间路径也是可以的
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root, targetSum) {
    if (root == null) {
        return 0;
    }

    let ret = rootSum(root, targetSum);
    // 子情况，多个以自身为根路径出发计算的结果
    // 这个递归算的是遍历所有点（注意看终止条件）
    ret += pathSum(root.left, targetSum);
    ret += pathSum(root.right, targetSum);
    return ret;
};
// 检查以此为根路径出发的结果
const rootSum = (root, targetSum) => {
    let ret = 0;

    if (root == null) {
        return 0;
    }

    const val = root.val;
    if (val === targetSum) {
        ret++;
    }

    // 这个递归算的是根路径长度
    ret += rootSum(root.left, targetSum - val);
    ret += rootSum(root.right, targetSum - val);
    return ret;
}
