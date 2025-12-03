//**Arrow functions in JavaScript**
//------------------------------------------------------

const user = {
    userName : "Isha",
    greetUser : function(){
        console.log(`Hi, ${this.userName}`);

        console.log(this);          // refer to current scope context, this usually refer to use in objects only
    }
};

console.log(user.greetUser());
user.userName="Ishita";
console.log(user.greetUser());

console.log(this);                  //  under node env retuen empty object, in broser returns window elements

function newUser(){
    userName = "Isha",
    console.log(this);
    //console.log(this.userName);
}

newUser();

// Regular Funtion stored in a variable
const subNum = function(num1,num2){
    let ans = num1+num2;
    //console.log(ans);
    return ans;

}
console.log(subNum(9,3));

// () => {}
// Arrow Function
const addNum = (num1,num2) => {
    let ans = num1-num2;
    //console.log(ans);
    return ans;
}
console.log(addNum(9,3));

// Implicit return Arrow Function
// remove curly braces and in same line write return statement without return keyword
const mulNum = (num1,num2) => num1*num2;
console.log(mulNum(9,3));

// The return statement can be wrapped in paranthesis, object can also be returned using this method
const divNum = (num1,num2) => (num1/num2);
console.log(divNum(9,3));

const greeting = (name) =>{
    console.log(`Good Morning ${name}!`);
};
greeting('Isha');
