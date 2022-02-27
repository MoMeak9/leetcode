/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = (nums1, nums2) => {
    // nums1、nums2数组的长度
    const [m, n] = [nums1.length, nums2.length];
    // dp数组初始化，都初始化为0 ！！
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    // 初始化最大长度为0
    let res = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 遇到nums1[i - 1] === nums2[j - 1]，则更新dp数组
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            // 更新res
            res = dp[i][j] > res ? dp[i][j] : res;
        }
    }
    // 遍历完成，返回res
    return res;
};
// https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/dai-ma-sui-xiang-lu-718-zui-chang-zhong-rowbh/
