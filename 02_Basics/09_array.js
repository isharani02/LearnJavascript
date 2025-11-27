//***JavaScript Array***
//---------------------------------------------------------

//*Declaring an Array*
const myArr = [1 , 2 , 3 ,4 , "Array", 2.5,"Hello"];
console.log("Printing Element of the array : ", myArr);      //Printing Element of the array.
console.log("Printing 3rd index of the array : ", myArr[3]); //Printing element at index 3.

//***Methods of an array***

//push()    :   Adds an element at the end of the array.
console.log("push() adding element at end : ", myArr.push("Last"));

//pop() :   Removes the last element of the array.
console.log("pop() removes last element : ", myArr.pop());

//unshift() :   Adds an element at start of the array.
console.log("unshift() add element at start  : ", myArr.unshift("Start"));

//shift()   :   Removes the element from start of the array.
console.log("shift() removes element from start : ",  myArr.shift());

//includes()    :   Returns a boolean value indicating whether the given value exists in the array.
console.log("includes() checks given value is there or not : ", myArr.includes(5));

//indexOf() :   Returns index of given element.
console.log("indexOf() returns index of given element : ", myArr.indexOf("Hello"));

//slice()   :   Returns a portion of the array from the given start to end index (end not included).
const arr1 = myArr.slice(2,4);
console.log("Before using slice : ", myArr);
console.log("slice() returns portion of the array : ", arr1); // Not manipulate the actual array,gives original array

//splice()  :  Returns a portion of the array from the given start to end index.
const arr2 = myArr.splice(0,2);
console.log("Before using splice : ", myArr);
console.log("splice() removed element : ", arr2); //Manipulate an actual array.

//join()    :   Change array into string.
const newArr = myArr.join();
console.log("Before using join : ", myArr);
console.log("After using join method : ", newArr);