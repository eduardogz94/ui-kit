import { createAlert } from "../../src/js/sivaFunctions.js";

export const sampleDangerAlert = () => {
  let dangerA = createAlert(
    "alert-danger show fade",
    "This is the text of a danger alert with a close button",
    "a-danger",
    "alert-dismissible"
  );

  return dangerA;
};
