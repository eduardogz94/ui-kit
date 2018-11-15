/* </-------------- START INPUTS SAMPLES ----------------/> */

let inputTitle = createTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Form Inputs"
);

let basicInputsTitle = createTextElement("h2", "text-muted", "Basic Inputs");

let emailTitle = createTextElement("h5", "text-muted text-primary", "Email");

let passwordTitle = createTextElement(
  "h5",
  "text-muted text-primary",
  "Password"
);
let textTitle = createTextElement("h5", "text-muted text-primary", "Text");

let firstInputsCol = appendsCreateCol(
  "col-4",
  basicInputsTitle,
  emailTitle,
  sampleInputEmail(),
  textTitle,
  sampleInputText(),
  passwordTitle,
  sampleInputPassword()
);

let validationsInputsTitle = createTextElement(
  "h2",
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

let secondInputCol = appendsCreateCol(
  "col-4",
  validationsInputsTitle,
  successTitle,
  sampleInputSuccess(),
  warningTitle,
  sampleInputWarning(),
  dangerTitle,
  sampleInputDanger()
);

let SizeInputsTitle = createTextElement("h2", "text-muted", "Size Inputs");

let xsmallTitle = createTextElement("h5", "text-muted text-primary", "xsmall");

let defaultTitle = createTextElement(
  "h5",
  "text-muted text-primary",
  "default"
);

let largeTitle = createTextElement("h5", "text-muted text-primary", "large");

let thirdInputCol = appendsCreateCol(
  "col-4",
  SizeInputsTitle,
  xsmallTitle,
  sampleInputXsmall(),
  defaultTitle,
  sampleInputDefault(),
  largeTitle,
  sampleInputLarge()
);

let mainInputCol = appendsCreateCol(
  "col-12",
  inputTitle,
  firstInputsCol,
  secondInputCol,
  thirdInputCol
);

document.body.appendChild(mainInputCol);

/* </----------------- END INPUTS SAMPLES --------------------/> */
