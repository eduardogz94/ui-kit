/**
 * Start login template
 */

const loginGrid = new EgGrid();
const loginMainCol = new EgCol("col-12");
loginMainCol.bg = "bg-faded";

const loginTitle = document.createElement("h1");
loginTitle.setAttribute(
  "class",
  "animated bounceInRight text-primary text-center"
);
loginTitle.innerHTML = "Login Form";

const inputFormCol = new EgCol("col-4", "offset-4");

const username = new EgInput("form-control", "text");
username.id = "username";
username.col = "col-8";
username.offset = "offset-2";
username.placeholder = "Username";
username.css = "mb-2";

const password = new EgInput("form-control", "password");
password.id = "password";
password.col = "col-8";
password.offset = "offset-2";
password.css = "mt-2";
password.placeholder = "Password";

const loginRenderCard = new EgCard("card-primary");
loginRenderCard.id = "login";
loginRenderCard.header = "Login Form";

const loginButton = new EgButton("btn-primary");
loginButton.id = "loginButton";
loginButton.innerText = "Login Now";
loginButton.col = "col-8";
loginButton.css = "mt-2";
loginButton.offset = "offset-2";

const loginRenderCardFooter = document.createElement("h5");
loginRenderCardFooter.setAttribute("class", "animated jello text-primary");
loginRenderCardFooter.innerHTML = "Forgot your password? Click here!";

inputFormCol.addMultipleObjects(loginRenderCard);
loginMainCol.addMultipleObjects(loginTitle, inputFormCol);
loginGrid.appendChild(loginMainCol);

document.body.appendChild(loginGrid);

loginRenderCard.addMultipleObjectsToBody(username, password, loginButton);
loginRenderCard.addToCardFooter(loginRenderCardFooter);

ccc.chargeScript("../src/helpers/validations/loginValidations");

/**
 * End login template
 */
