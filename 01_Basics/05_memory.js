// ---** JavaScript Memory **---

// Memory Types 
// Two Types of memory 

// Stack (Primitive Data Type) --> It gives a copy of the value,all values will be changed in copy not in original value.

// Heap  (Non-Primitive Data Type) --> They store a reference to the original value, so changes to one reference affect the actual value..

// Stack Flow
let myName = "Isha Rani"; //Actual Value
let anotherName = myName; // Change value in copy
// anotherName = "Ishu";
myName = "Ishita Prachi";

console.log(myName); 
console.log(anotherName); 

// Heap Flow
let userOne = {
    name : "Isha Rani",
    email : "isha@gmail.com"
};                           // Actual Value

let userTwo = userOne; // Refer to actual value.
userTwo.name = "Ishita Prachi"; // Both use the same object, so one change affects both.

console.log(userOne);
console.log(userTwo);


