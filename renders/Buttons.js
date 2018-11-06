/**
 * Start Buttons
 */

const buttonsGrid = new EgGrid();
const buttonsMainCol = new EgCol();
buttonsMainCol.col = "col-12";
buttonsMainCol.bg = "bg-alt"

const firstRow = new EgRow();

const buttonsTitle = document.createElement("h1");
buttonsTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
buttonsTitle.innerHTML = "Buttons";
buttonsMainCol.appendChild(buttonsTitle);

/**
 * Colors Buttons
 */
const buttonsColorsCol = new EgCol();
buttonsColorsCol.col = "col-6";

const colorsTitle = document.createElement("h1");
colorsTitle.setAttribute("class", "text-center animated jello text-muted");
colorsTitle.innerHTML = "Button Colors";

/**
 * Primary Buttons
 */
const buttonPrimary = new EgButton();
buttonPrimary.id = "buttonPrimary"
buttonPrimary.btn = "btn-primary";
buttonPrimary.innerText = "primary";

/**
 * Secondary Buttons
 */
const buttonSecondary = new EgButton();
buttonSecondary.id = "buttonSecondary"
buttonSecondary.btn = "btn-secondary";
buttonSecondary.innerText = "secondary";

/**
 * Success Buttons
 */
const buttonSuccess = new EgButton();
buttonSuccess.id = "buttonSuccess"
buttonSuccess.btn = "btn-success";
buttonSuccess.innerText = "success";

/**
 * Danger Buttons
 */
const buttonDanger = new EgButton();
buttonDanger.id = "buttonDanger"
buttonDanger.btn = "btn-danger";
buttonDanger.innerText = "danger";

/**
 * Info Buttons
 */
const buttonInfo = new EgButton();
buttonInfo.id = "buttonInfo"
buttonInfo.btn = "btn-info";
buttonInfo.innerText = "info";

/**
 * Warning Buttons
 */
const buttonWarning = new EgButton();
buttonWarning.id = "buttonWarning"
buttonWarning.btn = "btn-warning";
buttonWarning.innerText = "warning";

buttonsColorsCol.addMultipleObjects(
  colorsTitle,
  buttonPrimary,
  buttonSecondary,
  buttonSuccess,
  buttonDanger,
  buttonInfo,
  buttonWarning
);

const outlineButtonsCol = new EgCol();
outlineButtonsCol.col = "col-6";

const outlineTitle = document.createElement("h1");
outlineTitle.setAttribute("class", "text-center animated jello text-muted");
outlineTitle.innerHTML = "Outline";

/**
 * Primary Outline Buttons
 */
const outlinePrimaryButton = new EgButton();
outlinePrimaryButton.id = "outlinePrimaryButton"
outlinePrimaryButton.btn = "btn-outline-primary";
outlinePrimaryButton.innerText = "primary";

/**
 * Secondary Outline Buttons
 */
const outlineSecondaryButton = new EgButton();
outlineSecondaryButton.id = "outlineSecondaryButton"
outlineSecondaryButton.btn = "btn-outline-secondary";
outlineSecondaryButton.innerText = "secondary";

/**
 * Success Outline Buttons
 */
const outlineSuccessButton = new EgButton();
outlineSuccessButton.id = "outlineSuccessButton"
outlineSuccessButton.btn = "btn-outline-success";
outlineSuccessButton.innerText = "success";

/**
 * Danger Outline Buttons
 */
const outlineDangerButton = new EgButton();
outlineDangerButton.id = "outlineDangerButton"
outlineDangerButton.btn = "btn-outline-danger";
outlineDangerButton.innerText = "danger";

/**
 * Info Outline Buttons
 */
const outlineInfoButton = new EgButton();
outlineInfoButton.id = "outlineInfoButton"
outlineInfoButton.btn = "btn-outline-info";
outlineInfoButton.innerText = "info";

/**
 * Warning Outline Buttons
 */
