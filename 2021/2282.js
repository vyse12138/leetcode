/**
 * @param {string} s
 * @return {number}
 */
function factorial_recursion(n) {
  if (n < 1) return 0;

  return n + factorial_recursion(n - 1)
}

var countHomogenous = function (s) {
  s = s.split('');
  let temp = '', tempC = 0, result = 0
  while (s.length > 0) {
    if (s[0] === temp) {
      s.shift();
      tempC++;
    }
    else {
      result += factorial_recursion(tempC);
      temp = s.shift();
      tempC = 1;
    }
  }
  result += factorial_recursion(tempC);
  result %= 10 ** 9 + 7
  return result;
};