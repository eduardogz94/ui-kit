import { sampleButtonColors } from "./ColorsButtons.js";
import { sampleButtonOutline } from "./OutlineColorsButtons.js";
import { sampleButtonSizes } from "./SizesButtons.js";
import { sampleButtonStyles } from "./StylesButtons.js";

import {
  createTextElement,
  appendsCreateCol
} from "../../src/js/sivaFunctions.js";

let buttonColors = sampleButtonColors();
let buttonOutline = sampleButtonOutline();
let buttonStyles = sampleButtonStyles();
let buttonSizes = sampleButtonSizes();

export const buttonsSampleRender = () => {
  let buttonsTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary text-center",
    "Buttons"
  );

  let buttonsMainCol = appendsCreateCol("col-8", buttonsTitle);
  buttonsMainCol.css = "offset-2";

  buttonsMainCol.appendMultipleElements(buttonColors, buttonOutline);
  buttonsMainCol.appendMultipleElements(buttonStyles, buttonSizes);

  return buttonsMainCol;
};
