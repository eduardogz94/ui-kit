/** Buttons Sizes */

/**
 * A function that return the buttons samples sizing col.
 * @function
 * @returns {EgCol} Buttons sizes col sample.
 */
const returnButtonSizesCol = () => {
  let sizesTitle = returnTextElement(
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
