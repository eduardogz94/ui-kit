// const logger = log4javascript.getDefaultLogger();

// logger.trace("testing logger from loader.js");
// logger.debug("testing logger from loader.js");
// logger.info("testing logger from loader.js");
// logger.warn("testing logger from loader.js");
// logger.error("testing logger from loader.js");
// logger.fatal("testing logger from loader.js");

ccc.chargeScript("../src/helpers/cards/index")

/** Cards tests/js folder wich represents public/js/cards */
ccc.chargeScript("../tests/js/Cards/InfoCard")
ccc.chargeScript("../tests/js/Cards/DangerCard")
ccc.chargeScript("../tests/js/Cards/DefaultCard")
ccc.chargeScript("../tests/js/Cards/SuccessCard")
ccc.chargeScript("../tests/js/Cards/PrimaryCard")
ccc.chargeScript("../tests/js/Cards/WarningCard")
ccc.chargeScript("../tests/js/Cards/SecondaryCard")
ccc.chargeScript("../tests/js/Cards/LoginCard")

/** Inputs tests/js folder wich represents public/js/inputs */
ccc.chargeScript("../tests/js/Inputs/BasicInputs")
ccc.chargeScript("../tests/js/Inputs/ValidationsInputs")
ccc.chargeScript("../tests/js/Inputs/SizingInputs")

/** Buttons tests/js folder wich represents public/js/buttons */
ccc.chargeScript("../tests/js/Buttons/ColorsButtons")
ccc.chargeScript("../tests/js/Buttons/OutlineColorsButtons")
ccc.chargeScript("../tests/js/Buttons/StylesButtons")
ccc.chargeScript("../tests/js/Buttons/SizesButtons")

/** Elements tests/views folder wich represents views/element */
ccc.chargeScript("../tests/views/Buttons");
ccc.chargeScript("../tests/views/Cards");
ccc.chargeScript("../tests/views/Images");
ccc.chargeScript("../tests/views/Inputs");

ccc.chargeScript("../src/helpers/validations/samplesValidations");
