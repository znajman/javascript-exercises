const reverseString = function(stringToReverse) {
    let stringReversed = '';
    for (let i = stringToReverse.length; i > 0; i--) {
        stringReversed += stringToReverse.substring(i - 1, i);
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
