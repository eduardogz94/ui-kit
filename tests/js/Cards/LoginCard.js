/* Login Card */

/**
 * A function that creates login card element.
 */
const createLoginCard = () => {
  const loginCard = new EgCard("card-primary");
  loginCard.id = "login";
  loginCard.header = "Login Form";

  return loginCard
};
