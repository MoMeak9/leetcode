/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};

/**
 * @description 从最大数开始排序
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function (nums1, m, nums2, n) {
    let i = m + n - 1;
    let j = m - 1;
    let k = n - 1;
    while (k >= 0) {
        if (nums1[j] > nums2[k]) {
            nums1[i] = nums1[j];
            j--;
        } else {
            nums1[i] = nums2[k];
            k--;
        }
        i--;
    }
};
