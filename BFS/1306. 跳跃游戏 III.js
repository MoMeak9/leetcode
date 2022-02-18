// DFS + BFS 均可解决此问题
/**
 * @description BFS 基于上面的第一种思路，我们用到了一个 visited 集合来判断是否已经访问过，从而规避循环。同时我们用一个 queue 来保存所有记录节点，方便基于延伸。具体代码如下：
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
    // const visited = new Set();
    // const queue = [start];
    // for (let len = 0, max = arr.length; len < queue.length; ++len) {
    //     const idx = queue[len];
    //     if (visited.has(idx)) continue;
    //     if (arr[idx] === 0) return true;
    //     visited.add(idx);
    //     idx + arr[idx] < max && queue.push(idx + arr[idx]);
    //     idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
    // }
    // return false;
    // 用-1表示访问过了，替代多余的Set
    const queue = [start];
    for (let len = 0, max = arr.length; len < queue.length; ++len) {
        const idx = queue[len];
        if (arr[idx] === -1) continue;
        if (arr[idx] === 0) return true;
        idx + arr[idx] < max && queue.push(idx + arr[idx]); // 同 if 语句
        idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
        arr[idx] = -1;
    }
    return false;
};

// DFS
const canReach2 = (arr, start) => {
    const val = arr[start];
    if (val === 0) return true;
    if (val === -1) return false;
    arr[start] = -1;
    return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};
