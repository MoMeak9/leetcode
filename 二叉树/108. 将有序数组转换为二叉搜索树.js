import TreeNode from "./TreeNode";
/**
 * @description 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 *
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
/*
* 解题思路
二叉搜索树：左子树节点都小于根节点值，右子树节点都大于根节点值。
由于nums已经升序排列，要构造高度平衡二叉树，所以只需将中间值作为根节点，左边数组的数去构造左子树，右边数组的数去构造右子树，递归构造。
*/
const sortedArrayToBST = nums => {
    if (!nums.length) return null;
    // 去中间索引（÷2取整）
    const mid = nums.length >> 1;
    // 构建二叉树，根节点为中间值，左子树为左侧值继续构建，右子树为右子树继续构建
    return new TreeNode(
        // 设置每一层逻辑
        nums[mid],
        //[)
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1))
    );
};
