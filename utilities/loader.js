// const logger = log4javascript.getDefaultLogger();

// logger.trace('testing logger from loader.js')
// logger.debug('testing logger from loader.js')
// logger.info('testing logger from loader.js')
// logger.warn('testing logger from loader.js')
// logger.error('testing logger from loader.js')
// logger.fatal('testing logger from loader.js')


const Validate = new EgButton();
Validate.env = 'sky'
Validate.innerText = 'Sky'

const password = new EgInput();
password.placeholder = "Password JS"
password.env = 'sky'

const form = new EgForm();
form.env = 'sky'

form.addMultipleObjects(password, Validate)


const Test = new EgButton();
Test.innerText = 'Dark'
Test.env = 'dark'

const username = new EgInput();
username.env = 'dark'
username.placeholder = "Placing from JS"

const form1 = new EgForm()
form1.env = 'dark'

form1.addMultipleObjects(username,Test)

document.body.appendChild(form)
document.body.appendChild(form1)


// document.body.appendChild(username);
// document.body.appendChild(password);

// console.log('Added Input Components')

// Validate.id = 'JS';
// Validate.innerText = 'Validate Outsider JS';
// Validate.method = 'ScriptJS()'

// Test.callFromJs()


// logger.log('Added Buttons Components')

// const Form = new EgForm()
// Form.id = "Log"
// Form.method = "Loging(event)"

// document.body.appendChild(Form);

// Loging = event => {
// event.preventDefault()

// const values = Form.getInputValues();
// let username = values[0];
// let password = values [1];

// const options = {
//     username: username,
//     password: password,
//     objName: `${bobjects}SessionObject`,
//     metName: 'Validate',
//     params: arr,
//     typeParams: typeParams
// }

// fetching(options, 'POST', './Siva', response => {
// logger.log(response)
// })
// }

// const grid = new EgGrid()

// const row = new EgRow()

// const col = new EgCol()
// col.col = 'col-3'
// const input = new EgInput()

// const col1 = new EgCol()
// col1.col = 'col-6'
// const input1 = new EgInput()
// input.id = 'testing'
// input.innerText = 'test'
// input.placeholder = ' testng'

// const col2 = new EgCol()
// col2.col = 'col-3'
// const input2 = new EgInput()

// const col3 = new EgCol()
// col2.col = 'col-3'

// const col4 = new EgCol()
// col2.col = 'col-12'


// col.appendChild(input)

// col1.appendChild(input1)

// col2.appendChild(input2)

// row.addMultipleObjects(col,col1,col2,col3,col4)

// grid.appendChild(row)
// document.body.appendChild(grid)
      
        
  
