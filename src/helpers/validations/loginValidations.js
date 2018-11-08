// /**
//  * Validating Password
//  */
let inputPassword = document.querySelector("#password");
inputPassword.querySelector("#password-input").onchange = validatePassword;

function validatePassword(event) {
  inputPassword.validatePassword(8);
}

// /**
//  * Validating Text
//  */
let inputText = document.querySelector("#username");
inputText.querySelector("#username-input").onchange = validateValue;

function validateValue(event) {
  inputText.validateValue(8);
}