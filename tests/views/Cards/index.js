/* </-------------- START CARDS VIEW ----------------/> */

const mainCol = new EgCol("col-12");
const cardRow = new EgRow();

const cardsTitle = returnTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Cards"
);

mainCol.appendChild(cardsTitle);

/** Primary Card */
let primaryCard = createPrimaryCard();

/** Danger Card */
let dangerCard = createDangerCard();

/** Success Card */
let successCard = createSuccessCard();

/** Warning Card */
let warningCard = createWarningCard();

/** Secondary Card*/
let secondaryCard = createSecondaryCard();

/** Info Card*/
let infoCard = createInfoCard();

/** Dark Card */
let defaultCard = createDefaultCard();

/** Login Card */
let loginCard = createLoginCard();
let loginCardBody = returnLoginBody();

cardRow.addMultipleObjects(
  createCol(defaultCard, "col-3"),
  createCol(warningCard, "col-3"),
  createCol(primaryCard, "col-3"),
  createCol(successCard, "col-3"),
  createCol(dangerCard, "col-3"),
  createCol(secondaryCard, "col-3"),
  createCol(infoCard, "col-3"),
  createCol(loginCard, "col-3")
);

mainCol.appendChild(cardRow);

/**
 * You call this when all the elements are already in a col/row
 */

document.body.appendChild(mainCol);

/** APPEND CHILDS AFTER THEY ARE RENDERED */

/** Personal Cards */

loginCard.addMultipleObjectsToBody(
  loginCardBody.usernameInputCard,
  loginCardBody.passwordInputCard,
  loginCardBody.loginButtonCard
);

loginCardBody.loginButtonCard.onclick = function(ev) {
  validateValue(loginCardBody.usernameInputCard);
  validateValue(loginCardBody.passwordInputCard);
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

infoCard.addToCardBody(createButton("btn-info", "Info Card Button", "col-12"));
infoCard.addToCardHeader(
  createCardText("animated jello text-info", "Info Title")
);

/* </----------------- END CARDS VIEW --------------------/> */
