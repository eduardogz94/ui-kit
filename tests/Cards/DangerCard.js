import EgCard from "../../src/components/EgCard.js";

/** A function that creates the danger card sample.
 * @function
 * @returns {EgCard} With all the props inside function.
 */
export const sampleCardDanger = () => {
  let dangerCard = new EgCard("card-danger");
  dangerCard.id = "danger-card";
  dangerCard.footer = "Javascript card footer";

  return dangerCard;
};
