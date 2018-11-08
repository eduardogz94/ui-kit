/* </-------------- START CARDS VIEW ----------------/> */
const cardGrid = new EgGrid();
const mainCol = new EgCol("col-12");
const cardRow = new EgRow();

const cardsTitle = document.createElement("h1");
cardsTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
cardsTitle.innerHTML = "Cards";
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

const usernameInputCard = new EgInput("form-control", "text");
usernameInputCard.id = "username";
usernameInputCard.col = "col-8";
usernameInputCard.offset = "offset-2";
usernameInputCard.placeholder = "Username Input";
usernameInputCard.css = "mb-2";

const passwordInputCard = new EgInput("form-control", "password");
passwordInputCard.id = "password-card";
passwordInputCard.col = "col-8";
passwordInputCard.offset = "offset-2";
passwordInputCard.css = "mt-2";
passwordInputCard.placeholder = "Password Input";

const loginButtonCard = new EgButton("btn-primary");
loginButtonCard.id = "loginButton";
loginButtonCard.innerText = "Login Now";
loginButtonCard.col = "col-8";
loginButtonCard.css = "mt-2";
loginButtonCard.offset = "offset-2";

let loginCard = createLoginCard();

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

cardGrid.appendChild(mainCol);
document.body.appendChild(cardGrid);

/** APPEND CHILDS AFTER THEY ARE RENDERED */

/** Personal Cards */

loginCard.addMultipleObjectsToBody(
  usernameInputCard,
  passwordInputCard,
  loginButtonCard
);
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
