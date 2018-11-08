/* </-------------- START Inputs ----------------/> */

const inputGrid = new EgGrid();

const firstInputsCol = new EgCol("col-4");
const secondInputCol = new EgCol("col-4");
const thirdInputCol = new EgCol("col-4");

const inputTitle = document.createElement("h1");
inputTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
inputTitle.innerHTML = "Form Inputs";

/** Basic Inputs */
const basicInputsTitle = document.createElement("h2");
basicInputsTitle.setAttribute("class", "text-muted");
basicInputsTitle.innerHTML = "Basic Inputs";

let emailTitle = document.createElement("h5");
emailTitle.setAttribute("class", "text-muted text-primary");
emailTitle.innerHTML = "Email";

let passwordTitle = document.createElement("h5");
passwordTitle.setAttribute("class", "text-muted text-primary");
passwordTitle.innerHTML = "Password";

let textTitle = document.createElement("h5");
textTitle.setAttribute("class", "text-muted text-primary");
textTitle.innerHTML = "Text";

firstInputsCol.addMultipleObjects(
  basicInputsTitle,
  emailTitle,
  createEmailInput(),
  textTitle,
  createTextInputCol(),
  passwordTitle,
  createPasswordInput()
);

/** Validations Inputs */
const validationsInputsTitle = document.createElement("h2");
validationsInputsTitle.setAttribute("class", "text-muted");
validationsInputsTitle.innerHTML = "Validations Inputs";

let successTitle = document.createElement("h5");
successTitle.setAttribute("class", "text-muted text-success");
successTitle.innerHTML = "Success";

let warningTitle = document.createElement("h5");
warningTitle.setAttribute("class", "text-muted text-warning");
warningTitle.innerHTML = "Warning";

let dangerTitle = document.createElement("h5");
dangerTitle.setAttribute("class", "text-muted text-danger");
dangerTitle.innerHTML = "Danger";

secondInputCol.addMultipleObjects(
  validationsInputsTitle,
  successTitle,
  createSuccessInput(),
  warningTitle,
  createWarningInput(),
  dangerTitle,
  createDangerInput()
);

/** Size Inputs */
const SizeInputsTitle = document.createElement("h2");
SizeInputsTitle.setAttribute("class", "text-muted");
SizeInputsTitle.innerHTML = "Size Inputs";

let xsmallTitle = document.createElement("h5");
xsmallTitle.setAttribute("class", "text-muted text-primary");
xsmallTitle.innerHTML = "xsmall";

let defaultTitle = document.createElement("h5");
defaultTitle.setAttribute("class", "text-muted text-primary");
defaultTitle.innerHTML = "Default";

let largeTitle = document.createElement("h5");
largeTitle.setAttribute("class", "text-muted text-primary");
largeTitle.innerHTML = "Large";

thirdInputCol.addMultipleObjects(
  SizeInputsTitle,
  xsmallTitle,
  xSmallInput(),
  defaultTitle,
  defaultInput(),
  largeTitle,
  largeInput()
);

/** End All Type Of Inputs, starts rendering */

const mainInputCol = appendsCreateCol(
  "col-12",
  inputTitle,
  firstInputsCol,
  secondInputCol,
  thirdInputCol
);

inputGrid.appendChild(mainInputCol);
document.body.appendChild(inputGrid);

/* </----------------- END Inputs --------------------/> */
