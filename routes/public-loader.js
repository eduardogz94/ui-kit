import EgRouter from "../src/other/EgRouter.js";
import { routingRender, routingAfterDOM } from "../views/Routing.js";
import { requestRender, requestAfterDOM } from "../views/Request.js";
import { inputsSampleRender } from "../tests/Inputs/Render.js";

export const routes = [];

let routingComponent = routingRender();
let requestComponent = requestRender();
let inputSampleComponent = inputsSampleRender();

export const routingRoute = () => {
  return {
    url: "/Routing",
    script: "../views/Routing",
    component: routingComponent,
    lazyDOM: routingAfterDOM
  };
};

export const inputsSampleRoute = () => {
  return {
    url: "/InputsSample",
    script: "../tests/Inputs/Render",
    component: inputSampleComponent
  };
};

export const requestRoute = () => {
  return {
    url: "/Request",
    script: "../views/Request",
    component: requestComponent,
    lazyDOM: requestAfterDOM
  };
};

routes.push(routingRoute());

export const Router = new EgRouter(
  routes,
  document.body.querySelector("#main")
);

Router.navigate("/Routing");
