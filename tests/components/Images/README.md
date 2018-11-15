##This are the renders of the images samples (tests/components)

This works as functions to create and returns the images that will be used on
the renders samples (tests/views folder)

![picture](../../../src/assets/images/images.png)

- A function that return image circle col sample.

```javascript
const returnImageCircleCol = () => {
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
```

- A function that returns image raised col sample.

```javascript
const returnImageRaisedCol = () => {
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
```

- A function that returns image rounded col sample.

```javascript
const returnImageRoundedCol = () => {
  let roundedTitle = createTextElement(
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
```

- A function that returns image thumbnail col sample.

```javascript
const returnImageThumbnailCol = () => {
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
```
