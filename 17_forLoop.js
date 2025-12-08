//**JavaScript Lopps**
//-------------------------------------

// For Loop
// A for loop executes a block of code a specific number of times.
// Syntax: for(initialization; condition; increment/decrement) { ... }
//---------------------------------------------------------------------------

// Example: Simple for loop
for(let index=0;index<=10;index++){
    let element = index;
    console.log(element);
}

for (let i = 1; i <= 5; i++) {
    console.log("Iteration number:", i);
}

// Nested For Loop
// You can place one for loop inside another for loop
//---------------------------------------------------------------------

for(let i=1; i<=10; i++){
    console.log("Table of i = ", i);
    for(let j=1; j<=10; j++){
        //console.log("Inner loop :", j);
        console.log(i + '*' + j + '=' + i*j);
    }
    //console.log("Outer loop :", i);
}


// Break Keyword
// The break statement stops the loop entirely when a condition is met
//---------------------------------------------------------------------------------

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("The iteration number is i =", i);
        break;
    }
    console.log("Iteration Number : ", i);
}



// Continue Keyword
// The continue statement skips the current iteration and moves to the next
//----------------------------------------------------------------------------
for (let i = 1; i <= 5; i++) {
    if(i==3){
        console.log("The iteration number is i =", i);
        continue;
    }
    console.log("Iteration Number : ", i);
}

//For loop on array
//-----------------------------------
const heros = ['Shaktimaan','Thor','Spiderman','Superman'];
for(let i=0; i<heros.length; i++){
    const elements = heros[i];
    console.log(elements);
}
