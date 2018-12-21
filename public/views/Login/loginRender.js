import { boxappLogin, boxappLoginBody } from "./login.js";
import { boxappHeaderRender } from "../Header/headerRender.js";
import { boxappProfileTab, boxappLogoutTab } from "../Header/header.js";
import { Router, trainingsRoute } from "../../../routes/public-loader.js";
import { session, logUser } from "../../../container/publicSession.js";
import { loginRequest } from "../../requests/login.js";

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

  loginBody.loginButton.onclick = async function(ev) {
    let userInput = loginBody.usernameInput;
    let passInput = loginBody.passwordInput;
    let confirmPassword = loginBody.confirmPassword;

    let userValidator = lengthValidator(userInput, 6);
    let passValidator = lengthValidator(passInput, 6);

    let userValue = userInput.getInputValue().value;
    let passValue = passInput.getInputValue().value;
    let confirmValue = confirmPassword.getInputValue().value;

    if (userValidator && passValidator && passValue === confirmValue) {
      const response = await loginRequest([userValue, passValue]);
      console.log(response);
      if (response.status === 200) {
        logUser(userValue);
      }

      if (session.getContext().logged) {
        let loggedTabs = boxappHeaderRender
          .getTabs()
          .filter(tab => tab.innerText === "HOME");

        boxappHeaderRender.resetTabs();
        boxappHeaderRender.addExistingTab(loggedTabs[0]);
        boxappHeaderRender.addNewTab(boxappProfileTab());
        boxappHeaderRender.addNewTab(boxappLogoutTab());

        let trainingR = trainingsRoute();

        Router.resetView();
        Router.load(trainingR);
      } else {
        console.log("Youre already logged in.");
      }
    }
  };

  boxappLog.addToCardFooter(
    createCardText("animated jello text-primary", "Signup instead? Click Here!")
  );
};
