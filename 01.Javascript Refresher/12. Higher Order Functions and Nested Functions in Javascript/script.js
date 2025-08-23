//! Higher Order Functions and Nested Functions in Javascript

/**
 * Challenge First : Write a function named `processTeaOrder` that takes another function `makeTea` as a parameter and calls it with the argument `earl grey`  return the result of calling `makeTea`
 */

function processTeaOrder(callback) {
  return callback("earl grey");
}

function makeATea(teaType) {
  return `${teaType}`;
}

const tea = processTeaOrder(makeATea);
console.log(tea);

/**
 * Challenge Second : Write a function named `createTeaMaker` that returns another function. The returned should take one parameter, "teaType", and return message like "Making green tea".
 * Store and returned function in a variable named 'teaMaker' and call it with `green tea`
 */

function createTeaMaker(name) {
  return function tea(teaType) {
    return ` ${name} making ${teaType}`;
  };
}

const teaMaker = createTeaMaker("Aayush");
const result = teaMaker("green tea");
console.log(result);
