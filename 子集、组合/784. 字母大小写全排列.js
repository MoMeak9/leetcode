/**
 * Created by Yihui_Shi on 2022/2/24 16:08
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const ans = [];

    function dfs(i, tmp) {
        if (i === s.length) return ans.push(tmp);
        if (isNaN(s[i])) {
            // 如果是字符只有两种情况，要么大写，要么小写
            dfs(i + 1, tmp + s[i].toLowerCase());
            dfs(i + 1, tmp + s[i].toUpperCase());
        } else {
            dfs(i + 1, tmp + s[i]);
        }
    }

    dfs(0, '');
    return ans;
};
