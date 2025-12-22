let randomNumber = parseInt(Math.random() * 100 + 1);
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
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess =parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100!');
    } else {
        prevGuess.push(guess);
    }

    if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over!`)
        displayMessage(`Random number was ${randomNumber}`);
        endGame();
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Your guess is correct!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too Low!`);
    
    } else if (guess > randomNumber) {
        displayMessage(`Too High!`);
    }

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`;
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);  
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage('');
    playGame = true;
    })
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

