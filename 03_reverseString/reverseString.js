const reverseString = function(string) {
    reversedString = [];
    for (let i = 0; i < string.length; i++){
        reversedString.push(string.charAt(string.length-(i+1)));
    }
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
