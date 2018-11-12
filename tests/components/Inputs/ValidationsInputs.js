/** Validations Inputs */

/** Creates the input for success input sample. */
const createSuccessInput = () => {
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

/** Creates the input for warning input sample. */
const createWarningInput = () => {
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

/** Creates the input for danger input sample. */
const createDangerInput = () => {
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
