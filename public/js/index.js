const ccc = new CCC();

const supportsCustomElements = "customElements" in window;

if (supportsCustomElements) {
  console.log("Browser supports custom elements");
  // You can safely use the Custom elements API
  ccc.egUIKIT().catch(e => console.log(e));
  ccc
    .startLoggerAndApp("../libs/log4javascript", "../routes/public-loader")
    .catch(e => console.log(e));

  console.log(ccc.getComponents());
  console.log(ccc.getFiles());
} else {
  alert("This browser doesnt support Custom Elements.");
}
