/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
* 先将数组从小到大排序，便于微调 sum 的大小。
从左到右遍历，先固定一个数，剩下的部分，用头尾双指针扫描
如果 sum 大于目标值，就右指针左移，使 sum 变小，否则左指针右移，sum 变大。
再看 abs(sum - target) 是否比之前更小了，如果是，将当前 sum 更新给 res
遍历结束，就有了最接近目标值的 sum
*/
const threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[nums.length - 1];

    for (let i = 0; i < nums.length - 2; i++) {
        const n1 = nums[i]; // 每次遍历的定点
        let l = i + 1; // 左右指针从右侧逐个开始
        let r = nums.length - 1;
        while (l < r) {
            const n2 = nums[l];
            const n3 = nums[r];
            const sum = n1 + n2 + n3;
            // 类似二分法逐个逼近
            if (sum > target) {
                r--;
            } else {
                l++;
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }
        }
    }
    return res;
};
