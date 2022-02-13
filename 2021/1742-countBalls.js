/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let box = new Array(50).fill(0);
  for (let i = lowLimit; i <= highLimit; i++) {
    let array = i.toString().split('');
    let temp = array.reduce((a, b) => { return (a - 0) + (b - 0) });
    box[temp]++;
  }
  return Math.max(...box)
};