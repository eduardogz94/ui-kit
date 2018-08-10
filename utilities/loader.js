const logger = log4javascript.getDefaultLogger();

// logger.trace('testing logger from loader.js')
// logger.debug('testing logger from loader.js')
// logger.info('testing logger from loader.js')
// logger.warn('testing logger from loader.js')
// logger.error('testing logger from loader.js')
// logger.fatal('testing logger from loader.js')

ccc.addScript('./renders/Login').then(response => {
    logger.info('added!')
}).catch(err => {
    logger.error(err);
})

ccc.addScript('./renders/Signup').then(response => {
    logger.info('added!')
}).catch(err => {
    logger.error(err);
})

ccc.addScript('./renders/Themes').then(response => {
    logger.info('added!')
}).catch(err => {
    logger.error(err);
})
