/*const removeFromArray = function() {
    for (let i = 1; i < arguments.length; i++) {
        let index = arguments[0].findIndex(element => element === arguments[i]);
        if (index >= 0) {
            arguments[0].splice(index, 1);
        }
    }
    
    return arguments[0];
};*/

const removeFromArray = function(array, ...args) {
    args.forEach((item) => {

        let index = array.findIndex(element => element === item);
        if (index >= 0) {
            array.splice(index, 1);
        }
    });
    
    return arguments[0];
};


// Do not edit below this line
module.exports = removeFromArray;
