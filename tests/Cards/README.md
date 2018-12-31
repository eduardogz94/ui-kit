#Cards View Sample
Here is where you use the functions created on the test/components folder (the components renders) to use it on the page render (tests/views)

```javascript
/* </-------------- START CARDS SAMPLES ----------------/> */
let cardRow = new EgRow();

let cardsTitle = createTextElement(
  "h1",
  "animated bounceInRight text-primary text-center",
  "cards"
);

let mainCol = appendsCreateCol("col-12", cardsTitle);

/** Primary Card */
let primaryCard = createCardPrimary();

/** Danger Card */
let dangerCard = createCardDanger();

/** Success Card */
let successCard = createCardSuccess();

/** Warning Card */
let warningCard = createCardWarning();

/** Secondary Card*/
let secondaryCard = createCardSecondary();

/** Info Card*/
let infoCard = createCardInfo();

/** Dark Card */
let defaultCard = createCardDefault();

/** Login Card */

let loginCard = createCardLogin();
let loginCardBody = returnLoginBody();

cardRow.addMultipleObjects(
  createCol(defaultCard, "col-3"),
  createCol(warningCard, "col-3"),
  createCol(primaryCard, "col-3"),
  createCol(successCard, "col-3"),
  createCol(dangerCard, "col-3"),
  createCol(secondaryCard, "col-3"),
  createCol(infoCard, "col-3"),
  createCol(loginCard, "col-3")
);

mainCol.appendChild(cardRow);

/** You call this when all the elements are already in a col/row */
document.body.appendChild(mainCol);

/** APPEND CHILDS AFTER THEY ARE RENDERED */

/** Personal Cards */

loginCard.addMultipleObjectsToBody(
  loginCardBody.usernameInputCard,
  loginCardBody.passwordInputCard,
  loginCardBody.loginButtonCard
);

loginCardBody.loginButtonCard.onclick = function(ev) {
  validateValue(loginCardBody.usernameInputCard);
  validateValue(loginCardBody.passwordInputCard);
};

loginCard.addToCardFooter(
  createCardText(
    "animated jello text-primary",
    "Forgot your password? Click here!"
  )
);

primaryCard.addToCardHeader(
  createCardText("animated jello text-primary", "Primary Title")
);

secondaryCard.addToCardHeader(
  createCardText("animated jello text-secondary", "Secondary Title")
);

successCard.addToCardHeader(
  createCardText("animated jello text-success", "Success Title")
);

successCard.addToCardFooter(
  createCardText(
    "animated jello text-success",
    "Footer from javascript with different color"
  )
);

successCard.addToCardBody(
  createCardText(
    "animated jello text-success",
    "This is a object for the card body passed in javascript functions"
  )
);

warningCard.addToCardHeader(
  createCardText("animated jello text-warning", "Warning Title")
);

warningCard.addToCardFooter(
  createCardText(
    "animated jello text-warning",
    "Footer from javascript with different color"
  )
);

dangerCard.addToCardHeader(
  createCardText("animated jello text-danger", "Danger Title")
);

dangerCard.addMultipleObjectsToBody(
  createCardsInputs().inputCard1,
  createCardsInputs().inputCard2
);

infoCard.addToCardBody(createButton("btn-info", "Info Card Button", "col-12"));
infoCard.addToCardHeader(
  createCardText("animated jello text-info", "Info Title")
);

/* </-------------- END CARD SAMPLES ----------------/> */
```

##This are the renders of the cards samples (tests/components)

This works as functions to create and returns the cards that will be used on
the renders samples (tests/views folder)

![picture](../../../src/assets/images/cards.png)

- A function that creates danger card object

```javascript
const createCardDanger = () => {
  let dangerCard = new EgCard("card-danger");
  dangerCard.id = "danger-card";
  dangerCard.footer = "Javascript card footer";

  return dangerCard;
};
```

- A function that creates a default card object

```javascript
const createCardDefault = () => {
  let darkCard = new EgCard("card-dark");
  darkCard.id = "dark-card";
  darkCard.body = "This is a body passed as a string in javascript";
  darkCard.footer = "Javascript card footer";
  darkCard.header = "Dark Title (Default Card Title Attributes)";

  return darkCard;
};
```

- A function that creates an info card object

```javascript
const createCardInfo = () => {
  let infoCard = new EgCard("card-info");
  infoCard.id = "info-card";
  infoCard.body =
    "This is a body passed as a string in javascript with a info button appened from the body <br><br>";
  infoCard.footer = "Javascript card footer";

  return infoCard;
};
```

- A function that creates a login card object

```javascript
const createCardLogin = () => {
  let loginCard = new EgCard("card-primary");
  loginCard.id = "login";
  loginCard.header = "Login Form";

  return loginCard;
};
```

- A function that creates a primary card object

```javascript
const createCardPrimary = () => {
  let primaryCard = new EgCard("card-primary");
  primaryCard.id = "primary-card";
  primaryCard.body = "This is a body passed as a string in javascript";
  primaryCard.footer = "Javascript card footer";

  return primaryCard;
};
```

- A function that creates a secondary card object

```javascript
const createCardSecondary = () => {
  let secondaryCard = new EgCard("card-secondary");
  secondaryCard.id = "secondary-card";
  secondaryCard.body = `This is a body passed as a string in javascript with a info button appened from the body <br><br>`;
  secondaryCard.footer = "Javascript card footer";

  return secondaryCard;
};
```

- A function that creates a succes card object

```javascript
const createCardSuccess = () => {
  let successCard = new EgCard("card-success");
  successCard.id = "success-card";

  return successCard;
};
```

- A function that creates a warning card object

```javascript
const createCardWarning = () => {
  let warningCard = new EgCard("card-warning");
  warningCard.id = "warning-card";
  warningCard.body = "This is a body passed as a string in javascript";

  return warningCard;
};
```
