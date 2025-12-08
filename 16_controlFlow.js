//***--JavaScript Control Flow--***
//----------------------------------------------------------


// Conditions
//-----------------------------------
/*
    >   Greater Than
    <   Less Than
    >=  Greater Than Equals to
    <=  Less Than Equals to
    ==  Equals To (value)
    !=  Not Equals to (value)
    === Equals to (Value with Data Type)
    !== Not Equals to (Value with Data Type)
*/

//if Statement --> If the condition is true,then execute the statement inside the if block.
//------------------------------------------------------------------------------------------

if(true){
    console.log("Condition is true execute the statement");
};

if(3==3){
    console.log("Condition is true 3 is equal to 3.");
};

if(false){
    console.log("If condition is false, this statement will not execute.");
};

//Implicit scope of if-statement
//Multiple statement can be written using commas(not recommended).
//-------------------------------------------------------------------------------------------------

if(true) console.log("This is the first statement."),console.log("This is second statement."); //Usually not recommend.

//if-else Statement --> If statement is true execute the if statement otherwise execute the else statement.
//-----------------------------------------------------------------------------------------------------------------
const isUserLoggedIn = true;
const temprature = 40;

if(temprature < 50){
    console.log("Condition is true,temprature is less than 50.");
}else{
    console.log("Not executed");
};


if(temperature > 50){
    console.log("Not executed");
}else{
    console.log("The condition is false,temprature is not greater than 50.");
};

//Nested if-else Statement   --> Only one block of code will be executed,where condition will be satisfied.
//----------------------------------------------------------------------------------------------------------
let score = 1000;

if(score < 600){
    console.log("Score is less than 600.")
}else if(score < 750){
    console.log("Score is less than 750.")
}else if(score < 900){
    console.log("Score is less than 900.")
}else{
    console.log("Score is greater than 900.")
};

//Writing if-else block satement using logical operators
//------------------------------------------------------------------
 let userLoggenIn = true;
 let debitcard = true;

//AND(&&) Operator  --> All conditions must be true. 
//-----------------------------------------------------
 if(userLoggenIn && debitcard){
    console.log("Allow to buy courses.");
 }else{
    console.log("Not allowed to buy courses.");
 };
 
 if(userLoggenIn && debitcard && 2==2){
    console.log("Allow to buy courses.");
 }else{
    console.log("Not allowed to buy courses.");
 };

//OR(||) Operator  --> Only one condition needs to be true.
//---------------------------
let loggedInFromGoogle = true;
let loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User is logged in.");
}else{
    console.log("USer is not logged in.");
};


//Switch Case --> A switch statement checks one value and compares it to several possible options (called cases).
//When it finds a matching case, it runs the code for that case.
//Runs the matching cases until a break reached.
//Runs the default if no cases matches.

let month = 6;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:    
        console.log("April");
        break;  
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
        break;                                        
};

//Truthy and Falsy Values
//------------------------------------------
let userName = "Ishita";
let userEmail;
let userArr = [];
let users = {}; 

if(userName){                       
   console.log("A non-empty string always gives truthy values.");
   console.log("Got user name");
}else{
    console.log("Didn't got user name");
};

if(userEmail){
    console.log("Got user email.");
}else{
    console.log("A non-assigned variable gives a falsy value.");
    console.log("Didn't get user email.");
};

if(userArr){ 
    console.log("An empty array is also truthy value in js.");                       
    console.log("Got user array");
}else{
    console.log("Didn't get user array");
};


if(users){
    console.log("An empty object is also gives a truthy value.");
    console.log("Got users object.");
}else{
    console.log("Didn't got user object");
};

/*JavaScript has only 7 falsy values:

1. false
2.  0
3. -0
4. "" (empty string)
5. null
6.undefined
7.NaN

JavaScript Truthy values

" "         -   Space in quotes/string
"0"         -   Zero in quotes/string
[]          -   Empty Array
{}          -   Empty Object
"false"     -   Anything in quotes/string
function(){}-   Empty Function

*/

//Nullish Collaescing Operator(??) 
//The ?? operator returns the right-hand value only when the left-hand value is null or undefined.

let userName2;
console.log(userName2 ?? "Guest"); 
// Output: "Guest"

let age = null;
console.log(age ?? 18);
// Output: 18

let count = 0;
console.log(count ?? 10);
// Output: 0   (because 0 is not null or undefined)



// Terniary Operator 
// Synatx   -   condition ? true value : false value;
// Evaluate the condition before "?".
// If it is true -> run the code after "?".
// If it is false -> run the code after ":".



const checkUser = "Isha";
checkUser == "Isha" ? console.log("Hi, User") : console.log("Please login.");

