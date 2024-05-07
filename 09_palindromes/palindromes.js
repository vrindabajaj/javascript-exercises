const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    let revStr = cleanedString.split('').reverse().join('');
    return cleanedString == revStr;
};

// Do not edit below this line
module.exports = palindromes;
