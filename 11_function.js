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

const result1 = addNums(7, 9); //Call the function store the result
console.log("Result : ", result1);       //Display the result to the console

//function with return value
//-----------------------------

function addNumbers (num1 , num2){
    let result = num1 + num2;
    return result;
};

addNumbers();

const result2 = addNumbers(6 , 8);
console.log("Result2 : ", result2);    //Now get result value to the console

//Second approach with return value
function addTwoNum (num1 , num2){
    return num1 + num2;
};
console.log(addTwoNum(4 , 5));      //Calling function