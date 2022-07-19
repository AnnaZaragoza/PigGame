'use strict';

const btnRollDice = document.querySelector('.roll');
const btnHoldPlayer = document.querySelector('.hold');
const btnNewGame = document.querySelector('.new');

const dice = document.querySelector('.dice');
const diceNumbers = document.querySelectorAll('.hidden');

let players = document.querySelectorAll('.player');
let player1 = document.querySelector('.left');
let player2 = document.querySelector('.right');
player1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // let's set player1 as the first player by default

const currentScores = document.querySelectorAll('.current');
const displayCurrentScorePlayer1 = currentScores[0].lastElementChild.innerHTML;
const displayCurrentScorePlayer2 = currentScores[1].lastElementChild.innerHTML;
let currentScorePlayer1 = parseInt(displayCurrentScorePlayer1);
let currentScorePlayer2 = parseInt(displayCurrentScorePlayer2);

const totalScores = document.querySelectorAll('.total');
const displayTotalScorePlayer1 = totalScores[0].innerHTML;
const displayTotalScorePlayer2 = totalScores[1].innerHTML;
let totalScorePlayer1 = parseInt(displayCurrentScorePlayer1);
let totalScorePlayer2 = parseInt(displayCurrentScorePlayer2);

// FUNCTIONS
// Display numbers on the dice:
const rollDice = function (randomNumber) {
  for (let i = 0; i < diceNumbers.length; i++) {
    if (randomNumber === i) {
      diceNumbers[i].classList.remove('hidden');
    } else {
      diceNumbers[i].classList.add('hidden');
    }
  }
};

// BUTTONS (EVENT LISTENERS)
// Dice:
btnRollDice.addEventListener('click', function handler(e) {
  let randomNumber = Math.trunc(Math.random() * 6);
  console.log(randomNumber);

  dice.style.display = 'block'; // Shows the dice

  rollDice(randomNumber);
  if (
    randomNumber !== 0 &&
    currentScorePlayer1 === 0 &&
    player1.style.backgroundColor === 'rgba(255, 255, 255, 0.5)'
  ) {
    currentScorePlayer1 = randomNumber + 1;
  } else if (
    randomNumber !== 0 &&
    currentScorePlayer1 !== 0 &&
    player1.style.backgroundColor === 'rgba(255, 255, 255, 0.5)'
  ) {
    currentScorePlayer1 += randomNumber + 1;
  } else if (
    randomNumber !== 0 &&
    currentScorePlayer2 === 0 &&
    player2.style.backgroundColor === 'rgba(255, 255, 255, 0.5)'
  ) {
    currentScorePlayer2 = randomNumber + 1;
  } else if (
    randomNumber !== 0 &&
    currentScorePlayer2 !== 0 &&
    player2.style.backgroundColor === 'rgba(255, 255, 255, 0.5)'
  ) {
    currentScorePlayer2 += randomNumber + 1;
  } else if (
    randomNumber === 0 &&
    totalScores[0].innerHTML > totalScores[1].innerHTML
  ) {
    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;
    players[0].innerHTML = 'YOU WIN !';
    players[0].style.color = '#660066';
    totalScores[0].style.color = '#660066';
    e.currentTarget.removeEventListener(e.type, handler);
  } else if (
    randomNumber === 0 &&
    totalScores[1].innerHTML > totalScores[0].innerHTML
  ) {
    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;
    players[1].innerHTML = 'YOU WIN !';
    players[1].style.color = '#660066';
    totalScores[1].style.color = '#660066';
    e.currentTarget.removeEventListener(e.type, handler);
  } else if (
    randomNumber === 0 &&
    totalScores[1].innerHTML === totalScores[0].innerHTML
  ) {
    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;
    for (let i = 0; i < players.length; i++) {
      players[i].innerHTML = 'WHAT A DRAW !';
      players[i].style.color = '#660066';
    }
    for (let i = 0; i < totalScores.length; i++) {
      totalScores[i].style.color = '#660066';
    }
    e.currentTarget.removeEventListener(e.type, handler);
  }
  currentScores[0].lastElementChild.innerHTML = currentScorePlayer1;
  currentScores[1].lastElementChild.innerHTML = currentScorePlayer2;
});

// Hold:
btnHoldPlayer.addEventListener('click', function handler(e) {
  if (
    player1.style.backgroundColor === 'rgba(255, 255, 255, 0.5)' &&
    totalScores[0].innerHTML == 0
  ) {
    totalScorePlayer1 = currentScorePlayer1;
    totalScores[0].innerHTML = currentScorePlayer1;
    player2.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    player1.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    currentScores[0].lastElementChild.innerHTML = 0;
    currentScorePlayer1 = 0;
    console.log('statement1');
  } else if (
    player2.style.backgroundColor === 'rgba(255, 255, 255, 0.5)' &&
    totalScores[1].innerHTML == 0
  ) {
    totalScorePlayer2 = currentScorePlayer2;
    totalScores[1].innerHTML = currentScorePlayer2;
    player1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    player2.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    currentScores[1].lastElementChild.innerHTML = 0;
    currentScorePlayer2 = 0;
    console.log('statement2');
  } else if (
    currentScorePlayer1 === 0 &&
    currentScorePlayer2 === 0 &&
    totalScorePlayer1 >= 0 &&
    totalScorePlayer2 >= 0
  ) {
    e.currentTarget.removeEventListener(e.type, handler);
    console.log('statement3');
  } else if (
    player1.style.backgroundColor === 'rgba(255, 255, 255, 0.5)' &&
    totalScores[0].innerHTML > 0
  ) {
    totalScorePlayer1 += currentScorePlayer1;
    totalScores[0].innerHTML = totalScorePlayer1;
    player2.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    player1.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    currentScores[0].lastElementChild.innerHTML = 0;
    currentScorePlayer1 = 0;
    console.log('statement4');
  } else if (
    player2.style.backgroundColor === 'rgba(255, 255, 255, 0.5)' &&
    totalScores[1].innerHTML > 0
  ) {
    totalScorePlayer2 += currentScorePlayer2;
    totalScores[1].innerHTML = totalScorePlayer2;
    player1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    player2.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    currentScores[1].lastElementChild.innerHTML = 0;
    currentScorePlayer2 = 0;
    console.log('statement4');
  }
});

// New Game:
btnNewGame.addEventListener('click', function () {
  location.reload();
});
