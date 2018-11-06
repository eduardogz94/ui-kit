/* </-------------- START CARDS ----------------/> */

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

/**
 * Primary Card
 */
const primaryCardTitle = document.createElement("h5");
primaryCardTitle.setAttribute("class", "animated jello text-primary");
primaryCardTitle.innerHTML = "primary title";

const primaryCardCol = new EgCol("col-3");

const primaryCard = new EgCard("card-primary");
primaryCard.id = "primary-card";
primaryCard.body = "This is a body passed as a string in javascript";
primaryCard.footer = "Javascript card footer";

primaryCardCol.appendChild(primaryCard);

/**
 * Danger Card
 */
const dangerCardTitle = document.createElement("h5");
dangerCardTitle.setAttribute("class", "animated jello text-danger");
dangerCardTitle.innerHTML = "Danger Title";

const dangerCardCol = new EgCol("col-3");

const dangerCard = new EgCard("card-danger");
dangerCard.id = "danger-card";
dangerCard.footer = "Javascript card footer";

const dangerInputCard1 = new EgInput("form-control", "text");
dangerInputCard1.id = "danger-card1";
dangerInputCard1.col = "col-12";
dangerInputCard1.placeholder = "Danger1 Input";

const dangerInputCard2 = new EgInput("form-control", "password");
dangerInputCard2.id = "danger-card2";
dangerInputCard2.col = "col-12";
dangerInputCard2.css = "mt-2";
dangerInputCard2.placeholder = "Danger2 Input";

dangerCardCol.appendChild(dangerCard);

/**
 * Success Card
 */
const successCardTitle = document.createElement("h5");
successCardTitle.setAttribute("class", "animated jello text-success");
successCardTitle.innerHTML = "Success Title";

const successCardCol = new EgCol("col-3");

const successCard = new EgCard("success-card");
successCard.body = "This is a body passed as a string in javascript";
successCard.footer = "Javascript card footer";
successCard.type = "card-success";

successCardCol.appendChild(successCard);

/**
 * Warning Card
 */
const warningCardTitle = document.createElement("h5");
warningCardTitle.setAttribute("class", "animated jello text-warning");
warningCardTitle.innerHTML = "Warning Title";

const warningCardCol = new EgCol("col-3");

const warningCard = new EgCard("card-warning");
warningCard.id = "warning-card";
warningCard.body = "This is a body passed as a string in javascript";
warningCard.footer = "Javascript card footer";

warningCardCol.appendChild(warningCard);

/**
 * Secondary Card
 */
const secondaryCardTitle = document.createElement("h5");
secondaryCardTitle.setAttribute("class", "animated jello text-secondary");
secondaryCardTitle.innerHTML = "Secondary Title";

const secondaryCardCol = new EgCol("col-3");

const secondaryCard = new EgCard("card-secondary");
secondaryCard.id = "secondary-card";
secondaryCard.body =
  "his is a body passed as a string in javascript with a info button appened from the body <br><br>";

const secondaryCardFooter = document.createElement("h5");
secondaryCardFooter.setAttribute("class", "animated jello text-secondary");
secondaryCardFooter.innerHTML = "You can also change footer attributes";

secondaryCardCol.appendChild(secondaryCard);

/**
 * Info Card
 */
const infoCardTitle = document.createElement("h5");
infoCardTitle.setAttribute("class", "animated jello text-info");
infoCardTitle.innerHTML = "Info Title";

const infoCardCol = new EgCol("col-3");

const infoCard = new EgCard("card-info");
infoCard.id = "info-card";
infoCard.body =
  "This is a body passed as a string in javascript with a info button appened from the body <br><br>";
infoCard.footer = "Javascript card footer";

const infoButton = new EgButton("btn-info");
infoButton.col = "col-12";
infoButton.innerText = "Card Button";

infoCardCol.appendChild(infoCard);

/**
 * Dark Card
 */
const darkCardCol = new EgCol("col-3");

const darkCard = new EgCard("card-dark");
darkCard.id = "dark-card";
darkCard.body = "This is a body passed as a string in javascript";
darkCard.footer = "Javascript card footer";
darkCard.header = "Dark Title (Default Card Title Attributes)";

darkCardCol.appendChild(darkCard);

/**
 * Login Card
 */

const formCol = new EgCol("col-3");

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

const loginCard = new EgCard("card-primary");
loginCard.id = "login";
loginCard.header = "Login Form";

const loginButtonCard = new EgButton("btn-primary");
loginButtonCard.id = "loginButton";
loginButtonCard.innerText = "Login Now";
loginButtonCard.col = "col-8";
loginButtonCard.css = "mt-2";
loginButtonCard.offset = "offset-2";

const loginFooterMsg = document.createElement("h5");
loginFooterMsg.setAttribute("class", "animated jello text-primary");
loginFooterMsg.innerHTML = "Forgot your password? Click here!";

formCol.addMultipleObjects(loginCard);

cardRow.addMultipleObjects(
  darkCardCol,
  warningCardCol,
  primaryCardCol,
  successCardCol,
  dangerCardCol,
  secondaryCardCol,
  infoCardCol,
  formCol
);
mainCol.appendChild(cardRow);

/**
 * You call this when all the elements are already in a col/row
 */

cardGrid.appendChild(mainCol);
document.body.appendChild(cardGrid);

/** APPEND CHILDS AFTER THEY ARE RENDERED */

loginCard.addMultipleObjectsToBody(
  usernameInputCard,
  passwordInputCard,
  loginButtonCard
);
loginCard.addToCardFooter(loginFooterMsg);

/**
 * Personal Cards
 */

infoCard.addToCardBody(infoButton);
infoCard.addToCardHeader(infoCardTitle);

successCard.addToCardHeader(successCardTitle);

dangerCard.addToCardHeader(dangerCardTitle);
dangerCard.addMultipleObjectsToBody(dangerInputCard1, dangerInputCard2);

warningCard.addToCardHeader(warningCardTitle);

secondaryCard.addToCardHeader(secondaryCardTitle);
secondaryCard.addToCardFooter(secondaryCardFooter);

primaryCard.addToCardHeader(primaryCardTitle);

infoCard.addToCardHeader(infoCardTitle);

/* </----------------- END CARDS --------------------/> */
