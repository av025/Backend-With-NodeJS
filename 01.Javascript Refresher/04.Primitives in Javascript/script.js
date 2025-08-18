//! Primitives in Javascript 
// In Porgramming language data are categorized into two types 
// 1st. Primitive Datatype 
// 2nd. Non Primitive Datatype 

//* Primitive Datatype 
// Primitive Datatypes are those data types which are inbuilt and fundamental data in our program to store
// This Datatypes are simple data like number, string, boolean etc. 

//* Explore the Primitive Datatypes 
// Majoraly in Javascript we have 7 primitive datatype 

//?  1st. Number 
//  Number datatypes are used to store number of any type integer, decimal, positive, negative 
// Example of Number Datatype 
let balance = 120;  //* Here we assign the number datatype 120 to balance variable 
let anotherBalance = new Number(500) 
//* In this variable anotherBalance we are assigning the number Datatype only but with different approach or method by new keyword which call the constructor function and create instance of Number Object 

//? We check the type of any data or variable with the help of typeof method 
console.log(typeof(balance), balance); // Output : number 120 
console.log(typeof(anotherBalance), anotherBalance);  // Output : object [Number : 20]

//? 2nd. String
//  The collection of characters are called the strings with the help of the string we can stored data in alphabets 
// In javascript we can create string through three methods 
//* 1st. single qoute 
let mySingleQouteStr = 'Aayush Vyas';
console.log(typeof mySingleQouteStr, mySingleQouteStr); 

//* 2nd. Double qoute 
let myDoubleQouteStr = "Kratik Vyas"; 
console.log(typeof myDoubleQouteStr, myDoubleQouteStr); 

// There was the method in string which was called string concatenation in which we can combine or join more than one strings 
//* We can perform string concatenation with the help of + operator 
console.log("Hello, " + "My Name is ", "Aayush");  // Output : Hello My Name is Aayush 

//* There was third method also to do concatenate which was more simpler and clean way which was template literals or string template which help to add dynamicaly data into strings. 
// String literals 
// We create string literals with the help of back ticks 
console.log(`hello my name is ${mySingleQouteStr}`); 
//* In this string template or template string we add variable with the help of string interpolation by dollar sign ${}. 

//? 3rd. Boolean 
// Boolean Datatype are those datatype which help to create logic in our program and this boolean datatype have only two values true and false 
// Example of Boolean Type 
let booleanValueFirst = true;  //* Here we assign the boolean value to booleanValueFirst variable 
let booleanValueSecond = new Boolean(false); 
//* Here we again assign the bolean value to variable but with constructor method 

console.log(typeof(booleanValueFirst), booleanValueFirst); // Output : boolean true 
console.log(typeof(booleanValueSecond), booleanValueSecond); // Output : object [Boolean : false]
//? 4th. undefined 
// Undefined are special type in which we can not defined the value of variable for a particular duration. 
// Let understand undefined datatype with the help of example 
let myName;  
console.log(typeof myName, myName); 
// Output : undefined , undefined  
//? 5th. null 
// If we wan't to assign value nothing than we used null datatype null means nothing or empty 
let thisVariableHaveAnyValue = null; 
console.log(typeof(thisVariableHaveAnyValue), thisVariableHaveAnyValue);  
//* Output : object, null 
//! Here in this null type was exception which was "object" 

//?  6th. BigInt
// BigInt was new datatype which introduce in ES20 It help to store bigger range of number data as compare to Number Datatype 
//! Here Note a point that whenever we perform any operation on BigInt Datatype than other operand should be BigInt otherwise it give error to us...  

//* There was two ways to create BigInt which was in last just add n and use BigInt() function 
let bigIntNumb = 457899475255525554n; 
console.log(typeof bigIntNumb, bigIntNumb); // Output : bigint 457899475255525554n 

let bigIntNumbOne = BigInt(124474747446466); 
console.log(typeof bigIntNumbOne, bigIntNumbOne); // Output : bigint 124474747446466n 

//? 7th. Symbol
// This Symbol datatype used to give any value unquiely and also we used this symbol as key of value in objects; 
// let understand Symbol with example : 

const mySymbolOne = Symbol(); 
const mySymbolSecond = Symbol("Second"); 

console.log(typeof mySymbolOne, mySymbolOne); // Output : symbol Symbol()
console.log(typeof mySymbolSecond, mySymbolSecond); // Output : symbol Symbol(Second) 

//! Whenever we used Symbol datatype it used for uniqueness only. 

//* Non Primitive Datatype 
// This data types are derived from primitive inbuilt datatypes only it used to store more complex data as compare to primitive 
// This Non Primitive Datatype are also called as User defined data structure  
// Example of Non-primitive datatype are Objects and further object categorized into Array, functions and more type of object 
