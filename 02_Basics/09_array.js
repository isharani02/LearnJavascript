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

//Add two arrays

const heroMarvel = ["Thor","Ironman","Spiderman","Wanda"];
const heroDc = ["Batman","Supenman","Flash"];

//const allHeros1 = heroMarvel + heroDc;       //Not recommended : + converts into a string insist of merging them 
//console.log(allHeros1);                    //It became a one long string ,not an array  

//const allHeros2 = heroMarvel.push(heroDc);
//console.log(allHeros2);                      //push() adds heroDc as an single element,not merged array

const allHeros3 = heroMarvel.concat(heroDc);  //Concatinate two array into an array using concat() method
console.log(allHeros3);

const allHeros = [...heroMarvel,...heroDc];  //Merges arrays using spred operaor
console.log(allHeros);

const nestedArray = ["Isha",[2, 3, [4, 5, [6, 7], [7, 8, [5, 9]]]]];

const clearArray = nestedArray.flat(6);      //flat() flattens a array up to the given depth
console.log(clearArray);

console.log(Array.isArray(nestedArray));

let = myName = "Isha Rani";
let = myId = 1114;
let = myPhone = 999666333;
console.log(myArr);

console.log(Array.from(myName));                //  Convert to an array, all passing element to an array.

console.log(myArr);

console.log(Array.of(myName,myId,myPhone));     //  Returns an array, all passing element to an array.

// To check Array is empty or not
if (myArr.length === 0) {
    console.log("Array is empty");
}
else {
    console.log("Array have some value.");
}