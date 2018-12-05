import {
  createTextElement,
  appendsCreateCol,
  createButton
} from "../../src/js/sivaFunctions.js";

/**A function that return the buttons samples styles col, usefull for routing, rendering, etc.
 * @function
 * @returns {EgCol} Buttons styles col sample.
 */
export const sampleButtonStyles = () => {
  let stylesTitle = createTextElement("h4", "animated jello text-muted lead", "Button Styles");

  /** Default Button Sample */
  let defaultButton = createButton(
    "btn-primary btn-sm",
    "Default",
    "defaultButton"
  );

  /** Outline Button Sample */
  let outlineButton = createButton(
    "btn-outline-primary btn-sm",
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
  let iconButton = createButton(
    "btn-primary btn-round btn-sm",
    "Icon",
    "iconButton"
  );

  /** Circle Button Sample */
  let circleButton = createButton("btn-circle btn-sm", "c", "circleButton");

  /** Link Button Sample */
  let linkButton = createButton("btn-link btn-sm", "Link", "linkButton");

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

  buttonStylesCol.css = "mt-3";
  return buttonStylesCol;
};
