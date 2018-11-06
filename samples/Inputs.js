/* </-------------- START Inputs ----------------/> */

const inputGrid = new EgGrid();
const mainInputCol = new EgCol("col-12");
const firstInputRow = new EgRow();
const secondInputRow = new EgRow();
const thirdInputRow = new EgRow();

const inputTitle = document.createElement("h1");
inputTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
inputTitle.innerHTML = "Form Inputs";
mainInputCol.appendChild(inputTitle);

/**
 * Basic Inputs
 */
const basicInputsTitle = document.createElement("h2");
basicInputsTitle.setAttribute("class", "text-muted");
basicInputsTitle.innerHTML = "Basic Inputs";

/**
 * Email Input
 */
const emailInputCol = new EgCol("col-4");

const emailTitle = document.createElement("h5");
emailTitle.setAttribute("class", "text-muted text-primary");
emailTitle.innerHTML = "Email";

const emailInput = new EgInput("form-control", "email");
emailInput.id = "email";
emailInput.col = "col-10";
emailInput.css = "mb-4";
emailInput.placeholder = "Email Javascript Input";

emailInputCol.addMultipleObjects(emailTitle, emailInput);

/**
 * Text Input
 */
const textInputCol = new EgCol("col-4");

const textTitle = document.createElement("h5");
textTitle.setAttribute("class", "text-muted text-primary");
textTitle.innerHTML = "Text";

const textInput = new EgInput("form-control", "text");
textInput.id = "text";
textInput.col = "col-10";
textInput.css = "mb-4";
textInput.placeholder = "Text Javascript Input";

textInputCol.addMultipleObjects(textTitle, textInput);

/**
 * Password Inputs
 */
const passwordInputCol = new EgCol("col-4");

const passwordTitle = document.createElement("h5");
passwordTitle.setAttribute("class", "text-muted text-primary");
passwordTitle.innerHTML = "Password";

const passwordInput = new EgInput("form-control", "password");
passwordInput.id = "password";
passwordInput.col = "col-10";
passwordInput.css = "mb-4";
passwordInput.placeholder = "Password Javascript Input";

passwordInputCol.addMultipleObjects(passwordTitle, passwordInput);

firstInputRow.addMultipleObjects(emailInputCol, textInputCol, passwordInputCol);

/**
 * Validations Inputs
 */
const validationsInputsTitle = document.createElement("h2");
validationsInputsTitle.setAttribute("class", "text-muted");
validationsInputsTitle.innerHTML = "Validations Inputs";
/**
 * Success Input
 */
const successInputCol = new EgCol("col-4");

const successTitle = document.createElement("h5");
successTitle.setAttribute("class", "text-muted text-success");
successTitle.innerHTML = "Success";

const successInput = new EgInput("form-control form-control-success", "email");
successInput.id = "successInput";
successInput.col = "col-10";
successInput.css = "mb-4";
successInput.placeholder = "Email Javascript Input";

successInputCol.addMultipleObjects(successTitle, successInput);

/**
 * Warning Input
 */
const warningInputCol = new EgCol("col-4");

const warningTitle = document.createElement("h5");
warningTitle.setAttribute("class", "text-muted text-warning");
warningTitle.innerHTML = "Warning";

const warningInput = new EgInput("form-control form-control-warning", "text");
warningInput.id = "warningInput";
warningInput.col = "col-10";
warningInput.css = "mb-4";
warningInput.placeholder = "Warning Javascript Input";

warningInputCol.addMultipleObjects(warningTitle, warningInput);

/**
 * Danger Inputs
 */
const dangerInputCol = new EgCol("col-4");

const dangerTitle = document.createElement("h5");
dangerTitle.setAttribute("class", "text-muted text-danger");
dangerTitle.innerHTML = "Danger";

const dangerInput = new EgInput("form-control form-control-danger", "password");
dangerInput.id = "dangerInput";
dangerInput.col = "col-10";
dangerInput.css = "mb-4";
dangerInput.placeholder = "Danger Javascript Input";

dangerInputCol.addMultipleObjects(dangerTitle, dangerInput);

secondInputRow.addMultipleObjects(
  successInputCol,
  warningInputCol,
  dangerInputCol
);

/**
 * Size Inputs
 */
const sizeInputsTItle = document.createElement("h2");
sizeInputsTItle.setAttribute("class", "text-muted");
sizeInputsTItle.innerHTML = "Size Inputs";
/**
 * xsmall Input
 */
const xsmallInputCol = new EgCol("col-4");

const xsmallTitle = document.createElement("h5");
xsmallTitle.setAttribute("class", "text-muted text-primary");
xsmallTitle.innerHTML = "xsmall";

const xsmallInput = new EgInput("form-control form-control-sm", "text");
xsmallInput.id = "xsmall";
xsmallInput.col = "col-10";
xsmallInput.css = "mb-4";
xsmallInput.placeholder = "xsmall Javascript Input";

xsmallInputCol.addMultipleObjects(xsmallTitle, xsmallInput);

/**
 * Default Input
 */
const defaultInputCol = new EgCol("col-4");

const defaultTitle = document.createElement("h5");
defaultTitle.setAttribute("class", "text-muted text-primary");
defaultTitle.innerHTML = "Default";

const defaultInput = new EgInput("form-control", "text");
defaultInput.id = "default";
defaultInput.col = "col-10";
defaultInput.css = "mb-4";
defaultInput.placeholder = "Default Javascript Input";

defaultInputCol.addMultipleObjects(defaultTitle, defaultInput);

/**
 * Large Inputs
 */
const largeInputCol = new EgCol("col-4");

const largeTitle = document.createElement("h5");
largeTitle.setAttribute("class", "text-muted text-primary");
largeTitle.innerHTML = "Large";

const largeInput = new EgInput("form-control form-control-lg", "text");
largeInput.id = "large";
largeInput.col = "col-10";
largeInput.css = "mb-4";
largeInput.placeholder = "Large Javascript Input";

largeInputCol.addMultipleObjects(largeTitle, largeInput);

thirdInputRow.addMultipleObjects(
  xsmallInputCol,
  defaultInputCol,
  largeInputCol
);

/**
 * End All Type Of Inputs, starts rendering
 */

mainInputCol.addMultipleObjects(
  basicInputsTitle,
  firstInputRow,
  validationsInputsTitle,
  secondInputRow,
  sizeInputsTItle,
  thirdInputRow
);

inputGrid.appendChild(mainInputCol);
document.body.appendChild(inputGrid);

ccc.chargeScript("../helpers/validations");

/* </----------------- END Inputs --------------------/> */
