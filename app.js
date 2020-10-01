// import functions and grab DOM elements

const play = document.getElementById('play');
const reset = document.getElementById('reset');

const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const tiesSpan = document.getElementById('ties');
const resetSpan = document.getElementById('reset');

let winTotal = 0;
let lossTotal = 0;
let tieTotal = 0;
let resetTotal = 0;

// set initial state

// define DOM utitlies

const willYouWin = () => {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let rpc = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    const npcSelection = rpc;
    console.log(rpc);
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value;

    if (userSelection === 'rock' && npcSelection === 'scissors') {
        winTotal++;
    }
    if (userSelection === 'paper' && npcSelection === 'rock') {
        winTotal++;
    }
    if (userSelection === 'scissors' && npcSelection === 'paper') {
        winTotal++;
    }
    if (userSelection === 'rock' && npcSelection === 'paper') {
        lossTotal++;
    }
    if (userSelection === 'paper' && npcSelection === 'scissors') {
        lossTotal++;
    }
    if (userSelection === 'scissors' && npcSelection === 'rock') {
        lossTotal++;
    }
    if (userSelection === 'rock' && npcSelection === 'rock') {
        tieTotal++;
    }
    if (userSelection === 'paper' && npcSelection === 'paper') {
        tieTotal++;
    }
    if (userSelection === 'scissors' && npcSelection === 'scissors') {
        tieTotal++;
    }
};

play.addEventListener('click', willYouWin) ;

const hardReset = () => {
    winTotal = 0;
    lossTotal = 0;
    tieTotal = 0;
    resetTotal++;
};

reset.addEventListener('click', hardReset);

// set event listeners to update state and DOM

