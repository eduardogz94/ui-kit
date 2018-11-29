import {
  sampleInputEmail,
  sampleInputText,
  sampleInputPassword
} from "./BasicInputs.js";

import {
  sampleInputSuccess,
  sampleInputWarning,
  sampleInputDanger
} from "./ValidationsInputs.js";

import {
  sampleInputXsmall,
  sampleInputDefault,
  sampleInputLarge
} from "./SizingInputs.js";

import {
  createTextElement,
  appendsCreateCol,
  emailValidator,
  lengthValidator
} from "../../src/js/sivaFunctions.js";

let emailInput = sampleInputEmail();
let textInput = sampleInputText();
let passwordInput = sampleInputPassword();
let inputSuccess = sampleInputSuccess();
let inputWarning = sampleInputWarning();
let inputDanger = sampleInputDanger();
let inputXsmall = sampleInputXsmall();
let inputDefault = sampleInputDefault();
let inputLarge = sampleInputLarge();

export const inputsSampleRender = () => {
  let inputTitle = createTextElement(
    "h1",
    "animated bounceInRight text-primary text-center",
    "Form Inputs"
  );

  let basicInputsTitle = createTextElement("h4", "text-muted", "Basic Inputs");
  let emailTitle = createTextElement("h5", "text-muted text-primary", "Email");

  let passwordTitle = createTextElement(
    "h5",
    "text-muted text-primary",
    "Password"
  );
  let textTitle = createTextElement("h5", "text-muted text-primary", "Text");

  let validationsInputsTitle = createTextElement(
    "h4",
    "text-muted",
    "Validations Inputs"
  );

  let successTitle = createTextElement(
    "h5",
    "text-muted text-success",
    "Success"
  );

  let warningTitle = createTextElement(
    "h5",
    "text-muted text-warning",
    "Warning"
  );

  let dangerTitle = createTextElement("h5", "text-muted text-danger", "Danger");
  let SizeInputsTitle = createTextElement("h4", "text-muted", "Size Inputs");

  let xsmallTitle = createTextElement(
    "h5",
    "text-muted text-primary",
    "xsmall"
  );

  let defaultTitle = createTextElement(
    "h5",
    "text-muted text-primary",
    "default"
  );

  let largeTitle = createTextElement("h5", "text-muted text-primary", "large");

  let firstInputsCol = appendsCreateCol(
    "col-4",
    basicInputsTitle,
    emailTitle,
    emailInput,
    textTitle,
    textInput,
    passwordTitle,
    passwordInput
  );

  firstInputsCol.css = "offset-2";

  let secondInputCol = appendsCreateCol(
    "col-4",
    validationsInputsTitle,
    successTitle,
    inputSuccess,
    warningTitle,
    inputWarning,
    dangerTitle,
    inputDanger
  );

  let thirdInputsCol = appendsCreateCol(
    "col-4",
    SizeInputsTitle,
    xsmallTitle,
    inputXsmall,
    defaultTitle,
    inputDefault,
    largeTitle,
    inputLarge
  );

  thirdInputsCol.css = "offset-2 mt-4 mb-2";

  let mainInputCol = appendsCreateCol(
    "col-12",
    inputTitle,
    firstInputsCol,
    secondInputCol,
    thirdInputsCol
  );

  mainInputCol.bg = "bg-alt";

  emailInput.onchange = function(ev) {
    emailValidator(emailInput, "hotmail.com");
  };

  passwordInput.onchange = function(ev) {
    lengthValidator(passwordInput, 8);
  };

  textInput.onchange = function(ev) {
    lengthValidator(textInput, 8);
  };

  return mainInputCol;
};
