/** Signup Template */

const signupCard = new EgCard("card-danger", "signup");

const signupCol = new EgCol("col-12");
const signupCardCol = createCol(signupCard, "col-4", "offset-4");

/** Template Title */
const signupTitle = document.createElement("h1");
signupTitle.setAttribute(
  "class",
  "animated bounceInRight text-danger text-center"
);
signupTitle.innerHTML = "Sign Up Form";

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

let inputCard1 = createInput(
  "form-control",
  "email",
  "danger-card1",
  "col-12",
  "email"
);

let inputCard2 = createInput(
  "form-control",
  "password",
  "password",
  "col-12",
  "password"
);
inputCard2.css = "mt-2";

let inputCard3 = createInput(
  "form-control",
  "password",
  "confirm",
  "col-12",
  "confirm password"
);
inputCard3.css = "mt-2 mb-3";

let buttonCard = createButton("btn-danger", "Sign Now", "signup", "col-12");
buttonCard.setAttribute("mt", "mt-2")

signupInputsCol.addMultipleObjects(
  inputCard1,
  inputCard2,
  inputCard3,
  buttonCard
);

buttonCard.onclick = function() {
  setValidationEmail(inputCard1, "@hotmail.com"),
    setValidationLength(inputCard2, 8),
    setValidationLength(inputCard3, 8);
};

signupCard.addMultipleObjectsToBody(signupInputsCol);
