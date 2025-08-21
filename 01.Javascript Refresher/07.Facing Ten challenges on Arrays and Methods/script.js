//! Facing Ten Challenges on Arrays and Methods 

/** 
 * First Challenge : Declare an array named "teaFlavors" that contains the string "green tea", "black tea" or "oolong tea".
 * Access the first element of the array and stored in a variable name 'firstTea'
 */ 

const teaFlavors = ["green tea", "black tea", "oolong tea"]; 

let firstTea = teaFlavors[0]; 
console.log(firstTea);  

/** 
 * Second Challenge : Declare an array name "cities" containing  "London", "Tokyo", "Paris", and "New York" and Access the third element in the array and store it in a variable name 'favoriteCity'
 */

const cities = ["London", "Tokyo", "Paris", "New York"]; 

let favoriteCity = cities[2]; 
console.log(favoriteCity); 


/** 
 * Third Challenge : Declare an array name "teaTypes" containing "herbal tea", "white tea", and  "masala chai". 
 * Change the second element of the array to "jasmine tea"
 */ 

const teaTypes = ["herbal tea", "white tea" , "masala chai"]; 
teaTypes[1] = "Jasmine tea"; 
console.log(teaTypes);

/** 
 * Fourth Challenge : Declare an array named "citiesVisited" containing "Mumbai" and "Sydney". 
 * Add "Berlin" to array using 'push' method 
 */

const citiesVisited = ['Mumbai', 'Sydney']; 
citiesVisited.push("Berlin"); 
console.log(citiesVisited); 

/** 
 * Fifth Challege : You have an array named "teaOrders" with "chai", "iced tea", "macha", and "earl grey".
 * Remove the last element of an array using pop method and stored it in an array using an "pop" method and store in an variable lastOrder 
 */
const teaOrders = ["chai", "iced tea", "macha", "earl grey"]; 

let lastOrder = teaOrders.pop(); 
console.log(lastOrder); 

/** 
 * Sixth Challenge : You have an array named `popularteas` containing "green tea",  "oolang tea", and "chai". 
 * Create a soft copy of this array named "softCopyTeas"
 */ 

const popularTeas = ["Green tea", "oolang tea", "chai"]; 
let softCopyTeas = popularTeas; 
popularTeas.push("Masala Tea");
popularTeas.pop(); 
console.log(popularTeas , softCopyTeas); 

/** 
 * Seventh Challenge : You have an array named "topCities" containing "Berlin", "Singapore", and  "New York" create a hard copy of this array named "hardCopyCities" 
 */

const topCities = ["Berlin", "Singapore", "New York"];  

let hardCopyCities = topCities.map((cities)  =>  cities); 
topCities.push("New Jersey"); 

console.log("hardCopyCities = ",hardCopyCities, "topCities = ", topCities); 

/** 
 * Eight Challenge : You have two arrays : europeanCities containing "Paris", "Rome" and "asianCities" containing "Tokyo" and "Bangkok". 
 * Merge these two arrays into one array named "worldCities" 
 */ 

const europeanCities = ["Paris", "Rome"]; 
const asianCities = ["Tokyo", "Bangkok"]; 

const worldCities = europeanCities.concat(asianCities); 
console.log(worldCities);  

/** 
 * Nineth Challenge : You have an array named teaMenu containing "Masala chai", "oolong tea", "green tea" and "earl grey"
 * Find the length of the array and store it a variable  named "menuLength"
 */ 

const teaMenu = ["Masal chai", "oolong tea", "green tea", "earl grey"]; 

let menuLength = teaMenu.length; 
console.log(menuLength);  // Output : 4 

/** 
 *  Tenth Challenge : You have an array named "cityBucketList" containing "Kyoto" , "London" , "Cape Town" and "Vancouver"
 * Check if the "London" is in the array and store the result in variable which name isLondonInList 
 */

const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]; 

const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);


