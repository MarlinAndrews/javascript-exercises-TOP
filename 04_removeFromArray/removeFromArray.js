const removeFromArray = function(array, ...argsToRemove) {

    const newArray = [];
    array.forEach((item) => {
        if (!argsToRemove.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;   
   

};


// Do not edit below this line
module.exports = removeFromArray;
