import { createAlert } from "../../src/js/sivaFunctions.js";

export const sampleInfoAlert = () => {
  let infoA = createAlert(
    "alert - info",
    "This is the text of a info alert with a close button",
    "a-info",
    "alert-dismissible"
  );

  return infoA;
};
