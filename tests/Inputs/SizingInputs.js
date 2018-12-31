import { createInput } from "../../src/js/sivaFunctions.js";

/** Creates the input for xsmall input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
export const sampleInputXsmall = () => {
  let xsmallInput = createInput(
    "form-control form-control-sm",
    "text",
    "xsmall",
    "col-10",
    "xsmall Javascript Input"
  );
  xsmallInput.css = "mb-2";

  return xsmallInput;
};

/** Creates the input for default input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
export const sampleInputDefault = () => {
  let defaultInput = createInput(
    "form-control",
    "text",
    "default",
    "col-10",
    "Default Javascript Input"
  );
  defaultInput.css = "mb-2";

  return defaultInput;
};

/** Creates the input for large input sample.
 * @function
 * @returns {EgInput} EgInput With all the props inside function.
 */
export const sampleInputLarge = () => {
  let largeInput = createInput(
    "form-control form-control-lg",
    "text",
    "large",
    "col-10",
    "Large Javascript Input"
  );
  largeInput.css = "mb-2";

  return largeInput;
};
