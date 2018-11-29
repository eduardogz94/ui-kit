import EgCard from "../src/components/EgCard.js";
import { Router, inputsSampleRoute } from "../routes/public-loader.js";
import {
  createTextElement,
  createCol,
  createButton,
  appendsCreateCol
} from "../src/js/sivaFunctions.js";

let routingCard = new EgCard("card-primary");
routingCard.header = "Routing Details";
routingCard.footer = "Documentation instead?";

export const routingRender = () => {
  let routingTitle = createTextElement(
    "h1",
    "animated .rubberBand text-danger text-center",
    "Eg-Router"
  );

  let mainCol = createCol(routingTitle, "col-6");

  let routingCol = createCol(routingCard, "col-12");
  mainCol.appendChild(routingCol);

  return mainCol;
};

export const routingAfterDOM = async () => {
  let addInputsView = createButton(
    "btn-danger",
    "Add Inputs View",
    "signup",
    "col-12"
  );

  let deleteInputsView = createButton(
    "btn-danger",
    "Delete Inputs View",
    "signup",
    "col-12"
  );

  let routingBody = appendsCreateCol("col-12", addInputsView, deleteInputsView);

  routingCard.addMultipleObjectsToBody(routingBody);

  let sample = inputsSampleRoute();

  let testingRouter = () => {
    Router.load(sample);
    // Router.removeChild()
  };

  addInputsView.onclick = testingRouter;

  let checkRouter = () => {
    Router.get("Request");
  };

  deleteInputsView.onclick = checkRouter;
};
