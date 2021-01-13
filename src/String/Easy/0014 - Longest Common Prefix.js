/**
 * @param {string[]} strs
 * @return {string}
 */

/*----- solution 1 -----
Time complexity is O(nm) where m is the length of the first str.
Space complexity is O(1)
*/
const longestCommonPrefix = (strs) => {
    //if strs is empty or the first string in strs is empty, 
    //return empty string
    if (strs.length === 0 || strs[0].length ===0 ){
        return '';
    }
    let prefix = '', char = '';
    //iterate each char in the first string 
    for (let i=0; i<strs[0].length; i++){
        char = strs[0].charAt(i)
        //iterate each string strs after the first string
        for (let j=1; j<strs.length; j++){
            //if the prefix is not the same or empty string encountered,
            //return current prefix
            if (strs[j].length === 0  || char !== strs[j].charAt(i)) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};