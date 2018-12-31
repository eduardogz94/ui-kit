import { boxappLoginCard, boxappLoginBody } from "./login.js";
import { boxappHeaderComponent } from "../Header/headerRender.js";
import { boxappProfileTab, boxappLogoutTab } from "../Header/header.js";
import { Router } from "../../../routes/index.js";
import { session, logUser } from "../../../container/session.js";

import {
  createCardText,
  createTextElement,
  appendsCreateCol,
  lengthValidator,
  createCol
} from "../../../src/core/sivaFunctions.js";


export const boxappLoginComponent = () => {
  let loginCard = boxappLoginCard();
  let loginBody = boxappLoginBody();
  
  let loginTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-3 mt-4",
    "Login!"
  );

  let component = appendsCreateCol("col-8", loginTitle);
  component.css = "offset-3 mt-5";

  component.appendElements(createCol(loginCard, "col-8"));

  let render = () => {
    loginCard.addMultipleObjectsToBody(
      loginBody.usernameInput,
      loginBody.passwordInput,
      loginBody.confirmPassword,
      loginBody.loginButton
    );

    loginBody.loginButton.onclick = function(ev) {
      let userInput = loginBody.usernameInput;
      let passInput = loginBody.passwordInput;
      let confirmPassword = loginBody.confirmPassword;

      let userValidator = lengthValidator(userInput, 6);
      let passValidator = lengthValidator(passInput, 6);

      let userValue = userInput.getInputValue().value;
      let passValue = passInput.getInputValue().value;
      let confirmValue = confirmPassword.getInputValue().value;

      if ( userValidator && userValue === "eduardo" && passValidator && passValue === confirmValue) {
        // Aqui va el request
        logUser("eduardo");

        if (session.getContext().logged) {
          let loggedTabs = boxappHeaderComponent.getTabs()
            .filter(tab => tab.innerText === "HOME");

          boxappHeaderComponent.resetTabs();
          boxappHeaderComponent.addExistingTab(loggedTabs[0]);
          boxappHeaderComponent.addNewTab(boxappProfileTab());
          boxappHeaderComponent.addNewTab(boxappLogoutTab());

          Router.resetView();
          Router.navigate("/Trainings");
        } else {
          console.log("Youre already logged in.");
        }
      }
    };

    loginCard.addToCardFooter(
      createCardText(
        "animated jello text-primary",
        "Signup instead? Click Here!"
      )
    );
  };

  return { component, render };
};
