/** Secondary Card */

/**
 * A function that creates a secondary card sample.
 * @function
 * @returns {EgCard} With all the props inside function.
 */
const sampleCardSecondary = () => {
  let secondaryCard = new EgCard("card-secondary");
  secondaryCard.id = "secondary-card";
  secondaryCard.body = `This is a body passed as a string in javascript with a info button appened from the body <br><br>`;
  secondaryCard.footer = "Javascript card footer";

  return secondaryCard;
};
