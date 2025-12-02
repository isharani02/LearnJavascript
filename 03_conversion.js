// ***JavaScript Datatype Conversion***

//Converting Strings to Numbers

//          Summary Table:-
//| String Value | Conversion            | Result  |
//| ------------ | --------------------- | ------- |
//| `"33"`       | `Number("33")`        | `33`    |
//| `"45.67"`    | `parseFloat("45.67")` | `45.67` |
//| `"45.67"`    | `parseInt("45.67")`   | `45`    |
//| `"33abc"`    | `Number("33abc")`     | `NaN`   |

console.log("Converting Strings to Numbers");
let str1 = "33";
let str2 = "33abc";
let strInt = "45.67";
let strFloat = "45.67";

console.log(typeof str1); //String data type
console.log(typeof str2); //String data type

//Changing the data type in number ,integers and float
let valueInNumber = Number(str1);
let valueInNumber2 = Number(str2);
let intNum = parseInt(strInt); // intNum is 45
let floatNum = parseFloat(strFloat); // floatNum is 45.67

//Now check the data type
console.log("Data type of str1:", typeof valueInNumber);
console.log("Data type of str2:", typeof valueInNumber2);
console.log(valueInNumber2);
console.log("Data type of strInt:", typeof intNum);
console.log("Data type of strfloat:", typeof floatNum);

//***--Converting Numbers to Strings--***

//       Summary Table:-
//| Value | Conversion      | Result  |
//| ----- | --------------- | ------- |
//| `123` | `String(123)`   | `"123"` |
//| `10`  | `10.toString()` | `"10"`  |


console.log("Converting Number to String");
let num1 = 123;
console.log(typeof num1); //Number type

//Changing the data type of string into number
let valueInString = String(num1);

//Now check the data type
console.log("Data type of num1:", typeof valueInString);
console.log(valueInString);

//***---Converting Numbers to Dates---***

//             Summary Table:-
//| Conversion                | Result      |
//| ------------------------- | ----------- |
//| `new Date(1678886400000)` | Date object |


console.log("Converting Numbers to Date");

const timestamp = 1678886400000; // Example timestamp (March 15, 2023 00:00:00 UTC)
const dateObject = new Date(timestamp);
console.log(timestamp);

console.log("Data type of dateObject:",typeof dateObject);
console.log(dateObject); // Outputs: Tue Mar 15 2023 05:30:00 GMT+0530 (India Standard Time) (or similar, depending on your timezone)


//***---Converting Dates to Numbers---***

//            Summary Table:-
//| Conversion       | Result                         |
//| ---------------- | ------------------------------ |
//| `date.getTime()` | Milliseconds since Jan 1, 1970 |

console.log("Converting Dates to Numbers");

const date = new Date(); // Current date and time
const milliseconds = date.getTime();
console.log(date);

console.log("Data type of milisecond:",typeof milliseconds);
console.log(milliseconds); 

//***---Converting Booleans to Numbers---***

//        Summary Table:-
//| Boolean | Conversion      | Result |
//| ------- | --------------- | ------ |
//| `true`  | `Number(true)`  | `1`    |
//| `false` | `Number(false)` | `0`    |


console.log("Converting Boolean data type to Numbers")

let booleanValue = true;
let numValue = Number(booleanValue);    // 1
console.log(booleanValue);

console.log("Data type of numValue:",typeof numValue);//Number
console.log(numValue);    // 1


//***---Converting Numbers to Booleans---***

//        Summary Table:-

//| Number | Conversion     | Result  |
//| ------ | -------------- | ------- |
//| `1`    | `Boolean(1)`   | `true`  |
//| `100`  | `Boolean(100)` | `true`  |
//| `0`    | `Boolean(0)`   | `false` |
//| `-1`   | `Boolean(-1)`  | `true`  |


console.log("Converting Number to Boolean");
let isLoggedIn = 1; //Number type

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);

//Now check the data type
console.log("Data type of booleanIsLoggedIn:", typeof booleanIsLoggedIn); // Boolean
console.log(booleanIsLoggedIn); //True

//***---Converting String to Booleans---***

//                 Summary Table:-
//| String              | Conversion         | Result  |
//| ------------------- | ------------------ | ------- |
//| `"Hello"`           | `Boolean("Hello")` | `true`  |
//| `" "` (space)       | `Boolean(" ")`     | `true`  |
//| `""` (empty string) | `Boolean("")`      | `false` |

console.log("Converting String to Boolean");
let isLoggedIn2 = "Isha";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(isLoggedIn2);

//Now check the data type
console.log("Data type of booleanIsloggedIn2:", typeof booleanIsLoggedIn2); //Boolean
console.log(booleanIsLoggedIn2); //True

// Try to change empty string into boolean value
let isLoggedIn3 = "";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(isLoggedIn3);

//Check the data type
console.log("Data type of booleanIsLoggedIn3:", typeof booleanIsLoggedIn3); //Boolean
//print the value
console.log(booleanIsLoggedIn3); // False

//***Converting Boolean to String***

//            Summary Table:-
//| Boolean | Conversion      | Result    |
//| ------- | --------------- | --------- |
//| `true`  | `String(true)`  | `"true"`  |
//| `false` | `String(false)` | `"false"` |

console.log("Converting Boolean to String");
let boolValue = false;
console.log(boolValue);
let strValue = String(boolValue); 

console.log("Data type of strValue:", typeof strValue);
console.log(strValue);




