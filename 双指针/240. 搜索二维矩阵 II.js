/**
 * @description 抓住已排序的特点，从左下角开始，向上一定减少，向右一定增大，而且向上的一定比自己小，且小于右侧
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let col = 0
    let row = matrix.length-1
    while(col<matrix[0].length&&row>=0){
        if(target>matrix[row][col]){
            col++
        }else if(target<matrix[row][col]){
            row--
        }else{
            return true
        }
    }
    return false
};
