import EgCard from "../../../src/components/EgCard.js";
import { createInput, createButton } from "../../../src/core/sivaFunctions.js";

export const boxappSignupCard = () => {
  let signupCard = new EgCard("card-primary");
  signupCard.id = "signup";
  signupCard.header = "Signup into boxapp now!";

  return signupCard;
};

export const boxappSignupBody = () => {
  let usernameInput = createInput(
    "form-control",
    "email",
    "username-signup",
    "col-8",
    "Username Input"
  );

  usernameInput.offset = "offset-2";
  usernameInput.css = "mb-2";

  let passwordInput = createInput(
    "form-control",
    "password",
    "password-signup",
    "col-8",
    "Password Input"
  );

  passwordInput.offset = "offset-2";
  passwordInput.css = "mt-2";

  let signupButton = createButton(
    "btn-primary",
    "Signup Now",
    "loginButton",
    "col-8"
  );

  signupButton.css = "mt-2";
  signupButton.offset = "offset-2";

  let signupBody = {
    usernameInput,
    passwordInput,
    signupButton
  };

  return signupBody;
};
