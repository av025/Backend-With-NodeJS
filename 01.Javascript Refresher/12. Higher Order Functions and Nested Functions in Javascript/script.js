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

function createTeaMaker(teaType) {
  function tea(teaType) {
    return `Making ${teaType}`;
  }

  return tea(teaType);
}

const teaMaker = createTeaMaker("green tea"); 
console.log(teaMaker);