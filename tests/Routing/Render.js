import EgCard from "../../src/components/EgCard.js";
import {
  Router,
  inputsRoute,
  requestRoute,
  imagesRoute,
  buttonsRoute,
  cardsRoute
} from "../../routes/sample-loader.js";

import {
  createTextElement,
  createCol,
  createButton,
  appendsCreateCol
} from "../../src/js/sivaFunctions.js";

let routingCard = new EgCard("card-primary");
routingCard.header = "Routing Details";
routingCard.footer = "Documentation instead?";

export const routingSampleRender = () => {
  let routingTitle = createTextElement(
    "h1",
    "animated .rubberBand text-primary text-center blanch",
    "Eg-Router"
  );

  let mainCol = createCol(routingTitle, "col-12");

  let routingCol = createCol(routingCard, "col-12");
  mainCol.appendChild(routingCol);
  mainCol.css = "mt-5";

  return mainCol;
};

export const routingAfterDOM = async () => {
  let addInputsView = createButton(
    "btn-primary",
    "Add Inputs View",
    "addInputs",
    "col-12"
  );

  let addRequestView = createButton(
    "btn-primary",
    "Add Request View",
    "addRequest",
    "col-12"
  );

  let addButtonsView = createButton(
    "btn-primary",
    "Add Buttons View",
    "addButtons",
    "col-12"
  );

  let addCardsView = createButton(
    "btn-primary",
    "Add Cards View",
    "addCards",
    "col-12"
  );

  let addImagesView = createButton(
    "btn-primary",
    "Add Images View",
    "addImages",
    "col-12"
  );

  let deleteButtons = createButton(
    "btn-primary",
    "Delete Buttons View",
    "deleteButtons",
    "col-12"
  );

  let deleteCards = createButton(
    "btn-primary",
    "Delete Cards View",
    "deleteCards",
    "col-12"
  );

  let deleteImages = createButton(
    "btn-primary",
    "Delete Images View",
    "deleteImages",
    "col-12"
  );

  let deleteRequest = createButton(
    "btn-primary",
    "Delete Requests View",
    "deleteRequests",
    "col-12"
  );

  let deleteInputs = createButton(
    "btn-primary",
    "Delete Inputs View",
    "deleteInputs",
    "col-12"
  );

  let routingBody = appendsCreateCol(
    "col-12",
    addInputsView,
    addRequestView,
    addButtonsView,
    addCardsView,
    addImagesView,
    deleteButtons,
    deleteCards,
    deleteImages,
    deleteRequest,
    deleteInputs
  );

  routingCard.addMultipleObjectsToBody(routingBody);

  let inputsR = inputsRoute();
  let requestR = requestRoute();
  let imagesR = imagesRoute();
  let cardsR = cardsRoute();
  let buttonsR = buttonsRoute();

  let addInputs = () => {
    Router.load(inputsR);
  };

  let removeInputs = () => {
    Router.deleteRoute(inputsR);
  };

  let addImages = () => {
    Router.load(imagesR);
  };

  let removeImages = () => {
    Router.deleteRoute(imagesR);
  };

  let addButtons = () => {
    Router.load(buttonsR);
  };

  let removeButtons = () => {
    Router.deleteRoute(buttonsR);
  };

  let addCards = () => {
    Router.load(cardsR);
  };

  let removeCards = () => {
    Router.deleteRoute(cardsR);
  };

  let addRequest = () => {
    Router.load(requestR);
  };

  let removeRequest = () => {
    Router.deleteRoute(requestR);
  };

  addInputsView.onclick = addInputs;
  addRequestView.onclick = addRequest;
  addCardsView.onclick = addCards;
  addButtonsView.onclick = addButtons;
  addImagesView.onclick = addImages;

  deleteInputs.onclick = removeInputs;
  deleteCards.onclick = removeCards;
  deleteImages.onclick = removeImages;
  deleteButtons.onclick = removeButtons;
  deleteRequest.onclick = removeRequest;
};
