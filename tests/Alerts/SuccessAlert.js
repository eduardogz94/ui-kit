import { createAlert } from "../../src/js/sivaFunctions.js";

export const sampleSuccessAlert = () => {
  let successA = createAlert(
    "alert-success show fade",
    "This is the text of a success alert with a close button",
    "a-success",
    "alert-dismissible"
  );

  return successA;
};
