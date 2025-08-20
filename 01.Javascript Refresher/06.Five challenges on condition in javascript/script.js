//! Five Challenges on Condition in Javascript

//* Conditions Statement
// Condition statement are used to create logic and conditional based code or program in our programing language.

//* Let's do challenges to understand conditional statement

let numOne = 8;
let numTwo = 6;

//? Here we are writing if-else statement for conditional based code
if (numOne > numTwo) {
  console.log(`${numOne} was greater than ${numTwo}`);
} else {
  console.log(`${numTwo} was greater than ${numOne}`);
}

//* Check if one string is equal to another string

let strOne = "Aayush";
let strTwo = "Kratik";
let strThree = "Aayush";

if (strOne === strThree) {
  console.log(`strOne is equal to strThree`);
} else if (strOne === strTwo) {
  console.log(`strOne is equal to strTwo`);
} else {
  console.log(`strOne is not equal to strThree `);
}

//* Checking if variable is number or not

let variableOne = "Aayush";

variableOne = 122;

if (typeof variableOne === "number") {
  console.log(`Variable consist of number type data.`);
} else {
  console.log(`Variable doesn't consist of number type data.`);
}

//* Checking if the value was true or false

let booleanValue = true;
booleanValue = false;

if (booleanValue) {
  console.log(`booleanValue contain the ${booleanValue} value.`);
} else {
  console.log(`booleanValue contain the ${booleanValue} value`);
}

//* Checking if an array is empty or not.

let myArr = [];

if (myArr.length === 0) {
  console.log(`Array was empty.`);
} else {
  console.log(`Array was not empty.`);
}
