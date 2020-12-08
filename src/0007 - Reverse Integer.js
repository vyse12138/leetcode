var reverse = function(x) {

    //using array.reverse to reverse the number
    //convert to array then back to number
    let result = Math.abs(x).toString().split('').reverse().join('')*Math.sign(x);
    //check if overflow
    return (result < -(2**31) || result >= 2**31) ? 0 : result;
    
};