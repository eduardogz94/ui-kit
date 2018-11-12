const ccc = new CCC();

ccc.egUIKIT();

ccc
  .startLoggerAndApp("../libs/log4javascript", "../routes/sample-loader")
  .catch(e => console.log(e));

console.log(ccc.getComponents());
console.log(ccc.getFiles());
