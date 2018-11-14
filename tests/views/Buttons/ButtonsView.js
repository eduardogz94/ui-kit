/* </-------------- START BUTTONS SAMPLES ----------------/> */

let firstRow = new EgRow();

let buttonsTitle = returnTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Buttons"
);

let buttonsMainCol = appendsCreateCol("col-12", buttonsTitle);

firstRow.addMultipleObjects(returnButtonColorsCol(), returnButtonsOutlineCol());

let secondRow = new EgRow();

secondRow.addMultipleObjects(returnButtonStylesCol(), returnButtonSizesCol());

buttonsMainCol.addMultipleObjects(firstRow, secondRow);
document.body.appendChild(buttonsMainCol);

/* </-------------- END BUTTONS SAMPLES ----------------/> */
