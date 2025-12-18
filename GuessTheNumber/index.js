const randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.getElementById('guessField');
const submit = document.querySelector('#sub');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = userInput.value;
    validateGuess(guess)
    })
}

function validateGuess(guess){

}

function checkGuess(){

}

function displayMessage(guess){

}

function displayGuess(guess){
    
}

function newGame(){

}

function endGame(){

}

