//! Function, arrow function and this context in javascript 

// Here also we do challenges so see various features function provided in javascript 

/** 
 * Challenge First : Write a function named a `makeATea` that takes one parameter which was `typeOfTea` and return a string like "Making a green tea" when called a `green tea` stored a result in a variable named `teaOrder` 
 */ 

function makeATea(typeOfTea) { 
return `Making a ${typeOfTea}`
}  ;

let teaOrder = makeATea("Masala Chai"); 
console.log(teaOrder);
teaOrder = makeATea("Lemon tea"); 
console.log(teaOrder);

 /** 
  * Second Challenge : Create a function named `orderTea` that takes one parameter `teaType`. Inside this function, create another function named `confirmedOrder` that returns a message like "Order confirmed for chai". 
  * Call `confirmOrder` from within `orderTea` and return the result. 
  */

 function orderTea(teaType) {
    function confirmedOrder() {
        return `Order confirmed for ${teaType}`
    }; 
    
   return confirmedOrder();
 }; 

 let teaConfirmed = orderTea("Masla Chai"); 
 console.log(teaConfirmed);
 teaConfirmed = orderTea("Lemon Tea");
 console.log(teaConfirmed); 

 /** 
  * Third Challenge : Write a function named `calculateTotal` that takes two parameters : 'price' and 'quantity', The function should return the total cost by multiplying the 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity' 
  * Store the result in a variable named 'totalCost'  
  */ 

 const calculateTotal = (price, quantity) => {
    const totalCost = price * quantity;
    return totalCost; 
 };

 let totalCost = calculateTotal(4000, 6); 
 console.log(totalCost);

 //* This Keyword : this keyword was always refer to context from what or where we calling 
 function greet() {
     return {
        name : "Aayush Vyas",
        fun: function() {
            console.log("Hello Everyone my name is ",this.name)
        }
    }
 }; 

const result = greet(); 

result.fun(); //* This function was calling inside the object which return by greet()