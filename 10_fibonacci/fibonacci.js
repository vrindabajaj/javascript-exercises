const fibonacci = function(sequence) {
    let count;
    
    if (typeof sequence !== 'number') {
        count = parseInt(sequence);
    } else {
        count = sequence;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let prev = 1;
    let next = 1;
    for (let i = 2; i < count; i++){
        let calculated = next + prev;
        prev = next;
        next = calculated;
    }
    return next;

};

// Do not edit below this line
module.exports = fibonacci;
