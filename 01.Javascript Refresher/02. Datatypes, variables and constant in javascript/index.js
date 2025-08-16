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



