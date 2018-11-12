# Eg-components

## Documentation and ussage


##Examples for diferent types of cards

A function that creates danger card object
```javascript
const createDangerCard = () => {
  let dangerCard = new EgCard("card-danger");
  dangerCard.id = "danger-card";
  dangerCard.footer = "Javascript card footer";

  return dangerCard;
};
```

A function that creates a default card object
```javascript
const createDefaultCard = () => {
  let darkCard = new EgCard("card-dark");
  darkCard.id = "dark-card";
  darkCard.body = "This is a body passed as a string in javascript";
  darkCard.footer = "Javascript card footer";
  darkCard.header = "Dark Title (Default Card Title Attributes)";

  return darkCard;
};
```

A function that creates an info card object
```javascript
const createInfoCard = () => {
  let infoCard = new EgCard("card-info");
  infoCard.id = "info-card";
  infoCard.body =
    "This is a body passed as a string in javascript with a info button appened from the body <br><br>";
  infoCard.footer = "Javascript card footer";

  return infoCard;
};
```

A function that creates a login card object
```javascript
const createLoginCard = () => {
  const loginCard = new EgCard("card-primary");
  loginCard.id = "login";
  loginCard.header = "Login Form";

  return loginCard
};
```

A function that creates a primary card object
```javascript
const createPrimaryCard = () => {
  let primaryCard = new EgCard("card-primary");
  primaryCard.id = "primary-card";
  primaryCard.body = "This is a body passed as a string in javascript";
  primaryCard.footer = "Javascript card footer";

  return primaryCard;
};
```

A function that creates a secondary card object
```javascript
const createSecondaryCard = () => {
  let secondaryCard = new EgCard("card-secondary");
  secondaryCard.id = "secondary-card";
  secondaryCard.body = `This is a body passed as a string in javascript with a info button appened from the body <br><br>`;
  secondaryCard.footer = "Javascript card footer";

  return secondaryCard;
};
```

A function that creates a succes card object
```javascript
const createSuccessCard = () => {
  let successCard = new EgCard("card-success");
  successCard.id = "success-card";

  return successCard;
};
```

A function that creates a warning card object
```javascript
const createWarningCard = () => {
  let warningCard = new EgCard("card-warning");
  warningCard.id = "warning-card";
  warningCard.body = "This is a body passed as a string in javascript";

  return warningCard;
};
```

##Examples for input types

#Basic inputs
Creates the input for email input sample.
```javascript
const createEmailInput = () => {
  let emailInput = createInput(
    "form-control",
    "email",
    "email",
    "col-10",
    "Email Javascript Input"
  );
  emailInput.css = "mb-4";

  return emailInput;
};
```

Creates the input for text input sample.
```javascript
const createTextInputCol = () => {
  let textInput = createInput(
    "form-control",
    "text",
    "text",
    "col-10",
    "Text Javascript Input"
  );
  textInput.css = "mb-4";

  return textInput;
};
```

Creates the input for password input sample.
```javascript
const createPasswordInput = () => {
  let passwordInput = createInput(
    "form-control",
    "password",
    "password",
    "col-10",
    "Password Javascript Input"
  );
  passwordInput.css = "mb-4";

  return passwordInput;
};
```

#Sizing Inputs

Creates the input for xsmall input sample.
```javascript
const xSmallInput = () => {
  let xsmallInput = createInput(
    "form-control form-control-sm",
    "text",
    "xsmall",
    "col-10",
    "xsmall Javascript Input"
  );
  xsmallInput.css = "mb-4";

  return xsmallInput;
};
```

Creates the input for default input sample.
```javascript
const defaultInput = () => {
  let defaultInput = createInput(
    "form-control",
    "text",
    "default",
    "col-10",
    "Default Javascript Input"
  );
  defaultInput.css = "mb-4";

  return defaultInput;
};
```

Creates the input for large input sample.
```javascript
const largeInput = () => {
  let largeInput = createInput(
    "form-control form-control-lg",
    "text",
    "large",
    "col-10",
    "Large Javascript Input"
  );
  largeInput.css = "mb-4";

  return largeInput;
};
```

