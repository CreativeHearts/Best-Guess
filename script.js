'use strict';
let random = Math.trunc(Math.random() * 20) + 1;
let secretNumber = document.querySelector('.number');
const againBtn = document.querySelector('.again');

const checkBtn = document.querySelector('.check');
const startGuess = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guess = document.querySelector('.guess');

let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess === random) {
    startGuess.textContent = '🎉🎈Correct score';
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    secretNumber.textContent = random;
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (!guess) {
    startGuess.textContent = '⛔No Number';
  } else if (guess > random) {
    if (score > 1) {
      startGuess.textContent = '📈Too High!';
      score--;
      scoreEl.textContent = score;
    } else {
      startGuess.textContent = 'You lost the Game!';
      scoreEl.textContent = 0;
    }
  } else if (guess < random) {
    if (score > 1) {
      startGuess.textContent = '📈Too Low!';
      score--;
      scoreEl.textContent = score;
    } else {
      startGuess.textContent = 'You lost the Game!';
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  startGuess.textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  guess.value = '';
  secretNumber.textContent = random;
});
