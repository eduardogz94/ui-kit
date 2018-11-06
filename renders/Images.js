/** START IMAGES */
const imagesGrid = new EgGrid();
const imagesMainCol = new EgCol();
imagesMainCol.bg = "bg-alt";
imagesMainCol.col = "col-12";

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

const imageRoundedCol = new EgCol();
imageRoundedCol.col = "col-3";

const roundedTitle = document.createElement("h1");
roundedTitle.setAttribute("class", "text-center animated jello text-muted");
roundedTitle.innerHTML = "Rounded";

const imageRounded = new EgImage();
imageRounded.id = "imageRounded"
imageRounded.alt = "imageRounded";
imageRounded.src = "assets/images/logo.jpeg";
imageRounded.type = "mx-auto d-block rounded img-fluid";

imageRoundedCol.addMultipleObjects(roundedTitle, imageRounded);

/**
 * Image Circle
 */
const imageCircleCol = new EgCol();
imageCircleCol.col = "col-3";

const circleTitle = document.createElement("h1");
circleTitle.setAttribute("class", "text-center animated jello text-muted");
circleTitle.innerHTML = "Circle";

const imageCircle = new EgImage();
imageCircle.id = "imageCircle"
imageCircle.alt = "imageCircle";
imageCircle.src = "assets/images/logo.jpeg";
imageCircle.type = "mx-auto d-block rounded-circle img-fluid";

imageCircleCol.addMultipleObjects(circleTitle, imageCircle);

/**
 * Image Thumbnail
 */
const imageThumbnailCol = new EgCol();
imageThumbnailCol.col = "col-3";

const thumbnailTitle = document.createElement("h1");
thumbnailTitle.setAttribute("class", "text-center animated jello text-muted");
thumbnailTitle.innerHTML = "Thumbnail";

const imageThumbnail = new EgImage();
imageThumbnail.id = "imageThumbnail"
imageThumbnail.alt = "imageThumbnail";
imageThumbnail.src = "assets/images/logo.jpeg";
imageThumbnail.type = "mx-auto d-block img-thumbnail img-fluid";

imageThumbnailCol.addMultipleObjects(thumbnailTitle, imageThumbnail);

/**
 * Image Raised
 */
const imageRaisedCol = new EgCol();
imageRaisedCol.col = "col-3";

const raisedTitle = document.createElement("h1");
raisedTitle.setAttribute("class", "text-center animated jello text-muted");
raisedTitle.innerHTML = "Raised";

const imageRaised = new EgImage();
imageRaised.id = "imageRaised"
imageRaised.alt = "imageRaised";
imageRaised.src = "assets/images/logo.jpeg";
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
