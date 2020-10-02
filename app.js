// import functions and grab DOM elements

import { willYouWin } from './utils.js';

const play = document.getElementById('play');
const reset = document.getElementById('reset');

//const npcSpan = document.getElementById('npc');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const tieSpan = document.getElementById('ties');
const resetSpan = document.getElementById('resets');

// set initial state

let win = 0;
let lose = 0;
let tie = 0;
let resetIt = 0;

console.log(win, lose, tie, resetIt);

// define DOM utitlies

play.addEventListener('click', () => {

    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value;
    const results = willYouWin(userSelection);
   
    if (results === 'win') win++;
    if (results === 'lose') lose++;
    if (results === 'tie') tie++;

    winSpan.textContent = win;
    lossSpan.textContent = lose;
    tieSpan.textContent = tie;

});

const hardReset = () => {
    resetSpan.textContent = resetIt;
    resetIt++;
};

reset.addEventListener('click', hardReset);


