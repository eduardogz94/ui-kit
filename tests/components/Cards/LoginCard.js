/* Login Card */

/**
 * A function that creates the login card sample.
 * @function
 * @returns {EgCard} With all the props inside function.
 */
const sampleCardLogin = () => {
  let loginCard = new EgCard("card-primary");
  loginCard.id = "login";
  loginCard.header = "Login Form";

  return loginCard;
};

/**
 * A function that returns login card body sample.
 */

const createCardLoginBody = () => {
  let usernameInputCard = createInput(
    "form-control",
    "email",
    "username-card",
    "col-8",
    "Username Input"
  );

  usernameInputCard.offset = "offset-2";
  usernameInputCard.css = "mb-2";

  let passwordInputCard = createInput(
    "form-control",
    "password",
    "password-card",
    "col-8",
    "Password Input"
  );

  passwordInputCard.offset = "offset-2";
  passwordInputCard.css = "mt-2";

  let loginButtonCard = createButton(
    "btn-primary",
    "Login Now",
    "loginButton",
    "col-8"
  );
  loginButtonCard.css = "mt-2";
  loginButtonCard.offset = "offset-2";

  let loginBody = {
    usernameInputCard,
    passwordInputCard,
    loginButtonCard
  };

  return loginBody;
};
