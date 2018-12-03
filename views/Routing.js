import EgCard from "../src/components/EgCard.js";
import {
  Router,
  inputsSampleRoute,
  requestRoute
} from "../routes/public-loader.js";
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
    "addInputs",
    "col-12"
  );

  let addRequestView = createButton(
    "btn-danger",
    "Add Request View",
    "addRequest",
    "col-12"
  );

  let deleteRequest = createButton(
    "btn-danger",
    "Delete Requests View",
    "deleteRequests",
    "col-12"
  );

  let deleteInputs = createButton(
    "btn-danger",
    "Delete Inputs View",
    "deleteInputs",
    "col-12"
  );

  let routingBody = appendsCreateCol(
    "col-12",
    addInputsView,
    addRequestView,
    deleteInputs,
    deleteRequest
  );

  routingCard.addMultipleObjectsToBody(routingBody);

  let inputsRoute = inputsSampleRoute();
  let requestR = requestRoute();

  let addInputs = () => {
    Router.load(inputsRoute);
  };

  let removeInputs = () => {
    Router.deleteRoute(inputsRoute);
  };

  let addRequest = () => {
    Router.load(requestR);
  };

  let removeRequest = () => {
    Router.deleteRoute(requestR);
  };

  addInputsView.onclick = addInputs;
  addRequestView.onclick = addRequest;
  deleteInputs.onclick = removeInputs;
  deleteRequest.onclick = removeRequest;
};
