/** Validations Inputs */

/**
 *  Creates the input for success input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
const sampleInputSuccess = () => {
  let successInput = createInput(
    "form-control form-control-success",
    "email",
    "successInput",
    "col-10",
    "Email Javascript Input"
  );
  successInput.css = "mb-4";

  return successInput;
};

/**
 * Creates the input for warning input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
const sampleInputWarning = () => {
  let warningInput = createInput(
    "form-control form-control-warning",
    "text",
    "warningInput",
    "col-10",
    "Warning Javascript Input"
  );
  warningInput.css = "mb-4";

  return warningInput;
};

/**
 * Creates the input for danger input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
const sampleInputDanger = () => {
  let dangerInput = createInput(
    "form-control form-control-danger",
    "password",
    "dangerInput",
    "col-10",
    "Danger Javascript Input"
  );
  dangerInput.css = "mb-4";

  return dangerInput;
};
