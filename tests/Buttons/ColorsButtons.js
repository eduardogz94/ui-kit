import {
  createTextElement,
  appendsCreateCol,
  createButton
} from "../../src/js/sivaFunctions.js";

/** A function that return the buttons samples colors col, usefull for routing, rendering, etc.
 * @function
 * @returns {EgCol} Buttons colors col sample.
 */
export const sampleButtonColors = () => {
  let colorsTitle = createTextElement("h4", "animated jello text-muted lead", "Button Colors");

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
