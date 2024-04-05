const sumAll = function(min, max) {
    if (min < 0 || max < 0 || typeof min != "number" || typeof max != "number"){
        return "ERROR";
    }
    
    let twoNumbers = [min, max];
    twoNumbers.sort(function(a, b){return a-b});



    let total = 0;
    for (let i = twoNumbers[0]; i <= twoNumbers[1]; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
