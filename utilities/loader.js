const logger = log4javascript.getDefaultLogger();

// logger.trace('testing logger from loader.js')
// logger.debug('testing logger from loader.js')
// logger.info('testing logger from loader.js')
// logger.warn('testing logger from loader.js')
// logger.error('testing logger from loader.js')
// logger.fatal('testing logger from loader.js')

ccc.addScript('./renders/Login').then(response => {
    // console.info('added!')
}).catch(err => {
    console.error(err);
})

ccc.addScript('./renders/Signup').then(response => {
    // console.info('added!')
}).catch(err => {
    console.error(err);
})


