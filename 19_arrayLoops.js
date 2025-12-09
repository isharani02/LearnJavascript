//*** JavaScript High Order For Loops ***
//---------------------------------------------------------

//forof loop
//forof loop is a used to go through each value in a list or collection,such as array,string,map or sets.
//--------------------------------------------------------------------------------------------------------

//Syntax:
//-------------------------------
/*for (const element of iterable) {
    // code to run for each element
}*/

//Examples :
const greeting = "Hello World!";
for (const greet of greeting) {
  console.log(greet);
}

const flowers = ["Rose", "Lotus", "Marigold"];
for (const flower of flowers) {
  console.log(flower); 
}

//Maps
//Storess unique key value pair and preserves the order of the data

const map = new Map();
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('UK',"United Kingdom")
console.log(map);

for (const [key,value] of map){
    console.log(key , ':-' ,value);
}

const myObj ={
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key,value] of myObj){
//     console.log(key, ':-', value);
// }  //Output : Object is not iterable

//forin loop
//forin loop is used to go through each key of value
//-----------------------------------------------------------

const myObject ={
    JS : 'JavaScript',
    CPP : 'C++',
    Ruby : 'Ruby',
    Swift : 'Swift by apple'
}

for(const key in myObject){
    console.log(key);               //Only gives keys not value
}

for(const key in myObject){
    console.log(`${key} is standfor ${myObject[key]}`);    //Gives key and value
}

const programming = ['JavaScript', 'C++','Ruby','Swift'];
for(const key in programming){
    console.log(` index : ${key} value : ${programming[key]}`);
}

//forEach loop
// Used to run a function for each item in an array, one by one.
//--------------------------------------------------------------
/*
Syntax:
Using a regular function or an arrow function

array.forEach(function(element, index, array) {
    // code to run for each element
});

array.forEach((element, index, array) => {
    // code to run for each element
});



*/

const coding = ['Python', 'C++','C','Express'];
//Using a regular function
console.log("Using a regular function");
coding.forEach(function (item){
    console.log(item);
})

//Using an arrow function
console.log("Using an arrow function");
coding.forEach((val)=>{
    console.log(val);
})

//Predefined Function
function printMe(item){
    console.log(item);
}
//Using a predefined function as a callback
coding.forEach(printMe);

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : 'JS'
    },
    {
        languageName : 'Python',
        languageFileName : 'PY'
    },
    {
        languageName : 'C Programming',
        languageFileName : 'C'
    }
];

// Using forEach to print only the language names
console.log("Using forEach to print only the language names")

myCoding.forEach((item) =>{
    // Accessing and printing the languageName property of each object
    console.log(item.languageName);
})
