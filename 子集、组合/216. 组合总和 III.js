/**
 * Created by Yihui_Shi on 2022/2/24 16:08
 */
/**
 * @description 通过组合枚举的方式，在9个数重选择k个数，使其和为n
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const temp = []; // dfs路径
    const res = [];
    const dfs = (cur, n, k, sum) => {
        if (temp.length + (n - cur + 1) < k || temp.length > k) {
            return;
        }
        // reduce
        /*
        * callback
执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
accumulator
累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

currentValue
数组中正在处理的元素。
index 可选
数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
array可选
调用reduce()的数组
initialValue可选
作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
* */
        if (temp.length === k && temp.reduce((previous, value) => previous + value, 0) === sum) {
            res.push(temp.slice());
            return;
        }
        // cur 就是123456789...
        temp.push(cur);
        dfs(cur + 1, n, k, sum);
        temp.pop();
        dfs(cur + 1, n, k, sum);
    }

    dfs(1, 9, k, n);
    return res;
};
