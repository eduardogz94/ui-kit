/** Image Thumbnail */

/**
 * A function that returns image thumbnail col sample.
 * @function
 * @returns {EgImage} With all the props inside function.
 */
const sampleImageThumbnail = () => {
  let thumbnailTitle = createTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Thumbnail"
  );

  let imageThumbnail = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageThumbnail"
  );
  imageThumbnail.id = "imageThumbnail";
  imageThumbnail.type = "mx-auto d-block img-thumbnail img-fluid";

  let imageThumbnailCol = appendsCreateCol(
    "col-3",
    thumbnailTitle,
    imageThumbnail
  );
  return imageThumbnailCol;
};
