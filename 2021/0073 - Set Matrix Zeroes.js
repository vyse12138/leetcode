/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*----- solution 1 -----
Iterate the array, if element at matrix[col][row] is zero,
we set the first element at columu 'col' and at row 'row' to zero.
When the iterate is finished, we go back and set zeroes to the array.
Since the very first element matrix[0][0] is shared by both row and col,
some restriction is added.
Time complexity is O(n^2)
Space complexity is O(1)
*/
var setZeroes = function(matrix) {
    const size = matrix.length * matrix[0].length;
    let row = 0, col = 0, isRowZero = false, isColZero = false;
    for (let i = 0; i < size; i++){
        if (matrix[0][row] === 0 && col === 0) {
            isRowZero = true;
        }
        if (matrix[col][0] === 0 && row === 0 ) {
            isColZero = true;
        }
 
        if (matrix[col][row] === 0){
            matrix[col][0] = 0;
            matrix[0][row] = 0;
        }
        row++;
        if (row === matrix[0].length) {
            row = 0;
            col++;
        }
    }
    for (let i = 1; i < matrix[0].length; i++){
        if (matrix[0][i] === 0){
            for (let j = 0; j < matrix.length; j++){
                matrix[j][i] = 0;
            }
        }
    }
    for (let i = 1; i < matrix.length; i++){
        if (matrix[i][0] === 0){
            for (let j = 0; j < matrix[0].length; j++){
                matrix[i][j] = 0;
            }
        }
    }
    if (matrix[0][0] === 0){
        if (isRowZero){
            for (let i = 0; i < matrix[0].length; i++){
                matrix[0][i] = 0;
            }
        }
        if (isColZero){
            for (let i = 0; i < matrix.length; i++){
                matrix[i][0] = 0;
            }
        }
    }
    return matrix;
};