import EgImage from "../../src/components/EgImage.js";
import {
  createTextElement,
  appendsCreateCol
} from "../../src/js/sivaFunctions.js";

/** A function that returns image raised col sample.
 * @function
 * @returns {EgImage} With all the props inside function.
 */
export const sampleImageRaised = () => {
  let raisedTitle = createTextElement(
    "h4",
    "text-center animated jello text-muted",
    "Raised"
  );

  let imageRaised = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageRaised"
  );
  imageRaised.id = "imageRaised";
  imageRaised.type = "mx-auto d-block rounded-circle img-raised img-fluid";

  let imageRaisedCol = appendsCreateCol("col-2", raisedTitle, imageRaised);

  return imageRaisedCol;
};
