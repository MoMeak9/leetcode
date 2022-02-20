/**
 * Created by Yihui_Shi on 2022/2/20 16:47
 */
var moveZeroes = function (nums) {
    let j = 0;
    // j 实际上统计的就是非0个数
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {//遇到非0元素，让nums[j] = nums[i]，然后j++
            nums[j] = nums[i];
            j++;
        }
    }
    for (let i = j; i < nums.length; i++) {//剩下的元素全是0
        nums[i] = 0;
    }
    return nums;
};
