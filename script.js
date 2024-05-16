'use strict';

// each player
const playerOne = document.getElementById('name--0');
const playerTwo = document.getElementById('name--1');

// each players score (hard code to check)
const playerOneTotaltScore = (document.getElementById(
  'score--0'
).textcontent = 12);
const playerTwoTotaltScore = (document.getElementById(
  'score--1'
).textContent = 24);

// each players current score
let playerOneCurrentScore = document.getElementById('current--0');
let playerTwoCurrentScore = document.getElementById('current--1');
let currentScore = 0;

//each button (hard coding to make sure they're selected)
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold');

// calculate dice number
const diceEl = document.querySelector('.dice');

// to show the number of dice make a function to select the number for the png

// WHAT DO WE WANT THE USER TO BE ABLE TO DO / INTERACT WITH

// USER CAN CLICK ROLL DICE
btnRollDice.addEventListener('click', function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.src = `dice-${dice}.png`;
  if (dice != 1) {
    console.log(`you rolled a ${dice}`);
    currentScore += dice;
    console.log(currentScore);
    playerOneCurrentScore.textContent = currentScore;
  } else {
    currentScore = 0;
    playerOneCurrentScore.textContent = currentScore;
    console.log('turn over');
  }
});

//         THE CURRENT SCORE WILL GET UPDATED TO THAT NUMBER AND THEN THE NEXT ROLL
//         IF THE ROLL IS A 1 THEN THE SCORE RESETS AND GOES TO THE OTHER PLAYERRRRRR

// USER CAN CLICK ON HOLD AND THEN THEIR CURRENT SCORE WILL BE STORED AND IT WILL SWITCH TO THE OTHER PLAYER WHILE RESETTING THE CURRENT SCORE TO 0
// STORED SCORE += WHATEVER THE CURRENT SCORE WAS UNTIL USER REACHES 50

// USER CAN HIT RESET AND COMPLETELY RESET THE GAME RESTORING EVERYTHING TO ZERO
