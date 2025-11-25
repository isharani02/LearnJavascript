// ***Operations in JavaScript***

// There are three types of operators in JavaScript :--

// Whatever data type comes first in an operation all will be considered as that data type only.
// Like str + str + num => First is str so all will be treated as str.
// Like num + num + str => First is num so all will be treared as num.


//1.Arithmetic Operators


//Operator	Description
//  +	     Addition
//  -	     Subtraction
//  *	     Multiplication
//  **	     Exponentiation
// (/)	     Division
//  %	     Modulus (Division Remainder)
// ++	     Increment
// --	     Decrement

console.log("Operation on numbers")
let num1 = 5;
let num2 = 3;

console.log("Value of Number1:", num1);
console.log("Value of Number2:", num2);
console.log("Addition :", num1+num2);
console.log("Subtraction :", num1-num2);
console.log("Multiplication :", num1*num2);
console.log("Divison :", num1/num2);
console.log("Power :", num1**2);
console.log("Remainder :", num1%num2);

// Operation on different data types
console.log("Operation on Strings");

let str1 = "Hello";
let str2 = "World";
let num3 = 345;

console.log("Value of String1:", str1);
console.log("Value of String2:", str2);
console.log("Value of Number3", num3);
console.log("Add :", str1+str2);
console.log("Add :", str1+num3);
console.log("Addition of String and Number :", str1+str2+num3);
console.log("Sub :", str1-str2);
console.log("Sub :", str1-num1);
console.log("Multiply :", str1*str2);
console.log("Divide :", str1/str2);
console.log("Power :", str1**str2);
console.log("Reaminder :", str1%str2);

// Operation on Multiple Datatypes

let str3 = "Isha";
let str4 = "Rani";
let num4 = 111;
let num5 = 222;

console.log("Value of String3:", str3);
console.log("Value of String4:", str4);
console.log("Value of Number4:", num4);
console.log("Value of Number5:", num5);
console.log("Addition of Str3,Str4,Num5 and Num6 :", str3+str4+num4+num5);
console.log("Addition of Num4,Num5,Str3 and Str4 :", num4+num5+str3+str4);

// Increment Operator and Decrement Operator
// Syntax
// x++ (Postfix)
// ++x (Prefix)
console.log("Operation with Increment and Decrement Operator");
let num6 = 7;
let num7 = 9;
console.log("Value of Number6 :", num6);
console.log("Value of Number7 :", num7);
console.log("Increment then Print :", ++num6);
console.log("Pre Increment :", num6);
console.log("Print then Increment :", num7++);
console.log("Post Increment :", num7);
console.log("Decrement then Print :", --num6);
console.log("Pre Decrement :", num6);
console.log("Print then Decrement :", num7--);
console.log("Post Decrement :", num7);

// Example of Increment Operator
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// Operation on Boolean Datatype --> Not Recommend.


//2.Assignment Operators

//  Operator   Example     Same As
//---------------------------------------
//   =          x = y       x = y
//   +=         x += y      x = x + y
//   -=         x -= y      x = x - y
//   *=         x *= y      x = x * y
//   /=         x /= y      x = x / y
//   %=         x %= y      x = x % y
//   **=        x **= y     x = x ** y

console.log("Operation on Assignment Opeartor");
let num = 10;

num += 5;   // Addition Assignment Operator
num -= 3;   // Subtraction Assignment Operator
num *= 2;   // Multiplication Assignment Operator
num /= 3;   // Divison Assignment Operator
num %= 2;   // Remainder/Modulus Assignment Operator
num **= 3;  // Exponential Assignment Operator



//3.Comparison Operators

//Operator    Description                        Example
//-------------------------------------------------------------
//==         equal to                            x == 5
//===        equal value and equal type          x === 5
//!=         not equal                           x != 5
//!==        not equal value or type             x !== 5
//>          greater than                        x > 5
//<          less than                           x < 5
//>=         greater than or equal to            x >= 5
//<=         less than or equal to               x <= 5



//4.Logical Operators

// Operator   Description
// -------------------------------
// &&         logical AND
// ||         logical OR
// !          logical NOT

// Operation on AND Operator
console.log(true && true);   // true
console.log(true && false);  // false

//Operation on OR Operator
console.log(false || true);  // true
console.log(false || false); // false

//Operation on NOT Operator
console.log(!true);
console.log(!false);

// ***Operator Precedence***

//| Group           | Meaning                                     
//| --------------- | -------------------------------------------- 
//| **Please**      | Parentheses `()`                            
//| **Enjoy**       | Exponentiation `**`                          
//| **My**          | Multiplication `*`                           
//| **Delicious**   | Division `/`                                
//| **Apple**       | Addition `+`                                 
//| **Sandwiches**  | Subtraction `-`                              
//| **Later**       | Logical operators (`&&`, ` `) |
//| **Cooked**      | Comparison operators (`==`, `===`, `>`, `<`) 
//| **Beautifully** | Assignment (`=`, `+=`, etc.)                 


