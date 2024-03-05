const sumAll = function(startNumber, endNumber) {
    

    // check for non-number parameters

    // Check for negative numbers
    if (startNumber < 0 || endNumber < 0) {
        return 'ERROR';   
    } 
    

    //determine smallNumber and largeNumber
    const smallNumber = Math.min(startNumber, endNumber);
    const largeNumber = Math.max(startNumber, endNumber);

    //calculate the sum
    let sum = 0;
    for ( let i = smallNumber; i <= largeNumber; i++) {
        sum +=i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
