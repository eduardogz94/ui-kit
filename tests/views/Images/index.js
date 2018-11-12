/* </-------------- START IMAGES SAMPLES ----------------/> */

let imagesRow = new EgRow();

let imagesTitle = returnTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Images"
);

let imagesMainCol = appendsCreateCol("col-12", imagesTitle);
imagesMainCol.bg = "bg-alt";

/** Image Rounded*/
let imageRoundedCol = returnImageRoundedCol();
/** Image Circle*/
let imageCircleCol = returnImageCircleCol();
/** Image Thumbnail*/
let imageThumbnailCol = returnImageThumbnailCol();
/** Image Raised*/
let imageRaisedCol = returnImageRaisedCol();

imagesRow.addMultipleObjects(
  imageRoundedCol,
  imageCircleCol,
  imageThumbnailCol,
  imageRaisedCol
);

imagesMainCol.appendChild(imagesRow);

document.body.appendChild(imagesMainCol);
/* </-------------- START IMAGES SAMPLES ----------------/> */
