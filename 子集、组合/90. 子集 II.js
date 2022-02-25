/**
 * @description 输入number[] 可能出现重复元素
 * 考虑数组 [1,2,2][1,2,2]，选择前两个数，或者第一、三个数，都会得到相同的子集。
 *
 * 也就是说，对于当前选择的数 x，若前面有与其相同的数 y，且没有选择 y，此时包含 x 的子集，必然会出现在包含 y 的所有子集中。
 *
 * 我们可以通过判断这种情况，来避免生成重复的子集。代码实现时，可以先将数组排序；迭代时，若发现没有选择上一个数，且当前数字与上一个数相同，则可以跳过当前生成的子集。
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let t = [], ans = [];
    const n = nums.length;
    for (let mask = 0; mask < (1 << n); ++mask) {
        t = [];
        let flag = true;
        for (let i = 0; i < n; ++i) {
            if ((mask & (1 << i)) != 0) {
                if (i > 0 && (mask >> (i - 1) & 1) == 0 && nums[i] == nums[i - 1]) {
                    flag = false;
                    break;
                }
                t.push(nums[i]);
            }
        }
        if (flag) {
            ans.push(t.slice());
        }
    }
    return ans;
};
