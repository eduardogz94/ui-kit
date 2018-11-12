#Inputs View Sample
Here is where you use the functions created on the test/components folder (the components renders) to use it on the page render (tests/views)

```javascript
/* </-------------- START INPUTS SAMPLES ----------------/> */

let inputTitle = returnTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Form Inputs"
);

/** Basic Inputs */
let basicInputsTitle = returnTextElement("h2", "text-muted", "Basic Inputs");

let emailTitle = returnTextElement("h5", "text-muted text-primary", "Email");

let passwordTitle = returnTextElement(
  "h5",
  "text-muted text-primary",
  "Password"
);
let textTitle = returnTextElement("h5", "text-muted text-primary", "Text");

let firstInputsCol = appendsCreateCol(
  "col-4",
  basicInputsTitle,
  emailTitle,
  createEmailInput(),
  textTitle,
  createTextInputCol(),
  passwordTitle,
  createPasswordInput()
);

/** Validations Inputs */
let validationsInputsTitle = returnTextElement(
  "h2",
  "text-muted",
  "Validations Inputs"
);

let successTitle = returnTextElement(
  "h5",
  "text-muted text-success",
  "Success"
);

let warningTitle = returnTextElement(
  "h5",
  "text-muted text-warning",
  "Warning"
);

let dangerTitle = returnTextElement("h5", "text-muted text-danger", "Danger");

let secondInputCol = appendsCreateCol(
  "col-4",
  validationsInputsTitle,
  successTitle,
  createSuccessInput(),
  warningTitle,
  createWarningInput(),
  dangerTitle,
  createDangerInput()
);

/** Size Inputs */
let SizeInputsTitle = returnTextElement("h2", "text-muted", "Size Inputs");

let xsmallTitle = returnTextElement("h5", "text-muted text-primary", "xsmall");

let defaultTitle = returnTextElement(
  "h5",
  "text-muted text-primary",
  "default"
);

let largeTitle = returnTextElement("h5", "text-muted text-primary", "large");

let thirdInputCol = appendsCreateCol(
  "col-4",
  SizeInputsTitle,
  xsmallTitle,
  xSmallInput(),
  defaultTitle,
  defaultInput(),
  largeTitle,
  largeInput()
);

/** End All Type Of Inputs, starts rendering */

let mainInputCol = appendsCreateCol(
  "col-12",
  inputTitle,
  firstInputsCol,
  secondInputCol,
  thirdInputCol
);

document.body.appendChild(mainInputCol);

/* </----------------- END INPUTS SAMPLES --------------------/> */
```