import { boxappLogin, boxappLoginBody } from "./login.js";
import { boxappHeaderRender } from "../Header/headerRender.js";
import {
  Router,
  session,
  logUser,
  deleteSession,
  trainingsRoute
} from "../../routes/public-loader.js";

import {
  createCardText,
  createTextElement,
  appendsCreateCol,
  lengthValidator,
  createCol
} from "../../src/js/sivaFunctions.js";

let boxappLog = boxappLogin();
let loginBody = boxappLoginBody();

export const boxappLoginRender = () => {
  let loginTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-3 mt-5",
    "Login!"
  );

  let mainCol = appendsCreateCol("col-8", loginTitle);
  mainCol.css = "offset-3";

  mainCol.appendMultipleElements(createCol(boxappLog, "col-8"));

  return mainCol;
};

export const boxappLoginAfterDOM = () => {
  boxappLog.addMultipleObjectsToBody(
    loginBody.usernameInput,
    loginBody.passwordInput,
    loginBody.loginButton
  );

  loginBody.loginButton.onclick = function(ev) {
    let userInput = loginBody.usernameInput;
    let passInput = loginBody.passwordInput;

    let userVal = lengthValidator(userInput, 6);
    let passVal = lengthValidator(passInput, 6);

    let userValue = userInput.getInputValue().value;

    if (userVal && userValue === "eduardo" && passVal) {
      logUser({
        user: "eduardo"
      });

      let loggedTabs = boxappHeaderRender
        .getTabs()
        .filter(tab => tab.innerText === "HOME");

      boxappHeaderRender.resetTabs();

      if (session.logged) {
        let profile = document.createElement("a");
        profile.innerHTML = `Welcome, ${session.data.user}`;

        let logout = document.createElement("a");
        logout.innerHTML = `Logout`;

        boxappHeaderRender.addExistingTab(loggedTabs[0]);
        boxappHeaderRender.addNewTab(profile);
        boxappHeaderRender.addNewTab(logout);
        Router.restartSPA();

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
