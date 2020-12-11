const isPalindrome = (x) => {
    if (x >= 0){
        //reverse the input
        let reverse = x.toString().split('').reverse().join('');
        //check if reverse is the same as original input
        return (reverse == x) ? true : false;
    }
    return false;
};