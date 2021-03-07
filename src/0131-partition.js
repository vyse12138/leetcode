/**
 * @param {string} s
 * @return {string[][]}
 */


var partition = function (s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i]);
    for (let j = i-1; j > 0; j--) {
      let reverse = s.slice(j, i+1).toString().split('').reverse().join('');
      if (reverse == s.slice(j, i+1)) {
        result.push(s.slice(j, i+1));
      }
      else {
        break;
      }
      
    }
    
  }
  return result;
};
