//! Defeat Five Loop Challenges in Javascript 

/** 
 * First Challenge : Write a while loop that counts down from 5 to 1 and stored the numbers in array named in `countdown
 */

let number = 5; 
const countdown = []; 

while(number > 0) {
    countdown.push(number);
    number--; 
}; 

console.log(countdown); 

/** 
 * Second Challenge : Write a do while loop that prompts a user to enter their favorite tea type until they enter "Stop"   
 * Store each type in an array named "teaCollection"
 */

// const teaCollection = [];

// let userPrompt = null;
 
// do {
//     userPrompt = prompt("Enter the favorite tea type !!!"); 

//    if(userPrompt !== "stop") {
//     teaCollection.push(userPrompt)
//    }
// }while(userPrompt !== "stop")

// console.log(teaCollection); 

/** 
 * Third Challenge : Write a do while loop that adds number from 1 to 3 and stores the result in a variable named 'total'  
 */

let numberOne = 1; 
let sumOne = 0; 
do {
    sumOne = sumOne + numberOne; 
    numberOne++;
}while(numberOne <= 3); 

console.log(sumOne);

/** 
 * Fourth Challenge : Write a for loop that multiples each element in the array [2,4,6] by 2 and stores the results in a new array named 'multipliedNumbers' 
 */

const givenArray = [2,4,6]; 

const multipleNumbers = [];

for(let i =0; i <givenArray.length; i++) {
   let doubleElement = 2 * givenArray[i]; 
   multipleNumbers.push(doubleElement);
}; 

console.log(multipleNumbers); 


/** 
 * Challenge Five : Write a for loop that list all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named 'cityList'
 */

let cities = ["Paris", "New York", "Tokyo", "London"]; 
let cityList = [];

for(let i = 0; i < cities.length; i++) {
   cityList.push(cities[i]);
}; 

console.log(cityList);