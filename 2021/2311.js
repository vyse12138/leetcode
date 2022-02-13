/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let a = s.split("0");
  let b = a.filter(el => {
    return el.length > 0;
  }).length;
  return b === 1;
};
