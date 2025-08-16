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

//? Comparision or Relational Operators 
// We use comparision or relational operators to perform relation or comparison of two operands  
//* This comparision operator always return boolean value 

//* Equal to operator's 
// Equal to operators are also two type one was equality and strict equality 
console.log( 5 == "5"); // This was equality operator which check only value not datatype  
console.log(5 === 5); // This was Strict Equality operator which check both value and datatype   

//* Not equal to operator's 
// Not Eqaul to Operator are used to check if given operands are not equal to each other 
console.log(6 != 7); // This not equality operator check only value not datatype 
console.log(6 !== "6") // This was strict not equality operator it check both datatype and value 

//* Greater than and Smaller than Operator 
console.log( 5 > 4); // Here we are using greater than operator 
console.log(4 < 5); // Here we are using smaller than operator  

//* Greater than equal to & Smaller than equal to Operator 
// Greater than equal Operations : In this Operation two condition check first was greater than and equal to 
console.log( 5 >= 5); 
console.log(5 >= 4); 
console.log(5 >= 6); 

// Smaller than equal Operations : In this Operation two condition check first smaller than and equal to 
console.log( 5 <= 4); 
console.log( 5 <= 5); 
console.log(4 <= 5); 

// Logical Operations 
// There was logical operations also which help to create logical statement and expression in our program 
// There are  Three type of Logical Operators 

//* AND Logical Operator
// In AND Logical Operator All the condition of Operands should be true than only it return true otherwise it return false as output.  
// Let understand AND Logical Operator with Example : 
console.log(true && false);  // Output : false 
console.log(false && true); // Output : false 
console.log(true && true);  // Output : true 
console.log(false && false); // Output : false 

//* OR Logical Operator 
// In OR Logical Operator Only one operand should be true among all operands than it returns true if all operands was false than it return false as output. 
// Let understand OR Operator with Example : 
console.log(true || false); // Output : true 
console.log(false || true); // Output : true 
console.log(false || false); // Output : false 
console.log(true || true); // Output : true 

//* NOT Logical Operator 
// NOT Logical Operator just reverse the boolean value of our operand just viceversa. 
console.log(!true); 
console.log(!false);  

// Operator Precedance 
// In programming operators take the priority as compare to other which was called as Operator Precedance only 
// In Mathematics We have BODMAS from which we solve our mathematical expression or equation so in programming also work similarly

// Let see example of Operator Precedance 
let score = 2 * 3 + 3 - 2 + (4 * 4); 
console.log(score); 



