/**
 * @description DFS 回溯搜索
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const path = [], res = [];
    candidates.sort();
    const dfs = (j, sum) => {
        if (sum > target) return;
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = j; i < candidates.length; i++) {
            const n = candidates[i];
            if (n > target - sum) continue;
            path.push(n);
            sum += n;
            dfs(i, sum);
            path.pop();
            sum -= n;
        }
    }
    dfs(0, 0);
    return res;
};
