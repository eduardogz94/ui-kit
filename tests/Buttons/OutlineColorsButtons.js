import {
  createTextElement,
  appendsCreateCol,
  createButton
} from "../../src/js/sivaFunctions.js";

/**A function that return the buttons samples outline colors col, usefull for routing, rendering, etc.
 * @function
 * @returns {EgCol} Buttons outline colors col sample.
 */
export const sampleButtonOutline = () => {
  let outlineTitle = createTextElement(
    "h4",
    "animated jello text-muted lead",
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
    "col-12",
    outlineTitle,
    outlinePrimaryButton,
    outlineSecondaryButton,
    outlineSuccessButton,
    outlineDangerButton,
    outlineInfoButton,
    outlineWarningButton,
    // outlineWhiteButton,
    outlineDarkButton
  );

  return outlineButtonsCol;
};
