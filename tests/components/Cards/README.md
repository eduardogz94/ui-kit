##This are the renders of the cards samples (tests/components)

This works as functions to create and returns the cards that will be used on
the renders samples (tests/views folder)

* A function that creates danger card object

```javascript
const createDangerCard = () => {
  let dangerCard = new EgCard("card-danger");
  dangerCard.id = "danger-card";
  dangerCard.footer = "Javascript card footer";

  return dangerCard;
};
```

* A function that creates a default card object

```javascript
const createDefaultCard = () => {
  let darkCard = new EgCard("card-dark");
  darkCard.id = "dark-card";
  darkCard.body = "This is a body passed as a string in javascript";
  darkCard.footer = "Javascript card footer";
  darkCard.header = "Dark Title (Default Card Title Attributes)";

  return darkCard;
};
```

* A function that creates an info card object

```javascript
const createInfoCard = () => {
  let infoCard = new EgCard("card-info");
  infoCard.id = "info-card";
  infoCard.body =
    "This is a body passed as a string in javascript with a info button appened from the body <br><br>";
  infoCard.footer = "Javascript card footer";

  return infoCard;
};
```

* A function that creates a login card object

```javascript
const createLoginCard = () => {
  let loginCard = new EgCard("card-primary");
  loginCard.id = "login";
  loginCard.header = "Login Form";

  return loginCard;
};
```

* A function that creates a primary card object

```javascript
const createPrimaryCard = () => {
  let primaryCard = new EgCard("card-primary");
  primaryCard.id = "primary-card";
  primaryCard.body = "This is a body passed as a string in javascript";
  primaryCard.footer = "Javascript card footer";

  return primaryCard;
};
```

* A function that creates a secondary card object

```javascript
const createSecondaryCard = () => {
  let secondaryCard = new EgCard("card-secondary");
  secondaryCard.id = "secondary-card";
  secondaryCard.body = `This is a body passed as a string in javascript with a info button appened from the body <br><br>`;
  secondaryCard.footer = "Javascript card footer";

  return secondaryCard;
};
```

* A function that creates a succes card object

```javascript
const createSuccessCard = () => {
  let successCard = new EgCard("card-success");
  successCard.id = "success-card";

  return successCard;
};
```

* A function that creates a warning card object

```javascript
const createWarningCard = () => {
  let warningCard = new EgCard("card-warning");
  warningCard.id = "warning-card";
  warningCard.body = "This is a body passed as a string in javascript";

  return warningCard;
};
```
