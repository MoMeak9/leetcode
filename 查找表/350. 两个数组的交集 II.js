/**
 * @description 双指针法 通过题意，寻找两数组是否有相同项，并且提示中说可以不要求交集的顺序。
 * 既然如此，我们便可以先行将数组排序，方便我们查找，然后正式流程如下：
 * 创建一个指针 ii 指向 nums1nums1 数组首位，指针 jj 指向 nums2nums2 数组首位。
 * 创建一个临时栈，用于存放结果集。
 * 开始比较指针 ii 和指针 jj 的值大小，若两个值不等，则数字小的指针，往右移一位。
 * 若指针 ii 和指针 jj 的值相等，则将交集压入栈。
 * 若 numsnums 或 nums2nums2 有一方遍历结束，代表另一方的剩余值，都是唯一存在，且不会与之产生交集的。
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let l = 0, r = 0, ans = [];
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] === nums2[r]) {
            ans.push(nums1[l]);
            l++;
            r++;
        } else nums1[l] < nums2[r] ? l++ : r++;
    }
    return ans;
};

/**
 * @description 运用哈希表统计数字出现的次数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect2 = function (nums1, nums2) {
    const map = new Map();
    const res = [];
    for (const num1 of nums1) {
        const value = map.get(num1);
        if (value) {
            map.set(num1, map.get(num1) + 1);
        } else {
            map.set(num1, 1);
        }
    }
    for (const num2 of nums2) {
        const value = map.get(num2);
        if (value > 0) {
            res.push(num2);
            map.set(num2, value - 1);
        }
    }
    return res;
//    对象即哈希
//     const map = {};
//     const res = [];
//     for (const num1 of nums1) { // 记录nums1各个数字的出现次数
//         if (map[num1]) {
//             map[num1]++;
//         } else {
//             map[num1] = 1;
//         }
//     }
//     for (const num2 of nums2) { // 遍历nums2，看看有没有数字在nums1出现过
//         const val = map[num2];
//         if (val > 0) {            // 有出现过
//             res.push(num2);         // 推入res数组
//             map[num2]--;            // 匹配掉一个，就减一个
//         }
//     }
//     return res;
};
