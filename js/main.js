//generate a random number and declare variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let statusOutput = document.getElementById('output-status');
let guessInput = document.getElementById('guess-input');
const guessButton = document.querySelector('.guess-form')
let counter = 0;
let myInput = 0
let i = 0;
let repeat = []; //empty array to check repeat answer

function checkRepeat() {
    for (i = 1; i < repeat.length; i++) {
        if (myInput === repeat[i - 1]) {
            alert('Are you feeling okay? You keep guessing the same number!');
        } else {
            console.log('You have different numbers');
        }
    }
}
function checkGuess() {
    let guessValue = Number(guessInput.value);

    if (Number.isNaN(guessValue) === true) {
        alert("This is an invalid input, please enter your number again");
    }

    if (counter < 4) {
        if (guessValue < randomNumber) {
            statusOutput.value = "Your guess is too small! Guess again.";
        }
        if (guessValue > randomNumber) {
            statusOutput.value = "Your guess is too large! Guess again.";
        }
        if (guessValue === randomNumber) {
            statusOutput.value = "You guessed the correct number! It was " + randomNumber + "." +
                " It only took you " + counter + " tries to get right. Game Over!";
        }
    }
    else if (counter <= 4) {
        repeat = [];
        //update the status
        statusOutput.value = "You didn't guess the correct number in " + (counter + 1) + " turns. "  + "The number was " + " "  + randomNumber + '.';

        let turns = document.querySelector('#output-turns p');
        turns.innerHTML = `You took ${counter + 1} turns`;
        return randomNumber;
    }
    counter++;

    let turns = document.querySelector('#output-turns p');
    turns.innerHTML = `You took ${counter} turns`;
}

guessButton.addEventListener('submit', () => {
    event.preventDefault();
    myInput = document.querySelector('#guess-input').value;
    repeat.push(myInput);
    console.log(repeat);
  //reload page once i < 5 to refresh
    if (i < 5) {
    } else {
      location.reload();
    }
    checkRepeat();
    checkGuess();
    guessButton.reset();
});