const outlineWarningButton = new EgButton();
outlineWarningButton.id = "outlineWarningButton"
outlineWarningButton.btn = "btn-outline-warning";
outlineWarningButton.innerText = "warning";

outlineButtonsCol.addMultipleObjects(
  outlineTitle,
  outlinePrimaryButton,
  outlineSecondaryButton,
  outlineSuccessButton,
  outlineDangerButton,
  outlineInfoButton,
  outlineWarningButton
);

firstRow.addMultipleObjects(buttonsColorsCol, outlineButtonsCol);

/**
 * Styles Buttons
 */

const secondRow = new EgRow();

const buttonStylesCol = new EgCol();
buttonStylesCol.col = "col-6";

const stylesTitle = document.createElement("h1");
stylesTitle.setAttribute("class", "text-center animated jello text-muted");
stylesTitle.innerHTML = "Button Styles";

/**
 * Default Buttons
 */
const defaultButton = new EgButton();
defaultButton.id = "defaultButton"
defaultButton.btn = "btn-primary";
defaultButton.innerText = "Default";

/**
 * Outline Buttons
 */
const outlineButton = new EgButton();
outlineButton.id = "outlineButton"
outlineButton.btn = "btn-outline-primary";
outlineButton.innerText = "Outline";

/**
 * Round Buttons
 */
const roundButton = new EgButton();
roundButton.id = "roundButton"
roundButton.btn = "btn-primary btn-round";
roundButton.innerText = "Round";

/**
 * Icon Buttons
 */
const iconButton = new EgButton();
iconButton.id = "iconButton"
iconButton.btn = "btn-primary btn-round";
iconButton.innerText = "Icon";

/**
 * Circle Buttons
 */
const circleButton = new EgButton();
circleButton.id = "circleButton"
circleButton.btn = "btn-circle";
circleButton.innerText = "c";

/**
 * Link Buttons
 */
const linkButton = new EgButton();
linkButton.id = "linkButton"
linkButton.btn = "btn-link";
linkButton.innerText = "Link";

buttonStylesCol.addMultipleObjects(
  stylesTitle,
  defaultButton,
  outlineButton,
  roundButton,
  iconButton,
  circleButton,
  linkButton
);

const buttonSizesCol = new EgCol();
buttonSizesCol.col = "col-6";

const sizesTitle = document.createElement("h1");
sizesTitle.setAttribute("class", "text-center animated jello text-muted");
sizesTitle.innerHTML = "Button Sizes";

/**
 * extra-small Buttons
 */
const xsButton = new EgButton();
xsButton.id = "xsButton"
xsButton.btn = "btn-primary btn-xs";
xsButton.innerText = "xsmall";

/**
 * small Buttons
 */
const smButton = new EgButton();
smButton.id = "smButton"
smButton.btn = "btn-primary btn-sm";
smButton.innerText = "small";

/**
 * regular Buttons
 */
const regularButton = new EgButton();
regularButton.id = "regularButton"
regularButton.btn = "btn-primary";
regularButton.innerText = "regular";

/**
 * medium Buttons
 */
const mdButton = new EgButton();
mdButton.id = "mdButton"
mdButton.btn = "btn-primary btn-md";
mdButton.innerText = "medium";

/**
 * large Buttons
 */
const lgButton = new EgButton();
lgButton.id = "lgButton"
lgButton.btn = "btn-primary btn-lg";
lgButton.innerText = "large";

buttonSizesCol.addMultipleObjects(
  sizesTitle,
  xsButton,
  smButton,
  regularButton,
  mdButton,
  lgButton
);

secondRow.addMultipleObjects(buttonStylesCol, buttonSizesCol);

buttonsMainCol.addMultipleObjects(firstRow,secondRow);
buttonsGrid.appendChild(buttonsMainCol);
document.body.appendChild(buttonsGrid);

/**
 * End Buttons
 */