#Validation Inputs

Creates the input for success input sample.
```javascript
const createSuccessInput = () => {
  let successInput = createInput(
    "form-control form-control-success",
    "email",
    "successInput",
    "col-10",
    "Email Javascript Input"
  );
  successInput.css = "mb-4";

  return successInput;
};
```

Creates the input for warning input sample.
```javascript
const createWarningInput = () => {
  let warningInput = createInput(
    "form-control form-control-warning",
    "text",
    "warningInput",
    "col-10",
    "Warning Javascript Input"
  );
  warningInput.css = "mb-4";

  return warningInput;
};
```

Creates the input for danger input sample.
```javascript
const createDangerInput = () => {
  let dangerInput = createInput(
    "form-control form-control-danger",
    "password",
    "dangerInput",
    "col-10",
    "Danger Javascript Input"
  );
  dangerInput.css = "mb-4";

  return dangerInput;
};
```

##Diferent types of buttons

#Color buttons

 A function that returns button colors col samples.
```javascript
const returnButtonColorsCol = () => {
  let colorsTitle = document.createElement("h1");
  colorsTitle.setAttribute("class", "text-center animated jello text-muted");
  colorsTitle.innerHTML = "Button Colors";

  /** Primary Buttons */
  let buttonPrimary = createButton("btn-primary", "primary", "buttonPrimary");

  /** Secondary Buttons */
  let buttonSecondary = createButton(
    "btn-secondary",
    "secondary",
    "buttonSecondary"
  );

  /** Success Buttons */
  let buttonSuccess = createButton("btn-success", "success", "buttonSuccess");

  /** Danger Buttons */
  let buttonDanger = createButton("btn-danger", "danger", "buttonDanger");

  /** Info Buttons */
  let buttonInfo = createButton("btn-info", "info", "buttonInfo");

  /** Warning Buttons */
  let buttonWarning = createButton("btn-warning", "warning", "buttonWarning");

  /** Dark Buttons */
  let buttonDark = createButton("btn-dark", "dark", "buttonDark");

  /** White Buttons */
  let buttonWhite = createButton("btn-white", "white", "buttonWhite");

  let buttonsColorsCol = appendsCreateCol(
    "col-6",
    colorsTitle,
    buttonPrimary,
    buttonSecondary,
    buttonSuccess,
    buttonDanger,
    buttonInfo,
    buttonWarning,
    buttonDark,
    buttonWhite
  );

  return buttonsColorsCol;
};
```

#Outline Buttons

A function that returns outline buttons col samples.
```javascript
const returnOutlineButtonsCol = () => {
  let outlineTitle = document.createElement("h1");
  outlineTitle.setAttribute("class", "text-center animated jello text-muted");
  outlineTitle.innerHTML = "Outline";

  /** Primary Outline Buttons */
  let outlinePrimaryButton = createButton(
    "btn-outline-primary",
    "primary",
    "outlinePrimaryButton"
  );

  /** Secondary Outline Buttons */
  let outlineSecondaryButton = createButton(
    "btn-outline-secondary",
    "secondary",
    "outlineSecondaryButton"
  );

  /** Success Outline Buttons */
  let outlineSuccessButton = createButton(
    "btn-outline-success",
    "success",
    "outlineSuccessButton"
  );

  /** Danger Outline Buttons */
  let outlineDangerButton = createButton(
    "btn-outline-danger",
    "danger",
    "outlineDangerButton"
  );

  /** Info Outline Buttons */
  let outlineInfoButton = createButton(
    "btn-outline-info",
    "info",
    "outlineInfoButton"
  );

  /** Warning Outline Buttons */
  let outlineWarningButton = createButton(
    "btn-outline-warning",
    "warning",
    "outlineWarningButton"
  );

  /** White Outline Buttons */
  let outlineWhiteButton = createButton(
    "btn-outline-white",
    "white",
    "outlineWhiteButton"
  );

  /** Dark Outline Buttons */
  let outlineDarkButton = createButton(
    "btn-outline-dark",
    "dark",
    "outlineDarkButton"
  );

  let outlineButtonsCol = appendsCreateCol(
    "col-6",
    outlineTitle,
    outlinePrimaryButton,
    outlineSecondaryButton,
    outlineSuccessButton,
    outlineDangerButton,
    outlineInfoButton,
    outlineWarningButton,
    outlineWhiteButton,
    outlineDarkButton
  );

  return outlineButtonsCol;
};
```

