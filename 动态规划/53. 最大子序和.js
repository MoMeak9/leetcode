/**
 * @description 贪心
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let maxSum = nums[0], preSum = 0
    for (let value of nums){
        if(preSum < 0){
            preSum = value
        }else{
            preSum += value
        }
        maxSum = Math.max(preSum,maxSum)
    }
    return maxSum
};

var maxSubArray2 = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
