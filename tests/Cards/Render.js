import { sampleCardPrimary } from "./PrimaryCard.js";
import { sampleCardSecondary } from "./SecondaryCard.js";
import { sampleCardLogin, createCardLoginBody } from "./LoginCard.js";
import { sampleCardSuccess } from "./SuccessCard.js";
import { sampleCardWarning } from "./WarningCard.js";
import { sampleCardDanger } from "./DangerCard.js";
import { sampleCardInfo } from "./InfoCard.js";
import { sampleCardDefault } from "./DefaultCard.js";
import { createCardsInputs } from "../../helpers/cards/index.js";
import EgRow from "../../src/components/Grid/EgRow.js";

import {
  createCardText,
  createTextElement,
  appendsCreateCol,
  lengthValidator,
  createCol,
  createButton
} from "../../src/js/sivaFunctions.js";

let primaryCard = sampleCardPrimary();
let dangerCard = sampleCardDanger();
let successCard = sampleCardSuccess();
let warningCard = sampleCardWarning();
let secondaryCard = sampleCardSecondary();
let infoCard = sampleCardInfo();
let defaultCard = sampleCardDefault();
let loginCard = sampleCardLogin();
let loginCardBody = createCardLoginBody();

export const cardsSampleRender = () => {
  let cardsTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary text-center blanch",
    "Cards"
  );

  let cardRow = new EgRow();
  let mainCol = appendsCreateCol("col-8", cardsTitle, cardRow);
  mainCol.css = "offset-2";

  cardRow.appendElements(
    createCol(defaultCard, "col-3"),
    createCol(warningCard, "col-3"),
    createCol(primaryCard, "col-3"),
    createCol(successCard, "col-3"),
    createCol(dangerCard, "col-3"),
    createCol(secondaryCard, "col-3"),
    createCol(infoCard, "col-3"),
    createCol(loginCard, "col-3")
  );

  return mainCol;
};

export const cardsSampleAfterDOM = () => {
  loginCard.addMultipleObjectsToBody(
    loginCardBody.usernameInputCard,
    loginCardBody.passwordInputCard,
    loginCardBody.loginButtonCard
  );

  loginCardBody.loginButtonCard.onclick = function(ev) {
    lengthValidator(loginCardBody.usernameInputCard, 8);
    lengthValidator(loginCardBody.passwordInputCard, 8);
  };

  loginCard.addToCardFooter(
    createCardText(
      "animated jello text-primary",
      "Forgot your password? Click here!"
    )
  );

  primaryCard.addToCardHeader(
    createCardText("animated jello text-primary", "Primary Title")
  );

  secondaryCard.addToCardHeader(
    createCardText("animated jello text-secondary", "Secondary Title")
  );

  successCard.addToCardHeader(
    createCardText("animated jello text-success", "Success Title")
  );
  successCard.addToCardFooter(
    createCardText(
      "animated jello text-success",
      "Footer from javascript with different color"
    )
  );
  successCard.addToCardBody(
    createCardText(
      "animated jello text-success",
      "This is a object for the card body passed in javascript functions"
    )
  );

  warningCard.addToCardHeader(
    createCardText("animated jello text-warning", "Warning Title")
  );
  warningCard.addToCardFooter(
    createCardText(
      "animated jello text-warning",
      "Footer from javascript with different color"
    )
  );

  dangerCard.addToCardHeader(
    createCardText("animated jello text-danger", "Danger Title")
  );
  dangerCard.addMultipleObjectsToBody(
    createCardsInputs().inputCard1,
    createCardsInputs().inputCard2
  );

  infoCard.addToCardBody(
    createButton("btn-info", "Info Card Button", "col-12")
  );

  infoCard.addToCardHeader(
    createCardText("animated jello text-info", "Info Title")
  );
};
