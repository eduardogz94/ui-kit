/* </-------------- START Inputs ----------------/> */

const inputGrid = new EgGrid();
const mainInputCol = new EgCol();
const firstInputRow = new EgRow();
const secondInputRow = new EgRow();
const thirdInputRow = new EgRow();

mainInputCol.col = "col-12";

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
const emailInputCol = new EgCol();
emailInputCol.col = "col-4";

const emailTitle = document.createElement("h5");
emailTitle.setAttribute("class", "text-muted text-primary");
emailTitle.innerHTML = "Email";

const emailInput = new EgInput();
emailInput.id = "email";
emailInput.type = "email";
emailInput.col = "col-10";
emailInput.control = "form-control";
emailInput.css = "mb-4";
emailInput.placeholder = "Email Javascript Input";

emailInputCol.addMultipleObjects(emailTitle, emailInput);

/**
 * Text Input
 */
const textInputCol = new EgCol();
textInputCol.col = "col-4";

const textTitle = document.createElement("h5");
textTitle.setAttribute("class", "text-muted text-primary");
textTitle.innerHTML = "Text";

const textInput = new EgInput();
textInput.id = "text";
textInput.type = "text";
textInput.col = "col-10";
textInput.control = "form-control";
textInput.css = "mb-4";
textInput.placeholder = "Text Javascript Input";

textInputCol.addMultipleObjects(textTitle, textInput);

/**
 * Password Inputs
 */
const passwordInputCol = new EgCol();
passwordInputCol.col = "col-4";

const passwordTitle = document.createElement("h5");
passwordTitle.setAttribute("class", "text-muted text-primary");
passwordTitle.innerHTML = "Password";

const passwordInput = new EgInput();
passwordInput.id = "password";
passwordInput.type = "password";
passwordInput.col = "col-10";
passwordInput.control = "form-control";
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
const successInputCol = new EgCol();
successInputCol.col = "col-4";

const successTitle = document.createElement("h5");
successTitle.setAttribute("class", "text-muted text-success");
successTitle.innerHTML = "Success";

const successInput = new EgInput();
successInput.id = "email";
successInput.type = "email";
successInput.col = "col-10";
successInput.control = "form-control form-control-success";
successInput.css = "mb-4";
successInput.placeholder = "Email Javascript Input";

successInputCol.addMultipleObjects(successTitle, successInput);

/**
 * Warning Input
 */
const warningInputCol = new EgCol();
warningInputCol.col = "col-4";

const warningTitle = document.createElement("h5");
warningTitle.setAttribute("class", "text-muted text-warning");
warningTitle.innerHTML = "Warning";

const warningInput = new EgInput();
warningInput.id = "text";
warningInput.type = "text";
warningInput.col = "col-10";
warningInput.control = "form-control form-control-warning";
warningInput.css = "mb-4";
warningInput.placeholder = "Warning Javascript Input";

warningInputCol.addMultipleObjects(warningTitle, warningInput);

/**
 * Danger Inputs
 */
const dangerInputCol = new EgCol();
dangerInputCol.col = "col-4";

const dangerTitle = document.createElement("h5");
dangerTitle.setAttribute("class", "text-muted text-danger");
dangerTitle.innerHTML = "Danger";

const dangerInput = new EgInput();
dangerInput.id = "password";
dangerInput.type = "password";
dangerInput.col = "col-10";
dangerInput.control = "form-control form-control-danger";
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
const xsmallInputCol = new EgCol();
xsmallInputCol.col = "col-4";

const xsmallTitle = document.createElement("h5");
xsmallTitle.setAttribute("class", "text-muted text-primary");
xsmallTitle.innerHTML = "xsmall";

const xsmallInput = new EgInput();
xsmallInput.id = "xsmall";
xsmallInput.type = "text";
xsmallInput.col = "col-10";
xsmallInput.control = "form-control form-control-sm";
xsmallInput.css = "mb-4";
xsmallInput.placeholder = "xsmall Javascript Input";

xsmallInputCol.addMultipleObjects(xsmallTitle, xsmallInput);

/**
 * Default Input
 */
const defaultInputCol = new EgCol();
defaultInputCol.col = "col-4";

const defaultTitle = document.createElement("h5");
defaultTitle.setAttribute("class", "text-muted text-primary");
defaultTitle.innerHTML = "Default";

const defaultInput = new EgInput();
defaultInput.id = "text";
defaultInput.type = "text";
defaultInput.col = "col-10";
defaultInput.control = "form-control";
defaultInput.css = "mb-4";
defaultInput.placeholder = "Default Javascript Input";

defaultInputCol.addMultipleObjects(defaultTitle, defaultInput);

/**
 * Large Inputs
 */
const largeInputCol = new EgCol();
largeInputCol.col = "col-4";

const largeTitle = document.createElement("h5");
largeTitle.setAttribute("class", "text-muted text-primary");
largeTitle.innerHTML = "Large";

const largeInput = new EgInput();
largeInput.id = "password";
largeInput.type = "password";
largeInput.col = "col-10";
largeInput.control = "form-control form-control-lg";
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

/* </----------------- END Inputs --------------------/> */
