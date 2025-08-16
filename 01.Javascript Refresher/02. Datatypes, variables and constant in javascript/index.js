//! Datatypes, variables and constant in javascript 

// How can we print data in javascript  
//* There was one main object console which help to print and debug our js code 
console.log("Aayush Vyas")  // Here we are using .log method to print our data on console or standard output 

// There was another method which was process which mainly global in nodejs which was also helpful to print anyhthing on standard output 
process.stdout.write("Hello World"); 
process.stdout.write("Hello World"); 
// Here the problem wuth process.stdout.write() that it was not print anything from new-line so it ignore the new-line instead in console.log method every statement or expression print from new line.  

//* Let see more method of console object 
// table method 
console.table(["indore", "bhopal", "gwalior", "jabalpur"]); 
// It prints data in Table format of this array 
console.table({name:"Aayush Vyas", email: "aayush25vyas@gmail.com", age:26}); 
//? This table was print in column format 

// warn method 
console.warn({name: "Aayush Vyas", email:"aayush25vyas@gmail.com"}); 
//* It print our data as warning which we see actual  in browser not in nodejs 
