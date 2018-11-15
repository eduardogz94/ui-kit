/* </-------------- START IMAGES SAMPLES ----------------/> */

let imagesRow = new EgRow();

let imagesTitle = createTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Images"
);

let imagesMainCol = appendsCreateCol("col-12", imagesTitle);
imagesMainCol.bg = "bg-alt";

let imageRoundedCol = sampleImageRounded();
let imageCircleCol = sampleImageCircle();
let imageThumbnailCol = sampleImageThumbnail();
let imageRaisedCol = sampleImageRaised();

addMultipleElements(
  imagesRow,
  imageRoundedCol,
  imageCircleCol,
  imageThumbnailCol,
  imageRaisedCol
);

imagesMainCol.appendChild(imagesRow);

document.body.appendChild(imagesMainCol);
/* </-------------- START IMAGES SAMPLES ----------------/> */
