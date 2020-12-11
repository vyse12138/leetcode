const romanToInt = (s) => {
    //replace some substrings with char
    s = s.replace('IV', 'a')
    .replace('IX', 'b')
    .replace('XL', 'c')
    .replace('XC', 'd')
    .replace('CD', 'e')
    .replace('CM', 'f');
    
    const toInt = (roman) => {
        switch (roman) {
            case 'I' : return 1;
            case 'V' : return 5;
            case 'X' : return 10;
            case 'L' : return 50;
            case 'C' : return 100;
            case 'D' : return 500;
            case 'M' : return 1000;
            case 'a' : return 4;
            case 'b' : return 9;
            case 'c' : return 40;
            case 'd' : return 90;
            case 'e' : return 400;
            case 'f' : return 900;
            default : return 0;
        }
    }
    //iterate each char in string
    let result = 0;
    for (let i=0; i<s.length; i++){
        result += toInt(s.charAt(i));
    }
    return result;
};