/** Signup Template */

const signupCard = new EgCard("card-danger", "signup");

const signupCol = new EgCol("col-12");
const signupCardCol = createCol(signupCard, "col-4", "offset-4");

/** Template Title */
const signupTitle = createTextElement(
  "h1",
  "animated bounceInRight text-danger text-center",
  "Signup Form"
);

signupCol.appendChild(signupTitle);

signupCol.appendChild(signupCardCol);
document.body.appendChild(signupCol);

/** Signup Footer */
signupCard.addToCardFooter(
  createCardText("animated jello text-danger", "Login instead?")
);

/** Signup Header */
signupCard.addToCardHeader(
  createCardText("animated jello text-danger", "Signup Form")
);

/** Signup Body */
const signupInputsCol = new EgCol("col-8", "offset-2");

let inputCardEmail = createInput(
  "form-control",
  "email",
  "danger-card1",
  "col-12",
  "email"
);

let inputCardPassword = createInput(
  "form-control",
  "password",
  "password",
  "col-12",
  "password"
);
inputCardPassword.css = "mt-2";

let inputCOnfirmPassword = createInput(
  "form-control",
  "password",
  "confirm",
  "col-12",
  "confirm password"
);
inputCOnfirmPassword.css = "mt-2 mb-3";

let buttonCard = createButton("btn-danger", "Sign Now", "signup", "col-12");
buttonCard.setAttribute("mt", "mt-2");

signupInputsCol.addMultipleObjects(
  inputCardEmail,
  inputCardPassword,
  inputCOnfirmPassword,
  buttonCard
);

buttonCard.onclick = function() {
  setValidationEmail(inputCardEmail, "@hotmail.com"),
    setValidationLength(inputCardPassword, 8),
    setValidationLength(inputCOnfirmPassword, 8);
};

signupCard.addMultipleObjectsToBody(signupInputsCol);
