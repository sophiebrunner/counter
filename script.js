const countingNumberText = document.querySelector("#counting-number");
let countingNumber = 0;
const main = document.querySelector("main");
const resetButton = document.querySelector("#reset-button");

countingNumberText.innerText = countingNumber;

function counterUp() {
  countingNumber++;
  countingNumberText.innerText = countingNumber;
  if (countingNumber === 101) {
    countingNumber = 0;
    countingNumberText.innerText = countingNumber;
  }
}

main.addEventListener("click", counterUp);

document.addEventListener("keypress", function (e) {
  if (e.key === "Space") {
    counterUp();
  }
});

resetButton.addEventListener("click", function () {
  countingNumber = 0;
  countingNumberText.innerText = countingNumber;
});
