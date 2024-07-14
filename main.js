"use strict";

const inputNum = document.getElementById("input-number");
const submitBtn = document.querySelector(".btn-submit");
const startBtn = document.querySelector(".btn-start");
const measure = document.querySelector(".measure");
const length = document.querySelector(".length");
const guessingNum = document.getElementById("guessing-num");

const allGuessNumber = [];
let SECRET_NUMBER = Math.trunc(Math.random() * 30 + 1);
console.log(SECRET_NUMBER);

// display feedback text
function displayText(text) {
  measure.textContent = text;
}

submitBtn.addEventListener("click", function () {
  const input = Number(inputNum.value);

  // Check if the guess is too high, too low, or correct
  if (input > SECRET_NUMBER) {
    displayText("Too High😃");
  } else if (input < SECRET_NUMBER) {
    displayText("Too Low!😐");
  } else if (input === SECRET_NUMBER) {
    displayText("Congrats! You win🏆");
    length.textContent = allGuessNumber.length;

    startBtn.removeAttribute("disabled");
    submitBtn.setAttribute("disabled", "");
  }
  allGuessNumber.push(input);
  guessingNum.textContent = allGuessNumber.join(",");
  inputNum.value = "";
});

// Event listener for the start button
startBtn.addEventListener("click", function () {
  SECRET_NUMBER = Math.trunc(Math.random() * 30 + 1);
  console.log(SECRET_NUMBER);
  displayText("");
  guessingNum.textContent = "";
  startBtn.setAttribute("disabled", "");
  submitBtn.removeAttribute("disabled");
});
