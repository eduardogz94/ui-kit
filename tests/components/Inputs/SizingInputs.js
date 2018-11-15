/** Sizing Inputs*/

/** Creates the input for xsmall input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
const sampleInputXsmall = () => {
  let xsmallInput = createInput(
    "form-control form-control-sm",
    "text",
    "xsmall",
    "col-10",
    "xsmall Javascript Input"
  );
  xsmallInput.css = "mb-4";

  return xsmallInput;
};

/** Creates the input for default input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
const sampleInputDefault = () => {
  let defaultInput = createInput(
    "form-control",
    "text",
    "default",
    "col-10",
    "Default Javascript Input"
  );
  defaultInput.css = "mb-4";

  return defaultInput;
};

/** Creates the input for large input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
const sampleInputLarge = () => {
  let largeInput = createInput(
    "form-control form-control-lg",
    "text",
    "large",
    "col-10",
    "Large Javascript Input"
  );
  largeInput.css = "mb-4";

  return largeInput;
};
