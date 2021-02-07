/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  let t1 = Math.max(a, b, c);
  let t3 = Math.min(a, b, c);
  let t2, result = 0;
  if (a === t1) {
    t2 = Math.max(b, c)
  }
  if (b === t1) {
    t2 = Math.max(a, c)
  }
  if (c === t1) {
    t2 = Math.max(b, a)
  }
  while (t2 !== 0) {

    t1--;
    t2--;
    result++;


    if (t3 > t2) {
      [t2, t3] = [t3, t2]
    }
    if (t2 > t1) {
      [t2, t1] = [t1, t2]
    }

  }
  return result;
};