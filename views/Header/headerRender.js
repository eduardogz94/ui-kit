import { boxappHeader } from "./header.js";
import { Router, signupRoute, loginRoute } from "../../routes/public-loader.js";

export const boxappHeaderRender = boxappHeader();

export const boxappHeaderAfterDOM = () => {
  let signupR = signupRoute();
  let loginR = loginRoute();
  console.log(loginR);

  let home = document.createElement("a");
  home.innerHTML = "Home";

  let signup = document.createElement("a");
  signup.innerHTML = "Signup";

  let login = document.createElement("a");
  login.innerHTML = "Login";

  boxappHeaderRender.createCollapse(home, signup, login);

  home.onclick = function() {
    Router.restartSPA();
  };

  signup.onclick = function() {
    Router.restartSPA();
    Router.load(signupR);
  };

  login.onclick = function() {
    Router.restartSPA();
    Router.load(loginR);
  };
};
