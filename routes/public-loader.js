import EgRouter from "../src/other/EgRouter.js";

import {
  boxAppTraningsRender,
  boxAppTrainingsAfterDOM
} from "../views/Trainings/trainingsRender.js";

import {
  boxappHeaderRender,
  boxappHeaderAfterDOM
} from "../views/Header/headerRender.js";

import {
  boxappSignupRender,
  boxappSignupAfterDOM
} from "../views/Signup/signupRender.js";

import {
  boxappLoginRender,
  boxappLoginAfterDOM
} from "../views/Login/loginRender.js";

let signupComponent = boxappSignupRender();
let loginComponent = boxappLoginRender();
let trainingsComponent = boxAppTraningsRender();

export const trainingsRoute = () => {
  return {
    url: "/Trainigns",
    script: "../views/Trainings/trainingsRender",
    component: trainingsComponent,
    lazyDOM: boxAppTrainingsAfterDOM
  };
};

export const headerRoute = () => {
  return {
    url: "/Header",
    script: "../views/Header/headerRender",
    component: boxappHeaderRender,
    lazyDOM: boxappHeaderAfterDOM
  };
};

export const loginRoute = () => {
  return {
    url: "/Login",
    script: "../views/Login/loginRender",
    component: loginComponent,
    lazyDOM: boxappLoginAfterDOM
  };
};

export const signupRoute = () => {
  return {
    url: "/Signup",
    script: "../views/Signup/signupRender",
    component: signupComponent,
    lazyDOM: boxappSignupAfterDOM
  };
};

export const routes = [];
routes.push(headerRoute());

export const Router = new EgRouter(
  routes,
  document.body.querySelector("#main")
);

Router.navigate("/Header");

export let session = {
  logged: false
};

export const logUser = obj => {
  session = {
    logged: true,
    data: obj
  };

  return session;
};

export const deleteSession = () => {
  session = {
    logged: false
  };

  return session.logged;
};
