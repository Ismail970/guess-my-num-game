"use strict";

const resetBtn = document.querySelector(".again");
const score = document.querySelector(".score");
const hightScore = document.querySelector(".highscore");
const inputBox = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
let trueNum = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function(messages) {
  const message = document.querySelector(".message");
  message.innerHTML = messages;
}
const style = function(style1, style2, text) {
  const body = document.querySelector("body");
  const correctNumber = document.querySelector(".number");
  body.style.backgroundColor = style1;
  correctNumber.style.width = style2;
  correctNumber.innerHTML = text;
}


checkBtn.addEventListener("click", function () {
  const input = Number(inputBox.value);

  if (input === trueNum) {
    style("#60b347", "30rem", trueNum)
    displayMessage("✨ You win !");
    if (score.innerHTML > hightScore.innerHTML) {
      hightScore.innerHTML = score.innerHTML;
    }
  } else {
    if (input <= 20) {
      score.innerHTML--;
    }
    if (Number(score.innerHTML) <= 0) {
      displayMessage("You lose 👎");
      score.innerHTML = 0;
    }
    displayMessage(input > trueNum ? "Too high" : "Too low");
    if (input === trueNum - 1 || input === trueNum + 1) {
    displayMessage("So close !!");
  }
  }

  if (input <= 0 || input > 20) {
    displayMessage("Please enter a valid value");
    inputBox.value = "";
  }
});

resetBtn.addEventListener("click", function () {
  trueNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  score.innerHTML = 20;
  inputBox.value = "";
  style("#222", "15rem", "?")
});
