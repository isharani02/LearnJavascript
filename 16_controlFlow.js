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
    console.log("If condition is false not execute the statement of if block.");
};

//Implicit scope of if-statement,can write multiple statement of if block in one line using coma.
//-------------------------------------------------------------------------------------------------

if(true) console.log("This is the first statement."),console.log("This is second statement."); //Usually not recommend.

//if-else Statement --> If statement is true execute the if statement if false then execute the else statement.
//-----------------------------------------------------------------------------------------------------------------
const isUserLoggedIn = true;
const temprature = 40;

if(temprature < 50){
    console.log("The condition is true,temprature is less than 50.");
}else{
    console.log("Not executed");
};


if(temprature > 50){
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

//AND(&&) Operator  --> Both condition should be true. 
//-----------------------------------------------------
 if(userLoggenIn && debitcard){
    console.log("Allow to by courses.");
 }else{
    console.log("Not allowed to by courses.");
 };
 
 if(userLoggenIn && debitcard && 2==2){
    console.log("Allow to buy courses.");
 }else{
    console.log("Not allowed to buy courses.");
 };

//OR(||) Operator
//---------------------------
let loggedInFromGoogle = true;
let loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User is logged in.");
}else{
    console.log("USer is not logged in.");
};


//Switch Case

let month = 6;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Februrary");
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

