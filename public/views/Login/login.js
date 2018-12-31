import EgCard from "../../../src/components/EgCard.js";
import { createInput, createButton } from "../../../src/core/sivaFunctions.js";

export const boxappLoginCard= () => {
  let loginCard = new EgCard("card-primary");
  loginCard.id = "login";
  loginCard.header = "Login into boxapp now!";

  return loginCard;
};

export const boxappLoginBody = () => {
  let usernameInput = createInput(
    "form-control",
    "email",
    "username-login",
    "col-8",
    "Username Input"
  );

  usernameInput.offset = "offset-2";
  usernameInput.css = "mb-2 animated bounceIn";

  let passwordInput = createInput(
    "form-control",
    "password",
    "password-login",
    "col-8",
    "Password Input"
  );

  passwordInput.offset = "offset-2";
  passwordInput.css = "mt-2 animated bounceIn";

  let confirmPassword = createInput(
    "form-control",
    "password",
    "confirm-login",
    "col-8",
    "Confirm Password Input"
  );

  confirmPassword.offset = "offset-2";
  confirmPassword.css = "mt-2 animated bounceIn";

  let loginButton = createButton(
    "btn-primary",
    "Login Now",
    "loginButton",
    "col-8"
  );
  loginButton.css = "mt-2 animated bounceIn";
  loginButton.offset = "offset-2";

  let loginBody = {
    usernameInput,
    passwordInput,
    confirmPassword,
    loginButton
  };

  return loginBody;
};
