const logger = log4javascript.getDefaultLogger();
const file = new log4javascript.FileAppender()
logger.addAppender(('logs/main.log'), 'main')
logger.trace('testing logger from loader.js')
logger.debug('testing logger from loader.js')
logger.info('testing logger from loader.js')
logger.warn('testing logger from loader.js')
logger.error('testing logger from loader.js')
logger.fatal('testing logger from loader.js')

ccc.addScript("Components/eg-input").then(response => {

    // const username = new EgInput();
    // username.id = "user";
    // username.innerText = 'Username';
    // username.placeholder = "Placing from JS"

    // const password = new EgInput();
    // password.id = "password";
    // password.innerText = 'Password';
    // password.placeholder = "Password JS"

    // document.body.appendChild(username);
    // document.body.appendChild(password);

    // console.log('Added Input Components')

}).catch(err => {
    logger.log(err)
})

// ccc.addScript("Components/eg-button").then(response => {

// 	const Validate = new EgButton();
// 	Validate.id = 'JS';
// 	Validate.innerText = 'Validate Outsider JS';
// 	Validate.method = 'ScriptJS()'
// 	document.body.appendChild(Validate);

// 	// const Test = new EgButton();
// 	// Test.callFromJs()

// 	// document.body.appendChild(Test);
	
// 	// logger.log('Added Buttons Components')

// }).catch(err => {
// 	logger.error(err)
// })

// addScript("Components/eg-form").then(response => {

// 	const Form = new EgForm()
// 	Form.id = "Log"
// 	Form.method = "Loging(event)"

// 	document.body.appendChild(Form);

// 	Loging = event => {
// 		event.preventDefault()
		
// 		const values = Form.getInputValues();
// 		let username = values[0];
// 		let password = values [1];

// 		const options = {
// 		    username: username,
// 		    password: password,
// 		    objName: `${bobjects}SessionObject`,
// 		    metName: 'Validate',
// 		    params: arr,
// 		    typeParams: typeParams
// 		}

// 		fetching(options, 'POST', './Siva', response => {
// 		    logger.log(response)
// 		})
// 	}

// }).catch(err => {
// 	logger.error(err)
// })




ccc.addScript("Components/Grid/eg-grid").then(response => {
    
    ccc.addScript("Components/Grid/eg-row").then(response => {
        
        ccc.addScript("Components/Grid/eg-col").then(response => {
            const grid = new EgGrid()
            const row = new EgRow()
            const col = new EgCol()
            col.col = 'col-3'

            const input = new EgInput()

            
            col.appendChild(input)
            row.appendChild(col)
            grid.appendChild(row)
            document.body.appendChild(grid)

        }).catch(err => {
            logger.error(err)
        })

    }).catch(err => {
        logger.error(err)
    })
    
}).catch(err => {
    logger.error(err)
})