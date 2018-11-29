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
    name: "Buttons",
    url: "../tests/Buttons/Render",
    render: buttonsComponents
  };
};

export const inputsRoute = () => {
  let inputsComponents = inputsSampleRender();

  return {
    name: "Inputs",
    url: "../tests/Inputs/Render",
    render: inputsComponents
  };
};

export const cardsRoute = () => {
  let cardsComponents = cardsSampleRender();

  return {
    name: "Cards",
    url: "../tests/Cards/Render",
    render: cardsComponents,
    lazyDOM: cardsSampleAfterDOM
  };
};

export const imagesRoute = () => {
  let imagesComponents = imagesSampleRender();

  return {
    name: "Images",
    url: "../tests/Images/Render",
    render: imagesComponents
  };
};

Routes.push(buttonsRoute(), inputsRoute(), cardsRoute(), imagesRoute());

export const Router = new EgRouter(
  Routes,
  document.body.querySelector("#main")
);

Router.get("Buttons");
Router.get("Inputs");
Router.get("Cards");
Router.get("Images");
