/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
    let dp = Array(nums.length).fill(1);
    let result = 1;

    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {//当nums[i] > nums[j]，则构成一个上升对
                dp[i] = Math.max(dp[i], dp[j]+1);//更新dp[i]
            }
        }
        result = Math.max(result, dp[i]);//更新结果
    }

    return result;
};
