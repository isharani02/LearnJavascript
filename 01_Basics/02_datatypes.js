// **JavaScript Datatypes**
// JavaScript supports various data types.
// Datatypes categorized into primitive types and non-primitive types.

// Primitive Datatypes --> Primitive data types hold just one value and cannot be changed after they’re created.

console.log("Primitive Datatypes");

// Type	    typeof return value	
// Number    "number"	            
// BigInt    "bigint"	            
// String    "string"	          
// Boolean   "boolean"	            
// Null	    "object"	            
// Undefined "undefined"	            
// Symbol    "symbol"	            

//Declaration initialization of primitive data types
console.log("### Declearing and initializing the primitive data types...");

let num = 25;               //Number data type (2 to power 53)
let int= BigInt(55);        // BigInt data type (greater than 2 to power 53)
let str = "String Value";   //String data type
let bool = true;         //Boolean data type(can be true or false)
let this_null = null;     // Null data type
let undef = undefined;     // Undefined data type
let sym = Symbol("sym");          // Symbol data type


// Non-Primitive Data Type --> Non-primitive data types are built using primitive data types. They are also called derived or reference data types.

// Type        typeof return value
// Object       "object"
// Array         "array"
// Function      "function"

console.log("### Declearing and initializing the non-primitive data types...");

// Object --> Object store data in key-value pair
const user = {                   
    userName:"Manasvi",
    userAge: 10,
    userEmail:"manu@gmail.com",
    userCity:"Bhagalpur"
}

//Printing Object
console.log("This is a Object:", user);

//Array
const users = ["Nancy","John","Swany","Suhana"];  // Array can also store different type of data and objects

//Printing Array
console.log("This is an Array:",users);

//Function --> A function is a block of code that runs when it is called. It helps avoid repeating the same code and makes work easier.

// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }

// Calling the function
console.log(greet("This is a Function"));


//Printing typeof values of difeferent variables
console.log("### Printing the typeof value of variables...");
console.log(typeof(num));
console.log(typeof(int));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(this_null));
console.log(typeof(undef));
console.log(typeof(sym));
console.log(typeof(user));
console.log(typeof(users));
console.log(typeof(greet));

console.log("Complete printing the typeof value of variables.");

// About Symbol
let sym1 = Symbol("123");
let sym2 = Symbol("123")

// Symbol always creates a unique value, even if two symbols have the same description.
console.log("Compare Symbols Data Type :", sym1===sym2);





