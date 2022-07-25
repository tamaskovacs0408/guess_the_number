const submitBtn = document.querySelector('.js-btn');
const numberGeneratorBtn = document.querySelector('.js-generate');
const newGameBtn = document.querySelector('.js-new_game');
let outputText = document.querySelector('.js-outputtext');
let inputNumber = document.querySelector('.js-input')
let attemptCounterDisplay = document.querySelector('.js-counter');
let attempts = 0;
let randomNumber;


function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


randomNumber = generateRandom(1, 100)

submitBtn.addEventListener('click', () => {
  let guess = inputNumber.value;
  if (guess === '') {
    outputText.innerHTML = 'Invalid input, please enter a number!'
  }
  if (guess == randomNumber) {
    outputText.innerHTML = `<strong>
        Congratulations! The number is ${randomNumber}!
      </strong>`;
    attempts += 1;
    submitBtn.style.visibility = 'hidden';
  } else if (guess < randomNumber) {
    outputText.innerHTML = 'You guessed too low!';
    attempts += 1;
  } else if (guess > randomNumber) {
    outputText.innerHTML = 'You guessed too high!';
    attempts += 1;
  }
  attemptCounterDisplay.innerHTML = attempts;
});

newGameBtn.addEventListener('click', () => {
  attempts = 0;
  randomNumber = generateRandom(1, 100)
  inputNumber.value = null;
  attemptCounterDisplay.innerHTML = '';
  outputText.innerHTML = 'Enter your guess';
  submitBtn.style.visibility = 'visible';
})

