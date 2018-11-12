#Images View Sample
Here is where you use the functions created on the test/components folder (the components renders) to use it on the page render (tests/views)

```javascript
/* </-------------- START IMAGES SAMPLES ----------------/> */

let imagesRow = new EgRow();

let imagesTitle = returnTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Images"
);

let imagesMainCol = appendsCreateCol("col-12", imagesTitle);
imagesMainCol.bg = "bg-alt";

/** Image Rounded Function Sample*/
let imageRoundedCol = returnImageRoundedCol();
/** Image Circle Function Sample*/
let imageCircleCol = returnImageCircleCol();
/** Image Thumbnail Function Sample*/
let imageThumbnailCol = returnImageThumbnailCol();
/** Image Raised Function Sample*/
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
```