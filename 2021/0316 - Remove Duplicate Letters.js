/**
 * @param {string} s
 * @return {string}
 */

/*----- solution 1 -----
Set up a map to count the occurance of each letters in the first iteration.
In the second iteration, subtract 1 from the map for the encountered letter,
then, if the result stack doesn't contain the letter,
keep poping out the last letter in the stack until the last letter no longer exsit in the map,
or has a greater lexicographical order then the current letter.
Push it into the stack at that position.
Return the stack as result.
Time complexity is O(n^2)
Space complexity is O(n)
*/
var removeDuplicateLetters = function(s) {
  let stack = [], map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) { 
      map.set(s[i],map.get(s[i]) + 1);
    }
    else {
      map.set(s[i],1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    map.set(s[i],map.get(s[i]) - 1);
    if (!stack.includes(s[i])) {
      while (s[i] < stack[stack.length-1] && map.get(stack[stack.length-1]) > 0) {
        stack.pop();
      }
      stack.push(s[i]);
    }
  }
  return stack.join('');
};