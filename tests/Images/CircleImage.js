import EgImage from "../../src/components/EgImage.js";
import {
  createTextElement,
  appendsCreateCol
} from "../../src/js/sivaFunctions.js";

/** A function that return image circle col sample.
 * @function
 * @returns {EgImage} With all the props inside function.
 */
export const sampleImageCircle = () => {
  let circleTitle = createTextElement(
    "h4",
    "text-center animated jello text-muted lead",
    "Circle"
  );

  let imageCircle = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageCircle"
  );
  imageCircle.id = "imageCircle";
  imageCircle.type = "mx-auto d-block rounded-circle img-fluid";

  let imageCircleCol = appendsCreateCol("col-2", circleTitle, imageCircle);
  return imageCircleCol;
};
