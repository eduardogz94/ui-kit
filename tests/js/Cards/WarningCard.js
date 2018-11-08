/** Warning Card */

/**
 * A function that creates danger card object.
 */
const createWarningCard = () => {
  let warningCard = new EgCard("card-warning");
  warningCard.id = "warning-card";
  warningCard.body = "This is a body passed as a string in javascript";

  return warningCard;
};
