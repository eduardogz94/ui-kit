/**
 * A function that creates 2 inputs object.
 */
const createCardsInputs = () => {
  let inputCard1 = createInput(
    "form-control",
    "email",
    "danger-card1",
    "col-12",
    "Danger1 Input"
  );

  let inputCard2 = createInput(
    "form-control",
    "password",
    "danger-card2",
    "col-12",
    "Danger2 Input"
  );
  inputCard2.css = "mt-2";

  return { inputCard1, inputCard2 };
};
