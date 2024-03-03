const reverseString = function(string) {
    let result ='';
    //convert string into an array of characters
    const stringCharacters = string.split("");
    //reverse array StringCharacters
    const reversedCharacters = stringCharacters.reverse();
    for (let printChar = 0; printChar < reversedCharacters.length; printChar++){
        result += stringCharacters[printChar];
    }
    return result;
    
};

// Do not edit below this line
module.exports = reverseString;
