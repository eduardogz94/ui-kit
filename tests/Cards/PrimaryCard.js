import EgCard from "../../src/components/EgCard.js";

/**
 * A function that creates the primary card sample.
 * @function
 * @returns {EgCard} With all the props inside function.
 */
export const sampleCardPrimary = () => {
  let primaryCard = new EgCard("card-primary");
  primaryCard.id = "primary-card";
  primaryCard.body = "This is a body passed as a string in javascript";
  primaryCard.footer = "Javascript card footer";

  return primaryCard;
};