#Sizes Buttons
A function that return the buttons samples sizing col.
```javascript
const returnButtonSizesCol = () => {
  let sizesTitle = document.createElement("h1");
  sizesTitle.setAttribute("class", "text-center animated jello text-muted");
  sizesTitle.innerHTML = "Button Sizes";

  /** extra-small Buttons */
  let xsButton = createButton("btn-primary btn-xs", "xsmall", "xsButton");

  /** small Buttons */
  let smButton = createButton("btn-primary btn-sm", "small", "smButton");

  /** regular Buttons */
  let regularButton = createButton("btn-primary", "regular", "regularButton");

  /** medium Buttons */
  let mdButton = createButton("btn-primary btn-md", "medium", "mdButton");

  /** large Buttons */
  let lgButton = createButton("btn-primary btn-lg", "large", "lgButton");

  let buttonSizesCol = appendsCreateCol(
    "col-6",
    sizesTitle,
    xsButton,
    smButton,
    regularButton,
    mdButton,
    lgButton
  );

  return buttonSizesCol;
};
```

A function that returns button's sample styles col
```javascript
const returnButtonStylesCol = () => {
  let stylesTitle = document.createElement("h1");
  stylesTitle.setAttribute("class", "text-center animated jello text-muted");
  stylesTitle.innerHTML = "Button Styles";

  /** Default Buttons */
  let defaultButton = createButton("btn-primary", "Default", "defaultButton");

  /** Outline Buttons */
  let outlineButton = createButton(
    "btn-outline-primary",
    "Outline",
    "outlineButton"
  );

  /** Round Buttons */
  let roundButton = createButton(
    "btn-primary btn-round",
    "Round",
    "roundButton"
  );

  /** Icon Buttons */
  let iconButton = createButton("btn-primary btn-round", "Icon", "iconButton");
  // iconButton.addIcon("fab fa-google")

  /** Circle Buttons */
  let circleButton = createButton("btn-circle", "c", "circleButton");

  /** Link Buttons */
  let linkButton = createButton("btn-link", "Link", "linkButton");

  let buttonStylesCol = appendsCreateCol(
    "col-6",
    stylesTitle,
    defaultButton,
    outlineButton,
    roundButton,
    iconButton,
    circleButton,
    linkButton
  );

  return buttonStylesCol;
};
```

##Images

A function that return image circle col sample.
```javascript
const returnImageCircleCol = () => {
  let circleTitle = returnTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Circle"
  );

  let imageCircle = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageCircle"
  );
  imageCircle.id = "imageCircle";
  imageCircle.type = "mx-auto d-block rounded-circle img-fluid";

  let imageCircleCol = appendsCreateCol("col-3", circleTitle, imageCircle);
  return imageCircleCol;
}
```

A function that returns image raised col sample.
```javascript
const returnImageRaisedCol = () => {
  const raisedTitle = returnTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Raised"
  );

  const imageRaised = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageRaised"
  );
  imageRaised.id = "imageRaised";
  imageRaised.type = "mx-auto d-block rounded-circle img-raised img-fluid";

  const imageRaisedCol = appendsCreateCol("col-3", raisedTitle, imageRaised);

  return imageRaisedCol;
};
```

A function that returns image rounded col sample.
```javascript
const returnImageRoundedCol = () => {
  let roundedTitle = returnTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Rounded"
  );

  let imageRounded = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageRounded"
  );
  imageRounded.id = "imageRounded";
  imageRounded.type = "mx-auto d-block rounded img-fluid";

  let imageRoundedCol = appendsCreateCol("col-3", roundedTitle, imageRounded);
  return imageRoundedCol;
};
```

