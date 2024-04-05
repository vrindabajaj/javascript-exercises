const removeFromArray = function(array, ...valuesToRemove) {
    let newArray = [];
    array.forEach((value) =>{
        if(!valuesToRemove.includes(value)){
            newArray.push(value);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
