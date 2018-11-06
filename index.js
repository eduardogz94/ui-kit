/**
 * This is the script to start the frontend components and utilities
 */

const ccc = new CCC();

ccc.chargeLink("assets/css/elements");
ccc.chargeLink("assets/css/grid");
ccc.chargeLink("assets/css/mediaQueries");
ccc.chargeLink("assets/css/utilities");
ccc.chargeLink("assets/css/colors");
ccc.chargeLink("assets/css/animate");

ccc.chargeScript("components/grid/eg-grid");
ccc.chargeScript("components/grid/eg-row");
ccc.chargeScript("components/grid/eg-col");

ccc.chargeScript("components/eg-form");
ccc.chargeScript("components/eg-button");
ccc.chargeScript("components/eg-input");
ccc.chargeScript("components/eg-card");
ccc.chargeScript("components/eg-alert");
ccc.chargeScript("components/eg-img");

ccc.startLoggerAndApp("libs/log4javascript", "loaders/eg-loader");

console.log(ccc.getComponents());
console.log(ccc.getFiles());

/**
 * You dont write any code in here, you must copy and paste into /public to use a different loader in a new html/js
 */