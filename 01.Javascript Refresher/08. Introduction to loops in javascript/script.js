//! Introduction to Loops in Javascript 
// We used Loops to do repeatative task for certain duration or time and follow DRY Principle which stands for "Don't Repeat Yourself"

//* In JS Language we have different types of loop 
// 1st. while loop 
// 2nd. for loop  
//   -- type of for loop  
//     a. for of loop 
//     b. for in loop 
//     c. forEach() loop 
// 3rd. do while loop 

//? Example of while loop in javascript 

/** 
 * Write While loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable sum 
 */ 

let number = 1; 
let sum = 0; 

while(number <= 5) {
    sum = sum + number; 
    number++; 
}; 

console.log(sum);