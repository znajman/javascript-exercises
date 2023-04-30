const sumAll = function(startNumber, endNumber) {
    if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) return 'ERROR';
    if (startNumber < 0 || endNumber < 0) return 'ERROR';
    n = Math.abs(endNumber - startNumber) + 1;
    return (startNumber + endNumber) * n / 2;
};

// Do not edit below this line
module.exports = sumAll;
