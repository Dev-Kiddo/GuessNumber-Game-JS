"use strict";

const againBtn = document.querySelector(".section-1__btn");

// console.log(againBtn);

const display = document.querySelector(".section-3__display");

const userInput = document.querySelector(".section-4__input");

const guessCheckBtn = document.querySelector(".section-4__btn");

const guessPreductionText = document.querySelector(".section-4__guess-Text");

const currentScore = document.querySelector(".section-4__c-score");

const highScore = document.querySelector(".section-4__h-score");

// -----------------------------
// Generating Random Numbers
// -----------------------------

let secretGuess = Math.trunc(Math.random() * 20) + 1;

// console.log(secretGuess);

// -----------------------------
// scores
// -----------------------------

let currentScoreCount = 20;
let highScoreCount = 20;

// -----------------------------
// Check Btn Implementations
// -----------------------------

guessCheckBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const userGuess = Number(userInput.value);
  //   --------------------------
  // No input
  //   --------------------------
  if (!userGuess) {
    guessPreductionText.textContent = "❌ No number";
    //   --------------------------
    // Guess Correct
    //   --------------------------
  } else if (userGuess === secretGuess) {
    guessPreductionText.textContent = "you've Got it 🥳";

    display.textContent = secretGuess;

    highScore.textContent = currentScoreCount;
    //   --------------------------
    // Guess less
    //   --------------------------
  } else if (userGuess < secretGuess) {
    if (currentScoreCount > 0) {
      guessPreductionText.textContent = "Your Guess is Low 📉";

      --currentScoreCount;

      currentScore.textContent = currentScoreCount;
    } else {
      guessPreductionText.textContent = "You lost the game";
    }

    //   --------------------------
    // Guess greater than limit
    //   --------------------------
  } else if (userGuess > 21) {
    guessPreductionText.textContent = "Please enter valid guess";
    //   --------------------------
    // Guess High
    //   --------------------------
  } else if (userGuess > secretGuess) {
    if (currentScoreCount > 0) {
      guessPreductionText.textContent = "Your Guess is High 📈";

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

  userInput.value = "";
  display.textContent = "";
  currentScore.textContent = "";
  guessPreductionText.textContent = "Keep guessing...";
});
