//First Step: Defining all the variables I need:
//The HTML-elements main, counting-number and reset-button to control the counter;
//Since they will not update during use of the Web App I declare them as constants;
//Two variables with numbers to count up the number and the background-color; intial value should be 0;
//Since the value of the numbers will be updated during use of the Web App I declare them with let;

const main = document.querySelector("main");
const countingNumberText = document.querySelector("#counting-number");
const resetButton = document.querySelector("#reset-button");

let countingNumber = 0;
let countingColor = 0;

//I declare the main function of the Counter;
//The countingNumber will be updated and constantly synchronized with the inner Text of the countingNumber-section;
//If countingNumber reaches 101, the counter will be resetted (set to 0);
function counterUp() {
  countingNumber++;
  countingNumberText.innerText = countingNumber;

  if (countingNumber === 101) {
    resetCounter();
  }
}

function resetCounter() {
  countingNumber = 0;
  countingNumberText.innerText = countingNumber;
}

//The second central function of the Counter is filling the background;
//The countingColor will be constantly updated like the countingNumber;
//To the main-section, which represents the background I want to fill,
//I synch the custom-property progress from my CSS (initial value: 0%) with the countingColor;
//If countingColor reaches 101; the background-color will be set to 0;
function fillBackground() {
  countingColor++;
  main.style.setProperty("--progress", countingColor + "%");

  if (countingColor === 101) {
    resetBackground();
  }
}

function resetBackground() {
  countingColor = 0;
  main.style.setProperty("--progress", countingColor + "%");
}

main.addEventListener("click", function () {
  counterUp();
  fillBackground();
});

document.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "Enter") {
    counterUp();
    fillBackground();
  }
});

resetButton.addEventListener("click", function () {
  resetCounter();
  resetBackground();
  resetButton.blur();
});
