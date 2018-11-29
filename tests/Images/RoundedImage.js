import EgImage from "../../src/components/EgImage.js";
import {
  createTextElement,
  appendsCreateCol
} from "../../src/js/sivaFunctions.js";

/** A function that returns image rounded col sample.
 * @function
 * @returns {EgImage} With all the props inside function.
 */
export const sampleImageRounded = () => {
  let roundedTitle = createTextElement(
    "h4",
    "text-center animated jello text-muted",
    "Rounded"
  );

  let imageRounded = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageRounded"
  );
  imageRounded.id = "imageRounded";
  imageRounded.type = "mx-auto d-block rounded img-fluid";

  let imageRoundedCol = appendsCreateCol("col-2", roundedTitle, imageRounded);
  imageRoundedCol.css = "offset-2";
  return imageRoundedCol;
};
