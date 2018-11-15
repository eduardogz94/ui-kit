/** Info Card */

/**
 * A function that creates the info card sample.
 * @function
 * @returns {EgCard} With all the props inside function.
 */
const sampleCardInfo = () => {
  let infoCard = new EgCard("card-info");
  infoCard.id = "info-card";
  infoCard.body =
    "This is a body passed as a string in javascript with a info button appened from the body <br><br>";
  infoCard.footer = "Javascript card footer";

  return infoCard;
};
