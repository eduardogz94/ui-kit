/** Image Circle */

/**
 * A function that return image circle col sample.
 * @function
 * @returns {EgImage} With all the props inside function.
 */
const sampleImageCircle = () => {
  let circleTitle = createTextElement(
    "h1",
    "text-center animated jello text-muted",
    "Circle"
  );

  let imageCircle = new EgImage(
    "../src/assets/images/logo.jpeg",
    "imageCircle"
  );
  imageCircle.id = "imageCircle";
  imageCircle.type = "mx-auto d-block rounded-circle img-fluid";

  let imageCircleCol = appendsCreateCol("col-3", circleTitle, imageCircle);
  return imageCircleCol;
};
