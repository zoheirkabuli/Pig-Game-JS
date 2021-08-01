'use strict';

//selecting element
const firstPLayerEl =  document.querySelector(`.player--0`);
const secondPLayerEl = document.querySelector(`.player--1`);
const firstScoreEl = document.querySelector('#score--0');
const secondScoreEl  = document.getElementById('score--1');
const firstCurrentEl = document.getElementById('current--0');
const secondCurrentEl = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // 0 is first player 1 is second player
let playing = true;

const switchPlayer = function() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).
    textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  firstPLayerEl.classList.toggle(`player--active`);
  secondPLayerEl.classList.toggle(`player--active`);
};

//starting conditions
firstScoreEl.textContent = 0;
secondScoreEl.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice func
btnRoll.addEventListener('click',function() {
  if (playing) {

    //1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3.check for roll 1
    if (dice !== 1) {
      //  Add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      //  switch to next player
      switchPlayer();

    }

  }
});

btnHold.addEventListener(`click`,function() {

  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      //finnish the Game
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
      document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
    } else {
      //switch player
      switchPlayer();
    }

  }
});