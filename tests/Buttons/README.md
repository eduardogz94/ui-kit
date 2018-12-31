#Buttons View Sample
Here is where you use the functions created on the test/components folder (the components renders) to use it on the page render (tests/views)

```javascript
/* </-------------- START BUTTONS SAMPLES ----------------/> */

let firstRow = new EgRow();

let buttonsTitle = createTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Buttons"
);

let buttonsMainCol = appendsCreateCol("col-12", buttonsTitle);

firstRow.addMultipleObjects(returnButtonColorsCol(), returnButtonsOutlineCol());

let secondRow = new EgRow();

secondRow.addMultipleObjects(returnButtonStylesCol(), returnButtonSizesCol());

buttonsMainCol.addMultipleObjects(firstRow, secondRow);
document.body.appendChild(buttonsMainCol);

/* </-------------- END BUTTONS SAMPLES ----------------/> */
```

##This are the renders of the buttons samples (tests/components)

This works as functions to create and returns the buttons that will be used on
the renders samples (tests/views folder)

![picture](../../../src/assets/images/buttons.png)

#Button Colors

- A function that returns button colors col samples.

```javascript
const returnButtonColorsCol = () => {
  let colorsTitle = createTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Button Colors"
  );

  /** Primary Button Sample */
  let buttonPrimary = createButton("btn-primary", "primary", "buttonPrimary");

  /** Secondary Button Sample */
  let buttonSecondary = createButton(
    "btn-secondary",
    "secondary",
    "buttonSecondary"
  );

  /** Success Button Sample */
  let buttonSuccess = createButton("btn-success", "success", "buttonSuccess");

  /** Danger Button Sample */
  let buttonDanger = createButton("btn-danger", "danger", "buttonDanger");

  /** Info Button Sample */
  let buttonInfo = createButton("btn-info", "info", "buttonInfo");

  /** Warning Button Sample */
  let buttonWarning = createButton("btn-warning", "warning", "buttonWarning");

  /** Dark Button Sample */
  let buttonDark = createButton("btn-dark", "dark", "buttonDark");

  /** White Button Sample */
  let buttonWhite = createButton("btn-white", "white", "buttonWhite");

  /** All buttons appened to a col  */
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

- A function that returns outline buttons col samples.

```javascript
const returnButtonsOutlineCol = () => {
  let outlineTitle = createTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Button Outline"
  );

  /** Primary Outline Button Sample */
  let outlinePrimaryButton = createButton(
    "btn-outline-primary",
    "primary",
    "outlinePrimaryButton"
  );

  /** Secondary Outline Button Sample */
  let outlineSecondaryButton = createButton(
    "btn-outline-secondary",
    "secondary",
    "outlineSecondaryButton"
  );

  /** Success Outline Button Sample */
  let outlineSuccessButton = createButton(
    "btn-outline-success",
    "success",
    "outlineSuccessButton"
  );

  /** Danger Outline Button Sample */
  let outlineDangerButton = createButton(
    "btn-outline-danger",
    "danger",
    "outlineDangerButton"
  );

  /** Info Outline Button Sample */
  let outlineInfoButton = createButton(
    "btn-outline-info",
    "info",
    "outlineInfoButton"
  );

  /** Warning Outline Button Sample */
  let outlineWarningButton = createButton(
    "btn-outline-warning",
    "warning",
    "outlineWarningButton"
  );

  /** White Outline Button Sample */
  let outlineWhiteButton = createButton(
    "btn-outline-white",
    "white",
    "outlineWhiteButton"
  );

  /** Dark Outline Button Sample */
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

#Buttons Sizes

- A function that return the buttons samples sizing col.

```javascript
const returnButtonSizesCol = () => {
  let sizesTitle = createTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Button Sizes"
  );

  /** extra-small Button Sample */
  let xsButton = createButton("btn-primary btn-xs", "xsmall", "xsButton");

  /** small Button Sample */
  let smButton = createButton("btn-primary btn-sm", "small", "smButton");

  /** regular Button Sample */
  let regularButton = createButton("btn-primary", "regular", "regularButton");

  /** medium Button Sample */
  let mdButton = createButton("btn-primary btn-md", "medium", "mdButton");

  /** large Button Sample */
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

#Button Styles

- A function that returns button styles col sample.

```javascript
const returnButtonStylesCol = () => {
  let stylesTitle = createTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Button Styles"
  );

  /** Default Button Sample */
  let defaultButton = createButton("btn-primary", "Default", "defaultButton");

  /** Outline Button Sample */
  let outlineButton = createButton(
    "btn-outline-primary",
    "Outline",
    "outlineButton"
  );

  /** Round Button Sample */
  let roundButton = createButton(
    "btn-primary btn-round",
    "Round",
    "roundButton"
  );

  /** Icon Button Sample */
  let iconButton = createButton("btn-primary btn-round", "Icon", "iconButton");

  /** Circle Button Sample */
  let circleButton = createButton("btn-circle", "c", "circleButton");

  /** Link Button Sample */
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
