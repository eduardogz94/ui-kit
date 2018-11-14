/** Secondary Card */

/**
 * A function that creates a secondary card sample.
 */
const createCardSecondary = () => {
  let secondaryCard = new EgCard("card-secondary");
  secondaryCard.id = "secondary-card";
  secondaryCard.body = `This is a body passed as a string in javascript with a info button appened from the body <br><br>`;
  secondaryCard.footer = "Javascript card footer";

  return secondaryCard;
};
