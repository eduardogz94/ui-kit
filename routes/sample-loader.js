import EgRouter from "../src/other/EgRouter.js";
import { buttonsSampleRender } from "../tests/Buttons/Render.js";
import { inputsSampleRender } from "../tests/Inputs/Render.js";
import { imagesSampleRender } from "../tests/Images/Render.js";
import {
  cardsSampleRender,
  cardsSampleAfterDOM
} from "../tests/Cards/Render.js";

export const Routes = [];

export const buttonsRoute = () => {
  let buttonsComponents = buttonsSampleRender();

  return {
    url: "/Buttons",
    script: "../tests/Buttons/Render",
    component: buttonsComponents
  };
};

export const inputsRoute = () => {
  let inputsComponents = inputsSampleRender();

  return {
    url: "/Inputs",
    script: "../tests/Inputs/Render",
    component: inputsComponents
  };
};

export const cardsRoute = () => {
  let cardsComponents = cardsSampleRender();

  return {
    url: "/Cards",
    script: "../tests/Cards/Render",
    component: cardsComponents,
    lazyDOM: cardsSampleAfterDOM
  };
};

export const imagesRoute = () => {
  let imagesComponents = imagesSampleRender();

  return {
    url: "/Images",
    script: "../tests/Images/Render",
    component: imagesComponents
  };
};

Routes.push(buttonsRoute(), inputsRoute(), cardsRoute(), imagesRoute());

export const Router = new EgRouter(
  Routes,
  document.body.querySelector("#main")
);

Router.get("/Buttons");
Router.get("/Inputs");
Router.get("/Cards");
Router.get("/Images");
