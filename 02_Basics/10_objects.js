//----------***JavaScript Objects***-------------
//-----------------------------------------------

//Symbol Creation (Unique Key)
const mySym = Symbol("myKey1");

//Object Literal Declaration :
const JsUser = {
  name: "Isha",
  age: 23,
  location: "Kolkata",
  email: "isha@gmail.com",

  // Using a Symbol as a key (must be in square brackets)
  [mySym]: "key1",

  //This is a normal key not symbol
  mysym: "key1",

  isLoggenIn: true,
  lastLogIn: ["Mon", "Tue", "Wed", "Thu", "Fri"],

  //Property name with spaces must be in double quotes
  "full name": "Isha Rani",

  //Method inside the object
  greeting: function () {
    console.log("Hello JS user.");
  },
};

//----------------------------------------------------
//Accessing Properties
//-------------------------------

console.log(JsUser.name); //Dot notaton for accessing object properties

//Accessing object in new way
console.log(JsUser["name"]); //Generally use in special cases(Bracket notation)

//console.log(JsUser.full name);         //Getting error because property names with spaces cannot use dot notation

console.log(JsUser["full name"]);  //Correct way to access a key contains spaces

console.log(JsUser[mySym]);  // Accessing symbol-based key
console.log(typeof JsUser.mysym);  // Checking type of a normal key that *looks* like a symbol

console.log(JsUser.greeting());  //Calling Method

//Declaring a method for jsUser outside of object
JsUser.greetingTwo = function () {
  console.log(`Hello JS User ${this.name}`);  // Use 'this' keyword so the function can access the object's own properties.
};

console.log(JsUser.greetingTwo());

//-----------------------------------------------
//*--Singleton Object and Non-Singleton Object--*
//-----------------------------------------------

// Singleton Object
const userObj = new Object(); //Another way of create a single object

userObj.name = "Ishita";
userObj.email = "ishi@gmail.com";
userObj.isLoggedIn = false;

console.log(userObj);

//Nested Object
const regularObj = {
  email: "ishu@gmail.com",
  fullName: {
    userfullname: {
      firstName: "Ishita",
      lastName: "Prachi",
    },
  },
};

//Fully-Accessable(using dot notation can access all the properties of nested object)
//-----------------------------------------------------------------------------------
//Accessing properties

console.log(regularObj.fullName);
console.log(regularObj.fullName.userfullname);
console.log(regularObj.fullName.userfullname.firstName);

//Merging Objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 2: "c" };

//Merge using spread operator

//The spread operator merges objects, and if keys match, the later value replaces the earlier one.
const obj3 = { ...obj1, ...obj2 };
console.log("Merge objects using spread : ", obj3);

//Merge using Object.assign()

// {} is used so original objects remain unchanged
const objThree = Object.assign({}, obj1, obj2);
console.log("Merge objects using Object.assign() : ", objThree);

// const obj3 = {obj1,obj2};                    // This will create a new object which consists of 2 objects.

//**-Array of Objects-**
const arrObj = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 35 }
];

arrObj[1].name; //Accessing properties of an array of objects
arrObj[2].id;
arrObj[0].name;
console.log(userObj);

//Using object like an array
console.log(Object.keys(userObj));  //Return keys as an array
console.log(Object.values(userObj)); //Return values as an array
console.log(Object.entries(userObj)); //Returns an array of nested array containing [key ,value] pair.


//Some important property
//-------------------------
console.log(userObj.hasOwnProperty("isLoggedIn")); //Check if the property exist and gives boolean(true or false)value.


// Non-Singleton Object (you can create multiple objects using {} or constructor)
//const userObj2 = {};


//Object De-Structuring
//-----------------------------------

const course = {
  courseName: "JavaScript Series",
  coursePrice: 999
}

const {coursePrice: price} = course;
console.log(price);

// JSON(JavaScript Object Notation)
//In pure JSON, both keys and string values MUST be in double quotes:
const employee={
  "empId": 11,
  "empName": "Isha Rani",
  "empRole": "Web-Developer"
};
console.log("Printing JSON data : ", employee); //Printing JSON Data