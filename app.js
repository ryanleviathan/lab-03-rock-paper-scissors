// import functions and grab DOM elements

const play = document.getElementById('play');
const reset = document.getElementById('reset');

const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const tiesSpan = document.getElementById('ties');
const resultSpan = document.getElementById('results');
const resetSpan = document.getElementById('reset');

// set initial state

let winTotal = 0;
let lossTotal = 0;
let tieTotal = 0;
let resetTotal = 0;

// define DOM utitlies

let rockPaperScissors = ['rock', 'paper', 'scissors'];
let rpc = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

const userWon = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value;

    if (rpc === 'rock') {
        if (userSelection === 'paper')
            winTotal++;
    }
    if (rpc === 'paper') {
        if (userSelection === 'scissors')
            winTotal++;
    }
    if (rpc === 'scissors') {
        if (userSelection === 'rock')
            winTotal++;
    }
};

const userLost = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value;

    if (rpc === 'rock') {
        if (userSelection === 'scissors')
            lossTotal++;
    }
    if (rpc === 'paper') {
        if (userSelection === 'rock')
            lossTotal++;
    }
    if (rpc === 'scissors') {
        if (userSelection === 'paper')
            lossTotal++;
    }
};

const userTied = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value;

    if (rpc === userSelection) {
        tieTotal++;
    }
};








//const playAgainstNpc = () => {
    //values
    //const selectedRadioButton = document.querySelector('input:checked');
    //const userInput = selectedRadioButton.nodeValue;
    //changes to state and DOM
    //const zeroOneOrTwo = (getZeroOneOrTwo);
    //const randomNpcChoice = (getNpcChoice);
    //const won = userWon(userInput, randomNpcChoice);
    //const lost = userLost(userInput, ran)
    //cosnt tied =

    //if (won) {
    //    winTotal++;
    //}

    //if ()
//}

play.addEventListener('click', () => {

});


reset.addEventListener('click', () => {
    winTotal = 0;
    lossTotal = 0;
    tieTotal = 0;
    resetTotal++;
});

// set event listeners to update state and DOM

