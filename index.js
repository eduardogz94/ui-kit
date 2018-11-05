const ccc = new CCC();

ccc.chargeScript("components/grid/eg-grid")
ccc.chargeScript("components/grid/eg-row")
ccc.chargeScript("components/grid/eg-col")
ccc.chargeScript("components/eg-form")
ccc.chargeScript("components/eg-button")
ccc.chargeScript("components/eg-input")
ccc.chargeScript("components/eg-card")
ccc.chargeScript("components/eg-alert")
ccc.chargeScript("components/eg-img")
ccc.chargeScript("utilities/fetch")

ccc.startLogger()
console.log(ccc.getComponents());