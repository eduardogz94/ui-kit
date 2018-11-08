/**
 * You start adding here!
 */
const ccc = new CCC();

ccc.chargeLink("../src/assets/css/elements");
ccc.chargeLink("../src/assets/css/grid");
ccc.chargeLink("../src/assets/css/mediaQueries");
ccc.chargeLink("../src/assets/css/utilities");
ccc.chargeLink("../src/assets/css/colors");
ccc.chargeLink("../src/assets/css/animate");
ccc.chargeLink("../libs/fontawesome/css/fontawesome-all");
ccc.chargeLink("../libs/ionicons/css/ionicons");

ccc.chargeScript("../src/components/Grid/EgGrid");
ccc.chargeScript("../src/components/Grid/EgRow");
ccc.chargeScript("../src/components/Grid/EgCol");

ccc.chargeScript("../src/components/EgForm");
ccc.chargeScript("../src/components/EgButton");
ccc.chargeScript("../src/components/EgInput");
ccc.chargeScript("../src/components/EgCard");
ccc.chargeScript("../src/components/EgAlert");
ccc.chargeScript("../src/components/EgImage");

/** Add your loaders where you load your renders script in here! */
ccc.startLoggerAndApp("../libs/log4javascript", "../routes/public-loader");

/** End of your loaders! */

console.log(ccc.getComponents());
console.log(ccc.getFiles())