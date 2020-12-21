// // ---method 1---
// // Convert to integer, then add one, then convert back to array
// // However, due to max integer 2^53-1 has only 16 digits,
// // it can not meet the requirement of input length of 100 digits

// var plusOne = function(digits) {
//     let strDigits = (parseInt(digits.join('')) + 1).toString();
//     return strDigits.padStart(digits.length-strDigits.length + 1, '0').split('');
// };


//---method 2---
var plusOne = function(digits) {
    for (let i = digits.length-1 ; i>-1; i--){
        digits[i]++;
        if (digits[i] !== 10){
            break;
        }
        else{
            digits[i] = 0;
            if ( i === 0){
                digits.unshift(1);
            }
        }
    }
    return digits;
}
