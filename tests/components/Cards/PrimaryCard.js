/** Primary Card */

/**
 * A function that creates primary card object
 */
const createPrimaryCard = () => {
  let primaryCard = new EgCard("card-primary");
  primaryCard.id = "primary-card";
  primaryCard.body = "This is a body passed as a string in javascript";
  primaryCard.footer = "Javascript card footer";

  return primaryCard;
};
