//**--JavaScript Scopes  **

let num1 = 110;
const num2 = 220;
var num3 = 330;
// num4 = 440;

console.log("Logging all the value : ")
console.log("num1 : ", num1);
console.log("num2 : ", num2);
console.log("num3 : ", num3);
// console.log("num4 : ", num4);


function numbers (){
    let num1 = 100;
    const num2 = 200;
    var num3 = 300;     //Note: Var is function-scoped(Not global and block scoped)
    // num4 = 400;      //Avoid this because replace the value in global scope

    console.log(num1);
    console.log(num2);
    console.log(num3);
    // console.log(num4);
  
}
console.log(numbers());

if(true){
    let num1 = 10;         
    const num2 = 20;    
    var num3 = 30;

    console.log("Inner :");
    console.log(num1);
    console.log(num2);
    console.log(num3);
 // all variables under this scope should not have to acceesed from outside this block, but var is causing issue here
};

console.log("Outside of block : ");
console.log("num1 : ", num1);
console.log("num2 : ", num2);
console.log("num3 : ", num3);       // 30  --> overwritten by var inside block
// console.log("num4 : ", num4);

//**Closure Function Example**
function outer(){
    const username = "Isha";         // Variable defined in outer function

    function inner(){
        const website = "you-tube";    
       // inner() can access outer() variables (closure)
        console.log(username);
    }
    //console.log(website);   // Error: website is only available inside inner()

    inner();    // Calling inner function
}
outer();        // Calling outer function


//Lexical scope --> Inner scope can access outer scope, but outer scope cannot access inner scope.

if(true){
    let userName = "Isha";
    if(userName === "Isha"){
        let website = "you-tube";
        console.log(website + userName);        //Inner block can access outer block variables
    }
   //console.log(website);        //Error: website is not accessible outside the inner block
};
//console.log(userName);           //Error: userName is not accessible outside the outer block

console.log(addOne(5));        // Direct declared function can be used before declaration

function addOne (num){
    return (num + 1);
};

//console.log(addTwo(10));    // Function declared in a variable cannot be used before declaration
const addTwo = function(num){
    return (num + 1);
};
console.log(addTwo(10));
