import { createAlert } from "../../src/js/sivaFunctions.js";

export const sampleWarningAlert = () => {
  let warningA = createAlert(
    "alert-warning show fade",
    "This is the text of a warning alert with a close button",
    "a-warning",
    "alert-dismissible"
  );

  return warningA;
};
