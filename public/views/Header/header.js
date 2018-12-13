import EgHeader from "../../../src/components/Layout/EgHeader.js";
import { boxappHeaderRender } from "../Header/headerRender.js";
import { deleteSession, session } from "../../../container/publicSession.js";
import {
  Router,
  signupRoute,
  loginRoute,
  trainingsRoute,
  homeRoute
} from "../../../routes/public-loader.js";

export const boxappHeader = () => {
  let header = new EgHeader();
  header.id = "boxapp";
  header.nav = "BoxApp";
  header.css = "navbar-inverse bg-primary fixed-top navbar-toggleable ";
  return header;
};

export const boxappHomeTab = () => {
  let home = document.createElement("a");
  home.innerHTML = "Home";

  home.onclick = function() {
    Router.resetView();
    Router.navigate("/Home");
  };

  return home;
};

export const boxappLoginTab = () => {
  let loginR = loginRoute();

  let login = document.createElement("a");
  login.innerHTML = "Login";
  login.className = "bounceIn";

  login.onclick = function() {
    Router.resetView();
    Router.load(loginR);
  };

  return login;
};

export const boxappSignupTab = () => {
  let signupR = signupRoute();

  let signup = document.createElement("a");
  signup.innerHTML = "Signup";

  signup.onclick = function() {
    Router.resetView();
    Router.load(signupR);
  };

  return signup;
};

export const boxappLogoutTab = () => {
  let logout = document.createElement("a");
  logout.innerHTML = `Logout`;
  logout.onclick = function() {
    if (session.getContext().logged) {
      deleteSession();

      let loggedTabs = boxappHeaderRender
        .getTabs()
        .filter(tab => tab.innerText === "HOME");

      boxappHeaderRender.resetTabs();
      boxappHeaderRender.addExistingTab(loggedTabs[0]);
      boxappHeaderRender.addNewTab(boxappSignupTab());
      boxappHeaderRender.addNewTab(boxappLoginTab());

      let homeView = homeRoute();

      Router.resetView();
      Router.load(homeView);
    } else {
      console.log("Youre not logged in.");
    }
  };

  return logout;
};

export const boxappProfileTab = () => {
  let profile = document.createElement("a");
  profile.innerHTML = `All Trainings`;

  profile.onclick = function(ev) {
    let trainingR2 = trainingsRoute();

    Router.resetView();
    Router.load(trainingR2);
  };

  return profile;
};
