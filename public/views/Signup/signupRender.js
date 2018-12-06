import { boxappSignup, boxappSignupBody } from "./signup.js";

import {
  createCardText,
  createTextElement,
  appendsCreateCol,
  lengthValidator,
  createCol
} from "../../../src/js/sivaFunctions.js";

let boxappSign = boxappSignup();
let signupBody = boxappSignupBody();

export const boxappSignupRender = () => {
  let signupTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-3 mt-4",
    "Signup now!"
  );

  let mainCol = appendsCreateCol("col-8", signupTitle);
  mainCol.css = "offset-3 mt-5";

  mainCol.appendMultipleElements(createCol(boxappSign, "col-8"));

  return mainCol;
};

export const boxappSignupAfterDOM = () => {
  boxappSign.addMultipleObjectsToBody(
    signupBody.usernameInput,
    signupBody.passwordInput,
    signupBody.signupButton
  );

  signupBody.signupButton.onclick = function(ev) {
    lengthValidator(signupBody.usernameInput, 8);
    lengthValidator(signupBody.passwordInput, 8);
  };

  boxappSign.addToCardFooter(
    createCardText(
      "animated jello text-primary",
      "Already have an account? Click here!"
    )
  );
};
