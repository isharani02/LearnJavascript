//***JavaScript Filter, Map and Reduce***
//-----------------------------------------------------------------

//filter
// filter() creates a new array with only those elements 
// that satisfied the condition inside the callback function.
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Keep only numbers greater than 4
const greaterThanFour = numArray.filter((num)=> num > 4);
console.log(greaterThanFour);

const userArr = [
    { id: 1, name: 'Isha', active: true },
    { id: 2, name: 'Ishita', active: false },
    { id: 3, name: 'Prachi', active: false }
];

// Filter only active users
// Using block scope version
const activeUsers = userArr.filter((users)=> {
    return (users.active);});
console.log(activeUsers);

//-----------------------------------------------------------------------------------------------------------
//Map()
//takes every item in an array, applies a function to it, and returns a new array with the changed values.
//Examples
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareArray = originalArray.map((num)=> num*num);
console.log(squareArray);

//Multiple Map Channing
const otherNUmArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const otherNum2 = otherNUmArr.map((num) => num*10).map((num) => num + 1).map((num) => num/2);
console.log(otherNum2);

// Using block scope version
const newArr = originalArray.map((num) =>{
    return (num*4);
});
console.log(newArr);

//------------------------------------------------------------------------------------------------------------
//Reduce()
//reduce() goes through the array, keeps adding (or combining) the values, and finally returns one result.
//Example 1.
const numberArr = [10,20, 30, 40, 50];

const sumNumbers = numberArr.reduce((acc,currval)=>(acc + currval),0);
// acc = accumulator, currval = current element, 0 = initial value.
console.log(sumNumbers);


//Example 2.
const score = [100,200,300,400,500];

let totalScore = score.reduce( function (acc, cval) {                   //with function keyword
    console.log(`Accumulator : ${acc}, CurrentVal : ${cval}`);
    return acc + cval;

},0)

console.log(totalScore);

let totalScore1 = score.reduce(  (acc, cval) => {                     //without function keyword
    console.log(`Accumulator : ${acc}, CurrentVal : ${cval}`);
    return acc + cval;

},0)

//Example 3.
const cart =[
    {
        item : 'JavaScript',
        price : 999
    },
    {
        item : 'Python',
        price : 1999
    },
    {
        item : 'PHP',
        price : 2999
    },
    {
        item : 'Data Science',
        price : 11999
    },
]

let totalprice = cart.reduce((acc, cval) => {
    console.log(`Accumulator : ${acc}, CurrentVal : ${cval}`);
    price = cval.price
    return acc + price;

},0)

console.log(totalprice);
