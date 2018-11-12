/**
 * A function that sets an EgInput email validations.
 * @param {EgInput} input EgInput elements that will be validated. 
 * @param {String} type String as the type of email to be validated.
 */
function validateEmail(input, type) {
  setValidationEmail(input, type);
}

/**
 * A function that sets an EgInput length value validations.
 * @param {EgInput} input EgInput elements that will be validated. 
 * @param {Int} length Int as the value to be validated with.
 */
function validateValue(input, length) {
  setValidationLength(input, length);
}