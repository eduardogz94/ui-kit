/** Image Raised */

/**
 * A function that returns image raised col sample.
 */
const returnImageRaisedCol = () => {
  const raisedTitle = returnTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Raised"
  );

  const imageRaised = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageRaised"
  );
  imageRaised.id = "imageRaised";
  imageRaised.type = "mx-auto d-block rounded-circle img-raised img-fluid";

  const imageRaisedCol = appendsCreateCol("col-3", raisedTitle, imageRaised);

  return imageRaisedCol;
};
