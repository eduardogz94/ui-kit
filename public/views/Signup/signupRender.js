import { boxappSignupCard, boxappSignupBody } from "./signup.js";

import {
  createCardText,
  createTextElement,
  appendsCreateCol,
  lengthValidator,
  createCol
} from "../../../src/core/sivaFunctions.js";

export const boxappSignupComponent = () => {
  let signupCard = boxappSignupCard();
  let signupBody = boxappSignupBody();

  let signupTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-3 mt-4",
    "Signup now!"
  );

  let component = appendsCreateCol("col-8", signupTitle);
  component.css = "offset-3 mt-5";

  component.appendElements(createCol(signupCard, "col-8"));

  let render = () => {
    signupCard.addMultipleObjectsToBody(
      signupBody.usernameInput,
      signupBody.passwordInput,
      signupBody.signupButton
    );

    signupBody.signupButton.onclick = function(ev) {
      lengthValidator(signupBody.usernameInput, 8);
      lengthValidator(signupBody.passwordInput, 8);
    };

    signupCard.addToCardFooter(
      createCardText(
        "animated jello text-primary",
        "Already have an account? Click here!"
      )
    );
  };

  return { component, render };
};
