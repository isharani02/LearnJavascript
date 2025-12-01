//----------***JavaScript Objects***-------------
//-----------------------------------------------

//Symbol Creation (Unique Key)
const mySym =Symbol("myKey1");

//Object Literal Declaration : 
const JsUser = {
    name: "Isha",
    age: 23,
    location: "Kolkata",
    email: "isha@gmail.com",

    // Using a Symbol as a key (must be in square brackets)
    [mySym]: "key1",

    //This is a normal key not symbol    
    mysym: "key1" ,   

    isLoggenIn: true,
    lastLogIn: ["Mon","Tue","Wed","Thu","Fri"],

    //Property name with spaces must be in double quotes
    "full name": "Isha Rani",

    //Method inside the object
    greeting: function(){
        console.log("Hello JS user.");
    },
   
};
//----------------------------------------------------

//Accessing Properties
//-------------------------------

console.log(JsUser.name);                //Mostly use this simple dot notaton for accessing object properties

//Accessing object in new way
console.log(JsUser["name"]);             //Generally use in special cases
//console.log(JsUser.full name);         //Getting error because property names with spaces cannot use dot notation
console.log(JsUser["full name"]);        //Correct way to access a key contains spaces


console.log(JsUser[mySym]);                // Accessing symbol-based key
console.log(typeof JsUser.mysym);          // Checking type of a normal key that *looks* like a symbol

console.log(JsUser.greeting());  

//Declaring a method for jsUser outside of object
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`)    // Use 'this' keyword so the function can access the object's own properties.    
};

console.log(JsUser.greetingTwo());    
