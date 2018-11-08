// let inputValidations = document.querySelector("#validation");
// inputValidations.querySelector("#validation-input").onchange = validateLength;

// function validateLength(event) {
//   if (event.target.value.length === 1) {
//     inputValidations.setFormControl("form-control-danger");
//   } else if (event.target.value.length <= 8) {
//     inputValidations.setFormControl("form-control-warning");
//   } else {
//     inputValidations.setFormControl("form-control-success");
//   }
// }

/**
 * Validating Email
 */
let inputEmail = document.querySelector("#email");
inputEmail.querySelector("#email-input").onchange = validateEmail;

function validateEmail() {
  setValidationEmail(inputEmail, "@gmail.com");
}

/**
 * Validating Password
 */
let inputPassword = document.querySelector("#password");
inputPassword.querySelector("#password-input").onchange = validatePassword;

function validatePassword(input) {
  setValidationLength(input, 8);
}

/**
 * Validating Text
 */
let inputText = document.querySelector("#text");
inputText.querySelector("#text-input").onchange = validateValue;

function validateValue(input) {
  setValidationLength(input, 8);
}

/**
 * Validating Card Password
 */
let inputCardPassword = document.querySelector("#password-card");
inputCardPassword.querySelector(
  "#password-card-input"
).onchange = validateCardPassword;

function validateCardPassword() {
  inputCardPassword.validatePassword(8);
}

/**
 * Validating Card Input Text
 */
let inputCardUsername = document.querySelector("#username");
inputCardUsername.querySelector("#username-input").onchange = validateCardValue;

function validateCardValue() {
  inputCardUsername.validateValue(8);
}
