//** IIFE in JavaScript **
//----------------------------------------------------------

// IIFE (Immediately Invoked Function Expression) 
// A function in JavaScript that runs immediately after it is created. 
// To avoid polluting the global scope.


//Simple function declaration(Not an IIFE)
//------------------------------------
function dbSQL(){
    console.log(`MySQL DB CONNECTED.`);
};

//IIFE
//-------------------------------

//Note:  Wrap whole function in a paranthesis and execute by giving paranthesis at the end with semicolon.

 //Named IIFE
(function dbMongo(){
    console.log(`MongoDB Connected.`);
})();

// Arrow function IIFE with parameter
((name)=>{
    console.log(`Oracle DB Connected ${name}`);
})("Isha");