/** Danger Card */

/**
 * A function that creates danger card object
 */
const createDangerCard = () => {
  let dangerCard = new EgCard("card-danger");
  dangerCard.id = "danger-card";
  dangerCard.footer = "Javascript card footer";

  return dangerCard;
};
