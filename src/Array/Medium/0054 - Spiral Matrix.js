/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const size = matrix.length * matrix[0].length;
    let 
        x = 0, 
        y = 0, 
        toRight = true,
        toBot = true,
        result = [];

    for(let i = 0; i < size; i++){
        result.push(matrix[x][y]);
        while (x < xLimit && toRight){
            x++;
        }
        
        if (y < yLimit){
            y++;
        }

    }
    return result;
};