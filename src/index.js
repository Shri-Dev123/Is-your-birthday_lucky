const birthdayInput = document.querySelector(".input");
const luckyNumberInput = document.querySelector("#number-input");
const checkLuckButton = document.querySelector("#luck-button");
const output = document.querySelector(".output");
const luckyForm = document.querySelector("#lucky-form");

function outputMessage(message) {
  output.innerText = message;
}

luckyForm.onsubmit = doNotRefresh;

function doNotRefresh(event) {
  event.preventDefault();
}
function CheckYourLuck() {
  let convertedBirthdate = birthdayInput.value.replaceAll("-", "");
  let luckyNumber = Number(luckyNumberInput.value);
  let sum = 0;
  for (let i = 0; i < convertedBirthdate.length; i++) {
    sum += Number(convertedBirthdate.charAt(i));
    if (sum % luckyNumber === 0) {
      outputMessage("your birthday is lucky..😀");
    } else {
      outputMessage("your birthday is not lucky...😔");
    }
  }
}
checkLuckButton.addEventListener("click", CheckYourLuck);
