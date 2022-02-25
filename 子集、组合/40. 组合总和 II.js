/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [], path = [];
    let visited = new Array(candidates.length).fill(false);
    /**
     *
     * @param {*} index 当前开始的索引
     * @param {*} sum 当前路径中所有元素的和
     */
    const backtrack = (index, sum) => {
        // 和已超目标值  不符合退出
        if (sum > target) return;
        // 找到目标和 将路径加入结果集中
        if (sum === target) return res.push(path.slice());
        for (let i = index; i < candidates.length; i++) {
            // 当前元素跟上一个元素相同，上一个元素没有选那当前元素也不能选
            if (candidates[i - 1] === candidates[i] && !visited[i - 1]) continue;
            if (!visited[i]) {
                visited[i] = true;
                // 选择 candidates[i]
                path.push(candidates[i]);
                sum += candidates[i];
                // 递归遍历下一层回溯树 注意这里是i+1 因为同一个元素不能重复使用
                backtrack(i + 1, sum);
                // 撤销选择 candidates[i]
                sum -= candidates[i];
                path.pop();
                visited[i] = false;
            }
        }
    };
    backtrack(0, 0);
    return res;
};