A function that returns image thumbnail col sample.
```javascript
const returnImageThumbnailCol = () => {
  let thumbnailTitle = returnTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Thumbnail"
  );

  let imageThumbnail = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageThumbnail"
  );
  imageThumbnail.id = "imageThumbnail";
  imageThumbnail.type = "mx-auto d-block img-thumbnail img-fluid";

  let imageThumbnailCol = appendsCreateCol(
    "col-3",
    thumbnailTitle,
    imageThumbnail
  );
  return imageThumbnailCol;
};
```

##Views

#Buttons

```javascript
const buttonsMainCol = new EgCol("col-12");
// buttonsMainCol.bg = "bg-white";

const firstRow = new EgRow();

const buttonsTitle = document.createElement("h1");
buttonsTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
buttonsTitle.innerHTML = "Buttons";
buttonsMainCol.appendChild(buttonsTitle);

firstRow.addMultipleObjects(returnButtonColorsCol(), returnOutlineButtonsCol());

const secondRow = new EgRow();

secondRow.addMultipleObjects(returnButtonStylesCol(), returnButtonSizesCol());

buttonsMainCol.addMultipleObjects(firstRow, secondRow);
document.body.appendChild(buttonsMainCol);
```

#Cards

```javascript
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
```

##Inputs

```javascript
const inputGrid = new EgGrid();

const firstInputsCol = new EgCol("col-4");
const secondInputCol = new EgCol("col-4");
const thirdInputCol = new EgCol("col-4");

const inputTitle = document.createElement("h1");
inputTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
inputTitle.innerHTML = "Form Inputs";

/** Basic Inputs */
const basicInputsTitle = document.createElement("h2");
basicInputsTitle.setAttribute("class", "text-muted");
basicInputsTitle.innerHTML = "Basic Inputs";

let emailTitle = document.createElement("h5");
emailTitle.setAttribute("class", "text-muted text-primary");
emailTitle.innerHTML = "Email";

let passwordTitle = document.createElement("h5");
passwordTitle.setAttribute("class", "text-muted text-primary");
passwordTitle.innerHTML = "Password";

let textTitle = document.createElement("h5");
textTitle.setAttribute("class", "text-muted text-primary");
textTitle.innerHTML = "Text";

firstInputsCol.addMultipleObjects(
  basicInputsTitle,
  emailTitle,
  createEmailInput(),
  textTitle,
  createTextInputCol(),
  passwordTitle,
  createPasswordInput()
);

/** Validations Inputs */
const validationsInputsTitle = document.createElement("h2");
validationsInputsTitle.setAttribute("class", "text-muted");
validationsInputsTitle.innerHTML = "Validations Inputs";

let successTitle = document.createElement("h5");
successTitle.setAttribute("class", "text-muted text-success");
successTitle.innerHTML = "Success";

let warningTitle = document.createElement("h5");
warningTitle.setAttribute("class", "text-muted text-warning");
warningTitle.innerHTML = "Warning";

let dangerTitle = document.createElement("h5");
dangerTitle.setAttribute("class", "text-muted text-danger");
dangerTitle.innerHTML = "Danger";

secondInputCol.addMultipleObjects(
  validationsInputsTitle,
  successTitle,
  createSuccessInput(),
  warningTitle,
  createWarningInput(),
  dangerTitle,
  createDangerInput()
);

/** Size Inputs */
const SizeInputsTitle = document.createElement("h2");
SizeInputsTitle.setAttribute("class", "text-muted");
SizeInputsTitle.innerHTML = "Size Inputs";

let xsmallTitle = document.createElement("h5");
xsmallTitle.setAttribute("class", "text-muted text-primary");
xsmallTitle.innerHTML = "xsmall";

let defaultTitle = document.createElement("h5");
defaultTitle.setAttribute("class", "text-muted text-primary");
defaultTitle.innerHTML = "Default";

let largeTitle = document.createElement("h5");
largeTitle.setAttribute("class", "text-muted text-primary");
largeTitle.innerHTML = "Large";

thirdInputCol.addMultipleObjects(
  SizeInputsTitle,
  xsmallTitle,
  xSmallInput(),
  defaultTitle,
  defaultInput(),
  largeTitle,
  largeInput()
);

/** End All Type Of Inputs, starts rendering */

const mainInputCol = appendsCreateCol(
  "col-12",
  inputTitle,
  firstInputsCol,
  secondInputCol,
  thirdInputCol
);

inputGrid.appendChild(mainInputCol);
document.body.appendChild(inputGrid);
```

