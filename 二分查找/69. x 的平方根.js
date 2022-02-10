/**
 * @description 二分法求解，时间复杂度O(logx)，即为二分查找需要的次数。空间复杂度O(1)
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    let left = 0
    let right = x
    while (left <= right) {
        let mid = left + ((right - left) >> 1)//中间位置索引 x>>1 表示除以2并取整，缩小一下遍历的范围
        if (mid * mid <= x) { // 比较，大的缩小右侧，小了放大左侧，达到夹逼的效果
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};


/**
 * @description 牛顿迭代公式r = ( r + x / r ) / 2，时间复杂度O(logx)，即为二分查找需要的次数。空间复杂度O(1)
 * @param {number} x
 * @return {number}
 */
const mySqrt2 = function(x) {
    let r = x

    while (r ** 2 > x) {
        r = ~~((r + x / r) / 2) //取整
    }

    return r
};
