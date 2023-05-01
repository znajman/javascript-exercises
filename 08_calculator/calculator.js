const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, elem) => total += elem, 0);
};

const multiply = function(array) {
  return array.reduce((total, elem) => total *= elem, 1);
};

const power = (a, b) => a ** b;

const factorial = function(a) {
  if (a < 2) return 1;
	return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
