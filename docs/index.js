/**
 * This is the script to start the frontend components and utilities
 */

const ccc = new CCC();

ccc.egUIKIT().catch(e => console.log(e));;

ccc.startLoggerAndApp("../libs/log4javascript", "../routes/eg-loader").catch(e => console.log(e));;

console.log(ccc.getComponents());
console.log(ccc.getFiles());

/**
 * You dont write any code in here, you must copy and paste into /public to use a different loader in a new html/js
 */
