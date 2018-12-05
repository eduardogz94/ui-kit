import { createAlert } from "../../src/js/sivaFunctions.js";

export const sampleAltAlert = () => {
  let altA = createAlert(
    "alert-alt show fade",
    "This is the text of a alt alert with a close button",
    "a-alt",
    "alert-dismissible"
  );

  return altA;
};
