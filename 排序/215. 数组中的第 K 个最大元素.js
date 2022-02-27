/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1]
};
