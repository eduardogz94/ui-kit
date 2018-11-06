const ccc = new CCC();

ccc.chargeLink("../assets/css/elements")
ccc.chargeLink("../assets/css/grid")
ccc.chargeLink("../assets/css/mediaQueries")
ccc.chargeLink("../assets/css/utilities")
ccc.chargeLink("../assets/css/colors")
ccc.chargeLink("../assets/css/animate")

ccc.chargeScript("../components/grid/eg-grid")
ccc.chargeScript("../components/grid/eg-row")
ccc.chargeScript("../components/grid/eg-col")

ccc.chargeScript("../components/eg-form")
ccc.chargeScript("../components/eg-button")
ccc.chargeScript("../components/eg-input")
ccc.chargeScript("../components/eg-card")
ccc.chargeScript("../components/eg-alert")
ccc.chargeScript("../components/eg-img")

console.log(ccc.getComponents());
console.log(ccc.getFiles())
