/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // 定义左右双指针 js这样写会比较简洁一点
    let [left, right] = [0, numbers.length - 1];
    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            // 太大了，要小一点，则right左移一位
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            // 太小了，要大一点，则left右移一位
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
};
