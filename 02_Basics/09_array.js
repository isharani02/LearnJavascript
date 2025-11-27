//***JavaScript Array***
//---------------------------------------------------------

//*Declaring an Array*
const myArr = [1 , 2 , 3 ,4 , "Array", 2.5,"Hello"];
console.log("Printing Element of the array : ", myArr);      //Printing Array.
console.log("Printing 3rd index of the array : ", myArr[3]); //Printing 3rd index of the array.

//***Methods of an array***

//push()    :   Add element at the end of the array.
console.log("push() adding element at end : ", myArr.push("Last"));

//pop() :   Removes last element of the array.
console.log("pop() remove last element of the array : ", myArr.pop());

//unshift() :   Add element at start of the array.
console.log("unshift() add element at start of the array : ", myArr.unshift("Start"));

//shift()   :   Removes element from start of the array.
console.log("shift() removes element from start of the array : ",  myArr.pop());

//includes()    :   Search given element