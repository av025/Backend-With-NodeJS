//! Non Primitive In Javascript
// Let explore the Non Primitive Datatypes in Javascript

//* Objects
// Objects are datatype in js which used to more than one store heterogenous data in the form of key-value pair
// example of objects

const username = {
  firstname: "Aayush",
  lastname: "Vyas",
  isLoggedIn: true,
  "user graduation": "Btech in Information Technology",
};
console.log(typeof username); // Output : obect
console.log(username); // Output : {firstname : 'Aayush', lastname: 'Vyas', isLoggedIne : true}

//! Note - Here we used const keyword so we create constant this object address memory but there key-value pair which we can mutate and they are mutable

//? Updating
username.firstname = "Kratik";
username.isLoggedIn = false;
//? Both above was access with dot operator
//* When spaces comes in our key than we used square bracket operator to acces it
console.log(username["user graduation"]);

//? Adding
username.email = "xyz@email.com";

console.log(username); 

// Inbuilts Objects 

//* Date Object : This Object will give current date with some methods to customize our date 
const todayDate = new Date(); 
console.log(todayDate, todayDate.toLocaleDateString()); 

//* Arrays 
// Arrays are the collection of heterogenous element which arrange in adjacent position and in array element are arrange with index order which start with 0 and go upto array length - 1 

// Example of array 
const myArray = [1,2,3,4, true, false, "Aayush", "Vyas"]; 

console.log(typeof myArray); //* Output : object , here array type was object only 
console.log(myArray);  // Output : [1,2,3,4,ture,false,"Aayush","Vyas"] 

//* Here we access the array element with the help of index and square bracket operator 
console.log(myArray[0]);
console.log(myArray[1]);
// Accessing last element : myArray[myArray.length - 1]
console.log(myArray[myArray.length - 1]); 

//* Some glimpse of implcit type conversion 
console.log(1 + "1"); // Output : 11 
console.log(1 + true); // Output : 2 
console.log(-true + 1); // Output 0