/**
 * @param {string} s
 * @return {number}
 */

/*----- solution 1 -----
Sliding window with a set to store occured character.
1. check if character at right pointer has occured,if so, 
keep moving forward left pointer until character at right pointer is no longer occured.
2. proceed right pointer in each iteration.
3. compare the current substring length with the longest substring.
Time complexity is O(n^2) 
Space complexity is O(n)
*/

const lengthOfLongestSubstring = (s) => {

    // set used to stored occured char
    const hasOccuredSet = new Set();
    let size = s.length,
        leftPointer = 0,
        rightPointer = 0,
        result = 0;

    while (rightPointer < size) {
        // if the char at right pointer has occured, move left pointer by one and 
        // delete the char at left pointer until no char is the same as the char at right pointer
        while (hasOccuredSet.has(s[rightPointer])) {
            hasOccuredSet.delete(s[leftPointer])
            leftPointer++;
        }
        // add the char at the right pointer to the hasOccuredSet and 
        // increse right pointer by 1
        hasOccuredSet.add(s[rightPointer]);
        rightPointer++;
        // compare and stoer the largest length to result
        result = Math.max(result, rightPointer - leftPointer);

    }
    return result;
};