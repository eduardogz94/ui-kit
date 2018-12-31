import { sampleAltAlert } from "./AltAlert.js";
import { sampleDangerAlert } from "./DangerAlert.js";
import { sampleInfoAlert } from "./InfoAlert.js";
import { samplePrimaryAlert } from "./PrimaryAlert.js";
import { sampleSuccessAlert } from "./SuccessAlert.js";
import { sampleWarningAlert } from "./WarningAlert.js";
import {
  appendsCreateCol,
  createTextElement
} from "../../src/js/sivaFunctions.js";

let altAlert = sampleAltAlert();
let dangerAlert = sampleDangerAlert();
let infoAlert = sampleInfoAlert();
let primaryAlert = samplePrimaryAlert();
let successAlert = sampleSuccessAlert();
let warningAlert = sampleWarningAlert();

export const alertsSampleRender = () => {
  let alertsText = createTextElement(
    "h1",
    "animated bounceInRight text-primary text-center",
    "Alerts"
  );

  let alertsMainCol = appendsCreateCol("col-6", alertsText);
  alertsMainCol.css = "offset-3";

  alertsMainCol.appendElements(
    primaryAlert,
    altAlert,
    dangerAlert,
    infoAlert,
    successAlert,
    warningAlert
  );

  return alertsMainCol;
};
