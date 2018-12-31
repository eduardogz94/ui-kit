import EgRouter from "../src/other/EgRouter.js";
import {
  boxappTrainingsComponent
} from "../public/views/Trainings/trainingsRender.js";
import {
  boxappHome
} from "../public/views/Home/home.js";
import {
  boxappSignupComponent
} from "../public/views/Signup/signupRender.js";
import {
  boxappLoginComponent
} from "../public/views/Login/loginRender.js";

import {
  boxappHeaderComponent,
  boxappHeaderRender
} from "../public/views/Header/headerRender.js";

export const routes = [];


export const trainingsRoute = () => {
  let trainingsView = boxappTrainingsComponent();
  return {
    url: "/Trainings",
    script: "../public/views/Trainings/trainingsRender",
    component: trainingsView.component,
    render: trainingsView.render
  };
};

export const headerRoute = () => {
  return {
    url: "/Header",
    script: "../public/views/Header/headerRender",
    component: boxappHeaderComponent,
    render: boxappHeaderRender
  };
}

export const loginRoute = () => {
  let loginView = boxappLoginComponent();
  return {
    url: "/Login",
    script: "../public/views/Login/loginRender",
    component: loginView.component,
    render: loginView.render
  };
}

export const homeRoute = () => {
  let homeView = boxappHome();
  return {
    url: "/Home",
    script: "../public/views/Home/home",
    component: homeView
  };
}

export const signupRoute = () => {
  let signupView = boxappSignupComponent();
  return {
    url: "/Signup",
    script: "../public/views/Signup/signupRender",
    component: signupView.component,
    render: signupView.render
  };
}

routes.push(headerRoute()/*, homeRoute(), loginRoute(), signupRoute(), trainingsRoute()*/);

export const Router = new EgRouter(
  routes,
  document.body.querySelector("#main")
);

// Since they are already loaded in the instance, we can navigate throught them
Router.navigate("/Header");
// Router.navigate("/Home");
