/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  let l1 = word1.length, l2 = word2.length,
    i1 = 0, i2 = 0, merge = '';
  while (i1 < l1 || i2 < l2) {
    let len = 0;
    while (word1[i1 + len] && word2[i2 + len] && word1[i1 + len] === word2[i2 + len]) {
      len++;
    }
    let w1 = word1[i1 + len] || '';
    let w2 = word2[i2 + len] || '';
    if (w1 > w2) {
      merge += word1[i1++];
    }
    else {
      merge += word2[i2++];
    }
  }
  return merge;
};