//! Ten Loops Challenge to Learn Every Kind of Loops in Javascript

/**
 * First Challenge : Write a "for" loop that loop through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai"
 * Store all teas before "chai" in a new array named selectedTeas
 */

const teas = ["green tea", "black tea", "Masala Chai", "chai", "oolong tea"];

const selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }

  selectedTeas.push(teas[i]);
}

console.log(selectedTeas);

/**
 * Second Challenge : Write a for loop that loops through a array ["London", "New York", "Paris", "Berlin"] and skip "Paris"
 * Store the other cities in a new array named `visitedCities`
 */

const cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];

for (let idx = 0; idx < cities.length; idx++) {
  if (cities[idx] === "Paris") {
    continue;
  }

  visitedCities.push(cities[idx]);
}

console.log(visitedCities);

/**
 * Third Challenge : Use a "for-of" loop to iterate through the array `[1,2,3,4,5]` and stop when the 4 is found. Store the numbers before '4' in an array named smallNumbers
 */

const numbersArr = [1, 2, 3, 4, 5];
const smallNumbers = [];

for (let numbers of numbersArr) {
  if (numbers === 4) {
    break;
  }

  smallNumbers.push(numbers);
}

console.log(smallNumbers);

/**
 * Fourth Challenge : Use a for of loop to iterate through the array ["chai", "green tea", "herbal tea", "Black tea"] and skip the "herbal tea"
 * Store the other teas in an array named "preferedTeas"
 */

const teasArr = ["chai", "green tea", "herbal tea", "black tea"];
const preferedTeas = [];

for (let tea of teasArr) {
  if (tea === "herbal tea") {
    continue;
  }

  preferedTeas.push(tea);
}

console.log(preferedTeas);

/**
 * Fifth Challenge : Use a for loop to loop through an object containing a city populations.
 * Stop the loop when the population of "Berlin" is found and store all the previous cities 'populations in a new object named 'cityPopulation'
 *
 *  let citiesPopulation = {
 *       "London" : 8900000,
 *       "New York" : 9400000,
 *       "Paris" :  4000000,
 *       "Berlin" : 5500000
 *   }
 */

const cityPopulations = {};

let citiesPopulation = {
  London: 8900000,
  "New York": 9400000,
  Paris: 4000000,
  Berlin: 5500000,
};

for (let cities in citiesPopulation) {
  if (cities === "Berlin") break;

  cityPopulations[cities] = citiesPopulation[cities]; //* Here we assign value of keys from citiesPopulation to new object city Population
}

console.log(cityPopulations);

/**
 * Sixth Challenge : Use a for-in loop to loop through an object containing city populations
 * Skip any city with a population below 3 million and store the rest in a new object which name was largerCities
 *    let citiesPopulationTwo = {
 *       "London" : 5000000,
 *       "New York" : 9400000,
 *       "Paris" :  4000000,
 *       "Berlin" : 2200000
 *   }
 */

let citiesPopulationTwo = {
  London: 5000000,
  "New York": 9400000,
  Paris: 4000000,
  Berlin: 2200000,
};

const largerCities = {};

for (let city in citiesPopulationTwo) {
  if (citiesPopulationTwo[city] > 3000000) {
    largerCities[city] = citiesPopulationTwo[city];
  }
}

console.log(largerCities);

/**
 * Seventh Challenge : Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]
 * Stop the loop when chai is found, and all previous tea events in an array named `availableTea`
 */

const teasThree = ["earl grey", "green tea", "chai", "oolong tea"];
const availableTea = [];

teasThree.forEach((tea) => {
  if (tea === "chai") {
    // return; //! This return statement was just skip "chai" iteration not stoping function excution 
    return true; //* true returing will also skip that iteration
  }
    availableTea.push(tea);
  
});
//* In forEach loop the iteration was done upto last element of an array 
console.log(availableTea); 

/** 
 * Eight Challenge : Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"] skip "Sydney" and store the other cities in a new array named traveledCities 
 */

const citiesThree = ["Berlin", "Tokyo", "Sydney", "Paris"];
const traveledCities = []; 

citiesThree.forEach((city) => {
    if(city === "Sydney") return; 
    traveledCities.push(city);
});

console.log(traveledCities);

/** 
 * Nineth Challenge : Write a for loop that iterates through array [2,5,7,9] skip the value '7 and multiply the rest by 2. 
 * Store the result in a new array named 'doubledNumbers'
 */

const numberThree = [2,5,7,9];
const doubledNumbers = [];

for(let idx = 0; idx < numberThree.length; idx++) {
    if(numberThree[idx] === 7) continue; 
    let doubled = numberThree[idx] * 2;
   doubledNumbers.push(doubled);
};

console.log(doubledNumbers);

/** 
 * Tenth Challenge : Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] 
 *  -> Stop when the length of current tea name is greater than 10 
 *  -> Stores the tea iterated over in an array named 'shortTeas'
 */ 

const teasAgainArr = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]; 
const shortTeas = [];

for(let tea of teasAgainArr)  {
    if(tea.length > 10) break; 

    shortTeas.push(tea);
}

console.log(shortTeas);