//***JavaScript Function***
//---------------------------------------------------------
//A function is a block of code.It runs only when it is called.

//Syntax :-
//---------------------------------
// function functionName(parameters) {
//    Code to be executed
//   return result;                    // Optional return statement
// }

//**Declaration of function
//-------------------------------------------

//function without parameter
//------------------------------
function greet() {
  console.log("Hello Everyone");
}
greet();

//function with arguments or parameters
//------------------------------------------
function addNums(num1, num2) {
  console.log(num1 + num2);
}

addNums(3, 5); //Calling the function

const result1 = addNums(7, 9);         //Call the function and store the result
console.log("Result : ", result1);        // Will show undefined because no return value

//function with return value
//-----------------------------

function addNumbers (num1 , num2){
    let result = num1 + num2;
    return result;
};
addNumbers(9 , 4)         //No output shown because the return value is not printed
console.log(addNumbers(9 , 4));


const result2 = addNumbers(6 , 8);
console.log("Result2 : ", result2);    //Now get result value to the console

//Second approach with return value
function addTwoNum (num1 , num2){
    return num1 + num2;
};
console.log(addTwoNum(4 , 5));      //Calling function


//Passing multiple parameters using rest operator(...)
function calculateCartPrice(...price){
    return price;
};
console.log( calculateCartPrice(2000,500,150,700) );    //Returns value in an array format


// Passing default value in function parameter arguments
function greetUser(user="Sam"){
    let msg = `Hi, ${user}`;
    return msg;
}
console.log(greetUser())
console.log(greetUser("Isha"));


//**Function with object and array
//-----------------------------------------------------------

//Passing an object in function
const user = {
  userName: "Isha",
  userEmail: "isha@gmail.com"
};

function handleObj (anyobject){
  console.log(`My name is ${anyobject.userName} and my email is ${anyobject.userEmail}`);
};
handleObj(user);    //Passing already existing object

handleObj({userName: "Ishu", userEmail: "ishu@gmail.com"});   //Passing parameter as a object


//Passing an array in function
const newArr = [365,123,"isha"];

function handleArr (getArray){
  //return getArray ;              //Return whole array
  return getArray[0];              //Return specified element of array
};

console.log(handleArr(newArr));
console.log(handleArr([110, 220, 330]));

