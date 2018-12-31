import {
  createTextElement,
  appendsCreateCol
} from "../../../src/core/sivaFunctions.js";

export const boxappHome = () => {
  let homeTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary blanch offset-3 mt-4",
    "Welcome to boxapp Aplication!"
  );

  let mainCol = appendsCreateCol("col-12", homeTitle);
  mainCol.css = "offset-1 mt-5";

  return mainCol;
};
