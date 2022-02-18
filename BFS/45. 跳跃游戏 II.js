/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
var jump1 = function(nums) {
    let curIndex = 0 // 当前走的最远位置
    let nextIndex = 0 // 接下来可以走到的最远位置
    let steps = 0 // 步数
    for(let i = 0; i < nums.length - 1; i++) {
        nextIndex = Math.max(nums[i] + i, nextIndex)
        if(i === curIndex) {
            curIndex = nextIndex
            steps++
        }
    }
    return steps
};
