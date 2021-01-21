/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();
  let sign = 1;
  if (s[0] === '-') {
    sign = -1;
    s = s.substr(1, s.length-1);
  }
};