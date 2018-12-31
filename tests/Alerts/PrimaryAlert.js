import { createAlert } from "../../src/js/sivaFunctions.js";

export const samplePrimaryAlert = () => {
  let primaryA = createAlert(
    "alert-primary show fade",
    "This is the text of a primary alert with a close button",
    "a-primary",
    "alert-dismissible"
  );

  return primaryA;
};
