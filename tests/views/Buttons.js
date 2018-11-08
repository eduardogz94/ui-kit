/** Start Buttons */

const buttonsMainCol = new EgCol("col-12");
// buttonsMainCol.bg = "bg-white";

const firstRow = new EgRow();

const buttonsTitle = document.createElement("h1");
buttonsTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
buttonsTitle.innerHTML = "Buttons";
buttonsMainCol.appendChild(buttonsTitle);

firstRow.addMultipleObjects(returnButtonColorsCol(), returnOutlineButtonsCol());

const secondRow = new EgRow();

secondRow.addMultipleObjects(returnButtonStylesCol(), returnButtonSizesCol());

buttonsMainCol.addMultipleObjects(firstRow, secondRow);
document.body.appendChild(buttonsMainCol);

/** End Buttons */
