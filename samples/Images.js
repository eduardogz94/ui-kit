/** START IMAGES */
const imagesGrid = new EgGrid();
const imagesMainCol = new EgCol("col-12");
imagesMainCol.bg = "bg-alt";

const imagesRow = new EgRow();

const imagesTitle = document.createElement("h1");
imagesTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
imagesTitle.innerHTML = "images";

imagesMainCol.appendChild(imagesTitle);

/**
 * Image Rounded
 */

const imageRoundedCol = new EgCol("col-3");

const roundedTitle = document.createElement("h1");
roundedTitle.setAttribute("class", "text-center animated jello text-muted");
roundedTitle.innerHTML = "Rounded";

const imageRounded = new EgImage("../assets/images/logo.jpeg", "imageRounded");
imageRounded.id = "imageRounded";
imageRounded.type = "mx-auto d-block rounded img-fluid";

imageRoundedCol.addMultipleObjects(roundedTitle, imageRounded);

/**
 * Image Circle
 */
const imageCircleCol = new EgCol("col-3");

const circleTitle = document.createElement("h1");
circleTitle.setAttribute("class", "text-center animated jello text-muted");
circleTitle.innerHTML = "Circle";

const imageCircle = new EgImage("../assets/images/logo.jpeg", "imageCircle");
imageCircle.id = "imageCircle";
imageCircle.type = "mx-auto d-block rounded-circle img-fluid";

imageCircleCol.addMultipleObjects(circleTitle, imageCircle);

/**
 * Image Thumbnail
 */
const imageThumbnailCol = new EgCol("col-3");

const thumbnailTitle = document.createElement("h1");
thumbnailTitle.setAttribute("class", "text-center animated jello text-muted");
thumbnailTitle.innerHTML = "Thumbnail";

const imageThumbnail = new EgImage(
  "../assets/images/logo.jpeg",
  "imageThumbnail"
);
imageThumbnail.id = "imageThumbnail";
imageThumbnail.type = "mx-auto d-block img-thumbnail img-fluid";

imageThumbnailCol.addMultipleObjects(thumbnailTitle, imageThumbnail);

/**
 * Image Raised
 */
const imageRaisedCol = new EgCol("col-3");

const raisedTitle = document.createElement("h1");
raisedTitle.setAttribute("class", "text-center animated jello text-muted");
raisedTitle.innerHTML = "Raised";

const imageRaised = new EgImage("../assets/images/logo.jpeg", "imageRaised");
imageRaised.id = "imageRaised";
imageRaised.type = "mx-auto d-block rounded-circle img-raised img-fluid";

imageRaisedCol.addMultipleObjects(raisedTitle, imageRaised);

imagesRow.addMultipleObjects(
  imageRoundedCol,
  imageCircleCol,
  imageThumbnailCol,
  imageRaisedCol
);
imagesMainCol.appendChild(imagesRow);

imagesGrid.appendChild(imagesMainCol);
document.body.appendChild(imagesGrid);
/** END IMAGES */
