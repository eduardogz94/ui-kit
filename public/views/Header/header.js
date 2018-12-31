import EgHeader from "../../../src/components/Layout/EgHeader.js";
import { boxappHeaderComponent } from "../Header/headerRender.js";
import { deleteSession, session } from "../../../container/session.js";
import { Router, trainingsRoute } from "../../../routes/index.js";

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
  let login = document.createElement("a");
  login.innerHTML = "Login";
  login.className = "bounceIn";

  login.onclick = function() {
    Router.resetView();
    Router.navigate("/Login");
  };

  return login;
};

export const boxappSignupTab = () => {
  let signup = document.createElement("a");
  signup.innerHTML = "Signup";

  signup.onclick = function() {
    Router.resetView();
    Router.navigate("/Signup");
  };

  return signup;
};

export const boxappLogoutTab = () => {
  let logout = document.createElement("a");
  logout.innerHTML = `Logout`;
  logout.onclick = function() {
    if (session.getContext().logged) {
      deleteSession();

      let loggedTabs = boxappHeaderComponent
        .getTabs()
        .filter(tab => tab.innerText === "HOME");

      boxappHeaderComponent.resetTabs();
      boxappHeaderComponent.addExistingTab(loggedTabs[0]);
      boxappHeaderComponent.addNewTab(boxappSignupTab());
      boxappHeaderComponent.addNewTab(boxappLoginTab());

      Router.resetView();
      Router.navigate("/Home");
    } else {
      console.log("Youre not logged in.");
    }
  };

  return logout;
};

export const boxappProfileTab = () => {
  let trainingR = trainingsRoute();
  let profile = document.createElement("a");
  profile.innerHTML = `All Trainings`;

  profile.onclick = function(ev) {
    Router.resetView();
    Router.navigate("/Trainings");
  };

  return profile;
};
