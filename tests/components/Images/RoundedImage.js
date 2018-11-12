/** Image Rounded */

/**
 * A function that returns image rounded col sample.
 */
const returnImageRoundedCol = () => {
  let roundedTitle = returnTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Rounded"
  );

  let imageRounded = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageRounded"
  );
  imageRounded.id = "imageRounded";
  imageRounded.type = "mx-auto d-block rounded img-fluid";

  let imageRoundedCol = appendsCreateCol("col-3", roundedTitle, imageRounded);
  return imageRoundedCol;
};
