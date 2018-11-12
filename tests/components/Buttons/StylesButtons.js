/** Button Styles */

/**
 * A function that returns button styles col sample.
 */
const returnButtonStylesCol = () => {
  let stylesTitle = returnTextElement(
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
