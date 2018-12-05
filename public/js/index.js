const ccc = new CCC();

const supportsCustomElements = "customElements" in window;

if (supportsCustomElements) {
  console.log("Browser supports custom elements");

  // You can safely use the Custom elements API
  ccc.egUIKIT().catch(e => console.log(e));
  ccc.chargeScript("../routes/public-loader");

  console.log(ccc.getComponents());
  console.log(ccc.getFiles());
} else {
  alert("This browser doesnt support Custom Elements.");
}
