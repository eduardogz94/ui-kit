import { createInput } from "../../src/js/sivaFunctions.js";

/** Creates the input for success input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
export const sampleInputSuccess = () => {
  let successInput = createInput(
    "form-control form-control-success",
    "email",
    "successInput",
    "col-10",
    "Email Javascript Input"
  );
  successInput.css = "mb-2";

  return successInput;
};

/** Creates the input for warning input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
export const sampleInputWarning = () => {
  let warningInput = createInput(
    "form-control form-control-warning",
    "text",
    "warningInput",
    "col-10",
    "Warning Javascript Input"
  );
  warningInput.css = "mb-2";

  return warningInput;
};

/** Creates the input for danger input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
export const sampleInputDanger = () => {
  let dangerInput = createInput(
    "form-control form-control-danger",
    "password",
    "dangerInput",
    "col-10",
    "Danger Javascript Input"
  );
  dangerInput.css = "mb-2";

  return dangerInput;
};
