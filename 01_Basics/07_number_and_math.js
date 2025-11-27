//***JavaScript Number***
//---------------------------------------------------
let score = 200;      //JavaScript automatically take number type.
let myBalance = 2000000;
let myScore = new Number(100);
let floatValue = new Number(123.45);        //The Number() method converts a value to a number.


//Basic Methods
//-------------------------------------------
//Basic number methods can be used on any number:

//toString()
// console.log("Change in to string : ", score.toString());

//toExponential() :  converts a number into exponential (scientific) notation.
console.log("Exponential value of a number : " , score.toExponential());
console.log("Exponential value of a float value : ", floatValue.toExponential(2));

//toFixed() :   Converts numbers to fixed decimal values.
console.log("toFixed value of a number : ", score.toFixed(2));

//toPrecision() :   Converts numbers to string and gives precised value as per given parameter, round off to the given number.
console.log("toPrecision value of float value : ", floatValue.toPrecision(3));

//valueOf() :   

// toLocaleString(region):   Give foramtted comma seperated value
console.log("Value in localeString", myBalance.toLocaleString('en-IN'));


//***JavaScript Math Object***
//------------------------------------------------------------------------------

//The JavaScript Math object allows you to perform mathematical tasks.

//Math.PI
console.log("Value of PI : ", Math.PI);

//Power & Roots
//-------------------------

//Math.pow(x,y)  :  x raised to the power y.
console.log("Math.pow(x,y) value of x to the power y : ", Math.pow(2,3));

//Math.sqrt(x)    
console.log("Math.sqrt(x) square root : ", Math.sqrt(16));

//Math.cbrt(x)
console.log("Math.cbrt(x) cube of a number : ", Math.cbrt(3));

// Rounding Methods
//---------------------

//Math.round(x) :  Rounds to nearest integer.
console.log("Math.round(x) rounded up to nearest integer : ", Math.round(24.678));

//Math.floor(x) :  Rounds down.
console.log("Math.floor(x) round down to nearest integer : ", Math.floor(67.98765));

//Math.ceil(x) : Rounds up to nearest integer.
console.log("Math.ceil(x) round up to nearest integer  : ", Math.ceil(134.1234));

//Math.trun(x)  :   Removes decimal part.
console.log("Math.trun(x) removes decimal part", Math.trunc(45.20));
console.log("Math.trun(x) removes decimal part", Math.trunc(-45.20));

//Absolute & Sign
//---------------------
//Math.abs(x) : Absolute value (removes minus).
console.log("Math.abs(x) Gives absolute value  : ", Math.abs(-5));

//Math.sign(x)  :   Returns -1, 0, or 1 based on sign.
console.log("Math.sign(x)  returns -1, 0, or 1 based on sign  : ", );

// Minimum&Maximum
//----------------------------

//Math.min(a, b, ...)  :  Returns mimimum value.
console.log("Math.min(a, b, ...) returns smallest value  : ", Math.min(2,3,9,56,11,22.2));

//Math.max(a,b, ...)  :  Returns maximum value.
console.log("Math.max(a,b, ...) returns maximum value  : ", Math.max(23,7,28,9.7,89.6));

//Random Number
//------------------
//Math.random()  :  Returns random number between 0 and 1.
console.log("Math.random() returns random number between 0 and 1 : ", Math.random());
console.log(" Returns random number between 1 and 10 : ", Math.random()*10 + 1);

//Logarithms
//----------------------
//Math.log(x)   :   Natural log (base e)
//Math.log10(x) :   Log base 10
//Math.log2(x)  :   Log base 2
//Math.exp(x)

// Trigonometric Methods : All take radians, not degrees.

//Math.sin(x)
//Math.cos(x)
//Math.tan(x)



