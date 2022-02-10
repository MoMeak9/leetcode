/**
 * @description 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 可以简单滴使用两数之差和哈希表记录和查找，只要求差并找到与差相同的哈希表内的数值即可

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0, len = nums.length; i < len; i++){
        if(map.has(target - nums[i])){ // 求差并找到与差相同的哈希表内的数值即可
            return [map.get(target - nums[i]), i];
        }else{
            map.set(nums[i], i);
        }
    }
    return [];
};
