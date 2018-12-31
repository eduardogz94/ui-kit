import EgCard from "../../src/components/EgCard.js";

/** A function that creates the warning card sample.
 * @function
 * @returns {EgCard} With all the props inside function.
 */
export const sampleCardWarning = () => {
  let warningCard = new EgCard("card-warning");
  warningCard.id = "warning-card";
  warningCard.body = "This is a body passed as a string in javascript";

  return warningCard;
};
