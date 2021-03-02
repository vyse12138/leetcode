/**
 * @param {number[][]} matrix
 */

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/*----- solution 1 -----
Time complexity is O(mn) for creation
Time complexity is O(1) for query
*/
var NumMatrix = function (matrix) {
  if (matrix == 0) {
    this.empty = true;
  }
  else {
    let x = matrix[0].length, y = matrix.length;
    this.preSumArray = new Array(y + 1).fill(0).map(() => new Array(x + 1).fill(0));
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        this.preSumArray[i + 1][j + 1] = matrix[i][j] +
          this.preSumArray[i][j + 1] +
          this.preSumArray[i + 1][j] -
          this.preSumArray[i][j];
      }
    }
  }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  if (this.empty) {
    return;
  }
  return this.preSumArray[row1][col1] +
    this.preSumArray[row2 + 1][col2 + 1] -
    this.preSumArray[row2 + 1][col1] -
    this.preSumArray[row1][col2 + 1]
};