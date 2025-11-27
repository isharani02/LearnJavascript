//***JavaScript DATE and TIME***
//-------------------------------------------------------------

//Creating date object of current date and time
let myDate = new Date();
console.log(myDate);

//**Formatting**
//--------------------------------------

//toDateString()  :  Returns only date.
console.log("toDateString() returns Current Date : ", myDate.toDateString());

//toTimeString()  :   Returns only time.
console.log("toTimeString() returns only time : ", myDate.toTimeString());

//toLocaleDateString()  :   Returns localize date.
console.log("toLocaleDateString() returns localize date : ", myDate.toLocaleDateString());

//toLocaleTimeString()   :   Returns localize time.
console.log("toLocaleTimeString() returns localize time : ", myDate.toLocaleTimeString()); 

//toJSON()  :  Converts date into JSON friendly string.
console.log("toJSON()  converts date into json friendly string : ", myDate.toJSON());

//toLocaleString()  :   Gives localize date and time.
console.log("toLocaleString() gives localize date and time : ", myDate.toLocaleString());

//toString()    :   Converts date into string format.
console.log("toString() returns date into string format : ", myDate.toString());

//** Get parts **
//----------------------------------------

//getFullYear()
console.log("getFullYear() gives year : ", myDate.getFullYear());

//getMonth()
console.log("getMonth() gives month(0-11) : ",myDate.getMonth());

//getDate()
console.log("getDate() give date : ", myDate.getDate());

//getDay()
console.log("getDate() give day", myDate.getDay());

//getHours()
console.log("getHours() give hours", myDate.getHours());

//** Set Parts ***
//---------------------------------------------------

let anotherDate = new Date()
anotherDate.setFullYear(2030); //sets year
anotherDate.setMonth(5); //sets month
anotherDate.setDate(20); //sets date

console.log("Set Date : ", anotherDate);

// Other Properties 
let newDate = new Date(2025, 1, 5, 4, 6 );
console.log(newDate.toLocaleString());

let moreDate = new Date("02-09-2002");
console.log(moreDate.toLocaleString());

//Timestamp
let timeStamp = Date.now();
console.log(timeStamp);
console.log(timeStamp.toLocaleString()); //Give result in millisecond.
console.log(Math.floor(Date.now()/1000)); //Give result in seconds.

//Locale options example
console.log(newDate.toLocaleString('default',{
    weekday : "long"
}));


