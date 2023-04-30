const repeatString = function(string, timesToRepeat) {
    let returnString = '';
    if (timesToRepeat < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < timesToRepeat; i++) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
