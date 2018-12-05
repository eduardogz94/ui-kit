import EgImage from "../../src/components/EgImage.js";
import {
  createTextElement,
  appendsCreateCol
} from "../../src/js/sivaFunctions.js";

/** A function that returns image thumbnail col sample.
 * @function
 * @returns {EgImage} With all the props inside function.
 */
export const sampleImageThumbnail = () => {
  let thumbnailTitle = createTextElement(
    "h4",
    "text-center animated jello text-muted lead",
    "Thumbnail"
  );

  let imageThumbnail = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageThumbnail"
  );
  imageThumbnail.id = "imageThumbnail";
  imageThumbnail.type = "mx-auto d-block img-thumbnail img-fluid";

  let imageThumbnailCol = appendsCreateCol(
    "col-2",
    thumbnailTitle,
    imageThumbnail
  );

  return imageThumbnailCol;
};
