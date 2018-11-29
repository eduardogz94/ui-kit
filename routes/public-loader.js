import EgRouter from "../src/other/EgRouter.js";
import { routingRender, routingAfterDOM } from "../views/Routing.js";
import { requestRender, requestAfterDOM } from "../views/Request.js";
import { inputsSampleRender } from "../tests/Inputs/Render.js";

export const Routes = [];

export const routingRoute = () => {
  let routingComponent = routingRender();

  return {
    name: "Routing",
    url: "../views/Routing",
    render: routingComponent,
    lazyDOM: routingAfterDOM
  };
};

export const inputsSampleRoute = () => {
  let inputSampleComponent = inputsSampleRender();

  return {
    name: "InputsSample",
    url: "../tests/Inputs/Render",
    render: inputSampleComponent
  };
};

export const requestRoute = () => {
  let requestComponent = requestRender();

  return {
    name: "Request",
    url: "../views/Request",
    render: requestComponent,
    lazyDOM: requestAfterDOM
  };
};

Routes.push(routingRoute(), requestRoute());

export const Router = new EgRouter(
  Routes,
  document.body.querySelector("#main")
);

Router.get("Routing");
