/** Outline Buttons */

/**
 * A function that returns outline buttons col samples.
 */
const returnOutlineButtonsCol = () => {
  let outlineTitle = returnTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Button Outline"
  );

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
