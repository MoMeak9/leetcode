import TreeNode from "./TreeNode";
/**
 * @description 需要输出节点
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
    // 递归法
    // 要遍历整个树找到所有路径，所以递归函数不需要返回值, 与112不同
    const res = [];
    const travelsal = (node, cnt, path) => {
        // 遇到了叶子节点且找到了和为sum的路径，两个终止条件
        if (cnt === 0 && !node.left && !node.right) {
            res.push([...path]); // 不能写res.push(path), 要深拷贝
            return;
        }

        if (!node.left && !node.right) return; // 遇到叶子节点而没有找到合适的边，直接返回
        // 左 （空节点不遍历）

        // 两个分层情况
        if (node.left) {
            path.push(node.left.val); // 走一格
            travelsal(node.left, cnt - node.left.val, path); // 递归
            path.pop(); // 回溯
        }
        // 右 （空节点不遍历）
        if (node.right) {
            path.push(node.right.val); // 走一格
            travelsal(node.right, cnt - node.right.val, path); // 递归
            path.pop(); // 回溯
        }
    };
    if (!root) return res;
    travelsal(root, targetSum - root.val, [root.val]); // 把根节点放进路径
    return res;
};
