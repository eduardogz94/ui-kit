/* </-------------- START BUTTONS SAMPLES ----------------/> */

let firstRow = new EgRow();

let buttonsTitle = createTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Buttons"
);

let buttonsMainCol = appendsCreateCol("col-12", buttonsTitle);

addMultipleElements(firstRow, sampleButtonColors(), sampleButtonOutline());

let secondRow = new EgRow();

addMultipleElements(secondRow, sampleButtonStyles(), sampleButtonSizes());

addMultipleElements(buttonsMainCol, firstRow, secondRow);
document.body.appendChild(buttonsMainCol);

/* </-------------- END BUTTONS SAMPLES ----------------/> */
