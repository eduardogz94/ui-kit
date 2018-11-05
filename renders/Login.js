let inputValidations = document.querySelector("#validation");
inputValidations.querySelector("#validation-input").onchange = validateLength;

function validateLength(event) {
  if (event.target.value.length === 1) {
    inputValidations.setFormControl("form-control-danger");
  } else if (event.target.value.length <= 8) {
    inputValidations.setFormControl("form-control-warning");
  } else {
    inputValidations.setFormControl("form-control-success");
  }
}

let inputEmail = document.querySelector("#email");
inputEmail.querySelector("#email-input").onchange = validateEmail;

function validateEmail(event) {
  inputEmail.validateEmail("@gmail.com");
  inputEmail.validateEmail("@hotmail.com");
}

let inputPassword = document.querySelector("#password");
inputPassword.querySelector("#password-input").onchange = validatePassword;

function validatePassword(event) {
  inputPassword.validatePassword(8);
}

let inputText = document.querySelector("#text");
inputText.querySelector("#text-input").onchange = validateValue;

function validateValue(event) {
  inputText.validateValue(8);
}

// http.post("http://192.168.1.101:3000/post", options).then(data => {
//   console.log(data);
// });
