// const logger = log4javascript.getDefaultLogger();

// logger.trace("testing logger from loader.js");
// logger.debug("testing logger from loader.js");
// logger.info("testing logger from loader.js");
// logger.warn("testing logger from loader.js");
// logger.error("testing logger from loader.js");
// logger.fatal("testing logger from loader.js");

ccc.chargeScript("../helpers/cards/index").catch(e => console.log(e));
// ccc.chargeScript("../helpers/index").catch(e => console.log(e));

ccc.chargeScript("../src/index").catch(e => console.log(e));
/** Cards tests/js folder wich represents public/js/cards */
ccc
  .chargeScript("../tests/components/Cards/InfoCard")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Cards/DangerCard")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Cards/DefaultCard")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Cards/SuccessCard")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Cards/PrimaryCard")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Cards/WarningCard")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Cards/SecondaryCard")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Cards/LoginCard")
  .catch(e => console.log(e));

/** Inputs tests/components folder wich represents public/components/inputs */
ccc
  .chargeScript("../tests/components/Inputs/BasicInputs")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Inputs/ValidationsInputs")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Inputs/SizingInputs")
  .catch(e => console.log(e));

/** Buttons tests/components folder wich represents public/components/buttons */
ccc
  .chargeScript("../tests/components/Buttons/ColorsButtons")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Buttons/OutlineColorsButtons")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Buttons/StylesButtons")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Buttons/SizesButtons")
  .catch(e => console.log(e));

/** Images tests/components folder wich represents public/components/buttons */
ccc
  .chargeScript("../tests/components/Images/RaisedImage")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Images/CircleImage")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Images/ThumbnailImage")
  .catch(e => console.log(e));
ccc
  .chargeScript("../tests/components/Images/RoundedImage")
  .catch(e => console.log(e));

/** Elements tests/views folder wich represents views/element */
ccc
  .chargeScript("../helpers/validations/samplesValidations")
  .catch(e => console.log(e));

ccc
  .chargeScript("../tests/views/Buttons/ButtonsView")
  .catch(e => console.log(e));
ccc.chargeScript("../tests/views/Cards/CardsView").catch(e => console.log(e));
ccc.chargeScript("../tests/views/Images/ImagesView").catch(e => console.log(e));
ccc.chargeScript("../tests/views/Inputs/InputsView").catch(e => console.log(e));
