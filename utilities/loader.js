// const logger = log4javascript.getDefaultLogger();

// logger.trace('testing logger from loader.js')
// logger.debug('testing logger from loader.js')
// logger.info('testing logger from loader.js')
// logger.warn('testing logger from loader.js')
// logger.error('testing logger from loader.js')
// logger.fatal('testing logger from loader.js')

// const SkyButton = new EgButton();
// SkyButton.innerText = 'SkyButton'
// SkyButton.env = 'sky'

// const SkyInput = new EgInput();
// SkyInput.env = 'sky'
// SkyInput.placeholder = "Sky Input JS"

// const SkyForm = new EgForm();
// SkyForm.env = 'sky'

// SkyForm.addMultipleObjects(SkyInput, SkyButton)
// document.body.appendChild(SkyForm)

// const DarkButton = new EgButton();
// DarkButton.innerText = 'DarkButton'
// DarkButton.env = 'dark'

// const DarkInput = new EgInput();
// DarkInput.env = 'dark'
// DarkInput.placeholder = "Dark Input JS"

// const DarkForm = new EgForm()
// DarkForm.env = 'dark'

// DarkForm.addMultipleObjects(DarkInput,DarkButton)
// document.body.appendChild(DarkForm)

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

const grid = new EgGrid()
const row = new EgRow()

const col = new EgCol()
col.col = 'col-12'

const username = new EgInput()
username.offset = 'offset-6'
username.placeholder = 'Input1 from js'

const password = new EgInput()
password.col = 'col-3'
password.id = 'password'
password.placeholder = 'Input2 from js'

const login = new EgButton()
login.innerText = 'Login'
login.col = 'col-6'
login.offset = 'offset-4'
login.method = ''

const LoginForm = new EgForm()
LoginForm.addMultipleObjects(username,password,login)

col.appendChild(LoginForm)
row.addMultipleObjects(col)

grid.appendChild(row)
document.body.appendChild(grid)


// const col1 = new EgCol()
// col1.col = 'col-6'
// const input1 = new EgInput()
// input1.col = 'col-3'
// input.id = 'input1'
// input1.placeholder = 'Input2 from js'

// const col2 = new EgCol()
// col2.col = 'col-3'
// const input2 = new EgInput()
// input2.placeholder = 'Input3 from js'

// const col3 = new EgCol()
// col3.col = 'col-3'
// const input3 = new EgInput()
// input3.placeholder = 'Input4 from js'

// const col4 = new EgCol()
// col4.col = 'col-9'
// const input4 = new EgInput()
// input4.placeholder = 'Input5 from js'

// col.appendChild(input)
// col1.appendChild(input1)
// col2.appendChild(input2)
// col3.appendChild(input3)
// col4.appendChild(input4)

      
        
  
