const isPalindrome = (x) => {
    if (x >= 0){
        let reverse = x.toString().split('').reverse().join('');
        return (reverse == x) ? true : false;
    }
    return false;
};