//! Operators in Javascript 
//* If we want to perform processing on data like addition, subtraction, comparision etc than we used operations in our program so we have different type of operators to perform operations. 

//? Arithmetic Operations 
// If we want to perform mathematical operations on our data which was called operands in programming world than we used arithmetic operations. 
// addition operator "+"
let addition = 25 + 75;
// subtraction operator "-" 
let subtraction = 100 - 75 ;
// multiplication operator "*" 
let multiplication = 20 * 5; 
// division operator "/"
let division = 20 / 10;
// modulus operator "%" 
let modulus = 20 % 2;  
//* This divison "/" and modulus "%" operator are doing the same thing divsion but giving output different division gives qoutient and modulus gives remainder  
let expontentialPower = 2 ** 5;  

console.log(addition); 
console.log(subtraction);
console.log(multiplication); 
console.log(division); 
console.log(modulus); 
console.log(expontentialPower); 

//? Assignment Operation 
// Assignment operations are used to assign operand to variables and this assignment was uniary operator means only one operand needs to perform operation on data. 

// Eqaul assignment operator 
let valueOne = 100;  //* Here we are using equal assignment operator 

// Arithmetic assignment operators 
valueOne += 50;  // addition assignment operator 
console.log(valueOne); 
valueOne -= 100; // subtract assignment operator 
console.log(valueOne); 
valueOne *= 2; // multiplication assignment operator 
console.log(valueOne); 
// Expontential assignment operator 
valueOne **= 2; 
console.log(valueOne) 
valueOne /= 2; // Division assignment operator 
console.log(valueOne); 
valueOne %=2; 
console.log(valueOne);  

//* Increment and decrement Assignmet Operators 

// Increment Operator 
// This Increment operator was that operators which used to increase value by 1 to our operand 
// This Increment operator was of two type one was pre-fix and post-fix 

// Prefix increment operator 
// In this Prefix increment operator the value update first than assign let understand with example 
let one = 0; 
++one;  //* Here we are using Prefix Increment Operator in which value update first than assign 
console.log(one); 
++one; 
console.log(one);  

// Postfix increment operator 
// In this Postfix increment operator value first assign than increment 
console.log(one++); // Output was same previous value 
one++; 
console.log(one) // Output was 4 

// Decrement Operator 
// Similarly like increment we have decrement operator to which decrease value by 1  and it was also of two type pre-fix and postfix 

//* Prefix Decrement Operator 
--one; 
console.log(one); // Output 3 

//* Postfix Decreemnt Operator 
one--; 
console.log(one); // Output 2 




