/** Button Styles */

const returnButtonStylesCol = () => {
  let stylesTitle = document.createElement("h1");
  stylesTitle.setAttribute("class", "text-center animated jello text-muted");
  stylesTitle.innerHTML = "Button Styles";

  /** Default Buttons */
  let defaultButton = createButton("btn-primary", "Default", "defaultButton");

  /** Outline Buttons */
  let outlineButton = createButton(
    "btn-outline-primary",
    "Outline",
    "outlineButton"
  );

  /** Round Buttons */
  let roundButton = createButton(
    "btn-primary btn-round",
    "Round",
    "roundButton"
  );

  /** Icon Buttons */
  let iconButton = createButton("btn-primary btn-round", "Icon", "iconButton");
  // iconButton.addIcon("fab fa-google")

  /** Circle Buttons */
  let circleButton = createButton("btn-circle", "c", "circleButton");

  /** Link Buttons */
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
