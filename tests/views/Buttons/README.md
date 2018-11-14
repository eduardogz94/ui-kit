#Buttons View Sample
Here is where you use the functions created on the test/components folder (the components renders) to use it on the page render (tests/views)

```javascript
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
```
