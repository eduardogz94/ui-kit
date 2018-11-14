/** Default Card */

/**
 * A function that creates the default card sample.
 */
const createCardDefault = () => {
  let darkCard = new EgCard("card-dark");
  darkCard.id = "dark-card";
  darkCard.body = "This is a body passed as a string in javascript";
  darkCard.footer = "Javascript card footer";
  darkCard.header = "Dark Title (Default Card Title Attributes)";

  return darkCard;
};
