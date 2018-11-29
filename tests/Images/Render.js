import { sampleImageRounded } from "./RoundedImage.js";
import { sampleImageCircle } from "./CircleImage.js";
import { sampleImageThumbnail } from "./ThumbnailImage.js";
import { sampleImageRaised } from "./RaisedImage.js";
import EgRow from "../../src/components/Grid/EgRow.js";

import {
  createTextElement,
  appendsCreateCol
} from "../../src/js/sivaFunctions.js";

let imageRounded = sampleImageRounded();
let imageCircle = sampleImageCircle();
let imageThumbnail = sampleImageThumbnail();
let imageRaised = sampleImageRaised();

export const imagesSampleRender = () => {
  let imagesRow = new EgRow();

  let imagesTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary text-center",
    "Images"
  );

  let imagesMainCol = appendsCreateCol("col-12", imagesTitle);
  imagesMainCol.bg = "bg-alt";

  imagesRow.appendMultipleElements(
    imageRounded,
    imageCircle,
    imageThumbnail,
    imageRaised
  );

  imagesMainCol.appendChild(imagesRow);

  return imagesMainCol;
};
