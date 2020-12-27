/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*-----solution-----
Outputing by layer, 
when all elements of an outer layer is iterated,
go into a inside layer.
*/
var spiralOrder = function(matrix) {
    let 
        left = 0,
        right = matrix[0].length -1,
        top = 0,
        bottom = matrix.length -1,
        result = [];
    while (left <= right  && top <= bottom){
        for (let i = left; i <= right; i++){
            result.push(matrix[top][i]);
        }
        for (let i = top+1; i <= bottom; i++){
            result.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right-1; i > left; i--){
                result.push(matrix[bottom][i]);
            }
            for (let i = bottom; i > top; i--){
                result.push(matrix[i][left]);
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return result;
};