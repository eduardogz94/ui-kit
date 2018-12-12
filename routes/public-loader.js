import EgRouter from "../src/other/EgRouter.js";
import EgContext from "../src/other/EgContext.js";

import { boxAppTraningsRender } from "../public/views/Trainings/trainingsRender.js";
import { boxappHome } from "../public/views/Home/home.js";

import {
  boxappHeaderRender,
  boxappHeaderAfterDOM
} from "../public/views/Header/headerRender.js";

import {
  boxappSignupRender,
  boxappSignupAfterDOM
} from "../public/views/Signup/signupRender.js";

import {
  boxappLoginRender,
  boxappLoginAfterDOM
} from "../public/views/Login/loginRender.js";

export const routes = [];

export const trainingsRoute = () => {
  let trainingsComponent = boxAppTraningsRender();
  return {
    url: "/Trainings",
    script: "../public/views/Trainings/trainingsRender",
    component: trainingsComponent.trainings,
    lazyDOM: trainingsComponent.AfterDOM
  };
};

export const headerRoute = () => {
  return {
    url: "/Header",
    script: "../public/views/Header/headerRender",
    component: boxappHeaderRender,
    lazyDOM: boxappHeaderAfterDOM
  };
};

export const loginRoute = () => {
  let loginComponent = boxappLoginRender();
  return {
    url: "/Login",
    script: "../public/views/Login/loginRender",
    component: loginComponent,
    lazyDOM: boxappLoginAfterDOM
  };
};

export const homeRoute = () => {
  let homeComponent = boxappHome();
  return {
    url: "/Home",
    script: "../public/views/Home/home",
    component: homeComponent
  };
};

export const signupRoute = () => {
  let signupComponent = boxappSignupRender();
  return {
    url: "/Signup",
    script: "../public/views/Signup/signupRender",
    component: signupComponent,
    lazyDOM: boxappSignupAfterDOM
  };
};

routes.push(headerRoute(), homeRoute());

export const Router = new EgRouter(
  routes,
  document.body.querySelector("#main")
);

// Since they are already loaded in the instance, we can navigate throught them
Router.navigate("/Header");
Router.navigate("/Home");
