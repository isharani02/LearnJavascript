//***JavaScript While And Do While Loop***
//-------------------------------------------------------------

//While Loop --> While loops execute a block of code as long as a specified condition is true.
let index = 0;
while(index <= 10){
    console.log(`Value of index : ${index}`);
    index = index + 2;
}

let heros = ['Batman','Hulk','Superman','Thor','Spiderman'];
let count = 0;
while(count < heros.length){
    console.log(`Heros Name : ${heros[count]}`);
    count++;
}


//Do While Loop --> A do-while loop runs the code once first, 
//and then keeps running it as long as the condition is true.

//Example:
let score = 11;
do{
    console.log(`Value of score : ${score}`);
    score++;
}while(score <= 10);

//Printing some tables using do while loop

let twoTable = 2;
let threeTable = 3;
//Table of 2
console.log("Table of 2");
do{
    console.log(twoTable);
    twoTable = twoTable + 2;
}while(twoTable <= 20);

//Table of three
console.log("Table of 3");
do{
    console.log(threeTable);
    threeTable = threeTable + 3;
}while(threeTable <= 30);