/* </-------------- START CARDS ----------------/> */

const cardGrid = new EgGrid();
const mainCol = new EgCol();
const cardRow = new EgRow();

mainCol.col = "col-12";

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
const primaryCardCol = new EgCol();
primaryCardCol.col = "col-3";

const primaryCard = new EgCard();
primaryCard.id = "primary-card";
primaryCard.body = "This is a body passed as a string in javascript";
primaryCard.footer = "Javascript card footer";
primaryCard.header = "Primary Title";
primaryCard.type = "card-primary";

primaryCardCol.appendChild(primaryCard);

/**
 * Danger Card
 */
const dangerCardCol = new EgCol();
dangerCardCol.col = "col-3";

const dangerCard = new EgCard();
dangerCard.id = "danger-card";
dangerCard.body = "This is a body passed as a string in javascript";
dangerCard.footer = "Javascript card footer";
dangerCard.header = "Danger Title";
dangerCard.type = "card-danger";

dangerCardCol.appendChild(dangerCard);

/**
 * Success Card
 */
const successCardCol = new EgCol();
successCardCol.col = "col-3";

const successCard = new EgCard();
successCard.id = "success-card";
successCard.body = "This is a body passed as a string in javascript";
successCard.footer = "Javascript card footer";
successCard.header = "Success Title";
successCard.type = "card-success";

successCardCol.appendChild(successCard);

/**
 * Warning Card
 */
const warningCardCol = new EgCol();
warningCardCol.col = "col-3";

const warningCard = new EgCard();
warningCard.id = "warning-card";
warningCard.body = "This is a body passed as a string in javascript";
warningCard.footer = "Javascript card footer";
warningCard.header = "Warning Title";
warningCard.type = "card-warning";

warningCardCol.appendChild(warningCard);

/**
 * Secondary Card
 */
const secondaryCardCol = new EgCol();
secondaryCardCol.col = "col-3";

const secondaryCard = new EgCard();
secondaryCard.id = "secondary-card";
secondaryCard.body = "This is a body passed as a string in javascript";
secondaryCard.footer = "Javascript card footer";
secondaryCard.header = "Secondary Title";
secondaryCard.type = "card-secondary";

secondaryCardCol.appendChild(secondaryCard);

/**
 * Info Card
 */
const infoCardCol = new EgCol();
infoCardCol.col = "col-3";

const infoCard = new EgCard();
infoCard.id = "info-card";
infoCard.body = "This is a body passed as a string in javascript";
infoCard.footer = "Javascript card footer";
infoCard.header = "Info Title";
infoCard.type = "card-info";

infoCardCol.appendChild(infoCard);

/**
 * Dark Card
 */
const darkCardCol = new EgCol();
darkCardCol.col = "col-3";

const darkCard = new EgCard();
darkCard.id = "dark-card";
darkCard.body = "This is a body passed as a string in javascript";
darkCard.footer = "Javascript card footer";
darkCard.header = "Dark Title";
darkCard.type = "card-dark";

darkCardCol.appendChild(darkCard);

cardRow.addMultipleObjects(
  darkCardCol,
  warningCardCol,
  primaryCardCol,
  successCardCol,
  dangerCardCol,
  secondaryCardCol,
  infoCardCol
);
mainCol.appendChild(cardRow);

cardGrid.appendChild(mainCol);
document.body.appendChild(cardGrid);

/* </----------------- END CARDS --------------------/> */
