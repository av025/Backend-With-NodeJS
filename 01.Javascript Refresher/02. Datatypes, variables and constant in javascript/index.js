//! Datatypes, variables and constant in javascript 

// How can we print data in javascript  
//* There was one main object console which help to print and debug our js code 
console.log("Aayush Vyas")  // Here we are using .log method to print our data on console or standard output 

// There was another method which was process which mainly global in nodejs which was also helpful to print anyhthing on standard output 
process.stdout.write("Hello World"); 
process.stdout.write("Hello World"); 
// Here the problem wuth process.stdout.write() that it was not print anything from new-line so it ignore the new-line instead in console.log method every statement or expression print from new line.  

console.log("")
//* Let see more method of console object 
// table method 
console.table(["indore", "bhopal", "gwalior", "jabalpur"]); 
// It prints data in Table format of this array 
console.table({name:"Aayush Vyas", email: "aayush25vyas@gmail.com", age:26}); 
//? This table was print in column format 

// warn method 
console.warn({name: "Aayush Vyas", email:"aayush25vyas@gmail.com"}); 
//* It print our data as warning which we see actual  in browser not in nodejs  

// Datatypes in Javascript  
// Data is the most important aspect of programming because it allows us to store and process information. Programming languages provide different types of data, which are broadly categorized into Data Types. 

// Let see Datatypes in Javascript 
/**
 1. String Datatype   : A collection of characters enclosed in quotes.
 *                        Example: "Hello", 'World'
 * 
 * 2. Number Datatype   : Represents numeric values (integers, decimals, positive, negative).
 *                        Example: 10, -5, 3.14
 * 
 * 3. Boolean Datatype  : Represents logical values used in conditions.
 *                        It can only have two values: true or false.
 *                        Example: let isActive = true;
 * 
 * 4. BigInt Datatype   : A special numeric type that can store very large integers 
 *                        beyond the safe range of Number.
 *                        Example: 123456789012345678901234567890n
 * 
 * 5. Undefined Datatype: A variable declared but not assigned any value has the value 'undefined'.
 *                        Example: let x; // x is undefined
 * 
 * 6. Null Datatype     : Represents intentional absence of any value (empty value).
 *                        Example: let data = null;
 * 
 * 7. Symbol Datatype   : A unique and immutable value, often used as object keys
 *                        to ensure uniqueness.
 *                        Example: let id = Symbol("uniqueId");
 */ 

//* This above are all primitive datatype type  

//* There are non-primitive datatype also which was derived with primitive type which was array, object  

// In object we store different types of data in the form of key-value pair for example 
console.log({first_name: "Aayush", last_name: "vyas"}); 

// Variable in Programming 
//* Variables are empty container or bucket to store data in our program and variable also assign the address and identifier (Name of data) with the help of it we can use to recall data for our use and re-assign the value also to that memory address 

//? In JS there was 3 ways to create variable 

// var keyword 
var score = 102;  //* This called intialization of variable 
console.log(score); 

var firstname;  //* This called decalarization of variable where we don't assign the value just declare variable 
console.log(firstname) 

//*  let re-assign the value to firstname 
firstname = "Aayush"; 
console.log(firstname) 

//* var keyword was older keyword to create variables so there was flaw in it we can do re-declaration also 
var firstname = "Kratik"; 
console.log(firstname)  

//? Nowadays after ES6 Version in which we have two keywords introduced to create variables let see both of them 

// let keyword 
let loggedIn = true; // Create variable with the help of let keyword 
console.log(loggedIn); 

// In let keyword we can re-assign the value 
loggedIn = false; 
console.log(loggedIn); 

// But we can't re-decalre the variables of let keyword it give error to us can't re-declare the variable.  
// let loggedIn = true  

//* See example of creating variables of non-primitive datatypes also 
var myArray = ["a","b", "c", "d"]
console.log(myArray); 
let myObject = {first: 1, second:2, third:3, fourth:4}; 
console.log(myObject);  

//? Similar like let another keyword introduce which was const 

// const keyword 
//* const keyword used to create constant in our program which value don't change through out program let understand with example 
const PI_VALUE = 3.14; 
console.log(PI_VALUE);  

//* Two important thing for const keywords constant variable 
// 1st. We can't just declare our constant variables it give error us... 
// const SOME_THING;  --- It give error to us... 
// 2nd. We can't re-assign value to constant because it was constant throughout the program 
//   PI_VALUE = 3.1444;  --- It give error ti us... 