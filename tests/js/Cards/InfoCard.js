/** Info Card */

/**
 * A function that creates info card object
 */
const createInfoCard = () => {
  let infoCard = new EgCard("card-info");
  infoCard.id = "info-card";
  infoCard.body =
    "This is a body passed as a string in javascript with a info button appened from the body <br><br>";
  infoCard.footer = "Javascript card footer";

  return infoCard;
};
