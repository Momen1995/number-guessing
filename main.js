"use strict";

const inputNum = document.getElementById("input-number");
const submitBtn = document.querySelector(".btn-submit");
const startBtn = document.querySelector(".btn-start");
const measure = document.querySelector(".measure");
const guessingNum = document.getElementById("guessing-num");

let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
console.log(SECRET_NUMBER);

function displayText(text) {
  measure.textContent = text;
}

submitBtn.addEventListener("click", function () {
  const input = Number(inputNum.value);
  
  if (input > SECRET_NUMBER) {
    displayText("Too High😃");
    guessingNum.textContent = input;
  } else if (input < SECRET_NUMBER) {
    displayText("Too Low!😐");
    guessingNum.textContent = input;
  } else if (input === SECRET_NUMBER) {
    displayText("You win!🏆");
    guessingNum.textContent = input;

    startBtn.removeAttribute("disabled")
  }
});

startBtn.addEventListener("click",function(){
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
  console.log(SECRET_NUMBER)
  displayText("")
  guessingNum.textContent = ""
})
