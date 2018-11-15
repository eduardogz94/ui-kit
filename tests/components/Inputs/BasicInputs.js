/* Basic Inputs */

/**
 * Creates the input for email input sample.
 * @function
 * @returns {EgInput} With all the props inside function.
 */
const sampleInputEmail = () => {
  let emailInput = createInput(
    "form-control",
    "email",
    "email",
    "col-10",
    "Email Javascript Input"
  );
  emailInput.css = "mb-4";

  return emailInput;
};

/**
 * Creates the input for text input sample.
 * @function
 * @returns {EgInput} With all the props inside function.
 */
const sampleInputText = () => {
  let textInput = createInput(
    "form-control",
    "text",
    "text",
    "col-10",
    "Text Javascript Input"
  );
  textInput.css = "mb-4";

  return textInput;
};

/**
 * Creates the input for password input sample.
 * @function
 * @returns {EgInput} With all the props inside function.
 */
const sampleInputPassword = () => {
  let passwordInput = createInput(
    "form-control",
    "password",
    "password",
    "col-10",
    "Password Javascript Input"
  );
  passwordInput.css = "mb-4";

  return passwordInput;
};
