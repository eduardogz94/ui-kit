/**
 * Start Buttons
 */

const buttonsGrid = new EgGrid();
const buttonsMainCol = new EgCol("col-12");
buttonsMainCol.bg = "bg-alt";

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
const buttonsColorsCol = new EgCol("col-6");

const colorsTitle = document.createElement("h1");
colorsTitle.setAttribute("class", "text-center animated jello text-muted");
colorsTitle.innerHTML = "Button Colors";

/**
 * Primary Buttons
 */
const buttonPrimary = new EgButton("btn-primary");
buttonPrimary.id = "buttonPrimary";
buttonPrimary.innerText = "primary";

/**
 * Secondary Buttons
 */
const buttonSecondary = new EgButton("btn-secondary");
buttonSecondary.id = "buttonSecondary";
buttonSecondary.innerText = "secondary";

/**
 * Success Buttons
 */
const buttonSuccess = new EgButton("btn-success");
buttonSuccess.id = "buttonSuccess";
buttonSuccess.innerText = "success";

/**
 * Danger Buttons
 */
const buttonDanger = new EgButton("btn-danger");
buttonDanger.id = "buttonDanger";
buttonDanger.innerText = "danger";

/**
 * Info Buttons
 */
const buttonInfo = new EgButton("btn-info");
buttonInfo.id = "buttonInfo";
buttonInfo.innerText = "info";

/**
 * Warning Buttons
 */
const buttonWarning = new EgButton("btn-warning");
buttonWarning.id = "buttonWarning";
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

const outlineButtonsCol = new EgCol("col-6");

const outlineTitle = document.createElement("h1");
outlineTitle.setAttribute("class", "text-center animated jello text-muted");
outlineTitle.innerHTML = "Outline";

/**
 * Primary Outline Buttons
 */
const outlinePrimaryButton = new EgButton("btn-outline-primary");
outlinePrimaryButton.id = "outlinePrimaryButton";
outlinePrimaryButton.innerText = "primary";

/**
 * Secondary Outline Buttons
 */
const outlineSecondaryButton = new EgButton("btn-outline-secondary");
outlineSecondaryButton.id = "outlineSecondaryButton";
outlineSecondaryButton.innerText = "secondary";

/**
 * Success Outline Buttons
 */
const outlineSuccessButton = new EgButton("btn-outline-success");
outlineSuccessButton.id = "outlineSuccessButton";
outlineSuccessButton.innerText = "success";

/**
 * Danger Outline Buttons
 */
const outlineDangerButton = new EgButton("btn-outline-danger");
outlineDangerButton.id = "outlineDangerButton";
outlineDangerButton.innerText = "danger";

/**
 * Info Outline Buttons
 */
const outlineInfoButton = new EgButton("btn-outline-info");
outlineInfoButton.id = "outlineInfoButton";
outlineInfoButton.innerText = "info";

/**
 * Warning Outline Buttons
 */
const outlineWarningButton = new EgButton("btn-outline-warning");
outlineWarningButton.id = "outlineWarningButton";
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

const buttonStylesCol = new EgCol("col-6");

const stylesTitle = document.createElement("h1");
stylesTitle.setAttribute("class", "text-center animated jello text-muted");
stylesTitle.innerHTML = "Button Styles";

/**
 * Default Buttons
 */
const defaultButton = new EgButton("btn-primary");
defaultButton.id = "defaultButton";
defaultButton.innerText = "Default";

/**
 * Outline Buttons
 */
const outlineButton = new EgButton("btn-outline-primary");
outlineButton.id = "outlineButton";
outlineButton.innerText = "Outline";

/**
 * Round Buttons
 */
const roundButton = new EgButton("btn-primary btn-round");
roundButton.id = "roundButton";
roundButton.innerText = "Round";

/**
 * Icon Buttons
 */
const iconButton = new EgButton("btn-primary btn-round");
iconButton.id = "iconButton";
iconButton.innerText = "Icon";

/**
 * Circle Buttons
 */
const circleButton = new EgButton("btn-circle");
circleButton.id = "circleButton";
circleButton.innerText = "c";

/**
 * Link Buttons
 */
const linkButton = new EgButton("btn-link");
linkButton.id = "linkButton";
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

const buttonSizesCol = new EgCol("col-6");

const sizesTitle = document.createElement("h1");
sizesTitle.setAttribute("class", "text-center animated jello text-muted");
sizesTitle.innerHTML = "Button Sizes";

/**
 * extra-small Buttons
 */
const xsButton = new EgButton("btn-primary btn-xs");
xsButton.id = "xsButton";
xsButton.innerText = "xsmall";

/**
 * small Buttons
 */
const smButton = new EgButton("btn-primary btn-sm");
smButton.id = "smButton";
smButton.innerText = "small";

/**
 * regular Buttons
 */
const regularButton = new EgButton("btn-primary");
regularButton.id = "regularButton";
regularButton.innerText = "regular";

/**
 * medium Buttons
 */
const mdButton = new EgButton("btn-primary btn-md");
mdButton.id = "mdButton";
mdButton.innerText = "medium";

/**
 * large Buttons
 */
const lgButton = new EgButton("btn-primary btn-lg");
lgButton.id = "lgButton";
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

buttonsMainCol.addMultipleObjects(firstRow, secondRow);
buttonsGrid.appendChild(buttonsMainCol);
document.body.appendChild(buttonsGrid);

/**
 * End Buttons
 */
