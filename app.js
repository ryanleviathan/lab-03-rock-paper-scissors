// import functions and grab DOM elements

const play = document.getElementById('play');
const reset = document.getElementById('reset');

const pcSpan = document.getElementById('pc');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const tieSpan = document.getElementById('ties');
const resetSpan = document.getElementById('reset');

// set initial state

let win = 0;
let lose = 0;
let tie = 0;
let resetIt = 0;

//Object.assign(winSpan, win);
//Object.assign(lossSpan, lose);
//Object.assign(tieSpan, tie);
//Object.assign(resetSpan, resetIt);

console.log(win, lose, tie, resetIt);

// define DOM utitlies

const willYouWin = () => {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let rpc = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    const npcSelection = rpc;
    console.log(rpc);
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value;
    console.log(userSelection);

    if (userSelection === 'rock' && npcSelection === 'scissors') {
        win++;
    }
    if (userSelection === 'paper' && npcSelection === 'rock') {
        win++;
    }
    if (userSelection === 'scissors' && npcSelection === 'paper') {
        win++;
    }
    if (userSelection === 'rock' && npcSelection === 'paper') {
        lose++;
    }
    if (userSelection === 'paper' && npcSelection === 'scissors') {
        lose++;
    }
    if (userSelection === 'scissors' && npcSelection === 'rock') {
        lose++;
    }
    if (userSelection === 'rock' && npcSelection === 'rock') {
        tie++;
    }
    if (userSelection === 'paper' && npcSelection === 'paper') {
        tie++;
    }
    if (userSelection === 'scissors' && npcSelection === 'scissors') {
        tie++;
    }
    console.log(win, lose, tie);
};

play.addEventListener('click', willYouWin) ;

const hardReset = () => {
    win = 0;
    lose = 0;
    tie = 0;
    resetIt++;
};

reset.addEventListener('click', hardReset);

// set event listeners to update state and DOM

