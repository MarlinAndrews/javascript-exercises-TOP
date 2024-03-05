const repeatString = function(string, num) {
    let result ='';
    if (num >= 0){
        for (repeat = 1; repeat <= num; repeat++) {
        result += string;
        }
    return result;
    }
    else {
        return result = "ERROR";
    }
    }

// Do not edit below this line
module.exports = repeatString;
