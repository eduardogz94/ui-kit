/** Colors Buttons */

/**
 * A function that returns button colors col samples.
 */
const returnButtonColorsCol = () => {
  let colorsTitle = returnTextElement(
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
