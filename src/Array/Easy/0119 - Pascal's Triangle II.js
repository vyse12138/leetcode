/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/*----- solution 1 -----
Time complexity is O(n^2)
Space complexity is O(n)
*/
var getRow = function(rowIndex) {
    let result = [];
    for (let i = 0; i < rowIndex + 1; i++){
        let row = new Array(i+1).fill(1);
        if (i > 1){
            for (j = 1; j < row.length-1; j++){
                row[j] = result[i-1][j-1] + result[i-1][j];
            }
        }
        result.push(row)
    }
    return result[rowIndex];
};