#Images

```javascript
/** START IMAGES */
const imagesRow = new EgRow();

const imagesTitle = returnTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Images"
);

const imagesMainCol = appendsCreateCol("col-12", imagesTitle);
imagesMainCol.bg = "bg-alt";

/** Image Rounded*/
const imageRoundedCol = returnImageRoundedCol();
/** Image Circle*/
const imageCircleCol = returnImageCircleCol();
/** Image Thumbnail*/
const imageThumbnailCol = returnImageThumbnailCol();
/** Image Raised*/
const imageRaisedCol = returnImageRaisedCol();

imagesRow.addMultipleObjects(
  imageRoundedCol,
  imageCircleCol,
  imageThumbnailCol,
  imageRaisedCol
);

imagesMainCol.appendChild(imagesRow);

document.body.appendChild(imagesMainCol);
/** END IMAGES */

```

##Components

A function that sets the validation length of a desired Input.
@param {EgInput} input The input that desires to set a validation length (required). 
@param {Integer} length Length of the string that will validate the input (required). 
```javascript
const setValidationLength = (input, length) => {
  input.validateValue(length)
}
```

A function that sets the validation email of a desired input.
@param {EgInput} input The input that desires to validate email (required).
@param {String} type A string with the type of email that you want to validate (required). 
```javascript
const setValidationEmail = (input, type) => {
  input.validateEmail(type)
}
```

A function that generates a new EgInput.
@param {String} control Contorl attribute for input (required).
@param {String} type Type of input (required).
@param {String} id Id of input (optional but recomended).
@param {String} col Col attribute for the input (optional).
@param {String} placeholder Placeholder attribute for the input (optional)
```javascript
const createInput = (control, type, id = null, col = null, placeholder = null) => {
  let newInput = new EgInput(control, type);
  if (id) newInput.id = id;
  if (col) newInput.col = col;
  if (placeholder) newInput.placeholder = placeholder;

  return newInput;
};
```

A function that creates card title object.
@param {Sting} style A string that sets the style of the text (required).
@param {String} text Text that belongs to the card header title (required).
```javascript
const createCardText = (style, text) => {
  let cardText = document.createElement("h6");
  cardText.setAttribute("class", style);
  cardText.innerHTML = text;

  return cardText;
};
```

A function that creates a button for a card.
@param {String} style A string that sets button style (required).
@param {String} text A string that sets innerText of the button (optional but recommended).
@param {String} id A string that sets the id of the button (optional but recommended).
@param {String} col A string that sets the col of the button (optional).
```javascript
const createButton = (style, text = null, id = null, col = null) => {
  let newButton = new EgButton(style);
  if (col) newButton.col = col;
  if (text) newButton.innerText = text;
  if (id) newButton.id = id;

  return newButton;
};
```

A function to appends and create a element into a new col.
@param {EgElement} Element receives a element and appends it (required).
@param {String} col A string for the col attribute (required).
@param {String} offset A string for the offset attribute (optional).
```javascript
const createCol = (element, col, offset = null) => {
  let newCol = new EgCol(col, offset);
  newCol.appendChild(element);

  return newCol;
};
```

A function to appends a various elements into a new col and creates it.
@param {String} col A string for the col attribute.
@param {EgElements} elements receives various elements and appends them into the new col.
```javascript
const appendsCreateCol = (col, ...elements) => {
  let newCol = new EgCol(col);
  elements.forEach(element => {
    newCol.appendChild(element);
  });

  return newCol;
};
```
