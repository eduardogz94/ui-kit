/**
 * You start adding here!
 */
const ccc = new CCC().catch(e => console.log(e));

ccc.egUIKIT().catch(e => console.log(e));

/** Add your loaders where you load your renders script in here! */
ccc.startLoggerAndApp("../libs/log4javascript", "../routes/public-loader").catch(e => console.log(e));

/** End of your loaders! */

console.log(ccc.getComponents()).catch(e => console.log(e));
console.log(ccc.getFiles())
