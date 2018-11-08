/** Buttons Sizes */

/**
 * A function that return the buttons samples sizing col.
 */
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
