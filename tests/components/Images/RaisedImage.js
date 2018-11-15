/** Image Raised */

/**
 * A function that returns image raised col sample.
 * @function
 * @returns {EgImage} With all the props inside function.
 */
const sampleImageRaised = () => {
  let raisedTitle = createTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Raised"
  );

  let imageRaised = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageRaised"
  );
  imageRaised.id = "imageRaised";
  imageRaised.type = "mx-auto d-block rounded-circle img-raised img-fluid";

  let imageRaisedCol = appendsCreateCol("col-3", raisedTitle, imageRaised);

  return imageRaisedCol;
};
