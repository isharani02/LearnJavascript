//JavaScript Variables

//const  -  Cannot reassign a const variable after initialization.
//let    -  Globally used, Value can be updated but can't be redeclare. Solved block and functional scope issue.
//var    -  Prefer not to use var because changed the value of variable in all the block scope and functional scope.

//Variable Declaration
console.log("***--Declearing and initialializing the variables--***");
const userName="Isha Rani";
let userEmail="isha@gmail.com";
var userPassword="13456";
userCity="Bhagalpur";

console.log("Completed declaration and initalization of all the variables");

//Printing the value of all the variables in console.

console.log(userName);
console.log(userEmail);
console.log(userPassword);
console.log(userCity);

//Printing all the value at once
console.log("Printing all the value at once");
console.table([userName,userEmail,userPassword,userCity]);

//Changing the value of variables.

// userName = "Neha Bharti";// Not allowed reassigning
userEmail = "ishu@gmail.com";
userPassword = "Abc$123";
userCity = "Ranchi";

console.log("Completed updation of the value of variables. ");
//Printing the value of variables after updation.
console.log(userName);
console.log(userEmail);
console.log(userPassword);
console.log(userCity);

// We can print all the value at once using of console.table and we get data in the form of table
console.table([userName,userEmail,userPassword,userCity]);

