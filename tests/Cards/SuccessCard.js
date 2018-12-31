import EgCard from "../../src/components/EgCard.js";

/** A function that creates the success card sample.
 * @function
 * @returns {EgCard} With all the props inside function.
 */
export const sampleCardSuccess = () => {
  let successCard = new EgCard("card-success");
  successCard.id = "success-card";

  return successCard;
};
