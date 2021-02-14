/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let a1 = [], a2 = [];
  s = s.split('')
  while (s.length > 0) {
    s.length && a1.push(s.pop());
    s.length && a2.push(s.pop());
  }
  let o1 = 0, o2 = 0;
  for (let char of a1) {
    if (char != '0') {
      o1++;
    }
  }
  for (let char of a2) {
    if (char != '1') {
      o1++;
    }
  }

  for (let char of a1) {
    if (char != '1') {
      o2++;
    }
  }
  for (let char of a2) {
    if (char != '0') {
      o2++;
    }
  }
  return Math.min(o1, o2)
};