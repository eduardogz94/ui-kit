const logger = log4javascript.getDefaultLogger();

/* </--------- START THEMES ---------/> */ 

const SkyButton = new EgButton();
SkyButton.innerText = 'SkyButton'
SkyButton.env = 'sky'

const SkyInput = new EgInput();
SkyInput.env = 'sky'
SkyInput.placeholder = "Sky Input JS"

const SkyForm = new EgForm();
SkyForm.env = 'sky'
SkyForm.addMultipleObjects(SkyInput, SkyButton)
document.body.appendChild(SkyForm)

const DarkButton = new EgButton();
DarkButton.innerText = 'DarkButton'
DarkButton.env = 'dark'

const DarkInput = new EgInput();
DarkInput.env = 'dark'
DarkInput.placeholder = "Dark Input JS"

const DarkForm = new EgForm()
DarkForm.env = 'dark'
DarkForm.addMultipleObjects(DarkInput,DarkButton)
document.body.appendChild(DarkForm)

const JungleButton = new EgButton();
JungleButton.innerText = 'JungleButton'
JungleButton.env = 'jungle'

const JungleInput = new EgInput();
JungleInput.env = 'jungle'
JungleInput.placeholder = "Jungle Input JS"

const JungleForm = new EgForm()
JungleForm.env = 'jungle'
JungleForm.addMultipleObjects(JungleInput, JungleButton)
document.body.appendChild(JungleForm)

const DefaultButton = new EgButton();
DefaultButton.innerText = 'DefaultButton'
DefaultButton.env = 'default'

const DefaultInput = new EgInput();
DefaultInput.env = 'default'
DefaultInput.placeholder = "Default Input JS"
const DefaultForm = new EgForm()
DefaultForm.env = 'default'

DefaultForm.addMultipleObjects(DefaultInput, DefaultButton)
document.body.appendChild(DefaultForm)


/* </-------------- END THEMES --------------/> */

/* </-------------- START GRID-ROW-COL ----------------/> */

const grid = new EgGrid()
const row = new EgRow()

const col = new EgCol()
col.col = 'col-12'

const username = new EgInput()
username.col = 'col-6'
username.offset = 'offset-3'
username.placeholder = 'Input1 from js'

const password = new EgInput()
password.col = 'col-6'
password.id = 'password'
password.offset = 'offset-3'
password.placeholder = 'Input2 from js'

const login = new EgButton()
login.innerText = 'Login'
login.col = 'col-6'
login.offset = 'offset-3'
login.method = 'Loging(event)'

const LoginForm = new EgForm()
LoginForm.addMultipleObjects(username,password,login)

col.appendChild(LoginForm)
row.addMultipleObjects(col)

grid.appendChild(row)
document.body.appendChild(grid)

/* </----------------- END GRID-ROW-COL --------------------/> */

/* </----------------- START FUNCTIONS FOR TESTING --------------------/> */
const bobjects = 'siva.bobjects.'

Loging = event => {
    event.preventDefault()
    let params = []
    let typeParams = []

    LoginForm.getInputValues().forEach(values => {
        if (values.filled === true) {
            params.push(values.value)
            typeParams.push(values.type)
            let size = LoginForm.getInputs()

            if (size.length === params.length) {
                const options = {
                    objName: `${bobjects}SessionObject`,
                    metName: 'Validate',
                    params: params,
                    typeParams: typeParams
                }
                console.info(options)    
            } else {
                console.error('inputs missing yet')
            }

        } else {
            console.error('all inputs are not filled')
        }
    });
}

/* </----------------- END FUNCTIONS FOR TESTING --------------------/> */

/* </--------------- START TESTING COLS ONLY -----------------/> */

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

/* </--------------- END TESTING COLS ONLY -----------------/> */
