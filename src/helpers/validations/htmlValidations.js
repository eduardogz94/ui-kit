/**
 * Validating Email
 */
let inputEmail = document.querySelector("#email");
inputEmail.querySelector("#email-input").onchange = validateEmail;

function validateEmail(event) {
  inputEmail.validateEmail("@gmail.com");
  inputEmail.validateEmail("@hotmail.com");
}

/**
 * Validating Password
 */
let inputPassword = document.querySelector("#password");
inputPassword.querySelector("#password-input").onchange = validatePassword;

function validatePassword(event) {
  inputPassword.validatePassword(8);
}

/**
 * Validating Text
 */
let inputText = document.querySelector("#text");
inputText.querySelector("#text-input").onchange = validateValue;

function validateValue(event) {
  setValidationLength(inputText, 8);
}
