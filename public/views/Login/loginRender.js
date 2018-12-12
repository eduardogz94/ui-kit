import { boxappLogin, boxappLoginBody } from "./login.js";
import { boxappHeaderRender } from "../Header/headerRender.js";
import { Router, trainingsRoute } from "../../../routes/public-loader.js";

import {
  session,
  logUser,
  deleteSession
} from "../../../container/publicSession.js";

import {
  createCardText,
  createTextElement,
  appendsCreateCol,
  lengthValidator,
  createCol
} from "../../../src/js/sivaFunctions.js";

let boxappLog = boxappLogin();
let loginBody = boxappLoginBody();

export const boxappLoginRender = () => {
  let loginTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-3 mt-4",
    "Login!"
  );

  let mainCol = appendsCreateCol("col-8", loginTitle);
  mainCol.css = "offset-3 mt-5";

  mainCol.appendMultipleElements(createCol(boxappLog, "col-8"));

  return mainCol;
};

export const boxappLoginAfterDOM = () => {
  boxappLog.addMultipleObjectsToBody(
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

    if (
      userValidator &&
      userValue === "eduardo" &&
      passValidator &&
      passValue === confirmValue
    ) {
      // Aqui va el request
      logUser("eduardo");

      if (session.logged) {
        let loggedTabs = boxappHeaderRender
          .getTabs()
          .filter(tab => tab.innerText === "HOME");

        boxappHeaderRender.resetTabs();

        let profile = document.createElement("a");
        profile.innerHTML = `All Trainings`;

        let logout = document.createElement("a");
        logout.innerHTML = `Logout`;

        profile.onclick = function(ev) {
          Router.resetView();
          let trainingR2 = trainingsRoute();
          Router.load(trainingR2);
        };

        boxappHeaderRender.addExistingTab(loggedTabs[0]);
        boxappHeaderRender.addNewTab(profile);
        boxappHeaderRender.addNewTab(logout);
        Router.resetView();

        let trainingR = trainingsRoute();
        Router.load(trainingR);

        logout.onclick = deleteSession;
      }
    }
  };

  boxappLog.addToCardFooter(
    createCardText("animated jello text-primary", "Signup instead? Click Here!")
  );
};
