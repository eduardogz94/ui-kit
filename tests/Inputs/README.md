##This are the renders of the inputs samples (tests/components)

This works as functions to create and returns the inputs that will be used on
the renders samples (tests/views folder)

![picture](../../../src/assets/images/inputs.png)

#Inputs View Sample
Here is where you use the functions created on the test/components folder (the components renders) to use it on the page render (tests/views)

```javascript
/* </-------------- START INPUTS SAMPLES ----------------/> */

let inputTitle = createTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "Form Inputs"
);

/** Basic Inputs */
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
  createEmailInput(),
  textTitle,
  createTextInputCol(),
  passwordTitle,
  createPasswordInput()
);

/** Validations Inputs */
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
  createSuccessInput(),
  warningTitle,
  createWarningInput(),
  dangerTitle,
  createDangerInput()
);

/** Size Inputs */
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

#Basic inputs

- Creates the input for email input sample.

```javascript
const createEmailInput = () => {
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
```

- Creates the input for text input sample.

```javascript
const createTextInputCol = () => {
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
```

- Creates the input for password input sample.

```javascript
const createPasswordInput = () => {
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
```

#Sizing Inputs

- Creates the input for xsmall input sample.

```javascript
const xSmallInput = () => {
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
```

- Creates the input for default input sample.

```javascript
const defaultInput = () => {
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
```

- Creates the input for large input sample.

```javascript
const largeInput = () => {
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
```

#Validation Inputs

- Creates the input for success input sample.

```javascript
const createSuccessInput = () => {
  let successInput = createInput(
    "form-control form-control-success",
    "email",
    "successInput",
    "col-10",
    "Email Javascript Input"
  );
  successInput.css = "mb-4";

  return successInput;
};
```

- Creates the input for warning input sample.

```javascript
const createWarningInput = () => {
  let warningInput = createInput(
    "form-control form-control-warning",
    "text",
    "warningInput",
    "col-10",
    "Warning Javascript Input"
  );
  warningInput.css = "mb-4";

  return warningInput;
};
```

- Creates the input for danger input sample.

```javascript
const createDangerInput = () => {
  let dangerInput = createInput(
    "form-control form-control-danger",
    "password",
    "dangerInput",
    "col-10",
    "Danger Javascript Input"
  );
  dangerInput.css = "mb-4";

  return dangerInput;
};
```
