/** Colors Buttons */

/**
 * A function that returns button colors col samples.
 */
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
