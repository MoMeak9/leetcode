/**
 * Created by Yihui_Shi on 2022/2/24 16:08
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [], path = [], used = new Array(nums.length).fill(false);
    backtracking(nums, nums.length);
    return res;

    function backtracking(n, k) {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < k; i++) {
            if (used[i]) continue;

            path.push(n[i]);
            used[i] = true; // 同支

            backtracking(n, k);

            path.pop();
            used[i] = false;
        }
    }
};
