import EgRouter from "../src/other/EgRouter.js";
import { buttonsSampleRender } from "../tests/Buttons/Render.js";
import { inputsSampleRender } from "../tests/Inputs/Render.js";
import { imagesSampleRender } from "../tests/Images/Render.js";
import { alertsSampleRender } from "../tests/Alerts/Render.js";
import {
  routingSampleRender,
  routingAfterDOM
} from "../tests/Routing/Render.js";
import {
  requestSampleRender,
  requestAfterDOM
} from "../tests/Requests/Render.js";

import {
  headersSampleRender,
  headersSampleAfterDOM
} from "../tests/Layout/Headers/Render.js";

import {
  cardsSampleRender,
  cardsSampleAfterDOM
} from "../tests/Cards/Render.js";

export const Routes = [];

let routingComponent = routingSampleRender();
let requestComponent = requestSampleRender();
let buttonsComponents = buttonsSampleRender();
let inputsComponents = inputsSampleRender();
let cardsComponents = cardsSampleRender();
let imagesComponents = imagesSampleRender();
let headersComponents = headersSampleRender();
let alertComponents = alertsSampleRender();

export const routingRoute = () => {
  return {
    url: "/Routing",
    script: "../tests/Routing/Render",
    component: routingComponent,
    lazyDOM: routingAfterDOM
  };
};

export const requestRoute = () => {
  return {
    url: "/Request",
    script: "../tests/Requests/Render",
    component: requestComponent,
    lazyDOM: requestAfterDOM
  };
};

export const buttonsRoute = () => {
  return {
    url: "/Buttons",
    script: "../tests/Buttons/Render",
    component: buttonsComponents
  };
};

export const inputsRoute = () => {
  return {
    url: "/Inputs",
    script: "../tests/Inputs/Render",
    component: inputsComponents
  };
};

export const cardsRoute = () => {
  return {
    url: "/Cards",
    script: "../tests/Cards/Render",
    component: cardsComponents,
    lazyDOM: cardsSampleAfterDOM
  };
};

export const imagesRoute = () => {
  return {
    url: "/Images",
    script: "../tests/Images/Render",
    component: imagesComponents
  };
};

export const headersRoute = () => {
  return {
    url: "/Headers",
    script: "../tests/Layout/Headers/Render",
    component: headersComponents,
    lazyDOM: headersSampleAfterDOM
  };
};

export const alertsRoute = () => {
  return {
    url: "/Alerts",
    script: "../tests/Alerts/Render",
    component: alertComponents
  };
};

Routes.push(headersRoute(), routingRoute());

export const Router = new EgRouter(
  Routes,
  document.body.querySelector("#main")
);

Router.navigate("/Headers");
Router.navigate("/Routing");
