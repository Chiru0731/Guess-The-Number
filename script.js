'use strict';

//the goal is to find secret number
let mysteryNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /*3 conditions when there is no input, 
    when guessed number is greater,
    when guessed number is lower.
  */

  // 1ST WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === mysteryNumber) {
    document.querySelector('.message').textContent = 'Correct Guess';
    document.querySelector('.message').style.background = '#ffffff';
    document.querySelector('.message').style.color = '#222';
    document.querySelector('.number').textContent = mysteryNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== mysteryNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > mysteryNumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent = 'game lost';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  mysteryNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
