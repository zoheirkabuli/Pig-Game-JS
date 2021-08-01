'use strict';

//selecting element
const firstScoreEl = document.querySelector('#score--0');
const secondScoreEl  = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

//starting conditions
firstScoreEl.textContent = 0;
secondScoreEl.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice func
btnRoll.addEventListener('.click',function() {
  //1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

//  2.Display Dice
  diceEl.classList.remove('hidden');

//  3.check for roll 1
});