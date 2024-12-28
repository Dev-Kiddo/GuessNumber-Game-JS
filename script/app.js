"use strict";

const againBtn = document.querySelector(".section-1__btn");

const display = document.querySelector(".section-3__display");

const userInput = document.querySelector(".section-4__input");

const guessCheckBtn = document.querySelector(".section-4__btn");

const guessPreductionText = document.querySelector(".section-4__guess-Text");

const currentScore = document.querySelector(".section-4__c-score");

const highScore = document.querySelector(".section-4__h-score");

// -----------------------------
// Generating Random Numbers
// -----------------------------

let secretGuess;

function generateSecret() {
  secretGuess = Math.trunc(Math.random() * 20) + 1;
  // console.log("secretGuess:", secretGuess);
}

generateSecret();

// scores

let currentScoreCount = 20;
let highScoreCount = 0;

//----------------------------
// Check Btn Implementations
//-----------------------------

console.log("secretGuess:", secretGuess);

guessCheckBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let userGuess = Number(userInput.value);

  if (!userGuess) {
    guessPreductionText.textContent = "❌ No number";
  } else if (userGuess === secretGuess) {
    if (currentScoreCount > highScoreCount) {
      highScoreCount = currentScoreCount;
      highScore.textContent = highScoreCount;
    }

    document.querySelector(".container").style.backgroundColor = "#367de8";

    guessPreductionText.textContent = "you've Got it 🥳";

    display.textContent = secretGuess;
  } else if (userGuess !== secretGuess) {
    if (currentScoreCount > 0) {
      userGuess < secretGuess ? (guessPreductionText.textContent = "Your Guess is Low 📉") : (guessPreductionText.textContent = "Your Guess is High 📈");

      --currentScoreCount;

      currentScore.textContent = currentScoreCount;
    } else {
      guessPreductionText.textContent = "You lost the game";
    }
  }
});

//--------------------------
// Again btn implementations
//--------------------------
againBtn.addEventListener("click", function (e) {
  e.preventDefault();

  generateSecret();
  display.textContent = "?";
  userInput.value = "";
  currentScore.textContent = "";
  guessPreductionText.textContent = "Keep guessing...";
  document.querySelector(".container").style.backgroundColor = "#23b052";

  currentScoreCount = 20;
  console.log("secadgin number:", secretGuess);
});
